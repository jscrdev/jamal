package javax0.jamal.builtins;

import javax0.jamal.api.Macro;
import javax0.jamal.api.*;
import javax0.jamal.tools.InputHandler;
import javax0.jamal.tools.Params;
import javax0.jamal.tools.Scan;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

/**
 * Define the {@code if} conditional macro. The syntax of the macro is
 *
 * <pre>
 *     {#if/test/then content/else content}
 * </pre>
 * <p>
 * The result of the evaluated macro will be the {@code then content} when the {@code test} is true and the {@code else}
 * content otherwise. The {@code test} is true, if it is the literal {@code "true"} (case insensitive), an integer
 * number and the value is not zero or any other string that contains at least one non-space character, except when the
 * {@code test} is the literal {@code "false"} (case insensitive) then the test is false.
 * <p>
 * The syntax depicted above using the {@code /} character as separator. It is only convention. Any non-space character
 * can be used as separator. The first non-space character following the {@code if} will be used as separator
 * character.
 */
public class If implements Macro, OptionsControlled.Core {

    private static class Options {
        // snippet if_options
        final Params.Param<Boolean> empty = Params.<Boolean>holder("empty").asBoolean();
        final Params.Param<Boolean> blank = Params.<Boolean>holder("blank").asBoolean();
        final Params.Param<Boolean> not = Params.<Boolean>holder("not").asBoolean();
        final Params.Param<Boolean> and = Params.<Boolean>holder("and").asBoolean();
        final Params.Param<Boolean> or = Params.<Boolean>holder("or").asBoolean();
        final Params.Param<Boolean> isDefined = Params.<Boolean>holder("isDefined", "defined").asBoolean();
        final Params.Param<Boolean> isGlobal = Params.<Boolean>holder("isGlobal", "global").asBoolean();
        final Params.Param<Boolean> isLocal = Params.<Boolean>holder("isLocal", "local").asBoolean();
        final Params.Param<List<String>> lessThan = Params.<String>holder("lessThan", "less", "smaller", "smallerThan").asList(String.class);
        final Params.Param<List<String>> greaterThan = Params.<String>holder("greaterThan", "greater", "bigger", "biggerThan", "larger", "largerThan").asList(String.class);
        final Params.Param<List<String>> equals = Params.<String>holder("equals", "equal", "equalsTo", "equalTo").asList(String.class);
        // end snippet
        private final List<Params.Param<List<String>>> numericOptions = List.of(lessThan, greaterThan, equals);

        /**
         * Check that the options are used in a consistent manner and the user is not using options together which
         * should not be used together.
         *
         * @throws BadSyntax if the options are used in an inconsistent way
         */
        void assertConsistency() throws BadSyntax {
            BadSyntax.when((isDefined.is() || isGlobal.is() || isLocal.is()) && (blank.is() || empty.is() || countNumOptionsPresent() > 0), "'blank' or 'empty' cannot be used together with 'isDefined', 'isLocal', or 'isGlobal' or with numeric checks");
            BadSyntax.when(and.is() && or.is(), "You cannot have both 'and' and 'or' options in an 'if' macro.");
            BadSyntax.when((and.is() || or.is()) && countNumOptionsPresent() < 2, "You cannot have 'and' or 'or' options without multiple numeric options in an 'if' macro.");
            BadSyntax.when(blank.is() && empty.is(), "You cannot have both 'blank' and 'empty' options in an 'if' macro.");
            BadSyntax.when((empty.is() || blank.is()) && numericOptionsPresent().stream().anyMatch(Boolean.TRUE::equals), "You cannot have 'empty' or 'blank' options in an 'if' macro with numeric options.");
        }

        Params.Param<?>[] options() {
            return new Params.Param[]{empty, blank, not, and, or, lessThan, greaterThan, equals, isDefined, isGlobal, isLocal};
        }

        List<Boolean> numericOptionsPresent() throws BadSyntax {
            List<Boolean> list = new ArrayList<>();
            for (Params.Param<List<String>> numericOption : numericOptions) {
                list.add(numericOption.isPresent());
            }
            return list;
        }

        long countNumOptionsPresent() throws BadSyntax {
            int counter = 0;
            for (final var param : numericOptions) {
                if (param.isPresent()) {
                    counter += param.get().size();
                }
            }
            return counter;
        }
    }

    @Override
    public String evaluate(Input input, Processor processor) throws BadSyntax {
        final var pos = input.getPosition();
        final var opt = new Options();
        Scan.using(processor).from(this).between("[]").keys(opt.options()).parse(input);
        opt.assertConsistency();
        final var parts = InputHandler.getParts(input, 3);
        BadSyntaxAt.when(parts.length < 1, "Macro 'if' needs 1, 2 or 3 arguments", pos);

        if (opt.not.is() != isTrue(processor, parts[0], opt)) {
            return parts.length > 1 ? parts[1] : "";
        } else {
            return parts.length > 2 ? parts[2] : "";
        }
    }

    private static boolean compare(List<String> number, boolean and, Predicate<String> p) {
        if (and) {
            return number.stream().allMatch(p);
        } else {
            return number.stream().anyMatch(p);
        }
    }

    /**
     *  b is less than a
     * @param a the first number
     * @param b the second number
     * @return true if b is less than a
     */
    private static boolean lt(final String a, final String b) {
        try {
            return Integer.parseInt(a) > Integer.parseInt(b);
        } catch (NumberFormatException nfe) {
            return a.compareTo(b) > 0;
        }
    }

    private static boolean gt(final String a, final String b) {
        try {
            return Integer.parseInt(a) < Integer.parseInt(b);
        } catch (NumberFormatException nfe) {
            return a.compareTo(b) < 0;
        }
    }
    private static boolean eq(final String a, final String b) {
        try {
            return Integer.parseInt(a) == Integer.parseInt(b);
        } catch (NumberFormatException nfe) {
            return a.compareTo(b) == 0;
        }
    }

    private static boolean isTrue(final Processor processor,
                                  final String test,
                                  final Options opt) throws BadSyntax {
        if (opt.countNumOptionsPresent() > 0) {
            if (opt.and.is()) {
                return (!opt.lessThan.isPresent() || compare(opt.lessThan.get(), true, n -> lt(n,test)))
                        && (!opt.greaterThan.isPresent() || compare(opt.greaterThan.get(), true, n -> gt(n,test)))
                        && (!opt.equals.isPresent() || compare(opt.equals.get(), true, n -> eq(n,test)))
                        ;
            } else {
                return (opt.lessThan.isPresent() && compare(opt.lessThan.get(), false, n -> lt(n,test)))
                        || (opt.greaterThan.isPresent() && compare(opt.greaterThan.get(), false, n -> gt(n,test)))
                        || (opt.equals.isPresent() && compare(opt.equals.get(), false, n -> eq(n,test)))
                        ;
            }
        }
        if (opt.isLocal.is()) {
            return processor.getRegister().getUdMacroLocal(test).isPresent();
        } else if (opt.isGlobal.is()) {
            final String globalName;
            if (InputHandler.isGlobalMacro(test)) {
                globalName = test;
            } else {
                globalName = ":" + test;
            }
            return processor.getRegister().getUserDefined(globalName).isPresent();
        } else if (opt.isDefined.is()) {
            return processor.getRegister().getUserDefined(test).isPresent();
        }

        if (opt.blank.is()) {
            return test.trim().length() == 0;
        }
        if (opt.empty.is()) {
            return test.length() == 0;
        }
        if (test.trim().equalsIgnoreCase("true")) {
            return true;
        }
        if (test.trim().equalsIgnoreCase("false")) {
            return false;
        }
        if (test.trim().matches("[+-]?\\d+")) {
            return Integer.parseInt(test) != 0;
        }
        return test.trim().length() > 0;
    }

}
