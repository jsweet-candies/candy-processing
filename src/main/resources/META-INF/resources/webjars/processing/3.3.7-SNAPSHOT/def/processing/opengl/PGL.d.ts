/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Processing-OpenGL abstraction layer. Needs to be implemented by subclasses
 * using specific OpenGL-Java bindings.
 * 
 * It includes a full GLES 2.0 interface.
 * @param {PGraphicsOpenGL} pg
 * @class
 */
declare class PGL {
    /**
     * The PGraphics and PApplet objects using this interface
     */
    graphics : PGraphicsOpenGL;

    sketch : PApplet;

    /**
     * OpenGL thread
     */
    glThread : any;

    /**
     * ID of the GL context associated to the surface
     */
    glContext : number;

    /**
     * true if this is the GL interface for a primary surface PGraphics
     */
    public primaryPGL : boolean;

    public static REQUESTED_DEPTH_BITS : number;

    public static REQUESTED_STENCIL_BITS : number;

    public static REQUESTED_ALPHA_BITS : number;

    /**
     * Switches between the use of regular and direct buffers.
     */
    static USE_DIRECT_BUFFERS : boolean;

    static MIN_DIRECT_BUFFER_SIZE : number;

    /**
     * Enables/disables mipmap use.
     */
    static MIPMAPS_ENABLED : boolean;

    /**
     * Initial sizes for arrays of input and tessellated data.
     */
    static DEFAULT_IN_VERTICES : number;

    static DEFAULT_IN_EDGES : number;

    static DEFAULT_IN_TEXTURES : number;

    static DEFAULT_TESS_VERTICES : number;

    static DEFAULT_TESS_INDICES : number;

    /**
     * Maximum lights by default is 8, the minimum defined by OpenGL.
     */
    static MAX_LIGHTS : number;

    /**
     * Maximum index value of a tessellated vertex. GLES restricts the vertex
     * indices to be of type unsigned short. Since Java only supports signed
     * shorts as primitive type we have 2^15 = 32768 as the maximum number of
     * vertices that can be referred to within a single VBO.
     */
    static MAX_VERTEX_INDEX : number;

    static MAX_VERTEX_INDEX1 : number;

    /**
     * Count of tessellated fill, line or point vertices that will
     * trigger a flush in the immediate mode. It doesn't necessarily
     * be equal to MAX_VERTEX_INDEX1, since the number of vertices can
     * be effectively much large since the renderer uses offsets to
     * refer to vertices beyond the MAX_VERTEX_INDEX limit.
     */
    static FLUSH_VERTEX_COUNT : number;

    /**
     * Minimum/maximum dimensions of a texture used to hold font data.
     */
    static MIN_FONT_TEX_SIZE : number;

    static MAX_FONT_TEX_SIZE : number;

    /**
     * Minimum stroke weight needed to apply the full path stroking
     * algorithm that properly generates caps and joins.
     */
    static MIN_CAPS_JOINS_WEIGHT : number;

    /**
     * Maximum length of linear paths to be stroked with the
     * full algorithm that generates accurate caps and joins.
     */
    static MAX_CAPS_JOINS_LENGTH : number;

    /**
     * Minimum array size to use arrayCopy method().
     */
    static MIN_ARRAYCOPY_SIZE : number;

    /**
     * Factor used to displace the stroke vertices towards the camera in
     * order to make sure the lines are always on top of the fill geometry
     */
    static STROKE_DISPLACEMENT : number;

    firstFrame : any;

    static SINGLE_BUFFERED : boolean;

    fboLayerEnabled : boolean;

    fboLayerCreated : boolean;

    fboLayerEnabledReq : boolean;

    fboLayerDisableReq : boolean;

    fbolayerResetReq : boolean;

    public reqNumSamples : number;

    numSamples : number;

    glColorFbo : any;

    glColorTex : any;

    glDepthStencil : any;

    glDepth : any;

    glStencil : any;

    glMultiFbo : any;

    glMultiColor : any;

    glMultiDepthStencil : any;

    glMultiDepth : any;

    glMultiStencil : any;

    fboWidth : number;

    fboHeight : number;

    backTex : number;

    frontTex : number;

    /**
     * Flags used to handle the creation of a separate front texture
     */
    usingFrontTex : boolean;

    needSepFrontTex : boolean;

    loadedTex2DShader : boolean;

    tex2DShaderProgram : number;

    tex2DVertShader : number;

    tex2DFragShader : number;

    tex2DShaderContext : number;

    tex2DVertLoc : number;

    tex2DTCoordLoc : number;

    tex2DSamplerLoc : number;

    tex2DGeoVBO : number;

    loadedTexRectShader : boolean;

    texRectShaderProgram : number;

    texRectVertShader : number;

    texRectFragShader : number;

    texRectShaderContext : number;

    texRectVertLoc : number;

    texRectTCoordLoc : number;

    texRectSamplerLoc : number;

    texRectGeoVBO : number;

    texCoords : number[];

    texData : any;

    static SHADER_PREPROCESSOR_DIRECTIVE : string;

    static texVertShaderSource : string[];

    static tex2DFragShaderSource : string[];

    static texRectFragShaderSource : string[];

    /**
     * Which texturing targets are enabled
     */
    texturingTargets : boolean[];

    /**
     * Used to keep track of which textures are bound to each target
     */
    maxTexUnits : number;

    activeTexUnit : number;

    boundTextures : number[][];

    targetFps : number;

    currentFps : number;

    setFps : boolean;

    byteBuffer : any;

    intBuffer : any;

    viewBuffer : any;

    colorBuffer : any;

    depthBuffer : any;

    stencilBuffer : any;

    /**
     * Used to register amount of geometry rendered in each frame.
     */
    geomCount : number;

    pgeomCount : number;

    /**
     * Used to register calls to background.
     */
    clearColor : any;

    pclearColor : boolean;

    clearDepth : any;

    pclearDepth : boolean;

    clearStencil : any;

    pclearStencil : boolean;

    public static WIKI : string;

    public static FRAMEBUFFER_ERROR : string;

    public static MISSING_FBO_ERROR : string;

    public static MISSING_GLSL_ERROR : string;

    public static MISSING_GLFUNC_ERROR : string;

    public static UNSUPPORTED_GLPROF_ERROR : string;

    public static TEXUNIT_ERROR : string;

    public static NONPRIMARY_ERROR : string;

    static DEPTH_READING_NOT_ENABLED_ERROR : string;

    /**
     * Size of different types in bytes
     */
    static SIZEOF_SHORT : number;

    static SIZEOF_INT : number;

    static SIZEOF_FLOAT : number;

    static SIZEOF_BYTE : number;

    static SIZEOF_INDEX : number;

    static INDEX_TYPE : number;

    /**
     * Machine Epsilon for float precision.
     */
    static FLOAT_EPS : number;

    /**
     * Set to true if the host system is big endian (PowerPC, MIPS, SPARC), false
     * if little endian (x86 Intel for Mac or PC).
     */
    static BIG_ENDIAN : boolean;

    presentMode : any;

    showStopButton : boolean;

    public presentX : any;

    public presentY : any;

    closeButtonTex : any;

    stopButtonColor : number;

    stopButtonWidth : number;

    stopButtonHeight : number;

    stopButtonX : number;

    closeButtonY : number;

    static closeButtonPix : number[];

    public constructor();

    public constructor(pg : PGraphicsOpenGL);

    public dispose();

    public setPrimary(primary : boolean);

    public static smoothToSamples(smooth : number) : number;

    public getNative() : any;

    setFrameRate(fps : number);

    initSurface(antialias : number);

    reinitSurface();

    registerListeners();

    getReadFramebuffer() : number;

    getDrawFramebuffer() : number;

    getDefaultDrawBuffer() : number;

    getDefaultReadBuffer() : number;

    isFBOBacked() : boolean;

    public requestFBOLayer();

    public enableFBOLayer();

    public disableFBOLayer();

    public resetFBOLayer();

    isMultisampled() : boolean;

    getDepthBits() : number;

    getStencilBits() : number;

    getDepthTest() : boolean;

    getDepthWriteMask() : boolean;

    wrapBackTexture(texture : Texture) : Texture;

    wrapFrontTexture(texture : Texture) : Texture;

    bindFrontTexture();

    unbindFrontTexture();

    syncBackTexture();

    getPixelScale() : number;

    public initPresentMode(x : number, y : number, stopColor : number);

    public insideStopButton(x : number, y : number) : boolean;

    clearDepthStencil();

    clearBackground(r : number, g : number, b : number, a : number, depth : boolean, stencil : boolean);

    beginRender();

    endRender(windowColor : number);

    getGL(pgl : PGL);

    canDraw() : boolean;

    requestFocus();

    requestDraw();

    swapBuffers();

    public threadIsCurrent() : boolean;

    public setThread(thread : any);

    beginGL();

    endGL();

    createFBOLayer();

    initFBOLayer();

    saveFirstFrame();

    restoreFirstFrame();

    destroyFBOLayer();

    createDepthAndStencilBuffer(multisample : boolean, depthBits : number, stencilBits : number, packed : boolean);

    createEmptyContext() : number;

    getCurrentContext() : number;

    contextIsCurrent(other : number) : boolean;

    enableTexturing(target : number);

    disableTexturing(target : number);

    texturingIsEnabled(target : number) : boolean;

    textureIsBound(target : number, id : number) : boolean;

    initTexture(target : number, format : number, width : number, height : number);

    initTexture(target : number, format : number, width : number, height : number, initColor : number);

    copyToTexture(target : number, format : number, id : number, x : number, y : number, w : number, h : number, buffer : number[]);

    copyToTexture(target : number, format : number, id : number, x : number, y : number, w : number, h : number, buffer : any);

    /**
     * Not an approved function, this will change or be removed in the future.
     * @param {number} target
     * @param {number} id
     * @param {number} width
     * @param {number} height
     * @param {number} X0
     * @param {number} Y0
     * @param {number} X1
     * @param {number} Y1
     */
    public drawTexture(target : number, id : number, width : number, height : number, X0 : number, Y0 : number, X1 : number, Y1 : number);

    /**
     * Not an approved function, this will change or be removed in the future.
     * @param {number} target
     * @param {number} id
     * @param {number} texW
     * @param {number} texH
     * @param {number} viewX
     * @param {number} viewY
     * @param {number} viewW
     * @param {number} viewH
     * @param {number} texX0
     * @param {number} texY0
     * @param {number} texX1
     * @param {number} texY1
     * @param {number} scrX0
     * @param {number} scrY0
     * @param {number} scrX1
     * @param {number} scrY1
     */
    public drawTexture(target : number, id : number, texW : number, texH : number, viewX : number, viewY : number, viewW : number, viewH : number, texX0 : number, texY0 : number, texX1 : number, texY1 : number, scrX0 : number, scrY0 : number, scrX1 : number, scrY1 : number);

    public drawTexture(target : number, id : number, texW : number, texH : number, viewX : number, viewY : number, viewW : number, viewH : number, viewF : number, texX0 : number, texY0 : number, texX1 : number, texY1 : number, scrX0 : number, scrY0 : number, scrX1 : number, scrY1 : number);

    initTex2DShader() : PGL;

    drawTexture2D(id : number, texW : number, texH : number, viewX : number, viewY : number, viewW : number, viewH : number, viewF : number, texX0 : number, texY0 : number, texX1 : number, texY1 : number, scrX0 : number, scrY0 : number, scrX1 : number, scrY1 : number);

    initTexRectShader() : PGL;

    drawTextureRect(id : number, texW : number, texH : number, viewX : number, viewY : number, viewW : number, viewH : number, viewF : number, texX0 : number, texY0 : number, texX1 : number, texY1 : number, scrX0 : number, scrY0 : number, scrX1 : number, scrY1 : number);

    getColorValue(scrX : number, scrY : number) : number;

    getDepthValue(scrX : number, scrY : number) : number;

    getStencilValue(scrX : number, scrY : number) : number;

    static isPowerOfTwo(val : number) : boolean;

    static nextPowerOfTwo(val : number) : number;

    /**
     * Converts input native OpenGL value (RGBA on big endian, ABGR on little
     * endian) to Java ARGB.
     * @param {number} color
     * @return {number}
     */
    static nativeToJavaARGB(color : number) : number;

    /**
     * Converts input array of native OpenGL values (RGBA on big endian, ABGR on
     * little endian) representing an image of width x height resolution to Java
     * ARGB. It also rearranges the elements in the array so that the image is
     * flipped vertically.
     * @param {Array} pixels
     * @param {number} width
     * @param {number} height
     */
    static nativeToJavaARGB(pixels : number[], width : number, height : number);

    /**
     * Converts input native OpenGL value (RGBA on big endian, ABGR on little
     * endian) to Java RGB, so that the alpha component of the result is set
     * to opaque (255).
     * @param {number} color
     * @return {number}
     */
    static nativeToJavaRGB(color : number) : number;

    /**
     * Converts input array of native OpenGL values (RGBA on big endian, ABGR on
     * little endian) representing an image of width x height resolution to Java
     * RGB, so that the alpha component of all pixels is set to opaque (255). It
     * also rearranges the elements in the array so that the image is flipped
     * vertically.
     * @param {Array} pixels
     * @param {number} width
     * @param {number} height
     */
    static nativeToJavaRGB(pixels : number[], width : number, height : number);

    /**
     * Converts input Java ARGB value to native OpenGL format (RGBA on big endian,
     * BGRA on little endian).
     * @param {number} color
     * @return {number}
     */
    static javaToNativeARGB(color : number) : number;

    /**
     * Converts input array of Java ARGB values representing an image of width x
     * height resolution to native OpenGL format (RGBA on big endian, BGRA on
     * little endian). It also rearranges the elements in the array so that the
     * image is flipped vertically.
     * @param {Array} pixels
     * @param {number} width
     * @param {number} height
     */
    static javaToNativeARGB(pixels : number[], width : number, height : number);

    /**
     * Converts input Java ARGB value to native OpenGL format (RGBA on big endian,
     * BGRA on little endian), setting alpha component to opaque (255).
     * @param {number} color
     * @return {number}
     */
    static javaToNativeRGB(color : number) : number;

    /**
     * Converts input array of Java ARGB values representing an image of width x
     * height resolution to native OpenGL format (RGBA on big endian, BGRA on
     * little endian), while setting alpha component of all pixels to opaque
     * (255). It also rearranges the elements in the array so that the image is
     * flipped vertically.
     * @param {Array} pixels
     * @param {number} width
     * @param {number} height
     */
    static javaToNativeRGB(pixels : number[], width : number, height : number);

    static qualityToSamples(quality : number) : number;

    getGLSLVersion() : number;

    loadVertexShader(filename : string) : string[];

    loadFragmentShader(filename : string) : string[];

    loadFragmentShader(url : URL) : string[];

    loadVertexShader(url : URL) : string[];

    loadVertexShader(filename : string, version : number) : string[];

    loadFragmentShader(filename : string, version : number) : string[];

    loadFragmentShader(url : URL, version : number) : string[];

    loadVertexShader(url : URL, version : number) : string[];

    static preprocessFragmentSource(fragSrc0 : string[], version : number) : string[];

    static preprocessVertexSource(vertSrc0 : string[], version : number) : string[];

    static GLSL_ID_REGEX : string;

    static GLSL_FN_REGEX : string;

    static preprocessShaderSource(src0 : string[], search : RegExp[], replace : string[], offset : number) : string[];

    static containsVersionDirective(shSrc : string[]) : boolean;

    createShader(shaderType : number, source : string) : number;

    createProgram(vertexShader : number, fragmentShader : number) : number;

    compiled(shader : number) : boolean;

    linked(program : number) : boolean;

    validateFramebuffer() : number;

    isES() : boolean;

    getGLVersion() : number[];

    hasFBOs() : boolean;

    hasShaders() : boolean;

    hasNpotTexSupport() : boolean;

    hasAutoMipmapGenSupport() : boolean;

    hasFboMultisampleSupport() : boolean;

    hasPackedDepthStencilSupport() : boolean;

    hasAnisoSamplingSupport() : boolean;

    hasSynchronization() : boolean;

    hasPBOs() : boolean;

    hasReadBuffer() : boolean;

    hasDrawBuffer() : boolean;

    maxSamples() : number;

    getMaxTexUnits() : number;

    static allocateDirectByteBuffer(size : number) : any;

    static allocateByteBuffer(size : number) : any;

    static allocateByteBuffer(arr : number[]) : any;

    static updateByteBuffer(buf : any, arr : number[], wrap : boolean) : any;

    static updateByteBuffer(buf : any, arr : number[], offset : number, size : number);

    static getByteArray(buf : any, arr : number[]);

    static putByteArray(buf : any, arr : number[]);

    static fillByteBuffer(buf : any, i0 : number, i1 : number, val : number);

    static allocateDirectShortBuffer(size : number) : any;

    static allocateShortBuffer(size : number) : any;

    static allocateShortBuffer(arr : number[]) : any;

    static updateShortBuffer(buf : any, arr : number[], wrap : boolean) : any;

    static updateShortBuffer(buf : any, arr : number[], offset : number, size : number);

    static getShortArray(buf : any, arr : number[]);

    static putShortArray(buf : any, arr : number[]);

    static fillShortBuffer(buf : any, i0 : number, i1 : number, val : number);

    static allocateDirectIntBuffer(size : number) : any;

    static allocateIntBuffer(size : number) : any;

    static allocateIntBuffer(arr : number[]) : any;

    static updateIntBuffer(buf : any, arr : number[], wrap : boolean) : any;

    static updateIntBuffer(buf : any, arr : number[], offset : number, size : number);

    static getIntArray(buf : any, arr : number[]);

    static putIntArray(buf : any, arr : number[]);

    static fillIntBuffer(buf : any, i0 : number, i1 : number, val : number);

    static allocateDirectFloatBuffer(size : number) : any;

    static allocateFloatBuffer(size : number) : any;

    static allocateFloatBuffer(arr : number[]) : any;

    static updateFloatBuffer(buf : any, arr : number[], wrap : boolean) : any;

    static updateFloatBuffer(buf : any, arr : number[], offset : number, size : number);

    static getFloatArray(buf : any, arr : number[]);

    static putFloatArray(buf : any, arr : number[]);

    static fillFloatBuffer(buf : any, i0 : number, i1 : number, val : number);

    getFontAscent(font : any) : number;

    getFontDescent(font : any) : number;

    getTextWidth(font : any, buffer : string[], start : number, stop : number) : number;

    getDerivedFont(font : any, size : number) : any;

    createTessellator(callback : PGL.TessellatorCallback) : PGL.Tessellator;

    tessError(err : number) : string;

    static SHAPE_TEXT_SUPPORTED : boolean;

    static SEG_MOVETO : number;

    static SEG_LINETO : number;

    static SEG_QUADTO : number;

    static SEG_CUBICTO : number;

    static SEG_CLOSE : number;

    createFontOutline(ch : string, font : any) : PGL.FontOutline;

    public static FALSE : number;

    public static TRUE : number;

    public static INT : number;

    public static BYTE : number;

    public static SHORT : number;

    public static FLOAT : number;

    public static BOOL : number;

    public static UNSIGNED_INT : number;

    public static UNSIGNED_BYTE : number;

    public static UNSIGNED_SHORT : number;

    public static RGB : number;

    public static RGBA : number;

    public static ALPHA : number;

    public static LUMINANCE : number;

    public static LUMINANCE_ALPHA : number;

    public static UNSIGNED_SHORT_5_6_5 : number;

    public static UNSIGNED_SHORT_4_4_4_4 : number;

    public static UNSIGNED_SHORT_5_5_5_1 : number;

    public static RGBA4 : number;

    public static RGB5_A1 : number;

    public static RGB565 : number;

    public static RGB8 : number;

    public static RGBA8 : number;

    public static ALPHA8 : number;

    public static READ_ONLY : number;

    public static WRITE_ONLY : number;

    public static READ_WRITE : number;

    public static TESS_WINDING_NONZERO : number;

    public static TESS_WINDING_ODD : number;

    public static TESS_EDGE_FLAG : number;

    public static GENERATE_MIPMAP_HINT : number;

    public static FASTEST : number;

    public static NICEST : number;

    public static DONT_CARE : number;

    public static VENDOR : number;

    public static RENDERER : number;

    public static VERSION : number;

    public static EXTENSIONS : number;

    public static SHADING_LANGUAGE_VERSION : number;

    public static MAX_SAMPLES : number;

    public static SAMPLES : number;

    public static ALIASED_LINE_WIDTH_RANGE : number;

    public static ALIASED_POINT_SIZE_RANGE : number;

    public static DEPTH_BITS : number;

    public static STENCIL_BITS : number;

    public static CCW : number;

    public static CW : number;

    public static VIEWPORT : number;

    public static ARRAY_BUFFER : number;

    public static ELEMENT_ARRAY_BUFFER : number;

    public static PIXEL_PACK_BUFFER : number;

    public static MAX_VERTEX_ATTRIBS : number;

    public static STATIC_DRAW : number;

    public static DYNAMIC_DRAW : number;

    public static STREAM_DRAW : number;

    public static STREAM_READ : number;

    public static BUFFER_SIZE : number;

    public static BUFFER_USAGE : number;

    public static POINTS : number;

    public static LINE_STRIP : number;

    public static LINE_LOOP : number;

    public static LINES : number;

    public static TRIANGLE_FAN : number;

    public static TRIANGLE_STRIP : number;

    public static TRIANGLES : number;

    public static CULL_FACE : number;

    public static FRONT : number;

    public static BACK : number;

    public static FRONT_AND_BACK : number;

    public static POLYGON_OFFSET_FILL : number;

    public static UNPACK_ALIGNMENT : number;

    public static PACK_ALIGNMENT : number;

    public static TEXTURE_2D : number;

    public static TEXTURE_RECTANGLE : number;

    public static TEXTURE_BINDING_2D : number;

    public static TEXTURE_BINDING_RECTANGLE : number;

    public static MAX_TEXTURE_SIZE : number;

    public static TEXTURE_MAX_ANISOTROPY : number;

    public static MAX_TEXTURE_MAX_ANISOTROPY : number;

    public static MAX_VERTEX_TEXTURE_IMAGE_UNITS : number;

    public static MAX_TEXTURE_IMAGE_UNITS : number;

    public static MAX_COMBINED_TEXTURE_IMAGE_UNITS : number;

    public static NUM_COMPRESSED_TEXTURE_FORMATS : number;

    public static COMPRESSED_TEXTURE_FORMATS : number;

    public static NEAREST : number;

    public static LINEAR : number;

    public static LINEAR_MIPMAP_NEAREST : number;

    public static LINEAR_MIPMAP_LINEAR : number;

    public static CLAMP_TO_EDGE : number;

    public static REPEAT : number;

    public static TEXTURE0 : number;

    public static TEXTURE1 : number;

    public static TEXTURE2 : number;

    public static TEXTURE3 : number;

    public static TEXTURE_MIN_FILTER : number;

    public static TEXTURE_MAG_FILTER : number;

    public static TEXTURE_WRAP_S : number;

    public static TEXTURE_WRAP_T : number;

    public static TEXTURE_WRAP_R : number;

    public static TEXTURE_CUBE_MAP : number;

    public static TEXTURE_CUBE_MAP_POSITIVE_X : number;

    public static TEXTURE_CUBE_MAP_POSITIVE_Y : number;

    public static TEXTURE_CUBE_MAP_POSITIVE_Z : number;

    public static TEXTURE_CUBE_MAP_NEGATIVE_X : number;

    public static TEXTURE_CUBE_MAP_NEGATIVE_Y : number;

    public static TEXTURE_CUBE_MAP_NEGATIVE_Z : number;

    public static VERTEX_SHADER : number;

    public static FRAGMENT_SHADER : number;

    public static INFO_LOG_LENGTH : number;

    public static SHADER_SOURCE_LENGTH : number;

    public static COMPILE_STATUS : number;

    public static LINK_STATUS : number;

    public static VALIDATE_STATUS : number;

    public static SHADER_TYPE : number;

    public static DELETE_STATUS : number;

    public static FLOAT_VEC2 : number;

    public static FLOAT_VEC3 : number;

    public static FLOAT_VEC4 : number;

    public static FLOAT_MAT2 : number;

    public static FLOAT_MAT3 : number;

    public static FLOAT_MAT4 : number;

    public static INT_VEC2 : number;

    public static INT_VEC3 : number;

    public static INT_VEC4 : number;

    public static BOOL_VEC2 : number;

    public static BOOL_VEC3 : number;

    public static BOOL_VEC4 : number;

    public static SAMPLER_2D : number;

    public static SAMPLER_CUBE : number;

    public static LOW_FLOAT : number;

    public static MEDIUM_FLOAT : number;

    public static HIGH_FLOAT : number;

    public static LOW_INT : number;

    public static MEDIUM_INT : number;

    public static HIGH_INT : number;

    public static CURRENT_VERTEX_ATTRIB : number;

    public static VERTEX_ATTRIB_ARRAY_BUFFER_BINDING : number;

    public static VERTEX_ATTRIB_ARRAY_ENABLED : number;

    public static VERTEX_ATTRIB_ARRAY_SIZE : number;

    public static VERTEX_ATTRIB_ARRAY_STRIDE : number;

    public static VERTEX_ATTRIB_ARRAY_TYPE : number;

    public static VERTEX_ATTRIB_ARRAY_NORMALIZED : number;

    public static VERTEX_ATTRIB_ARRAY_POINTER : number;

    public static BLEND : number;

    public static ONE : number;

    public static ZERO : number;

    public static SRC_ALPHA : number;

    public static DST_ALPHA : number;

    public static ONE_MINUS_SRC_ALPHA : number;

    public static ONE_MINUS_DST_COLOR : number;

    public static ONE_MINUS_SRC_COLOR : number;

    public static DST_COLOR : number;

    public static SRC_COLOR : number;

    public static SAMPLE_ALPHA_TO_COVERAGE : number;

    public static SAMPLE_COVERAGE : number;

    public static KEEP : number;

    public static REPLACE : number;

    public static INCR : number;

    public static DECR : number;

    public static INVERT : number;

    public static INCR_WRAP : number;

    public static DECR_WRAP : number;

    public static NEVER : number;

    public static ALWAYS : number;

    public static EQUAL : number;

    public static LESS : number;

    public static LEQUAL : number;

    public static GREATER : number;

    public static GEQUAL : number;

    public static NOTEQUAL : number;

    public static FUNC_ADD : number;

    public static FUNC_MIN : number;

    public static FUNC_MAX : number;

    public static FUNC_REVERSE_SUBTRACT : number;

    public static FUNC_SUBTRACT : number;

    public static DITHER : number;

    public static CONSTANT_COLOR : number;

    public static CONSTANT_ALPHA : number;

    public static ONE_MINUS_CONSTANT_COLOR : number;

    public static ONE_MINUS_CONSTANT_ALPHA : number;

    public static SRC_ALPHA_SATURATE : number;

    public static SCISSOR_TEST : number;

    public static STENCIL_TEST : number;

    public static DEPTH_TEST : number;

    public static DEPTH_WRITEMASK : number;

    public static COLOR_BUFFER_BIT : number;

    public static DEPTH_BUFFER_BIT : number;

    public static STENCIL_BUFFER_BIT : number;

    public static FRAMEBUFFER : number;

    public static COLOR_ATTACHMENT0 : number;

    public static COLOR_ATTACHMENT1 : number;

    public static COLOR_ATTACHMENT2 : number;

    public static COLOR_ATTACHMENT3 : number;

    public static RENDERBUFFER : number;

    public static DEPTH_ATTACHMENT : number;

    public static STENCIL_ATTACHMENT : number;

    public static READ_FRAMEBUFFER : number;

    public static DRAW_FRAMEBUFFER : number;

    public static DEPTH24_STENCIL8 : number;

    public static DEPTH_COMPONENT : number;

    public static DEPTH_COMPONENT16 : number;

    public static DEPTH_COMPONENT24 : number;

    public static DEPTH_COMPONENT32 : number;

    public static STENCIL_INDEX : number;

    public static STENCIL_INDEX1 : number;

    public static STENCIL_INDEX4 : number;

    public static STENCIL_INDEX8 : number;

    public static DEPTH_STENCIL : number;

    public static FRAMEBUFFER_COMPLETE : number;

    public static FRAMEBUFFER_UNDEFINED : number;

    public static FRAMEBUFFER_INCOMPLETE_ATTACHMENT : number;

    public static FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT : number;

    public static FRAMEBUFFER_INCOMPLETE_DIMENSIONS : number;

    public static FRAMEBUFFER_INCOMPLETE_FORMATS : number;

    public static FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER : number;

    public static FRAMEBUFFER_INCOMPLETE_READ_BUFFER : number;

    public static FRAMEBUFFER_UNSUPPORTED : number;

    public static FRAMEBUFFER_INCOMPLETE_MULTISAMPLE : number;

    public static FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS : number;

    public static FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE : number;

    public static FRAMEBUFFER_ATTACHMENT_OBJECT_NAME : number;

    public static FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL : number;

    public static FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE : number;

    public static RENDERBUFFER_WIDTH : number;

    public static RENDERBUFFER_HEIGHT : number;

    public static RENDERBUFFER_RED_SIZE : number;

    public static RENDERBUFFER_GREEN_SIZE : number;

    public static RENDERBUFFER_BLUE_SIZE : number;

    public static RENDERBUFFER_ALPHA_SIZE : number;

    public static RENDERBUFFER_DEPTH_SIZE : number;

    public static RENDERBUFFER_STENCIL_SIZE : number;

    public static RENDERBUFFER_INTERNAL_FORMAT : number;

    public static MULTISAMPLE : number;

    public static LINE_SMOOTH : number;

    public static POLYGON_SMOOTH : number;

    public static SYNC_GPU_COMMANDS_COMPLETE : number;

    public static ALREADY_SIGNALED : number;

    public static CONDITION_SATISFIED : number;

    public flush();

    public finish();

    public hint(target : number, hint : number);

    public enable(value : number);

    public disable(value : number);

    public getBooleanv(value : number, data : any);

    public getIntegerv(value : number, data : any);

    public getFloatv(value : number, data : any);

    public isEnabled(value : number) : boolean;

    public getString(name : number) : string;

    public getError() : number;

    public errorString(err : number) : string;

    public genBuffers(n : number, buffers : any);

    public deleteBuffers(n : number, buffers : any);

    public bindBuffer(target : number, buffer : number);

    public bufferData(target : number, size : number, data : any, usage : number);

    public bufferSubData(target : number, offset : number, size : number, data : any);

    public isBuffer(buffer : number);

    public getBufferParameteriv(target : number, value : number, data : any);

    public mapBuffer(target : number, access : number) : any;

    public mapBufferRange(target : number, offset : number, length : number, access : number) : any;

    public unmapBuffer(target : number);

    public fenceSync(condition : number, flags : number) : number;

    public deleteSync(sync : number);

    public clientWaitSync(sync : number, flags : number, timeout : number) : number;

    public depthRangef(n : number, f : number);

    public viewport(x : number, y : number, w : number, h : number);

    viewportImpl(x : number, y : number, w : number, h : number);

    public readPixels(x : number, y : number, width : number, height : number, format : number, type : number, buffer : any);

    public readPixels(x : number, y : number, width : number, height : number, format : number, type : number, offset : number);

    readPixelsImpl(x : number, y : number, width : number, height : number, format : number, type : number, buffer : any);

    readPixelsImpl(x : number, y : number, width : number, height : number, format : number, type : number, offset : number);

    public vertexAttrib1f(index : number, value : number);

    public vertexAttrib2f(index : number, value0 : number, value1 : number);

    public vertexAttrib3f(index : number, value0 : number, value1 : number, value2 : number);

    public vertexAttrib4f(index : number, value0 : number, value1 : number, value2 : number, value3 : number);

    public vertexAttrib1fv(index : number, values : any);

    public vertexAttrib2fv(index : number, values : any);

    public vertexAttrib3fv(index : number, values : any);

    public vertexAttrib4fv(index : number, values : any);

    public vertexAttribPointer(index : number, size : number, type : number, normalized : boolean, stride : number, offset : number);

    public enableVertexAttribArray(index : number);

    public disableVertexAttribArray(index : number);

    public drawArrays(mode : number, first : number, count : number);

    public drawArraysImpl(mode : number, first : number, count : number);

    public drawElements(mode : number, count : number, type : number, offset : number);

    public drawElementsImpl(mode : number, count : number, type : number, offset : number);

    public lineWidth(width : number);

    public frontFace(dir : number);

    public cullFace(mode : number);

    public polygonOffset(factor : number, units : number);

    public pixelStorei(pname : number, param : number);

    public texImage2D(target : number, level : number, internalFormat : number, width : number, height : number, border : number, format : number, type : number, data : any);

    public copyTexImage2D(target : number, level : number, internalFormat : number, x : number, y : number, width : number, height : number, border : number);

    public texSubImage2D(target : number, level : number, xOffset : number, yOffset : number, width : number, height : number, format : number, type : number, data : any);

    public copyTexSubImage2D(target : number, level : number, xOffset : number, yOffset : number, x : number, y : number, width : number, height : number);

    public compressedTexImage2D(target : number, level : number, internalFormat : number, width : number, height : number, border : number, imageSize : number, data : any);

    public compressedTexSubImage2D(target : number, level : number, xOffset : number, yOffset : number, width : number, height : number, format : number, imageSize : number, data : any);

    public texParameteri(target : number, pname : number, param : number);

    public texParameterf(target : number, pname : number, param : number);

    public texParameteriv(target : number, pname : number, params : any);

    public texParameterfv(target : number, pname : number, params : any);

    public generateMipmap(target : number);

    public genTextures(n : number, textures : any);

    public deleteTextures(n : number, textures : any);

    public getTexParameteriv(target : number, pname : number, params : any);

    public getTexParameterfv(target : number, pname : number, params : any);

    public isTexture(texture : number) : boolean;

    public activeTexture(texture : number);

    activeTextureImpl(texture : number);

    public bindTexture(target : number, texture : number);

    bindTextureImpl(target : number, texture : number);

    public createShader(type : number) : number;

    public shaderSource(shader : number, source : string);

    public compileShader(shader : number);

    public releaseShaderCompiler();

    public deleteShader(shader : number);

    public shaderBinary(count : number, shaders : any, binaryFormat : number, binary : any, length : number);

    public createProgram() : number;

    public attachShader(program : number, shader : number);

    public detachShader(program : number, shader : number);

    public linkProgram(program : number);

    public useProgram(program : number);

    public deleteProgram(program : number);

    public getActiveAttrib(program : number, index : number, size : any, type : any) : string;

    public getAttribLocation(program : number, name : string) : number;

    public bindAttribLocation(program : number, index : number, name : string);

    public getUniformLocation(program : number, name : string) : number;

    public getActiveUniform(program : number, index : number, size : any, type : any) : string;

    public uniform1i(location : number, value : number);

    public uniform2i(location : number, value0 : number, value1 : number);

    public uniform3i(location : number, value0 : number, value1 : number, value2 : number);

    public uniform4i(location : number, value0 : number, value1 : number, value2 : number, value3 : number);

    public uniform1f(location : number, value : number);

    public uniform2f(location : number, value0 : number, value1 : number);

    public uniform3f(location : number, value0 : number, value1 : number, value2 : number);

    public uniform4f(location : number, value0 : number, value1 : number, value2 : number, value3 : number);

    public uniform1iv(location : number, count : number, v : any);

    public uniform2iv(location : number, count : number, v : any);

    public uniform3iv(location : number, count : number, v : any);

    public uniform4iv(location : number, count : number, v : any);

    public uniform1fv(location : number, count : number, v : any);

    public uniform2fv(location : number, count : number, v : any);

    public uniform3fv(location : number, count : number, v : any);

    public uniform4fv(location : number, count : number, v : any);

    public uniformMatrix2fv(location : number, count : number, transpose : boolean, mat : any);

    public uniformMatrix3fv(location : number, count : number, transpose : boolean, mat : any);

    public uniformMatrix4fv(location : number, count : number, transpose : boolean, mat : any);

    public validateProgram(program : number);

    public isShader(shader : number) : boolean;

    public getShaderiv(shader : number, pname : number, params : any);

    public getAttachedShaders(program : number, maxCount : number, count : any, shaders : any);

    public getShaderInfoLog(shader : number) : string;

    public getShaderSource(shader : number) : string;

    public getShaderPrecisionFormat(shaderType : number, precisionType : number, range : any, precision : any);

    public getVertexAttribfv(index : number, pname : number, params : any);

    public getVertexAttribiv(index : number, pname : number, params : any);

    public getVertexAttribPointerv(index : number, pname : number, data : any);

    public getUniformfv(program : number, location : number, params : any);

    public getUniformiv(program : number, location : number, params : any);

    public isProgram(program : number) : boolean;

    public getProgramiv(program : number, pname : number, params : any);

    public getProgramInfoLog(program : number) : string;

    public scissor(x : number, y : number, w : number, h : number);

    public sampleCoverage(value : number, invert : boolean);

    public stencilFunc(func : number, ref : number, mask : number);

    public stencilFuncSeparate(face : number, func : number, ref : number, mask : number);

    public stencilOp(sfail : number, dpfail : number, dppass : number);

    public stencilOpSeparate(face : number, sfail : number, dpfail : number, dppass : number);

    public depthFunc(func : number);

    public blendEquation(mode : number);

    public blendEquationSeparate(modeRGB : number, modeAlpha : number);

    public blendFunc(src : number, dst : number);

    public blendFuncSeparate(srcRGB : number, dstRGB : number, srcAlpha : number, dstAlpha : number);

    public blendColor(red : number, green : number, blue : number, alpha : number);

    public colorMask(r : boolean, g : boolean, b : boolean, a : boolean);

    public depthMask(mask : boolean);

    public stencilMask(mask : number);

    public stencilMaskSeparate(face : number, mask : number);

    public clear(buf : number);

    public bindFramebuffer(target : number, framebuffer : number);

    bindFramebufferImpl(target : number, framebuffer : number);

    public deleteFramebuffers(n : number, framebuffers : any);

    public genFramebuffers(n : number, framebuffers : any);

    public bindRenderbuffer(target : number, renderbuffer : number);

    public deleteRenderbuffers(n : number, renderbuffers : any);

    public genRenderbuffers(n : number, renderbuffers : any);

    public renderbufferStorage(target : number, internalFormat : number, width : number, height : number);

    public framebufferRenderbuffer(target : number, attachment : number, rendbuferfTarget : number, renderbuffer : number);

    public framebufferTexture2D(target : number, attachment : number, texTarget : number, texture : number, level : number);

    public checkFramebufferStatus(target : number) : number;

    public isFramebuffer(framebuffer : number) : boolean;

    public getFramebufferAttachmentParameteriv(target : number, attachment : number, pname : number, params : any);

    public isRenderbuffer(renderbuffer : number) : boolean;

    public getRenderbufferParameteriv(target : number, pname : number, params : any);

    public blitFramebuffer(srcX0 : number, srcY0 : number, srcX1 : number, srcY1 : number, dstX0 : number, dstY0 : number, dstX1 : number, dstY1 : number, mask : number, filter : number);

    public renderbufferStorageMultisample(target : number, samples : number, format : number, width : number, height : number);

    public readBuffer(buf : number);

    public drawBuffer(buf : number);
}

declare namespace PGL {

    export interface Tessellator {
        setCallback(flag : number);

        setWindingRule(rule : number);

        setProperty(property : number, value : number);

        beginPolygon();

        beginPolygon(data : any);

        endPolygon();

        beginContour();

        endContour();

        addVertex(v : number[]);

        addVertex(v : number[], n : number, data : any);
    }

    export interface TessellatorCallback {
        begin(type : number);

        end();

        vertex(data : any);

        combine(coords : number[], data : any[], weight : number[], outData : any[]);

        error(errnum : number);
    }

    export interface FontOutline {
        isDone() : boolean;

        currentSegment(coords : number[]) : number;

        next();
    }
}



