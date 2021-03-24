package javax0.jamal.testsupport;

import javax0.jamal.api.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.opentest4j.AssertionFailedError;

import java.lang.reflect.InvocationTargetException;

public class TestThatTest {

    @Test
    @DisplayName("forMacro returns a TestThat instance")
    void testConstructrs() {
        Assertions.assertEquals(TestThat.class, TestThat.theMacro(Macro.class).getClass());
    }

    @Test
    @DisplayName("TestThat asserts the result OK")
    void testResultOK() throws Exception {
        TestThat.theMacro(TestingMacro.class).fromTheInput("").results(null);
    }

    @Test
    @DisplayName("TestThat asserts fails when output does not match")
    void testResultFailure() {
        Assertions.assertThrows(AssertionFailedError.class,
                () -> TestThat.theMacro(TestingMacro.class).fromTheInput("").results(""));
    }

    @Test
    @DisplayName("TestThat tests macro throwing exception")
    void testThrowingMacro() throws
        InvocationTargetException,
        NoSuchMethodException,
        InstantiationException,
        IllegalAccessException, BadSyntax {
        TestThat.theMacro(TestingThrowingMacro.class).fromTheInput("").throwsUp(BadSyntax.class);
    }

    @Test
    @DisplayName("TestThat tests macro checks BadSyntaxAt properly")
    void testBadSyntaxMacro() throws
        InvocationTargetException,
        NoSuchMethodException,
        InstantiationException,
        IllegalAccessException, BadSyntax {
        TestThat.theMacro(TestingThrowingMacro.class).fromTheInput("").throwsBadSyntax();
    }

    private static class TestingMacro implements Macro {

        @Override
        public String evaluate(Input in, Processor processor) {
            return null;
        }
    }

    private static class TestingThrowingMacro implements Macro {

        @Override
        public String evaluate(Input in, Processor processor) throws BadSyntax {
            throw new BadSyntax("test bad syntax");
        }
    }
}
