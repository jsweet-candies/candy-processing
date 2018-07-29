/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * ( begin auto-generated from PGraphics.xml )
 * 
 * Main graphics and rendering context, as well as the base API
 * implementation for processing "core". Use this class if you need to draw
 * into an off-screen graphics buffer. A PGraphics object can be
 * constructed with the <b>createGraphics()</b> function. The
 * <b>beginDraw()</b> and <b>endDraw()</b> methods (see above example) are
 * necessary to set up the buffer and to finalize it. The fields and
 * methods for this class are extensive. For a complete list, visit the <a
 * href="http://processing.googlecode.com/svn/trunk/processing/build/javadoc/core/">developer's reference.</a>
 * 
 * ( end auto-generated )
 * 
 * <h3>Advanced</h3>
 * Main graphics and rendering context, as well as the base API implementation.
 * 
 * <h2>Subclassing and initializing PGraphics objects</h2>
 * Starting in release 0149, subclasses of PGraphics are handled differently.
 * The constructor for subclasses takes no parameters, instead a series of
 * functions are called by the hosting PApplet to specify its attributes.
 * <ul>
 * <li>setParent(PApplet) - is called to specify the parent PApplet.
 * <li>setPrimary(boolean) - called with true if this PGraphics will be the
 * primary drawing surface used by the sketch, or false if not.
 * <li>setPath(String) - called when the renderer needs a filename or output
 * path, such as with the PDF or DXF renderers.
 * <li>setSize(int, int) - this is called last, at which point it's safe for
 * the renderer to complete its initialization routine.
 * </ul>
 * The functions were broken out because of the growing number of parameters
 * such as these that might be used by a renderer, yet with the exception of
 * setSize(), it's not clear which will be necessary. So while the size could
 * be passed in to the constructor instead of a setSize() function, a function
 * would still be needed that would notify the renderer that it was time to
 * finish its initialization. Thus, setSize() simply does both.
 * 
 * <h2>Know your rights: public vs. private methods</h2>
 * Methods that are protected are often subclassed by other renderers, however
 * they are not set 'public' because they shouldn't be part of the user-facing
 * public API accessible from PApplet. That is, we don't want sketches calling
 * textModeCheck() or vertexTexture() directly.
 * 
 * <h2>Handling warnings and exceptions</h2>
 * Methods that are unavailable generally show a warning, unless their lack of
 * availability will soon cause another exception. For instance, if a method
 * like getMatrix() returns null because it is unavailable, an exception will
 * be thrown stating that the method is unavailable, rather than waiting for
 * the NullPointerException that will occur when the sketch tries to use that
 * method. As of release 0149, warnings will only be shown once, and exceptions
 * have been changed to warnings where possible.
 * 
 * <h2>Using xxxxImpl() for subclassing smoothness</h2>
 * The xxxImpl() methods are generally renderer-specific handling for some
 * subset if tasks for a particular function (vague enough for you?) For
 * instance, imageImpl() handles drawing an image whose x/y/w/h and u/v coords
 * have been specified, and screen placement (independent of imageMode) has
 * been determined. There's no point in all renderers implementing the
 * <tt>if (imageMode == BLAH)</tt> placement/sizing logic, so that's handled
 * by PGraphics, which then calls imageImpl() once all that is figured out.
 * 
 * <h2>His brother PImage</h2>
 * PGraphics subclasses PImage so that it can be drawn and manipulated in a
 * similar fashion. As such, many methods are inherited from PGraphics,
 * though many are unavailable: for instance, resize() is not likely to be
 * implemented; the same goes for mask(), depending on the situation.
 * 
 * <h2>What's in PGraphics, what ain't</h2>
 * For the benefit of subclasses, as much as possible has been placed inside
 * PGraphics. For instance, bezier interpolation code and implementations of
 * the strokeCap() method (that simply sets the strokeCap variable) are
 * handled here. Features that will vary widely between renderers are located
 * inside the subclasses themselves. For instance, all matrix handling code
 * is per-renderer: Java 2D uses its own AffineTransform, P2D uses a PMatrix2D,
 * and PGraphics3D needs to keep continually update forward and reverse
 * transformations. A proper (future) OpenGL implementation will have all its
 * matrix madness handled by the card. Lighting also falls under this
 * category, however the base material property settings (emissive, specular,
 * et al.) are handled in PGraphics because they use the standard colorMode()
 * logic. Subclasses should override methods like emissiveFromCalc(), which
 * is a point where a valid color has been defined internally, and can be
 * applied in some manner based on the calcXxxx values.
 * 
 * <h2>What's in the PGraphics documentation, what ain't</h2>
 * Some things are noted here, some things are not. For public API, always
 * refer to the <a href="http://processing.org/reference">reference</A>
 * on Processing.org for proper explanations. <b>No attempt has been made to
 * keep the javadoc up to date or complete.</b> It's an enormous task for
 * which we simply do not have the time. That is, it's not something that
 * to be done once&mdash;it's a matter of keeping the multiple references
 * synchronized (to say nothing of the translation issues), while targeting
 * them for their separate audiences. Ouch.
 * 
 * We're working right now on synchronizing the two references, so the website reference
 * is generated from the javadoc comments. Yay.
 * 
 * @webref rendering
 * @instanceName graphics any object of the type PGraphics
 * @usage Web &amp; Application
 * @see PApplet#createGraphics(int, int, String)
 * @class
 * @extends PImage
 */
declare class PGraphics extends PImage implements PConstants {
    public pixelCount : number;

    public smooth : any;

    settingsInited : boolean;

    reapplySettings : any;

    raw : PGraphics;

    /**
     * path to the file being saved for this renderer (if any)
     */
    path : string;

    /**
     * True if this is the main graphics context for a sketch.
     * False for offscreen buffers retrieved via createGraphics().
     */
    primaryGraphics : boolean;

    /**
     * Array of hint[] items. These are hacks to get around various
     * temporary workarounds inside the environment.
     * <p/>
     * Note that this array cannot be static, as a hint() may result in a
     * runtime change specific to a renderer. For instance, calling
     * hint(DISABLE_DEPTH_TEST) has to call glDisable() right away on an
     * instance of PGraphicsOpenGL.
     * <p/>
     * The hints[] array is allocated early on because it might
     * be used inside beginDraw(), allocate(), etc.
     */
    hints : boolean[];

    /**
     * Storage for renderer-specific image data. In 1.x, renderers wrote cache
     * data into the image object. In 2.x, the renderer has a weak-referenced
     * map that points at any of the images it has worked on already. When the
     * images go out of scope, they will be properly garbage collected.
     */
    cacheMap : any;

    public static R : number;

    public static G : number;

    public static B : number;

    public static A : number;

    public static U : number;

    public static V : number;

    public static NX : number;

    public static NY : number;

    public static NZ : number;

    public static EDGE : number;

    /**
     * stroke argb values
     */
    public static SR : number;

    public static SG : number;

    public static SB : number;

    public static SA : number;

    /**
     * stroke weight
     */
    public static SW : number;

    public static TX : number;

    public static TY : number;

    public static TZ : number;

    public static VX : number;

    public static VY : number;

    public static VZ : number;

    public static VW : number;

    public static AR : number;

    public static AG : number;

    public static AB : number;

    public static DR : number;

    public static DG : number;

    public static DB : number;

    public static DA : number;

    public static SPR : number;

    public static SPG : number;

    public static SPB : number;

    public static SHINE : number;

    public static ER : number;

    public static EG : number;

    public static EB : number;

    public static BEEN_LIT : number;

    public static HAS_NORMAL : number;

    public static VERTEX_FIELD_COUNT : number;

    /**
     * The current colorMode
     */
    public colorMode : any;

    /**
     * Max value for red (or hue) set by colorMode
     */
    public colorModeX : number;

    /**
     * Max value for green (or saturation) set by colorMode
     */
    public colorModeY : number;

    /**
     * Max value for blue (or value) set by colorMode
     */
    public colorModeZ : number;

    /**
     * Max value for alpha set by colorMode
     */
    public colorModeA : number;

    /**
     * True if colors are not in the range 0..1
     */
    colorModeScale : boolean;

    /**
     * 
     * True if colorMode(RGB, 255). Defaults to true so that color()
     * used as part of a field declaration will properly assign values.
     */
    colorModeDefault : boolean;

    /**
     * True if tint() is enabled (read-only).
     * 
     * Using tint/tintColor seems a better option for naming than
     * tintEnabled/tint because the latter seems ugly, even though
     * g.tint as the actual color seems a little more intuitive,
     * it's just that g.tintEnabled is even more unintuitive.
     * Same goes for fill and stroke, et al.
     */
    public tint : any;

    /**
     * tint that was last set (read-only)
     */
    public tintColor : number;

    tintAlpha : boolean;

    tintR : number;

    tintG : number;

    tintB : number;

    tintA : number;

    tintRi : number;

    tintGi : number;

    tintBi : number;

    tintAi : number;

    /**
     * true if fill() is enabled, (read-only)
     */
    public fill : any;

    /**
     * fill that was last set (read-only)
     */
    public fillColor : number;

    fillAlpha : boolean;

    fillR : number;

    fillG : number;

    fillB : number;

    fillA : number;

    fillRi : number;

    fillGi : number;

    fillBi : number;

    fillAi : number;

    /**
     * true if stroke() is enabled, (read-only)
     */
    public stroke : any;

    /**
     * stroke that was last set (read-only)
     */
    public strokeColor : number;

    strokeAlpha : boolean;

    strokeR : number;

    strokeG : number;

    strokeB : number;

    strokeA : number;

    strokeRi : number;

    strokeGi : number;

    strokeBi : number;

    strokeAi : number;

    static DEFAULT_STROKE_WEIGHT : number;

    static DEFAULT_STROKE_JOIN : number;

    static DEFAULT_STROKE_CAP : number;

    /**
     * Last value set by strokeWeight() (read-only). This has a default
     * setting, rather than fighting with renderers about whether that
     * renderer supports thick lines.
     */
    public strokeWeight : any;

    /**
     * Set by strokeJoin() (read-only). This has a default setting
     * so that strokeJoin() need not be called by defaults,
     * because subclasses may not implement it (i.e. PGraphicsGL)
     */
    public strokeJoin : any;

    /**
     * Set by strokeCap() (read-only). This has a default setting
     * so that strokeCap() need not be called by defaults,
     * because subclasses may not implement it (i.e. PGraphicsGL)
     */
    public strokeCap : any;

    /**
     * The current rect mode (read-only)
     */
    public rectMode : any;

    /**
     * The current ellipse mode (read-only)
     */
    public ellipseMode : any;

    /**
     * The current shape alignment mode (read-only)
     */
    public shapeMode : any;

    /**
     * The current image alignment (read-only)
     */
    public imageMode : any;

    /**
     * The current text font (read-only)
     */
    public textFont : any;

    /**
     * The current text align (read-only)
     */
    public textAlign : any;

    /**
     * The current vertical text alignment (read-only)
     */
    public textAlignY : number;

    /**
     * The current text mode (read-only)
     */
    public textMode : any;

    /**
     * The current text size (read-only)
     */
    public textSize : any;

    /**
     * The current text leading (read-only)
     */
    public textLeading : any;

    static ERROR_TEXTFONT_NULL_PFONT : string;

    public ambientColor : number;

    public ambientR : number;

    public ambientG : number;

    public ambientB : number;

    public setAmbient : boolean;

    public specularColor : number;

    public specularR : number;

    public specularG : number;

    public specularB : number;

    public emissiveColor : number;

    public emissiveR : number;

    public emissiveG : number;

    public emissiveB : number;

    public shininess : any;

    static STYLE_STACK_DEPTH : number;

    styleStack : PStyle[];

    styleStackDepth : number;

    /**
     * Last background color that was set, zero if an image
     */
    public backgroundColor : number;

    backgroundAlpha : boolean;

    backgroundR : number;

    backgroundG : number;

    backgroundB : number;

    backgroundA : number;

    backgroundRi : number;

    backgroundGi : number;

    backgroundBi : number;

    backgroundAi : number;

    static ERROR_BACKGROUND_IMAGE_SIZE : string;

    static ERROR_BACKGROUND_IMAGE_FORMAT : string;

    /**
     * The current blending mode.
     */
    blendMode : any;

    /**
     * Current model-view matrix transformation of the form m[row][column],
     * which is a "column vector" (as opposed to "row vector") matrix.
     */
    static MATRIX_STACK_DEPTH : number;

    static ERROR_PUSHMATRIX_OVERFLOW : string;

    static ERROR_PUSHMATRIX_UNDERFLOW : string;

    /**
     * Java AWT Image object associated with this renderer. For the 1.0 version
     * of P2D and P3D, this was associated with their MemoryImageSource.
     * For PGraphicsJava2D, it will be the offscreen drawing buffer.
     */
    public image : any;

    /**
     * Surface object that we're talking to
     */
    surface : PSurface;

    calcR : number;

    calcG : number;

    calcB : number;

    calcA : number;

    calcRi : number;

    calcGi : number;

    calcBi : number;

    calcAi : number;

    calcColor : number;

    calcAlpha : boolean;

    /**
     * The last RGB value converted to HSB
     */
    cacheHsbKey : number;

    /**
     * Result of the last conversion to HSB
     */
    cacheHsbValue : number[];

    /**
     * Type of shape passed to beginShape(),
     * zero if no shape is currently being drawn.
     */
    shape : any;

    public static DEFAULT_VERTICES : number;

    vertices : number[][];

    vertexCount : number;

    bezierInited : boolean;

    public bezierDetail : any;

    bezierBasisMatrix : PMatrix3D;

    bezierDrawMatrix : PMatrix3D;

    curveInited : boolean;

    public curveDetail : any;

    public curveTightness : any;

    curveBasisMatrix : PMatrix3D;

    curveDrawMatrix : PMatrix3D;

    bezierBasisInverse : PMatrix3D;

    curveToBezierMatrix : PMatrix3D;

    curveVertices : number[][];

    curveVertexCount : number;

    static sinLUT : number[];

    static cosLUT : number[];

    static SINCOS_PRECISION : number;

    static SINCOS_LENGTH : number;

    /**
     * Internal buffer used by the text() functions
     * because the String object is slow
     */
    textBuffer : string[];

    textWidthBuffer : string[];

    textBreakCount : number;

    textBreakStart : number[];

    textBreakStop : number[];

    public edge : any;

    static NORMAL_MODE_AUTO : number;

    static NORMAL_MODE_SHAPE : number;

    static NORMAL_MODE_VERTEX : number;

    normalMode : number;

    autoNormal : boolean;

    /**
     * Current normal vector.
     */
    public normalX : number;

    /**
     * Current normal vector.
     */
    public normalY : number;

    /**
     * Current normal vector.
     */
    public normalZ : number;

    /**
     * Sets whether texture coordinates passed to
     * vertex() calls will be based on coordinates that are
     * based on the IMAGE or NORMALIZED.
     */
    public textureMode : any;

    /**
     * Current horizontal coordinate for texture, will always
     * be between 0 and 1, even if using textureMode(IMAGE).
     */
    public textureU : number;

    /**
     * Current vertical coordinate for texture, see above.
     */
    public textureV : number;

    /**
     * Current image being used as a texture
     */
    public textureImage : PImage;

    sphereX : number[];

    sphereY : number[];

    sphereZ : number[];

    public sphereDetailU : number;

    public sphereDetailV : number;

    public setParent(parent : any);

    /**
     * Set (or unset) this as the main drawing surface. Meaning that it can
     * safely be set to opaque (and given a default gray background), or anything
     * else that goes along with that.
     * @param {boolean} primary
     */
    public setPrimary(primary : boolean);

    public setPath(path : string);

    /**
     * The final step in setting up a renderer, set its size of this renderer.
     * This was formerly handled by the constructor, but instead it's been broken
     * out so that setParent/setPrimary/setPath can be handled differently.
     * 
     * Important: this is ignored by the Methods task because otherwise it will
     * override setSize() in PApplet/Applet/Component, which will 1) not call
     * super.setSize(), and 2) will cause the renderer to be resized from the
     * event thread (EDT), causing a nasty crash as it collides with the
     * animation thread.
     * @param {number} w
     * @param {number} h
     */
    public setSize(w : number, h : number);

    /**
     * Handle any takedown for this graphics context.
     * <p>
     * This is called when a sketch is shut down and this renderer was
     * specified using the size() command, or inside endRecord() and
     * endRaw(), in order to shut things off.
     */
    public dispose();

    public createSurface() : PSurface;

    /**
     * Store data of some kind for the renderer that requires extra metadata of
     * some kind. Usually this is a renderer-specific representation of the
     * image data, for instance a BufferedImage with tint() settings applied for
     * PGraphicsJava2D, or resized image data and OpenGL texture indices for
     * PGraphicsOpenGL.
     * @param {PImage} image The image to be stored
     * @param {*} storage The metadata required by the renderer
     */
    public setCache(image : PImage, storage : any);

    /**
     * Get cache storage data for the specified renderer. Because each renderer
     * will cache data in different formats, it's necessary to store cache data
     * keyed by the renderer object. Otherwise, attempting to draw the same
     * image to both a PGraphicsJava2D and a PGraphicsOpenGL will cause errors.
     * @return {*} metadata stored for the specified renderer
     * @param {PImage} image
     */
    public getCache(image : PImage) : any;

    /**
     * Remove information associated with this renderer from the cache, if any.
     * @param {PImage} image The image whose cache data should be removed
     */
    public removeCache(image : PImage);

    /**
     * ( begin auto-generated from PGraphics_beginDraw.xml )
     * 
     * Sets the default properties for a PGraphics object. It should be called
     * before anything is drawn into the object.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * When creating your own PGraphics, you should call this before
     * drawing anything.
     * 
     * @webref pgraphics:method
     * @brief Sets the default properties for a PGraphics object
     */
    public beginDraw();

    /**
     * ( begin auto-generated from PGraphics_endDraw.xml )
     * 
     * Finalizes the rendering of a PGraphics object so that it can be shown on screen.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * <p/>
     * When creating your own PGraphics, you should call this when
     * you're finished drawing.
     * 
     * @webref pgraphics:method
     * @brief Finalizes the rendering of a PGraphics object
     */
    public endDraw();

    public beginPGL() : PGL;

    public endPGL();

    public flush();

    checkSettings();

    /**
     * Set engine's default values. This has to be called by PApplet,
     * somewhere inside setup() or draw() because it talks to the
     * graphics buffer, meaning that for subclasses like OpenGL, there
     * needs to be a valid graphics context to mess with otherwise
     * you'll get some good crashing action.
     * 
     * This is currently called by checkSettings(), during beginDraw().
     */
    defaultSettings();

    /**
     * ( begin auto-generated from hint.xml )
     * 
     * Set various hints and hacks for the renderer. This is used to handle
     * obscure rendering features that cannot be implemented in a consistent
     * manner across renderers. Many options will often graduate to standard
     * features instead of hints over time.
     * <br/> <br/>
     * hint(ENABLE_OPENGL_4X_SMOOTH) - Enable 4x anti-aliasing for P3D. This
     * can help force anti-aliasing if it has not been enabled by the user. On
     * some graphics cards, this can also be set by the graphics driver's
     * control panel, however not all cards make this available. This hint must
     * be called immediately after the size() command because it resets the
     * renderer, obliterating any settings and anything drawn (and like size(),
     * re-running the code that came before it again).
     * <br/> <br/>
     * hint(DISABLE_OPENGL_2X_SMOOTH) - In Processing 1.0, Processing always
     * enables 2x smoothing when the P3D renderer is used. This hint disables
     * the default 2x smoothing and returns the smoothing behavior found in
     * earlier releases, where smooth() and noSmooth() could be used to enable
     * and disable smoothing, though the quality was inferior.
     * <br/> <br/>
     * hint(ENABLE_NATIVE_FONTS) - Use the native version fonts when they are
     * installed, rather than the bitmapped version from a .vlw file. This is
     * useful with the default (or JAVA2D) renderer setting, as it will improve
     * font rendering speed. This is not enabled by default, because it can be
     * misleading while testing because the type will look great on your
     * machine (because you have the font installed) but lousy on others'
     * machines if the identical font is unavailable. This option can only be
     * set per-sketch, and must be called before any use of textFont().
     * <br/> <br/>
     * hint(DISABLE_DEPTH_TEST) - Disable the zbuffer, allowing you to draw on
     * top of everything at will. When depth testing is disabled, items will be
     * drawn to the screen sequentially, like a painting. This hint is most
     * often used to draw in 3D, then draw in 2D on top of it (for instance, to
     * draw GUI controls in 2D on top of a 3D interface). Starting in release
     * 0149, this will also clear the depth buffer. Restore the default with
     * hint(ENABLE_DEPTH_TEST), but note that with the depth buffer cleared,
     * any 3D drawing that happens later in draw() will ignore existing shapes
     * on the screen.
     * <br/> <br/>
     * hint(ENABLE_DEPTH_SORT) - Enable primitive z-sorting of triangles and
     * lines in P3D and OPENGL. This can slow performance considerably, and the
     * algorithm is not yet perfect. Restore the default with hint(DISABLE_DEPTH_SORT).
     * <br/> <br/>
     * hint(DISABLE_OPENGL_ERROR_REPORT) - Speeds up the P3D renderer setting
     * by not checking for errors while running. Undo with hint(ENABLE_OPENGL_ERROR_REPORT).
     * <br/> <br/>
     * hint(ENABLE_BUFFER_READING) - Depth and stencil buffers in P2D/P3D will be
     * downsampled to make PGL#readPixels work with multisampling. Enabling this
     * introduces some overhead, so if you experience bad performance, disable
     * multisampling with noSmooth() instead. This hint is not intended to be
     * enabled and disabled repeatedely, so call this once in setup() or after
     * creating your PGraphics2D/3D. You can restore the default with
     * hint(DISABLE_BUFFER_READING) if you don't plan to read depth from
     * this PGraphics anymore.
     * <br/> <br/>
     * hint(ENABLE_KEY_REPEAT) - Auto-repeating key events are discarded
     * by default (works only in P2D/P3D); use this hint to get all the key events
     * (including auto-repeated). Call hint(DISABLE_KEY_REPEAT) to get events
     * only when the key goes physically up or down.
     * <br/> <br/>
     * hint(DISABLE_ASYNC_SAVEFRAME) - P2D/P3D only - save() and saveFrame()
     * will not use separate threads for saving and will block until the image
     * is written to the drive. This was the default behavior in 3.0b7 and before.
     * To enable, call hint(ENABLE_ASYNC_SAVEFRAME).
     * <br/> <br/>
     * As of release 0149, unhint() has been removed in favor of adding
     * additional ENABLE/DISABLE constants to reset the default behavior. This
     * prevents the double negatives, and also reinforces which hints can be
     * enabled or disabled.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     * @param {number} which name of the hint to be enabled or disabled
     * @see PGraphics
     * @see PApplet#createGraphics(int, int, String, String)
     * @see PApplet#size(int, int)
     */
    public hint(which : number);

    /**
     * Start a new shape of type POLYGON
     */
    public beginShape();

    /**
     * ( begin auto-generated from beginShape.xml )
     * 
     * Using the <b>beginShape()</b> and <b>endShape()</b> functions allow
     * creating more complex forms. <b>beginShape()</b> begins recording
     * vertices for a shape and <b>endShape()</b> stops recording. The value of
     * the <b>MODE</b> parameter tells it which types of shapes to create from
     * the provided vertices. With no mode specified, the shape can be any
     * irregular polygon. The parameters available for beginShape() are POINTS,
     * LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP.
     * After calling the <b>beginShape()</b> function, a series of
     * <b>vertex()</b> commands must follow. To stop drawing the shape, call
     * <b>endShape()</b>. The <b>vertex()</b> function with two parameters
     * specifies a position in 2D and the <b>vertex()</b> function with three
     * parameters specifies a position in 3D. Each shape will be outlined with
     * the current stroke color and filled with the fill color.
     * <br/> <br/>
     * Transformations such as <b>translate()</b>, <b>rotate()</b>, and
     * <b>scale()</b> do not work within <b>beginShape()</b>. It is also not
     * possible to use other shapes, such as <b>ellipse()</b> or <b>rect()</b>
     * within <b>beginShape()</b>.
     * <br/> <br/>
     * The P3D renderer settings allow <b>stroke()</b> and <b>fill()</b>
     * settings to be altered per-vertex, however the default P2D renderer does
     * not. Settings such as <b>strokeWeight()</b>, <b>strokeCap()</b>, and
     * <b>strokeJoin()</b> cannot be changed while inside a
     * <b>beginShape()</b>/<b>endShape()</b> block with any renderer.
     * 
     * ( end auto-generated )
     * @webref shape:vertex
     * @param {number} kind Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, or QUAD_STRIP
     * @see PShape
     * @see PGraphics#endShape()
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float, float, float, float)
     */
    public beginShape(kind : number);

    /**
     * ( begin auto-generated from normal.xml )
     * 
     * Sets the current normal vector. This is for drawing three dimensional
     * shapes and surfaces and specifies a vector perpendicular to the surface
     * of the shape which determines how lighting affects it. Processing
     * attempts to automatically assign normals to shapes, but since that's
     * imperfect, this is a better option when you want more control. This
     * function is identical to glNormal3f() in OpenGL.
     * 
     * ( end auto-generated )
     * @webref lights_camera:lights
     * @param {number} nx x direction
     * @param {number} ny y direction
     * @param {number} nz z direction
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#lights()
     */
    public normal(nx : number, ny : number, nz : number);

    public attribPosition(name : string, x : number, y : number, z : number);

    public attribNormal(name : string, nx : number, ny : number, nz : number);

    public attribColor(name : string, color : number);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : boolean[]);

    /**
     * ( begin auto-generated from textureWrap.xml )
     * 
     * Description to come...
     * 
     * ( end auto-generated from textureWrap.xml )
     * 
     * @webref image:textures
     * @param {number} wrap Either CLAMP (default) or REPEAT
     * @see PGraphics#texture(PImage)
     * @see PGraphics#textureMode(int)
     */
    public textureWrap(wrap : number);

    /**
     * ( begin auto-generated from texture.xml )
     * 
     * Sets a texture to be applied to vertex points. The <b>texture()</b>
     * function must be called between <b>beginShape()</b> and
     * <b>endShape()</b> and before any calls to <b>vertex()</b>.
     * <br/> <br/>
     * When textures are in use, the fill color is ignored. Instead, use tint()
     * to specify the color of the texture as it is applied to the shape.
     * 
     * ( end auto-generated )
     * @webref image:textures
     * @param {PImage} image reference to a PImage object
     * @see PGraphics#textureMode(int)
     * @see PGraphics#textureWrap(int)
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#vertex(float, float, float, float, float)
     */
    public texture(image : PImage);

    /**
     * Removes texture image for current shape.
     * Needs to be called between beginShape and endShape
     */
    public noTexture();

    vertexCheck();

    public vertex(x : number, y : number);

    public vertex(x : number, y : number, z : number);

    /**
     * Used by renderer subclasses or PShape to efficiently pass in already
     * formatted vertex information.
     * @param {Array} v vertex parameters, as a float array of length VERTEX_FIELD_COUNT
     */
    public vertex(v : number[]);

    public vertex(x : number, y : number, u : number, v : number);

    /**
     * ( begin auto-generated from vertex.xml )
     * 
     * All shapes are constructed by connecting a series of vertices.
     * <b>vertex()</b> is used to specify the vertex coordinates for points,
     * lines, triangles, quads, and polygons and is used exclusively within the
     * <b>beginShape()</b> and <b>endShape()</b> function.<br />
     * <br />
     * Drawing a vertex in 3D using the <b>z</b> parameter requires the P3D
     * parameter in combination with size as shown in the above example.<br />
     * <br />
     * This function is also used to map a texture onto the geometry. The
     * <b>texture()</b> function declares the texture to apply to the geometry
     * and the <b>u</b> and <b>v</b> coordinates set define the mapping of this
     * texture to the form. By default, the coordinates used for <b>u</b> and
     * <b>v</b> are specified in relation to the image's size in pixels, but
     * this relation can be changed with <b>textureMode()</b>.
     * 
     * ( end auto-generated )
     * @webref shape:vertex
     * @param {number} x x-coordinate of the vertex
     * @param {number} y y-coordinate of the vertex
     * @param {number} z z-coordinate of the vertex
     * @param {number} u horizontal coordinate for the texture mapping
     * @param {number} v vertical coordinate for the texture mapping
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float, float, float, float)
     * @see PGraphics#quadraticVertex(float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#texture(PImage)
     */
    public vertex(x : number, y : number, z : number, u : number, v : number);

    /**
     * Set (U, V) coords for the next vertex in the current shape.
     * This is ugly as its own function, and will (almost?) always be
     * coincident with a call to vertex. As of beta, this was moved to
     * the protected method you see here, and called from an optional
     * param of and overloaded vertex().
     * <p/>
     * The parameters depend on the current textureMode. When using
     * textureMode(IMAGE), the coordinates will be relative to the size
     * of the image texture, when used with textureMode(NORMAL),
     * they'll be in the range 0..1.
     * <p/>
     * Used by both PGraphics2D (for images) and PGraphics3D.
     * @param {number} u
     * @param {number} v
     */
    vertexTexture(u : number, v : number);

    /**
     * @webref shape:vertex
     */
    public beginContour();

    /**
     * @webref shape:vertex
     */
    public endContour();

    public endShape();

    /**
     * ( begin auto-generated from endShape.xml )
     * 
     * The <b>endShape()</b> function is the companion to <b>beginShape()</b>
     * and may only be called after <b>beginShape()</b>. When <b>endshape()</b>
     * is called, all of image data defined since the previous call to
     * <b>beginShape()</b> is written into the image buffer. The constant CLOSE
     * as the value for the MODE parameter to close the shape (to connect the
     * beginning and the end).
     * 
     * ( end auto-generated )
     * @webref shape:vertex
     * @param {number} mode use CLOSE to close the shape
     * @see PShape
     * @see PGraphics#beginShape(int)
     */
    public endShape(mode : number);

    /**
     * @webref shape
     * @param {string} filename name of file to load, can be .svg or .obj
     * @see PShape
     * @see PApplet#createShape()
     * @return {PShape}
     */
    public loadShape(filename : string) : PShape;

    /**
     * @nowebref
     * @param {string} filename
     * @param {string} options
     * @return {PShape}
     */
    public loadShape(filename : string, options : string) : PShape;

    /**
     * @webref shape
     * @see PShape
     * @see PShape#endShape()
     * @see PApplet#loadShape(String)
     * @return {PShape}
     */
    public createShape() : PShape;

    public createShape(type : number) : PShape;

    /**
     * Override this method to return an appropriate shape for your renderer
     * @param {number} type
     * @return {PShape}
     */
    createShapeFamily(type : number) : PShape;

    /**
     * @param {number} kind either POINT, LINE, TRIANGLE, QUAD, RECT, ELLIPSE, ARC, BOX, SPHERE
     * @param {Array} p parameters that match the kind of shape
     * @return {PShape}
     */
    public createShape(kind : number, ...p : number[]) : PShape;

    /**
     * Override this to have a custom shape object used by your renderer.
     * @param {number} kind
     * @param {Array} p
     * @return {PShape}
     */
    createShapePrimitive(kind : number, ...p : number[]) : PShape;

    /**
     * ( begin auto-generated from loadShader.xml )
     * 
     * This is a new reference entry for Processing 2.0. It will be updated shortly.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering:shaders
     * @param {string} fragFilename name of fragment shader file
     * @return {PShader}
     */
    public loadShader(fragFilename : string) : PShader;

    /**
     * @param {string} vertFilename name of vertex shader file
     * @param {string} fragFilename
     * @return {PShader}
     */
    public loadShader(fragFilename : string, vertFilename : string) : PShader;

    /**
     * ( begin auto-generated from shader.xml )
     * 
     * This is a new reference entry for Processing 2.0. It will be updated shortly.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering:shaders
     * @param {PShader} shader name of shader file
     */
    public shader(shader : PShader);

    /**
     * @param {number} kind type of shader, either POINTS, LINES, or TRIANGLES
     * @param {PShader} shader
     */
    public shader(shader : PShader, kind : number);

    /**
     * ( begin auto-generated from resetShader.xml )
     * 
     * This is a new reference entry for Processing 2.0. It will be updated shortly.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering:shaders
     */
    public resetShader();

    /**
     * @param {number} kind type of shader, either POINTS, LINES, or TRIANGLES
     */
    public resetShader(kind : number);

    /**
     * ( begin auto-generated from clip.xml )
     * 
     * Limits the rendering to the boundaries of a rectangle defined
     * by the parameters. The boundaries are drawn based on the state
     * of the <b>imageMode()</b> fuction, either CORNER, CORNERS, or CENTER.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     * @param {number} a x-coordinate of the rectangle, by default
     * @param {number} b y-coordinate of the rectangle, by default
     * @param {number} c width of the rectangle, by default
     * @param {number} d height of the rectangle, by default
     */
    public clip(a : number, b : number, c : number, d : number);

    clipImpl(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * ( begin auto-generated from noClip.xml )
     * 
     * Disables the clipping previously started by the <b>clip()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     */
    public noClip();

    blendModeImpl();

    bezierVertexCheck();

    bezierVertexCheck(shape : number, vertexCount : number);

    public bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from bezierVertex.xml )
     * 
     * Specifies vertex coordinates for Bezier curves. Each call to
     * <b>bezierVertex()</b> defines the position of two control points and one
     * anchor point of a Bezier curve, adding a new segment to a line or shape.
     * The first time <b>bezierVertex()</b> is used within a
     * <b>beginShape()</b> call, it must be prefaced with a call to
     * <b>vertex()</b> to set the first anchor point. This function must be
     * used between <b>beginShape()</b> and <b>endShape()</b> and only when
     * there is no MODE parameter specified to <b>beginShape()</b>. Using the
     * 3D version requires rendering with P3D (see the Environment reference
     * for more information).
     * 
     * ( end auto-generated )
     * @webref shape:vertex
     * @param {number} x2 the x-coordinate of the 1st control point
     * @param {number} y2 the y-coordinate of the 1st control point
     * @param {number} z2 the z-coordinate of the 1st control point
     * @param {number} x3 the x-coordinate of the 2nd control point
     * @param {number} y3 the y-coordinate of the 2nd control point
     * @param {number} z3 the z-coordinate of the 2nd control point
     * @param {number} x4 the x-coordinate of the anchor point
     * @param {number} y4 the y-coordinate of the anchor point
     * @param {number} z4 the z-coordinate of the anchor point
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#quadraticVertex(float, float, float, float, float, float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     */
    public bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * @webref shape:vertex
     * @param {number} cx the x-coordinate of the control point
     * @param {number} cy the y-coordinate of the control point
     * @param {number} x3 the x-coordinate of the anchor point
     * @param {number} y3 the y-coordinate of the anchor point
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     */
    public quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    /**
     * @param {number} cz the z-coordinate of the control point
     * @param {number} z3 the z-coordinate of the anchor point
     * @param {number} cx
     * @param {number} cy
     * @param {number} x3
     * @param {number} y3
     */
    public quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    curveVertexCheck();

    /**
     * Perform initialization specific to curveVertex(), and handle standard
     * error modes. Can be overridden by subclasses that need the flexibility.
     * @param {number} shape
     */
    curveVertexCheck(shape : number);

    /**
     * ( begin auto-generated from curveVertex.xml )
     * 
     * Specifies vertex coordinates for curves. This function may only be used
     * between <b>beginShape()</b> and <b>endShape()</b> and only when there is
     * no MODE parameter specified to <b>beginShape()</b>. The first and last
     * points in a series of <b>curveVertex()</b> lines will be used to guide
     * the beginning and end of a the curve. A minimum of four points is
     * required to draw a tiny curve between the second and third points.
     * Adding a fifth point with <b>curveVertex()</b> will draw the curve
     * between the second, third, and fourth points. The <b>curveVertex()</b>
     * function is an implementation of Catmull-Rom splines. Using the 3D
     * version requires rendering with P3D (see the Environment reference for
     * more information).
     * 
     * ( end auto-generated )
     * 
     * @webref shape:vertex
     * @param {number} x the x-coordinate of the vertex
     * @param {number} y the y-coordinate of the vertex
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#quadraticVertex(float, float, float, float, float, float)
     */
    public curveVertex(x : number, y : number);

    /**
     * @param {number} z the z-coordinate of the vertex
     * @param {number} x
     * @param {number} y
     */
    public curveVertex(x : number, y : number, z : number);

    /**
     * Handle emitting a specific segment of Catmull-Rom curve. This can be
     * overridden by subclasses that need more efficient rendering options.
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x4
     * @param {number} y4
     */
    curveVertexSegment(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * Handle emitting a specific segment of Catmull-Rom curve. This can be
     * overridden by subclasses that need more efficient rendering options.
     * @param {number} x1
     * @param {number} y1
     * @param {number} z1
     * @param {number} x2
     * @param {number} y2
     * @param {number} z2
     * @param {number} x3
     * @param {number} y3
     * @param {number} z3
     * @param {number} x4
     * @param {number} y4
     * @param {number} z4
     */
    curveVertexSegment(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * ( begin auto-generated from point.xml )
     * 
     * Draws a point, a coordinate in space at the dimension of one pixel. The
     * first parameter is the horizontal value for the point, the second value
     * is the vertical value for the point, and the optional third value is the
     * depth value. Drawing this shape in 3D with the <b>z</b> parameter
     * requires the P3D parameter in combination with <b>size()</b> as shown in
     * the above example.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} x x-coordinate of the point
     * @param {number} y y-coordinate of the point
     * @see PGraphics#stroke(int)
     */
    public point(x : number, y : number);

    /**
     * @param {number} z z-coordinate of the point
     * @param {number} x
     * @param {number} y
     */
    public point(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from line.xml )
     * 
     * Draws a line (a direct path between two points) to the screen. The
     * version of <b>line()</b> with four parameters draws the line in 2D.  To
     * color a line, use the <b>stroke()</b> function. A line cannot be filled,
     * therefore the <b>fill()</b> function will not affect the color of a
     * line. 2D lines are drawn with a width of one pixel by default, but this
     * can be changed with the <b>strokeWeight()</b> function. The version with
     * six parameters allows the line to be placed anywhere within XYZ space.
     * Drawing this shape in 3D with the <b>z</b> parameter requires the P3D
     * parameter in combination with <b>size()</b> as shown in the above example.
     * 
     * ( end auto-generated )
     * @webref shape:2d_primitives
     * @param {number} x1 x-coordinate of the first point
     * @param {number} y1 y-coordinate of the first point
     * @param {number} x2 x-coordinate of the second point
     * @param {number} y2 y-coordinate of the second point
     * @see PGraphics#strokeWeight(float)
     * @see PGraphics#strokeJoin(int)
     * @see PGraphics#strokeCap(int)
     * @see PGraphics#beginShape()
     */
    public line(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * @param {number} z1 z-coordinate of the first point
     * @param {number} z2 z-coordinate of the second point
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    public line(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number);

    /**
     * ( begin auto-generated from triangle.xml )
     * 
     * A triangle is a plane created by connecting three points. The first two
     * arguments specify the first point, the middle two arguments specify the
     * second point, and the last two arguments specify the third point.
     * 
     * ( end auto-generated )
     * @webref shape:2d_primitives
     * @param {number} x1 x-coordinate of the first point
     * @param {number} y1 y-coordinate of the first point
     * @param {number} x2 x-coordinate of the second point
     * @param {number} y2 y-coordinate of the second point
     * @param {number} x3 x-coordinate of the third point
     * @param {number} y3 y-coordinate of the third point
     * @see PApplet#beginShape()
     */
    public triangle(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number);

    /**
     * ( begin auto-generated from quad.xml )
     * 
     * A quad is a quadrilateral, a four sided polygon. It is similar to a
     * rectangle, but the angles between its edges are not constrained to
     * ninety degrees. The first pair of parameters (x1,y1) sets the first
     * vertex and the subsequent pairs should proceed clockwise or
     * counter-clockwise around the defined shape.
     * 
     * ( end auto-generated )
     * @webref shape:2d_primitives
     * @param {number} x1 x-coordinate of the first corner
     * @param {number} y1 y-coordinate of the first corner
     * @param {number} x2 x-coordinate of the second corner
     * @param {number} y2 y-coordinate of the second corner
     * @param {number} x3 x-coordinate of the third corner
     * @param {number} y3 y-coordinate of the third corner
     * @param {number} x4 x-coordinate of the fourth corner
     * @param {number} y4 y-coordinate of the fourth corner
     */
    public quad(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from rect.xml )
     * 
     * Draws a rectangle to the screen. A rectangle is a four-sided shape with
     * every angle at ninety degrees. By default, the first two parameters set
     * the location of the upper-left corner, the third sets the width, and the
     * fourth sets the height. These parameters may be changed with the
     * <b>rectMode()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} a x-coordinate of the rectangle by default
     * @param {number} b y-coordinate of the rectangle by default
     * @param {number} c width of the rectangle by default
     * @param {number} d height of the rectangle by default
     * @see PGraphics#rectMode(int)
     * @see PGraphics#quad(float, float, float, float, float, float, float, float)
     */
    public rect(a : number, b : number, c : number, d : number);

    rectImpl(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * @param {number} r radii for all four corners
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    public rect(a : number, b : number, c : number, d : number, r : number);

    /**
     * @param {number} tl radius for top-left corner
     * @param {number} tr radius for top-right corner
     * @param {number} br radius for bottom-right corner
     * @param {number} bl radius for bottom-left corner
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    public rect(a : number, b : number, c : number, d : number, tl : number, tr : number, br : number, bl : number);

    rectImpl(x1 : number, y1 : number, x2 : number, y2 : number, tl : number, tr : number, br : number, bl : number);

    /**
     * ( begin auto-generated from ellipse.xml )
     * 
     * Draws an ellipse (oval) in the display window. An ellipse with an equal
     * <b>width</b> and <b>height</b> is a circle. The first two parameters set
     * the location, the third sets the width, and the fourth sets the height.
     * The origin may be changed with the <b>ellipseMode()</b> function.
     * 
     * ( end auto-generated )
     * @webref shape:2d_primitives
     * @param {number} a x-coordinate of the ellipse
     * @param {number} b y-coordinate of the ellipse
     * @param {number} c width of the ellipse by default
     * @param {number} d height of the ellipse by default
     * @see PApplet#ellipseMode(int)
     * @see PApplet#arc(float, float, float, float, float, float)
     */
    public ellipse(a : number, b : number, c : number, d : number);

    ellipseImpl(x : number, y : number, w : number, h : number);

    /**
     * ( begin auto-generated from arc.xml )
     * 
     * Draws an arc in the display window. Arcs are drawn along the outer edge
     * of an ellipse defined by the <b>x</b>, <b>y</b>, <b>width</b> and
     * <b>height</b> parameters. The origin or the arc's ellipse may be changed
     * with the <b>ellipseMode()</b> function. The <b>start</b> and <b>stop</b>
     * parameters specify the angles at which to draw the arc.
     * 
     * ( end auto-generated )
     * @webref shape:2d_primitives
     * @param {number} a x-coordinate of the arc's ellipse
     * @param {number} b y-coordinate of the arc's ellipse
     * @param {number} c width of the arc's ellipse by default
     * @param {number} d height of the arc's ellipse by default
     * @param {number} start angle to start the arc, specified in radians
     * @param {number} stop angle to stop the arc, specified in radians
     * @see PApplet#ellipse(float, float, float, float)
     * @see PApplet#ellipseMode(int)
     * @see PApplet#radians(float)
     * @see PApplet#degrees(float)
     */
    public arc(a : number, b : number, c : number, d : number, start : number, stop : number);

    public arc(a : number, b : number, c : number, d : number, start : number, stop : number, mode : number);

    /**
     * Start and stop are in radians, converted by the parent function.
     * Note that the radians can be greater (or less) than TWO_PI.
     * This is so that an arc can be drawn that crosses zero mark,
     * and the user will still collect $200.
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {number} start
     * @param {number} stop
     * @param {number} mode
     */
    arcImpl(x : number, y : number, w : number, h : number, start : number, stop : number, mode : number);

    /**
     * ( begin auto-generated from box.xml )
     * 
     * A box is an extruded rectangle. A box with equal dimension on all sides
     * is a cube.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:3d_primitives
     * @param {number} size dimension of the box in all dimensions (creates a cube)
     * @see PGraphics#sphere(float)
     */
    public box(size : number);

    /**
     * @param {number} w dimension of the box in the x-dimension
     * @param {number} h dimension of the box in the y-dimension
     * @param {number} d dimension of the box in the z-dimension
     */
    public box(w : number, h : number, d : number);

    /**
     * ( begin auto-generated from sphereDetail.xml )
     * 
     * Controls the detail used to render a sphere by adjusting the number of
     * vertices of the sphere mesh. The default resolution is 30, which creates
     * a fairly detailed sphere definition with vertices every 360/30 = 12
     * degrees. If you're going to render a great number of spheres per frame,
     * it is advised to reduce the level of detail using this function. The
     * setting stays active until <b>sphereDetail()</b> is called again with a
     * new parameter and so should <i>not</i> be called prior to every
     * <b>sphere()</b> statement, unless you wish to render spheres with
     * different settings, e.g. using less detail for smaller spheres or ones
     * further away from the camera. To control the detail of the horizontal
     * and vertical resolution independently, use the version of the functions
     * with two parameters.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Code for sphereDetail() submitted by toxi [031031].
     * Code for enhanced u/v version from davbol [080801].
     * 
     * @param {number} res number of segments (minimum 3) used per full circle revolution
     * @webref shape:3d_primitives
     * @see PGraphics#sphere(float)
     */
    public sphereDetail(res : number);

    /**
     * @param {number} ures number of segments used longitudinally per full circle revolutoin
     * @param {number} vres number of segments used latitudinally from top to bottom
     */
    public sphereDetail(ures : number, vres : number);

    /**
     * ( begin auto-generated from sphere.xml )
     * 
     * A sphere is a hollow ball made from tessellated triangles.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * <P>
     * Implementation notes:
     * <P>
     * cache all the points of the sphere in a static array
     * top and bottom are just a bunch of triangles that land
     * in the center point
     * <P>
     * sphere is a series of concentric circles who radii vary
     * along the shape, based on, er.. cos or something
     * <PRE>
     * [toxi 031031] new sphere code. removed all multiplies with
     * radius, as scale() will take care of that anyway
     * 
     * [toxi 031223] updated sphere code (removed modulos)
     * and introduced sphereAt(x,y,z,r)
     * to avoid additional translate()'s on the user/sketch side
     * 
     * [davbol 080801] now using separate sphereDetailU/V
     * </PRE>
     * 
     * @webref shape:3d_primitives
     * @param {number} r the radius of the sphere
     * @see PGraphics#sphereDetail(int)
     */
    public sphere(r : number);

    /**
     * ( begin auto-generated from bezierPoint.xml )
     * 
     * Evaluates the Bezier at point t for points a, b, c, d. The parameter t
     * varies between 0 and 1, a and d are points on the curve, and b and c are
     * the control points. This can be done once with the x coordinates and a
     * second time with the y coordinates to get the location of a bezier curve
     * at t.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * For instance, to convert the following example:<PRE>
     * stroke(255, 102, 0);
     * line(85, 20, 10, 10);
     * line(90, 90, 15, 80);
     * stroke(0, 0, 0);
     * bezier(85, 20, 10, 10, 90, 90, 15, 80);
     * 
     * // draw it in gray, using 10 steps instead of the default 20
     * // this is a slower way to do it, but useful if you need
     * // to do things with the coordinates at each step
     * stroke(128);
     * beginShape(LINE_STRIP);
     * for (int i = 0; i <= 10; i++) {
     * float t = i / 10.0f;
     * float x = bezierPoint(85, 10, 90, 15, t);
     * float y = bezierPoint(20, 10, 90, 80, t);
     * vertex(x, y);
     * }
     * endShape();</PRE>
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @return {number}
     */
    public bezierPoint(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from bezierTangent.xml )
     * 
     * Calculates the tangent of a point on a Bezier curve. There is a good
     * definition of <a href="http://en.wikipedia.org/wiki/Tangent"
     * target="new"><em>tangent</em> on Wikipedia</a>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Code submitted by Dave Bollinger (davol) for release 0136.
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @return {number}
     */
    public bezierTangent(a : number, b : number, c : number, d : number, t : number) : number;

    bezierInitCheck();

    bezierInit();

    public bezier(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from bezier.xml )
     * 
     * Draws a Bezier curve on the screen. These curves are defined by a series
     * of anchor and control points. The first two parameters specify the first
     * anchor point and the last two parameters specify the other anchor point.
     * The middle parameters specify the control points which define the shape
     * of the curve. Bezier curves were developed by French engineer Pierre
     * Bezier. Using the 3D version requires rendering with P3D (see the
     * Environment reference for more information).
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Draw a cubic bezier curve. The first and last points are
     * the on-curve points. The middle two are the 'control' points,
     * or 'handles' in an application like Illustrator.
     * <P>
     * Identical to typing:
     * <PRE>beginShape();
     * vertex(x1, y1);
     * bezierVertex(x2, y2, x3, y3, x4, y4);
     * endShape();
     * </PRE>
     * In Postscript-speak, this would be:
     * <PRE>moveto(x1, y1);
     * curveto(x2, y2, x3, y3, x4, y4);</PRE>
     * If you were to try and continue that curve like so:
     * <PRE>curveto(x5, y5, x6, y6, x7, y7);</PRE>
     * This would be done in processing by adding these statements:
     * <PRE>bezierVertex(x5, y5, x6, y6, x7, y7)
     * </PRE>
     * To draw a quadratic (instead of cubic) curve,
     * use the control point twice by doubling it:
     * <PRE>bezier(x1, y1, cx, cy, cx, cy, x2, y2);</PRE>
     * 
     * @webref shape:curves
     * @param {number} x1 coordinates for the first anchor point
     * @param {number} y1 coordinates for the first anchor point
     * @param {number} z1 coordinates for the first anchor point
     * @param {number} x2 coordinates for the first control point
     * @param {number} y2 coordinates for the first control point
     * @param {number} z2 coordinates for the first control point
     * @param {number} x3 coordinates for the second control point
     * @param {number} y3 coordinates for the second control point
     * @param {number} z3 coordinates for the second control point
     * @param {number} x4 coordinates for the second anchor point
     * @param {number} y4 coordinates for the second anchor point
     * @param {number} z4 coordinates for the second anchor point
     * 
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     */
    public bezier(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * ( begin auto-generated from curvePoint.xml )
     * 
     * Evalutes the curve at point t for points a, b, c, d. The parameter t
     * varies between 0 and 1, a and d are points on the curve, and b and c are
     * the control points. This can be done once with the x coordinates and a
     * second time with the y coordinates to get the location of a curve at t.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of second point on the curve
     * @param {number} c coordinate of third point on the curve
     * @param {number} d coordinate of fourth point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#bezierPoint(float, float, float, float, float)
     * @return {number}
     */
    public curvePoint(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from curveTangent.xml )
     * 
     * Calculates the tangent of a point on a curve. There's a good definition
     * of <em><a href="http://en.wikipedia.org/wiki/Tangent"
     * target="new">tangent</em> on Wikipedia</a>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Code thanks to Dave Bollinger (Bug #715)
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @see PGraphics#bezierTangent(float, float, float, float, float)
     * @return {number}
     */
    public curveTangent(a : number, b : number, c : number, d : number, t : number) : number;

    curveInitCheck();

    /**
     * Set the number of segments to use when drawing a Catmull-Rom
     * curve, and setting the s parameter, which defines how tightly
     * the curve fits to each vertex. Catmull-Rom curves are actually
     * a subset of this curve type where the s is set to zero.
     * <P>
     * (This function is not optimized, since it's not expected to
     * be called all that often. there are many juicy and obvious
     * opimizations in here, but it's probably better to keep the
     * code more readable)
     */
    curveInit();

    /**
     * ( begin auto-generated from curve.xml )
     * 
     * Draws a curved line on the screen. The first and second parameters
     * specify the beginning control point and the last two parameters specify
     * the ending control point. The middle parameters specify the start and
     * stop of the curve. Longer curves can be created by putting a series of
     * <b>curve()</b> functions together or using <b>curveVertex()</b>. An
     * additional function called <b>curveTightness()</b> provides control for
     * the visual quality of the curve. The <b>curve()</b> function is an
     * implementation of Catmull-Rom splines. Using the 3D version requires
     * rendering with P3D (see the Environment reference for more information).
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * As of revision 0070, this function no longer doubles the first
     * and last points. The curves are a bit more boring, but it's more
     * mathematically correct, and properly mirrored in curvePoint().
     * <P>
     * Identical to typing out:<PRE>
     * beginShape();
     * curveVertex(x1, y1);
     * curveVertex(x2, y2);
     * curveVertex(x3, y3);
     * curveVertex(x4, y4);
     * endShape();
     * </PRE>
     * 
     * @webref shape:curves
     * @param {number} x1 coordinates for the beginning control point
     * @param {number} y1 coordinates for the beginning control point
     * @param {number} x2 coordinates for the first point
     * @param {number} y2 coordinates for the first point
     * @param {number} x3 coordinates for the second point
     * @param {number} y3 coordinates for the second point
     * @param {number} x4 coordinates for the ending control point
     * @param {number} y4 coordinates for the ending control point
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#curveTightness(float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float, float, float, float, float)
     */
    public curve(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * @param {number} z1 coordinates for the beginning control point
     * @param {number} z2 coordinates for the first point
     * @param {number} z3 coordinates for the second point
     * @param {number} z4 coordinates for the ending control point
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x4
     * @param {number} y4
     */
    public curve(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * Setup forward-differencing matrix to be used for speedy
     * curve rendering. It's based on using a specific number
     * of curve segments and just doing incremental adds for each
     * vertex of the segment, rather than running the mathematically
     * expensive cubic equation.
     * @param {number} segments number of curve segments to use when drawing
     * @param {PMatrix3D} matrix target object for the new matrix
     */
    splineForward(segments : number, matrix : PMatrix3D);

    public noSmooth();

    smoothWarning(method : string);

    /**
     * Expects x1, y1, x2, y2 coordinates where (x2 >= x1) and (y2 >= y1).
     * If tint() has been called, the image will be colored.
     * <p/>
     * The default implementation draws an image as a textured quad.
     * The (u, v) coordinates are in image space (they're ints, after all..)
     * @param {PImage} img
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} u1
     * @param {number} v1
     * @param {number} u2
     * @param {number} v2
     */
    imageImpl(img : PImage, x1 : number, y1 : number, x2 : number, y2 : number, u1 : number, v1 : number, u2 : number, v2 : number);

    createFont(name : string, size : number, smooth : boolean, charset : string[]) : PFont;

    /**
     * ( begin auto-generated from textAscent.xml )
     * 
     * Returns ascent of the current font at its current size. This information
     * is useful for determining the height of the font above the baseline. For
     * example, adding the <b>textAscent()</b> and <b>textDescent()</b> values
     * will give you the total height of the line.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:metrics
     * @see PGraphics#textDescent()
     * @return {number}
     */
    public textAscent() : number;

    /**
     * ( begin auto-generated from textDescent.xml )
     * 
     * Returns descent of the current font at its current size. This
     * information is useful for determining the height of the font below the
     * baseline. For example, adding the <b>textAscent()</b> and
     * <b>textDescent()</b> values will give you the total height of the line.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:metrics
     * @see PGraphics#textAscent()
     * @return {number}
     */
    public textDescent() : number;

    /**
     * Called from textFont. Check the validity of args and
     * print possible errors to the user before calling this.
     * Subclasses will want to override this one.
     * 
     * @param {PFont} which font to set, not null
     * @param {number} size size to set, greater than zero
     */
    textFontImpl(which : PFont, size : number);

    textModeCheck(mode : number) : boolean;

    /**
     * Called from textSize() after validating size. Subclasses
     * will want to override this one.
     * @param {number} size size of the text, greater than zero
     */
    textSizeImpl(size : number);

    /**
     * Sets the actual size. Called from textSizeImpl and
     * from textFontImpl after setting the font.
     * @param {number} size size of the text, greater than zero
     */
    handleTextSize(size : number);

    /**
     * @param {string} c the character to measure
     * @return {number}
     */
    public textWidth(c : string) : number;

    /**
     * ( begin auto-generated from textWidth.xml )
     * 
     * Calculates and returns the width of any character or text string.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:attributes
     * @param {string} str the String of characters to measure
     * @see PApplet#loadFont(String)
     * @see PFont#PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textFont(PFont)
     * @see PGraphics#textSize(float)
     * @return {number}
     */
    public textWidth(str : string) : number;

    /**
     * @nowebref
     * @param {Array} chars
     * @param {number} start
     * @param {number} length
     * @return {number}
     */
    public textWidth(chars : string[], start : number, length : number) : number;

    /**
     * Implementation of returning the text width of
     * the chars [start, stop) in the buffer.
     * Unlike the previous version that was inside PFont, this will
     * return the size not of a 1 pixel font, but the actual current size.
     * @param {Array} buffer
     * @param {number} start
     * @param {number} stop
     * @return {number}
     */
    textWidthImpl(buffer : string[], start : number, stop : number) : number;

    /**
     * ( begin auto-generated from text.xml )
     * 
     * Draws text to the screen. Displays the information specified in the
     * <b>data</b> or <b>stringdata</b> parameters on the screen in the
     * position specified by the <b>x</b> and <b>y</b> parameters and the
     * optional <b>z</b> parameter. A default font will be used unless a font
     * is set with the <b>textFont()</b> function. Change the color of the text
     * with the <b>fill()</b> function. The text displays in relation to the
     * <b>textAlign()</b> function, which gives the option to draw to the left,
     * right, and center of the coordinates.
     * <br /><br />
     * The <b>x2</b> and <b>y2</b> parameters define a rectangular area to
     * display within and may only be used with string data. For text drawn
     * inside a rectangle, the coordinates are interpreted based on the current
     * <b>rectMode()</b> setting.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:loading_displaying
     * @param {string} c the alphanumeric character to be displayed
     * @param {number} x x-coordinate of text
     * @param {number} y y-coordinate of text
     * @see PGraphics#textAlign(int, int)
     * @see PGraphics#textFont(PFont)
     * @see PGraphics#textMode(int)
     * @see PGraphics#textSize(float)
     * @see PGraphics#textLeading(float)
     * @see PGraphics#textWidth(String)
     * @see PGraphics#textAscent()
     * @see PGraphics#textDescent()
     * @see PGraphics#rectMode(int)
     * @see PGraphics#fill(int, float)
     * @see_external String
     */
    public text(c : string, x : number, y : number);

    /**
     * @param {number} z z-coordinate of text
     * @param {string} c
     * @param {number} x
     * @param {number} y
     */
    public text(c : string, x : number, y : number, z : number);

    /**
     * <h3>Advanced</h3>
     * Draw a chunk of text.
     * Newlines that are \n (Unix newline or linefeed char, ascii 10)
     * are honored, but \r (carriage return, Windows and Mac OS) are
     * ignored.
     * @param {string} str
     * @param {number} x
     * @param {number} y
     */
    public text(str : string, x : number, y : number);

    /**
     * <h3>Advanced</h3>
     * Method to draw text from an array of chars. This method will usually be
     * more efficient than drawing from a String object, because the String will
     * not be converted to a char array before drawing.
     * @param {Array} chars the alphanumberic symbols to be displayed
     * @param {number} start array index at which to start writing characters
     * @param {number} stop array index at which to stop writing characters
     * @param {number} x
     * @param {number} y
     */
    public text(chars : string[], start : number, stop : number, x : number, y : number);

    /**
     * Same as above but with a z coordinate.
     * @param {string} str
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public text(str : string, x : number, y : number, z : number);

    public text(chars : string[], start : number, stop : number, x : number, y : number, z : number);

    /**
     * <h3>Advanced</h3>
     * Draw text in a box that is constrained to a particular size.
     * The current rectMode() determines what the coordinates mean
     * (whether x1/y1/x2/y2 or x/y/w/h).
     * <P/>
     * Note that the x,y coords of the start of the box
     * will align with the *ascent* of the text, not the baseline,
     * as is the case for the other text() functions.
     * <P/>
     * Newlines that are \n (Unix newline or linefeed char, ascii 10)
     * are honored, and \r (carriage return, Windows and Mac OS) are
     * ignored.
     * 
     * @param {number} x1 by default, the x-coordinate of text, see rectMode() for more info
     * @param {number} y1 by default, the y-coordinate of text, see rectMode() for more info
     * @param {number} x2 by default, the width of the text box, see rectMode() for more info
     * @param {number} y2 by default, the height of the text box, see rectMode() for more info
     * @param {string} str
     */
    public text(str : string, x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * Emit a sentence of text, defined as a chunk of text without any newlines.
     * @param {number} stop non-inclusive, the end of the text in question
     * @return {boolean} false if cannot fit
     * @param {Array} buffer
     * @param {number} start
     * @param {number} boxWidth
     * @param {number} spaceWidth
     */
    textSentence(buffer : string[], start : number, stop : number, boxWidth : number, spaceWidth : number) : boolean;

    textSentenceBreak(start : number, stop : number);

    public text(num : number, x : number, y : number);

    public text(num : number, x : number, y : number, z : number);

    /**
     * This does a basic number formatting, to avoid the
     * generally ugly appearance of printing floats.
     * Users who want more control should use their own nf() cmmand,
     * or if they want the long, ugly version of float,
     * use String.valueOf() to convert the float to a String first.
     * 
     * @param {number} num the numeric value to be displayed
     * @param {number} x
     * @param {number} y
     */
    public text(num : number, x : number, y : number);

    public text(num : number, x : number, y : number, z : number);

    /**
     * Handles placement of a text line, then calls textLineImpl
     * to actually render at the specific point.
     * @param {Array} buffer
     * @param {number} start
     * @param {number} stop
     * @param {number} x
     * @param {number} y
     */
    textLineAlignImpl(buffer : string[], start : number, stop : number, x : number, y : number);

    /**
     * Implementation of actual drawing for a line of text.
     * @param {Array} buffer
     * @param {number} start
     * @param {number} stop
     * @param {number} x
     * @param {number} y
     */
    textLineImpl(buffer : string[], start : number, stop : number, x : number, y : number);

    textCharImpl(ch : string, x : number, y : number);

    textCharModelImpl(glyph : PImage, x1 : number, y1 : number, x2 : number, y2 : number, u2 : number, v2 : number);

    /**
     * ( begin auto-generated from pushMatrix.xml )
     * 
     * Pushes the current transformation matrix onto the matrix stack.
     * Understanding <b>pushMatrix()</b> and <b>popMatrix()</b> requires
     * understanding the concept of a matrix stack. The <b>pushMatrix()</b>
     * function saves the current coordinate system to the stack and
     * <b>popMatrix()</b> restores the prior coordinate system.
     * <b>pushMatrix()</b> and <b>popMatrix()</b> are used in conjuction with
     * the other transformation functions and may be embedded to control the
     * scope of the transformations.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#popMatrix()
     * @see PGraphics#translate(float, float, float)
     * @see PGraphics#scale(float)
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#rotateZ(float)
     */
    public pushMatrix();

    /**
     * ( begin auto-generated from popMatrix.xml )
     * 
     * Pops the current transformation matrix off the matrix stack.
     * Understanding pushing and popping requires understanding the concept of
     * a matrix stack. The <b>pushMatrix()</b> function saves the current
     * coordinate system to the stack and <b>popMatrix()</b> restores the prior
     * coordinate system. <b>pushMatrix()</b> and <b>popMatrix()</b> are used
     * in conjuction with the other transformation functions and may be
     * embedded to control the scope of the transformations.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     */
    public popMatrix();

    /**
     * ( begin auto-generated from translate.xml )
     * 
     * Specifies an amount to displace objects within the display window. The
     * <b>x</b> parameter specifies left/right translation, the <b>y</b>
     * parameter specifies up/down translation, and the <b>z</b> parameter
     * specifies translations toward/away from the screen. Using this function
     * with the <b>z</b> parameter requires using P3D as a parameter in
     * combination with size as shown in the above example. Transformations
     * apply to everything that happens after and subsequent calls to the
     * function accumulates the effect. For example, calling <b>translate(50,
     * 0)</b> and then <b>translate(20, 0)</b> is the same as <b>translate(70,
     * 0)</b>. If <b>translate()</b> is called within <b>draw()</b>, the
     * transformation is reset when the loop begins again. This function can be
     * further controlled by the <b>pushMatrix()</b> and <b>popMatrix()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} x left/right translation
     * @param {number} y up/down translation
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#rotateZ(float)
     * @see PGraphics#scale(float, float, float)
     */
    public translate(x : number, y : number);

    /**
     * @param {number} z forward/backward translation
     * @param {number} x
     * @param {number} y
     */
    public translate(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from rotate.xml )
     * 
     * Rotates a shape the amount specified by the <b>angle</b> parameter.
     * Angles should be specified in radians (values from 0 to TWO_PI) or
     * converted to radians with the <b>radians()</b> function.
     * <br/> <br/>
     * Objects are always rotated around their relative position to the origin
     * and positive numbers rotate objects in a clockwise direction.
     * Transformations apply to everything that happens after and subsequent
     * calls to the function accumulates the effect. For example, calling
     * <b>rotate(HALF_PI)</b> and then <b>rotate(HALF_PI)</b> is the same as
     * <b>rotate(PI)</b>. All tranformations are reset when <b>draw()</b>
     * begins again.
     * <br/> <br/>
     * Technically, <b>rotate()</b> multiplies the current transformation
     * matrix by a rotation matrix. This function can be further controlled by
     * the <b>pushMatrix()</b> and <b>popMatrix()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of rotation specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#rotateZ(float)
     * @see PGraphics#scale(float, float, float)
     * @see PApplet#radians(float)
     */
    public rotate(angle : number);

    /**
     * ( begin auto-generated from rotateX.xml )
     * 
     * Rotates a shape around the x-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to PI*2) or converted to radians with the <b>radians()</b>
     * function. Objects are always rotated around their relative position to
     * the origin and positive numbers rotate objects in a counterclockwise
     * direction. Transformations apply to everything that happens after and
     * subsequent calls to the function accumulates the effect. For example,
     * calling <b>rotateX(PI/2)</b> and then <b>rotateX(PI/2)</b> is the same
     * as <b>rotateX(PI)</b>. If <b>rotateX()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * This function requires using P3D as a third parameter to <b>size()</b>
     * as shown in the example above.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of rotation specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#rotateZ(float)
     * @see PGraphics#scale(float, float, float)
     * @see PGraphics#translate(float, float, float)
     */
    public rotateX(angle : number);

    /**
     * ( begin auto-generated from rotateY.xml )
     * 
     * Rotates a shape around the y-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to PI*2) or converted to radians with the <b>radians()</b>
     * function. Objects are always rotated around their relative position to
     * the origin and positive numbers rotate objects in a counterclockwise
     * direction. Transformations apply to everything that happens after and
     * subsequent calls to the function accumulates the effect. For example,
     * calling <b>rotateY(PI/2)</b> and then <b>rotateY(PI/2)</b> is the same
     * as <b>rotateY(PI)</b>. If <b>rotateY()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * This function requires using P3D as a third parameter to <b>size()</b>
     * as shown in the examples above.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of rotation specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateZ(float)
     * @see PGraphics#scale(float, float, float)
     * @see PGraphics#translate(float, float, float)
     */
    public rotateY(angle : number);

    /**
     * ( begin auto-generated from rotateZ.xml )
     * 
     * Rotates a shape around the z-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to PI*2) or converted to radians with the <b>radians()</b>
     * function. Objects are always rotated around their relative position to
     * the origin and positive numbers rotate objects in a counterclockwise
     * direction. Transformations apply to everything that happens after and
     * subsequent calls to the function accumulates the effect. For example,
     * calling <b>rotateZ(PI/2)</b> and then <b>rotateZ(PI/2)</b> is the same
     * as <b>rotateZ(PI)</b>. If <b>rotateZ()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * This function requires using P3D as a third parameter to <b>size()</b>
     * as shown in the examples above.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of rotation specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#scale(float, float, float)
     * @see PGraphics#translate(float, float, float)
     */
    public rotateZ(angle : number);

    /**
     * <h3>Advanced</h3>
     * Rotate about a vector in space. Same as the glRotatef() function.
     * @nowebref
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} angle
     */
    public rotate(angle : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from scale.xml )
     * 
     * Increases or decreases the size of a shape by expanding and contracting
     * vertices. Objects always scale from their relative origin to the
     * coordinate system. Scale values are specified as decimal percentages.
     * For example, the function call <b>scale(2.0)</b> increases the dimension
     * of a shape by 200%. Transformations apply to everything that happens
     * after and subsequent calls to the function multiply the effect. For
     * example, calling <b>scale(2.0)</b> and then <b>scale(1.5)</b> is the
     * same as <b>scale(3.0)</b>. If <b>scale()</b> is called within
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * Using this fuction with the <b>z</b> parameter requires using P3D as a
     * parameter for <b>size()</b> as shown in the example above. This function
     * can be further controlled by <b>pushMatrix()</b> and <b>popMatrix()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} s percentage to scale the object
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#translate(float, float, float)
     * @see PGraphics#rotate(float)
     * @see PGraphics#rotateX(float)
     * @see PGraphics#rotateY(float)
     * @see PGraphics#rotateZ(float)
     */
    public scale(s : number);

    /**
     * <h3>Advanced</h3>
     * Scale in X and Y. Equivalent to scale(sx, sy, 1).
     * 
     * Not recommended for use in 3D, because the z-dimension is just
     * scaled by 1, since there's no way to know what else to scale it by.
     * 
     * @param {number} x percentage to scale the object in the x-axis
     * @param {number} y percentage to scale the object in the y-axis
     */
    public scale(x : number, y : number);

    /**
     * @param {number} z percentage to scale the object in the z-axis
     * @param {number} x
     * @param {number} y
     */
    public scale(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from shearX.xml )
     * 
     * Shears a shape around the x-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to PI*2) or converted to radians with the <b>radians()</b>
     * function. Objects are always sheared around their relative position to
     * the origin and positive numbers shear objects in a clockwise direction.
     * Transformations apply to everything that happens after and subsequent
     * calls to the function accumulates the effect. For example, calling
     * <b>shearX(PI/2)</b> and then <b>shearX(PI/2)</b> is the same as
     * <b>shearX(PI)</b>. If <b>shearX()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * <br/> <br/>
     * Technically, <b>shearX()</b> multiplies the current transformation
     * matrix by a rotation matrix. This function can be further controlled by
     * the <b>pushMatrix()</b> and <b>popMatrix()</b> functions.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of shear specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#shearY(float)
     * @see PGraphics#scale(float, float, float)
     * @see PGraphics#translate(float, float, float)
     * @see PApplet#radians(float)
     */
    public shearX(angle : number);

    /**
     * ( begin auto-generated from shearY.xml )
     * 
     * Shears a shape around the y-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to PI*2) or converted to radians with the <b>radians()</b>
     * function. Objects are always sheared around their relative position to
     * the origin and positive numbers shear objects in a clockwise direction.
     * Transformations apply to everything that happens after and subsequent
     * calls to the function accumulates the effect. For example, calling
     * <b>shearY(PI/2)</b> and then <b>shearY(PI/2)</b> is the same as
     * <b>shearY(PI)</b>. If <b>shearY()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again.
     * <br/> <br/>
     * Technically, <b>shearY()</b> multiplies the current transformation
     * matrix by a rotation matrix. This function can be further controlled by
     * the <b>pushMatrix()</b> and <b>popMatrix()</b> functions.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @param {number} angle angle of shear specified in radians
     * @see PGraphics#popMatrix()
     * @see PGraphics#pushMatrix()
     * @see PGraphics#shearX(float)
     * @see PGraphics#scale(float, float, float)
     * @see PGraphics#translate(float, float, float)
     * @see PApplet#radians(float)
     */
    public shearY(angle : number);

    /**
     * ( begin auto-generated from resetMatrix.xml )
     * 
     * Replaces the current matrix with the identity matrix. The equivalent
     * function in OpenGL is glLoadIdentity().
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#applyMatrix(PMatrix)
     * @see PGraphics#printMatrix()
     */
    public resetMatrix();

    /**
     * ( begin auto-generated from applyMatrix.xml )
     * 
     * Multiplies the current matrix by the one specified through the
     * parameters. This is very slow because it will try to calculate the
     * inverse of the transform, so avoid it whenever possible. The equivalent
     * function in OpenGL is glMultMatrix().
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @source
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#resetMatrix()
     * @see PGraphics#printMatrix()
     * @param {*} source
     */
    public applyMatrix(source : PMatrix);

    public applyMatrix(source : PMatrix2D);

    /**
     * @param {number} n00 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n01 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n02 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n10 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n11 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n12 numbers which define the 4x4 matrix to be multiplied
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    public applyMatrix(source : PMatrix3D);

    /**
     * @param {number} n03 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n13 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n20 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n21 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n22 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n23 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n30 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n31 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n32 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n33 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    public getMatrix() : PMatrix;

    /**
     * Copy the current transformation matrix into the specified target.
     * Pass in null to create a new matrix.
     * @param {PMatrix2D} target
     * @return {PMatrix2D}
     */
    public getMatrix(target : PMatrix2D) : PMatrix2D;

    /**
     * Copy the current transformation matrix into the specified target.
     * Pass in null to create a new matrix.
     * @param {PMatrix3D} target
     * @return {PMatrix3D}
     */
    public getMatrix(target : PMatrix3D) : PMatrix3D;

    /**
     * Set the current transformation matrix to the contents of another.
     * @param {*} source
     */
    public setMatrix(source : PMatrix);

    /**
     * Set the current transformation to the contents of the specified source.
     * @param {PMatrix2D} source
     */
    public setMatrix(source : PMatrix2D);

    /**
     * Set the current transformation to the contents of the specified source.
     * @param {PMatrix3D} source
     */
    public setMatrix(source : PMatrix3D);

    /**
     * ( begin auto-generated from printMatrix.xml )
     * 
     * Prints the current matrix to the Console (the text window at the bottom
     * of Processing).
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#resetMatrix()
     * @see PGraphics#applyMatrix(PMatrix)
     */
    public printMatrix();

    /**
     * ( begin auto-generated from beginCamera.xml )
     * 
     * The <b>beginCamera()</b> and <b>endCamera()</b> functions enable
     * advanced customization of the camera space. The functions are useful if
     * you want to more control over camera movement, however for most users,
     * the <b>camera()</b> function will be sufficient.<br /><br />The camera
     * functions will replace any transformations (such as <b>rotate()</b> or
     * <b>translate()</b>) that occur before them in <b>draw()</b>, but they
     * will not automatically replace the camera transform itself. For this
     * reason, camera functions should be placed at the beginning of
     * <b>draw()</b> (so that transformations happen afterwards), and the
     * <b>camera()</b> function can be used after <b>beginCamera()</b> if you
     * want to reset the camera before applying transformations.<br /><br
     * />This function sets the matrix mode to the camera matrix so calls such
     * as <b>translate()</b>, <b>rotate()</b>, applyMatrix() and resetMatrix()
     * affect the camera. <b>beginCamera()</b> should always be used with a
     * following <b>endCamera()</b> and pairs of <b>beginCamera()</b> and
     * <b>endCamera()</b> cannot be nested.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#camera()
     * @see PGraphics#endCamera()
     * @see PGraphics#applyMatrix(PMatrix)
     * @see PGraphics#resetMatrix()
     * @see PGraphics#translate(float, float, float)
     * @see PGraphics#scale(float, float, float)
     */
    public beginCamera();

    /**
     * ( begin auto-generated from endCamera.xml )
     * 
     * The <b>beginCamera()</b> and <b>endCamera()</b> functions enable
     * advanced customization of the camera space. Please see the reference for
     * <b>beginCamera()</b> for a description of how the functions are used.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#beginCamera()
     * @see PGraphics#camera(float, float, float, float, float, float, float, float, float)
     */
    public endCamera();

    /**
     * ( begin auto-generated from printCamera.xml )
     * 
     * Prints the current camera matrix to the Console (the text window at the
     * bottom of Processing).
     * 
     * ( end auto-generated )
     * @webref lights_camera:camera
     * @see PGraphics#camera(float, float, float, float, float, float, float, float, float)
     */
    public printCamera();

    /**
     * ( begin auto-generated from ortho.xml )
     * 
     * Sets an orthographic projection and defines a parallel clipping volume.
     * All objects with the same dimension appear the same size, regardless of
     * whether they are near or far from the camera. The parameters to this
     * function specify the clipping volume where left and right are the
     * minimum and maximum x values, top and bottom are the minimum and maximum
     * y values, and near and far are the minimum and maximum z values. If no
     * parameters are given, the default is used: ortho(0, width, 0, height,
     * -10, 10).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     */
    public ortho();

    /**
     * @param {number} left left plane of the clipping volume
     * @param {number} right right plane of the clipping volume
     * @param {number} bottom bottom plane of the clipping volume
     * @param {number} top top plane of the clipping volume
     */
    public ortho(left : number, right : number, bottom : number, top : number);

    /**
     * @param {number} near maximum distance from the origin to the viewer
     * @param {number} far maximum distance from the origin away from the viewer
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     */
    public ortho(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * ( begin auto-generated from perspective.xml )
     * 
     * Sets a perspective projection applying foreshortening, making distant
     * objects appear smaller than closer ones. The parameters define a viewing
     * volume with the shape of truncated pyramid. Objects near to the front of
     * the volume appear their actual size, while farther objects appear
     * smaller. This projection simulates the perspective of the world more
     * accurately than orthographic projection. The version of perspective
     * without parameters sets the default perspective and the version with
     * four parameters allows the programmer to set the area precisely. The
     * default values are: perspective(PI/3.0, width/height, cameraZ/10.0,
     * cameraZ*10.0) where cameraZ is ((height/2.0) / tan(PI*60.0/360.0));
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     */
    public perspective();

    /**
     * @param {number} fovy field-of-view angle (in radians) for vertical direction
     * @param {number} aspect ratio of width to height
     * @param {number} zNear z-position of nearest clipping plane
     * @param {number} zFar z-position of farthest clipping plane
     */
    public perspective(fovy : number, aspect : number, zNear : number, zFar : number);

    /**
     * ( begin auto-generated from frustum.xml )
     * 
     * Sets a perspective matrix defined through the parameters. Works like
     * glFrustum, except it wipes out the current perspective matrix rather
     * than muliplying itself with it.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @param {number} left left coordinate of the clipping plane
     * @param {number} right right coordinate of the clipping plane
     * @param {number} bottom bottom coordinate of the clipping plane
     * @param {number} top top coordinate of the clipping plane
     * @param {number} near near component of the clipping plane; must be greater than zero
     * @param {number} far far component of the clipping plane; must be greater than the near value
     * @see PGraphics#camera(float, float, float, float, float, float, float, float, float)
     * @see PGraphics#beginCamera()
     * @see PGraphics#endCamera()
     * @see PGraphics#perspective(float, float, float, float)
     */
    public frustum(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * ( begin auto-generated from printProjection.xml )
     * 
     * Prints the current projection matrix to the Console (the text window at
     * the bottom of Processing).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#camera(float, float, float, float, float, float, float, float, float)
     */
    public printProjection();

    /**
     * ( begin auto-generated from screenX.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the X value for
     * where it will appear on a (two-dimensional) screen.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @see PGraphics#screenY(float, float, float)
     * @see PGraphics#screenZ(float, float, float)
     * @return {number}
     */
    public screenX(x : number, y : number) : number;

    /**
     * ( begin auto-generated from screenY.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the Y value for
     * where it will appear on a (two-dimensional) screen.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @see PGraphics#screenX(float, float, float)
     * @see PGraphics#screenZ(float, float, float)
     * @return {number}
     */
    public screenY(x : number, y : number) : number;

    /**
     * @param {number} z 3D z-coordinate to be mapped
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public screenX(x : number, y : number, z : number) : number;

    /**
     * @param {number} z 3D z-coordinate to be mapped
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public screenY(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from screenZ.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the Z value for
     * where it will appear on a (two-dimensional) screen.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @param {number} z 3D z-coordinate to be mapped
     * @see PGraphics#screenX(float, float, float)
     * @see PGraphics#screenY(float, float, float)
     * @return {number}
     */
    public screenZ(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelX.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This
     * returns the X value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The X value can be used
     * to place an object in space relative to the location of the original
     * point once the transformations are no longer in use.
     * <br/> <br/>
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and
     * <b>modelZ()</b> functions record the location of a box in space after
     * being placed using a series of translate and rotate commands. After
     * popMatrix() is called, those transformations no longer apply, but the
     * (x, y, z) coordinate returned by the model functions is used to place
     * another box in the same location.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @param {number} z 3D z-coordinate to be mapped
     * @see PGraphics#modelY(float, float, float)
     * @see PGraphics#modelZ(float, float, float)
     * @return {number}
     */
    public modelX(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelY.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This
     * returns the Y value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The Y value can be used
     * to place an object in space relative to the location of the original
     * point once the transformations are no longer in use.<br />
     * <br />
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and
     * <b>modelZ()</b> functions record the location of a box in space after
     * being placed using a series of translate and rotate commands. After
     * popMatrix() is called, those transformations no longer apply, but the
     * (x, y, z) coordinate returned by the model functions is used to place
     * another box in the same location.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @param {number} z 3D z-coordinate to be mapped
     * @see PGraphics#modelX(float, float, float)
     * @see PGraphics#modelZ(float, float, float)
     * @return {number}
     */
    public modelY(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelZ.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This
     * returns the Z value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The Z value can be used
     * to place an object in space relative to the location of the original
     * point once the transformations are no longer in use.<br />
     * <br />
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and
     * <b>modelZ()</b> functions record the location of a box in space after
     * being placed using a series of translate and rotate commands. After
     * popMatrix() is called, those transformations no longer apply, but the
     * (x, y, z) coordinate returned by the model functions is used to place
     * another box in the same location.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:coordinates
     * @param {number} x 3D x-coordinate to be mapped
     * @param {number} y 3D y-coordinate to be mapped
     * @param {number} z 3D z-coordinate to be mapped
     * @see PGraphics#modelX(float, float, float)
     * @see PGraphics#modelY(float, float, float)
     * @return {number}
     */
    public modelZ(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from pushStyle.xml )
     * 
     * The <b>pushStyle()</b> function saves the current style settings and
     * <b>popStyle()</b> restores the prior settings. Note that these functions
     * are always used together. They allow you to change the style settings
     * and later return to what you had. When a new style is started with
     * <b>pushStyle()</b>, it builds on the current style information. The
     * <b>pushStyle()</b> and <b>popStyle()</b> functions can be embedded to
     * provide more control (see the second example above for a demonstration.)
     * <br /><br />
     * The style information controlled by the following functions are included
     * in the style:
     * fill(), stroke(), tint(), strokeWeight(), strokeCap(), strokeJoin(),
     * imageMode(), rectMode(), ellipseMode(), shapeMode(), colorMode(),
     * textAlign(), textFont(), textMode(), textSize(), textLeading(),
     * emissive(), specular(), shininess(), ambient()
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @see PGraphics#popStyle()
     */
    public pushStyle();

    /**
     * ( begin auto-generated from popStyle.xml )
     * 
     * The <b>pushStyle()</b> function saves the current style settings and
     * <b>popStyle()</b> restores the prior settings; these functions are
     * always used together. They allow you to change the style settings and
     * later return to what you had. When a new style is started with
     * <b>pushStyle()</b>, it builds on the current style information. The
     * <b>pushStyle()</b> and <b>popStyle()</b> functions can be embedded to
     * provide more control (see the second example above for a demonstration.)
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @see PGraphics#pushStyle()
     */
    public popStyle();

    public style(s : PStyle);

    public getStyle() : PStyle;

    public getStyle(s : PStyle) : PStyle;

    /**
     * ( begin auto-generated from noStroke.xml )
     * 
     * Disables drawing the stroke (outline). If both <b>noStroke()</b> and
     * <b>noFill()</b> are called, nothing will be drawn to the screen.
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#fill(float, float, float, float)
     * @see PGraphics#noFill()
     */
    public noStroke();

    strokeFromCalc();

    /**
     * ( begin auto-generated from noTint.xml )
     * 
     * Removes the current fill value for displaying images and reverts to
     * displaying images with their original hues.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @usage web_application
     * @see PGraphics#tint(float, float, float, float)
     * @see PGraphics#image(PImage, float, float, float, float)
     */
    public noTint();

    tintFromCalc();

    /**
     * ( begin auto-generated from noFill.xml )
     * 
     * Disables filling geometry. If both <b>noStroke()</b> and <b>noFill()</b>
     * are called, nothing will be drawn to the screen.
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @usage web_application
     * @see PGraphics#fill(float, float, float, float)
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#noStroke()
     */
    public noFill();

    fillFromCalc();

    /**
     * ( begin auto-generated from ambient.xml )
     * 
     * Sets the ambient reflectance for shapes drawn to the screen. This is
     * combined with the ambient light component of environment. The color
     * components set through the parameters define the reflectance. For
     * example in the default color mode, setting v1=255, v2=126, v3=0, would
     * cause all the red light to reflect and half of the green light to
     * reflect. Used in combination with <b>emissive()</b>, <b>specular()</b>,
     * and <b>shininess()</b> in setting the material properties of shapes.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:material_properties
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#emissive(float, float, float)
     * @see PGraphics#specular(float, float, float)
     * @see PGraphics#shininess(float)
     */
    public ambient(rgb : number);

    /**
     * @param {number} gray number specifying value between white and black
     */
    public ambient(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    public ambient(v1 : number, v2 : number, v3 : number);

    ambientFromCalc();

    /**
     * ( begin auto-generated from specular.xml )
     * 
     * Sets the specular color of the materials used for shapes drawn to the
     * screen, which sets the color of hightlights. Specular refers to light
     * which bounces off a surface in a perferred direction (rather than
     * bouncing in all directions like a diffuse light). Used in combination
     * with <b>emissive()</b>, <b>ambient()</b>, and <b>shininess()</b> in
     * setting the material properties of shapes.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:material_properties
     * @usage web_application
     * @param {number} rgb color to set
     * @see PGraphics#lightSpecular(float, float, float)
     * @see PGraphics#ambient(float, float, float)
     * @see PGraphics#emissive(float, float, float)
     * @see PGraphics#shininess(float)
     */
    public specular(rgb : number);

    /**
     * gray number specifying value between white and black
     * @param {number} gray
     */
    public specular(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    public specular(v1 : number, v2 : number, v3 : number);

    specularFromCalc();

    /**
     * ( begin auto-generated from emissive.xml )
     * 
     * Sets the emissive color of the material used for drawing shapes drawn to
     * the screen. Used in combination with <b>ambient()</b>,
     * <b>specular()</b>, and <b>shininess()</b> in setting the material
     * properties of shapes.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:material_properties
     * @usage web_application
     * @param {number} rgb color to set
     * @see PGraphics#ambient(float, float, float)
     * @see PGraphics#specular(float, float, float)
     * @see PGraphics#shininess(float)
     */
    public emissive(rgb : number);

    /**
     * gray number specifying value between white and black
     * @param {number} gray
     */
    public emissive(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    public emissive(v1 : number, v2 : number, v3 : number);

    emissiveFromCalc();

    /**
     * ( begin auto-generated from noLights.xml )
     * 
     * Disable all lighting. Lighting is turned off by default and enabled with
     * the <b>lights()</b> function. This function can be used to disable
     * lighting so that 2D geometry (which does not require lighting) can be
     * drawn after a set of lighted 3D geometry.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @see PGraphics#lights()
     */
    public noLights();

    /**
     * ( begin auto-generated from ambientLight.xml )
     * 
     * Adds an ambient light. Ambient light doesn't come from a specific
     * direction, the rays have light have bounced around so much that objects
     * are evenly lit from all sides. Ambient lights are almost always used in
     * combination with other types of lights. Lights need to be included in
     * the <b>draw()</b> to remain persistent in a looping program. Placing
     * them in the <b>setup()</b> of a looping program will cause them to only
     * have an effect the first time through the loop. The effect of the
     * parameters is determined by the current color mode.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @see PGraphics#lights()
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     */
    public ambientLight(v1 : number, v2 : number, v3 : number);

    /**
     * @param {number} x x-coordinate of the light
     * @param {number} y y-coordinate of the light
     * @param {number} z z-coordinate of the light
     * @param {number} v1
     * @param {number} v2
     * @param {number} v3
     */
    public ambientLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from directionalLight.xml )
     * 
     * Adds a directional light. Directional light comes from one direction and
     * is stronger when hitting a surface squarely and weaker if it hits at a a
     * gentle angle. After hitting a surface, a directional lights scatters in
     * all directions. Lights need to be included in the <b>draw()</b> to
     * remain persistent in a looping program. Placing them in the
     * <b>setup()</b> of a looping program will cause them to only have an
     * effect the first time through the loop. The affect of the <b>v1</b>,
     * <b>v2</b>, and <b>v3</b> parameters is determined by the current color
     * mode. The <b>nx</b>, <b>ny</b>, and <b>nz</b> parameters specify the
     * direction the light is facing. For example, setting <b>ny</b> to -1 will
     * cause the geometry to be lit from below (the light is facing directly upward).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @param {number} nx direction along the x-axis
     * @param {number} ny direction along the y-axis
     * @param {number} nz direction along the z-axis
     * @see PGraphics#lights()
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     */
    public directionalLight(v1 : number, v2 : number, v3 : number, nx : number, ny : number, nz : number);

    /**
     * ( begin auto-generated from pointLight.xml )
     * 
     * Adds a point light. Lights need to be included in the <b>draw()</b> to
     * remain persistent in a looping program. Placing them in the
     * <b>setup()</b> of a looping program will cause them to only have an
     * effect the first time through the loop. The affect of the <b>v1</b>,
     * <b>v2</b>, and <b>v3</b> parameters is determined by the current color
     * mode. The <b>x</b>, <b>y</b>, and <b>z</b> parameters set the position
     * of the light.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @param {number} x x-coordinate of the light
     * @param {number} y y-coordinate of the light
     * @param {number} z z-coordinate of the light
     * @see PGraphics#lights()
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     */
    public pointLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from spotLight.xml )
     * 
     * Adds a spot light. Lights need to be included in the <b>draw()</b> to
     * remain persistent in a looping program. Placing them in the
     * <b>setup()</b> of a looping program will cause them to only have an
     * effect the first time through the loop. The affect of the <b>v1</b>,
     * <b>v2</b>, and <b>v3</b> parameters is determined by the current color
     * mode. The <b>x</b>, <b>y</b>, and <b>z</b> parameters specify the
     * position of the light and <b>nx</b>, <b>ny</b>, <b>nz</b> specify the
     * direction or light. The <b>angle</b> parameter affects angle of the
     * spotlight cone.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @param {number} x x-coordinate of the light
     * @param {number} y y-coordinate of the light
     * @param {number} z z-coordinate of the light
     * @param {number} nx direction along the x axis
     * @param {number} ny direction along the y axis
     * @param {number} nz direction along the z axis
     * @param {number} angle angle of the spotlight cone
     * @param {number} concentration exponent determining the center bias of the cone
     * @see PGraphics#lights()
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     */
    public spotLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number, nx : number, ny : number, nz : number, angle : number, concentration : number);

    /**
     * ( begin auto-generated from lightFalloff.xml )
     * 
     * Sets the falloff rates for point lights, spot lights, and ambient
     * lights. The parameters are used to determine the falloff with the
     * following equation:<br /><br />d = distance from light position to
     * vertex position<br />falloff = 1 / (CONSTANT + d * LINEAR + (d*d) *
     * QUADRATIC)<br /><br />Like <b>fill()</b>, it affects only the elements
     * which are created after it in the code. The default value if
     * <b>LightFalloff(1.0, 0.0, 0.0)</b>. Thinking about an ambient light with
     * a falloff can be tricky. It is used, for example, if you wanted a region
     * of your scene to be lit ambiently one color and another region to be lit
     * ambiently by another color, you would use an ambient light with location
     * and falloff. You can think of it as a point light that doesn't care
     * which direction a surface is facing.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} constant constant value or determining falloff
     * @param {number} linear linear value for determining falloff
     * @param {number} quadratic quadratic value for determining falloff
     * @see PGraphics#lights()
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#lightSpecular(float, float, float)
     */
    public lightFalloff(constant : number, linear : number, quadratic : number);

    /**
     * ( begin auto-generated from background.xml )
     * 
     * The <b>background()</b> function sets the color used for the background
     * of the Processing window. The default background is light gray. In the
     * <b>draw()</b> function, the background color is used to clear the
     * display window at the beginning of each frame.
     * <br/> <br/>
     * An image can also be used as the background for a sketch, however its
     * width and height must be the same size as the sketch window. To resize
     * an image 'b' to the size of the sketch window, use b.resize(width, height).
     * <br/> <br/>
     * Images used as background will ignore the current <b>tint()</b> setting.
     * <br/> <br/>
     * It is not possible to use transparency (alpha) in background colors with
     * the main drawing surface, however they will work properly with <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * <p>Clear the background with a color that includes an alpha value. This can
     * only be used with objects created by createGraphics(), because the main
     * drawing surface cannot be set transparent.</p>
     * <p>It might be tempting to use this function to partially clear the screen
     * on each frame, however that's not how this function works. When calling
     * background(), the pixels will be replaced with pixels that have that level
     * of transparency. To do a semi-transparent overlay, use fill() with alpha
     * and draw a rectangle.</p>
     * 
     * @webref color:setting
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#stroke(float)
     * @see PGraphics#fill(float)
     * @see PGraphics#tint(float)
     * @see PGraphics#colorMode(int)
     */
    public background(rgb : number);

    /**
     * @param {number} alpha opacity of the background
     * @param {number} rgb
     */
    public background(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    public background(gray : number);

    public background(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on the current color mode)
     * @param {number} v2 green or saturation value (depending on the current color mode)
     * @param {number} v3 blue or brightness value (depending on the current color mode)
     */
    public background(v1 : number, v2 : number, v3 : number);

    public background(v1 : number, v2 : number, v3 : number, alpha : number);

    /**
     * @webref color:setting
     */
    public clear();

    backgroundFromCalc();

    /**
     * Takes an RGB or ARGB image and sets it as the background.
     * The width and height of the image must be the same size as the sketch.
     * Use image.resize(width, height) to make short work of such a task.<br/>
     * <br/>
     * Note that even if the image is set as RGB, the high 8 bits of each pixel
     * should be set opaque (0xFF000000) because the image data will be copied
     * directly to the screen, and non-opaque background images may have strange
     * behavior. Use image.filter(OPAQUE) to handle this easily.<br/>
     * <br/>
     * When using 3D, this will also clear the zbuffer (if it exists).
     * 
     * @param {PImage} image PImage to set as background (must be same size as the sketch window)
     */
    public background(image : PImage);

    /**
     * Actually set the background image. This is separated from the error
     * handling and other semantic goofiness that is shared across renderers.
     * @param {PImage} image
     */
    backgroundImpl(image : PImage);

    /**
     * Actual implementation of clearing the background, now that the
     * internal variables for background color have been set. Called by the
     * backgroundFromCalc() method, which is what all the other background()
     * methods call once the work is done.
     */
    backgroundImpl();

    /**
     * Set the fill to either a grayscale value or an ARGB int.
     * <P>
     * The problem with this code is that it has to detect between these two
     * situations automatically. This is done by checking to see if the high bits
     * (the alpha for 0xAA000000) is set, and if not, whether the color value
     * that follows is less than colorModeX (first param passed to colorMode).
     * <P>
     * This auto-detect would break in the following situation:
     * <PRE>size(256, 256);
     * for (int i = 0; i < 256; i++) {
     * color c = color(0, 0, 0, i);
     * stroke(c);
     * line(i, 0, i, 256);
     * }</PRE>
     * ...on the first time through the loop, where (i == 0), since the color
     * itself is zero (black) then it would appear indistinguishable from code
     * that reads "fill(0)". The solution is to use the four parameter versions
     * of stroke or fill to more directly specify the desired result.
     * @param {number} rgb
     */
    colorCalc(rgb : number);

    colorCalc(rgb : number, alpha : number);

    colorCalc(gray : number);

    colorCalc(gray : number, alpha : number);

    colorCalc(x : number, y : number, z : number);

    colorCalc(x : number, y : number, z : number, a : number);

    /**
     * Unpacks AARRGGBB color for direct use with colorCalc.
     * <P>
     * Handled here with its own function since this is indepenent
     * of the color mode.
     * <P>
     * Strangely the old version of this code ignored the alpha
     * value. not sure if that was a bug or what.
     * <P>
     * Note, no need for a bounds check for 'argb' since it's a 32 bit number.
     * Bounds now checked on alpha, however (rev 0225).
     * @param {number} argb
     * @param {number} alpha
     */
    colorCalcARGB(argb : number, alpha : number);

    public color(c : number) : number;

    public color(gray : number) : number;

    /**
     * @param {number} c can be packed ARGB or a gray in this case
     * @param {number} alpha
     * @return {number}
     */
    public color(c : number, alpha : number) : number;

    /**
     * @param {number} c can be packed ARGB or a gray in this case
     * @param {number} alpha
     * @return {number}
     */
    public color(c : number, alpha : number) : number;

    public color(gray : number, alpha : number) : number;

    public color(v1 : number, v2 : number, v3 : number) : number;

    public color(v1 : number, v2 : number, v3 : number) : number;

    public color(v1 : number, v2 : number, v3 : number, a : number) : number;

    public color(v1 : number, v2 : number, v3 : number, a : number) : number;

    /**
     * ( begin auto-generated from alpha.xml )
     * 
     * Extracts the alpha value from a color.
     * 
     * ( end auto-generated )
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#green(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @return {number}
     */
    public alpha(rgb : number) : number;

    /**
     * ( begin auto-generated from red.xml )
     * 
     * Extracts the red value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a  float so be
     * careful not to assign it to an int value.<br /><br />The red() function
     * is easy to use and undestand, but is slower than another technique. To
     * achieve the same results when working in <b>colorMode(RGB, 255)</b>, but
     * with greater speed, use the &gt;&gt; (right shift) operator with a bit
     * mask. For example, the following two lines of code are equivalent:<br
     * /><pre>float r1 = red(myColor);<br />float r2 = myColor &gt;&gt; 16
     * &amp; 0xFF;</pre>
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#green(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @see_external rightshift
     * @return {number}
     */
    public red(rgb : number) : number;

    /**
     * ( begin auto-generated from green.xml )
     * 
     * Extracts the green value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a  float so be
     * careful not to assign it to an int value.<br /><br />The <b>green()</b>
     * function is easy to use and undestand, but is slower than another
     * technique. To achieve the same results when working in <b>colorMode(RGB,
     * 255)</b>, but with greater speed, use the &gt;&gt; (right shift)
     * operator with a bit mask. For example, the following two lines of code
     * are equivalent:<br /><pre>float r1 = green(myColor);<br />float r2 =
     * myColor &gt;&gt; 8 &amp; 0xFF;</pre>
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @see_external rightshift
     * @return {number}
     */
    public green(rgb : number) : number;

    /**
     * ( begin auto-generated from blue.xml )
     * 
     * Extracts the blue value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a  float so be
     * careful not to assign it to an int value.<br /><br />The <b>blue()</b>
     * function is easy to use and undestand, but is slower than another
     * technique. To achieve the same results when working in <b>colorMode(RGB,
     * 255)</b>, but with greater speed, use a bit mask to remove the other
     * color components. For example, the following two lines of code are
     * equivalent:<br /><pre>float r1 = blue(myColor);<br />float r2 = myColor
     * &amp; 0xFF;</pre>
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#green(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @see_external rightshift
     * @return {number}
     */
    public blue(rgb : number) : number;

    /**
     * ( begin auto-generated from hue.xml )
     * 
     * Extracts the hue value from a color.
     * 
     * ( end auto-generated )
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#green(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @return {number}
     */
    public hue(rgb : number) : number;

    /**
     * ( begin auto-generated from saturation.xml )
     * 
     * Extracts the saturation value from a color.
     * 
     * ( end auto-generated )
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#green(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#brightness(int)
     * @return {number}
     */
    public saturation(rgb : number) : number;

    /**
     * ( begin auto-generated from brightness.xml )
     * 
     * Extracts the brightness value from a color.
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#red(int)
     * @see PGraphics#green(int)
     * @see PGraphics#blue(int)
     * @see PGraphics#alpha(int)
     * @see PGraphics#hue(int)
     * @see PGraphics#saturation(int)
     * @return {number}
     */
    public brightness(rgb : number) : number;

    /**
     * ( begin auto-generated from lerpColor.xml )
     * 
     * Calculates a color or colors between two color at a specific increment.
     * The <b>amt</b> parameter is the amount to interpolate between the two
     * values where 0.0 equal to the first point, 0.1 is very near the first
     * point, 0.5 is half-way in between, etc.
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} c1 interpolate from this color
     * @param {number} c2 interpolate to this color
     * @param {number} amt between 0.0 and 1.0
     * @see PImage#blendColor(int, int, int)
     * @see PGraphics#color(float, float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    public lerpColor(c1 : number, c2 : number, amt : number) : number;

    static lerpColorHSB1 : number[];

    static lerpColorHSB2 : number[];

    /**
     * @nowebref
     * Interpolate between two colors. Like lerp(), but for the
     * individual color components of a color supplied as an int value.
     * @param {number} c1
     * @param {number} c2
     * @param {number} amt
     * @param {number} mode
     * @return {number}
     */
    public static lerpColor(c1 : number, c2 : number, amt : number, mode : number) : number;

    /**
     * Record individual lines and triangles by echoing them to another renderer.
     * @param {PGraphics} rawGraphics
     */
    public beginRaw(rawGraphics : PGraphics);

    public endRaw();

    public haveRaw() : boolean;

    public getRaw() : PGraphics;

    static warnings : any;

    /**
     * Show a renderer error, and keep track of it so that it's only shown once.
     * @param {string} msg the error message (which will be stored for later comparison)
     */
    public static showWarning(msg : string);

    /**
     * Version of showWarning() that takes a parsed String.
     * @param {string} msg
     * @param {Array} args
     */
    public static showWarning(msg : string, ...args : any[]);

    /**
     * Display a warning that the specified method is only available with 3D.
     * @param {string} method The method name (no parentheses)
     */
    public static showDepthWarning(method : string);

    /**
     * Display a warning that the specified method that takes x, y, z parameters
     * can only be used with x and y parameters in this renderer.
     * @param {string} method The method name (no parentheses)
     */
    public static showDepthWarningXYZ(method : string);

    /**
     * Display a warning that the specified method is simply unavailable.
     * @param {string} method
     */
    public static showMethodWarning(method : string);

    /**
     * Error that a particular variation of a method is unavailable (even though
     * other variations are). For instance, if vertex(x, y, u, v) is not
     * available, but vertex(x, y) is just fine.
     * @param {string} str
     */
    public static showVariationWarning(str : string);

    /**
     * Display a warning that the specified method is not implemented, meaning
     * that it could be either a completely missing function, although other
     * variations of it may still work properly.
     * @param {string} method
     */
    public static showMissingWarning(method : string);

    /**
     * Show an renderer-related exception that halts the program. Currently just
     * wraps the message as a RuntimeException and throws it, but might do
     * something more specific might be used in the future.
     * @param {string} msg
     */
    public static showException(msg : string);

    /**
     * Same as below, but defaults to a 12 point font, just as MacWrite intended.
     * @param {string} method
     */
    defaultFontOrDeath(method : string);

    /**
     * First try to create a default font, but if that's not possible, throw
     * an exception that halts the program because textFont() has not been used
     * prior to the specified method.
     * @param {string} method
     * @param {number} size
     */
    defaultFontOrDeath(method : string, size : number);

    /**
     * Return true if this renderer should be drawn to the screen. Defaults to
     * returning true, since nearly all renderers are on-screen beasts. But can
     * be overridden for subclasses like PDF so that a window doesn't open up.
     * <br/> <br/>
     * A better name? showFrame, displayable, isVisible, visible, shouldDisplay,
     * what to call this?
     * @return {boolean}
     */
    public displayable() : boolean;

    /**
     * Return true if this renderer supports 2D drawing. Defaults to true.
     * @return {boolean}
     */
    public is2D() : boolean;

    /**
     * Return true if this renderer supports 3D drawing. Defaults to false.
     * @return {boolean}
     */
    public is3D() : boolean;

    /**
     * Return true if this renderer does rendering through OpenGL. Defaults to false.
     * @return {boolean}
     */
    public isGL() : boolean;

    public is2X() : boolean;

    processImageBeforeAsyncSave(image : PImage);

    /**
     * If there is running async save task for this file, blocks until it completes.
     * Has to be called on main thread because OpenGL overrides this and calls GL.
     * @param {string} filename
     */
    awaitAsyncSaveCompletion(filename : string);

    static asyncImageSaver : PGraphics.AsyncImageSaver;
}

declare namespace PGraphics {

    export class AsyncImageSaver {
        static TARGET_COUNT : number;

        targetPool : any;

        saveExecutor : any;

        targetsCreated : number;

        runningTasks : any;

        runningTasksLock : any;

        static TIME_AVG_FACTOR : number;

        avgNanos : number;

        lastTime : number;

        lastFrameCount : number;

        public constructor();

        public dispose();

        public hasAvailableTarget() : boolean;

        /**
         * After taking a target, you must call saveTargetAsync() or
         * returnUnusedTarget(), otherwise one thread won't be able to run
         * @param {number} requestedWidth
         * @param {number} requestedHeight
         * @param {number} format
         * @return {PImage}
         */
        public getAvailableTarget(requestedWidth : number, requestedHeight : number, format : number) : PImage;

        public returnUnusedTarget(target : PImage);

        public saveTargetAsync(renderer : PGraphics, target : PImage, file : any);

        public awaitAsyncSaveCompletion(file : any);
    }
}



