/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Numbers shared throughout def.processing.core.
 * <P>
 * An attempt is made to keep the constants as short/non-verbose
 * as possible. For instance, the constant is TIFF instead of
 * FILE_TYPE_TIFF. We'll do this as long as we can get away with it.
 * 
 * @usage Web &amp; Application
 * @class
 */
interface PConstants {}

declare namespace PConstants {

    export var X : number;

    export var Y : number;

    export var Z : number;

    export var JAVA2D : string;

    export var P2D : string;

    export var P3D : string;

    export var OPENGL : string;

    export var FX2D : string;

    export var PDF : string;

    export var SVG : string;

    export var DXF : string;

    export var OTHER : number;

    export var WINDOWS : number;

    export var MACOSX : number;

    export var LINUX : number;

    export var platformNames : string[];

    export var EPSILON : number;

    /**
     * Same as Float.MAX_VALUE, but included for parity with MIN_VALUE,
     * and to avoid teaching static methods on the first day.
     */
    export var MAX_FLOAT : number;

    /**
     * Note that Float.MIN_VALUE is the smallest <EM>positive</EM> value
     * for a floating point number, not actually the minimum (negative) value
     * for a float. This constant equals 0xFF7FFFFF, the smallest (farthest
     * negative) value a float can have before it hits NaN.
     */
    export var MIN_FLOAT : number;

    /**
     * Largest possible (positive) integer value
     */
    export var MAX_INT : number;

    /**
     * Smallest possible (negative) integer value
     */
    export var MIN_INT : number;

    export var VERTEX : number;

    export var BEZIER_VERTEX : number;

    export var QUADRATIC_VERTEX : number;

    export var CURVE_VERTEX : number;

    export var BREAK : number;

    export var QUAD_BEZIER_VERTEX : number;

    /**
     * ( begin auto-generated from PI.xml )
     * 
     * PI is a mathematical constant with the value 3.14159265358979323846. It
     * is the ratio of the circumference of a circle to its diameter. It is
     * useful in combination with the trigonometric functions <b>sin()</b> and
     * <b>cos()</b>.
     * 
     * ( end auto-generated )
     * @webref constants
     * @see PConstants#TWO_PI
     * @see PConstants#TAU
     * @see PConstants#HALF_PI
     * @see PConstants#QUARTER_PI
     */
    export var PI : number;

    /**
     * ( begin auto-generated from HALF_PI.xml )
     * 
     * HALF_PI is a mathematical constant with the value
     * 1.57079632679489661923. It is half the ratio of the circumference of a
     * circle to its diameter. It is useful in combination with the
     * trigonometric functions <b>sin()</b> and <b>cos()</b>.
     * 
     * ( end auto-generated )
     * @webref constants
     * @see PConstants#PI
     * @see PConstants#TWO_PI
     * @see PConstants#TAU
     * @see PConstants#QUARTER_PI
     */
    export var HALF_PI : number;

    export var THIRD_PI : number;

    /**
     * ( begin auto-generated from QUARTER_PI.xml )
     * 
     * QUARTER_PI is a mathematical constant with the value 0.7853982. It is
     * one quarter the ratio of the circumference of a circle to its diameter.
     * It is useful in combination with the trigonometric functions
     * <b>sin()</b> and <b>cos()</b>.
     * 
     * ( end auto-generated )
     * @webref constants
     * @see PConstants#PI
     * @see PConstants#TWO_PI
     * @see PConstants#TAU
     * @see PConstants#HALF_PI
     */
    export var QUARTER_PI : number;

    /**
     * ( begin auto-generated from TWO_PI.xml )
     * 
     * TWO_PI is a mathematical constant with the value 6.28318530717958647693.
     * It is twice the ratio of the circumference of a circle to its diameter.
     * It is useful in combination with the trigonometric functions
     * <b>sin()</b> and <b>cos()</b>.
     * 
     * ( end auto-generated )
     * @webref constants
     * @see PConstants#PI
     * @see PConstants#TAU
     * @see PConstants#HALF_PI
     * @see PConstants#QUARTER_PI
     */
    export var TWO_PI : number;

    /**
     * ( begin auto-generated from TAU.xml )
     * 
     * TAU is an alias for TWO_PI, a mathematical constant with the value
     * 6.28318530717958647693. It is twice the ratio of the circumference
     * of a circle to its diameter. It is useful in combination with the
     * trigonometric functions <b>sin()</b> and <b>cos()</b>.
     * 
     * ( end auto-generated )
     * @webref constants
     * @see PConstants#PI
     * @see PConstants#TWO_PI
     * @see PConstants#HALF_PI
     * @see PConstants#QUARTER_PI
     */
    export var TAU : number;

    export var DEG_TO_RAD : number;

    export var RAD_TO_DEG : number;

    export var WHITESPACE : string;

    export var RGB : number;

    export var ARGB : number;

    export var HSB : number;

    export var ALPHA : number;

    export var TIFF : number;

    export var TARGA : number;

    export var JPEG : number;

    export var GIF : number;

    export var BLUR : number;

    export var GRAY : number;

    export var INVERT : number;

    export var OPAQUE : number;

    export var POSTERIZE : number;

    export var THRESHOLD : number;

    export var ERODE : number;

    export var DILATE : number;

    export var REPLACE : number;

    export var BLEND : number;

    export var ADD : number;

    export var SUBTRACT : number;

    export var LIGHTEST : number;

    export var DARKEST : number;

    export var DIFFERENCE : number;

    export var EXCLUSION : number;

    export var MULTIPLY : number;

    export var SCREEN : number;

    export var OVERLAY : number;

    export var HARD_LIGHT : number;

    export var SOFT_LIGHT : number;

    export var DODGE : number;

    export var BURN : number;

    export var CHATTER : number;

    export var COMPLAINT : number;

    export var PROBLEM : number;

    export var PROJECTION : number;

    export var MODELVIEW : number;

    export var CUSTOM : number;

    export var ORTHOGRAPHIC : number;

    export var PERSPECTIVE : number;

    export var GROUP : number;

    export var POINT : number;

    export var POINTS : number;

    export var LINE : number;

    export var LINES : number;

    export var LINE_STRIP : number;

    export var LINE_LOOP : number;

    export var TRIANGLE : number;

    export var TRIANGLES : number;

    export var TRIANGLE_STRIP : number;

    export var TRIANGLE_FAN : number;

    export var QUAD : number;

    export var QUADS : number;

    export var QUAD_STRIP : number;

    export var POLYGON : number;

    export var PATH : number;

    export var RECT : number;

    export var ELLIPSE : number;

    export var ARC : number;

    export var SPHERE : number;

    export var BOX : number;

    export var OPEN : number;

    export var CLOSE : number;

    /**
     * Draw mode convention to use (x, y) to (width, height)
     */
    export var CORNER : number;

    /**
     * Draw mode convention to use (x1, y1) to (x2, y2) coordinates
     */
    export var CORNERS : number;

    /**
     * Draw mode from the center, and using the radius
     */
    export var RADIUS : number;

    /**
     * Draw from the center, using second pair of values as the diameter.
     * Formerly called CENTER_DIAMETER in alpha releases.
     */
    export var CENTER : number;

    /**
     * Synonym for the CENTER constant. Draw from the center,
     * using second pair of values as the diameter.
     */
    export var DIAMETER : number;

    export var CHORD : number;

    export var PIE : number;

    /**
     * Default vertical alignment for text placement
     */
    export var BASELINE : number;

    /**
     * Align text to the top
     */
    export var TOP : number;

    /**
     * Align text from the bottom, using the baseline.
     */
    export var BOTTOM : number;

    /**
     * texture coordinates in 0..1 range
     */
    export var NORMAL : number;

    /**
     * texture coordinates based on image width/height
     */
    export var IMAGE : number;

    /**
     * textures are clamped to their edges
     */
    export var CLAMP : number;

    /**
     * textures wrap around when uv values go outside 0..1 range
     */
    export var REPEAT : number;

    /**
     * textMode(MODEL) is the default, meaning that characters
     * will be affected by transformations like any other shapes.
     * <p/>
     * Changed value in 0093 to not interfere with LEFT, CENTER, and RIGHT.
     */
    export var MODEL : number;

    /**
     * textMode(SHAPE) draws text using the the glyph outlines of
     * individual characters rather than as textures. If the outlines are
     * not available, then textMode(SHAPE) will be ignored and textMode(MODEL)
     * will be used instead. For this reason, be sure to call textMode()
     * <EM>after</EM> calling textFont().
     * <p/>
     * Currently, textMode(SHAPE) is only supported by OPENGL mode.
     * It also requires Java 1.2 or higher (OPENGL requires 1.4 anyway)
     */
    export var SHAPE : number;

    export var SQUARE : number;

    export var ROUND : number;

    export var PROJECT : number;

    export var MITER : number;

    export var BEVEL : number;

    export var AMBIENT : number;

    export var DIRECTIONAL : number;

    export var SPOT : number;

    export var BACKSPACE : string;

    export var TAB : string;

    export var ENTER : string;

    export var RETURN : string;

    export var ESC : string;

    export var DELETE : string;

    export var CODED : number;

    export var UP : number;

    export var DOWN : number;

    export var LEFT : number;

    export var RIGHT : number;

    export var ALT : number;

    export var CONTROL : number;

    export var SHIFT : number;

    /**
     * Screen orientation constant for portrait (the hamburger way).
     */
    export var PORTRAIT : number;

    /**
     * Screen orientation constant for landscape (the hot dog way).
     */
    export var LANDSCAPE : number;

    /**
     * Use with fullScreen() to indicate all available displays.
     */
    export var SPAN : number;

    export var ARROW : number;

    export var CROSS : number;

    export var HAND : number;

    export var MOVE : number;

    export var TEXT : number;

    export var WAIT : number;

    export var ENABLE_NATIVE_FONTS : number;

    export var DISABLE_NATIVE_FONTS : number;

    export var DISABLE_DEPTH_TEST : number;

    export var ENABLE_DEPTH_TEST : number;

    export var ENABLE_DEPTH_SORT : number;

    export var DISABLE_DEPTH_SORT : number;

    export var DISABLE_OPENGL_ERRORS : number;

    export var ENABLE_OPENGL_ERRORS : number;

    export var DISABLE_DEPTH_MASK : number;

    export var ENABLE_DEPTH_MASK : number;

    export var DISABLE_OPTIMIZED_STROKE : number;

    export var ENABLE_OPTIMIZED_STROKE : number;

    export var ENABLE_STROKE_PERSPECTIVE : number;

    export var DISABLE_STROKE_PERSPECTIVE : number;

    export var DISABLE_TEXTURE_MIPMAPS : number;

    export var ENABLE_TEXTURE_MIPMAPS : number;

    export var ENABLE_STROKE_PURE : number;

    export var DISABLE_STROKE_PURE : number;

    export var ENABLE_BUFFER_READING : number;

    export var DISABLE_BUFFER_READING : number;

    export var DISABLE_KEY_REPEAT : number;

    export var ENABLE_KEY_REPEAT : number;

    export var DISABLE_ASYNC_SAVEFRAME : number;

    export var ENABLE_ASYNC_SAVEFRAME : number;

    export var HINT_COUNT : number;
}



