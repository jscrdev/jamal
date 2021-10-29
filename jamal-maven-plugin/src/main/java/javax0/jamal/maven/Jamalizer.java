package javax0.jamal.maven;

import javax0.jamal.api.Processor;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.nio.file.StandardOpenOption;
import java.util.stream.Collectors;

class Jamalizer {
    void jamalize() throws IOException {
        for (final Path pp : Files.walk(Path.of(".")).filter(this::isProjectDir).collect(Collectors.toList())) {
            renameAndCreate(pp);
        }
    }

    final static String[] fileNames = {"pom.xml", "pom.xml.jam", "pom.jam"};

    /**
     *
     * @param p the directory
     * @return true if {@code p} is a directory and is a project directory.
     * More specifically if it has a file named {@code pom.xml}, {@code pom.xml.jam} or {@code pom.jam}
     */
    private boolean isProjectDir(Path p) {
        if (p.toFile().isDirectory()) {
            final var fn = p.toFile().getAbsolutePath();
            for (final var s : fileNames) {
                if (Files.exists(Paths.get(fn, s))) {
                    return true;
                }
            }
            return false;
        } else {
            return false;
        }
    }

    private void renameAndCreate(Path p) throws IOException {
        final Path newDir = createMvnDir(p);
        writeExtensionsFile(newDir);
        createNewPomJam(p);
    }

    /**
     * If neither {@code pom.xml.jam}, nor {@code pom.jam} exists in the directory then create a new {@code pom.jam}
     * copying the existing {@code pom.xml} to {@code pom.jam}.
     * @param p the project directory
     * @throws IOException
     */
    private void createNewPomJam(Path p) throws IOException {
        final var pom = Paths.get(p.toString(), "pom.xml");
        final var newPom = Paths.get(p.toString(), "pom.jam");
        final var newPomPom = Paths.get(p.toString(), "pom.xml.jam");
        if ( Files.exists(pom) && !Files.exists(newPom) && !Files.exists(newPomPom)) {
            Files.copy(pom, newPom, StandardCopyOption.COPY_ATTRIBUTES);
        }
    }

    /**
     * Create the {@code extensions.xml} file in the new {@code .mvn} directory.
     * @param p the {@code .mvn} directory where the new file will be created
     *
     * @throws IOException
     */
    private void writeExtensionsFile(Path p) throws IOException {
        final var extensionsFile = Paths.get(p.toString(), "extensions.xml");
        Files.write(extensionsFile, ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<extensions>\n" +
                "    <extension>\n" +
                "        <groupId>com.javax0.jamal</groupId>\n" +
                "        <artifactId>jamal-maven-extension</artifactId>\n" +
                "        <version>" +
                Processor.jamalVersion()
                + "</version>\n" +
                "    </extension>\n" +
                "</extensions>\n").getBytes(StandardCharsets.UTF_8),
            StandardOpenOption.WRITE, StandardOpenOption.TRUNCATE_EXISTING, StandardOpenOption.CREATE);
    }

    /**
     * Create the {@code .mvn} directory if it is not there yet
     * @param p the project directory
     * @return the new directory, or the one that already existed
     * @throws IOException
     */
    private Path createMvnDir(Path p) throws IOException {
        final var newDir = Paths.get(p.toString(), ".mvn");
        if (!Files.exists(newDir)) {
            Files.createDirectory(newDir);
        }
        return newDir;
    }
}
