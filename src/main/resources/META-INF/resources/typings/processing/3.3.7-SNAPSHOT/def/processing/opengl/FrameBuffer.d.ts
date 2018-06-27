/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Encapsulates a Frame Buffer Object for offscreen rendering.
 * When created with onscreen == true, it represents the normal
 * framebuffer. Needed by the stack mechanism in OPENGL2 to return
 * to onscreen rendering after a sequence of pushFramebuffer calls.
 * It transparently handles the situations when the FBO extension is
 * not available.
 * 
 * By Andres Colubri.
 * @class
 */
declare class FrameBuffer implements PConstants {
    pg : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    public glFbo : number;

    public glDepth : number;

    public glStencil : number;

    public glDepthStencil : number;

    public glMultisample : number;

    public width : number;

    public height : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceFrameBuffer;

    depthBits : number;

    stencilBits : number;

    packedDepthStencil : boolean;

    multisample : boolean;

    nsamples : number;

    numColorBuffers : number;

    colorBufferTex : Texture[];

    screenFb : boolean;

    noDepth : boolean;

    pixelBuffer : java.nio.IntBuffer;

    constructor(pg : PGraphicsOpenGL);

    constructor(pg : PGraphicsOpenGL, w : number, h : number, samples : number, colorBuffers : number, depthBits : number, stencilBits : number, packedDepthStencil : boolean, screen : boolean);

    constructor(pg : PGraphicsOpenGL, w : number, h : number);

    constructor(pg : PGraphicsOpenGL, w : number, h : number, screen : boolean);

    public clear();

    public copyColor(dest : FrameBuffer);

    public copyDepth(dest : FrameBuffer);

    public copyStencil(dest : FrameBuffer);

    public copy(dest : FrameBuffer, mask : number);

    public bind();

    public disableDepthTest();

    public finish();

    public readPixels();

    public getPixels(pixels : number[]);

    public getPixelBuffer() : java.nio.IntBuffer;

    public hasDepthBuffer() : boolean;

    public hasStencilBuffer() : boolean;

    public setFBO(id : number);

    public setColorBuffer(tex : Texture);

    public setColorBuffers(textures : Texture[]);

    public setColorBuffers(textures : Texture[], n : number);

    public swapColorBuffers();

    public getDefaultReadBuffer() : number;

    public getDefaultDrawBuffer() : number;

    allocate();

    dispose();

    contextIsOutdated() : boolean;

    initColorBufferMultisample();

    initPackedDepthStencilBuffer();

    initDepthBuffer();

    initStencilBuffer();

    createPixelBuffer();
}


