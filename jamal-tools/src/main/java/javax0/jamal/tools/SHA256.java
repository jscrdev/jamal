package javax0.jamal.tools;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * A simple wrapper around the SHA-256 digest algorithm.
 */
public class SHA256 {
    private static final String ALGORITHM = "SHA-256";

    /**
     * Create the digest of the string using the SHA-256 algorithm.
     * <p>
     * The extra functionality is that the algorithm is hard coded, therefore it is not likely that we get a
     * {@link NoSuchAlgorithmException}. If we do, it is caught and rethrown as a {@link RuntimeException}.
     *
     * @param s the string to create the digest of
     * @return the digest
     */
    public static byte[] digest(String s) {
        final MessageDigest md;
        try {
            md = MessageDigest.getInstance(ALGORITHM);
        } catch (NoSuchAlgorithmException nsae) {
            // must not happen, because we use SHA-256 and the Java standard requres that
            //
            //Every implementation of the Java platform is required to support the following standard MessageDigest algorithms:
            //
            //MD5
            //SHA-1
            //SHA-256
            throw new RuntimeException("There is no algorithm '" + ALGORITHM + "' to create the digest for snippet consistency check.", nsae);
        }
        return md.digest(s.getBytes(StandardCharsets.UTF_8));
    }
}
