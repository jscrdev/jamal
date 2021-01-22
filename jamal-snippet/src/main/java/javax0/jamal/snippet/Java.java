package javax0.jamal.snippet;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.BadSyntaxAt;
import javax0.jamal.api.InnerScopeDependent;
import javax0.jamal.api.Input;
import javax0.jamal.api.Macro;
import javax0.jamal.api.Processor;
import javax0.jamal.tools.InputHandler;
import javax0.jamal.tools.MacroReader;
import javax0.jamal.tools.PlaceHolder;

import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.Map.entry;

public class Java {

    public static class ClassMacro implements Macro, InnerScopeDependent {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var reader = MacroReader.macro(processor);
            final var format = reader.readValue("classFormat").orElse("$simpleName");
            InputHandler.skipWhiteSpaces(in);
            final var className = in.toString().trim();
            try {
                final var klass = Class.forName(className);
                return PlaceHolder.replace(format, Map.of(
                    // snippet classFormats
                    "$simpleName", klass.getSimpleName(),
                    "$name", klass.getName(),
                    "$canonicalName", klass.getCanonicalName(),
                    "$packageName", klass.getPackageName(),
                    "$typeName", klass.getTypeName()
                    // end snippet
                ));
            } catch (ClassNotFoundException e) {
                throw new BadSyntaxAt("The class '" + className + "' cannot be found on the classpath in the macro '" + getId() + "'.", in.getPosition());
            }
        }

        @Override
        public String getId() {
            return "java:class";
        }
    }

    public static class MethodMacro implements Macro, InnerScopeDependent {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            final var reader = MacroReader.macro(processor);
            final var format = reader.readValue("methodFormat").orElse("$name");
            final var parts = InputHandler.getParts(in, 2);
            if (parts.length < 2) {
                throw new BadSyntaxAt("Macro '" + getId() + "' needs exactly two arguments and got " + parts.length + " from '" + in.toString() + "'", in.getPosition());
            }
            final var className = parts[0];
            final var methodName = parts[1];
            final Class klass;
            try {
                klass = Class.forName(className);
            } catch (ClassNotFoundException e) {
                throw new BadSyntaxAt("The class '" + className + "' cannot be found on the classpath in the macro '" + getId() + "'.", in.getPosition());
            }

            final var method = Arrays.stream(klass.getDeclaredMethods()).filter(m -> m.getName().equals(methodName)).findAny().orElseThrow(
                () -> new BadSyntaxAt("The method '" + methodName + "' cannot be found in the class '" + className + "' in the macro '" + getId() + "'.", in.getPosition())
            );
            return PlaceHolder.replace(format, Map.ofEntries(
                // OTMDC -> of the method's defining class
                // OTM -> of the method
                // snippet methodFormats
                entry("$classSimpleName", klass.getSimpleName()), // simple name OTMDC
                entry("$className", klass.getName()), // name of the OTMDC
                entry("$classCanonicalName", klass.getCanonicalName()),// canonical name OTMDC
                entry("$classTypeName", klass.getTypeName()), // type name OTMC
                entry("$packageName", klass.getPackageName()), // package where the method is
                entry("$name", method.getName()), // name OTM
                entry("$typeClass", method.getReturnType().getName()), // return type OTM
                entry("$exceptions", Arrays.stream(method.getExceptionTypes()).map(Class::getName).collect(Collectors.joining(","))), // comma separated values of the exception types the method throws
                entry("$parameterTypes", Arrays.stream(method.getParameterTypes()).map(Class::getName).collect(Collectors.joining(","))),// comma separated parameter types
                entry("$parameterCount", "" + method.getParameterCount()), // number of the parameters in decimal format
                entry("$modifiers", Modifier.toString(method.getModifiers())) // modifiers list of the method
                // end snippet
            ));
        }

        @Override
        public String getId() {
            return "java:method";
        }
    }
}
