package com.javax0.jamal.maven;

import javax0.jamal.api.Position;
import javax0.jamal.engine.Processor;
import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;
import org.slf4j.Logger;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.function.Predicate;
import java.util.regex.Pattern;

/**
 * process all the files using jamal
 */
@Mojo(name = "jamal", requiresProject = false, defaultPhase = LifecyclePhase.GENERATE_SOURCES)
public class JamalMojo extends AbstractMojo {

    //<editor-fold desc="Configuration parameters" >
    @Parameter(property = "jamal.open", defaultValue = "{%")
    private String open;

    @Parameter(property = "jamal.close", defaultValue = "%}")
    private String close;

    @Parameter(property = "jamal.include", defaultValue = ".*\\.jam$")
    private String include;

    @Parameter(property = "jamal.exclude", defaultValue = ".*(?:pom|extensions)\\.jam$")
    private String exclude;

    @Parameter(property = "jamal.source", defaultValue = "${basedir}", readonly = true)
    private String source;

    @Parameter(property = "jamal.transform", defaultValue = "/\\.jam$//")
    private String transform;

    @Parameter(property = "jamal.pass", defaultValue = "false")
    private String pass;

    private boolean passBool;

    //</editor-fold>

    private boolean processingSuccessful;

    private NameTransformer transformer;

    private final Logger log = org.slf4j.LoggerFactory.getLogger("jamal");

    @Override
    public void execute() throws MojoExecutionException {
        log.info("Jamal processing started in " + source + " with include pattern " + include + " and exclude pattern " + exclude);
        passBool = Boolean.parseBoolean(pass);
        source = Paths.get(source).normalize().toAbsolutePath().toString();
        logParameters();
        transformer = new NameTransformer(transform);
        final var includePredicate = getPathPredicate(include);
        final var excludePredicate = getPathPredicate(exclude).negate();
        processingSuccessful = true;
        try (final var files = Files.walk(Paths.get(source))) {
            files.filter(Files::isRegularFile)
                    .filter(includePredicate)
                    .filter(excludePredicate)
                    .forEach(this::executeJamal);
        } catch (IOException e) {
            throw new MojoExecutionException("Exception during processing Jamal sources.", e);
        }

        if (!processingSuccessful && !passBool) {
            throw new MojoExecutionException("There was an error processing Jamal files.");
        }
    }

    private void executeJamal(final Path inputPath) {

        try {
            final var output = transformer.transform(inputPath);
            log.info(String.format(":: '%s' -> '%s'", inputPath, output));
            final String result;
            try (final var processor = new Processor(open, close)) {
                processor.setLogger(JamalLogger::log);
                // snippet createInput
                result = processor.process(
                        new javax0.jamal.tools.Input(
                                Files.readString(inputPath, StandardCharsets.UTF_8),
                                new Position(inputPath.toString(), 1)));
                // end snippet
            }
            writeOutput(output, result);
        } catch (Exception e) {
            logException(e);
            processingSuccessful = false;
        }
    }

    private void writeOutput(Path output, String result) throws IOException {
        try {
            Files.createDirectories(output.getParent());
        } catch (Exception e) {
            logException(e);
            processingSuccessful = false;
        }
        Files.write(output, result.getBytes(StandardCharsets.UTF_8),
                StandardOpenOption.WRITE,
                StandardOpenOption.TRUNCATE_EXISTING,
                StandardOpenOption.CREATE);
    }

    private void logException(Exception e) {
        var sw = new StringWriter();
        var out = new PrintWriter(sw);
        e.printStackTrace(out);
        Arrays.stream(sw.toString().split("\n")).forEach(log::error);
    }

    /**
     * Create a predicate that will match the file names that are to be processed.
     * If the regular expression is null or empty, then the returned predicate will match nothing.
     *
     * @param regex the regular expression that will be used to match the file names
     * @return the predicate that will match the file names
     */
    private Predicate<Path> getPathPredicate(final String regex) {
        final Predicate<Path> includePredicate;
        if (regex != null && regex.length() > 0) {
            Pattern pattern = Pattern.compile(regex);
            includePredicate = p -> pattern.matcher(p.toString()).matches();
        } else {
            includePredicate = p -> false;
        }
        return includePredicate;
    }

    private void logParameters() {
        log.info("    open      = " + open);
        log.info("    close     = " + close);
        log.info("    transform = " + transform);
        log.info("    pass      = " + passBool);
    }
}
