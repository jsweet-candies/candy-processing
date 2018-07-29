/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * ( begin auto-generated from PImage.xml )
 * 
 * Datatype for storing images. Processing can display <b>.gif</b>,
 * <b>.jpg</b>, <b>.tga</b>, and <b>.png</b> images. Images may be
 * displayed in 2D and 3D space. Before an image is used, it must be loaded
 * with the <b>loadImage()</b> function. The <b>PImage</b> class contains
 * fields for the <b>width</b> and <b>height</b> of the image, as well as
 * an array called <b>pixels[]</b> that contains the values for every pixel
 * in the image. The methods described below allow easy access to the
 * image's pixels and alpha channel and simplify the process of compositing.<br/>
 * <br/> using the <b>pixels[]</b> array, be sure to use the
 * <b>loadPixels()</b> method on the image to make sure that the pixel data
 * is properly loaded.<br/>
 * <br/> create a new image, use the <b>createImage()</b> function. Do not
 * use the syntax <b>new PImage()</b>.
 * 
 * ( end auto-generated )
 * 
 * @webref image
 * @usage Web &amp; Application
 * @instanceName pimg any object of type PImage
 * @see PApplet#loadImage(String)
 * @see PApplet#imageMode(int)
 * @see PApplet#createImage(int, int, int)
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} factor
 * @class
 */
declare class PImage implements PConstants {
    /**
     * Format for this image, one of RGB, ARGB or ALPHA.
     * note that RGB images still require 0xff in the high byte
     * because of how they'll be manipulated by other functions
     */
    public format : number;

    /**
     * ( begin auto-generated from pixels.xml )
     * 
     * Array containing the values for all the pixels in the display window.
     * These values are of the color datatype. This array is the size of the
     * display window. For example, if the image is 100x100 pixels, there will
     * be 10000 values and if the window is 200x300 pixels, there will be 60000
     * values. The <b>index</b> value defines the position of a value within
     * the array. For example, the statement <b>color b = pixels[230]</b> will
     * set the variable <b>b</b> to be equal to the value at that location in
     * the array.<br />
     * <br />
     * Before accessing this array, the data must loaded with the
     * <b>loadPixels()</b> function. After the array data has been modified,
     * the <b>updatePixels()</b> function must be run to update the changes.
     * Without <b>loadPixels()</b>, running the code may (or will in future
     * releases) result in a NullPointerException.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @usage web_application
     * @brief     Array containing the color of every pixel in the image
     */
    public pixels : number[];

    /**
     * 1 for most images, 2 for hi-dpi/retina
     */
    public pixelDensity : number;

    /**
     * Actual dimensions of pixels array, taking into account the 2x setting.
     */
    public pixelWidth : number;

    public pixelHeight : number;

    /**
     * ( begin auto-generated from PImage_width.xml )
     * 
     * The width of the image in units of pixels.
     * 
     * ( end auto-generated )
     * @webref pimage:field
     * @usage web_application
     * @brief     Image width
     */
    public width : number;

    /**
     * ( begin auto-generated from PImage_height.xml )
     * 
     * The height of the image in units of pixels.
     * 
     * ( end auto-generated )
     * @webref pimage:field
     * @usage web_application
     * @brief     Image height
     */
    public height : number;

    /**
     * Path to parent object that will be used with save().
     * This prevents users from needing savePath() to use PImage.save().
     */
    public parent : any;

    /**
     * modified portion of the image
     */
    modified : boolean;

    mx1 : number;

    my1 : number;

    mx2 : number;

    my2 : number;

    /**
     * Loaded pixels flag
     */
    public loaded : boolean;

    /*private*/ fracU : number;

    /*private*/ ifU : number;

    /*private*/ fracV : number;

    /*private*/ ifV : number;

    /*private*/ u1 : number;

    /*private*/ u2 : number;

    /*private*/ v1 : number;

    /*private*/ v2 : number;

    /*private*/ sX : number;

    /*private*/ sY : number;

    /*private*/ iw : number;

    /*private*/ iw1 : number;

    /*private*/ ih1 : number;

    /*private*/ ul : number;

    /*private*/ ll : number;

    /*private*/ ur : number;

    /*private*/ lr : number;

    /*private*/ cUL : number;

    /*private*/ cLL : number;

    /*private*/ cUR : number;

    /*private*/ cLR : number;

    /*private*/ srcXOffset : number;

    /*private*/ srcYOffset : number;

    /*private*/ r : number;

    /*private*/ g : number;

    /*private*/ b : number;

    /*private*/ a : number;

    /*private*/ srcBuffer : number[];

    static PRECISIONB : number;

    static PRECISIONF : number;

    static PREC_MAXVAL : number;

    static PREC_ALPHA_SHIFT : number;

    static PREC_RED_SHIFT : number;

    /*private*/ blurRadius : number;

    /*private*/ blurKernelSize : number;

    /*private*/ blurKernel : number[];

    /*private*/ blurMult : number[][];

    public static ALPHA_MASK : number;

    public static RED_MASK : number;

    public static GREEN_MASK : number;

    public static BLUE_MASK : number;

    public constructor();

    public constructor(width : number, height : number);

    public constructor(width : number, height : number, format : number);

    public constructor(width : number, height : number, format : number, factor : number);

    /**
     * Do not remove, see notes in the other variant.
     * @param {number} width
     * @param {number} height
     * @param {number} format
     */
    public init(width : number, height : number, format : number);

    /**
     * Function to be used by subclasses of PImage to init later than
     * at the constructor, or re-init later when things changes.
     * Used by Capture and Movie classes (and perhaps others),
     * because the width/height will not be known when super() is called.
     * (Leave this public so that other libraries can do the same.)
     * @param {number} width
     * @param {number} height
     * @param {number} format
     * @param {number} factor
     */
    public init(width : number, height : number, format : number, factor : number);

    /**
     * Check the alpha on an image, using a really primitive loop.
     */
    checkAlpha();

    public constructor(img : any);

    /**
     * Use the getNative() method instead, which allows library interfaces to be
     * written in a cross-platform fashion for desktop, Android, and others.
     * This is still included for PGraphics objects, which may need the image.
     * @return {*}
     */
    public getImage() : any;

    /**
     * Returns a native BufferedImage from this PImage.
     * @return {*}
     */
    public getNative() : any;

    public isModified() : boolean;

    public setModified();

    public setModified(m : boolean);

    public getModifiedX1() : number;

    public getModifiedX2() : number;

    public getModifiedY1() : number;

    public getModifiedY2() : number;

    /**
     * ( begin auto-generated from PImage_loadPixels.xml )
     * 
     * Loads the pixel data for the image into its <b>pixels[]</b> array. This
     * function must always be called before reading from or writing to <b>pixels[]</b>.
     * <br/><br/> renderers may or may not seem to require <b>loadPixels()</b>
     * or <b>updatePixels()</b>. However, the rule is that any time you want to
     * manipulate the <b>pixels[]</b> array, you must first call
     * <b>loadPixels()</b>, and after changes have been made, call
     * <b>updatePixels()</b>. Even if the renderer may not seem to use this
     * function in the current Processing release, this will always be subject
     * to change.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Call this when you want to mess with the pixels[] array.
     * <p/>
     * For subclasses where the pixels[] buffer isn't set by default,
     * this should copy all data into the pixels[] array
     * 
     * @webref pimage:pixels
     * @brief Loads the pixel data for the image into its pixels[] array
     * @usage web_application
     */
    public loadPixels();

    public updatePixels();

    /**
     * ( begin auto-generated from PImage_updatePixels.xml )
     * 
     * Updates the image with the data in its <b>pixels[]</b> array. Use in
     * conjunction with <b>loadPixels()</b>. If you're only reading pixels from
     * the array, there's no need to call <b>updatePixels()</b>.
     * <br/><br/> renderers may or may not seem to require <b>loadPixels()</b>
     * or <b>updatePixels()</b>. However, the rule is that any time you want to
     * manipulate the <b>pixels[]</b> array, you must first call
     * <b>loadPixels()</b>, and after changes have been made, call
     * <b>updatePixels()</b>. Even if the renderer may not seem to use this
     * function in the current Processing release, this will always be subject
     * to change.
     * <br/> <br/>
     * Currently, none of the renderers use the additional parameters to
     * <b>updatePixels()</b>, however this may be implemented in the future.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Mark the pixels in this region as needing an update.
     * This is not currently used by any of the renderers, however the api
     * is structured this way in the hope of being able to use this to
     * speed things up in the future.
     * @webref pimage:pixels
     * @brief Updates the image with the data in its pixels[] array
     * @usage web_application
     * @param {number} x x-coordinate of the upper-left corner
     * @param {number} y y-coordinate of the upper-left corner
     * @param {number} w width
     * @param {number} h height
     */
    public updatePixels(x : number, y : number, w : number, h : number);

    /**
     * Duplicate an image, returns new PImage object.
     * The pixels[] array for the new object will be unique
     * and recopied from the source image. This is implemented as an
     * override of Object.clone(). We recommend using get() instead,
     * because it prevents you from needing to catch the
     * CloneNotSupportedException, and from doing a cast from the result.
     * @return {*}
     */
    public clone() : any;

    /**
     * ( begin auto-generated from PImage_resize.xml )
     * 
     * Resize the image to a new width and height. To make the image scale
     * proportionally, use 0 as the value for the <b>wide</b> or <b>high</b>
     * parameter. For instance, to make the width of an image 150 pixels, and
     * change the height using the same proportion, use resize(150, 0).<br />
     * <br />
     * Even though a PGraphics is technically a PImage, it is not possible to
     * rescale the image data found in a PGraphics. (It's simply not possible
     * to do this consistently across renderers: technically infeasible with
     * P3D, or what would it even do with PDF?) If you want to resize PGraphics
     * content, first get a copy of its image data using the <b>get()</b>
     * method, and call <b>resize()</b> on the PImage that is returned.
     * 
     * ( end auto-generated )
     * @webref pimage:method
     * @brief Changes the size of an image to a new width and height
     * @usage web_application
     * @param {number} w the resized image width
     * @param {number} h the resized image height
     * @see PImage#get(int, int, int, int)
     */
    public resize(w : number, h : number);

    /*private*/ static shrinkImage(img : any, targetWidth : number, targetHeight : number) : any;

    public isLoaded() : boolean;

    public setLoaded();

    public setLoaded(l : boolean);

    /**
     * ( begin auto-generated from PImage_get.xml )
     * 
     * Reads the color of any pixel or grabs a section of an image. If no
     * parameters are specified, the entire image is returned. Use the <b>x</b>
     * and <b>y</b> parameters to get the value of one pixel. Get a section of
     * the display window by specifying an additional <b>width</b> and
     * <b>height</b> parameter. When getting an image, the <b>x</b> and
     * <b>y</b> parameters define the coordinates for the upper-left corner of
     * the image, regardless of the current <b>imageMode()</b>.<br />
     * <br />
     * If the pixel requested is outside of the image window, black is
     * returned. The numbers returned are scaled according to the current color
     * ranges, but only RGB values are returned by this function. For example,
     * even though you may have drawn a shape with <b>colorMode(HSB)</b>, the
     * numbers returned will be in RGB format.<br />
     * <br />
     * Getting the color of a single pixel with <b>get(x, y)</b> is easy, but
     * not as fast as grabbing the data directly from <b>pixels[]</b>. The
     * equivalent statement to <b>get(x, y)</b> using <b>pixels[]</b> is
     * <b>pixels[y*width+x]</b>. See the reference for <b>pixels[]</b> for more information.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Returns an ARGB "color" type (a packed 32 bit int with the color.
     * If the coordinate is outside the image, zero is returned
     * (black, but completely transparent).
     * <P>
     * If the image is in RGB format (i.e. on a PVideo object),
     * the value will get its high bits set, just to avoid cases where
     * they haven't been set already.
     * <P>
     * If the image is in ALPHA format, this returns a white with its
     * alpha value set.
     * <P>
     * This function is included primarily for beginners. It is quite
     * slow because it has to check to see if the x, y that was provided
     * is inside the bounds, and then has to check to see what image
     * type it is. If you want things to be more efficient, access the
     * pixels[] array directly.
     * 
     * @webref image:pixels
     * @brief Reads the color of any pixel or grabs a rectangle of pixels
     * @usage web_application
     * @param {number} x x-coordinate of the pixel
     * @param {number} y y-coordinate of the pixel
     * @see PApplet#set(int, int, int)
     * @see PApplet#pixels
     * @see PApplet#copy(PImage, int, int, int, int, int, int, int, int)
     * @return {number}
     */
    public get(x : number, y : number) : number;

    /**
     * @param {number} w width of pixel rectangle to get
     * @param {number} h height of pixel rectangle to get
     * @param {number} x
     * @param {number} y
     * @return {PImage}
     */
    public get(x : number, y : number, w : number, h : number) : PImage;

    /**
     * Returns a copy of this PImage. Equivalent to get(0, 0, width, height).
     * Deprecated, just use copy() instead.
     * @return {PImage}
     */
    public get() : PImage;

    public copy() : PImage;

    /**
     * Internal function to actually handle getting a block of pixels that
     * has already been properly cropped to a valid region. That is, x/y/w/h
     * are guaranteed to be inside the image space, so the implementation can
     * use the fastest possible pixel copying method.
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
     * ( begin auto-generated from PImage_set.xml )
     * 
     * Changes the color of any pixel or writes an image directly into the
     * display window.<br />
     * <br />
     * The <b>x</b> and <b>y</b> parameters specify the pixel to change and the
     * <b>color</b> parameter specifies the color value. The color parameter is
     * affected by the current color mode (the default is RGB values from 0 to
     * 255). When setting an image, the <b>x</b> and <b>y</b> parameters define
     * the coordinates for the upper-left corner of the image, regardless of
     * the current <b>imageMode()</b>.
     * <br /><br />
     * Setting the color of a single pixel with <b>set(x, y)</b> is easy, but
     * not as fast as putting the data directly into <b>pixels[]</b>. The
     * equivalent statement to <b>set(x, y, #000000)</b> using <b>pixels[]</b>
     * is <b>pixels[y*width+x] = #000000</b>. See the reference for
     * <b>pixels[]</b> for more information.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @brief writes a color to any pixel or writes an image into another
     * @usage web_application
     * @param {number} x x-coordinate of the pixel
     * @param {number} y y-coordinate of the pixel
     * @param {number} c any value of the color datatype
     * @see PImage#get(int, int, int, int)
     * @see PImage#pixels
     * @see PImage#copy(PImage, int, int, int, int, int, int, int, int)
     */
    public set(x : number, y : number, c : number);

    /**
     * <h3>Advanced</h3>
     * Efficient method of drawing an image's pixels directly to this surface.
     * No variations are employed, meaning that any scale, tint, or imageMode
     * settings will be ignored.
     * 
     * @param {PImage} img image to copy into the original image
     * @param {number} x
     * @param {number} y
     */
    public set(x : number, y : number, img : PImage);

    /**
     * Internal function to actually handle setting a block of pixels that
     * has already been properly cropped from the image to a valid region.
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
     * @param {Array} maskArray array of integers used as the alpha channel, needs to be
     * the same length as the image's pixel array.
     */
    public mask(maskArray : number[]);

    /**
     * ( begin auto-generated from PImage_mask.xml )
     * 
     * Masks part of an image from displaying by loading another image and
     * using it as an alpha channel. This mask image should only contain
     * grayscale data, but only the blue color channel is used. The mask image
     * needs to be the same size as the image to which it is applied.<br />
     * <br />
     * In addition to using a mask image, an integer array containing the alpha
     * channel data can be specified directly. This method is useful for
     * creating dynamically generated alpha masks. This array must be of the
     * same length as the target image's pixels array and should contain only
     * grayscale data of values between 0-255.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * 
     * Set alpha channel for an image. Black colors in the source
     * image will make the destination image completely transparent,
     * and white will make things fully opaque. Gray values will
     * be in-between steps.
     * <P>
     * Strictly speaking the "blue" value from the source image is
     * used as the alpha color. For a fully grayscale image, this
     * is correct, but for a color image it's not 100% accurate.
     * For a more accurate conversion, first use filter(GRAY)
     * which will make the image into a "correct" grayscale by
     * performing a proper luminance-based conversion.
     * 
     * @webref pimage:method
     * @usage web_application
     * @param {PImage} img image to use as the mask
     * @brief Masks part of an image with another image as an alpha channel
     */
    public mask(img : PImage);

    public filter(kind : number);

    /**
     * ( begin auto-generated from PImage_filter.xml )
     * 
     * Filters an image as defined by one of the following modes:<br /><br
     * />THRESHOLD - converts the image to black and white pixels depending if
     * they are above or below the threshold defined by the level parameter.
     * The level must be between 0.0 (black) and 1.0(white). If no level is
     * specified, 0.5 is used.<br />
     * <br />
     * GRAY - converts any colors in the image to grayscale equivalents<br />
     * <br />
     * INVERT - sets each pixel to its inverse value<br />
     * <br />
     * POSTERIZE - limits each channel of the image to the number of colors
     * specified as the level parameter<br />
     * <br />
     * BLUR - executes a Guassian blur with the level parameter specifying the
     * extent of the blurring. If no level parameter is used, the blur is
     * equivalent to Guassian blur of radius 1<br />
     * <br />
     * OPAQUE - sets the alpha channel to entirely opaque<br />
     * <br />
     * ERODE - reduces the light areas with the amount defined by the level
     * parameter<br />
     * <br />
     * DILATE - increases the light areas with the amount defined by the level parameter
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Method to apply a variety of basic filters to this image.
     * <P>
     * <UL>
     * <LI>filter(BLUR) provides a basic blur.
     * <LI>filter(GRAY) converts the image to grayscale based on luminance.
     * <LI>filter(INVERT) will invert the color components in the image.
     * <LI>filter(OPAQUE) set all the high bits in the image to opaque
     * <LI>filter(THRESHOLD) converts the image to black and white.
     * <LI>filter(DILATE) grow white/light areas
     * <LI>filter(ERODE) shrink white/light areas
     * </UL>
     * Luminance conversion code contributed by
     * <A HREF="http://www.toxi.co.uk">toxi</A>
     * <P/>
     * Gaussian blur code contributed by
     * <A HREF="http://incubator.quasimondo.com">Mario Klingemann</A>
     * 
     * @webref image:pixels
     * @brief Converts the image to grayscale or black and white
     * @usage web_application
     * @param {number} kind Either THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, or DILATE
     * @param {number} param unique for each, see above
     */
    public filter(kind : number, param : number);

    /**
     * Set the high bits of all pixels to opaque.
     */
    opaque();

    /**
     * Optimized code for building the blur kernel.
     * further optimized blur code (approx. 15% for radius=20)
     * bigger speed gains for larger radii (~30%)
     * added support for various image types (ALPHA, RGB, ARGB)
     * [toxi 050728]
     * @param {number} r
     */
    buildBlurKernel(r : number);

    blurAlpha(r : number);

    blurRGB(r : number);

    blurARGB(r : number);

    /**
     * Generic dilate/erode filter using luminance values
     * as decision factor. [toxi 050728]
     */
    dilate();

    erode();

    /**
     * ( begin auto-generated from PImage_copy.xml )
     * 
     * Copies a region of pixels from one image into another. If the source and
     * destination regions aren't the same size, it will automatically resize
     * source pixels to fit the specified target region. No alpha information
     * is used in the process, however if the source image has an alpha channel
     * set, it will be copied as well.
     * <br /><br />
     * As of release 0149, this function ignores <b>imageMode()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @brief Copies the entire image
     * @usage web_application
     * @param {number} sx X coordinate of the source's upper left corner
     * @param {number} sy Y coordinate of the source's upper left corner
     * @param {number} sw source image width
     * @param {number} sh source image height
     * @param {number} dx X coordinate of the destination's upper left corner
     * @param {number} dy Y coordinate of the destination's upper left corner
     * @param {number} dw destination image width
     * @param {number} dh destination image height
     * @see PGraphics#alpha(int)
     * @see PImage#blend(PImage, int, int, int, int, int, int, int, int, int)
     */
    public copy(sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number);

    /**
     * @param {PImage} src an image variable referring to the source image.
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
     * ( begin auto-generated from blendColor.xml )
     * 
     * Blends two color values together based on the blending mode given as the
     * <b>MODE</b> parameter. The possible modes are described in the reference
     * for the <b>blend()</b> function.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * <UL>
     * <LI>REPLACE - destination colour equals colour of source pixel: C = A.
     * Sometimes called "Normal" or "Copy" in other software.
     * 
     * <LI>BLEND - linear interpolation of colours:
     * <TT>C = A*factor + B</TT>
     * 
     * <LI>ADD - additive blending with white clip:
     * <TT>C = min(A*factor + B, 255)</TT>.
     * Clipped to 0..255, Photoshop calls this "Linear Burn",
     * and Director calls it "Add Pin".
     * 
     * <LI>SUBTRACT - substractive blend with black clip:
     * <TT>C = max(B - A*factor, 0)</TT>.
     * Clipped to 0..255, Photoshop calls this "Linear Dodge",
     * and Director calls it "Subtract Pin".
     * 
     * <LI>DARKEST - only the darkest colour succeeds:
     * <TT>C = min(A*factor, B)</TT>.
     * Illustrator calls this "Darken".
     * 
     * <LI>LIGHTEST - only the lightest colour succeeds:
     * <TT>C = max(A*factor, B)</TT>.
     * Illustrator calls this "Lighten".
     * 
     * <LI>DIFFERENCE - subtract colors from underlying image.
     * 
     * <LI>EXCLUSION - similar to DIFFERENCE, but less extreme.
     * 
     * <LI>MULTIPLY - Multiply the colors, result will always be darker.
     * 
     * <LI>SCREEN - Opposite multiply, uses inverse values of the colors.
     * 
     * <LI>OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values,
     * and screens light values.
     * 
     * <LI>HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.
     * 
     * <LI>SOFT_LIGHT - Mix of DARKEST and LIGHTEST.
     * Works like OVERLAY, but not as harsh.
     * 
     * <LI>DODGE - Lightens light tones and increases contrast, ignores darks.
     * Called "Color Dodge" in Illustrator and Photoshop.
     * 
     * <LI>BURN - Darker areas are applied, increasing contrast, ignores lights.
     * Called "Color Burn" in Illustrator and Photoshop.
     * </UL>
     * <P>A useful reference for blending modes and their algorithms can be
     * found in the <A HREF="http://www.w3.org/TR/SVG12/rendering.html">SVG</A>
     * specification.</P>
     * <P>It is important to note that Processing uses "fast" code, not
     * necessarily "correct" code. No biggie, most software does. A nitpicker
     * can find numerous "off by 1 division" problems in the blend code where
     * <TT>&gt;&gt;8</TT> or <TT>&gt;&gt;7</TT> is used when strictly speaking
     * <TT>/255.0</T> or <TT>/127.0</TT> should have been used.</P>
     * <P>For instance, exclusion (not intended for real-time use) reads
     * <TT>r1 + r2 - ((2 * r1 * r2) / 255)</TT> because <TT>255 == 1.0</TT>
     * not <TT>256 == 1.0</TT>. In other words, <TT>(255*255)>>8</TT> is not
     * the same as <TT>(255*255)/255</TT>. But for real-time use the shifts
     * are preferrable, and the difference is insignificant for applications
     * built with Processing.</P>
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} c1 the first color to blend
     * @param {number} c2 the second color to blend
     * @param {number} mode either BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, or BURN
     * @see PImage#blend(PImage, int, int, int, int, int, int, int, int, int)
     * @see PApplet#color(float, float, float, float)
     * @return {number}
     */
    public static blendColor(c1 : number, c2 : number, mode : number) : number;

    public blend(sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number, mode : number);

    /**
     * ( begin auto-generated from PImage_blend.xml )
     * 
     * Blends a region of pixels into the image specified by the <b>img</b>
     * parameter. These copies utilize full alpha channel support and a choice
     * of the following modes to blend the colors of source pixels (A) with the
     * ones of pixels in the destination image (B):<br />
     * <br />
     * BLEND - linear interpolation of colours: C = A*factor + B<br />
     * <br />
     * ADD - additive blending with white clip: C = min(A*factor + B, 255)<br />
     * <br />
     * SUBTRACT - subtractive blending with black clip: C = max(B - A*factor,
     * 0)<br />
     * <br />
     * DARKEST - only the darkest colour succeeds: C = min(A*factor, B)<br />
     * <br />
     * LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)<br />
     * <br />
     * DIFFERENCE - subtract colors from underlying image.<br />
     * <br />
     * EXCLUSION - similar to DIFFERENCE, but less extreme.<br />
     * <br />
     * MULTIPLY - Multiply the colors, result will always be darker.<br />
     * <br />
     * SCREEN - Opposite multiply, uses inverse values of the colors.<br />
     * <br />
     * OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values,
     * and screens light values.<br />
     * <br />
     * HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.<br />
     * <br />
     * SOFT_LIGHT - Mix of DARKEST and LIGHTEST.
     * Works like OVERLAY, but not as harsh.<br />
     * <br />
     * DODGE - Lightens light tones and increases contrast, ignores darks.
     * Called "Color Dodge" in Illustrator and Photoshop.<br />
     * <br />
     * BURN - Darker areas are applied, increasing contrast, ignores lights.
     * Called "Color Burn" in Illustrator and Photoshop.<br />
     * <br />
     * All modes use the alpha information (highest byte) of source image
     * pixels as the blending factor. If the source and destination regions are
     * different sizes, the image will be automatically resized to match the
     * destination size. If the <b>srcImg</b> parameter is not used, the
     * display window is used as the source image.<br />
     * <br />
     * As of release 0149, this function ignores <b>imageMode()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @brief  Copies a pixel or rectangle of pixels using different blending modes
     * @param {PImage} src an image variable referring to the source image
     * @param {number} sx X coordinate of the source's upper left corner
     * @param {number} sy Y coordinate of the source's upper left corner
     * @param {number} sw source image width
     * @param {number} sh source image height
     * @param {number} dx X coordinate of the destinations's upper left corner
     * @param {number} dy Y coordinate of the destinations's upper left corner
     * @param {number} dw destination image width
     * @param {number} dh destination image height
     * @param {number} mode Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN
     * 
     * @see PApplet#alpha(int)
     * @see PImage#copy(PImage, int, int, int, int, int, int, int, int)
     * @see PImage#blendColor(int,int,int)
     */
    public blend(src : PImage, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number, mode : number);

    /**
     * Check to see if two rectangles intersect one another
     * @param {number} sx1
     * @param {number} sy1
     * @param {number} sx2
     * @param {number} sy2
     * @param {number} dx1
     * @param {number} dy1
     * @param {number} dx2
     * @param {number} dy2
     * @return {boolean}
     * @private
     */
    /*private*/ intersect(sx1 : number, sy1 : number, sx2 : number, sy2 : number, dx1 : number, dy1 : number, dx2 : number, dy2 : number) : boolean;

    /**
     * Internal blitter/resizer/copier from toxi.
     * Uses bilinear filtering if smooth() has been enabled
     * 'mode' determines the blending mode used in the process.
     * @param {PImage} img
     * @param {number} srcX1
     * @param {number} srcY1
     * @param {number} srcX2
     * @param {number} srcY2
     * @param {Array} destPixels
     * @param {number} screenW
     * @param {number} screenH
     * @param {number} destX1
     * @param {number} destY1
     * @param {number} destX2
     * @param {number} destY2
     * @param {number} mode
     * @private
     */
    /*private*/ blit_resize(img : PImage, srcX1 : number, srcY1 : number, srcX2 : number, srcY2 : number, destPixels : number[], screenW : number, screenH : number, destX1 : number, destY1 : number, destX2 : number, destY2 : number, mode : number);

    /*private*/ filter_new_scanline();

    /*private*/ filter_bilinear() : number;

    /*private*/ static min(a : number, b : number) : number;

    /*private*/ static max(a : number, b : number) : number;

    static RB_MASK : number;

    static GN_MASK : number;

    /**
     * Blend
     * O = S
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_blend(dst : number, src : number) : number;

    /**
     * Add
     * O = MIN(D + S, 1)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_add_pin(dst : number, src : number) : number;

    /**
     * Subtract
     * O = MAX(0, D - S)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_sub_pin(dst : number, src : number) : number;

    /**
     * Lightest
     * O = MAX(D, S)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_lightest(dst : number, src : number) : number;

    /**
     * Darkest
     * O = MIN(D, S)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_darkest(dst : number, src : number) : number;

    /**
     * Difference
     * O = ABS(D - S)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_difference(dst : number, src : number) : number;

    /**
     * Exclusion
     * O = (1 - S)D + S(1 - D)
     * O = D + S - 2DS
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_exclusion(dst : number, src : number) : number;

    /*private*/ static blend_multiply(dst : number, src : number) : number;

    /**
     * Screen
     * O = 1 - (1 - D)(1 - S)
     * O = D + S - DS
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_screen(dst : number, src : number) : number;

    /**
     * Overlay
     * O = 2 * MULTIPLY(D, S) = 2DS                   for D < 0.5
     * O = 2 * SCREEN(D, S) - 1 = 2(S + D - DS) - 1   otherwise
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_overlay(dst : number, src : number) : number;

    /**
     * Hard Light
     * O = OVERLAY(S, D)
     * 
     * O = 2 * MULTIPLY(D, S) = 2DS                   for S < 0.5
     * O = 2 * SCREEN(D, S) - 1 = 2(S + D - DS) - 1   otherwise
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_hard_light(dst : number, src : number) : number;

    /**
     * Soft Light (Pegtop)
     * O = (1 - D) * MULTIPLY(D, S) + D * SCREEN(D, S)
     * O = (1 - D) * DS + D * (1 - (1 - D)(1 - S))
     * O = 2DS + DD - 2DDS
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_soft_light(dst : number, src : number) : number;

    /**
     * Dodge
     * O = D / (1 - S)
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_dodge(dst : number, src : number) : number;

    /**
     * Burn
     * O = 1 - (1 - A) / B
     * @param {number} dst
     * @param {number} src
     * @return {number}
     * @private
     */
    /*private*/ static blend_burn(dst : number, src : number) : number;

    static TIFF_HEADER : number[];

    static TIFF_ERROR : string;

    static loadTIFF(tiff : number[]) : PImage;

    saveTIFF(output : any) : boolean;

    /**
     * Creates a Targa32 formatted byte sequence of specified
     * pixel buffer using RLE compression.
     * </p>
     * Also figured out how to avoid parsing the image upside-down
     * (there's a header flag to set the image origin to top-left)
     * </p>
     * Starting with revision 0092, the format setting is taken into account:
     * <UL>
     * <LI><TT>ALPHA</TT> images written as 8bit grayscale (uses lowest byte)
     * <LI><TT>RGB</TT> &rarr; 24 bits
     * <LI><TT>ARGB</TT> &rarr; 32 bits
     * </UL>
     * All versions are RLE compressed.
     * </p>
     * Contributed by toxi 8-10 May 2005, based on this RLE
     * <A HREF="http://www.wotsit.org/download.asp?f=tga">specification</A>
     * @param {*} output
     * @return {boolean}
     */
    saveTGA(output : any) : boolean;

    /**
     * Use ImageIO functions from Java 1.4 and later to handle image save.
     * Various formats are supported, typically jpeg, png, bmp, and wbmp.
     * To get a list of the supported formats for writing, use: <BR>
     * <TT>println(javax.imageio.ImageIO.getReaderFormatNames())</TT>
     * @param {string} path
     * @return {boolean}
     */
    saveImageIO(path : string) : boolean;

    saveImageFormats : string[];

    /**
     * ( begin auto-generated from PImage_save.xml )
     * 
     * Saves the image into a file. Append a file extension to the name of
     * the file, to indicate the file format to be used: either TIFF (.tif),
     * TARGA (.tga), JPEG (.jpg), or PNG (.png). If no extension is included
     * in the filename, the image will save in TIFF format and .tif will be
     * added to the name.  These files are saved to the sketch's folder, which
     * may be opened by selecting "Show sketch folder" from the "Sketch" menu.
     * <br /><br />To save an image created within the code, rather
     * than through loading, it's necessary to make the image with the
     * <b>createImage()</b> function so it is aware of the location of the
     * program and can therefore save the file to the right place. See the
     * <b>createImage()</b> reference for more information.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Save this image to disk.
     * <p>
     * As of revision 0100, this function requires an absolute path,
     * in order to avoid confusion. To save inside the sketch folder,
     * use the function savePath() from PApplet, or use saveFrame() instead.
     * As of revision 0116, savePath() is not needed if this object has been
     * created (as recommended) via createImage() or createGraphics() or
     * one of its neighbors.
     * <p>
     * As of revision 0115, when using Java 1.4 and later, you can write
     * to several formats besides tga and tiff. If Java 1.4 is installed
     * and the extension used is supported (usually png, jpg, jpeg, bmp,
     * and tiff), then those methods will be used to write the image.
     * To get a list of the supported formats for writing, use: <BR>
     * <TT>println(javax.imageio.ImageIO.getReaderFormatNames())</TT>
     * <p>
     * To use the original built-in image writers, use .tga or .tif as the
     * extension, or don't include an extension. When no extension is used,
     * the extension .tif will be added to the file name.
     * <p>
     * The ImageIO API claims to support wbmp files, however they probably
     * require a black and white image. Basic testing produced a zero-length
     * file with no error.
     * 
     * @webref pimage:method
     * @brief Saves the image to a TIFF, TARGA, PNG, or JPEG file
     * @usage application
     * @param {string} filename a sequence of letters and numbers
     * @return {boolean}
     */
    public save(filename : string) : boolean;
}


