package javax0.jamal.openai;

import javax0.jamal.api.BadSyntax;
import javax0.jamal.api.Input;
import javax0.jamal.api.Processor;
import javax0.jamal.tools.Scanner;

import java.io.File;

/**
 * This class holds the options for the low level APIs
 */
public class Options {

    /**
     * The URL of the service to call
     */
    final String url;

    /**
     * The seed to use for the cache identifier.
     * When the seed is an arbitrary string, and it is used while calculating the hash identifier.
     * The case identifier is used as a file name.
     * The cache identifier is a hash value calculated from the parameters of the request and also the seed.
     * <p>
     * There is no automatic cache evision. When the seed is changed, the cache is invalidated.
     */
    final String cacheSeed;


    /**
     * When the local flag is set to true, the cache file is created in the directory where the input files is.
     * It can be used to deliver the response from openAI into the package and create a version that is sealed, and
     * does not need to be downloaded again.
     */
    final boolean local;

    /**
     * This flag tells the macro that the response must be treated as sealed and the openAI server must not be consuted.
     * If the cache file either local or the central is not found then an error is to be thrown.
     */
    final boolean sealed;

    /**
     * The hash value of the result. When this hash is set and is not the same as the
     */
    final String hash;

    /**
     * The request has to be sent asynchronously. When the macro needs to communicate with the server, it will star the
     * communication asynchronously and return immediately with either a syntax error or a json message containing error
     * message.
     */
    final boolean asynch;

    /**
     * The request may fail , and it is okay. In that case the macro will return an error message containing JSON.
     */
    final boolean fallible;

    final File top;

    /**
     * Create a new object and parse the options from the input.
     *
     * @param processor used to process the options
     * @param in        the input
     * @param macro     used by the underlying processor to report error messages
     * @throws BadSyntax if there is some error with the options
     */
    public Options(Processor processor, Input in, Scanner macro) throws BadSyntax {
        final var scanner = macro.newScanner(in,processor);
        //snipline openai_url filter="(.*?)"
        final var url = scanner.str("openai:url", "url");
        //snipline openai_seed filter="(.*?)"
        final var cacheSeed = scanner.str("openai:seed", "seed");
        //snipline openai_local filter="(.*?)"
        final var local = scanner.bool("openai:local", "local");
        //snipline openai_sealed filter="(.*?)"
        final var sealed = scanner.bool("openai:sealed", "sealed");
        //snipline openai_hash filter="(.*?)"
        final var hash = scanner.str("openai:hash", "hash").optional();
        //snipline openai_fallible filter="(.*?)"
        final var fallible = scanner.bool("openai:fallible", "fallible");
        //snipline openai_asynch filter="(.*?)"
        final var asynch = scanner.bool("openai:asynch", "asynch");
        scanner.done();
        this.url = url.get();
        this.cacheSeed = cacheSeed.get();
        this.local = local.is();
        this.sealed = sealed.is();
        this.asynch = asynch.is();
        this.fallible = fallible.is();
        this.hash = hash.isPresent() && !hash.get().trim().isBlank() ? hash.get().trim() : null;
        final String top = in.getPosition().top().file;
        this.top = new File(top == null ? "." : top);
    }
}
