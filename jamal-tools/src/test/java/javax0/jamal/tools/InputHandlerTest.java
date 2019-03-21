package javax0.jamal.tools;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class InputHandlerTest {

    private void assertSplit(String input, String... expected) {
        var in = new Input(input);
        var result = InputHandler.getParts(in);
        Assertions.assertArrayEquals(expected, result);

    }

    @Test
    @DisplayName("input starts with separator, split correctly")
    void splitsInputCorrectlyWhenStartingWithSeparator() {
        assertSplit("/a/b/c/d/e/f/g/h", "a", "b", "c", "d", "e", "f", "g", "h");
    }

    @Test
    @DisplayName("first character treated as separator with leading whitespaces ignored")
    void splitsInputCorrectlyIgnoringStartingWhitespaces() {
        assertSplit("  /a/b/c//e/f/g/h", "a", "b", "c", "", "e", "f", "g", "h");
    }

    @Test
    @DisplayName("consecutive separators treated as distinct separators")
    void splitsInputCorrectlyWhenStartingWithSeparatorWithConsecutiveSeparators() {
        assertSplit("/a/b/c//e/f/g/h", "a", "b", "c", "", "e", "f", "g", "h");
    }

    @Test
    @DisplayName("if input ends with separator, the last item is empty")
    void splitsInputCorrectlyWhenEndingWithEmptyInstance() {
        assertSplit("  /a/b/c//e/f/g/h/", "a", "b", "c", "", "e", "f", "g", "h", "");
    }

    @Test
    @DisplayName("input starts with regular expression")
    void splitsInputCorrectlyStartingWithRegularExpression() {
        assertSplit("`[0-9]`a3b4c6d7e8f9g0h", "a", "b", "c", "d", "e", "f", "g", "h");
    }

    @Test
    @DisplayName("separator is the backtick character")
    void splitsInputCorrectlyWithBacktickAsSeparator() {
        assertSplit("```` a`b`c`d`e`f`g`h", " a", "b", "c", "d", "e", "f", "g", "h");
    }

    @Test
    @DisplayName("separator is regular expression containing special (backslash-escaped) character")
    void splitsInputCorrectlyWithRegularExpressionContainingSpecialCharacter() {
        assertSplit("`\\s*` abcdefgh", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "");
    }

    @Test
    @DisplayName("separator includes backtick AND regular expression")
    void splitsInputCorrectlyWhenStartingWithComplexRegularExpression() {
        assertSplit("```\\w{2}` a`hiba`wucontal`d0`e`f`g`h", " a", "ba", "contal","`e`f`g`h");
    }
}
