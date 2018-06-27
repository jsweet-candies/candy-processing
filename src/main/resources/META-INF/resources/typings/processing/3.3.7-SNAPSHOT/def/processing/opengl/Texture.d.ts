/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Creates an instance of PTexture with size width x height and with the
 * specified parameters. The texture is initialized (empty) to that size.
 * @param {number} width int
 * @param {number} height int
 * @param {*} params Parameters
 * @param {PGraphicsOpenGL} pg
 * @class
 */
declare class Texture implements PConstants {
    /**
     * Texture with normalized UV.
     */
    static TEX2D : number;

    /**
     * Texture with un-normalized UV.
     */
    static TEXRECT : number;

    /**
     * Point sampling: both magnification and minification filtering are set
     * to nearest
     */
    static POINT : number;

    /**
     * Linear sampling: magnification filtering is nearest, minification set
     * to linear
     */
    static LINEAR : number;

    /**
     * Bilinear sampling: both magnification filtering is set to linear and
     * minification either to linear-mipmap-nearest (linear interpolation is used
     * within a mipmap, but not between different mipmaps).
     */
    static BILINEAR : number;

    /**
     * Trilinear sampling: magnification filtering set to linear, minification to
     * linear-mipmap-linear, which offers the best mipmap quality since linear
     * interpolation to compute the value in each of two maps and then
     * interpolates linearly between these two values.
     */
    static TRILINEAR : number;

    static MAX_UPDATES : number;

    static MIN_MEMORY : number;

    public width : number;

    public height : number;

    public glName : number;

    public glTarget : number;

    public glFormat : number;

    public glMinFilter : number;

    public glMagFilter : number;

    public glWrapS : number;

    public glWrapT : number;

    public glWidth : number;

    public glHeight : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceTexture;

    pg : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    colorBuffer : any;

    usingMipmaps : any;

    usingRepeat : any;

    maxTexcoordU : any;

    maxTexcoordV : any;

    bound : any;

    invertedX : any;

    invertedY : any;

    rgbaPixels : number[];

    pixelBuffer : java.nio.IntBuffer;

    edgePixels : number[];

    edgeBuffer : java.nio.IntBuffer;

    tempFbo : FrameBuffer;

    pixBufUpdateCount : number;

    rgbaPixUpdateCount : number;

    /**
     * Modified portion of the texture
     */
    modified : boolean;

    mx1 : number;

    my1 : number;

    mx2 : number;

    my2 : number;

    bufferSource : any;

    bufferCache : Array<Texture.BufferData>;

    usedBuffers : Array<Texture.BufferData>;

    disposeBufferMethod : { owner: any, name: string, fn : Function };

    public static MAX_BUFFER_CACHE_SIZE : number;

    public constructor(pg : PGraphicsOpenGL);

    public constructor(pg : PGraphicsOpenGL, width : number, height : number);

    public constructor(pg : PGraphicsOpenGL, width : number, height : number, params : any);

    /**
     * Sets the size of the image and texture to width x height. If the texture is
     * already initialized, it first destroys the current OpenGL texture object
     * and then creates a new one with the specified size.
     * @param {number} width int
     * @param {number} height int
     */
    public init(width : number, height : number);

    /**
     * Sets the size of the image and texture to width x height, and the
     * parameters of the texture to params. If the texture is already initialized,
     * it first destroys the current OpenGL texture object and then creates a new
     * one with the specified size.
     * @param {number} width int
     * @param {number} height int
     * @param {Texture.Parameters} params GLTextureParameters
     */
    public init(width : number, height : number, params : Texture.Parameters);

    /**
     * Initializes the texture using GL parameters
     * @param {number} width
     * @param {number} height
     * @param {number} glName
     * @param {number} glTarget
     * @param {number} glFormat
     * @param {number} glWidth
     * @param {number} glHeight
     * @param {number} glMinFilter
     * @param {number} glMagFilter
     * @param {number} glWrapS
     * @param {number} glWrapT
     */
    public init(width : number, height : number, glName : number, glTarget : number, glFormat : number, glWidth : number, glHeight : number, glMinFilter : number, glMagFilter : number, glWrapS : number, glWrapT : number);

    public resize(wide : number, high : number);

    /**
     * Returns true if the texture has been initialized.
     * @return {boolean} boolean
     */
    public available() : boolean;

    public set(tex : Texture);

    public set(tex : Texture, x : number, y : number, w : number, h : number);

    public set(texTarget : number, texName : number, texWidth : number, texHeight : number, w : number, h : number);

    public set(texTarget : number, texName : number, texWidth : number, texHeight : number, target : number, tex : number, x : number, y : number, w : number, h : number);

    public set(pixels : number[]);

    public set(pixels : number[], format : number);

    public set(pixels : number[], x : number, y : number, w : number, h : number);

    public set(pixels : number[], x : number, y : number, w : number, h : number, format : number);

    public setNative(pixels : number[]);

    public setNative(pixels : number[], x : number, y : number, w : number, h : number);

    public setNative(pixBuf : java.nio.IntBuffer, x : number, y : number, w : number, h : number);

    /**
     * Copy texture to pixels. Involves video memory to main memory transfer (slow).
     * @param {Array} pixels
     */
    public get(pixels : number[]);

    public put(tex : Texture);

    public put(tex : Texture, x : number, y : number, w : number, h : number);

    public put(texTarget : number, texName : number, texWidth : number, texHeight : number, w : number, h : number);

    public put(texTarget : number, texName : number, texWidth : number, texHeight : number, target : number, tex : number, x : number, y : number, w : number, h : number);

    public currentSampling() : number;

    public bind();

    public unbind();

    public isModified() : boolean;

    public setModified();

    public setModified(m : boolean);

    public getModifiedX1() : number;

    public getModifiedX2() : number;

    public getModifiedY1() : number;

    public getModifiedY2() : number;

    public updateTexels();

    public updateTexels(x : number, y : number, w : number, h : number);

    updateTexelsImpl(x : number, y : number, w : number, h : number);

    loadPixels(len : number);

    updatePixelBuffer(pixels : number[]);

    manualMipmap();

    public setBufferSource(source : any);

    public copyBufferFromSource(natRef : any, byteBuf : java.nio.ByteBuffer, w : number, h : number);

    public disposeSourceBuffer();

    public getBufferPixels(pixels : number[]);

    public hasBufferSource() : boolean;

    public hasBuffers() : boolean;

    bufferUpdate() : boolean;

    getSourceMethods();

    /**
     * Flips intArray along the X axis.
     * @param {Array} intArray int[]
     * @param {number} mult int
     */
    flipArrayOnX(intArray : number[], mult : number);

    /**
     * Flips intArray along the Y axis.
     * @param {Array} intArray int[]
     * @param {number} mult int
     */
    flipArrayOnY(intArray : number[], mult : number);

    /**
     * Reorders a pixel array in the given format into the order required by
     * OpenGL (RGBA) and stores it into rgbaPixels. The width and height
     * parameters are used in the YUV420 to RBGBA conversion.
     * @param {Array} pixels int[]
     * @param {number} format int
     * @param {number} w int
     * @param {number} h int
     */
    convertToRGBA(pixels : number[], format : number, w : number, h : number);

    /**
     * Reorders an OpenGL pixel array (RGBA) into ARGB. The array must be
     * of size width * height.
     * @param {Array} pixels int[]
     */
    convertToARGB(pixels : number[]);

    setSize(w : number, h : number);

    /**
     * Allocates the opengl texture object.
     */
    allocate();

    /**
     * Marks the texture object for deletion.
     */
    dispose();

    contextIsOutdated() : boolean;

    copyTexture(tex : Texture, x : number, y : number, w : number, h : number, scale : boolean);

    copyTexture(texTarget : number, texName : number, texWidth : number, texHeight : number, x : number, y : number, w : number, h : number, scale : boolean);

    copyObject(src : Texture);

    releasePixelBuffer();

    releaseRGBAPixels();

    public getParameters() : Texture.Parameters;

    /**
     * Sets texture target and internal format according to the target and
     * type specified.
     * @param target int
     * @param {Texture.Parameters} params GLTextureParameters
     */
    setParameters(params : Texture.Parameters);

    fillEdges(x : number, y : number, w : number, h : number);
}

declare namespace Texture {

    /**
     * This class stores the parameters for a texture: target, internal format,
     * minimization filter and magnification filter.
     * @param {number} format
     * @param {number} sampling
     * @param {boolean} mipmaps
     * @param {number} wrap
     * @class
     */
    export class Parameters {
        /**
         * Texture target.
         */
        public target : number;

        /**
         * Texture internal format.
         */
        public format : number;

        /**
         * Texture filtering (POINT, LINEAR, BILINEAR or TRILINEAR).
         */
        public sampling : number;

        /**
         * Use mipmaps or not.
         */
        public mipmaps : boolean;

        /**
         * Wrapping mode along U.
         */
        public wrapU : number;

        /**
         * Wrapping mode along V.
         */
        public wrapV : number;

        public constructor();

        public constructor(format : number);

        public constructor(format : number, sampling : number);

        public constructor(format : number, sampling : number, mipmaps : boolean);

        public constructor(format : number, sampling : number, mipmaps : boolean, wrap : number);

        public constructor(src : Texture.Parameters);

        public set(format : number);

        public set(format : number, sampling : number);

        public set(format : number, sampling : number, mipmaps : boolean);

        public set(src : Texture.Parameters);
    }

    /**
     * This class stores a buffer copied from the buffer source.
     * @class
     */
    export class BufferData {
        public __parent: any;
        w : number;

        h : number;

        natBuf : any;

        rgbBuf : java.nio.IntBuffer;

        constructor(__parent: any, nat : any, rgb : java.nio.IntBuffer, w : number, h : number);

        dispose();
    }
}



