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

    projection : PMatrix3D;

    ___camera : PMatrix3D;

    cameraInv : PMatrix3D;

    modelview : PMatrix3D;

    modelviewInv : PMatrix3D;

    projmodelview : PMatrix3D;

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

    ___textureWrap : number;

    textureSampling : any;

    ___clip : boolean;

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
    ___texture : Texture;

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

    setFlushMode(mode : number);

    updatePixelSize();

    createPGL(pg : PGraphicsOpenGL) : PGL;

    public saveImpl(filename : string) : boolean;

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

    getPrimaryPG() : PGraphicsOpenGL;

    setCurrentPG(pg : PGraphicsOpenGL);

    setCurrentPG();

    getCurrentPG() : PGraphicsOpenGL;

    getPrimaryPGL() : PGL;

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

    getHint(which : number) : boolean;

    attribImpl(name : string, kind : number, type : number, size : number) : PGraphicsOpenGL.VertexAttribute;

    vertexImpl(x : number, y : number, z : number, u : number, v : number);

    vertexBreak() : boolean;

    tessellate(mode : number);

    tessellate(indices : number[]);

    flushPixels();

    bezierVertexImpl(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    quadraticVertexImpl(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    curveVertexImpl(x : number, y : number, z : number);

    pointImpl(x : number, y : number, z : number);

    lineImpl(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number);

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

    translateImpl(tx : number, ty : number, tz : number);

    static invTranslate(matrix : PMatrix3D, tx : number, ty : number, tz : number);

    static matrixScale(matrix : PMatrix) : number;

    rotateImpl(angle : number, v0 : number, v1 : number, v2 : number);

    static invRotate(matrix : PMatrix3D, angle : number, v0 : number, v1 : number, v2 : number);

    /**
     * Scale in three dimensions.
     * @param {number} sx
     * @param {number} sy
     * @param {number} sz
     */
    scaleImpl(sx : number, sy : number, sz : number);

    static invScale(matrix : PMatrix3D, x : number, y : number, z : number);

    applyMatrixImpl(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    begin2D();

    end2D();

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
     * More flexible method for dealing with camera().
     * <P>
     * The actual call is like gluLookat. Here's the real skinny on what does
     * what:
     * 
     * <PRE>
     * camera(); or
     * camera(ex, ey, ez, cx, cy, cz, ux, uy, uz);
     * </PRE>
     * 
     * do not need to be called from with beginCamera();/endCamera(); That's
     * because they always apply to the camera transformation, and they always
     * totally replace it. That means that any coordinate transforms done before
     * camera(); in draw() will be wiped out. It also means that camera() always
     * operates in untransformed world coordinates. Therefore it is always
     * redundant to call resetMatrix(); before camera(); This isn't technically
     * true of gluLookat, but it's pretty much how it's used.
     * <P>
     * Now, beginCamera(); and endCamera(); are useful if you want to move the
     * camera around using transforms like translate(), etc. They will wipe out
     * any coordinate system transforms that occur before them in draw(), but they
     * will not automatically wipe out the camera transform. This means that they
     * should be at the top of draw(). It also means that the following:
     * 
     * <PRE>
     * beginCamera();
     * rotateY(PI / 8);
     * endCamera();
     * </PRE>
     * 
     * will result in a camera that spins without stopping. If you want to just
     * rotate a small constant amount, try this:
     * 
     * <PRE>
     * beginCamera();
     * camera(); // sets up the default view
     * rotateY(PI / 8);
     * endCamera();
     * </PRE>
     * 
     * That will rotate a little off of the default view. Note that this is
     * entirely equivalent to
     * 
     * <PRE>
     * camera(); // sets up the default view
     * beginCamera();
     * rotateY(PI / 8);
     * endCamera();
     * </PRE>
     * 
     * because camera() doesn't care whether or not it's inside a begin/end
     * clause. Basically it's safe to use camera() or camera(ex, ey, ez, cx, cy,
     * cz, ux, uy, uz) as naked calls because they do all the matrix resetting
     * automatically.
     * @param {number} eyeX
     * @param {number} eyeY
     * @param {number} eyeZ
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} centerZ
     * @param {number} upX
     * @param {number} upY
     * @param {number} upZ
     */
    public camera(eyeX : number, eyeY : number, eyeZ : number, centerX : number, centerY : number, centerZ : number, upX : number, upY : number, upZ : number);

    defaultPerspective();

    enableLighting();

    disableLighting();

    noLightAmbient(num : number);

    noLightDiffuse(num : number);

    noLightSpecular(num : number);

    noLightFalloff(num : number);

    lightSpot(num : number, angle : number, exponent : number);

    noLightSpot(num : number);

    /**
     * Report on anything from glError().
     * Don't use this inside glBegin/glEnd otherwise it'll
     * throw an GL_INVALID_OPERATION error.
     * @param {string} where
     */
    report(where : string);

    allocatePixels();

    readPixels();

    drawPixels(x : number, y : number, w : number, h : number);

    static completeFinishedPixelTransfers();

    static completeAllPixelTransfers();

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

    initPrimary();

    beginOnscreenDraw();

    endOnscreenDraw();

    initOffscreen();

    beginOffscreenDraw();

    endOffscreenDraw();

    setViewport();

    getGLParameters();

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

    export class Disposable<T> {
        public dispose();

        public disposeNative();
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
    }

    export class GLResourceVertexBuffer extends PGraphicsOpenGL.Disposable<VertexBuffer> {
        glId : number;

        pgl : PGL;

        context : number;
    }

    export class GLResourceShader extends PGraphicsOpenGL.Disposable<PShader> {
        glProgram : number;

        glVertex : number;

        glFragment : number;

        pgl : PGL;

        context : number;
    }

    export class GLResourceFrameBuffer extends PGraphicsOpenGL.Disposable<FrameBuffer> {
        glFbo : number;

        glDepth : number;

        glStencil : number;

        glDepthStencil : number;

        glMultisample : number;

        pgl : PGL;

        context : number;
    }
}



