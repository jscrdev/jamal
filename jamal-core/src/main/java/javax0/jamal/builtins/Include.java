package javax0.jamal.builtins;

import javax0.jamal.api.*;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.tools.*;
import javax0.jamal.tools.Marker;

import static javax0.jamal.api.SpecialCharacters.IMPORT_CLOSE;
import static javax0.jamal.api.SpecialCharacters.IMPORT_OPEN;
import static javax0.jamal.api.SpecialCharacters.IMPORT_SHEBANG1;
import static javax0.jamal.api.SpecialCharacters.IMPORT_SHEBANG2;
import static javax0.jamal.tools.FileTools.absolute;
import static javax0.jamal.tools.FileTools.getInput;
import static javax0.jamal.tools.InputHandler.skipWhiteSpaces;

@Macro.Stateful
public class Include implements Macro, OptionsControlled.Core, Scanner.Core {
    /**
     * Count the depth of the includes. In case this is more than 100 stop the processing. Most likely this is a wrong
     * recursive include that would cause stack overflow.
     */
    private int depth = getDepth();

    private static final String DEFAULT_DEPTH = "100";

    private static int getDepth() {
        final String limitString = EnvironmentVariables.getenv(EnvironmentVariables.JAMAL_INCLUDE_DEPTH_ENV).orElse(DEFAULT_DEPTH);
        try {
            return Integer.parseInt(limitString);
        } catch (NumberFormatException nfe) {
            throw new RuntimeException(new BadSyntax("The environment variable " + EnvironmentVariables.JAMAL_INCLUDE_DEPTH_ENV + " should be an integer"));
        }
    }

    @Override
    public String evaluate(Input input, Processor processor) throws BadSyntax {
        var position = input.getPosition();
        final var scanner = newScanner(input,processor);
        final var top = scanner.bool(null, "top");
        final var verbatim = scanner.bool("includeVerbatim", "verbatim");
        final var lines = scanner.str(null, "lines");
        final var noCache = scanner.bool(null, "noCache");
        scanner.done();
        position = repositionToTop(position, top);

        skipWhiteSpaces(input);
        var reference = position.file;
        var fileName = absolute(reference, input.toString().trim());
        if (depth-- == 0) {
            depth = getDepth(); // try macro may recover
            throw new BadSyntax("Include depth is too deep");
        }
        final String result;
        final var in = getInput(fileName, position, noCache.is(), processor);
        final var weArePseudoDefault = processor.getRegister().open().equals("{") && processor.getRegister().close().equals("}");
        final var useDefaultSeparators = in.length() > 1 && in.charAt(0) == IMPORT_SHEBANG1 && in.charAt(1) == IMPORT_SHEBANG2 && !weArePseudoDefault;
        if (lines.isPresent()) {
            Range.Lines.filter(in.getSB(), lines.get());
        }
        if (verbatim.get()) {
            result = in.toString();
        } else {
            var marker = new Marker("{@include " + fileName + "}", position);
            processor.getRegister().push(marker);
            if (useDefaultSeparators) {
                processor.separators(IMPORT_OPEN, IMPORT_CLOSE);
                result = processor.process(in);
                processor.separators(null, null);
            } else {
                result = processor.process(in);
            }
            processor.getRegister().pop(marker);
        }
        depth++;
        return result;
    }


    /**
     * Get the position of the 'include' from the input. When the 'top' parameter is true the position is the position
     * of the root document even if the include macro is used several level deeper in included documents.
     *
     * @param position the position of the include macro from which we calculate the top file position
     * @param top      flag to signal if we need to include from the top
     * @return the effective position used to calculate the file location of the included file when specified as a
     * relative file name
     * @throws BadSyntax if 'top' is erroneous and querying it throws exception
     */
    private Position repositionToTop(Position position, final Params.Param<Boolean> top) throws BadSyntax {
        if (top.is()) {
            while (position.parent != null) {
                position = position.parent;
            }
        }
        return position;
    }
}
