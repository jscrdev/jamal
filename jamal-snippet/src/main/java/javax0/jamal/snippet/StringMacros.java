package javax0.jamal.snippet;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.InnerScopeDependent;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.api.Processor;
import javax0.jamal.tools.InputHandler;
import javax0.jamal.tools.Scanner;

import java.util.function.BiPredicate;
import java.util.regex.Pattern;

public class StringMacros {

    public static class Contains implements Macro, InnerScopeDependent, Scanner {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var scanner = newScanner(in, processor);
            final var regex = scanner.bool(null, "regex");
            final var text = scanner.str(null, "text", "string");
            scanner.done();
            if (regex.is()) {
                return "" + Pattern.compile(text.get()).matcher(in.toString()).find();
            } else {
                return "" + in.toString().contains(text.get());
            }
        }

        @Override
        public String getId() {
            return "string:contains";
        }
    }

    public static class Quote implements Macro, InnerScopeDependent {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            String[] parts = InputHandler.getParts(in, processor,1);
            BadSyntax.when(parts.length != 1, "The string:quote macro expects exactly one argument");
            return parts[0]
                    .replace("\\", "\\\\")
                    .replace("\t", "\\t")
                    .replace("\b", "\\b")
                    .replace("\n", "\\n")
                    .replace("\r", "\\r")
                    .replace("\f", "\\f")
                    .replace("\"", "\\\"");
        }

        @Override
        public String getId() {
            return "string:quote";
        }
    }

    private static abstract class XWith implements Macro, InnerScopeDependent {
        private final BiPredicate<String, String> with;

        protected XWith(BiPredicate<String, String> with) {
            this.with = with;
        }

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            String[] parts = InputHandler.getParts(in, processor,2);
            BadSyntax.when(parts.length != 2, "%s needs two parts", getId());
            return "" + with.test(parts[0], parts[1]);
        }
    }

    public static class StartsWith extends XWith {
        public StartsWith() {
            super(String::startsWith);
        }

        @Override
        public String getId() {
            return "string:startsWith";
        }

    }

    public static class EndsWith extends XWith {
        public EndsWith() {
            super(String::endsWith);
        }

        @Override
        public String getId() {
            return "string:endsWith";
        }

    }

    public static class Equals implements Macro, InnerScopeDependent, Scanner {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var scanner = newScanner(in, processor);
            final var ignoreCase = scanner.bool("ignoreCase");
            scanner.done();
            String[] parts = InputHandler.getParts(in, processor,2);
            BadSyntax.when(parts.length != 2, "%s needs two parts", getId());
            return "" + (ignoreCase.is() ? parts[0].equalsIgnoreCase(parts[1]) : parts[0].equals(parts[1]));
        }

        @Override
        public String getId() {
            return "string:equals";
        }
    }

    public static class Reverse implements Macro, InnerScopeDependent {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            String[] parts = InputHandler.getParts(in, processor,1);
            BadSyntax.when(parts.length != 1, "The string:reverse macro expects exactly one argument");
            return new StringBuilder(parts[0]).reverse().toString();
        }

        @Override
        public String getId() {
            return "string:reverse";
        }
    }

    public static class Chop implements Macro, Scanner {

        @Override
        public String evaluate(final Input in, final Processor processor) throws BadSyntax {
            final var scanner = newScanner(in, processor);
            final var prefix = scanner.str(null, "prefix", "pre", "start");
            final var postfix = scanner.str(null, "postfix", "post", "end");
            final var ignore = scanner.bool(null, "ignorecase", "ignoreCase");
            scanner.done();
            var result = in.toString();
            if (prefix.isPresent() && (ignore.is() ? result.toLowerCase().startsWith(prefix.get().toLowerCase()) : result.startsWith(prefix.get()))) {
                result = result.substring(prefix.get().length());
            }
            if (postfix.isPresent() && (ignore.is() ? result.toLowerCase().endsWith(postfix.get().toLowerCase()) : result.endsWith(postfix.get()))) {
                result = result.substring(0, result.length() - postfix.get().length());
            }
            return result;
        }

        @Override
        public String getId() {
            return "string:chop";
        }
    }

    public static class Substring implements Macro, InnerScopeDependent, Scanner {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var scanner = newScanner(in,processor);
            final var begin = scanner.number(null, "begin").defaultValue(0);
            final var end = scanner.number(null, "end");
            scanner.done();
            String[] parts = InputHandler.getParts(in, processor,1);
            BadSyntax.when(parts.length != 1, "The string:substring macro expects exactly one argument");
            final var beginIndex = begin.get() < 0 ? in.length() + begin.get() : begin.get();
            final var endIndex = end.isPresent() ? (end.get() < 0 ? in.length() + end.get() : end.get()) : in.length();
            return parts[0].substring(beginIndex, endIndex);
        }

        @Override
        public String getId() {
            return "string:substring";
        }
    }

    public static class Length implements Macro, InnerScopeDependent, Scanner {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var scanner = newScanner(in,processor);
            final var trim = scanner.bool(null, "trim");
            final var left = scanner.bool(null, "left");
            final var right = scanner.bool(null, "right");
            scanner.done();
            BadSyntax.when((left.is() || right.is()) && !trim.is(), "You cannot use 'left' or 'right' on 'string:length' without trim");
            var string = in.toString();
            if (trim.is()) {
                if (left.is() == right.is()) {
                    string = string.trim();
                } else if (left.is()) {
                    string = string.stripLeading();
                } else {
                    string = string.stripTrailing();
                }
            }
            return "" + string.length();
        }

        @Override
        public String getId() {
            return "string:length";
        }
    }

}
