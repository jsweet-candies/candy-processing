/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Adds an additional parameter that indicates the font came from a file,
 * not a built-in OS font.
 * 
 * @nowebref
 * @param {java.awt.Font} font
 * @param {boolean} smooth
 * @param {Array} charset
 * @param {boolean} stream
 * @param {number} density
 * @class
 */
declare class PFont implements PConstants {
    /**
     * Number of character glyphs in this font.
     */
    glyphCount : number;

    /**
     * Actual glyph data. The length of this array won't necessarily be the
     * same size as glyphCount, in cases where lazy font loading is in use.
     */
    glyphs : PFont.Glyph[];

    /**
     * Name of the font as seen by Java when it was created.
     * If the font is available, the native version will be used.
     */
    name : string;

    /**
     * Postscript name of the font that this bitmap was created from.
     */
    psname : string;

    /**
     * The original size of the font when it was first created
     */
    size : number;

    /**
     * Default density set to 1 for backwards compatibility with loadFont().
     */
    density : number;

    /**
     * true if smoothing was enabled for this font, used for native impl
     */
    smooth : boolean;

    /**
     * The ascent of the font. If the 'd' character is present in this PFont,
     * this value is replaced with its pixel height, because the values returned
     * by FontMetrics.getAscent() seem to be terrible.
     */
    ascent : any;

    /**
     * The descent of the font. If the 'p' character is present in this PFont,
     * this value is replaced with its lowest pixel height, because the values
     * returned by FontMetrics.getDescent() are gross.
     */
    descent : any;

    /**
     * A more efficient array lookup for straight ASCII characters. For Unicode
     * characters, a QuickSort-style search is used.
     */
    ascii : number[];

    /**
     * True if this font is set to load dynamically. This is the default when
     * createFont() method is called without a character set. Bitmap versions of
     * characters are only created when prompted by an index() call.
     */
    lazy : boolean;

    /**
     * Native Java version of the font. If possible, this allows the
     * PGraphics subclass to just use Java's font rendering stuff
     * in situations where that's faster.
     */
    font : java.awt.Font;

    /**
     * True if this font was loaded from an InputStream, rather than by name
     * from the OS. It's best to use the native version of a font loaded from
     * a TTF file, since that will ensure that the font is available when the
     * sketch is exported.
     */
    stream : boolean;

    /**
     * True if this font should return 'null' for getFont(), so that the native
     * font will be used to create a subset, but the native version of the font
     * will not be used.
     */
    subsetting : boolean;

    /**
     * True if already tried to find the native AWT version of this font.
     */
    fontSearched : boolean;

    /**
     * Array of the native system fonts. Used to lookup native fonts by their
     * PostScript name. This is a workaround for a several year old Apple Java
     * bug that they can't be bothered to fix.
     */
    static fonts : java.awt.Font[];

    static fontDifferent : any;

    lazyImage : java.awt.image.BufferedImage;

    lazyGraphics : java.awt.Graphics2D;

    lazyMetrics : java.awt.FontMetrics;

    lazySamples : number[];

    public constructor();

    public constructor(font : java.awt.Font, smooth : boolean);

    public constructor(font : java.awt.Font, smooth : boolean, charset : string[]);

    public constructor(font : java.awt.Font, smooth : boolean, charset : string[], stream : boolean, density : number);

    public constructor(input : { str: string, cursor: number });

    /**
     * Write this PFont to an OutputStream.
     * <p>
     * This is used by the Create Font tool, or whatever anyone else dreams
     * up for messing with fonts themselves.
     * <p>
     * It is assumed that the calling class will handle closing
     * the stream when finished.
     * @param {java.io.OutputStream} output
     */
    public save(output : java.io.OutputStream);

    /**
     * Create a new glyph, and add the character to the current font.
     * @param {string} c character to create an image for.
     */
    addGlyph(c : string);

    public getName() : string;

    public getPostScriptName() : string;

    /**
     * Set the native complement of this font. Might be set internally via the
     * findFont() function, or externally by a deriveFont() call if the font
     * is resized by PGraphicsJava2D.
     * @param {*} font
     */
    public setNative(font : any);

    /**
     * Use the getNative() method instead, which allows library interfaces to be
     * written in a cross-platform fashion for desktop, Android, and others.
     * @return {java.awt.Font}
     */
    public getFont() : java.awt.Font;

    /**
     * Return the native java.awt.Font associated with this PFont (if any).
     * @return {*}
     */
    public getNative() : any;

    /**
     * Return size of this font.
     * @return {number}
     */
    public getSize() : number;

    /**
     * Returns the size that will be used when textFont(font) is called.
     * When drawing with 2x pixel density, bitmap fonts in OpenGL need to be
     * created (behind the scenes) at double the requested size. This ensures
     * that they're shown at half on displays (so folks don't have to change
     * their sketch code).
     * @return {number}
     */
    public getDefaultSize() : number;

    public isSmooth() : boolean;

    public isStream() : boolean;

    public setSubsetting();

    /**
     * Attempt to find the native version of this font.
     * (Public so that it can be used by OpenGL or other renderers.)
     * @return {*}
     */
    public findNative() : any;

    public getGlyph(c : string) : PFont.Glyph;

    /**
     * Get index for the character.
     * @return {number} index into arrays or -1 if not found
     * @param {string} c
     */
    index(c : string) : number;

    indexActual(c : string) : number;

    indexHunt(c : number, start : number, stop : number) : number;

    /**
     * Currently un-implemented for .vlw fonts,
     * but honored for layout in case subclasses use it.
     * @param {string} a
     * @param {string} b
     * @return {number}
     */
    public kern(a : string, b : string) : number;

    /**
     * Width of this character for a font of size 1.
     * @param {string} c
     * @return {number}
     */
    public width(c : string) : number;

    public getGlyphCount() : number;

    public getGlyph(i : number) : PFont.Glyph;

    public getShape(ch : string) : PShape;

    public getShape(ch : string, detail : number) : PShape;

    static EXTRA_CHARS : string[];

    /**
     * The default Processing character set.
     * <P>
     * This is the union of the Mac Roman and Windows ANSI (CP1250)
     * character sets. ISO 8859-1 Latin 1 is Unicode characters 0x80 -> 0xFF,
     * and would seem a good standard, but in practice, most P5 users would
     * rather have characters that they expect from their platform's fonts.
     * <P>
     * This is more of an interim solution until a much better
     * font solution can be determined. (i.e. create fonts on
     * the fly from some sort of vector format).
     * <P>
     * Not that I expect that to happen.
     */
    public static CHARSET : string[];

    static __static_initializer_0() {
        PFont.CHARSET = (s => { let a=[]; while(s-->0) a.push(null); return a; })(126 - 33 + 1 + PFont.EXTRA_CHARS.length);
        var index : number;
        for(var i : number; i <= 126; i++) {
            PFont.CHARSET[index++] = String.fromCharCode(i);
        };
        for(var i : number; i < PFont.EXTRA_CHARS.length; i++) {
            PFont.CHARSET[index++] = PFont.EXTRA_CHARS[i];
        };
    }

    /**
     * ( begin auto-generated from PFont_list.xml )
     * 
     * Gets a list of the fonts installed on the system. The data is returned
     * as a String array. This list provides the names of each font for input
     * into <b>createFont()</b>, which allows Processing to dynamically format
     * fonts. This function is meant as a tool for programming local
     * applications and is not recommended for use in applets.
     * 
     * ( end auto-generated )
     * 
     * @webref pfont
     * @usage application
     * @brief     Gets a list of the fonts installed on the system
     * @return {Array}
     */
    public static list() : string[];

    public static loadFonts();

    /**
     * Starting with Java 1.5, Apple broke the ability to specify most fonts.
     * This bug was filed years ago as #4769141 at bugreporter.apple.com. More:
     * <a href="http://dev.processing.org/bugs/show_bug.cgi?id=407">Bug 407</a>.
     * @param {string} name
     * @return {java.awt.Font}
     */
    public static findFont(name : string) : java.awt.Font;
}

declare namespace PFont {

    /**
     * A single character, and its visage.
     * @param {java.io.DataInputStream} is
     * @class
     */
    export class Glyph {
        public __parent: any;
        public image : PImage;

        public value : number;

        public height : number;

        public width : number;

        public index : number;

        public setWidth : number;

        public topExtent : number;

        public leftExtent : number;

        public constructor(__parent: any);

        public constructor(__parent: any, is : java.io.DataInputStream);

        readHeader(is : java.io.DataInputStream);

        writeHeader(os : java.io.DataOutputStream);

        readBitmap(is : java.io.DataInputStream);

        writeBitmap(os : java.io.DataOutputStream);

        constructor(__parent: any, c : string);
    }
}



