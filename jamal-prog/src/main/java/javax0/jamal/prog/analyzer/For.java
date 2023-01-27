package javax0.jamal.prog.analyzer;

import javax0.jamal.api.BadSyntax;

import java.util.List;

public class For {


    public static javax0.jamal.prog.commands.For analyze(final Lex.List lexes) throws BadSyntax {
        lexes.next();
        final var variable = lexes.assume(Lex.Type.IDENTIFIER, "Expected identifier after for").text;
        lexes.assume(Lex.Type.RESERVED, "=", "Expected '=' after for variable");
        final var start = Expression.analyze(lexes);
        lexes.assume(Lex.Type.RESERVED, "to", "Expected reserved word 'to' after for");
        final var end = Expression.analyze(lexes);
        final javax0.jamal.prog.commands.Expression step;
        if( lexes.is("step") ){
            lexes.next();
            step = Expression.analyze(lexes);
        }else{
            step = new javax0.jamal.prog.commands.Constant("1");
        }
        lexes.assume(Lex.Type.RESERVED, "\n", "Expected new line at the end of for statement");
        final var block = Block.analyze(lexes);
        return new javax0.jamal.prog.commands.For(start, step, end, variable, block);
    }
}
