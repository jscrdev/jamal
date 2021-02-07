package javax0.jamal.test.examples;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.BadSyntaxAt;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.api.Processor;
import javax0.jamal.tools.InputHandler;

// snippet Array
public class Array implements Macro {
    @Override
    public String evaluate(Input in, Processor processor) throws BadSyntax {
        final var pos = in.getPosition();
        final String[] parts = InputHandler.getParts(in);
        if (parts.length < 2) {
            throw new BadSyntaxAt("Macro Array needs an index and at least one element", pos);
        }
        final int size = parts.length - 1;
        final int index;
        try {
            index = Integer.parseInt(parts[0]);
        } catch (NumberFormatException nfe) {
            throw new BadSyntaxAt("The index in Macro array '"
                + parts[0]
                + "' cannot be interpreted as an integer.", pos, nfe);
        }
        if (index < 0 || index >= parts.length - 1) {
            throw new BadSyntaxAt("The index in Macro array is '"
                + parts[0]
                + "' but it should be between "
                + (-size) + " and " + (size - 1) + ".", pos);
        }
        return parts[index + 1];
    }
}
// end snippet