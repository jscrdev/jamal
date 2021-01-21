package javax0.jamal.snippet;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.InnerScopeDependent;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.api.Processor;
import javax0.jamal.tools.MacroReader;

import java.util.Arrays;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static javax0.jamal.snippet.SkipLines.needsNoExtraNl;
import static javax0.jamal.tools.InputHandler.skipWhiteSpaces2EOL;

public class KillLines implements Macro, InnerScopeDependent {
    @Override
    public String evaluate(Input in, Processor processor) throws BadSyntax {
        final var reader = MacroReader.macro(processor);
        final var pattern = Pattern.compile(reader.readValue("pattern").orElse("^\\s*$"));
        skipWhiteSpaces2EOL(in);
        final var lines = in.toString().split("\n", -1);
        int from = 0;
        int to = 0;
        boolean lastLineCopied = false;
        while (from < lines.length) {
            if (!pattern.matcher(lines[from]).find()) {
                lines[to] = lines[from];
                lastLineCopied = from == lines.length-1;
                to++;
            }
            from++;
        }
        final var joined = Arrays.stream(lines).limit(to).collect(Collectors.joining("\n"));
        if (needsNoExtraNl(in,lastLineCopied,joined)) {
            return joined;
        } else {
            return joined + "\n";
        }
    }

    @Override
    public String getId() {
        return "killLines";
    }
}
