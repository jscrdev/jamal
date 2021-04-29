package javax0.jamal.test.examples;

import javax0.jamal.api.Debugger;
import javax0.jamal.testsupport.TestThat;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class TestHello {


    // snippet TestHello_1
    @Test
    @DisplayName("Test that the Hello built-in macro works")
    void macroWorks() throws Exception {
        TestThat.theInput(
            "{@hello Peter }\n" +
                "{@hello Paul}\n"
        ).results("Hello, Peter!\nHello, Paul!\n");
    }
    // end snippet

    //@Test
    @DisplayName("Used to debug the debugger UI")
    void testDebugger() throws Exception {
        System.setProperty(Debugger.JAMAL_DEBUG_SYS, "http:8081?cors=*");
        TestThat.theInput(
            "hahóóó\n".repeat(2) +
                "{@define a=1}{@define b(x)=x2x}{b{a}}"
        ).results("121");
        System.clearProperty(Debugger.JAMAL_DEBUG_SYS);

    }
}
