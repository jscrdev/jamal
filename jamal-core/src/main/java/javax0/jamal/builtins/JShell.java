package javax0.jamal.builtins;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.api.Processor;

/**
 * Define a code snippet for the JShell engine.
 */
public class JShell implements Macro {

    @Override
    public String evaluate(Input input, Processor processor) throws BadSyntax {
        final var engine = processor.getJShellEngine();
        if (engine == null) {
            throw new BadSyntax("The processor could not load the JShell engine.");
        }
        engine.define(input.toString());

        return "";
    }

    @Override
    public String getId() {
        return "JShell";
    }
}

