/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * OpenGL renderer.
 * @class
 * @extends PGraphics
 */
declare class PGraphicsOpenGL extends PGraphics {
    /**
     * Interface between Processing and OpenGL
     */
    public pgl : PGL;

    /**
     * The renderer currently in use.
     */
    public currentPG : PGraphicsOpenGL;

    /**
     * Font cache for texture objects.
     */
    fontMap : any;

    static reachableWeakReferences : Array<PGraphicsOpenGL.Disposable<any>>;

    /**
     * Whether the PGraphics object is ready to render or not.
     */
    public initialized : boolean;

    /**
     * Flush modes: continuously (geometry is flushed after each call to
     * endShape) when-full (geometry is accumulated until a maximum size is
     * reached.
     */
    static FLUSH_CONTINUOUSLY : number;

    static FLUSH_WHEN_FULL : number;

    /**
     * Type of geometry: immediate is that generated with beginShape/vertex/
     * endShape, retained is the result of creating a PShapeOpenGL object with
     * createShape.
     */
    static IMMEDIATE : number;

    static RETAINED : number;

    /**
     * Current flush mode.
     */
    flushMode : number;

    bufPolyVertex : VertexBuffer;

    bufPolyColor : VertexBuffer;

    bufPolyNormal : VertexBuffer;

    bufPolyTexcoord : VertexBuffer;

    bufPolyAmbient : VertexBuffer;

    bufPolySpecular : VertexBuffer;

    bufPolyEmissive : VertexBuffer;

    bufPolyShininess : VertexBuffer;

    bufPolyIndex : VertexBuffer;

    polyBuffersCreated : boolean;

    polyBuffersContext : number;

    bufLineVertex : VertexBuffer;

    bufLineColor : VertexBuffer;

    bufLineAttrib : VertexBuffer;

    bufLineIndex : VertexBuffer;

    lineBuffersCreated : boolean;

    lineBuffersContext : number;

    bufPointVertex : VertexBuffer;

    bufPointColor : VertexBuffer;

    bufPointAttrib : VertexBuffer;

    bufPointIndex : VertexBuffer;

    pointBuffersCreated : boolean;

    pointBuffersContext : number;

    polyAttribs : PGraphicsOpenGL.AttributeMap;

    static INIT_VERTEX_BUFFER_SIZE : number;

    static INIT_INDEX_BUFFER_SIZE : number;

    static glParamsRead : boolean;

    /**
     * Extensions used by Processing
     */
    public static npotTexSupported : boolean;

    public static autoMipmapGenSupported : boolean;

    public static fboMultisampleSupported : boolean;

    public static packedDepthStencilSupported : boolean;

    public static anisoSamplingSupported : boolean;

    public static blendEqSupported : boolean;

    public static readBufferSupported : boolean;

    public static drawBufferSupported : boolean;

    /**
     * Some hardware limits
     */
    public static maxTextureSize : number;

    public static maxSamples : number;

    public static maxAnisoAmount : number;

    public static depthBits : number;

    public static stencilBits : number;

    /**
     * OpenGL information strings
     */
    public static OPENGL_VENDOR : string;

    public static OPENGL_RENDERER : string;

    public static OPENGL_VERSION : string;

    public static OPENGL_EXTENSIONS : string;

    public static GLSL_VERSION : string;

    static defColorShaderVertURL : URL;

    static defTextureShaderVertURL : URL;

    static defLightShaderVertURL : URL;

    static defTexlightShaderVertURL : URL;

    static defColorShaderFragURL : URL;

    static defTextureShaderFragURL : URL;

    static defLightShaderFragURL : URL;

    static defTexlightShaderFragURL : URL;

    static defLineShaderVertURL : URL;

    static defLineShaderFragURL : URL;

    static defPointShaderVertURL : URL;

    static defPointShaderFragURL : URL;

    static maskShaderFragURL : URL;

    defColorShader : PShader;

    defTextureShader : PShader;

    defLightShader : PShader;

    defTexlightShader : PShader;

    defLineShader : PShader;

    defPointShader : PShader;

    maskShader : PShader;

    polyShader : PShader;

    lineShader : PShader;

    pointShader : PShader;

    inGeo : PGraphicsOpenGL.InGeometry;

    tessGeo : PGraphicsOpenGL.TessGeometry;

    texCache : PGraphicsOpenGL.TexCache;

    tessellator : PGraphicsOpenGL.Tessellator;

    sorter : PGraphicsOpenGL.DepthSorter;

    isDepthSortingEnabled : boolean;

    asyncPixelReader : PGraphicsOpenGL.AsyncPixelReader;

    asyncPixelReaderInitialized : boolean;

    static ongoingPixelTransfers : Array<PGraphicsOpenGL.AsyncPixelReader>;

    static ongoingPixelTransfersIterable : Array<PGraphicsOpenGL.AsyncPixelReader>;

    /**
     * Camera field of view.
     */
    public cameraFOV : number;

    /**
     * Default position of the camera.
     */
    public cameraX : number;

    /**
     * Default position of the camera.
     */
    public cameraY : number;

    /**
     * Default position of the camera.
     */
    public cameraZ : number;

    /**
     * Distance of the near and far planes.
     */
    public cameraNear : number;

    /**
     * Distance of the near and far planes.
     */
    public cameraFar : number;

    /**
     * Aspect ratio of camera's view.
     */
    public cameraAspect : number;

    /**
     * Default camera properties.
     */
    public defCameraFOV : number;

    public defCameraX : number;

    public defCameraY : number;

    public defCameraZ : number;

    public defCameraNear : number;

    public defCameraFar : number;

    public defCameraAspect : number;

    /**
     * Distance between camera eye and center.
     */
    eyeDist : number;

    /**
     * Flag to indicate that we are inside beginCamera/endCamera block.
     */
    manipulatingCamera : boolean;

    public projection : PMatrix3D;

    public camera : any;

    public cameraInv : PMatrix3D;

    public modelview : PMatrix3D;

    public modelviewInv : PMatrix3D;

    public projmodelview : PMatrix3D;

    glProjection : number[];

    glModelview : number[];

    glProjmodelview : number[];

    glNormal : number[];

    static identity : PMatrix3D;

    /**
     * Marks when changes to the size have occurred, so that the camera
     * will be reset in beginDraw().
     */
    sized : boolean;

    static MATRIX_STACK_DEPTH : number;

    modelviewStackDepth : number;

    projectionStackDepth : number;

    /**
     * Modelview matrix stack
     */
    modelviewStack : number[][];

    /**
     * Inverse modelview matrix stack
     */
    modelviewInvStack : number[][];

    /**
     * Camera matrix stack
     */
    cameraStack : number[][];

    /**
     * Inverse camera matrix stack
     */
    cameraInvStack : number[][];

    /**
     * Projection matrix stack
     */
    projectionStack : number[][];

    public lights : any;

    public lightCount : number;

    /**
     * Light types
     */
    public lightType : number[];

    /**
     * Light positions
     */
    public lightPosition : any;

    /**
     * Light direction (normalized vector)
     */
    public lightNormal : any;

    /**
     * Ambient colors for lights.
     */
    public lightAmbient : any;

    /**
     * Diffuse colors for lights.
     */
    public lightDiffuse : any;

    /**
     * Specular colors for lights. Internally these are stored as numbers between
     * 0 and 1.
     */
    public lightSpecular : any;

    /**
     * Light falloff
     */
    public lightFalloffCoefficients : number[];

    /**
     * Light spot parameters: Cosine of light spot angle
     * and concentration
     */
    public lightSpotParameters : number[];

    /**
     * Current specular color for lighting
     */
    public currentLightSpecular : number[];

    /**
     * Current light falloff
     */
    public currentLightFalloffConstant : number;

    public currentLightFalloffLinear : number;

    public currentLightFalloffQuadratic : number;

    textureWrap : any;

    textureSampling : any;

    clip : any;

    /**
     * Clipping rectangle.
     */
    clipRect : number[];

    /**
     * Font texture of currently selected font.
     */
    textTex : FontTexture;

    static FB_STACK_DEPTH : number;

    fbStackDepth : number;

    fbStack : FrameBuffer[];

    drawFramebuffer : FrameBuffer;

    readFramebuffer : FrameBuffer;

    currentFramebuffer : FrameBuffer;

    offscreenFramebuffer : FrameBuffer;

    multisampleFramebuffer : FrameBuffer;

    offscreenMultisample : boolean;

    pixOpChangedFB : boolean;

    /**
     * Texture containing the current frame
     */
    texture : any;

    /**
     * Texture containing the previous frame
     */
    ptexture : Texture;

    /**
     * IntBuffer wrapping the pixels array.
     */
    pixelBuffer : any;

    /**
     * Array to store pixels in OpenGL format.
     */
    nativePixels : number[];

    /**
     * IntBuffer wrapping the native pixels array.
     */
    nativePixelBuffer : any;

    /**
     * texture used to apply a filter on the screen image.
     */
    filterTexture : Texture;

    /**
     * PImage that wraps filterTexture.
     */
    filterImage : PImage;

    /**
     * True if we are inside a beginDraw()/endDraw() block.
     */
    drawing : boolean;

    /**
     * Used to detect continuous use of the smooth/noSmooth functions
     */
    smoothDisabled : boolean;

    smoothCallCount : number;

    lastSmoothCall : number;

    /**
     * Used to avoid flushing the geometry when blendMode() is called with the
     * same blend mode as the last
     */
    lastBlendMode : number;

    /**
     * Type of pixels operation.
     */
    static OP_NONE : number;

    static OP_READ : number;

    static OP_WRITE : number;

    pixelsOp : number;

    /**
     * Viewport dimensions.
     */
    viewport : any;

    openContour : boolean;

    breakShape : boolean;

    defaultEdges : boolean;

    static EDGE_MIDDLE : number;

    static EDGE_START : number;

    static EDGE_STOP : number;

    static EDGE_SINGLE : number;

    static EDGE_CLOSE : number;

    /**
     * Used in round point and ellipse tessellation. The
     * number of subdivisions per round point or ellipse is
     * calculated with the following formula:
     * n = min(M, max(N, (TWO_PI * size / F)))
     * where size is a measure of the dimensions of the circle
     * when projected on screen coordinates. F just sets the
     * minimum number of subdivisions, while a smaller F
     * would allow to have more detailed circles.
     * N = MIN_POINT_ACCURACY
     * M = MAX_POINT_ACCURACY
     * F = POINT_ACCURACY_FACTOR
     */
    static MIN_POINT_ACCURACY : number;

    static MAX_POINT_ACCURACY : number;

    static POINT_ACCURACY_FACTOR : number;

    /**
     * Used in quad point tessellation.
     */
    static QUAD_POINT_SIGNS : number[][];

    /**
     * To get data from OpenGL.
     */
    static intBuffer : any;

    static floatBuffer : any;

    static OPENGL_THREAD_ERROR : string;

    static BLEND_DRIVER_ERROR : string;

    static BLEND_RENDERER_ERROR : string;

    static ALREADY_BEGAN_CONTOUR_ERROR : string;

    static NO_BEGIN_CONTOUR_ERROR : string;

    static UNSUPPORTED_SMOOTH_LEVEL_ERROR : string;

    static UNSUPPORTED_SMOOTH_ERROR : string;

    static TOO_MANY_SMOOTH_CALLS_ERROR : string;

    static UNSUPPORTED_SHAPE_FORMAT_ERROR : string;

    static MISSING_UV_TEXCOORDS_ERROR : string;

    static INVALID_FILTER_SHADER_ERROR : string;

    static INCONSISTENT_SHADER_TYPES : string;

    static WRONG_SHADER_TYPE_ERROR : string;

    static SHADER_NEED_LIGHT_ATTRIBS : string;

    static MISSING_FRAGMENT_SHADER : string;

    static MISSING_VERTEX_SHADER : string;

    static UNKNOWN_SHADER_KIND_ERROR : string;

    static NO_TEXLIGHT_SHADER_ERROR : string;

    static NO_LIGHT_SHADER_ERROR : string;

    static NO_TEXTURE_SHADER_ERROR : string;

    static NO_COLOR_SHADER_ERROR : string;

    static TESSELLATION_ERROR : string;

    static GL_THREAD_NOT_CURRENT : string;

    public constructor();

    /**
     * 
     * @param {PApplet} parent
     */
    public setParent(parent : PApplet);

    /**
     * 
     * @param {boolean} primary
     */
    public setPrimary(primary : boolean);

    /**
     * 
     * @param {number} iwidth
     * @param {number} iheight
     */
    public setSize(iwidth : number, iheight : number);

    /**
     * 
     */
    public dispose();

    setFlushMode(mode : number);

    updatePixelSize();

    createPGL(pg : PGraphicsOpenGL) : PGL;

    /**
     * 
     * @return {*}
     */
    public createSurface() : PSurface;

    public saveImpl(filename : string) : boolean;

    /**
     * 
     * @param {PImage} image
     * @param {*} storage
     */
    public setCache(image : PImage, storage : any);

    /**
     * 
     * @param {PImage} image
     * @return {*}
     */
    public getCache(image : PImage) : any;

    /**
     * 
     * @param {PImage} image
     */
    public removeCache(image : PImage);

    setFontTexture(font : PFont, fontTexture : FontTexture);

    getFontTexture(font : PFont) : FontTexture;

    removeFontTexture(font : PFont);

    pushFramebuffer();

    setFramebuffer(fbo : FrameBuffer);

    popFramebuffer();

    getCurrentFB() : FrameBuffer;

    createPolyBuffers();

    updatePolyBuffers(lit : boolean, tex : boolean, needNormals : boolean, needTexCoords : boolean);

    unbindPolyBuffers();

    polyBuffersContextIsOutdated() : boolean;

    createLineBuffers();

    updateLineBuffers();

    unbindLineBuffers();

    lineBufferContextIsOutdated() : boolean;

    createPointBuffers();

    updatePointBuffers();

    unbindPointBuffers();

    pointBuffersContextIsOutdated() : boolean;

    /**
     * 
     */
    public beginDraw();

    /**
     * 
     */
    public endDraw();

    getPrimaryPG() : PGraphicsOpenGL;

    setCurrentPG(pg : PGraphicsOpenGL);

    setCurrentPG();

    getCurrentPG() : PGraphicsOpenGL;

    getPrimaryPGL() : PGL;

    /**
     * 
     * @return {PGL}
     */
    public beginPGL() : PGL;

    /**
     * 
     */
    public endPGL();

    public updateProjmodelview();

    restartPGL();

    restoreGL();

    beginBindFramebuffer(target : number, framebuffer : number);

    endBindFramebuffer(target : number, framebuffer : number);

    beginReadPixels();

    endReadPixels();

    beginPixelsOp(op : number);

    endPixelsOp();

    updateGLProjection();

    updateGLModelview();

    updateGLProjmodelview();

    updateGLNormal();

    /**
     * 
     */
    defaultSettings();

    /**
     * 
     * @param {number} which
     */
    public hint(which : number);

    getHint(which : number) : boolean;

    /**
     * 
     * @param {number} type
     * @return {PShape}
     */
    createShapeFamily(type : number) : PShape;

    /**
     * 
     * @param {number} kind
     * @param {Array} p
     * @return {PShape}
     */
    createShapePrimitive(kind : number, ...p : number[]) : PShape;

    /**
     * 
     * @param {number} kind
     */
    public beginShape(kind : number);

    /**
     * 
     * @param {number} mode
     */
    public endShape(mode : number);

    endShape(indices : number[]);

    /**
     * 
     */
    public beginContour();

    /**
     * 
     */
    public endContour();

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public vertex(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} u
     * @param {number} v
     */
    public vertex(x : number, y : number, u : number, v : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public vertex(x : number, y : number, z : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} u
     * @param {number} v
     */
    public vertex(x : number, y : number, z : number, u : number, v : number);

    /**
     * 
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public attribPosition(name : string, x : number, y : number, z : number);

    /**
     * 
     * @param {string} name
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     */
    public attribNormal(name : string, nx : number, ny : number, nz : number);

    /**
     * 
     * @param {string} name
     * @param {number} color
     */
    public attribColor(name : string, color : number);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : boolean[]);

    attribImpl(name : string, kind : number, type : number, size : number) : PGraphicsOpenGL.VertexAttribute;

    vertexImpl(x : number, y : number, z : number, u : number, v : number);

    vertexBreak() : boolean;

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    clipImpl(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * 
     */
    public noClip();

    tessellate(mode : number);

    tessellate(indices : number[]);

    /**
     * 
     */
    public flush();

    flushPixels();

    /**
     * 
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x4
     * @param {number} y4
     */
    public bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * 
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
    public bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    bezierVertexImpl(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * 
     * @param {number} cx
     * @param {number} cy
     * @param {number} x3
     * @param {number} y3
     */
    public quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    /**
     * 
     * @param {number} cx
     * @param {number} cy
     * @param {number} cz
     * @param {number} x3
     * @param {number} y3
     * @param {number} z3
     */
    public quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    quadraticVertexImpl(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public curveVertex(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public curveVertex(x : number, y : number, z : number);

    curveVertexImpl(x : number, y : number, z : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public point(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public point(x : number, y : number, z : number);

    pointImpl(x : number, y : number, z : number);

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    public line(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} z1
     * @param {number} x2
     * @param {number} y2
     * @param {number} z2
     */
    public line(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number);

    lineImpl(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number);

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     */
    public triangle(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number);

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x4
     * @param {number} y4
     */
    public quad(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {number} tl
     * @param {number} tr
     * @param {number} br
     * @param {number} bl
     */
    rectImpl(x1 : number, y1 : number, x2 : number, y2 : number, tl : number, tr : number, br : number, bl : number);

    /**
     * 
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    public ellipseImpl(a : number, b : number, c : number, d : number);

    /**
     * 
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
     * 
     * @param {number} w
     * @param {number} h
     * @param {number} d
     */
    public box(w : number, h : number, d : number);

    /**
     * 
     * @param {number} r
     */
    public sphere(r : number);

    /**
     * 
     * @param {string} filename
     * @return {PShape}
     */
    public loadShape(filename : string) : PShape;

    /**
     * 
     * @param {number} mode
     * @return {boolean}
     */
    textModeCheck(mode : number) : boolean;

    /**
     * 
     * @return {number}
     */
    public textAscent() : number;

    /**
     * 
     * @return {number}
     */
    public textDescent() : number;

    /**
     * 
     * @param {Array} buffer
     * @param {number} start
     * @param {number} stop
     * @return {number}
     */
    textWidthImpl(buffer : string[], start : number, stop : number) : number;

    /**
     * 
     * @param {number} size
     */
    handleTextSize(size : number);

    /**
     * Implementation of actual drawing for a line of text.
     * @param {Array} buffer
     * @param {number} start
     * @param {number} stop
     * @param {number} x
     * @param {number} y
     */
    textLineImpl(buffer : string[], start : number, stop : number, x : number, y : number);

    /**
     * 
     * @param {string} ch
     * @param {number} x
     * @param {number} y
     */
    textCharImpl(ch : string, x : number, y : number);

    textCharModelImpl(info : FontTexture.TextureInfo, x0 : number, y0 : number, x1 : number, y1 : number);

    /**
     * Ported from the implementation of textCharShapeImpl() in 1.5.1
     * 
     * <EM>No attempt has been made to optimize this code</EM>
     * <p/>
     * TODO: Implement a FontShape class where each glyph is tessellated and
     * stored inside a larger PShapeOpenGL object (which needs to be expanded as
     * new glyphs are added and exceed the initial capacity in a similar way as
     * the textures in FontTexture work). When a string of text is to be rendered
     * in shape mode, then the correct sequences of vertex indices are computed
     * (akin to the texcoords in the texture case) and used to draw only those
     * parts of the PShape object that are required for the text.
     * <p/>
     * 
     * Some issues of the original implementation probably remain, so they are
     * reproduced below:
     * <p/>
     * Also a problem where some fonts seem to be a bit slight, as if the
     * control points aren't being mapped quite correctly. Probably doing
     * something dumb that the control points don't map to P5's control
     * points. Perhaps it's returning b-spline data from the TrueType font?
     * Though it seems like that would make a lot of garbage rather than
     * just a little flattening.
     * <p/>
     * There also seems to be a bug that is causing a line (but not a filled
     * triangle) back to the origin on some letters (i.e. a capital L when
     * tested with Akzidenz Grotesk Light). But this won't be visible
     * with the stroke shut off, so tabling that bug for now.
     * @param {string} ch
     * @param {number} x
     * @param {number} y
     */
    textCharShapeImpl(ch : string, x : number, y : number);

    /**
     * 
     */
    public pushMatrix();

    /**
     * 
     */
    public popMatrix();

    /**
     * 
     * @param {number} tx
     * @param {number} ty
     */
    public translate(tx : number, ty : number);

    /**
     * 
     * @param {number} tx
     * @param {number} ty
     * @param {number} tz
     */
    public translate(tx : number, ty : number, tz : number);

    translateImpl(tx : number, ty : number, tz : number);

    static invTranslate(matrix : PMatrix3D, tx : number, ty : number, tz : number);

    static matrixScale(matrix : PMatrix) : number;

    /**
     * Two dimensional rotation. Same as rotateZ (this is identical to a 3D
     * rotation along the z-axis) but included for clarity -- it'd be weird for
     * people drawing 2D graphics to be using rotateZ. And they might kick our a--
     * for the confusion.
     * @param {number} angle
     */
    public rotate(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateX(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateY(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateZ(angle : number);

    /**
     * Rotate around an arbitrary vector, similar to glRotate(), except that it
     * takes radians (instead of degrees).
     * @param {number} angle
     * @param {number} v0
     * @param {number} v1
     * @param {number} v2
     */
    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    rotateImpl(angle : number, v0 : number, v1 : number, v2 : number);

    static invRotate(matrix : PMatrix3D, angle : number, v0 : number, v1 : number, v2 : number);

    /**
     * Same as scale(s, s, s).
     * @param {number} s
     */
    public scale(s : number);

    /**
     * Same as scale(sx, sy, 1).
     * @param {number} sx
     * @param {number} sy
     */
    public scale(sx : number, sy : number);

    /**
     * Scale in three dimensions.
     * @param {number} sx
     * @param {number} sy
     * @param {number} sz
     */
    public scale(sx : number, sy : number, sz : number);

    /**
     * Scale in three dimensions.
     * @param {number} sx
     * @param {number} sy
     * @param {number} sz
     */
    scaleImpl(sx : number, sy : number, sz : number);

    static invScale(matrix : PMatrix3D, x : number, y : number, z : number);

    /**
     * 
     * @param {number} angle
     */
    public shearX(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public shearY(angle : number);

    /**
     * 
     */
    public resetMatrix();

    /**
     * 
     * @param {PMatrix2D} source
     */
    public applyMatrix(source : PMatrix2D);

    /**
     * 
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * 
     * @param {PMatrix3D} source
     */
    public applyMatrix(source : PMatrix3D);

    /**
     * Apply a 4x4 transformation matrix to the modelview stack.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n03
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     * @param {number} n13
     * @param {number} n20
     * @param {number} n21
     * @param {number} n22
     * @param {number} n23
     * @param {number} n30
     * @param {number} n31
     * @param {number} n32
     * @param {number} n33
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    applyMatrixImpl(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    begin2D();

    end2D();

    /**
     * 
     * @return {*}
     */
    public getMatrix() : PMatrix;

    /**
     * 
     * @param {PMatrix3D} target
     * @return {PMatrix3D}
     */
    public getMatrix(target : PMatrix3D) : PMatrix3D;

    /**
     * 
     * @param {PMatrix2D} source
     */
    public setMatrix(source : PMatrix2D);

    /**
     * Set the current transformation to the contents of the specified source.
     * @param {PMatrix3D} source
     */
    public setMatrix(source : PMatrix3D);

    /**
     * Print the current model (or "transformation") matrix.
     */
    public printMatrix();

    public pushProjection();

    public popProjection();

    public resetProjection();

    public applyProjection(mat : PMatrix3D);

    public applyProjection(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    public setProjection(mat : PMatrix3D);

    orthoProjection() : boolean;

    nonOrthoProjection() : boolean;

    static same(a : number, b : number) : boolean;

    static diff(a : number, b : number) : boolean;

    static zero(a : number) : boolean;

    static nonZero(a : number) : boolean;

    /**
     * Set matrix mode to the camera matrix (instead of the current transformation
     * matrix). This means applyMatrix, resetMatrix, etc. will affect the camera.
     * <P>
     * Note that the camera matrix is *not* the perspective matrix, it contains
     * the values of the modelview matrix immediatly after the latter was
     * initialized with ortho() or camera(), or the modelview matrix as result of
     * the operations applied between beginCamera()/endCamera().
     * <P>
     * beginCamera() specifies that all coordinate transforms until endCamera()
     * should be pre-applied in inverse to the camera transform matrix. Note that
     * this is only challenging when a user specifies an arbitrary matrix with
     * applyMatrix(). Then that matrix will need to be inverted, which may not be
     * possible. But take heart, if a user is applying a non-invertible matrix to
     * the camera transform, then he is clearly up to no good, and we can wash our
     * hands of those bad intentions.
     * <P>
     * begin/endCamera clauses do not automatically reset the camera transform
     * matrix. That's because we set up a nice default camera transform in
     * setup(), and we expect it to hold through draw(). So we don't reset the
     * camera transform matrix at the top of draw(). That means that an
     * innocuous-looking clause like
     * 
     * <PRE>
     * beginCamera();
     * translate(0, 0, 10);
     * endCamera();
     * </PRE>
     * 
     * at the top of draw(), will result in a runaway camera that shoots
     * infinitely out of the screen over time. In order to prevent this, it is
     * necessary to call some function that does a hard reset of the camera
     * transform matrix inside of begin/endCamera. Two options are
     * 
     * <PRE>
     * camera(); // sets up the nice default camera transform
     * resetMatrix(); // sets up the identity camera transform
     * </PRE>
     * 
     * So to rotate a camera a constant amount, you might try
     * 
     * <PRE>
     * beginCamera();
     * camera();
     * rotateY(PI / 8);
     * endCamera();
     * </PRE>
     */
    public beginCamera();

    /**
     * Record the current settings into the camera matrix, and set the matrix mode
     * back to the current transformation matrix.
     * <P>
     * Note that this will destroy any settings to scale(), translate(), or
     * whatever, because the final camera matrix will be copied (not multiplied)
     * into the modelview.
     */
    public endCamera();

    /**
     * Print the current camera matrix.
     */
    public printCamera();

    defaultCamera();

    /**
     * Calls ortho() with the proper parameters for Processing's standard
     * orthographic projection.
     */
    public ortho();

    /**
     * Calls ortho() with the specified size of the viewing volume along
     * the X and Z directions.
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     */
    public ortho(left : number, right : number, bottom : number, top : number);

    /**
     * Sets an orthographic projection.
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} near
     * @param {number} far
     */
    public ortho(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * Calls perspective() with Processing's standard coordinate projection.
     * <P>
     * Projection functions:
     * <UL>
     * <LI>frustrum()
     * <LI>ortho()
     * <LI>perspective()
     * </UL>
     * Each of these three functions completely replaces the projection matrix
     * with a new one. They can be called inside setup(), and their effects will
     * be felt inside draw(). At the top of draw(), the projection matrix is not
     * reset. Therefore the last projection function to be called always
     * dominates. On resize, the default projection is always established, which
     * has perspective.
     * <P>
     * This behavior is pretty much familiar from OpenGL, except where functions
     * replace matrices, rather than multiplying against the previous.
     * <P>
     */
    public perspective();

    /**
     * Similar to gluPerspective(). Implementation based on Mesa's glu.c
     * @param {number} fov
     * @param {number} aspect
     * @param {number} zNear
     * @param {number} zFar
     */
    public perspective(fov : number, aspect : number, zNear : number, zFar : number);

    /**
     * Same as glFrustum(), except that it wipes out (rather than multiplies
     * against) the current perspective matrix.
     * <P>
     * Implementation based on the explanation in the OpenGL blue book.
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} znear
     * @param {number} zfar
     */
    public frustum(left : number, right : number, bottom : number, top : number, znear : number, zfar : number);

    /**
     * Print the current projection matrix.
     */
    public printProjection();

    defaultPerspective();

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelX(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelY(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelZ(x : number, y : number, z : number) : number;

    /**
     * 
     */
    public popStyle();

    /**
     * 
     */
    fillFromCalc();

    /**
     * Disables lighting.
     */
    public noLights();

    /**
     * Add an ambient light based on the current color mode.
     * @param {number} r
     * @param {number} g
     * @param {number} b
     */
    public ambientLight(r : number, g : number, b : number);

    /**
     * Add an ambient light based on the current color mode. This version includes
     * an (x, y, z) position for situations where the falloff distance is used.
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public ambientLight(r : number, g : number, b : number, x : number, y : number, z : number);

    /**
     * 
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} dx
     * @param {number} dy
     * @param {number} dz
     */
    public directionalLight(r : number, g : number, b : number, dx : number, dy : number, dz : number);

    /**
     * 
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public pointLight(r : number, g : number, b : number, x : number, y : number, z : number);

    /**
     * 
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} dx
     * @param {number} dy
     * @param {number} dz
     * @param {number} angle
     * @param {number} concentration
     */
    public spotLight(r : number, g : number, b : number, x : number, y : number, z : number, dx : number, dy : number, dz : number, angle : number, concentration : number);

    /**
     * Set the light falloff rates for the last light that was created. Default is
     * lightFalloff(1, 0, 0).
     * @param {number} constant
     * @param {number} linear
     * @param {number} quadratic
     */
    public lightFalloff(constant : number, linear : number, quadratic : number);

    enableLighting();

    disableLighting();

    noLightAmbient(num : number);

    noLightDiffuse(num : number);

    noLightSpecular(num : number);

    lightFalloff(num : number, c0 : number, c1 : number, c2 : number);

    noLightFalloff(num : number);

    lightSpot(num : number, angle : number, exponent : number);

    noLightSpot(num : number);

    /**
     * 
     * @param {PImage} image
     */
    backgroundImpl(image : PImage);

    /**
     * 
     */
    backgroundImpl();

    /**
     * Report on anything from glError().
     * Don't use this inside glBegin/glEnd otherwise it'll
     * throw an GL_INVALID_OPERATION error.
     * @param {string} where
     */
    report(where : string);

    /**
     * 
     * @return {boolean}
     */
    public isGL() : boolean;

    /**
     * 
     */
    public loadPixels();

    allocatePixels();

    readPixels();

    drawPixels(x : number, y : number, w : number, h : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public get(x : number, y : number) : number;

    /**
     * 
     * @param {number} sourceX
     * @param {number} sourceY
     * @param {number} sourceWidth
     * @param {number} sourceHeight
     * @param {PImage} target
     * @param {number} targetX
     * @param {number} targetY
     */
    getImpl(sourceX : number, sourceY : number, sourceWidth : number, sourceHeight : number, target : PImage, targetX : number, targetY : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} argb
     */
    public set(x : number, y : number, argb : number);

    /**
     * 
     * @param {PImage} sourceImage
     * @param {number} sourceX
     * @param {number} sourceY
     * @param {number} sourceWidth
     * @param {number} sourceHeight
     * @param {number} targetX
     * @param {number} targetY
     */
    setImpl(sourceImage : PImage, sourceX : number, sourceY : number, sourceWidth : number, sourceHeight : number, targetX : number, targetY : number);

    /**
     * 
     * @param {string} filename
     * @return {boolean}
     */
    public save(filename : string) : boolean;

    /**
     * 
     * @param {PImage} image
     */
    processImageBeforeAsyncSave(image : PImage);

    static completeFinishedPixelTransfers();

    static completeAllPixelTransfers();

    /**
     * 
     * @param {string} filename
     */
    awaitAsyncSaveCompletion(filename : string);

    public loadTexture();

    public updateTexture();

    public updateTexture(x : number, y : number, w : number, h : number);

    public updateDisplay();

    loadTextureImpl(sampling : number, mipmap : boolean);

    createPTexture();

    swapOffscreenTextures();

    drawTexture();

    drawTexture(x : number, y : number, w : number, h : number);

    drawPTexture();

    /**
     * 
     * @param {PImage} alpha
     */
    public mask(alpha : PImage);

    /**
     * This is really inefficient and not a good idea in OpenGL. Use get() and
     * set() with a smaller image area, or call the filter on an image instead,
     * and then draw that.
     * @param {number} kind
     */
    public filter(kind : number);

    /**
     * This is really inefficient and not a good idea in OpenGL. Use get() and
     * set() with a smaller image area, or call the filter on an image instead,
     * and then draw that.
     * @param {number} kind
     * @param {number} param
     */
    public filter(kind : number, param : number);

    /**
     * 
     * @param {number} sx
     * @param {number} sy
     * @param {number} sw
     * @param {number} sh
     * @param {number} dx
     * @param {number} dy
     * @param {number} dw
     * @param {number} dh
     */
    public copy(sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number);

    /**
     * 
     * @param {PImage} src
     * @param {number} sx
     * @param {number} sy
     * @param {number} sw
     * @param {number} sh
     * @param {number} dx
     * @param {number} dy
     * @param {number} dw
     * @param {number} dh
     */
    public copy(src : PImage, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number);

    /**
     * Allows to set custom blend modes for the entire scene, using openGL.
     * Reference article about blending modes:
     * http://www.pegtop.net/delphi/articles/blendmodes/
     * DIFFERENCE, HARD_LIGHT, SOFT_LIGHT, OVERLAY, DODGE, BURN modes cannot be
     * implemented in fixed-function pipeline because they require
     * conditional blending and non-linear blending equations.
     */
    blendModeImpl();

    /**
     * Not an approved function, this will change or be removed in the future.
     * This utility method returns the texture associated to the renderer's.
     * drawing surface, making sure is updated to reflect the current contents
     * off the screen (or offscreen drawing surface).
     * @return {Texture}
     */
    public getTexture() : Texture;

    /**
     * Not an approved function either, don't use it.
     * @param {boolean} load
     * @return {Texture}
     */
    public getTexture(load : boolean) : Texture;

    /**
     * Not an approved function, this will change or be removed in the future.
     * This utility method returns the texture associated to the image.
     * creating and/or updating it if needed.
     * 
     * @param {PImage} img the image to have a texture metadata associated to it
     * @return {Texture}
     */
    public getTexture(img : PImage) : Texture;

    /**
     * Not an approved function, test its use in libraries to grab the FB objects
     * for offscreen PGraphics.
     * @return {FrameBuffer}
     */
    public getFrameBuffer() : FrameBuffer;

    public getFrameBuffer(multi : boolean) : FrameBuffer;

    initCache(img : PImage) : any;

    bindFrontTexture();

    unbindFrontTexture();

    /**
     * This utility method creates a texture for the provided image, and adds it
     * to the metadata cache of the image.
     * @param {PImage} img the image to have a texture metadata associated to it
     * @return {Texture}
     */
    addTexture(img : PImage) : Texture;

    addTexture(img : PImage, params : Texture.Parameters) : Texture;

    checkTexture(tex : Texture);

    wrapTexture(tex : Texture) : PImage;

    updateTexture(img : PImage, tex : Texture);

    deleteSurfaceTextures();

    checkGLThread() : boolean;

    /**
     * 
     * @param {number} wide
     * @param {number} high
     */
    public resize(wide : number, high : number);

    initPrimary();

    beginOnscreenDraw();

    endOnscreenDraw();

    initOffscreen();

    beginOffscreenDraw();

    endOffscreenDraw();

    setViewport();

    /**
     * 
     */
    checkSettings();

    setGLSettings();

    getGLParameters();

    /**
     * 
     * @param {string} fragFilename
     * @return {PShader}
     */
    public loadShader(fragFilename : string) : PShader;

    /**
     * 
     * @param {string} fragFilename
     * @param {string} vertFilename
     * @return {PShader}
     */
    public loadShader(fragFilename : string, vertFilename : string) : PShader;

    /**
     * 
     * @param {PShader} shader
     */
    public shader(shader : PShader);

    /**
     * 
     * @param {PShader} shader
     * @param {number} kind
     */
    public shader(shader : PShader, kind : number);

    /**
     * 
     */
    public resetShader();

    /**
     * 
     * @param {number} kind
     */
    public resetShader(kind : number);

    getPolyShader(lit : boolean, tex : boolean) : PShader;

    getLineShader() : PShader;

    getPointShader() : PShader;

    static expandArraySize(currSize : number, newMinSize : number) : number;

    static newAttributeMap() : PGraphicsOpenGL.AttributeMap;

    static newInGeometry(pg : PGraphicsOpenGL, attr : PGraphicsOpenGL.AttributeMap, mode : number) : PGraphicsOpenGL.InGeometry;

    static newTessGeometry(pg : PGraphicsOpenGL, attr : PGraphicsOpenGL.AttributeMap, mode : number) : PGraphicsOpenGL.TessGeometry;

    static newTexCache(pg : PGraphicsOpenGL) : PGraphicsOpenGL.TexCache;
}

declare namespace PGraphicsOpenGL {

    export abstract class Disposable<T> {
        constructor(obj : T);

        public dispose();

        public abstract disposeNative();
    }

    export class AsyncPixelReader {
        public __parent: any;
        static OPENGL_NATIVE : number;

        static OPENGL_NATIVE_OPAQUE : number;

        static BUFFER_COUNT : number;

        pbos : number[];

        fences : number[];

        files : any;

        widths : number[];

        heights : number[];

        head : number;

        tail : number;

        size : number;

        supportsAsyncTransfers : boolean;

        calledThisFrame : boolean;

        public constructor(__parent: any);

        public dispose();

        public readAndSaveAsync(file : any);

        public completeFinishedTransfers();

        completeAllTransfers();

        completeTransfers(count : number);

        awaitTransferCompletion(file : any);

        public isLastTransferComplete() : boolean;

        public beginTransfer(file : any);

        public endTransfer();
    }

    export class AttributeMap {
        public names : Array<string>;

        public numComp : number;

        /**
         * 
         * @param {string} key
         * @param {PGraphicsOpenGL.VertexAttribute} value
         * @return {PGraphicsOpenGL.VertexAttribute}
         */
        public put(key : string, value : PGraphicsOpenGL.VertexAttribute) : PGraphicsOpenGL.VertexAttribute;

        public get(i : number) : PGraphicsOpenGL.VertexAttribute;
    }

    export class VertexAttribute {
        static POSITION : number;

        static NORMAL : number;

        static COLOR : number;

        static OTHER : number;

        pg : PGraphicsOpenGL;

        name : string;

        kind : number;

        type : number;

        size : number;

        tessSize : number;

        elementSize : number;

        buf : VertexBuffer;

        glLoc : number;

        fvalues : number[];

        ivalues : number[];

        bvalues : number[];

        modified : boolean;

        firstModified : number;

        lastModified : number;

        active : any;

        constructor(pg : PGraphicsOpenGL, name : string, kind : number, type : number, size : number);

        public diff(attr : PGraphicsOpenGL.VertexAttribute) : boolean;

        isPosition() : boolean;

        isNormal() : boolean;

        isColor() : boolean;

        isOther() : boolean;

        isFloat() : boolean;

        isInt() : boolean;

        isBool() : boolean;

        bufferCreated() : boolean;

        createBuffer(pgl : PGL);

        deleteBuffer(pgl : PGL);

        bind(pgl : PGL);

        unbind(pgl : PGL);

        sizeInBytes(length : number) : number;

        set(x : number, y : number, z : number);

        set(c : number);

        set(values : number[]);

        set(values : number[]);

        set(values : boolean[]);

        add(dstValues : number[], dstIdx : number);

        add(dstValues : number[], dstIdx : number);

        add(dstValues : number[], dstIdx : number);
    }

    export class TexCache {
        pg : PGraphicsOpenGL;

        size : number;

        textures : PImage[];

        firstIndex : number[];

        lastIndex : number[];

        firstCache : number[];

        lastCache : number[];

        hasTextures : boolean;

        constructor(pg : PGraphicsOpenGL);

        allocate();

        clear();

        containsTexture(img : PImage) : boolean;

        getTextureImage(i : number) : PImage;

        getTexture(i : number) : Texture;

        addTexture(img : PImage, firsti : number, firstb : number, lasti : number, lastb : number);

        setLastIndex(lasti : number, lastb : number);

        arrayCheck();

        expandTextures(n : number);

        expandFirstIndex(n : number);

        expandLastIndex(n : number);

        expandFirstCache(n : number);

        expandLastCache(n : number);
    }

    export class IndexCache {
        size : number;

        indexCount : number[];

        indexOffset : number[];

        vertexCount : number[];

        vertexOffset : number[];

        counter : number[];

        constructor();

        allocate();

        clear();

        addNew() : number;

        addNew(index : number) : number;

        getLast() : number;

        setCounter(counter : number[]);

        incCounts(index : number, icount : number, vcount : number);

        init(n : number);

        arrayCheck();

        expandIndexCount(n : number);

        expandIndexOffset(n : number);

        expandVertexCount(n : number);

        expandVertexOffset(n : number);
    }

    export class InGeometry {
        pg : PGraphicsOpenGL;

        renderMode : number;

        attribs : PGraphicsOpenGL.AttributeMap;

        vertexCount : number;

        codeCount : number;

        edgeCount : number;

        vertices : number[];

        colors : number[];

        normals : number[];

        texcoords : number[];

        strokeColors : number[];

        strokeWeights : number[];

        codes : number[];

        edges : number[][];

        ambient : number[];

        specular : number[];

        emissive : number[];

        shininess : number[];

        fattribs : any;

        iattribs : any;

        battribs : any;

        fillColor : number;

        strokeColor : number;

        strokeWeight : number;

        ambientColor : number;

        specularColor : number;

        emissiveColor : number;

        shininessFactor : number;

        normalX : number;

        normalY : number;

        normalZ : number;

        constructor(pg : PGraphicsOpenGL, attr : PGraphicsOpenGL.AttributeMap, mode : number);

        clear();

        clearEdges();

        allocate();

        initAttrib(attrib : PGraphicsOpenGL.VertexAttribute);

        vertexCheck();

        codeCheck();

        edgeCheck();

        getVertexX(idx : number) : number;

        getVertexY(idx : number) : number;

        getVertexZ(idx : number) : number;

        getLastVertexX() : number;

        getLastVertexY() : number;

        getLastVertexZ() : number;

        getNumEdgeClosures() : number;

        getNumEdgeVertices(bevel : boolean) : number;

        getNumEdgeIndices(bevel : boolean) : number;

        getVertexMin(v : PVector);

        getVertexMax(v : PVector);

        getVertexSum(v : PVector) : number;

        getAttribVector(idx : number) : number[];

        expandVertices(n : number);

        expandColors(n : number);

        expandNormals(n : number);

        expandTexCoords(n : number);

        expandStrokeColors(n : number);

        expandStrokeWeights(n : number);

        expandAmbient(n : number);

        expandSpecular(n : number);

        expandEmissive(n : number);

        expandShininess(n : number);

        expandAttribs(n : number);

        expandFloatAttrib(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandIntAttrib(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandBoolAttrib(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandCodes(n : number);

        expandEdges(n : number);

        trim();

        trimVertices();

        trimColors();

        trimNormals();

        trimTexCoords();

        trimStrokeColors();

        trimStrokeWeights();

        trimAmbient();

        trimSpecular();

        trimEmissive();

        trimShininess();

        trimCodes();

        trimEdges();

        trimAttribs();

        trimFloatAttrib(attrib : PGraphicsOpenGL.VertexAttribute);

        trimIntAttrib(attrib : PGraphicsOpenGL.VertexAttribute);

        trimBoolAttrib(attrib : PGraphicsOpenGL.VertexAttribute);

        addVertex(x : number, y : number, brk : boolean) : number;

        addVertex(x : number, y : number, code : number, brk : boolean) : number;

        addVertex(x : number, y : number, u : number, v : number, brk : boolean) : number;

        addVertex(x : number, y : number, u : number, v : number, code : number, brk : boolean) : number;

        addVertex(x : number, y : number, z : number, brk : boolean) : number;

        addVertex(x : number, y : number, z : number, code : number, brk : boolean) : number;

        addVertex(x : number, y : number, z : number, u : number, v : number, brk : boolean) : number;

        addVertex(x : number, y : number, z : number, u : number, v : number, code : number, brk : boolean) : number;

        addVertex(x : number, y : number, z : number, fcolor : number, nx : number, ny : number, nz : number, u : number, v : number, scolor : number, sweight : number, am : number, sp : number, em : number, shine : number, code : number, brk : boolean) : number;

        public addBezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number, brk : boolean);

        public addQuadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number, brk : boolean);

        public addCurveVertex(x : number, y : number, z : number, brk : boolean);

        getVertexData() : number[][];

        hasBezierVertex() : boolean;

        hasQuadraticVertex() : boolean;

        hasCurveVertex() : boolean;

        addEdge(i : number, j : number, start : boolean, end : boolean) : number;

        closeEdge(i : number, j : number) : number;

        addTrianglesEdges();

        addTriangleFanEdges();

        addTriangleStripEdges();

        addQuadsEdges();

        addQuadStripEdges();

        calcTriangleNormal(i0 : number, i1 : number, i2 : number);

        calcTrianglesNormals();

        calcTriangleFanNormals();

        calcTriangleStripNormals();

        calcQuadsNormals();

        calcQuadStripNormals();

        setMaterial(fillColor : number, strokeColor : number, strokeWeight : number, ambientColor : number, specularColor : number, emissiveColor : number, shininessFactor : number);

        setNormal(normalX : number, normalY : number, normalZ : number);

        addPoint(x : number, y : number, z : number, fill : boolean, stroke : boolean);

        addLine(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, fill : boolean, stroke : boolean);

        addTriangle(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, fill : boolean, stroke : boolean);

        addQuad(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number, stroke : boolean);

        addRect(a : number, b : number, c : number, d : number, stroke : boolean);

        addRect(a : number, b : number, c : number, d : number, tl : number, tr : number, br : number, bl : number, stroke : boolean);

        addEllipse(x : number, y : number, w : number, h : number, fill : boolean, stroke : boolean);

        addArc(x : number, y : number, w : number, h : number, start : number, stop : number, fill : boolean, stroke : boolean, arcMode : number);

        addBox(w : number, h : number, d : number, fill : boolean, stroke : boolean);

        addSphere(r : number, detailU : number, detailV : number, fill : boolean, stroke : boolean) : number[];
    }

    export class TessGeometry {
        renderMode : number;

        pg : PGraphicsOpenGL;

        polyAttribs : PGraphicsOpenGL.AttributeMap;

        polyVertexCount : number;

        firstPolyVertex : number;

        lastPolyVertex : number;

        polyVerticesBuffer : any;

        polyColorsBuffer : any;

        polyNormalsBuffer : any;

        polyTexCoordsBuffer : any;

        polyAmbientBuffer : any;

        polySpecularBuffer : any;

        polyEmissiveBuffer : any;

        polyShininessBuffer : any;

        polyAttribBuffers : any;

        polyIndexCount : number;

        firstPolyIndex : number;

        lastPolyIndex : number;

        polyIndicesBuffer : any;

        polyIndexCache : PGraphicsOpenGL.IndexCache;

        lineVertexCount : number;

        firstLineVertex : number;

        lastLineVertex : number;

        lineVerticesBuffer : any;

        lineColorsBuffer : any;

        lineDirectionsBuffer : any;

        lineIndexCount : number;

        firstLineIndex : number;

        lastLineIndex : number;

        lineIndicesBuffer : any;

        lineIndexCache : PGraphicsOpenGL.IndexCache;

        pointVertexCount : number;

        firstPointVertex : number;

        lastPointVertex : number;

        pointVerticesBuffer : any;

        pointColorsBuffer : any;

        pointOffsetsBuffer : any;

        pointIndexCount : number;

        firstPointIndex : number;

        lastPointIndex : number;

        pointIndicesBuffer : any;

        pointIndexCache : PGraphicsOpenGL.IndexCache;

        polyVertices : number[];

        polyColors : number[];

        polyNormals : number[];

        polyTexCoords : number[];

        polyAmbient : number[];

        polySpecular : number[];

        polyEmissive : number[];

        polyShininess : number[];

        polyIndices : number[];

        lineVertices : number[];

        lineColors : number[];

        lineDirections : number[];

        lineIndices : number[];

        pointVertices : number[];

        pointColors : number[];

        pointOffsets : number[];

        pointIndices : number[];

        fpolyAttribs : any;

        ipolyAttribs : any;

        bpolyAttribs : any;

        constructor(pg : PGraphicsOpenGL, attr : PGraphicsOpenGL.AttributeMap, mode : number);

        allocate();

        initAttrib(attrib : PGraphicsOpenGL.VertexAttribute);

        clear();

        polyVertexCheck();

        polyVertexCheck(count : number);

        polyIndexCheck(count : number);

        polyIndexCheck();

        lineVertexCheck(count : number);

        lineIndexCheck(count : number);

        pointVertexCheck(count : number);

        pointIndexCheck(count : number);

        isFull() : boolean;

        getPolyVertexMin(v : PVector, first : number, last : number);

        getLineVertexMin(v : PVector, first : number, last : number);

        getPointVertexMin(v : PVector, first : number, last : number);

        getPolyVertexMax(v : PVector, first : number, last : number);

        getLineVertexMax(v : PVector, first : number, last : number);

        getPointVertexMax(v : PVector, first : number, last : number);

        getPolyVertexSum(v : PVector, first : number, last : number) : number;

        getLineVertexSum(v : PVector, first : number, last : number) : number;

        getPointVertexSum(v : PVector, first : number, last : number) : number;

        updatePolyVerticesBuffer();

        updatePolyVerticesBuffer(offset : number, size : number);

        updatePolyColorsBuffer();

        updatePolyColorsBuffer(offset : number, size : number);

        updatePolyNormalsBuffer();

        updatePolyNormalsBuffer(offset : number, size : number);

        updatePolyTexCoordsBuffer();

        updatePolyTexCoordsBuffer(offset : number, size : number);

        updatePolyAmbientBuffer();

        updatePolyAmbientBuffer(offset : number, size : number);

        updatePolySpecularBuffer();

        updatePolySpecularBuffer(offset : number, size : number);

        updatePolyEmissiveBuffer();

        updatePolyEmissiveBuffer(offset : number, size : number);

        updatePolyShininessBuffer();

        updatePolyShininessBuffer(offset : number, size : number);

        updateAttribBuffer(name : string);

        updateAttribBuffer(name : string, offset : number, size : number);

        updatePolyIndicesBuffer();

        updatePolyIndicesBuffer(offset : number, size : number);

        updateLineVerticesBuffer();

        updateLineVerticesBuffer(offset : number, size : number);

        updateLineColorsBuffer();

        updateLineColorsBuffer(offset : number, size : number);

        updateLineDirectionsBuffer();

        updateLineDirectionsBuffer(offset : number, size : number);

        updateLineIndicesBuffer();

        updateLineIndicesBuffer(offset : number, size : number);

        updatePointVerticesBuffer();

        updatePointVerticesBuffer(offset : number, size : number);

        updatePointColorsBuffer();

        updatePointColorsBuffer(offset : number, size : number);

        updatePointOffsetsBuffer();

        updatePointOffsetsBuffer(offset : number, size : number);

        updatePointIndicesBuffer();

        updatePointIndicesBuffer(offset : number, size : number);

        expandPolyVertices(n : number);

        expandPolyColors(n : number);

        expandPolyNormals(n : number);

        expandPolyTexCoords(n : number);

        expandPolyAmbient(n : number);

        expandPolySpecular(n : number);

        expandPolyEmissive(n : number);

        expandPolyShininess(n : number);

        expandAttributes(n : number);

        expandFloatAttribute(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandIntAttribute(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandBoolAttribute(attrib : PGraphicsOpenGL.VertexAttribute, n : number);

        expandPolyIndices(n : number);

        expandLineVertices(n : number);

        expandLineColors(n : number);

        expandLineDirections(n : number);

        expandLineIndices(n : number);

        expandPointVertices(n : number);

        expandPointColors(n : number);

        expandPointOffsets(n : number);

        expandPointIndices(n : number);

        trim();

        trimPolyVertices();

        trimPolyColors();

        trimPolyNormals();

        trimPolyTexCoords();

        trimPolyAmbient();

        trimPolySpecular();

        trimPolyEmissive();

        trimPolyShininess();

        trimPolyAttributes();

        trimFloatAttribute(attrib : PGraphicsOpenGL.VertexAttribute);

        trimIntAttribute(attrib : PGraphicsOpenGL.VertexAttribute);

        trimBoolAttribute(attrib : PGraphicsOpenGL.VertexAttribute);

        trimPolyIndices();

        trimLineVertices();

        trimLineColors();

        trimLineDirections();

        trimLineIndices();

        trimPointVertices();

        trimPointColors();

        trimPointOffsets();

        trimPointIndices();

        incPolyIndices(first : number, last : number, inc : number);

        incLineIndices(first : number, last : number, inc : number);

        incPointIndices(first : number, last : number, inc : number);

        calcPolyNormal(i0 : number, i1 : number, i2 : number);

        setPointVertex(tessIdx : number, __in : PGraphicsOpenGL.InGeometry, inIdx : number);

        setLineVertex(tessIdx : number, vertices : number[], inIdx0 : number, rgba : number);

        setLineVertex(tessIdx : number, vertices : number[], inIdx0 : number, inIdx1 : number, rgba : number, weight : number);

        addPolyVertex(d : number[], clampXY : boolean);

        addPolyVertex(x : number, y : number, z : number, rgba : number, nx : number, ny : number, nz : number, u : number, v : number, am : number, sp : number, em : number, shine : number, clampXY : boolean);

        setPolyVertex(tessIdx : number, x : number, y : number, z : number, rgba : number, clampXY : boolean);

        setPolyVertex(tessIdx : number, x : number, y : number, z : number, rgba : number, nx : number, ny : number, nz : number, u : number, v : number, am : number, sp : number, em : number, shine : number, clampXY : boolean);

        addPolyVertices(__in : PGraphicsOpenGL.InGeometry, clampXY : boolean);

        addPolyVertex(__in : PGraphicsOpenGL.InGeometry, i : number, clampXY : boolean);

        addPolyVertices(__in : PGraphicsOpenGL.InGeometry, i0 : number, i1 : number, clampXY : boolean);

        modelviewCoords(__in : PGraphicsOpenGL.InGeometry, i0 : number, index : number, nvert : number, clampXY : boolean);

        copyFewCoords(__in : PGraphicsOpenGL.InGeometry, i0 : number, index : number, nvert : number);

        copyManyCoords(__in : PGraphicsOpenGL.InGeometry, i0 : number, index : number, nvert : number);

        copyFewAttribs(__in : PGraphicsOpenGL.InGeometry, i0 : number, index : number, nvert : number);

        copyManyAttribs(__in : PGraphicsOpenGL.InGeometry, i0 : number, index : number, nvert : number);

        applyMatrixOnPolyGeometry(tr : PMatrix, first : number, last : number);

        applyMatrixOnLineGeometry(tr : PMatrix, first : number, last : number);

        applyMatrixOnPointGeometry(tr : PMatrix, first : number, last : number);

        applyMatrixOnPolyGeometry(tr : PMatrix2D, first : number, last : number);

        applyMatrixOnLineGeometry(tr : PMatrix2D, first : number, last : number);

        applyMatrixOnPointGeometry(tr : PMatrix2D, first : number, last : number);

        applyMatrixOnPolyGeometry(tr : PMatrix3D, first : number, last : number);

        applyMatrixOnLineGeometry(tr : PMatrix3D, first : number, last : number);

        applyMatrixOnPointGeometry(tr : PMatrix3D, first : number, last : number);
    }

    export class Tessellator {
        in : PGraphicsOpenGL.InGeometry;

        tess : PGraphicsOpenGL.TessGeometry;

        texCache : PGraphicsOpenGL.TexCache;

        prevTexImage : PImage;

        newTexImage : PImage;

        firstTexIndex : number;

        firstTexCache : number;

        gluTess : PGL.Tessellator;

        callback : Tessellator.TessellatorCallback;

        fill : boolean;

        stroke : boolean;

        strokeColor : number;

        strokeWeight : number;

        strokeJoin : number;

        strokeCap : number;

        accurate2DStrokes : boolean;

        transform : PMatrix;

        transformScale : any;

        is2D : boolean;

        is3D : boolean;

        pg : PGraphicsOpenGL;

        rawIndices : number[];

        rawSize : number;

        dupIndices : number[];

        dupCount : number;

        firstPolyIndexCache : number;

        lastPolyIndexCache : number;

        firstLineIndexCache : number;

        lastLineIndexCache : number;

        firstPointIndexCache : number;

        lastPointIndexCache : number;

        strokeVertices : number[];

        strokeColors : number[];

        strokeWeights : number[];

        pathVertexCount : number;

        pathVertices : number[];

        pathColors : number[];

        pathWeights : number[];

        beginPath : number;

        public constructor();

        initGluTess();

        setInGeometry(__in : PGraphicsOpenGL.InGeometry);

        setTessGeometry(tess : PGraphicsOpenGL.TessGeometry);

        setFill(fill : boolean);

        setTexCache(texCache : PGraphicsOpenGL.TexCache, newTexImage : PImage);

        setStroke(stroke : boolean);

        setStrokeColor(color : number);

        setStrokeWeight(weight : number);

        setStrokeCap(strokeCap : number);

        setStrokeJoin(strokeJoin : number);

        setAccurate2DStrokes(accurate : boolean);

        setRenderer(pg : PGraphicsOpenGL);

        set3D(value : boolean);

        setTransform(transform : PMatrix);

        resetCurveVertexCount();

        tessellatePoints();

        tessellateRoundPoints();

        tessellateRoundPoints3D(nvertTot : number, nindTot : number, nPtVert : number);

        tessellateRoundPoints2D(nvertTot : number, nindTot : number, nPtVert : number);

        tessellateSquarePoints();

        tessellateSquarePoints3D(nvertTot : number, nindTot : number);

        tessellateSquarePoints2D(nvertTot : number, nindTot : number);

        clamp2D() : boolean;

        clampSquarePoints2D() : boolean;

        tessellateLines();

        tessellateLines3D(lineCount : number);

        tessellateLines2D(lineCount : number);

        clampLines2D(lineCount : number) : boolean;

        tessellateLineStrip();

        tessellateLineStrip3D(lineCount : number);

        tessellateLineStrip2D(lineCount : number);

        clampLineStrip2D(lineCount : number) : boolean;

        tessellateLineLoop();

        tessellateLineLoop3D(lineCount : number);

        tessellateLineLoop2D(lineCount : number);

        clampLineLoop2D(lineCount : number) : boolean;

        tessellateEdges();

        tessellateEdges3D();

        tessellateEdges2D();

        clampEdges2D() : boolean;

        addLineSegment3D(i0 : number, i1 : number, pi0 : number, pi1 : number, index : number, lastInd : number[], constStroke : boolean) : number;

        addBevel3D(fi0 : number, fi1 : number, pi0 : number, pi1 : number, index : number, lastInd : number[], constStroke : boolean) : number;

        addLineSegment2D(i0 : number, i1 : number, index : number, constStroke : boolean, clamp : boolean) : number;

        unclampLine2D(tessIdx : number, x : number, y : number);

        noCapsJoins(nInVert : number) : boolean;

        subPixelStroke(weight : number) : boolean;

        noCapsJoins() : boolean;

        segmentIsAxisAligned(i0 : number, i1 : number) : boolean;

        segmentIsAxisAligned(vertices : number[], i0 : number, i1 : number) : boolean;

        tessellateTriangles();

        clampTriangles() : boolean;

        tessellateTriangles(indices : number[]);

        clampTriangles(indices : number[]) : boolean;

        tessellateTriangleFan();

        clampTriangleFan() : boolean;

        tessellateTriangleStrip();

        clampTriangleStrip() : boolean;

        tessellateQuads();

        clampQuads(quadCount : number) : boolean;

        tessellateQuadStrip();

        clampQuadStrip(quadCount : number) : boolean;

        splitRawIndices(clamp : boolean);

        addDupIndex(idx : number);

        dupIndexPos(idx : number) : number;

        setRawSize(size : number);

        expandRawIndices(n : number);

        beginTex();

        endTex();

        beginNoTex();

        endNoTex();

        updateTex();

        setFirstTexIndex(firstIndex : number, firstCache : number);

        setLastTexIndex(lastIndex : number, lastCache : number);

        tessellatePolygon(solid : boolean, closed : boolean, calcNormals : boolean);

        addBezierVertex(i : number);

        addQuadraticVertex(i : number);

        addCurveVertex(i : number);

        addCurveInitialVertex(i : number, x : number, y : number, z : number);

        addCurveVertexSegment(i : number, x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

        addVertex(i : number);

        collectVertexAttributes(i : number) : number[];

        beginPolygonStroke();

        endPolygonStroke();

        beginStrokePath();

        endStrokePath(closed : boolean);

        addStrokeVertex(x : number, y : number, z : number, c : number, w : number);

        tessellateStrokePath();

        clampPolygon() : boolean;

        public tessellateLinePath(path : LinePath);

        clampLinePath() : boolean;
    }

    export namespace Tessellator {

        export class TessellatorCallback implements PGL.TessellatorCallback {
            public __parent: any;
            attribs : PGraphicsOpenGL.AttributeMap;

            calcNormals : boolean;

            strokeTess : boolean;

            clampXY : boolean;

            cache : PGraphicsOpenGL.IndexCache;

            cacheIndex : number;

            vertFirst : number;

            vertCount : number;

            vertOffset : number;

            primitive : number;

            public constructor(__parent: any, attribs : PGraphicsOpenGL.AttributeMap);

            public init(addCache : boolean, strokeTess : boolean, calcNorm : boolean, clampXY : boolean);

            public begin(type : number);

            public end();

            addIndex(tessIdx : number);

            calcTriNormal(tessIdx0 : number, tessIdx1 : number, tessIdx2 : number);

            public vertex(data : any);

            public error(errnum : number);

            /**
             * Implementation of the GLU_TESS_COMBINE callback.
             * @param {Array} coords is the 3-vector of the new vertex
             * @param {Array} data is the vertex data to be combined, up to four elements.
             * This is useful when mixing colors together or any other
             * user data that was passed in to gluTessVertex.
             * @param {Array} weight is an array of weights, one for each element of "data"
             * that should be linearly combined for new values.
             * @param {Array} outData is the set of new values of "data" after being
             * put back together based on the weights. it's passed back as a
             * single element Object[] array because that's the closest
             * that Java gets to a pointer.
             */
            public combine(coords : number[], data : any[], weight : number[], outData : any[]);

            normalize(v : number[], i : number);
        }
    }


    export class DepthSorter {
        static X : number;

        static Y : number;

        static Z : number;

        static W : number;

        static X0 : number;

        static Y0 : number;

        static Z0 : number;

        static X1 : number;

        static Y1 : number;

        static Z1 : number;

        static X2 : number;

        static Y2 : number;

        static Z2 : number;

        triangleIndices : number[];

        texMap : number[];

        voffsetMap : number[];

        minXBuffer : number[];

        minYBuffer : number[];

        minZBuffer : number[];

        maxXBuffer : number[];

        maxYBuffer : number[];

        maxZBuffer : number[];

        screenVertices : number[];

        triA : number[];

        triB : number[];

        marked : any;

        swapped : any;

        pg : PGraphicsOpenGL;

        constructor(pg : PGraphicsOpenGL);

        checkIndexBuffers(newTriangleCount : number);

        checkVertexBuffer(newVertexCount : number);

        sort(tessGeo : PGraphicsOpenGL.TessGeometry);

        static fetchTriCoords(tri : number[], ti : number, vertexOffset : number[], voffsetMap : number[], screenVertices : number[], polyIndices : number[]);

        static sortByMinZ(leftTid : number, rightTid : number, triangleIndices : number[], minZBuffer : number[]);

        static side(tri1 : number[], tri2 : number[], tz : number) : number;

        static dot(a1 : number, a2 : number, a3 : number, b1 : number, b2 : number, b3 : number) : number;

        static swap(array : number[], i1 : number, i2 : number);

        static rotateRight(array : number[], i1 : number, i2 : number);
    }

    export class GLResourceTexture extends PGraphicsOpenGL.Disposable<Texture> {
        glName : number;

        pgl : PGL;

        context : number;

        public constructor(tex : Texture);

        /**
         * 
         */
        public disposeNative();

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }

    export class GLResourceVertexBuffer extends PGraphicsOpenGL.Disposable<VertexBuffer> {
        glId : number;

        pgl : PGL;

        context : number;

        public constructor(vbo : VertexBuffer);

        /**
         * 
         */
        public disposeNative();

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }

    export class GLResourceShader extends PGraphicsOpenGL.Disposable<PShader> {
        glProgram : number;

        glVertex : number;

        glFragment : number;

        pgl : PGL;

        context : number;

        public constructor(sh : PShader);

        /**
         * 
         */
        public disposeNative();

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }

    export class GLResourceFrameBuffer extends PGraphicsOpenGL.Disposable<FrameBuffer> {
        glFbo : number;

        glDepth : number;

        glStencil : number;

        glDepthStencil : number;

        glMultisample : number;

        pgl : PGL;

        context : number;

        public constructor(fb : FrameBuffer);

        /**
         * 
         */
        public disposeNative();

        /**
         * 
         * @param {*} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }
}



