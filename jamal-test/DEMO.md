# Jamal Markdown Demo


> This document is not meant to be read formatted.
The formatted version is `DEMO.md`.
You need to read the `DEMO.md.jam` file in IntelliJ and see the source code and the formatted version side-by-side.

This is a simple markdown demo file you can edit using IntelliJ IDEA with the Asciidoctor plugin, and Jamal installed as a preprocessor.
The current Jamal version is`2.5.0-SNAPSHOT`.
This version information is read from the `pom.xml` file.
It means there is no need to edit this document if the version changes, only to change the version number.

## Dependency on External Files

This document depends on many files.
(No, not really.)
One file is `README.adoc.jam` (no, not really).
This text references this file using the `file` macro.
With this macro, we can be sure that the file exists.

If the file `README.adoc.jam` was renamed or removed and the Jamal processing of this file is part of the CI/CD process, the build will fail.
This is a god thing, because the documentation is always up-to-date.




We can check not only the existence of the file but also its content.
Currently, the hashCode of the file `README.adoc.jam` is `5030f7f5.fd1c50e4.629944fd.44409cb9.9b55f346.bd66859c.73cd98cd.da5418d5`.
We can use the `snip:check` macro to ensure the file has not been changed.
If the file has changed, the build will fail.
This is a god thing, because the documentation is always up-to-date.

Oh, by the way, you do not need the whole hash code!
Do not freak out!
It is enough if you copy 8 characters from the hash code.

## Internal Consistency of the Document

Did I say that already?
Oh yes, I did.
What happens if I realize there is a typo in this text and I want to correct it?
It is not a _god_ thing, even though Jamal is superb, but still it is a _good_ thing.

Without Jamal, the probable scenario would be that I change the occurrence where I see that there is a missing 'o'.
The other occurrence would remain unchanged.
However, using the `variation` macro, Jamal will warn me that the exact text has multiple occurrences.
The build will fail until I change all of them to be identical.
This is a god thing, because the documentation is always up-to-date.
(Sorry, I still have to write it again because I want this typo for demonstration.)

However, you can use the `variation` macro even if the texts differ slightly.
You can separate the "constant" and the "variable" part of the text.
Like here:
This is a good thing, because the documentation is always up-to-date.

How did this happen?
I enclosed the variable part of the text in `pass:[<<]` and `pass:[>>]`.
So I wrote, `This is a gopass:[<<]o>>d thing,...`
As simple as that.

## Avoid copy-paste totally

You can define macros if you do not want to use the `variation` macro and maintain copies of the exact text.
In this document, we have already used a macro definition.
If you look at the `DEMO.md.jam` file, you will see a definition on the line 24.
We define the macro `HASH` there because we want to use the same value in the `snip:check` macro and in the text.
Usually, you do not display such hash codes in the text; you use them only in the `snip:check` macro.

Macros are not only constant texts named.
Macros can have arguments defined inside other macros, enclosed in scopes, and many other things.
There are more than 200 different macros defined in several macro libraries.
Use only what you are comfortable with and what you need.

## Diagrams


You can use, for example, the KROKI diagram creating macro.
Like here:

![](KROKI_MD.svg)

![](STR.svg)

With this, you can embed diagrams into your documentation.
The `kroki` macro supports all the 27 diagram types Kroki itself supports.
You can embed any or all of the diagram texts into your documentation.
Jamal's processing will create the diagrams and embed them into the documentation.

You do not need any Markdown (or whatever format you use) extensions.
The markdown file Jamal generates will only contain the image links.
Uploading the document to GitLab, GitHub, or another platform that handles only plain Markdown will work.
You will have the `DEMO.md`, `KROKI_MD.svg` and `STR.svg` files there.
(To avoid unnecessary processing, the `.svg.hash` files are also created, and Kroki runs only when the diagram code changes.)

BTW: the diagram code inside your document may also contain Jamal code, which will be processed if needed.

## Fetch data from external sources

You can fetch data from external sources.
You have already seen the software version.
You do not need to copy any text from the documented system.
You can define snippets in your code, collect them in your document, and reference them.


For example, here is the default implementation of the `getId()` method of the Jamal interface `Macro`.

```java
    default String getId() {
        return this.getClass().getSimpleName().toLowerCase();
    }

```

If the code changes, the documentation will change, too, automatically.
This is a good thing, because the documentation is always up-to-date.

It is not only code samples; you can fetch any text from any file and transform them before using them in your document.
If you think that a small piece of the documentation is easier to maintain as a little comment in the code, you can do that.
Keep that small piece there, and fetch it into your documentation.
When your code changes, you are less likely to forget to update the documentation when the documenting text is right there with your code.

## What else?

What I described here is only the tip of the iceberg.
You can include files, information from JAR files, web pages, etc.
You can use hierarchical counters, make transformations on the included lines, repeat the exact text multiple times, and so on.

>The final goal is to eliminate all redundancy and copy-paste from your documentation to make it easier to maintain and keep it god (sic!) quality and up-to-date.

Please read the [Jamal documentation](../README.adoc) for all the possibilities and details.