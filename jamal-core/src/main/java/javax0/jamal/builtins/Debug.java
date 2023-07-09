package javax0.jamal.builtins;

import javax0.jamal.api.*;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.tools.*;

import java.util.List;

/**
 * This macro sets and switches on and off the debugger.
 * It only works if a debugger is available and no debugger is configured globally.
 */
public class Debug implements Macro, OptionsControlled.Core, Scanner.Core {
    final static List<Debugger> DEBUGGERS = Debugger.getInstances();

    @Override
    public String evaluate(final Input in, final Processor processor) throws BadSyntax {
        final var scanner = newScanner(in, processor);
        final Params.Param<Boolean> on = scanner.bool(null, "on");
        final Params.Param<Boolean> off = scanner.bool(null, "off");
        final Params.Param<Boolean> noDebug = scanner.bool("noDebug");
        final Params.Param<Boolean> lenient = scanner.bool("lenient");
        final Params.Param<String> selector = scanner.str(null, "using", "debugger", "selector");
        scanner.done();

        BadSyntax.when(on.is() && off.is(), "The 'on' and 'off' parameters cannot be used together.");

        final var proxyOpt = processor.getDebugger().filter(p -> p instanceof ProxyDebugger);
        final ProxyDebugger proxy;
        if (proxyOpt.isPresent()) {
            proxy = (ProxyDebugger) proxyOpt.get();
        } else if (!lenient.is()) {
            throw new BadSyntax("The debugger is configured globally and cannot be changed.");
        } else {
            return "";
        }
        if (selector.isPresent()) {
            final var debugger = MinimumAffinityDebuggerSelector.select(DEBUGGERS, selector.get());
            try {
                if (processor.getDebuggerStub().isPresent()) {
                    debugger.init(processor.getDebuggerStub().get());
                } else {
                    throw new BadSyntax("This processor does not support debugging");
                }
            } catch (Exception e) {
                throw new BadSyntax("There was an error calling the debugger initializer", e);
            }
            proxy.setDebugger(debugger);
            return "";
        }
        if (on.is() && !noDebug.is()) {
            proxy.on();

        }
        if (off.is()) {
            proxy.off();
        }
        return "";
    }
}
