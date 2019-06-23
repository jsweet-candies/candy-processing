/* Generated from Java with JSweet 2.3.0 - http://www.jsweet.org */
/**
 * This interface provides access to browser's native features. It aims to
 * guarantee that webworker world can communicate with main world seamlessly
 * @class
 */
interface NativeFeatures {
    invoke(featureCreatePImageFromCanvasContext : "createPImageFromCanvasContext", width : number, height : number, canvasContext : CanvasRenderingContext2D) : PImage;

    invoke(featureFreeObjectMemory : "freeObjectMemory", object : any);

    invoke(featureCreateDomElement : "createDomElement", tagName : "video") : HTMLVideoElement;

    invoke(featureCreateDomElement : "createDomElement", tagName : "canvas") : HTMLCanvasElement;

    invoke(featureCreateDomElement : "createDomElement", tagName : string) : HTMLElement;

    invoke(featureGetDomElementById : "getDomElementById", id : string) : HTMLElement;

    invoke(featureQueryDomElementBySelector : "queryDomElementBySelector", cssSelector : string) : HTMLElement;

    invoke(featureGetUserMedia : "getUserMedia", options : any) : Promise<MediaStream>;

    resolve<TElement>(element : TElement) : Promise<TElement>;
}

declare namespace NativeFeatures {

    export interface createDomElement {    }

    export interface getDomElementById {    }

    export interface queryDomElementBySelector {    }

    export interface getUserMedia {    }

    export interface createPImageFromCanvasContext {    }

    export interface freeObjectMemory {    }
}


/**
 * Base class for all sketches that use def.processing.core.
 * <p/>
 * The <A HREF=
 * "https://github.com/processing/processing/wiki/Window-Size-and-Full-Screen">
 * Window Size and Full Screen</A> page on the Wiki has useful information about
 * sizing, multiple displays, full screen, etc.
 * <p/>
 * Processing uses active mode rendering. All animation tasks happen on the
 * "Processing Animation Thread". The setup() and draw() methods are handled by
 * that thread, and events (like mouse movement and key presses, which are fired
 * by the event dispatch thread or EDT) are queued to be safely handled at the
 * end of draw().
 * <p/>
 * Starting with 3.0a6, blit operations are on the EDT, so as not to cause GUI
 * problems with Swing and AWT. In the case of the default renderer, the sketch
 * renders to an offscreen image, then the EDT is asked to bring that image to
 * the screen.
 * <p/>
 * For code that needs to run on the EDT, use EventQueue.invokeLater(). When
 * doing so, be careful to synchronize between that code and the Processing
 * animation thread. That is, you can't call Processing methods from the EDT or
 * at any random time from another thread. Use of a callback function or the
 * registerXxx() methods in PApplet can help ensure that your code doesn't do
 * something naughty.
 * <p/>
 * As of Processing 3.0, we have removed Applet as the base class for PApplet.
 * This means that we can remove lots of legacy code, however one downside is
 * that it's no longer possible (without extra code) to embed a PApplet into
 * another Java application.
 * <p/>
 * As of Processing 3.0, we have discontinued support for versions of Java prior
 * to 1.8. We don't have enough people to support it, and for a project of our
 * (tiny) size, we should be focusing on the future, rather than working around
 * legacy Java code.
 * @class
 */
interface PApplet extends PConstants {
    /**
     * ( begin auto-generated from displayWidth.xml )
     * 
     * System variable which stores the width of the computer screen. For example,
     * if the current screen resolution is 1024x768, <b>displayWidth</b> is 1024 and
     * <b>displayHeight</b> is 768. These dimensions are useful when exporting
     * full-screen applications. <br />
     * <br />
     * To ensure that the sketch takes over the entire screen, use "Present" instead
     * of "Run". Otherwise the window will still have a frame border around it and
     * not be placed in the upper corner of the screen. On Mac OS X, the menu bar
     * will remain present unless "Present" mode is used.
     * 
     * ( end auto-generated )
     */
    displayWidth : number;

    /**
     * ( begin auto-generated from displayHeight.xml )
     * 
     * System variable that stores the height of the computer screen. For example,
     * if the current screen resolution is 1024x768, <b>displayWidth</b> is 1024 and
     * <b>displayHeight</b> is 768. These dimensions are useful when exporting
     * full-screen applications. <br />
     * <br />
     * To ensure that the sketch takes over the entire screen, use "Present" instead
     * of "Run". Otherwise the window will still have a frame border around it and
     * not be placed in the upper corner of the screen. On Mac OS X, the menu bar
     * will remain present unless "Present" mode is used.
     * 
     * ( end auto-generated )
     */
    displayHeight : number;

    /**
     * A leech graphics object that is echoing all events.
     */
    recorder : PGraphics;

    /**
     * Command line options passed in from main(). This does not include the
     * arguments passed in to PApplet itself.
     * 
     * @see PApplet#main
     */
    args : string[];

    /**
     * ( begin auto-generated from pixels.xml )
     * 
     * Array containing the values for all the pixels in the display window. These
     * values are of the color datatype. This array is the size of the display
     * window. For example, if the image is 100x100 pixels, there will be 10000
     * values and if the window is 200x300 pixels, there will be 60000 values. The
     * <b>index</b> value defines the position of a value within the array. For
     * example, the statement <b>color b = pixels[230]</b> will set the variable
     * <b>b</b> to be equal to the value at that location in the array.<br />
     * <br />
     * Before accessing this array, the data must loaded with the
     * <b>loadPixels()</b> function. After the array data has been modified, the
     * <b>updatePixels()</b> function must be run to update the changes. Without
     * <b>loadPixels()</b>, running the code may (or will in future releases) result
     * in a NullPointerException.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @see PApplet#loadPixels()
     * @see PApplet#updatePixels()
     * @see PApplet#get(int, int, int, int)
     * @see PApplet#set(int, int, int)
     * @see PImage
     */
    pixels : number[];

    /**
     * ( begin auto-generated from width.xml )
     * 
     * System variable which stores the width of the display window. This value is
     * set by the first parameter of the <b>size()</b> function. For example, the
     * function call <b>size(320, 240)</b> sets the <b>width</b> variable to the
     * value 320. The value of <b>width</b> is zero until <b>size()</b> is called.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#height
     * @see PApplet#size(int, int)
     */
    width : number;

    /**
     * ( begin auto-generated from height.xml )
     * 
     * System variable which stores the height of the display window. This value is
     * set by the second parameter of the <b>size()</b> function. For example, the
     * function call <b>size(320, 240)</b> sets the <b>height</b> variable to the
     * value 240. The value of <b>height</b> is zero until <b>size()</b> is called.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#width
     * @see PApplet#size(int, int)
     */
    height : number;

    /**
     * ( begin auto-generated from pixelWidth.xml )
     * 
     * When <b>pixelDensity(2)</d> is used to make use of a high resolution display
     * (called a Retina display on OS X or high-dpi on Windows and Linux), the width
     * and height of the sketch do not change, but the number of pixels is doubled.
     * As a result, all operations that use pixels (like <b>loadPixels()</b>,
     * <b>get()</b>, <b>set()</b>, etc.) happen in this doubled space. As a
     * convenience, the variables <b>pixelWidth</b> and <b>pixelHeight<b> hold the
     * actual width and height of the sketch in pixels. This is useful for any
     * sketch that uses the <b>pixels[]</b> array, for instance, because the number
     * of elements in the array will be <b>pixelWidth*pixelHeight</b>, not
     * <b>width*height</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelHeight
     * @see #pixelDensity(int)
     * @see #displayDensity()
     */
    pixelWidth : number;

    /**
     * ( begin auto-generated from pixelHeight.xml )
     * 
     * When <b>pixelDensity(2)</d> is used to make use of a high resolution display
     * (called a Retina display on OS X or high-dpi on Windows and Linux), the width
     * and height of the sketch do not change, but the number of pixels is doubled.
     * As a result, all operations that use pixels (like <b>loadPixels()</b>,
     * <b>get()</b>, <b>set()</b>, etc.) happen in this doubled space. As a
     * convenience, the variables <b>pixelWidth</b> and <b>pixelHeight<b> hold the
     * actual width and height of the sketch in pixels. This is useful for any
     * sketch that uses the <b>pixels[]</b> array, for instance, because the number
     * of elements in the array will be <b>pixelWidth*pixelHeight</b>, not
     * <b>width*height</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelWidth
     * @see #pixelDensity(int)
     * @see #displayDensity()
     */
    pixelHeight : number;

    /**
     * Keeps track of ENABLE_KEY_REPEAT hint
     */
    keyRepeatEnabled : boolean;

    /**
     * ( begin auto-generated from mouseX.xml )
     * 
     * The system variable <b>mouseX</b> always contains the current horizontal
     * coordinate of the mouse.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseX : number;

    /**
     * ( begin auto-generated from mouseY.xml )
     * 
     * The system variable <b>mouseY</b> always contains the current vertical
     * coordinate of the mouse.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseY : number;

    /**
     * ( begin auto-generated from pmouseX.xml )
     * 
     * The system variable <b>pmouseX</b> always contains the horizontal position of
     * the mouse in the frame previous to the current frame.<br />
     * <br />
     * You may find that <b>pmouseX</b> and <b>pmouseY</b> have different values
     * inside <b>draw()</b> and inside events like <b>mousePressed()</b> and
     * <b>mouseMoved()</b>. This is because they're used for different roles, so
     * don't mix them. Inside <b>draw()</b>, <b>pmouseX</b> and <b>pmouseY</b>
     * update only once per frame (once per trip through your <b>draw()</b>). But,
     * inside mouse events, they update each time the event is called. If they
     * weren't separated, then the mouse would be read only once per frame, making
     * response choppy. If the mouse variables were always updated multiple times
     * per frame, using <NOBR><b>line(pmouseX, pmouseY, mouseX, mouseY)</b></NOBR>
     * inside <b>draw()</b> would have lots of gaps, because <b>pmouseX</b> may have
     * changed several times in between the calls to <b>line()</b>. Use
     * <b>pmouseX</b> and <b>pmouseY</b> inside <b>draw()</b> if you want values
     * relative to the previous frame. Use <b>pmouseX</b> and <b>pmouseY</b> inside
     * the mouse functions if you want continuous response.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    pmouseX : number;

    /**
     * ( begin auto-generated from pmouseY.xml )
     * 
     * The system variable <b>pmouseY</b> always contains the vertical position of
     * the mouse in the frame previous to the current frame. More detailed
     * information about how <b>pmouseY</b> is updated inside of <b>draw()</b> and
     * mouse events is explained in the reference for <b>pmouseX</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    pmouseY : number;

    /**
     * Previous mouseX/Y for the draw loop, separated out because this is separate
     * from the pmouseX/Y when inside the mouse event handlers. See emouseX/Y for an
     * explanation.
     */
    dmouseX : number;

    /**
     * Previous mouseX/Y for the draw loop, separated out because this is separate
     * from the pmouseX/Y when inside the mouse event handlers. See emouseX/Y for an
     * explanation.
     */
    dmouseY : number;

    /**
     * The pmouseX/Y for the event handlers (mousePressed(), mouseDragged() etc)
     * these are different because mouse events are queued to the end of draw, so
     * the previous position has to be updated on each event, as opposed to the
     * pmouseX/Y that's used inside draw, which is expected to be updated once per
     * trip through draw().
     */
    emouseX : number;

    /**
     * The pmouseX/Y for the event handlers (mousePressed(), mouseDragged() etc)
     * these are different because mouse events are queued to the end of draw, so
     * the previous position has to be updated on each event, as opposed to the
     * pmouseX/Y that's used inside draw, which is expected to be updated once per
     * trip through draw().
     */
    emouseY : number;

    /**
     * Used to set pmouseX/Y to mouseX/Y the first time mouseX/Y are used, otherwise
     * pmouseX/Y are always zero, causing a nasty jump.
     * <p>
     * Just using (frameCount == 0) won't work since mouseXxxxx() may not be called
     * until a couple frames into things.
     * <p>
     * 
     * @deprecated Please refrain from using this variable, it will be removed from
     * future releases of Processing because it cannot be used
     * consistently across platforms and input methods.
     */
    firstMouse : boolean;

    /**
     * ( begin auto-generated from mouseButton.xml )
     * 
     * Processing automatically tracks if the mouse button is pressed and which
     * button is pressed. The value of the system variable <b>mouseButton</b> is
     * either <b>LEFT</b>, <b>RIGHT</b>, or <b>CENTER</b> depending on which button
     * is pressed.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced:</h3>
     * 
     * If running on Mac OS, a ctrl-click will be interpreted as the right-hand
     * mouse button (unlike Java, which reports it as the left mouse).
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseButton : number;

    /**
     * ( begin auto-generated from key.xml )
     * 
     * The system variable <b>key</b> always contains the value of the most recent
     * key on the keyboard that was used (either pressed or released). <br/>
     * <br/>
     * For non-ASCII keys, use the <b>keyCode</b> variable. The keys included in the
     * ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and DELETE) do not
     * require checking to see if they key is coded, and you should simply use the
     * <b>key</b> variable instead of <b>keyCode</b> If you're making cross-platform
     * projects, note that the ENTER key is commonly used on PCs and Unix and the
     * RETURN key is used instead on Macintosh. Check for both ENTER and RETURN to
     * make sure your program will work for all platforms.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * 
     * Last key pressed.
     * <p>
     * If it's a coded key, i.e. UP/DOWN/CTRL/SHIFT/ALT, this will be set to CODED
     * (0xffff or 65535).
     * 
     * @webref input:keyboard
     * @see PApplet#keyCode
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     * @see PApplet#keyReleased()
     */
    key : string;

    /**
     * ( begin auto-generated from keyCode.xml )
     * 
     * The variable <b>keyCode</b> is used to detect special keys such as the UP,
     * DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT. When checking for these
     * keys, it's first necessary to check and see if the key is coded. This is done
     * with the conditional "if (key == CODED)" as shown in the example. <br/>
     * <br/>
     * The keys included in the ASCII specification (BACKSPACE, TAB, ENTER, RETURN,
     * ESC, and DELETE) do not require checking to see if they key is coded, and you
     * should simply use the <b>key</b> variable instead of <b>keyCode</b> If you're
     * making cross-platform projects, note that the ENTER key is commonly used on
     * PCs and Unix and the RETURN key is used instead on Macintosh. Check for both
     * ENTER and RETURN to make sure your program will work for all platforms. <br/>
     * <br/>
     * For users familiar with Java, the values for UP and DOWN are simply shorter
     * versions of Java's KeyEvent.VK_UP and KeyEvent.VK_DOWN. Other keyCode values
     * can be found in the Java <a href=
     * "http://download.oracle.com/javase/6/docs/api/java/awt/event/KeyEvent.html">KeyEvent</a>
     * reference.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> When "key" is set to CODED, this will contain a Java key
     * code.
     * <p>
     * For the arrow keys, keyCode will be one of UP, DOWN, LEFT and RIGHT. Also
     * available are ALT, CONTROL and SHIFT. A full set of constants can be obtained
     * from java.awt.event.KeyEvent, from the VK_XXXX variables.
     * 
     * @webref input:keyboard
     * @see PApplet#key
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     * @see PApplet#keyReleased()
     */
    keyCode : number;

    pressedKeys : Array<number>;

    /**
     * ( begin auto-generated from focused.xml )
     * 
     * Confirms if a Processing program is "focused", meaning that it is active and
     * will accept input from mouse or keyboard. This variable is "true" if it is
     * focused and "false" if not. This variable is often used when you want to warn
     * people they need to click on or roll over an applet before it will work.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     */
    focused : boolean;

    /**
     * Time in milliseconds when the applet was started.
     * <p>
     * Used by the millis() function.
     */
    millisOffset : number;

    /**
     * ( begin auto-generated from frameRate_var.xml )
     * 
     * The system variable <b>frameRate</b> contains the approximate frame rate of
     * the software as it executes. The initial value is 10 fps and is updated with
     * each frame. The value is averaged (integrated) over several frames. As such,
     * this value won't be valid until after 5-10 frames.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#frameRate(float)
     * @see PApplet#frameCount
     */
    frameRate : any;

    looping : boolean;

    /**
     * flag set to true when a redraw is asked for by the user
     */
    redraw : any;

    /**
     * ( begin auto-generated from frameCount.xml )
     * 
     * The system variable <b>frameCount</b> contains the number of frames displayed
     * since the program started. Inside <b>setup()</b> the value is 0 and and after
     * the first iteration of draw it is 1, etc.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#frameRate(float)
     * @see PApplet#frameRate
     */
    frameCount : number;

    /**
     * true if the sketch has stopped permanently.
     */
    finished : boolean;

    /**
     * true if exit() has been called so that things shut down once the main thread
     * kicks off.
     */
    exitCalled : any;

    /**
     * true if this sketch is being run by the PDE
     */
    external : boolean;

    surface : PSurface;

    getSurface() : PSurface;

    insideSettings : any;

    renderer : string;

    smooth : any;

    fullScreen : any;

    display : number;

    displayDevices : any;

    pixelDensity : any;

    suggestedDensity : number;

    present : boolean;

    outputPath : string;

    outputStream : any;

    windowColor : number;

    handleSettings();

    /**
     * ( begin auto-generated from settings.xml )
     * 
     * Description to come...
     * 
     * ( end auto-generated )
     * 
     * Override this method to call size() when not using the PDE.
     * 
     * @webref environment
     * @see PApplet#fullScreen()
     * @see PApplet#setup()
     * @see PApplet#size(int,int)
     * @see PApplet#smooth()
     */
    settings();

    sketchWidth() : number;

    sketchHeight() : number;

    sketchRenderer() : string;

    sketchSmooth() : number;

    sketchFullScreen() : boolean;

    sketchDisplay() : number;

    sketchOutputPath() : string;

    sketchOutputStream() : any;

    sketchWindowColor() : number;

    sketchPixelDensity() : number;

    /**
     * ( begin auto-generated from displayDensity.xml )
     * 
     * This function returns the number "2" if the screen is a high-density screen
     * (called a Retina display on OS X or high-dpi on Windows and Linux) and a "1"
     * if not. This information is useful for a program to adapt to run at double
     * the pixel density on a screen that supports it.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelDensity(int)
     * @see PApplet#size(int,int)
     * @return {number}
     */
    displayDensity() : number;

    /**
     * @param {number} display the display number to check
     * @return {number}
     */
    displayDensity(display : number) : number;

    /**
     * Called by PSurface objects to set the width and height variables, and update
     * the pixelWidth and pixelHeight variables.
     * @param {number} width
     * @param {number} height
     */
    setSize(width : number, height : number);

    /**
     * @webref environment
     */
    noSmooth();

    smoothWarning(method : string);

    orientation(which : number);

    /**
     * Called by the browser or applet viewer to inform this applet that it should
     * start its execution. It is called after the init method and each time the
     * applet is revisited in a Web page.
     * <p/>
     * Called explicitly via the first call to PApplet.paint(), because PAppletGL
     * needs to have a usable screen before getting things rolling.
     */
    start();

    /**
     * Called by the browser or applet viewer to inform this applet that it should
     * stop its execution.
     * <p/>
     * Unfortunately, there are no guarantees from the Java spec when or if stop()
     * will be called (i.e. on browser quit, or when moving between web pages), and
     * it's not always called.
     */
    stop();

    /**
     * Sketch has been paused. Called when switching tabs in a browser or swapping
     * to a different application on Android. Also called just before quitting. Use
     * to safely disable things like serial, sound, or sensors.
     */
    pause();

    /**
     * Sketch has resumed. Called when switching tabs in a browser or swapping to
     * this application on Android. Also called on startup. Use this to safely
     * disable things like serial, sound, or sensors.
     */
    resume();

    /**
     * Map of registered methods, stored by name.
     */
    registerMap : any;

    /**
     * Lock when un/registering from multiple threads
     */
    registerLock : any;

    /**
     * Register a built-in event so that it can be fired for libraries, etc.
     * Supported events include:
     * <ul>
     * <li>pre – at the very top of the draw() method (safe to draw)
     * <li>draw – at the end of the draw() method (safe to draw)
     * <li>post – after draw() has exited (not safe to draw)
     * <li>pause – called when the sketch is paused
     * <li>resume – called when the sketch is resumed
     * <li>dispose – when the sketch is shutting down (definitely not safe to draw)
     * <ul>
     * In addition, the new (for 2.0) processing.event classes are passed to the
     * following event types:
     * <ul>
     * <li>mouseEvent
     * <li>keyEvent
     * <li>touchEvent
     * </ul>
     * The older java.awt events are no longer supported. See the Library Wiki page
     * for more details.
     * 
     * @param {string} methodName name of the method to be called
     * @param {*} target     the target object that should receive the event
     */
    registerMethod(methodName : string, target : any);

    unregisterMethod(name : string, target : any);

    handleMethods(methodName : string);

    handleMethods(methodName : string, args : any[]);

    /**
     * ( begin auto-generated from setup.xml )
     * 
     * The <b>setup()</b> function is called once when the program starts. It's used
     * to define initial enviroment properties such as screen size and background
     * color and to load media such as images and fonts as the program starts. There
     * can only be one <b>setup()</b> function for each program and it shouldn't be
     * called again after its initial execution. Note: Variables declared within
     * <b>setup()</b> are not accessible within other functions, including
     * <b>draw()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @usage web_application
     * @see PApplet#size(int, int)
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     * @see PApplet#draw()
     */
    setup();

    /**
     * ( begin auto-generated from draw.xml )
     * 
     * Called directly after <b>setup()</b> and continuously executes the lines of
     * code contained inside its block until the program is stopped or
     * <b>noLoop()</b> is called. The <b>draw()</b> function is called automatically
     * and should never be called explicitly. It should always be controlled with
     * <b>noLoop()</b>, <b>redraw()</b> and <b>loop()</b>. After <b>noLoop()</b>
     * stops the code in <b>draw()</b> from executing, <b>redraw()</b> causes the
     * code inside <b>draw()</b> to execute once and <b>loop()</b> will causes the
     * code inside <b>draw()</b> to execute continuously again. The number of times
     * <b>draw()</b> executes in each second may be controlled with
     * <b>frameRate()</b> function. There can only be one <b>draw()</b> function for
     * each sketch and <b>draw()</b> must exist if you want the code to run
     * continuously or to process events such as <b>mousePressed()</b>. Sometimes,
     * you might have an empty call to <b>draw()</b> in your program as shown in the
     * above example.
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @usage web_application
     * @see PApplet#setup()
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     * @see PApplet#redraw()
     * @see PApplet#frameRate(float)
     * @see PGraphics#background(float, float, float, float)
     */
    draw();

    /**
     * ( begin auto-generated from size.xml )
     * 
     * Defines the dimension of the display window in units of pixels. The
     * <b>size()</b> function must be the first line in <b>setup()</b>. If
     * <b>size()</b> is not used, the default size of the window is 100x100 pixels.
     * The system variables <b>width</b> and <b>height</b> are set by the parameters
     * passed to this function.<br />
     * <br />
     * Do not use variables as the parameters to <b>size()</b> function, because it
     * will cause problems when exporting your sketch. When variables are used, the
     * dimensions of your sketch cannot be determined during export. Instead, employ
     * numeric values in the <b>size()</b> statement, and then use the built-in
     * <b>width</b> and <b>height</b> variables inside your program when the
     * dimensions of the display window are needed.<br />
     * <br />
     * The <b>size()</b> function can only be used once inside a sketch, and cannot
     * be used for resizing.<br/>
     * <br/>
     * <b>renderer</b> parameter selects which rendering engine to use. For example,
     * if you will be drawing 3D shapes, use <b>P3D</b>, if you want to export
     * images from a program as a PDF file use <b>PDF</b>. A brief description of
     * the three primary renderers follows:<br />
     * <br />
     * <b>P2D</b> (Processing 2D) - The default renderer that supports two
     * dimensional drawing.<br />
     * <br />
     * <b>P3D</b> (Processing 3D) - 3D graphics renderer that makes use of
     * OpenGL-compatible graphics hardware.<br />
     * <br />
     * <b>PDF</b> - The PDF renderer draws 2D graphics directly to an Acrobat PDF
     * file. This produces excellent results when you need vector shapes for high
     * resolution output or printing. You must first use Import Library &rarr; PDF
     * to make use of the library. More information can be found in the PDF library
     * reference.<br />
     * <br />
     * The P3D renderer doesn't support <b>strokeCap()</b> or <b>strokeJoin()</b>,
     * which can lead to ugly results when using <b>strokeWeight()</b>.
     * (<a href="http://code.google.com/p/processing/issues/detail?id=123">Issue
     * 123</a>) <br />
     * <br />
     * The maximum width and height is limited by your operating system, and is
     * usually the width and height of your actual screen. On some machines it may
     * simply be the number of pixels on your current screen, meaning that a screen
     * of 800x600 could support <b>size(1600, 300)</b>, since it's the same number
     * of pixels. This varies widely so you'll have to try different rendering modes
     * and sizes until you get what you're looking for. If you need something
     * larger, use <b>createGraphics</b> to create a non-visible drawing
     * surface.<br />
     * <br />
     * Again, the <b>size()</b> function must be the first line of the code (or
     * first item inside setup). Any code that appears before the <b>size()</b>
     * command may run more than once, which can lead to confusing results.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> If using Java 1.3 or later, this will default to using
     * PGraphics2, the Java2D-based renderer. If using Java 1.1, or if PGraphics2 is
     * not available, then PGraphics will be used. To set your own renderer, use the
     * other version of the size() method that takes a renderer as its last
     * parameter.
     * <p>
     * If called once a renderer has already been set, this will use the previous
     * renderer and simply resize it.
     * 
     * @webref environment
     * @param {number} width  width of the display window in units of pixels
     * @param {number} height height of the display window in units of pixels
     * @see PApplet#width
     * @see PApplet#height
     */
    size(width : number, height : number);

    size(width : number, height : number, renderer : string);

    /**
     * @nowebref
     * @param {number} width
     * @param {number} height
     * @param {string} renderer
     * @param {string} path
     */
    size(width : number, height : number, renderer : string, path : string);

    createGraphics(w : number, h : number) : PGraphics;

    /**
     * ( begin auto-generated from createGraphics.xml )
     * 
     * Creates and returns a new <b>PGraphics</b> object of the types P2D or P3D.
     * Use this class if you need to draw into an off-screen graphics buffer. The
     * PDF renderer requires the filename parameter. The DXF renderer should not be
     * used with <b>createGraphics()</b>, it's only built for use with
     * <b>beginRaw()</b> and <b>endRaw()</b>.<br />
     * <br />
     * It's important to call any drawing functions between <b>beginDraw()</b> and
     * <b>endDraw()</b> statements. This is also true for any functions that affect
     * drawing, such as <b>smooth()</b> or <b>colorMode()</b>.<br/>
     * <br/>
     * the main drawing surface which is completely opaque, surfaces created with
     * <b>createGraphics()</b> can have transparency. This makes it possible to draw
     * into a graphics and maintain the alpha channel. By using <b>save()</b> to
     * write a PNG or TGA file, the transparency of the graphics object will be
     * honored. Note that transparency levels are binary: pixels are either complete
     * opaque or transparent. For the time being, this means that text characters
     * will be opaque blocks. This will be fixed in a future release
     * (<a href="http://code.google.com/p/processing/issues/detail?id=80">Issue
     * 80</a>).
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Create an offscreen PGraphics object for drawing. This can
     * be used for bitmap or vector images drawing or rendering.
     * <UL>
     * <LI>Do not use "new PGraphicsXxxx()", use this method. This method ensures
     * that internal variables are set up properly that tie the new graphics context
     * back to its parent PApplet.
     * <LI>The basic way to create bitmap images is to use the
     * <A HREF="http://processing.org/reference/saveFrame_.html">saveFrame()</A>
     * function.
     * <LI>If you want to create a really large scene and write that, first make
     * sure that you've allocated a lot of memory in the Preferences.
     * <LI>If you want to create images that are larger than the screen, you should
     * create your own PGraphics object, draw to that, and use
     * <A HREF="http://processing.org/reference/save_.html">save()</A>.
     * 
     * <PRE>
     * 
     * PGraphics big;
     * 
     * void setup() {
     * big = createGraphics(3000, 3000);
     * 
     * big.beginDraw();
     * big.background(128);
     * big.line(20, 1800, 1800, 900);
     * // etc..
     * big.endDraw();
     * 
     * // make sure the file is written to the sketch folder
     * big.save("big.tif");
     * }
     * 
     * </PRE>
     * 
     * <LI>It's important to always wrap drawing to createGraphics() with
     * beginDraw() and endDraw() (beginFrame() and endFrame() prior to revision
     * 0115). The reason is that the renderer needs to know when drawing has
     * stopped, so that it can update itself internally. This also handles calling
     * the defaults() method, for people familiar with that.
     * <LI>With Processing 0115 and later, it's possible to write images in formats
     * other than the default .tga and .tiff. The exact formats and background
     * information can be found in the developer's reference for <A HREF=
     * "http://dev.processing.org/reference/core/javadoc/processing/core/PImage.html#save(java.lang.String)">PImage.save()</A>.
     * </UL>
     * 
     * @webref rendering
     * @param {number} w        width in pixels
     * @param {number} h        height in pixels
     * @param {string} renderer Either P2D, P3D, or PDF
     * @see PGraphics#PGraphics
     * @return {PGraphics}
     */
    createGraphics(w : number, h : number, renderer : string) : PGraphics;

    /**
     * ( begin auto-generated from createImage.xml )
     * 
     * Creates a new PImage (the datatype for storing images). This provides a fresh
     * buffer of pixels to play with. Set the size of the buffer with the
     * <b>width</b> and <b>height</b> parameters. The <b>format</b> parameter
     * defines how the pixels are stored. See the PImage reference for more
     * information. <br/>
     * <br/>
     * Be sure to include all three parameters, specifying only the width and height
     * (but no format) will produce a strange error. <br/>
     * <br/>
     * Advanced users please note that createImage() should be used instead of the
     * syntax <tt>new PImage()</tt>.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Preferred method of creating new PImage objects, ensures
     * that a reference to the parent PApplet is included, which makes save() work
     * without needing an absolute path.
     * 
     * @webref image
     * @param {number} w      width in pixels
     * @param {number} h      height in pixels
     * @param {number} format Either RGB, ARGB, ALPHA (grayscale alpha channel)
     * @see PImage
     * @see PGraphics
     * @return {PImage}
     */
    createImage(w : number, h : number, format : number) : PImage;

    insideDraw : boolean;

    /**
     * Last time in nanoseconds that frameRate was checked
     */
    frameRateLastNanos : number;

    handleDraw();

    /**
     * ( begin auto-generated from loop.xml )
     * 
     * Causes Processing to continuously execute the code within <b>draw()</b>. If
     * <b>noLoop()</b> is called, the code in <b>draw()</b> stops executing.
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @usage web_application
     * @see PApplet#noLoop()
     * @see PApplet#redraw()
     * @see PApplet#draw()
     */
    loop();

    /**
     * ( begin auto-generated from noLoop.xml )
     * 
     * Stops Processing from continuously executing the code within <b>draw()</b>.
     * If <b>loop()</b> is called, the code in <b>draw()</b> begin to run
     * continuously again. If using <b>noLoop()</b> in <b>setup()</b>, it should be
     * the last line inside the block. <br/>
     * <br/>
     * When <b>noLoop()</b> is used, it's not possible to manipulate or access the
     * screen inside event handling functions such as <b>mousePressed()</b> or
     * <b>keyPressed()</b>. Instead, use those functions to call <b>redraw()</b> or
     * <b>loop()</b>, which will run <b>draw()</b>, which can update the screen
     * properly. This means that when noLoop() has been called, no drawing can
     * happen, and functions like saveFrame() or loadPixels() may not be used. <br/>
     * <br/>
     * Note that if the sketch is resized, <b>redraw()</b> will be called to update
     * the sketch, even after <b>noLoop()</b> has been specified. Otherwise, the
     * sketch would enter an odd state until <b>loop()</b> was called.
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @usage web_application
     * @see PApplet#loop()
     * @see PApplet#redraw()
     * @see PApplet#draw()
     */
    noLoop();

    isLooping() : boolean;

    /**
     * Add an event to the internal event queue, or process it immediately if the
     * sketch is not currently looping.
     * @param {*} pe
     */
    postEvent(pe : any);

    /**
     * ( begin auto-generated from mouseReleased.xml )
     * 
     * The <b>mouseReleased()</b> function is called every time a mouse button is
     * released.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseReleased();

    /**
     * ( begin auto-generated from mouseClicked.xml )
     * 
     * The <b>mouseClicked()</b> function is called once after a mouse button has
     * been pressed and then released.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> When the mouse is clicked, mousePressed() will be called,
     * then mouseReleased(), then mouseClicked(). Note that mousePressed is already
     * false inside of mouseClicked().
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseClicked();

    /**
     * ( begin auto-generated from mouseDragged.xml )
     * 
     * The <b>mouseDragged()</b> function is called once every time the mouse moves
     * and a mouse button is pressed.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseDragged();

    /**
     * ( begin auto-generated from mouseMoved.xml )
     * 
     * The <b>mouseMoved()</b> function is called every time the mouse moves and a
     * mouse button is not pressed.
     * 
     * ( end auto-generated )
     * 
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    mouseMoved();

    mouseEntered();

    mouseExited();

    /**
     * @nowebref
     */
    mouseWheel();

    mousePressed : boolean;

    keyPressed : boolean;

    /**
     * ( begin auto-generated from keyReleased.xml )
     * 
     * The <b>keyReleased()</b> function is called once every time a key is
     * released. The key that was released will be stored in the <b>key</b>
     * variable. See <b>key</b> and <b>keyReleased</b> for more information.
     * 
     * ( end auto-generated )
     * 
     * @webref input:keyboard
     * @see PApplet#key
     * @see PApplet#keyCode
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     */
    keyReleased();

    /**
     * ( begin auto-generated from keyTyped.xml )
     * 
     * The <b>keyTyped()</b> function is called once every time a key is pressed,
     * but action keys such as Ctrl, Shift, and Alt are ignored. Because of how
     * operating systems handle key repeats, holding down a key will cause multiple
     * calls to <b>keyTyped()</b>, the rate is set by the operating system and how
     * each computer is configured.
     * 
     * ( end auto-generated )
     * 
     * @webref input:keyboard
     * @see PApplet#keyPressed
     * @see PApplet#key
     * @see PApplet#keyCode
     * @see PApplet#keyReleased()
     */
    keyTyped();

    focusGained();

    focusLost();

    /**
     * ( begin auto-generated from millis.xml )
     * 
     * Returns the number of milliseconds (thousandths of a second) since starting
     * an applet. This information is often used for timing animation sequences.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * <p>
     * This is a function, rather than a variable, because it may change multiple
     * times per frame.
     * 
     * @webref input:time_date
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    millis() : number;

    /**
     * ( begin auto-generated from delay.xml )
     * 
     * The delay() function causes the program to halt for a specified time. Delay
     * times are specified in thousandths of a second. For example, running
     * delay(3000) will stop the program for three seconds and delay(500) will stop
     * the program for a half-second.
     * 
     * The screen only updates when the end of draw() is reached, so delay() cannot
     * be used to slow down drawing. For instance, you cannot use delay() to control
     * the timing of an animation.
     * 
     * The delay() function should only be used for pausing scripts (i.e. a script
     * that needs to pause a few seconds before attempting a download, or a sketch
     * that needs to wait a few milliseconds before reading from the serial port).
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @param {number} napTime milliseconds to pause before running draw() again
     * @see PApplet#frameRate
     * @see PApplet#draw()
     */
    delay(napTime : number);

    /**
     * Links to a webpage either in the same window or in a new window. The complete
     * URL must be specified.
     * 
     * <h3>Advanced</h3> Link to an external page without all the muss.
     * <p>
     * When run with an applet, uses the browser to open the url, for applications,
     * attempts to launch a browser with the url.
     * 
     * @param {string} url the complete URL, as a String in quotes
     */
    link(url : string);

    /**
     * Better way of handling e.printStackTrace() calls so that they can be handled
     * by subclasses as necessary.
     * @param {Error} t
     */
    printStackTrace(t : Error);

    /**
     * ( begin auto-generated from exit.xml )
     * 
     * Quits/stops/exits the program. Programs without a <b>draw()</b> function exit
     * automatically after the last line has run, but programs with <b>draw()</b>
     * run continuously until the program is manually stopped or <b>exit()</b> is
     * run.<br />
     * <br />
     * Rather than terminating immediately, <b>exit()</b> will cause the sketch to
     * exit after <b>draw()</b> has completed (or after <b>setup()</b> completes if
     * called during the <b>setup()</b> function).<br />
     * <br />
     * For Java programmers, this is <em>not</em> the same as System.exit().
     * Further, System.exit() should not be used because closing out an application
     * while <b>draw()</b> is running may cause a crash (particularly with P3D).
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     */
    exit();

    onExitListeners : Array<(p1: any) => Promise<void>>;

    /**
     * Some subclasses (I'm looking at you, processing.py) might wish to do
     * something other than actually terminate the JVM. This gives them a chance to
     * do whatever they have in mind when cleaning up.
     */
    exitActual();

    /**
     * Call a method in the current class based on its name.
     * <p/>
     * Note that the function being called must be public. Inside the PDE, 'public'
     * is automatically added, but when used without the preprocessor, (like from
     * Eclipse) you'll have to do it yourself.
     * @param {string} name
     */
    method(name : string);

    /**
     * Launch a new thread and call the specified function from that new thread.
     * This is a very simple way to do a thread without needing to get into classes,
     * runnables, etc.
     * <p/>
     * Note that the function being called must be public. Inside the PDE, 'public'
     * is automatically added, but when used without the preprocessor, (like from
     * Eclipse) you'll have to do it yourself.
     * 
     * @webref structure
     * @usage Application
     * @param {string} name name of the function to be executed in a separate thread
     * @see PApplet#setup()
     * @see PApplet#draw()
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     */
    thread(name : string);

    /**
     * ( begin auto-generated from save.xml )
     * 
     * Saves an image from the display window. Images are saved in TIFF, TARGA,
     * JPEG, and PNG format depending on the extension within the <b>filename</b>
     * parameter. For example, "image.tif" will have a TIFF image and "image.png"
     * will save a PNG image. If no extension is included in the filename, the image
     * will save in TIFF format and <b>.tif</b> will be added to the name. These
     * files are saved to the sketch's folder, which may be opened by selecting
     * "Show sketch folder" from the "Sketch" menu. It is not possible to use
     * <b>save()</b> while running the program in a web browser. <br/>
     * images saved from the main drawing window will be opaque. To save images
     * without a background, use <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref output:image
     * @param {string} filename any sequence of letters and numbers
     * @see PApplet#saveFrame()
     * @see PApplet#createGraphics(int, int, String)
     */
    save(filename : string);

    /**
     * 
     */
    saveFrame();

    /**
     * ( begin auto-generated from saveFrame.xml )
     * 
     * Saves a numbered sequence of images, one image each time the function is run.
     * To save an image that is identical to the display window, run the function at
     * the end of <b>draw()</b> or within mouse and key events such as
     * <b>mousePressed()</b> and <b>keyPressed()</b>. If <b>saveFrame()</b> is
     * called without parameters, it will save the files as screen-0000.tif,
     * screen-0001.tif, etc. It is possible to specify the name of the sequence with
     * the <b>filename</b> parameter and make the choice of saving TIFF, TARGA, PNG,
     * or JPEG files with the <b>ext</b> parameter. These image sequences can be
     * loaded into programs such as Apple's QuickTime software and made into movies.
     * These files are saved to the sketch's folder, which may be opened by
     * selecting "Show sketch folder" from the "Sketch" menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser unless
     * the sketch is <a href="http://wiki.processing.org/w/Sign_an_Applet">signed
     * applet</A>. To save a file back to a server, see the
     * <a href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.<br/>
     * <br/ > All images saved from the main drawing window will be opaque. To save
     * images without a background, use <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref output:image
     * @see PApplet#save(String)
     * @see PApplet#createGraphics(int, int, String, String)
     * @see PApplet#frameCount
     * @param {string} filename any sequence of letters or numbers that ends with either
     * ".tif", ".tga", ".jpg", or ".png"
     */
    saveFrame(filename : string);

    /**
     * Check a string for #### signs to see if the frame number should be inserted.
     * Used for functions like saveFrame() and beginRecord() to replace the # marks
     * with the frame number. If only one # is used, it will be ignored, under the
     * assumption that it's probably not intended to be the frame number.
     * @param {string} what
     * @return {string}
     */
    insertFrame(what : string) : string;

    /**
     * Set the cursor type
     * 
     * @param {number} kind either ARROW, CROSS, HAND, MOVE, TEXT, or WAIT
     */
    cursor(kind : number);

    /**
     * Replace the cursor with the specified PImage. The x- and y- coordinate of the
     * center will be the center of the image.
     * @param {PImage} img
     */
    cursor(img : PImage);

    /**
     * ( begin auto-generated from cursor.xml )
     * 
     * Sets the cursor to a predefined symbol, an image, or makes it visible if
     * already hidden. If you are trying to set an image as the cursor, it is
     * recommended to make the size 16x16 or 32x32 pixels. It is not possible to
     * load an image as the cursor if you are exporting your program for the Web and
     * not all MODES work with all Web browsers. The values for parameters <b>x</b>
     * and <b>y</b> must be less than the dimensions of the image. <br />
     * <br />
     * Setting or hiding the cursor generally does not work with "Present" mode
     * (when running full-screen).
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Set a custom cursor to an image with a specific hotspot.
     * Only works with JDK 1.2 and later. Currently seems to be broken on Java 1.4
     * for Mac OS X
     * <p>
     * Based on code contributed by Amit Pitaru, plus additional code to handle Java
     * versions via reflection by Jonathan Feinberg. Reflection removed for release
     * 0128 and later.
     * 
     * @webref environment
     * @see PApplet#noCursor()
     * @param {PImage} img any variable of type PImage
     * @param {number} x   the horizontal active spot of the cursor
     * @param {number} y   the vertical active spot of the cursor
     */
    cursor(img : PImage, x : number, y : number);

    /**
     * Show the cursor after noCursor() was called. Notice that the program
     * remembers the last set cursor type
     */
    cursor();

    /**
     * ( begin auto-generated from noCursor.xml )
     * 
     * Hides the cursor from view. Will not work when running the program in a web
     * browser or when running in full screen (Present) mode.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Hide the cursor by creating a transparent image and using
     * it as a custom cursor.
     * 
     * @webref environment
     * @see PApplet#cursor()
     * @usage Application
     */
    noCursor();

    /**
     * @param {number} high
     * @return {number}
     */
    random(high : number) : number;

    /**
     * ( begin auto-generated from randomGaussian.xml )
     * 
     * Returns a float from a random series of numbers having a mean of 0 and
     * standard deviation of 1. Each time the <b>randomGaussian()</b> function is
     * called, it returns a number fitting a Gaussian, or normal, distribution.
     * There is theoretically no minimum or maximum value that
     * <b>randomGaussian()</b> might return. Rather, there is just a very low
     * probability that values far from the mean will be returned; and a higher
     * probability that numbers near the mean will be returned.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @see PApplet#random(float,float)
     * @see PApplet#noise(float, float, float)
     * @return {number}
     */
    randomGaussian() : number;

    /**
     * ( begin auto-generated from random.xml )
     * 
     * Generates random numbers. Each time the <b>random()</b> function is called,
     * it returns an unexpected value within the specified range. If one parameter
     * is passed to the function it will return a <b>float</b> between zero and the
     * value of the <b>high</b> parameter. The function call <b>random(5)</b>
     * returns values between 0 and 5 (starting at zero, up to but not including 5).
     * If two parameters are passed, it will return a <b>float</b> with a value
     * between the the parameters. The function call <b>random(-5, 10.2)</b> returns
     * values starting at -5 up to (but not including) 10.2. To convert a
     * floating-point random number to an integer, use the <b>int()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @param {number} low  lower limit
     * @param {number} high upper limit
     * @see PApplet#randomSeed(long)
     * @see PApplet#noise(float, float, float)
     * @return {number}
     */
    random(low : number, high : number) : number;

    /**
     * ( begin auto-generated from randomSeed.xml )
     * 
     * Sets the seed value for <b>random()</b>. By default, <b>random()</b> produces
     * different results each time the program is run. Set the <b>value</b>
     * parameter to a constant to return the same pseudo-random numbers each time
     * the software is run.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @param {number} seed seed value
     * @see PApplet#random(float,float)
     * @see PApplet#noise(float, float, float)
     * @see PApplet#noiseSeed(long)
     */
    randomSeed(seed : number);

    perlin_octaves : number;

    perlin_amp_falloff : number;

    perlin_TWOPI : number;

    perlin_PI : number;

    perlin_cosTable : number[];

    perlin : number[];

    /**
     * 
     * @param {number} x
     * @return {number}
     */
    noise(x : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    noise(x : number, y : number) : number;

    /**
     * ( begin auto-generated from noise.xml )
     * 
     * Returns the Perlin noise value at specified coordinates. Perlin noise is a
     * random sequence generator producing a more natural ordered, harmonic
     * succession of numbers compared to the standard <b>random()</b> function. It
     * was invented by Ken Perlin in the 1980s and been used since in graphical
     * applications to produce procedural textures, natural motion, shapes, terrains
     * etc.<br />
     * <br />
     * The main difference to the <b>random()</b> function is that Perlin noise is
     * defined in an infinite n-dimensional space where each pair of coordinates
     * corresponds to a fixed semi-random value (fixed only for the lifespan of the
     * program). The resulting value will always be between 0.0 and 1.0. Processing
     * can compute 1D, 2D and 3D noise, depending on the number of coordinates
     * given. The noise value can be animated by moving through the noise space as
     * demonstrated in the example above. The 2nd and 3rd dimension can also be
     * interpreted as time.<br />
     * <br />
     * The actual noise is structured similar to an audio signal, in respect to the
     * function's use of frequencies. Similar to the concept of harmonics in
     * physics, perlin noise is computed over several octaves which are added
     * together for the final result. <br />
     * <br />
     * Another way to adjust the character of the resulting sequence is the scale of
     * the input coordinates. As the function works within an infinite space the
     * value of the coordinates doesn't matter as such, only the distance between
     * successive coordinates does (eg. when using <b>noise()</b> within a loop). As
     * a general rule the smaller the difference between coordinates, the smoother
     * the resulting noise sequence will be. Steps of 0.005-0.03 work best for most
     * applications, but this will differ depending on use.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @param {number} x x-coordinate in noise space
     * @param {number} y y-coordinate in noise space
     * @param {number} z z-coordinate in noise space
     * @see PApplet#noiseSeed(long)
     * @see PApplet#noiseDetail(int, float)
     * @see PApplet#random(float,float)
     * @return {number}
     */
    noise(x : number, y : number, z : number) : number;

    noise_fsc(i : number) : number;

    /**
     * ( begin auto-generated from noiseDetail.xml )
     * 
     * Adjusts the character and level of detail produced by the Perlin noise
     * function. Similar to harmonics in physics, noise is computed over several
     * octaves. Lower octaves contribute more to the output signal and as such
     * define the overal intensity of the noise, whereas higher octaves create finer
     * grained details in the noise sequence. By default, noise is computed over 4
     * octaves with each octave contributing exactly half than its predecessor,
     * starting at 50% strength for the 1st octave. This falloff amount can be
     * changed by adding an additional function parameter. Eg. a falloff factor of
     * 0.75 means each octave will now have 75% impact (25% less) of the previous
     * lower octave. Any value between 0.0 and 1.0 is valid, however note that
     * values greater than 0.5 might result in greater than 1.0 values returned by
     * <b>noise()</b>.<br />
     * <br />
     * By changing these parameters, the signal created by the <b>noise()</b>
     * function can be adapted to fit very specific needs and characteristics.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @param {number} lod number of octaves to be used by the noise
     * @see PApplet#noise(float, float, float)
     */
    noiseDetail(lod : number);

    /**
     * @see #noiseDetail(int)
     * @param {number} falloff falloff factor for each octave
     * @param {number} lod
     */
    noiseDetail(lod : number, falloff : number);

    /**
     * ( begin auto-generated from noiseSeed.xml )
     * 
     * Sets the seed value for <b>noise()</b>. By default, <b>noise()</b> produces
     * different results each time the program is run. Set the <b>value</b>
     * parameter to a constant to return the same pseudo-random numbers each time
     * the software is run.
     * 
     * ( end auto-generated )
     * 
     * @webref math:random
     * @param {number} seed seed value
     * @see PApplet#noise(float, float, float)
     * @see PApplet#noiseDetail(int, float)
     * @see PApplet#random(float,float)
     * @see PApplet#randomSeed(long)
     */
    noiseSeed(seed : number);

    loadImageFormats : string[];

    /**
     * ( begin auto-generated from loadImage.xml )
     * 
     * Loads an image into a variable of type <b>PImage</b>. Four types of images (
     * <b>.gif</b>, <b>.jpg</b>, <b>.tga</b>, <b>.png</b>) images may be loaded. To
     * load correctly, images must be located in the data directory of the current
     * sketch. In most cases, load all images in <b>setup()</b> to preload them at
     * the start of the program. Loading images inside <b>draw()</b> will reduce the
     * speed of a program.<br/>
     * <br/>
     * <b>filename</b> parameter can also be a URL to a file found online. For
     * security reasons, a Processing sketch found online can only download files
     * from the same server from which it came. Getting around this restriction
     * requires a <a href="http://wiki.processing.org/w/Sign_an_Applet">signed
     * applet</a>.<br/>
     * <br/>
     * <b>extension</b> parameter is used to determine the image type in cases where
     * the image filename does not end with a proper extension. Specify the
     * extension as the second parameter to <b>loadImage()</b>, as shown in the
     * third example on this page.<br/>
     * <br/>
     * an image is not loaded successfully, the <b>null</b> value is returned and an
     * error message will be printed to the console. The error message does not halt
     * the program, however the null value may cause a NullPointerException if your
     * code does not check whether the value returned from <b>loadImage()</b> is
     * null.<br/>
     * <br/>
     * on the type of error, a <b>PImage</b> object may still be returned, but the
     * width and height of the image will be set to -1. This happens if bad image
     * data is returned or cannot be decoded properly. Sometimes this happens with
     * image URLs that produce a 403 error or that redirect to a password prompt,
     * because <b>loadImage()</b> will attempt to interpret the HTML as image data.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @param {string} filename name of file to load, can be .gif, .jpg, .tga, or a handful
     * of other image types depending on your platform
     * @see PImage
     * @see PGraphics#image(PImage, float, float, float, float)
     * @see PGraphics#imageMode(int)
     * @see PGraphics#background(float, float, float, float)
     * @return {PImage}
     */
    loadImage(filename : string) : PImage;

    /**
     * @param {string} extension type of image to load, for example "png", "gif", "jpg"
     * @param {string} filename
     * @return {PImage}
     */
    loadImage(filename : string, extension : string) : PImage;

    requestImage(filename : string) : PImage;

    /**
     * ( begin auto-generated from requestImage.xml )
     * 
     * This function load images on a separate thread so that your sketch does not
     * freeze while images load during <b>setup()</b>. While the image is loading,
     * its width and height will be 0. If an error occurs while loading the image,
     * its width and height will be set to -1. You'll know when the image has loaded
     * properly because its width and height will be greater than 0. Asynchronous
     * image loading (particularly when downloading from a server) can dramatically
     * improve performance.<br />
     * <br/>
     * <b>extension</b> parameter is used to determine the image type in cases where
     * the image filename does not end with a proper extension. Specify the
     * extension as the second parameter to <b>requestImage()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @param {string} filename  name of the file to load, can be .gif, .jpg, .tga, or a
     * handful of other image types depending on your platform
     * @param {string} extension the type of image to load, for example "png", "gif", "jpg"
     * @see PImage
     * @see PApplet#loadImage(String, String)
     * @return {PImage}
     */
    requestImage(filename : string, extension : string) : PImage;

    /**
     * By trial and error, four image loading threads seem to work best when loading
     * images from online. This is consistent with the number of open connections
     * that web browsers will maintain. The variable is made public (however no
     * accessor has been added since it's esoteric) if you really want to have
     * control over the value used. For instance, when loading local files, it might
     * be better to only have a single thread (or two) loading images so that you're
     * disk isn't simply jumping around.
     */
    requestImageMax : number;

    requestImageCount : number;

    /**
     * Use Java 1.4 ImageIO methods to load an image.
     * @param {string} filename
     * @return {PImage}
     */
    loadImageIO(filename : string) : PImage;

    /**
     * Targa image loader for RLE-compressed TGA files.
     * <p>
     * Rewritten for 0115 to read/write RLE-encoded targa images. For 0125, non-RLE
     * encoded images are now supported, along with images whose y-order is reversed
     * (which is standard for TGA files).
     * <p>
     * A version of this function is in MovieMaker.java. Any fixes here should be
     * applied over in MovieMaker as well.
     * <p>
     * Known issue with RLE encoding and odd behavior in some apps:
     * https://github.com/processing/processing/issues/2096 Please help!
     * @param {string} filename
     * @return {PImage}
     */
    loadImageTGA(filename : string) : PImage;

    /**
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL.
     * @see XML
     * @see PApplet#parseXML(String)
     * @see PApplet#saveXML(XML, String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadTable(String)
     * @return {XML}
     */
    loadXML(filename : string) : XML;

    /**
     * @nowebref
     * @param {string} filename
     * @param {string} options
     * @return {XML}
     */
    loadXML(filename : string, options : string) : XML;

    /**
     * @webref input:files
     * @brief Converts String content to an XML object
     * @param {string} xmlString the content to be parsed as XML
     * @return {XML} an XML object, or null
     * @see XML
     * @see PApplet#loadXML(String)
     * @see PApplet#saveXML(XML, String)
     */
    parseXML(xmlString : string) : XML;

    parseXML(xmlString : string, options : string) : XML;

    /**
     * @webref output:files
     * @param {XML} xml      the XML object to save to disk
     * @param {string} filename name of the file to write to
     * @see XML
     * @see PApplet#loadXML(String)
     * @see PApplet#parseXML(String)
     * @return {boolean}
     */
    saveXML(xml : XML, filename : string) : boolean;

    /**
     * @nowebref
     * @param {XML} xml
     * @param {string} filename
     * @param {string} options
     * @return {boolean}
     */
    saveXML(xml : XML, filename : string, options : string) : boolean;

    /**
     * @webref input:files
     * @param {string} input String to parse as a JSONObject
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {JSONObject}
     */
    parseJSONObject(input : string) : JSONObject;

    /**
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL
     * @see JSONObject
     * @see JSONArray
     * @see PApplet#loadJSONArray(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @see PApplet#saveJSONArray(JSONArray, String)
     * @return {JSONObject}
     */
    loadJSONObject(filename : string) : JSONObject;

    /**
     * @webref output:files
     * @param {JSONObject} json     the JSONObject to save
     * @param {string} filename the name of the file to save to
     * @see JSONObject
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#loadJSONArray(String)
     * @see PApplet#saveJSONArray(JSONArray, String)
     * @return {boolean}
     */
    saveJSONObject(json : JSONObject, filename : string) : boolean;

    /**
     * @param {string} options "compact" and "indent=N", replace N with the number of spaces
     * @param {JSONObject} json
     * @param {string} filename
     * @return {boolean}
     */
    saveJSONObject(json : JSONObject, filename : string, options : string) : boolean;

    /**
     * @webref input:files
     * @param {string} input String to parse as a JSONArray
     * @see JSONObject
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {JSONArray}
     */
    parseJSONArray(input : string) : JSONArray;

    /**
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @see PApplet#saveJSONArray(JSONArray, String)
     * @return {JSONArray}
     */
    loadJSONArray(filename : string) : JSONArray;

    /**
     * @webref output:files
     * @param {JSONArray} json     the JSONArray to save
     * @param {string} filename the name of the file to save to
     * @see JSONObject
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#loadJSONArray(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {boolean}
     */
    saveJSONArray(json : JSONArray, filename : string) : boolean;

    /**
     * @param {string} options "compact" and "indent=N", replace N with the number of spaces
     * @param {JSONArray} json
     * @param {string} filename
     * @return {boolean}
     */
    saveJSONArray(json : JSONArray, filename : string, options : string) : boolean;

    /**
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL.
     * @see Table
     * @see PApplet#saveTable(Table, String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadXML(String)
     * @return {Table}
     */
    loadTable(filename : string) : Table;

    /**
     * Options may contain "header", "tsv", "csv", or "bin" separated by commas.
     * 
     * Another option is "dictionary=filename.tsv", which allows users to specify a
     * "dictionary" file that contains a mapping of the column titles and the data
     * types used in the table file. This can be far more efficient (in terms of
     * speed and memory usage) for loading and parsing tables. The dictionary file
     * can only be tab separated values (.tsv) and its extension will be ignored.
     * This option was added in Processing 2.0.2.
     * 
     * @param {string} options may contain "header", "tsv", "csv", or "bin" separated by
     * commas
     * @param {string} filename
     * @return {Table}
     */
    loadTable(filename : string, options : string) : Table;

    /**
     * @webref output:files
     * @param {Table} table    the Table object to save to a file
     * @param {string} filename the filename to which the Table should be saved
     * @see Table
     * @see PApplet#loadTable(String)
     * @return {boolean}
     */
    saveTable(table : Table, filename : string) : boolean;

    /**
     * @param {string} options can be one of "tsv", "csv", "bin", or "html"
     * @param {Table} table
     * @param {string} filename
     * @return {boolean}
     */
    saveTable(table : Table, filename : string, options : string) : boolean;

    /**
     * ( begin auto-generated from loadFont.xml )
     * 
     * Loads a font into a variable of type <b>PFont</b>. To load correctly, fonts
     * must be located in the data directory of the current sketch. To create a font
     * to use with Processing, select "Create Font..." from the Tools menu. This
     * will create a font in the format Processing requires and also adds it to the
     * current sketch's data directory.<br />
     * <br />
     * Like <b>loadImage()</b> and other functions that load data, the
     * <b>loadFont()</b> function should not be used inside <b>draw()</b>, because
     * it will slow down the sketch considerably, as the font will be re-loaded from
     * the disk (or network) on each frame.<br />
     * <br />
     * For most renderers, Processing displays fonts using the .vlw font format,
     * which uses images for each letter, rather than defining them through vector
     * data. When <b>hint(ENABLE_NATIVE_FONTS)</b> is used with the JAVA2D renderer,
     * the native version of a font will be used if it is installed on the user's
     * machine.<br />
     * <br />
     * Using <b>createFont()</b> (instead of loadFont) enables vector data to be
     * used with the JAVA2D (default) renderer setting. This can be helpful when
     * many font sizes are needed, or when using any renderer based on JAVA2D, such
     * as the PDF library.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:loading_displaying
     * @param {string} filename name of the font to load
     * @see PFont
     * @see PGraphics#textFont(PFont, float)
     * @see PApplet#createFont(String, float, boolean, char[])
     * @return {PFont}
     */
    loadFont(filename : string) : PFont;

    g : PGraphics;

    /**
     * Used by PGraphics to remove the requirement for loading a font!
     * @param {number} size
     * @return {PFont}
     */
    createDefaultFont(size : number) : PFont;

    createFont(name : string, size : number) : PFont;

    createFont(name : string, size : number, smooth : boolean) : PFont;

    /**
     * ( begin auto-generated from createFont.xml )
     * 
     * Dynamically converts a font to the format used by Processing from either a
     * font name that's installed on the computer, or from a .ttf or .otf file
     * inside the sketches "data" folder. This function is an advanced feature for
     * precise control. On most occasions you should create fonts through selecting
     * "Create Font..." from the Tools menu. <br />
     * <br />
     * Use the <b>PFont.list()</b> method to first determine the names for the fonts
     * recognized by the computer and are compatible with this function. Because of
     * limitations in Java, not all fonts can be used and some might work with one
     * operating system and not others. When sharing a sketch with other people or
     * posting it on the web, you may need to include a .ttf or .otf version of your
     * font in the data directory of the sketch because other people might not have
     * the font installed on their computer. Only fonts that can legally be
     * distributed should be included with a sketch. <br />
     * <br />
     * The <b>size</b> parameter states the font size you want to generate. The
     * <b>smooth</b> parameter specifies if the font should be antialiased or not,
     * and the <b>charset</b> parameter is an array of chars that specifies the
     * characters to generate. <br />
     * <br />
     * This function creates a bitmapped version of a font in the same manner as the
     * Create Font tool. It loads a font by name, and converts it to a series of
     * images based on the size of the font. When possible, the <b>text()</b>
     * function will use a native font rather than the bitmapped version created
     * behind the scenes with <b>createFont()</b>. For instance, when using P2D, the
     * actual native version of the font will be employed by the sketch, improving
     * drawing quality and performance. With the P3D renderer, the bitmapped version
     * will be used. While this can drastically improve speed and appearance,
     * results are poor when exporting if the sketch does not include the .otf or
     * .ttf file, and the requested font is not available on the machine running the
     * sketch.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:loading_displaying
     * @param {string} name    name of the font to load
     * @param {number} size    point size of the font
     * @param {boolean} smooth  true for an antialiased font, false for aliased
     * @param {Array} charset array containing characters to be generated
     * @see PFont
     * @see PGraphics#textFont(PFont, float)
     * @see PGraphics#text(String, float, float, float, float)
     * @see PApplet#loadFont(String)
     * @return {PFont}
     */
    createFont(name : string, size : number, smooth : boolean, charset : string[]) : PFont;

    /**
     * Open a platform-specific file chooser dialog to select a file for input.
     * After the selection is made, the selected File will be passed to the
     * 'callback' function. If the dialog is closed or canceled, null will be sent
     * to the function, so that the program is not waiting for additional input. The
     * callback is necessary because of how threading works.
     * 
     * <pre>
     * void setup() {
     * selectInput("Select a file to process:", "fileSelected");
     * }
     * 
     * void fileSelected(File selection) {
     * if (selection == null) {
     * println("Window was closed or the user hit cancel.");
     * } else {
     * println("User selected " + fileSeleted.getAbsolutePath());
     * }
     * }
     * </pre>
     * 
     * For advanced users, the method must be 'public', which is true for all
     * methods inside a sketch when run from the PDE, but must explicitly be set
     * when using Eclipse or other development environments.
     * 
     * @webref input:files
     * @param {string} prompt   message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    selectInput(prompt : string, callback : string);

    selectInput(prompt : string, callback : string, file : any);

    selectInput(prompt : string, callback : string, file : any, callbackObject : any);

    /**
     * See selectInput() for details.
     * 
     * @webref output:files
     * @param {string} prompt   message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    selectOutput(prompt : string, callback : string);

    selectOutput(prompt : string, callback : string, file : any);

    selectOutput(prompt : string, callback : string, file : any, callbackObject : any);

    /**
     * See selectInput() for details.
     * 
     * @webref input:files
     * @param {string} prompt   message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    selectFolder(prompt : string, callback : string);

    selectFolder(prompt : string, callback : string, file : any);

    selectFolder(prompt : string, callback : string, file : any, callbackObject : any);

    listPaths(path : string, ...options : string[]) : string[];

    listFiles(path : string, ...options : string[]) : any;

    /**
     * ( begin auto-generated from createReader.xml )
     * 
     * Creates a <b>BufferedReader</b> object that can be used to read files
     * line-by-line as individual <b>String</b> objects. This is the complement to
     * the <b>createWriter()</b> function. <br/>
     * <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default encoding
     * for your platform was used, which causes problems when files are moved to
     * other platforms.
     * 
     * ( end auto-generated )
     * 
     * @webref input:files
     * @param {string} filename name of the file to be opened
     * @see BufferedReader
     * @see PApplet#createWriter(String)
     * @see PrintWriter
     * @return {*}
     */
    createReader(filename : string) : { str: string, cursor: number };

    /**
     * ( begin auto-generated from createWriter.xml )
     * 
     * Creates a new file in the sketch folder, and a <b>PrintWriter</b> object to
     * write to it. For the file to be made correctly, it should be flushed and must
     * be closed with its <b>flush()</b> and <b>close()</b> methods (see above
     * example). <br/>
     * <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default encoding
     * for your platform was used, which causes problems when files are moved to
     * other platforms.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename name of the file to be created
     * @see PrintWriter
     * @see PApplet#createReader
     * @see BufferedReader
     * @return {*}
     */
    createWriter(filename : string) : any;

    /**
     * ( begin auto-generated from createInput.xml )
     * 
     * This is a function for advanced programmers to open a Java InputStream. It's
     * useful if you want to use the facilities provided by PApplet to easily open
     * files from the data folder or from a URL, but want an InputStream object so
     * that you can use other parts of Java to take more control of how the stream
     * is read.<br />
     * <br />
     * The filename passed in can be:<br />
     * - A URL, for instance <b>openStream("http://processing.org/")</b><br />
     * - A file in the sketch's <b>data</b> folder<br />
     * - The full path to a file to be opened locally (when running as an
     * application)<br />
     * <br />
     * If the requested item doesn't exist, null is returned. If not online, this
     * will also check to see if the user is asking for a file whose name isn't
     * properly capitalized. If capitalization is different, an error will be
     * printed to the console. This helps prevent issues that appear when a sketch
     * is exported to the web, where case sensitivity matters, as opposed to running
     * from inside the Processing Development Environment on Windows or Mac OS,
     * where case sensitivity is preserved but ignored.<br />
     * <br />
     * If the file ends with <b>.gz</b>, the stream will automatically be gzip
     * decompressed. If you don't want the automatic decompression, use the related
     * function <b>createInputRaw()</b>. <br />
     * In earlier releases, this function was called <b>openStream()</b>.<br />
     * <br />
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Simplified method to open a Java InputStream.
     * <p>
     * This method is useful if you want to use the facilities provided by PApplet
     * to easily open things from the data folder or from a URL, but want an
     * InputStream object so that you can use other Java methods to take more
     * control of how the stream is read.
     * <p>
     * If the requested item doesn't exist, null is returned. (Prior to 0096, die()
     * would be called, killing the applet)
     * <p>
     * For 0096+, the "data" folder is exported intact with subfolders, and
     * openStream() properly handles subdirectories from the data folder
     * <p>
     * If not online, this will also check to see if the user is asking for a file
     * whose name isn't properly capitalized. This helps prevent issues when a
     * sketch is exported to the web, where case sensitivity matters, as opposed to
     * Windows and the Mac OS default where case sensitivity is preserved but
     * ignored.
     * <p>
     * It is strongly recommended that libraries use this method to open data files,
     * so that the loading sequence is handled in the same way as functions like
     * loadBytes(), loadImage(), etc.
     * <p>
     * The filename passed in can be:
     * <UL>
     * <LI>A URL, for instance openStream("http://processing.org/");
     * <LI>A file in the sketch's data folder
     * <LI>Another file to be opened locally (when running as an application)
     * </UL>
     * 
     * @webref input:files
     * @param {string} filename the name of the file to use as input
     * @see PApplet#createOutput(String)
     * @see PApplet#selectOutput(String,String)
     * @see PApplet#selectInput(String,String)
     * @return {*}
     */
    createInput(filename : string) : { str: string, cursor: number };

    /**
     * Call openStream() without automatic gzip decompression.
     * @param {string} filename
     * @return {*}
     */
    createInputRaw(filename : string) : { str: string, cursor: number };

    /**
     * ( begin auto-generated from loadBytes.xml )
     * 
     * Reads the contents of a file or url and places it in a byte array. If a file
     * is specified, it must be located in the sketch's "data"
     * directory/folder.<br />
     * <br />
     * The filename parameter can also be a URL to a file found online. For security
     * reasons, a Processing sketch found online can only download files from the
     * same server from which it came. Getting around this restriction requires a
     * <a href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</a>.
     * 
     * ( end auto-generated )
     * 
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL.
     * @see PApplet#loadStrings(String)
     * @see PApplet#saveStrings(String, String[])
     * @see PApplet#saveBytes(String, byte[])
     * @return {Array}
     */
    loadBytes(filename : string) : number[];

    /**
     * ( begin auto-generated from loadStrings.xml )
     * 
     * Reads the contents of a file or url and creates a String array of its
     * individual lines. If a file is specified, it must be located in the sketch's
     * "data" directory/folder.<br />
     * <br />
     * The filename parameter can also be a URL to a file found online. For security
     * reasons, a Processing sketch found online can only download files from the
     * same server from which it came. Getting around this restriction requires a
     * <a href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</a>.
     * <br />
     * If the file is not available or an error occurs, <b>null</b> will be returned
     * and an error message will be printed to the console. The error message does
     * not halt the program, however the null value may cause a NullPointerException
     * if your code does not check whether the value returned is null. <br/>
     * <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default encoding
     * for your platform was used, which causes problems when files are moved to
     * other platforms.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Load data from a file and shove it into a String array.
     * <p>
     * Exceptions are handled internally, when an error, occurs, an exception is
     * printed to the console and 'null' is returned, but the program continues
     * running. This is a tradeoff between 1) showing the user that there was a
     * problem but 2) not requiring that all i/o code is contained in try/catch
     * blocks, for the sake of new users (or people who are just trying to get
     * things done in a "scripting" fashion. If you want to handle exceptions, use
     * Java methods for I/O.
     * 
     * @webref input:files
     * @param {string} filename name of the file or url to load
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveStrings(String, String[])
     * @see PApplet#saveBytes(String, byte[])
     * @return {Array}
     */
    loadStrings(filename : string) : string[];

    /**
     * ( begin auto-generated from createOutput.xml )
     * 
     * Similar to <b>createInput()</b>, this creates a Java <b>OutputStream</b> for
     * a given filename or path. The file will be created in the sketch folder, or
     * in the same folder as an exported application. <br />
     * <br />
     * If the path does not exist, intermediate folders will be created. If an
     * exception occurs, it will be printed to the console, and <b>null</b> will be
     * returned. <br />
     * <br />
     * This function is a convenience over the Java approach that requires you to 1)
     * create a FileOutputStream object, 2) determine the exact file location, and
     * 3) handle exceptions. Exceptions are handled internally by the function,
     * which is more appropriate for "sketch" projects. <br />
     * <br />
     * If the output filename ends with <b>.gz</b>, the output will be automatically
     * GZIP compressed as it is written.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename name of the file to open
     * @see PApplet#createInput(String)
     * @see PApplet#selectOutput(String,String)
     * @return {*}
     */
    createOutput(filename : string) : any;

    /**
     * ( begin auto-generated from saveStream.xml )
     * 
     * Save the contents of a stream to a file in the sketch folder. This is
     * basically <b>saveBytes(blah, loadBytes())</b>, but done more efficiently (and
     * with less confusing syntax).<br />
     * <br />
     * When using the <b>targetFile</b> parameter, it writes to a <b>File</b> object
     * for greater control over the file location. (Note that unlike some other
     * functions, this will not automatically compress or uncompress gzip files.)
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} target name of the file to write to
     * @param {string} source location to read from (a filename, path, or URL)
     * @see PApplet#createOutput(String)
     * @return {boolean}
     */
    saveStream(target : string, source : string) : boolean;

    /**
     * Identical to the other saveStream(), but writes to a File object, for greater
     * control over the file location.
     * <p/>
     * Note that unlike other api methods, this will not automatically compress or
     * uncompress gzip files.
     * @param {*} target
     * @param {string} source
     * @return {boolean}
     */
    saveStream(target : any, source : string) : boolean;

    /**
     * @nowebref
     * @param {string} target
     * @param {*} source
     * @return {boolean}
     */
    saveStream(target : string, source : { str: string, cursor: number }) : boolean;

    /**
     * ( begin auto-generated from saveBytes.xml )
     * 
     * Opposite of <b>loadBytes()</b>, will write an entire array of bytes to a
     * file. The data is saved in binary format. This file is saved to the sketch's
     * folder, which is opened by selecting "Show sketch folder" from the "Sketch"
     * menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser unless
     * the sketch is <a href="http://wiki.processing.org/w/Sign_an_Applet">signed
     * applet</A>. To save a file back to a server, see the
     * <a href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename name of the file to write to
     * @param {Array} data     array of bytes to be written
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveStrings(String, String[])
     */
    saveBytes(filename : string, data : number[]);

    /**
     * ( begin auto-generated from saveStrings.xml )
     * 
     * Writes an array of strings to a file, one line per string. This file is saved
     * to the sketch's folder, which is opened by selecting "Show sketch folder"
     * from the "Sketch" menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser unless
     * the sketch is <a href="http://wiki.processing.org/w/Sign_an_Applet">signed
     * applet</A>. To save a file back to a server, see the
     * <a href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.<br/>
     * <br/ > Starting with Processing 1.0, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default encoding
     * for your platform was used, which causes problems when files are moved to
     * other platforms.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename filename for output
     * @param {Array} data     string array to be written
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveBytes(String, byte[])
     */
    saveStrings(filename : string, data : string[]);

    sketchPath() : string;

    /**
     * Prepend the sketch folder path to the filename (or path) that is passed in.
     * External libraries should use this function to save to the sketch folder.
     * <p/>
     * Note that when running as an applet inside a web browser, the sketchPath will
     * be set to null, because security restrictions prevent applets from accessing
     * that information.
     * <p/>
     * This will also cause an error if the sketch is not inited properly, meaning
     * that init() was never called on the PApplet when hosted my some other main()
     * or by other code. For proper use of init(), see the examples in the main
     * description text for PApplet.
     * @param {string} where
     * @return {string}
     */
    sketchPath(where : string) : string;

    sketchFile(where : string) : any;

    /**
     * Returns a path inside the applet folder to save to. Like sketchPath(), but
     * creates any in-between folders so that things save properly.
     * <p/>
     * All saveXxxx() functions use the path to the sketch folder, rather than its
     * data folder. Once exported, the data folder will be found inside the jar file
     * of the exported application or applet. In this case, it's not possible to
     * save data into the jar file, because it will often be running from a server,
     * or marked in-use if running from a local file system. With this in mind,
     * saving to the data path doesn't make sense anyway. If you know you're running
     * locally, and want to save to the data folder, use
     * <TT>saveXxxx("data/blah.dat")</TT>.
     * @param {string} where
     * @return {string}
     */
    savePath(where : string) : string;

    /**
     * Identical to savePath(), but returns a File object.
     * @param {string} where
     * @return {*}
     */
    saveFile(where : string) : any;

    /**
     * <b>This function almost certainly does not do the thing you want it to.</b>
     * The data path is handled differently on each platform, and should not be
     * considered a location to write files. It should also not be assumed that this
     * location can be read from or listed. This function is used internally as a
     * possible location for reading files. It's still "public" as a holdover from
     * earlier code.
     * <p>
     * Libraries should use createInput() to get an InputStream or createOutput() to
     * get an OutputStream. sketchPath() can be used to get a location relative to
     * the sketch. Again, <b>do not</b> use this to get relative locations of files.
     * You'll be disappointed when your app runs on different platforms.
     * @param {string} where
     * @return {string}
     */
    dataPath(where : string) : string;

    /**
     * Return a full path to an item in the data folder as a File object. See the
     * dataPath() method for more information.
     * @param {string} where
     * @return {*}
     */
    dataFile(where : string) : any;

    /**
     * ( begin auto-generated from color.xml )
     * 
     * Creates colors for storing in variables of the <b>color</b> datatype. The
     * parameters are interpreted as RGB or HSB values depending on the current
     * <b>colorMode()</b>. The default mode is RGB values from 0 to 255 and
     * therefore, the function call <b>color(255, 204, 0)</b> will return a bright
     * yellow color. More about how colors are stored can be found in the reference
     * for the <a href="color_datatype.html">color</a> datatype.
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @param {number} gray number specifying value between white and black
     * @see PApplet#colorMode(int)
     * @return {number}
     */
    color(gray : number) : number;

    /**
     * @nowebref
     * @param {number} fgray number specifying value between white and black
     * @return {number}
     */
    color(fgray : number) : number;

    /**
     * As of 0116 this also takes color(#FF8800, alpha)
     * 
     * @param {number} alpha relative to current color range
     * @param {number} gray
     * @return {number}
     */
    color(gray : number, alpha : number) : number;

    /**
     * @nowebref
     * @param {number} fgray
     * @param {number} falpha
     * @return {number}
     */
    color(fgray : number, falpha : number) : number;

    /**
     * @param {number} v1 red or hue values relative to the current color range
     * @param {number} v2 green or saturation values relative to the current color range
     * @param {number} v3 blue or brightness values relative to the current color range
     * @return {number}
     */
    color(v1 : number, v2 : number, v3 : number) : number;

    color(v1 : number, v2 : number, v3 : number, alpha : number) : number;

    color(v1 : number, v2 : number, v3 : number) : number;

    color(v1 : number, v2 : number, v3 : number, alpha : number) : number;

    /**
     * ( begin auto-generated from lerpColor.xml )
     * 
     * Calculates a color or colors between two color at a specific increment. The
     * <b>amt</b> parameter is the amount to interpolate between the two values
     * where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is
     * half-way in between, etc.
     * 
     * ( end auto-generated )
     * 
     * @webref color:creating_reading
     * @usage web_application
     * @param {number} c1  interpolate from this color
     * @param {number} c2  interpolate to this color
     * @param {number} amt between 0.0 and 1.0
     * @see PImage#blendColor(int, int, int)
     * @see PGraphics#color(float, float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    lerpColor(c1 : number, c2 : number, amt : number) : number;

    frameMoved(x : number, y : number);

    frameResized(w : number, h : number);

    /**
     * See warning in showSurface()
     */
    startSurface();

    initSurface() : PSurface;

    /**
     * Convenience method for Python Mode to run an already-constructed sketch. This
     * makes it makes it easy to launch a sketch in Jython:
     * 
     * <pre>
     * class MySketch(PApplet):
     * pass
     * 
     * MySketch().runSketch();
     * </pre>
     * @param {Array} args
     */
    runSketch(args : string[]);

    /**
     * Convenience method for Python Mode
     */
    runSketch();

    /**
     * ( begin auto-generated from beginRecord.xml )
     * 
     * Opens a new file and all subsequent drawing functions are echoed to this file
     * as well as the display window. The <b>beginRecord()</b> function requires two
     * parameters, the first is the renderer and the second is the file name. This
     * function is always used with <b>endRecord()</b> to stop the recording process
     * and close the file. <br />
     * <br />
     * Note that beginRecord() will only pick up any settings that happen after it
     * has been called. For instance, if you call textFont() before beginRecord(),
     * then that font will not be set for the file that you're recording to.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} renderer PDF or SVG
     * @param {string} filename filename for output
     * @see PApplet#endRecord()
     * @return {PGraphics}
     */
    beginRecord(renderer : string, filename : string) : PGraphics;

    /**
     * @nowebref Begin recording (echoing) commands to the specified PGraphics
     * object.
     * @param {PGraphics} recorder
     */
    beginRecord(recorder : PGraphics);

    /**
     * ( begin auto-generated from endRecord.xml )
     * 
     * Stops the recording process started by <b>beginRecord()</b> and closes the
     * file.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @see PApplet#beginRecord(String, String)
     */
    endRecord();

    /**
     * ( begin auto-generated from beginRaw.xml )
     * 
     * To create vectors from 3D data, use the <b>beginRaw()</b> and <b>endRaw()</b>
     * commands. These commands will grab the shape data just before it is rendered
     * to the screen. At this stage, your entire scene is nothing but a long list of
     * individual lines and triangles. This means that a shape created with
     * <b>sphere()</b> function will be made up of hundreds of triangles, rather
     * than a single object. Or that a multi-segment line shape (such as a curve)
     * will be rendered as individual segments. <br />
     * <br />
     * When using <b>beginRaw()</b> and <b>endRaw()</b>, it's possible to write to
     * either a 2D or 3D renderer. For instance, <b>beginRaw()</b> with the PDF
     * library will write the geometry as flattened triangles and lines, even if
     * recording from the <b>P3D</b> renderer. <br />
     * <br />
     * If you want a background to show up in your files, use <b>rect(0, 0, width,
     * height)</b> after setting the <b>fill()</b> to the background color.
     * Otherwise the background will not be rendered to the file because the
     * background is not shape. <br />
     * <br />
     * Using <b>hint(ENABLE_DEPTH_SORT)</b> can improve the appearance of 3D
     * geometry drawn to 2D file formats. See the <b>hint()</b> reference for more
     * details. <br />
     * <br />
     * See examples in the reference for the <b>PDF</b> and <b>DXF</b> libraries for
     * more information.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} renderer for example, PDF or DXF
     * @param {string} filename filename for output
     * @see PApplet#endRaw()
     * @see PApplet#hint(int)
     * @return {PGraphics}
     */
    beginRaw(renderer : string, filename : string) : PGraphics;

    /**
     * @nowebref Begin recording raw shape data to the specified renderer.
     * 
     * This simply echoes to g.beginRaw(), but since is placed here
     * (rather than generated by preproc.pl) for clarity and so that it
     * doesn't echo the command should beginRecord() be in use.
     * 
     * @param {PGraphics} rawGraphics ???
     */
    beginRaw(rawGraphics : PGraphics);

    /**
     * ( begin auto-generated from endRaw.xml )
     * 
     * Complement to <b>beginRaw()</b>; they must always be used together. See the
     * <b>beginRaw()</b> reference for details.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @see PApplet#beginRaw(String, String)
     */
    endRaw();

    /**
     * ( begin auto-generated from loadPixels.xml )
     * 
     * Loads the pixel data for the display window into the <b>pixels[]</b> array.
     * This function must always be called before reading from or writing to
     * <b>pixels[]</b>. <br/>
     * <br/>
     * renderers may or may not seem to require <b>loadPixels()</b> or
     * <b>updatePixels()</b>. However, the rule is that any time you want to
     * manipulate the <b>pixels[]</b> array, you must first call
     * <b>loadPixels()</b>, and after changes have been made, call
     * <b>updatePixels()</b>. Even if the renderer may not seem to use this function
     * in the current Processing release, this will always be subject to change.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Override the g.pixels[] function to set the pixels[] array
     * that's part of the PApplet object. Allows the use of pixels[] in the code,
     * rather than g.pixels[].
     * 
     * @webref image:pixels
     * @see PApplet#pixels
     * @see PApplet#updatePixels()
     */
    loadPixels();

    /**
     * ( begin auto-generated from updatePixels.xml )
     * 
     * Updates the display window with the data in the <b>pixels[]</b> array. Use in
     * conjunction with <b>loadPixels()</b>. If you're only reading pixels from the
     * array, there's no need to call <b>updatePixels()</b> unless there are
     * changes. <br/>
     * <br/>
     * renderers may or may not seem to require <b>loadPixels()</b> or
     * <b>updatePixels()</b>. However, the rule is that any time you want to
     * manipulate the <b>pixels[]</b> array, you must first call
     * <b>loadPixels()</b>, and after changes have been made, call
     * <b>updatePixels()</b>. Even if the renderer may not seem to use this function
     * in the current Processing release, this will always be subject to change.
     * <br/>
     * <br/>
     * Currently, none of the renderers use the additional parameters to
     * <b>updatePixels()</b>, however this may be implemented in the future.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @see PApplet#loadPixels()
     * @see PApplet#pixels
     */
    updatePixels();

    /**
     * @nowebref
     * @param {number} x1 x-coordinate of the upper-left corner
     * @param {number} y1 y-coordinate of the upper-left corner
     * @param {number} x2 width of the region
     * @param {number} y2 height of the region
     */
    updatePixels(x1 : number, y1 : number, x2 : number, y2 : number);

    endPGL();

    flush();

    hint(which : number);

    /**
     * Start a new shape of type POLYGON
     */
    beginShape();

    /**
     * ( begin auto-generated from beginShape.xml )
     * 
     * Using the <b>beginShape()</b> and <b>endShape()</b> functions allow creating
     * more complex forms. <b>beginShape()</b> begins recording vertices for a shape
     * and <b>endShape()</b> stops recording. The value of the <b>MODE</b> parameter
     * tells it which types of shapes to create from the provided vertices. With no
     * mode specified, the shape can be any irregular polygon. The parameters
     * available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN,
     * TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After calling the <b>beginShape()</b>
     * function, a series of <b>vertex()</b> commands must follow. To stop drawing
     * the shape, call <b>endShape()</b>. The <b>vertex()</b> function with two
     * parameters specifies a position in 2D and the <b>vertex()</b> function with
     * three parameters specifies a position in 3D. Each shape will be outlined with
     * the current stroke color and filled with the fill color. <br/>
     * <br/>
     * Transformations such as <b>translate()</b>, <b>rotate()</b>, and
     * <b>scale()</b> do not work within <b>beginShape()</b>. It is also not
     * possible to use other shapes, such as <b>ellipse()</b> or <b>rect()</b>
     * within <b>beginShape()</b>. <br/>
     * <br/>
     * The P3D renderer settings allow <b>stroke()</b> and <b>fill()</b> settings to
     * be altered per-vertex, however the default P2D renderer does not. Settings
     * such as <b>strokeWeight()</b>, <b>strokeCap()</b>, and <b>strokeJoin()</b>
     * cannot be changed while inside a <b>beginShape()</b>/<b>endShape()</b> block
     * with any renderer.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:vertex
     * @param {number} kind Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP,
     * QUADS, or QUAD_STRIP
     * @see PShape
     * @see PGraphics#endShape()
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float, float,
     * float, float)
     */
    beginShape(kind : number);

    /**
     * Sets whether the upcoming vertex is part of an edge. Equivalent to
     * glEdgeFlag(), for people familiar with OpenGL.
     * @param {boolean} edge
     */
    edge(edge : boolean);

    /**
     * ( begin auto-generated from normal.xml )
     * 
     * Sets the current normal vector. This is for drawing three dimensional shapes
     * and surfaces and specifies a vector perpendicular to the surface of the shape
     * which determines how lighting affects it. Processing attempts to
     * automatically assign normals to shapes, but since that's imperfect, this is a
     * better option when you want more control. This function is identical to
     * glNormal3f() in OpenGL.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @param {number} nx x direction
     * @param {number} ny y direction
     * @param {number} nz z direction
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#lights()
     */
    normal(nx : number, ny : number, nz : number);

    attribPosition(name : string, x : number, y : number, z : number);

    attribNormal(name : string, nx : number, ny : number, nz : number);

    attribColor(name : string, color : number);

    attrib(name : string, ...values : number[]);

    attrib(name : string, ...values : number[]);

    attrib(name : string, ...values : boolean[]);

    /**
     * ( begin auto-generated from textureMode.xml )
     * 
     * Sets the coordinate space for texture mapping. There are two options, IMAGE,
     * which refers to the actual coordinates of the image, and NORMAL, which refers
     * to a normalized space of values ranging from 0 to 1. The default mode is
     * IMAGE. In IMAGE, if an image is 100 x 200 pixels, mapping the image onto the
     * entire size of a quad would require the points (0,0) (0,100) (100,200)
     * (0,200). The same mapping in NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1).
     * 
     * ( end auto-generated )
     * 
     * @webref image:textures
     * @param {number} mode either IMAGE or NORMAL
     * @see PGraphics#texture(PImage)
     * @see PGraphics#textureWrap(int)
     */
    textureMode(mode : number);

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
    textureWrap(wrap : number);

    /**
     * ( begin auto-generated from texture.xml )
     * 
     * Sets a texture to be applied to vertex points. The <b>texture()</b> function
     * must be called between <b>beginShape()</b> and <b>endShape()</b> and before
     * any calls to <b>vertex()</b>. <br/>
     * <br/>
     * When textures are in use, the fill color is ignored. Instead, use tint() to
     * specify the color of the texture as it is applied to the shape.
     * 
     * ( end auto-generated )
     * 
     * @webref image:textures
     * @param {PImage} image reference to a PImage object
     * @see PGraphics#textureMode(int)
     * @see PGraphics#textureWrap(int)
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#vertex(float, float, float, float, float)
     */
    texture(image : PImage);

    /**
     * @param img A PImage like object (candy-processing-webcam:Capture is one for
     * instance)
     * @see PApplet#texture(PImage)
     * @param {*} image
     */
    texture(image : PApplet.PImageLike);

    /**
     * Removes texture image for current shape. Needs to be called between
     * beginShape and endShape
     */
    noTexture();

    vertex(x : number, y : number);

    vertex(x : number, y : number, z : number);

    /**
     * Used by renderer subclasses or PShape to efficiently pass in already
     * formatted vertex information.
     * 
     * @param {Array} v vertex parameters, as a float array of length VERTEX_FIELD_COUNT
     */
    vertex(v : number[]);

    vertex(x : number, y : number, u : number, v : number);

    /**
     * ( begin auto-generated from vertex.xml )
     * 
     * All shapes are constructed by connecting a series of vertices.
     * <b>vertex()</b> is used to specify the vertex coordinates for points, lines,
     * triangles, quads, and polygons and is used exclusively within the
     * <b>beginShape()</b> and <b>endShape()</b> function.<br />
     * <br />
     * Drawing a vertex in 3D using the <b>z</b> parameter requires the P3D
     * parameter in combination with size as shown in the above example.<br />
     * <br />
     * This function is also used to map a texture onto the geometry. The
     * <b>texture()</b> function declares the texture to apply to the geometry and
     * the <b>u</b> and <b>v</b> coordinates set define the mapping of this texture
     * to the form. By default, the coordinates used for <b>u</b> and <b>v</b> are
     * specified in relation to the image's size in pixels, but this relation can be
     * changed with <b>textureMode()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:vertex
     * @param {number} x x-coordinate of the vertex
     * @param {number} y y-coordinate of the vertex
     * @param {number} z z-coordinate of the vertex
     * @param {number} u horizontal coordinate for the texture mapping
     * @param {number} v vertical coordinate for the texture mapping
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float, float,
     * float, float)
     * @see PGraphics#quadraticVertex(float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#texture(PImage)
     */
    vertex(x : number, y : number, z : number, u : number, v : number);

    /**
     * @webref shape:vertex
     */
    beginContour();

    /**
     * @webref shape:vertex
     */
    endContour();

    endShape();

    /**
     * ( begin auto-generated from endShape.xml )
     * 
     * The <b>endShape()</b> function is the companion to <b>beginShape()</b> and
     * may only be called after <b>beginShape()</b>. When <b>endshape()</b> is
     * called, all of image data defined since the previous call to
     * <b>beginShape()</b> is written into the image buffer. The constant CLOSE as
     * the value for the MODE parameter to close the shape (to connect the beginning
     * and the end).
     * 
     * ( end auto-generated )
     * 
     * @webref shape:vertex
     * @param {number} mode use CLOSE to close the shape
     * @see PShape
     * @see PGraphics#beginShape(int)
     */
    endShape(mode : number);

    /**
     * @webref shape
     * @param {string} filename name of file to load, can be .svg or .obj
     * @see PShape
     * @see PApplet#createShape()
     * @return {PShape}
     */
    loadShape(filename : string) : PShape;

    /**
     * @nowebref
     * @param {string} filename
     * @param {string} options
     * @return {PShape}
     */
    loadShape(filename : string, options : string) : PShape;

    /**
     * @webref shape
     * @see PShape
     * @see PShape#endShape()
     * @see PApplet#loadShape(String)
     * @return {PShape}
     */
    createShape() : PShape;

    createShape(type : number) : PShape;

    /**
     * @param {number} kind either POINT, LINE, TRIANGLE, QUAD, RECT, ELLIPSE, ARC, BOX,
     * SPHERE
     * @param {Array} p    parameters that match the kind of shape
     * @return {PShape}
     */
    createShape(kind : number, ...p : number[]) : PShape;

    /**
     * ( begin auto-generated from resetShader.xml )
     * 
     * This is a new reference entry for Processing 2.0. It will be updated shortly.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering:shaders
     */
    resetShader();

    /**
     * @param {number} kind type of shader, either POINTS, LINES, or TRIANGLES
     */
    resetShader(kind : number);

    /**
     * ( begin auto-generated from clip.xml )
     * 
     * Limits the rendering to the boundaries of a rectangle defined by the
     * parameters. The boundaries are drawn based on the state of the
     * <b>imageMode()</b> fuction, either CORNER, CORNERS, or CENTER.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     * @param {number} a x-coordinate of the rectangle, by default
     * @param {number} b y-coordinate of the rectangle, by default
     * @param {number} c width of the rectangle, by default
     * @param {number} d height of the rectangle, by default
     */
    clip(a : number, b : number, c : number, d : number);

    /**
     * ( begin auto-generated from noClip.xml )
     * 
     * Disables the clipping previously started by the <b>clip()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     */
    noClip();

    /**
     * ( begin auto-generated from blendMode.xml )
     * 
     * This is a new reference entry for Processing 2.0. It will be updated shortly.
     * 
     * ( end auto-generated )
     * 
     * @webref rendering
     * @param {number} mode the blending mode to use
     */
    blendMode(mode : number);

    bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from bezierVertex.xml )
     * 
     * Specifies vertex coordinates for Bezier curves. Each call to
     * <b>bezierVertex()</b> defines the position of two control points and one
     * anchor point of a Bezier curve, adding a new segment to a line or shape. The
     * first time <b>bezierVertex()</b> is used within a <b>beginShape()</b> call,
     * it must be prefaced with a call to <b>vertex()</b> to set the first anchor
     * point. This function must be used between <b>beginShape()</b> and
     * <b>endShape()</b> and only when there is no MODE parameter specified to
     * <b>beginShape()</b>. Using the 3D version requires rendering with P3D (see
     * the Environment reference for more information).
     * 
     * ( end auto-generated )
     * 
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
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * @webref shape:vertex
     * @param {number} cx the x-coordinate of the control point
     * @param {number} cy the y-coordinate of the control point
     * @param {number} x3 the x-coordinate of the anchor point
     * @param {number} y3 the y-coordinate of the anchor point
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    /**
     * @param {number} cz the z-coordinate of the control point
     * @param {number} z3 the z-coordinate of the anchor point
     * @param {number} cx
     * @param {number} cy
     * @param {number} x3
     * @param {number} y3
     */
    quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    /**
     * ( begin auto-generated from curveVertex.xml )
     * 
     * Specifies vertex coordinates for curves. This function may only be used
     * between <b>beginShape()</b> and <b>endShape()</b> and only when there is no
     * MODE parameter specified to <b>beginShape()</b>. The first and last points in
     * a series of <b>curveVertex()</b> lines will be used to guide the beginning
     * and end of a the curve. A minimum of four points is required to draw a tiny
     * curve between the second and third points. Adding a fifth point with
     * <b>curveVertex()</b> will draw the curve between the second, third, and
     * fourth points. The <b>curveVertex()</b> function is an implementation of
     * Catmull-Rom splines. Using the 3D version requires rendering with P3D (see
     * the Environment reference for more information).
     * 
     * ( end auto-generated )
     * 
     * @webref shape:vertex
     * @param {number} x the x-coordinate of the vertex
     * @param {number} y the y-coordinate of the vertex
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#beginShape(int)
     * @see PGraphics#endShape(int)
     * @see PGraphics#vertex(float, float, float, float, float)
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#quadraticVertex(float, float, float, float, float, float)
     */
    curveVertex(x : number, y : number);

    /**
     * @param {number} z the z-coordinate of the vertex
     * @param {number} x
     * @param {number} y
     */
    curveVertex(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from point.xml )
     * 
     * Draws a point, a coordinate in space at the dimension of one pixel. The first
     * parameter is the horizontal value for the point, the second value is the
     * vertical value for the point, and the optional third value is the depth
     * value. Drawing this shape in 3D with the <b>z</b> parameter requires the P3D
     * parameter in combination with <b>size()</b> as shown in the above example.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} x x-coordinate of the point
     * @param {number} y y-coordinate of the point
     * @see PGraphics#stroke(int)
     */
    point(x : number, y : number);

    /**
     * @param {number} z z-coordinate of the point
     * @param {number} x
     * @param {number} y
     */
    point(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from line.xml )
     * 
     * Draws a line (a direct path between two points) to the screen. The version of
     * <b>line()</b> with four parameters draws the line in 2D. To color a line, use
     * the <b>stroke()</b> function. A line cannot be filled, therefore the
     * <b>fill()</b> function will not affect the color of a line. 2D lines are
     * drawn with a width of one pixel by default, but this can be changed with the
     * <b>strokeWeight()</b> function. The version with six parameters allows the
     * line to be placed anywhere within XYZ space. Drawing this shape in 3D with
     * the <b>z</b> parameter requires the P3D parameter in combination with
     * <b>size()</b> as shown in the above example.
     * 
     * ( end auto-generated )
     * 
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
    line(x1 : number, y1 : number, x2 : number, y2 : number);

    /**
     * @param {number} z1 z-coordinate of the first point
     * @param {number} z2 z-coordinate of the second point
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    line(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number);

    /**
     * ( begin auto-generated from triangle.xml )
     * 
     * A triangle is a plane created by connecting three points. The first two
     * arguments specify the first point, the middle two arguments specify the
     * second point, and the last two arguments specify the third point.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} x1 x-coordinate of the first point
     * @param {number} y1 y-coordinate of the first point
     * @param {number} x2 x-coordinate of the second point
     * @param {number} y2 y-coordinate of the second point
     * @param {number} x3 x-coordinate of the third point
     * @param {number} y3 y-coordinate of the third point
     * @see PApplet#beginShape()
     */
    triangle(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number);

    /**
     * ( begin auto-generated from quad.xml )
     * 
     * A quad is a quadrilateral, a four sided polygon. It is similar to a
     * rectangle, but the angles between its edges are not constrained to ninety
     * degrees. The first pair of parameters (x1,y1) sets the first vertex and the
     * subsequent pairs should proceed clockwise or counter-clockwise around the
     * defined shape.
     * 
     * ( end auto-generated )
     * 
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
    quad(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from rectMode.xml )
     * 
     * Modifies the location from which rectangles draw. The default mode is
     * <b>rectMode(CORNER)</b>, which specifies the location to be the upper left
     * corner of the shape and uses the third and fourth parameters of <b>rect()</b>
     * to specify the width and height. The syntax <b>rectMode(CORNERS)</b> uses the
     * first and second parameters of <b>rect()</b> to set the location of one
     * corner and uses the third and fourth parameters to set the opposite corner.
     * The syntax <b>rectMode(CENTER)</b> draws the image from its center point and
     * uses the third and forth parameters of <b>rect()</b> to specify the image's
     * width and height. The syntax <b>rectMode(RADIUS)</b> draws the image from its
     * center point and uses the third and forth parameters of <b>rect()</b> to
     * specify half of the image's width and height. The parameter must be written
     * in ALL CAPS because Processing is a case sensitive language. Note: In version
     * 125, the mode named CENTER_RADIUS was shortened to RADIUS.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} mode either CORNER, CORNERS, CENTER, or RADIUS
     * @see PGraphics#rect(float, float, float, float)
     */
    rectMode(mode : number);

    /**
     * ( begin auto-generated from rect.xml )
     * 
     * Draws a rectangle to the screen. A rectangle is a four-sided shape with every
     * angle at ninety degrees. By default, the first two parameters set the
     * location of the upper-left corner, the third sets the width, and the fourth
     * sets the height. These parameters may be changed with the <b>rectMode()</b>
     * function.
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
    rect(a : number, b : number, c : number, d : number);

    /**
     * @param {number} r radii for all four corners
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    rect(a : number, b : number, c : number, d : number, r : number);

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
    rect(a : number, b : number, c : number, d : number, tl : number, tr : number, br : number, bl : number);

    /**
     * ( begin auto-generated from ellipseMode.xml )
     * 
     * The origin of the ellipse is modified by the <b>ellipseMode()</b> function.
     * The default configuration is <b>ellipseMode(CENTER)</b>, which specifies the
     * location of the ellipse as the center of the shape. The <b>RADIUS</b> mode is
     * the same, but the width and height parameters to <b>ellipse()</b> specify the
     * radius of the ellipse, rather than the diameter. The <b>CORNER</b> mode draws
     * the shape from the upper-left corner of its bounding box. The <b>CORNERS</b>
     * mode uses the four parameters to <b>ellipse()</b> to set two opposing corners
     * of the ellipse's bounding box. The parameter must be written in ALL CAPS
     * because Processing is a case-sensitive language.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} mode either CENTER, RADIUS, CORNER, or CORNERS
     * @see PApplet#ellipse(float, float, float, float)
     * @see PApplet#arc(float, float, float, float, float, float)
     */
    ellipseMode(mode : number);

    /**
     * ( begin auto-generated from ellipse.xml )
     * 
     * Draws an ellipse (oval) in the display window. An ellipse with an equal
     * <b>width</b> and <b>height</b> is a circle. The first two parameters set the
     * location, the third sets the width, and the fourth sets the height. The
     * origin may be changed with the <b>ellipseMode()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} a x-coordinate of the ellipse
     * @param {number} b y-coordinate of the ellipse
     * @param {number} c width of the ellipse by default
     * @param {number} d height of the ellipse by default
     * @see PApplet#ellipseMode(int)
     * @see PApplet#arc(float, float, float, float, float, float)
     */
    ellipse(a : number, b : number, c : number, d : number);

    /**
     * ( begin auto-generated from arc.xml )
     * 
     * Draws an arc in the display window. Arcs are drawn along the outer edge of an
     * ellipse defined by the <b>x</b>, <b>y</b>, <b>width</b> and <b>height</b>
     * parameters. The origin or the arc's ellipse may be changed with the
     * <b>ellipseMode()</b> function. The <b>start</b> and <b>stop</b> parameters
     * specify the angles at which to draw the arc.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:2d_primitives
     * @param {number} a     x-coordinate of the arc's ellipse
     * @param {number} b     y-coordinate of the arc's ellipse
     * @param {number} c     width of the arc's ellipse by default
     * @param {number} d     height of the arc's ellipse by default
     * @param {number} start angle to start the arc, specified in radians
     * @param {number} stop  angle to stop the arc, specified in radians
     * @see PApplet#ellipse(float, float, float, float)
     * @see PApplet#ellipseMode(int)
     * @see PApplet#radians(float)
     * @see PApplet#degrees(float)
     */
    arc(a : number, b : number, c : number, d : number, start : number, stop : number);

    arc(a : number, b : number, c : number, d : number, start : number, stop : number, mode : number);

    /**
     * ( begin auto-generated from box.xml )
     * 
     * A box is an extruded rectangle. A box with equal dimension on all sides is a
     * cube.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:3d_primitives
     * @param {number} size dimension of the box in all dimensions (creates a cube)
     * @see PGraphics#sphere(float)
     */
    box(size : number);

    /**
     * @param {number} w dimension of the box in the x-dimension
     * @param {number} h dimension of the box in the y-dimension
     * @param {number} d dimension of the box in the z-dimension
     */
    box(w : number, h : number, d : number);

    /**
     * ( begin auto-generated from sphereDetail.xml )
     * 
     * Controls the detail used to render a sphere by adjusting the number of
     * vertices of the sphere mesh. The default resolution is 30, which creates a
     * fairly detailed sphere definition with vertices every 360/30 = 12 degrees. If
     * you're going to render a great number of spheres per frame, it is advised to
     * reduce the level of detail using this function. The setting stays active
     * until <b>sphereDetail()</b> is called again with a new parameter and so
     * should <i>not</i> be called prior to every <b>sphere()</b> statement, unless
     * you wish to render spheres with different settings, e.g. using less detail
     * for smaller spheres or ones further away from the camera. To control the
     * detail of the horizontal and vertical resolution independently, use the
     * version of the functions with two parameters.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Code for sphereDetail() submitted by toxi [031031]. Code
     * for enhanced u/v version from davbol [080801].
     * 
     * @param {number} res number of segments (minimum 3) used per full circle revolution
     * @webref shape:3d_primitives
     * @see PGraphics#sphere(float)
     */
    sphereDetail(res : number);

    /**
     * @param {number} ures number of segments used longitudinally per full circle revolutoin
     * @param {number} vres number of segments used latitudinally from top to bottom
     */
    sphereDetail(ures : number, vres : number);

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
     * cache all the points of the sphere in a static array top and bottom are just
     * a bunch of triangles that land in the center point
     * <P>
     * sphere is a series of concentric circles who radii vary along the shape,
     * based on, er.. cos or something
     * 
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
    sphere(r : number);

    /**
     * ( begin auto-generated from bezierPoint.xml )
     * 
     * Evaluates the Bezier at point t for points a, b, c, d. The parameter t varies
     * between 0 and 1, a and d are points on the curve, and b and c are the control
     * points. This can be done once with the x coordinates and a second time with
     * the y coordinates to get the location of a bezier curve at t.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> For instance, to convert the following example:
     * 
     * <PRE>
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
     * endShape();
     * </PRE>
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @return {number}
     */
    bezierPoint(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from bezierTangent.xml )
     * 
     * Calculates the tangent of a point on a Bezier curve. There is a good
     * definition of
     * <a href="http://en.wikipedia.org/wiki/Tangent" target="new"><em>tangent</em>
     * on Wikipedia</a>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Code submitted by Dave Bollinger (davol) for release 0136.
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#bezierVertex(float, float, float, float, float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @return {number}
     */
    bezierTangent(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from bezierDetail.xml )
     * 
     * Sets the resolution at which Beziers display. The default value is 20. This
     * function is only useful when using the P3D renderer as the default P2D
     * renderer does not use this information.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} detail resolution of the curves
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#curveTightness(float)
     */
    bezierDetail(detail : number);

    bezier(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * ( begin auto-generated from bezier.xml )
     * 
     * Draws a Bezier curve on the screen. These curves are defined by a series of
     * anchor and control points. The first two parameters specify the first anchor
     * point and the last two parameters specify the other anchor point. The middle
     * parameters specify the control points which define the shape of the curve.
     * Bezier curves were developed by French engineer Pierre Bezier. Using the 3D
     * version requires rendering with P3D (see the Environment reference for more
     * information).
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Draw a cubic bezier curve. The first and last points are
     * the on-curve points. The middle two are the 'control' points, or 'handles' in
     * an application like Illustrator.
     * <P>
     * Identical to typing:
     * 
     * <PRE>
     * beginShape();
     * vertex(x1, y1);
     * bezierVertex(x2, y2, x3, y3, x4, y4);
     * endShape();
     * </PRE>
     * 
     * In Postscript-speak, this would be:
     * 
     * <PRE>
     * moveto(x1, y1);
     * curveto(x2, y2, x3, y3, x4, y4);
     * </PRE>
     * 
     * If you were to try and continue that curve like so:
     * 
     * <PRE>
     * curveto(x5, y5, x6, y6, x7, y7);
     * </PRE>
     * 
     * This would be done in processing by adding these statements:
     * 
     * <PRE>
     * bezierVertex(x5, y5, x6, y6, x7, y7)
     * </PRE>
     * 
     * To draw a quadratic (instead of cubic) curve, use the control point twice by
     * doubling it:
     * 
     * <PRE>
     * bezier(x1, y1, cx, cy, cx, cy, x2, y2);
     * </PRE>
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
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    bezier(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * ( begin auto-generated from curvePoint.xml )
     * 
     * Evalutes the curve at point t for points a, b, c, d. The parameter t varies
     * between 0 and 1, a and d are points on the curve, and b and c are the control
     * points. This can be done once with the x coordinates and a second time with
     * the y coordinates to get the location of a curve at t.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of second point on the curve
     * @param {number} c coordinate of third point on the curve
     * @param {number} d coordinate of fourth point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#bezierPoint(float, float, float, float, float)
     * @return {number}
     */
    curvePoint(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from curveTangent.xml )
     * 
     * Calculates the tangent of a point on a curve. There's a good definition of
     * <em><a href="http://en.wikipedia.org/wiki/Tangent" target="new">tangent</em>
     * on Wikipedia</a>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Code thanks to Dave Bollinger (Bug #715)
     * 
     * @webref shape:curves
     * @param {number} a coordinate of first point on the curve
     * @param {number} b coordinate of first control point
     * @param {number} c coordinate of second control point
     * @param {number} d coordinate of second point on the curve
     * @param {number} t value between 0 and 1
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @see PGraphics#bezierTangent(float, float, float, float, float)
     * @return {number}
     */
    curveTangent(a : number, b : number, c : number, d : number, t : number) : number;

    /**
     * ( begin auto-generated from curveDetail.xml )
     * 
     * Sets the resolution at which curves display. The default value is 20. This
     * function is only useful when using the P3D renderer as the default P2D
     * renderer does not use this information.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} detail resolution of the curves
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#curveTightness(float)
     */
    curveDetail(detail : number);

    /**
     * ( begin auto-generated from curveTightness.xml )
     * 
     * Modifies the quality of forms created with <b>curve()</b> and
     * <b>curveVertex()</b>. The parameter <b>squishy</b> determines how the curve
     * fits to the vertex points. The value 0.0 is the default value for
     * <b>squishy</b> (this value defines the curves to be Catmull-Rom splines) and
     * the value 1.0 connects all the points with straight lines. Values within the
     * range -5.0 and 5.0 will deform the curves but will leave them recognizable
     * and as values increase in magnitude, they will continue to deform.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} tightness amount of deformation from the original vertices
     * @see PGraphics#curve(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     */
    curveTightness(tightness : number);

    /**
     * ( begin auto-generated from curve.xml )
     * 
     * Draws a curved line on the screen. The first and second parameters specify
     * the beginning control point and the last two parameters specify the ending
     * control point. The middle parameters specify the start and stop of the curve.
     * Longer curves can be created by putting a series of <b>curve()</b> functions
     * together or using <b>curveVertex()</b>. An additional function called
     * <b>curveTightness()</b> provides control for the visual quality of the curve.
     * The <b>curve()</b> function is an implementation of Catmull-Rom splines.
     * Using the 3D version requires rendering with P3D (see the Environment
     * reference for more information).
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> As of revision 0070, this function no longer doubles the
     * first and last points. The curves are a bit more boring, but it's more
     * mathematically correct, and properly mirrored in curvePoint().
     * <P>
     * Identical to typing out:
     * 
     * <PRE>
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
     * @see PGraphics#bezier(float, float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    curve(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

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
    curve(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * ( begin auto-generated from imageMode.xml )
     * 
     * Modifies the location from which images draw. The default mode is
     * <b>imageMode(CORNER)</b>, which specifies the location to be the upper left
     * corner and uses the fourth and fifth parameters of <b>image()</b> to set the
     * image's width and height. The syntax <b>imageMode(CORNERS)</b> uses the
     * second and third parameters of <b>image()</b> to set the location of one
     * corner of the image and uses the fourth and fifth parameters to set the
     * opposite corner. Use <b>imageMode(CENTER)</b> to draw images centered at the
     * given x and y position.<br />
     * <br />
     * The parameter to <b>imageMode()</b> must be written in ALL CAPS because
     * Processing is a case-sensitive language.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @param {number} mode either CORNER, CORNERS, or CENTER
     * @see PApplet#loadImage(String, String)
     * @see PImage
     * @see PGraphics#image(PImage, float, float, float, float)
     * @see PGraphics#background(float, float, float, float)
     */
    imageMode(mode : number);

    /**
     * ( begin auto-generated from image.xml )
     * 
     * Displays images to the screen. The images must be in the sketch's "data"
     * directory to load correctly. Select "Add file..." from the "Sketch" menu to
     * add the image. Processing currently works with GIF, JPEG, and Targa images.
     * The <b>img</b> parameter specifies the image to display and the <b>x</b> and
     * <b>y</b> parameters define the location of the image from its upper-left
     * corner. The image is displayed at its original size unless the <b>width</b>
     * and <b>height</b> parameters specify a different size.<br />
     * <br />
     * The <b>imageMode()</b> function changes the way the parameters work. For
     * example, a call to <b>imageMode(CORNERS)</b> will change the <b>width</b> and
     * <b>height</b> parameters to define the x and y values of the opposite corner
     * of the image.<br />
     * <br />
     * The color of an image may be modified with the <b>tint()</b> function. This
     * function will maintain transparency for GIF and PNG images.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Starting with release 0124, when using the default (JAVA2D)
     * renderer, smooth() will also improve image quality of resized images.
     * 
     * @webref image:loading_displaying
     * @param {PImage} img the image to display
     * @param {number} a   x-coordinate of the image by default
     * @param {number} b   y-coordinate of the image by default
     * @see PApplet#loadImage(String, String)
     * @see PImage
     * @see PGraphics#imageMode(int)
     * @see PGraphics#tint(float)
     * @see PGraphics#background(float, float, float, float)
     * @see PGraphics#alpha(int)
     */
    image(img : PImage, a : number, b : number);

    /**
     * @param {*} img A PImage like object (candy-processing-webcam:Capture is one for
     * instance)
     * @see PApplet#image(PImage, float, float)
     * @param {number} a
     * @param {number} b
     */
    image(img : PApplet.PImageLike, a : number, b : number);

    /**
     * @param {number} c width to display the image by default
     * @param {number} d height to display the image by default
     * @param {PImage} img
     * @param {number} a
     * @param {number} b
     */
    image(img : PImage, a : number, b : number, c : number, d : number);

    /**
     * @param {*} img A PImage like object (candy-processing-webcam:Capture is one for
     * instance)
     * @see PApplet#image(PImage, float, float, float, float)
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     */
    image(img : PApplet.PImageLike, a : number, b : number, c : number, d : number);

    /**
     * Draw an image(), also specifying u/v coordinates. In this method, the u, v
     * coordinates are always based on image space location, regardless of the
     * current textureMode().
     * @param {PImage} img
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} u1
     * @param {number} v1
     * @param {number} u2
     * @param {number} v2
     */
    image(img : PImage, a : number, b : number, c : number, d : number, u1 : number, v1 : number, u2 : number, v2 : number);

    /**
     * @param {*} img A PImage like object (candy-processing-webcam:Capture is one for
     * instance)
     * @see PApplet#image(PImageLike, float, float, float, float, int, int, int,
     * int)
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} u1
     * @param {number} v1
     * @param {number} u2
     * @param {number} v2
     */
    image(img : PApplet.PImageLike, a : number, b : number, c : number, d : number, u1 : number, v1 : number, u2 : number, v2 : number);

    /**
     * ( begin auto-generated from shapeMode.xml )
     * 
     * Modifies the location from which shapes draw. The default mode is
     * <b>shapeMode(CORNER)</b>, which specifies the location to be the upper left
     * corner of the shape and uses the third and fourth parameters of
     * <b>shape()</b> to specify the width and height. The syntax
     * <b>shapeMode(CORNERS)</b> uses the first and second parameters of
     * <b>shape()</b> to set the location of one corner and uses the third and
     * fourth parameters to set the opposite corner. The syntax
     * <b>shapeMode(CENTER)</b> draws the shape from its center point and uses the
     * third and forth parameters of <b>shape()</b> to specify the width and height.
     * The parameter must be written in "ALL CAPS" because Processing is a case
     * sensitive language.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:loading_displaying
     * @param {number} mode either CORNER, CORNERS, CENTER
     * @see PShape
     * @see PGraphics#shape(PShape)
     * @see PGraphics#rectMode(int)
     */
    shapeMode(mode : number);

    shape(shape : PShape);

    /**
     * ( begin auto-generated from shape.xml )
     * 
     * Displays shapes to the screen. The shapes must be in the sketch's "data"
     * directory to load correctly. Select "Add file..." from the "Sketch" menu to
     * add the shape. Processing currently works with SVG shapes only. The <b>sh</b>
     * parameter specifies the shape to display and the <b>x</b> and <b>y</b>
     * parameters define the location of the shape from its upper-left corner. The
     * shape is displayed at its original size unless the <b>width</b> and
     * <b>height</b> parameters specify a different size. The <b>shapeMode()</b>
     * function changes the way the parameters work. A call to
     * <b>shapeMode(CORNERS)</b>, for example, will change the width and height
     * parameters to define the x and y values of the opposite corner of the shape.
     * <br />
     * <br />
     * Note complex shapes may draw awkwardly with P3D. This renderer does not yet
     * support shapes that have holes or complicated breaks.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:loading_displaying
     * @param {PShape} shape the shape to display
     * @param {number} x     x-coordinate of the shape
     * @param {number} y     y-coordinate of the shape
     * @see PShape
     * @see PApplet#loadShape(String)
     * @see PGraphics#shapeMode(int)
     * 
     * Convenience method to draw at a particular location.
     */
    shape(shape : PShape, x : number, y : number);

    /**
     * @param {number} a x-coordinate of the shape
     * @param {number} b y-coordinate of the shape
     * @param {number} c width to display the shape
     * @param {number} d height to display the shape
     * @param {PShape} shape
     */
    shape(shape : PShape, a : number, b : number, c : number, d : number);

    textAlign(alignX : number);

    /**
     * ( begin auto-generated from textAlign.xml )
     * 
     * Sets the current alignment for drawing text. The parameters LEFT, CENTER, and
     * RIGHT set the display characteristics of the letters in relation to the
     * values for the <b>x</b> and <b>y</b> parameters of the <b>text()</b>
     * function. <br/>
     * <br/>
     * In Processing 0125 and later, an optional second parameter can be used to
     * vertically align the text. BASELINE is the default, and the vertical
     * alignment will be reset to BASELINE if the second parameter is not used. The
     * TOP and CENTER parameters are straightforward. The BOTTOM parameter offsets
     * the line based on the current <b>textDescent()</b>. For multiple lines, the
     * final line will be aligned to the bottom, with the previous lines appearing
     * above it. <br/>
     * <br/>
     * When using <b>text()</b> with width and height parameters, BASELINE is
     * ignored, and treated as TOP. (Otherwise, text would by default draw outside
     * the box, since BASELINE is the default setting. BASELINE is not a useful
     * drawing mode for text drawn in a rectangle.) <br/>
     * <br/>
     * The vertical alignment is based on the value of <b>textAscent()</b>, which
     * many fonts do not specify correctly. It may be necessary to use a hack and
     * offset by a few pixels by hand so that the offset looks correct. To do this
     * as less of a hack, use some percentage of <b>textAscent()</b> or
     * <b>textDescent()</b> so that the hack works even if you change the size of
     * the font.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:attributes
     * @param {number} alignX horizontal alignment, either LEFT, CENTER, or RIGHT
     * @param {number} alignY vertical alignment, either TOP, BOTTOM, CENTER, or BASELINE
     * @see PApplet#loadFont(String)
     * @see PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textSize(float)
     * @see PGraphics#textAscent()
     * @see PGraphics#textDescent()
     */
    textAlign(alignX : number, alignY : number);

    /**
     * ( begin auto-generated from textAscent.xml )
     * 
     * Returns ascent of the current font at its current size. This information is
     * useful for determining the height of the font above the baseline. For
     * example, adding the <b>textAscent()</b> and <b>textDescent()</b> values will
     * give you the total height of the line.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:metrics
     * @see PGraphics#textDescent()
     * @return {number}
     */
    textAscent() : number;

    /**
     * ( begin auto-generated from textDescent.xml )
     * 
     * Returns descent of the current font at its current size. This information is
     * useful for determining the height of the font below the baseline. For
     * example, adding the <b>textAscent()</b> and <b>textDescent()</b> values will
     * give you the total height of the line.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:metrics
     * @see PGraphics#textAscent()
     * @return {number}
     */
    textDescent() : number;

    /**
     * ( begin auto-generated from textFont.xml )
     * 
     * Sets the current font that will be drawn with the <b>text()</b> function.
     * Fonts must be loaded with <b>loadFont()</b> before it can be used. This font
     * will be used in all subsequent calls to the <b>text()</b> function. If no
     * <b>size</b> parameter is input, the font will appear at its original size
     * (the size it was created at with the "Create Font..." tool) until it is
     * changed with <b>textSize()</b>. <br />
     * <br />
     * Because fonts are usually bitmaped, you should create fonts at the sizes that
     * will be used most commonly. Using <b>textFont()</b> without the size
     * parameter will result in the cleanest-looking text. <br />
     * <br />
     * With the default (JAVA2D) and PDF renderers, it's also possible to enable the
     * use of native fonts via the command <b>hint(ENABLE_NATIVE_FONTS)</b>. This
     * will produce vector text in JAVA2D sketches and PDF output in cases where the
     * vector data is available: when the font is still installed, or the font is
     * created via the <b>createFont()</b> function (rather than the Create Font
     * tool).
     * 
     * ( end auto-generated )
     * 
     * @webref typography:loading_displaying
     * @param {PFont} which any variable of the type PFont
     * @see PApplet#createFont(String, float, boolean)
     * @see PApplet#loadFont(String)
     * @see PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textSize(float)
     */
    textFont(which : PFont);

    /**
     * @param {number} size the size of the letters in units of pixels
     * @param {PFont} which
     */
    textFont(which : PFont, size : number);

    /**
     * ( begin auto-generated from textLeading.xml )
     * 
     * Sets the spacing between lines of text in units of pixels. This setting will
     * be used in all subsequent calls to the <b>text()</b> function.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:attributes
     * @param {number} leading the size in pixels for spacing between lines
     * @see PApplet#loadFont(String)
     * @see PFont#PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textFont(PFont)
     * @see PGraphics#textSize(float)
     */
    textLeading(leading : number);

    /**
     * ( begin auto-generated from textMode.xml )
     * 
     * Sets the way text draws to the screen. In the default configuration, the
     * <b>MODEL</b> mode, it's possible to rotate, scale, and place letters in two
     * and three dimensional space.<br />
     * <br />
     * The <b>SHAPE</b> mode draws text using the the glyph outlines of individual
     * characters rather than as textures. This mode is only supported with the
     * <b>PDF</b> and <b>P3D</b> renderer settings. With the <b>PDF</b> renderer,
     * you must call <b>textMode(SHAPE)</b> before any other drawing occurs. If the
     * outlines are not available, then <b>textMode(SHAPE)</b> will be ignored and
     * <b>textMode(MODEL)</b> will be used instead.<br />
     * <br />
     * The <b>textMode(SHAPE)</b> option in <b>P3D</b> can be combined with
     * <b>beginRaw()</b> to write vector-accurate text to 2D and 3D output files,
     * for instance <b>DXF</b> or <b>PDF</b>. The <b>SHAPE</b> mode is not currently
     * optimized for <b>P3D</b>, so if recording shape data, use
     * <b>textMode(MODEL)</b> until you're ready to capture the geometry with
     * <b>beginRaw()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:attributes
     * @param {number} mode either MODEL or SHAPE
     * @see PApplet#loadFont(String)
     * @see PFont#PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textFont(PFont)
     * @see PGraphics#beginRaw(PGraphics)
     * @see PApplet#createFont(String, float, boolean)
     */
    textMode(mode : number);

    /**
     * ( begin auto-generated from textSize.xml )
     * 
     * Sets the current font size. This size will be used in all subsequent calls to
     * the <b>text()</b> function. Font size is measured in units of pixels.
     * 
     * ( end auto-generated )
     * 
     * @webref typography:attributes
     * @param {number} size the size of the letters in units of pixels
     * @see PApplet#loadFont(String)
     * @see PFont#PFont
     * @see PGraphics#text(String, float, float)
     * @see PGraphics#textFont(PFont)
     */
    textSize(size : number);

    /**
     * @param {string} c the character to measure
     * @return {number}
     */
    textWidth(c : string) : number;

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
    textWidth(str : string) : number;

    /**
     * @nowebref
     * @param {Array} chars
     * @param {number} start
     * @param {number} length
     * @return {number}
     */
    textWidth(chars : string[], start : number, length : number) : number;

    /**
     * ( begin auto-generated from text.xml )
     * 
     * Draws text to the screen. Displays the information specified in the
     * <b>data</b> or <b>stringdata</b> parameters on the screen in the position
     * specified by the <b>x</b> and <b>y</b> parameters and the optional <b>z</b>
     * parameter. A default font will be used unless a font is set with the
     * <b>textFont()</b> function. Change the color of the text with the
     * <b>fill()</b> function. The text displays in relation to the
     * <b>textAlign()</b> function, which gives the option to draw to the left,
     * right, and center of the coordinates. <br />
     * <br />
     * The <b>x2</b> and <b>y2</b> parameters define a rectangular area to display
     * within and may only be used with string data. For text drawn inside a
     * rectangle, the coordinates are interpreted based on the current
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
    text(c : string, x : number, y : number);

    /**
     * @param {number} z z-coordinate of text
     * @param {string} c
     * @param {number} x
     * @param {number} y
     */
    text(c : string, x : number, y : number, z : number);

    /**
     * <h3>Advanced</h3> Draw a chunk of text. Newlines that are \n (Unix newline or
     * linefeed char, ascii 10) are honored, but \r (carriage return, Windows and
     * Mac OS) are ignored.
     * @param {string} str
     * @param {number} x
     * @param {number} y
     */
    text(str : string, x : number, y : number);

    /**
     * <h3>Advanced</h3> Method to draw text from an array of chars. This method
     * will usually be more efficient than drawing from a String object, because the
     * String will not be converted to a char array before drawing.
     * 
     * @param {Array} chars the alphanumberic symbols to be displayed
     * @param {number} start array index at which to start writing characters
     * @param {number} stop  array index at which to stop writing characters
     * @param {number} x
     * @param {number} y
     */
    text(chars : string[], start : number, stop : number, x : number, y : number);

    /**
     * Same as above but with a z coordinate.
     * @param {string} str
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    text(str : string, x : number, y : number, z : number);

    text(chars : string[], start : number, stop : number, x : number, y : number, z : number);

    /**
     * <h3>Advanced</h3> Draw text in a box that is constrained to a particular
     * size. The current rectMode() determines what the coordinates mean (whether
     * x1/y1/x2/y2 or x/y/w/h).
     * <P/>
     * Note that the x,y coords of the start of the box will align with the *ascent*
     * of the text, not the baseline, as is the case for the other text() functions.
     * <P/>
     * Newlines that are \n (Unix newline or linefeed char, ascii 10) are honored,
     * and \r (carriage return, Windows and Mac OS) are ignored.
     * 
     * @param {number} x1 by default, the x-coordinate of text, see rectMode() for more info
     * @param {number} y1 by default, the y-coordinate of text, see rectMode() for more info
     * @param {number} x2 by default, the width of the text box, see rectMode() for more info
     * @param {number} y2 by default, the height of the text box, see rectMode() for more
     * info
     * @param {string} str
     */
    text(str : string, x1 : number, y1 : number, x2 : number, y2 : number);

    text(num : number, x : number, y : number);

    text(num : number, x : number, y : number, z : number);

    /**
     * This does a basic number formatting, to avoid the generally ugly appearance
     * of printing floats. Users who want more control should use their own nf()
     * cmmand, or if they want the long, ugly version of float, use String.valueOf()
     * to convert the float to a String first.
     * 
     * @param {number} num the numeric value to be displayed
     * @param {number} x
     * @param {number} y
     */
    text(num : number, x : number, y : number);

    text(num : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from pushMatrix.xml )
     * 
     * Pushes the current transformation matrix onto the matrix stack. Understanding
     * <b>pushMatrix()</b> and <b>popMatrix()</b> requires understanding the concept
     * of a matrix stack. The <b>pushMatrix()</b> function saves the current
     * coordinate system to the stack and <b>popMatrix()</b> restores the prior
     * coordinate system. <b>pushMatrix()</b> and <b>popMatrix()</b> are used in
     * conjuction with the other transformation functions and may be embedded to
     * control the scope of the transformations.
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
    pushMatrix();

    /**
     * ( begin auto-generated from popMatrix.xml )
     * 
     * Pops the current transformation matrix off the matrix stack. Understanding
     * pushing and popping requires understanding the concept of a matrix stack. The
     * <b>pushMatrix()</b> function saves the current coordinate system to the stack
     * and <b>popMatrix()</b> restores the prior coordinate system.
     * <b>pushMatrix()</b> and <b>popMatrix()</b> are used in conjuction with the
     * other transformation functions and may be embedded to control the scope of
     * the transformations.
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     */
    popMatrix();

    /**
     * ( begin auto-generated from translate.xml )
     * 
     * Specifies an amount to displace objects within the display window. The
     * <b>x</b> parameter specifies left/right translation, the <b>y</b> parameter
     * specifies up/down translation, and the <b>z</b> parameter specifies
     * translations toward/away from the screen. Using this function with the
     * <b>z</b> parameter requires using P3D as a parameter in combination with size
     * as shown in the above example. Transformations apply to everything that
     * happens after and subsequent calls to the function accumulates the effect.
     * For example, calling <b>translate(50, 0)</b> and then <b>translate(20, 0)</b>
     * is the same as <b>translate(70, 0)</b>. If <b>translate()</b> is called
     * within <b>draw()</b>, the transformation is reset when the loop begins again.
     * This function can be further controlled by the <b>pushMatrix()</b> and
     * <b>popMatrix()</b>.
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
    translate(x : number, y : number);

    /**
     * @param {number} z forward/backward translation
     * @param {number} x
     * @param {number} y
     */
    translate(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from rotate.xml )
     * 
     * Rotates a shape the amount specified by the <b>angle</b> parameter. Angles
     * should be specified in radians (values from 0 to TWO_PI) or converted to
     * radians with the <b>radians()</b> function. <br/>
     * <br/>
     * Objects are always rotated around their relative position to the origin and
     * positive numbers rotate objects in a clockwise direction. Transformations
     * apply to everything that happens after and subsequent calls to the function
     * accumulates the effect. For example, calling <b>rotate(HALF_PI)</b> and then
     * <b>rotate(HALF_PI)</b> is the same as <b>rotate(PI)</b>. All tranformations
     * are reset when <b>draw()</b> begins again. <br/>
     * <br/>
     * Technically, <b>rotate()</b> multiplies the current transformation matrix by
     * a rotation matrix. This function can be further controlled by the
     * <b>pushMatrix()</b> and <b>popMatrix()</b>.
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
    rotate(angle : number);

    /**
     * ( begin auto-generated from rotateX.xml )
     * 
     * Rotates a shape around the x-axis the amount specified by the <b>angle</b>
     * parameter. Angles should be specified in radians (values from 0 to PI*2) or
     * converted to radians with the <b>radians()</b> function. Objects are always
     * rotated around their relative position to the origin and positive numbers
     * rotate objects in a counterclockwise direction. Transformations apply to
     * everything that happens after and subsequent calls to the function
     * accumulates the effect. For example, calling <b>rotateX(PI/2)</b> and then
     * <b>rotateX(PI/2)</b> is the same as <b>rotateX(PI)</b>. If <b>rotateX()</b>
     * is called within the <b>draw()</b>, the transformation is reset when the loop
     * begins again. This function requires using P3D as a third parameter to
     * <b>size()</b> as shown in the example above.
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
    rotateX(angle : number);

    /**
     * ( begin auto-generated from rotateY.xml )
     * 
     * Rotates a shape around the y-axis the amount specified by the <b>angle</b>
     * parameter. Angles should be specified in radians (values from 0 to PI*2) or
     * converted to radians with the <b>radians()</b> function. Objects are always
     * rotated around their relative position to the origin and positive numbers
     * rotate objects in a counterclockwise direction. Transformations apply to
     * everything that happens after and subsequent calls to the function
     * accumulates the effect. For example, calling <b>rotateY(PI/2)</b> and then
     * <b>rotateY(PI/2)</b> is the same as <b>rotateY(PI)</b>. If <b>rotateY()</b>
     * is called within the <b>draw()</b>, the transformation is reset when the loop
     * begins again. This function requires using P3D as a third parameter to
     * <b>size()</b> as shown in the examples above.
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
    rotateY(angle : number);

    /**
     * ( begin auto-generated from rotateZ.xml )
     * 
     * Rotates a shape around the z-axis the amount specified by the <b>angle</b>
     * parameter. Angles should be specified in radians (values from 0 to PI*2) or
     * converted to radians with the <b>radians()</b> function. Objects are always
     * rotated around their relative position to the origin and positive numbers
     * rotate objects in a counterclockwise direction. Transformations apply to
     * everything that happens after and subsequent calls to the function
     * accumulates the effect. For example, calling <b>rotateZ(PI/2)</b> and then
     * <b>rotateZ(PI/2)</b> is the same as <b>rotateZ(PI)</b>. If <b>rotateZ()</b>
     * is called within the <b>draw()</b>, the transformation is reset when the loop
     * begins again. This function requires using P3D as a third parameter to
     * <b>size()</b> as shown in the examples above.
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
    rotateZ(angle : number);

    /**
     * <h3>Advanced</h3> Rotate about a vector in space. Same as the glRotatef()
     * function.
     * 
     * @nowebref
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} angle
     */
    rotate(angle : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from scale.xml )
     * 
     * Increases or decreases the size of a shape by expanding and contracting
     * vertices. Objects always scale from their relative origin to the coordinate
     * system. Scale values are specified as decimal percentages. For example, the
     * function call <b>scale(2.0)</b> increases the dimension of a shape by 200%.
     * Transformations apply to everything that happens after and subsequent calls
     * to the function multiply the effect. For example, calling <b>scale(2.0)</b>
     * and then <b>scale(1.5)</b> is the same as <b>scale(3.0)</b>. If
     * <b>scale()</b> is called within <b>draw()</b>, the transformation is reset
     * when the loop begins again. Using this fuction with the <b>z</b> parameter
     * requires using P3D as a parameter for <b>size()</b> as shown in the example
     * above. This function can be further controlled by <b>pushMatrix()</b> and
     * <b>popMatrix()</b>.
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
    scale(s : number);

    /**
     * <h3>Advanced</h3> Scale in X and Y. Equivalent to scale(sx, sy, 1).
     * 
     * Not recommended for use in 3D, because the z-dimension is just scaled by 1,
     * since there's no way to know what else to scale it by.
     * 
     * @param {number} x percentage to scale the object in the x-axis
     * @param {number} y percentage to scale the object in the y-axis
     */
    scale(x : number, y : number);

    /**
     * @param {number} z percentage to scale the object in the z-axis
     * @param {number} x
     * @param {number} y
     */
    scale(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from shearX.xml )
     * 
     * Shears a shape around the x-axis the amount specified by the <b>angle</b>
     * parameter. Angles should be specified in radians (values from 0 to PI*2) or
     * converted to radians with the <b>radians()</b> function. Objects are always
     * sheared around their relative position to the origin and positive numbers
     * shear objects in a clockwise direction. Transformations apply to everything
     * that happens after and subsequent calls to the function accumulates the
     * effect. For example, calling <b>shearX(PI/2)</b> and then <b>shearX(PI/2)</b>
     * is the same as <b>shearX(PI)</b>. If <b>shearX()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again. <br/>
     * <br/>
     * Technically, <b>shearX()</b> multiplies the current transformation matrix by
     * a rotation matrix. This function can be further controlled by the
     * <b>pushMatrix()</b> and <b>popMatrix()</b> functions.
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
    shearX(angle : number);

    /**
     * ( begin auto-generated from shearY.xml )
     * 
     * Shears a shape around the y-axis the amount specified by the <b>angle</b>
     * parameter. Angles should be specified in radians (values from 0 to PI*2) or
     * converted to radians with the <b>radians()</b> function. Objects are always
     * sheared around their relative position to the origin and positive numbers
     * shear objects in a clockwise direction. Transformations apply to everything
     * that happens after and subsequent calls to the function accumulates the
     * effect. For example, calling <b>shearY(PI/2)</b> and then <b>shearY(PI/2)</b>
     * is the same as <b>shearY(PI)</b>. If <b>shearY()</b> is called within the
     * <b>draw()</b>, the transformation is reset when the loop begins again. <br/>
     * <br/>
     * Technically, <b>shearY()</b> multiplies the current transformation matrix by
     * a rotation matrix. This function can be further controlled by the
     * <b>pushMatrix()</b> and <b>popMatrix()</b> functions.
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
    shearY(angle : number);

    /**
     * ( begin auto-generated from resetMatrix.xml )
     * 
     * Replaces the current matrix with the identity matrix. The equivalent function
     * in OpenGL is glLoadIdentity().
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#applyMatrix(PMatrix)
     * @see PGraphics#printMatrix()
     */
    resetMatrix();

    /**
     * ( begin auto-generated from applyMatrix.xml )
     * 
     * Multiplies the current matrix by the one specified through the parameters.
     * This is very slow because it will try to calculate the inverse of the
     * transform, so avoid it whenever possible. The equivalent function in OpenGL
     * is glMultMatrix().
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
    applyMatrix(source : PMatrix);

    applyMatrix(source : PMatrix2D);

    /**
     * @param {number} n00 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n01 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n02 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n10 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n11 numbers which define the 4x4 matrix to be multiplied
     * @param {number} n12 numbers which define the 4x4 matrix to be multiplied
     */
    applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    applyMatrix(source : PMatrix3D);

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
    applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    getMatrix() : PMatrix;

    /**
     * Copy the current transformation matrix into the specified target. Pass in
     * null to create a new matrix.
     * @param {PMatrix2D} target
     * @return {PMatrix2D}
     */
    getMatrix(target : PMatrix2D) : PMatrix2D;

    /**
     * Copy the current transformation matrix into the specified target. Pass in
     * null to create a new matrix.
     * @param {PMatrix3D} target
     * @return {PMatrix3D}
     */
    getMatrix(target : PMatrix3D) : PMatrix3D;

    /**
     * Set the current transformation matrix to the contents of another.
     * @param {*} source
     */
    setMatrix(source : PMatrix);

    /**
     * Set the current transformation to the contents of the specified source.
     * @param {PMatrix2D} source
     */
    setMatrix(source : PMatrix2D);

    /**
     * Set the current transformation to the contents of the specified source.
     * @param {PMatrix3D} source
     */
    setMatrix(source : PMatrix3D);

    /**
     * ( begin auto-generated from printMatrix.xml )
     * 
     * Prints the current matrix to the Console (the text window at the bottom of
     * Processing).
     * 
     * ( end auto-generated )
     * 
     * @webref transform
     * @see PGraphics#pushMatrix()
     * @see PGraphics#popMatrix()
     * @see PGraphics#resetMatrix()
     * @see PGraphics#applyMatrix(PMatrix)
     */
    printMatrix();

    /**
     * ( begin auto-generated from beginCamera.xml )
     * 
     * The <b>beginCamera()</b> and <b>endCamera()</b> functions enable advanced
     * customization of the camera space. The functions are useful if you want to
     * more control over camera movement, however for most users, the
     * <b>camera()</b> function will be sufficient.<br />
     * <br />
     * The camera functions will replace any transformations (such as
     * <b>rotate()</b> or <b>translate()</b>) that occur before them in
     * <b>draw()</b>, but they will not automatically replace the camera transform
     * itself. For this reason, camera functions should be placed at the beginning
     * of <b>draw()</b> (so that transformations happen afterwards), and the
     * <b>camera()</b> function can be used after <b>beginCamera()</b> if you want
     * to reset the camera before applying transformations.<br />
     * <br />
     * This function sets the matrix mode to the camera matrix so calls such as
     * <b>translate()</b>, <b>rotate()</b>, applyMatrix() and resetMatrix() affect
     * the camera. <b>beginCamera()</b> should always be used with a following
     * <b>endCamera()</b> and pairs of <b>beginCamera()</b> and <b>endCamera()</b>
     * cannot be nested.
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
    beginCamera();

    /**
     * ( begin auto-generated from endCamera.xml )
     * 
     * The <b>beginCamera()</b> and <b>endCamera()</b> functions enable advanced
     * customization of the camera space. Please see the reference for
     * <b>beginCamera()</b> for a description of how the functions are used.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#beginCamera()
     * @see PGraphics#camera(float, float, float, float, float, float, float, float,
     * float)
     */
    endCamera();

    /**
     * ( begin auto-generated from camera.xml )
     * 
     * Sets the position of the camera through setting the eye position, the center
     * of the scene, and which axis is facing upward. Moving the eye position and
     * the direction it is pointing (the center of the scene) allows the images to
     * be seen from different angles. The version without any parameters sets the
     * camera to the default position, pointing to the center of the display window
     * with the Y axis as up. The default values are <b>camera(width/2.0,
     * height/2.0, (height/2.0) / tan(PI*30.0 / 180.0), width/2.0, height/2.0, 0, 0,
     * 1, 0)</b>. This function is similar to <b>gluLookAt()</b> in OpenGL, but it
     * first clears the current camera settings.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#beginCamera()
     * @see PGraphics#endCamera()
     * @see PGraphics#frustum(float, float, float, float, float, float)
     */
    camera();

    /**
     * @param {number} eyeX    x-coordinate for the eye
     * @param {number} eyeY    y-coordinate for the eye
     * @param {number} eyeZ    z-coordinate for the eye
     * @param {number} centerX x-coordinate for the center of the scene
     * @param {number} centerY y-coordinate for the center of the scene
     * @param {number} centerZ z-coordinate for the center of the scene
     * @param {number} upX     usually 0.0, 1.0, or -1.0
     * @param {number} upY     usually 0.0, 1.0, or -1.0
     * @param {number} upZ     usually 0.0, 1.0, or -1.0
     */
    camera(eyeX : number, eyeY : number, eyeZ : number, centerX : number, centerY : number, centerZ : number, upX : number, upY : number, upZ : number);

    /**
     * ( begin auto-generated from printCamera.xml )
     * 
     * Prints the current camera matrix to the Console (the text window at the
     * bottom of Processing).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#camera(float, float, float, float, float, float, float, float,
     * float)
     */
    printCamera();

    /**
     * ( begin auto-generated from ortho.xml )
     * 
     * Sets an orthographic projection and defines a parallel clipping volume. All
     * objects with the same dimension appear the same size, regardless of whether
     * they are near or far from the camera. The parameters to this function specify
     * the clipping volume where left and right are the minimum and maximum x
     * values, top and bottom are the minimum and maximum y values, and near and far
     * are the minimum and maximum z values. If no parameters are given, the default
     * is used: ortho(0, width, 0, height, -10, 10).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     */
    ortho();

    /**
     * @param {number} left   left plane of the clipping volume
     * @param {number} right  right plane of the clipping volume
     * @param {number} bottom bottom plane of the clipping volume
     * @param {number} top    top plane of the clipping volume
     */
    ortho(left : number, right : number, bottom : number, top : number);

    /**
     * @param {number} near maximum distance from the origin to the viewer
     * @param {number} far  maximum distance from the origin away from the viewer
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     */
    ortho(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * ( begin auto-generated from perspective.xml )
     * 
     * Sets a perspective projection applying foreshortening, making distant objects
     * appear smaller than closer ones. The parameters define a viewing volume with
     * the shape of truncated pyramid. Objects near to the front of the volume
     * appear their actual size, while farther objects appear smaller. This
     * projection simulates the perspective of the world more accurately than
     * orthographic projection. The version of perspective without parameters sets
     * the default perspective and the version with four parameters allows the
     * programmer to set the area precisely. The default values are:
     * perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where cameraZ
     * is ((height/2.0) / tan(PI*60.0/360.0));
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     */
    perspective();

    /**
     * @param {number} fovy   field-of-view angle (in radians) for vertical direction
     * @param {number} aspect ratio of width to height
     * @param {number} zNear  z-position of nearest clipping plane
     * @param {number} zFar   z-position of farthest clipping plane
     */
    perspective(fovy : number, aspect : number, zNear : number, zFar : number);

    /**
     * ( begin auto-generated from frustum.xml )
     * 
     * Sets a perspective matrix defined through the parameters. Works like
     * glFrustum, except it wipes out the current perspective matrix rather than
     * muliplying itself with it.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @param {number} left   left coordinate of the clipping plane
     * @param {number} right  right coordinate of the clipping plane
     * @param {number} bottom bottom coordinate of the clipping plane
     * @param {number} top    top coordinate of the clipping plane
     * @param {number} near   near component of the clipping plane; must be greater than zero
     * @param {number} far    far component of the clipping plane; must be greater than the
     * near value
     * @see PGraphics#camera(float, float, float, float, float, float, float, float,
     * float)
     * @see PGraphics#beginCamera()
     * @see PGraphics#endCamera()
     * @see PGraphics#perspective(float, float, float, float)
     */
    frustum(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * ( begin auto-generated from printProjection.xml )
     * 
     * Prints the current projection matrix to the Console (the text window at the
     * bottom of Processing).
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#camera(float, float, float, float, float, float, float, float,
     * float)
     */
    printProjection();

    /**
     * ( begin auto-generated from screenX.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the X value for where
     * it will appear on a (two-dimensional) screen.
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
    screenX(x : number, y : number) : number;

    /**
     * ( begin auto-generated from screenY.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the Y value for where
     * it will appear on a (two-dimensional) screen.
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
    screenY(x : number, y : number) : number;

    /**
     * @param {number} z 3D z-coordinate to be mapped
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    screenX(x : number, y : number, z : number) : number;

    /**
     * @param {number} z 3D z-coordinate to be mapped
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    screenY(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from screenZ.xml )
     * 
     * Takes a three-dimensional X, Y, Z position and returns the Z value for where
     * it will appear on a (two-dimensional) screen.
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
    screenZ(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelX.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This returns
     * the X value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The X value can be used to
     * place an object in space relative to the location of the original point once
     * the transformations are no longer in use. <br/>
     * <br/>
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and <b>modelZ()</b>
     * functions record the location of a box in space after being placed using a
     * series of translate and rotate commands. After popMatrix() is called, those
     * transformations no longer apply, but the (x, y, z) coordinate returned by the
     * model functions is used to place another box in the same location.
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
    modelX(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelY.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This returns
     * the Y value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The Y value can be used to
     * place an object in space relative to the location of the original point once
     * the transformations are no longer in use.<br />
     * <br />
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and <b>modelZ()</b>
     * functions record the location of a box in space after being placed using a
     * series of translate and rotate commands. After popMatrix() is called, those
     * transformations no longer apply, but the (x, y, z) coordinate returned by the
     * model functions is used to place another box in the same location.
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
    modelY(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from modelZ.xml )
     * 
     * Returns the three-dimensional X, Y, Z position in model space. This returns
     * the Z value for a given coordinate based on the current set of
     * transformations (scale, rotate, translate, etc.) The Z value can be used to
     * place an object in space relative to the location of the original point once
     * the transformations are no longer in use.<br />
     * <br />
     * In the example, the <b>modelX()</b>, <b>modelY()</b>, and <b>modelZ()</b>
     * functions record the location of a box in space after being placed using a
     * series of translate and rotate commands. After popMatrix() is called, those
     * transformations no longer apply, but the (x, y, z) coordinate returned by the
     * model functions is used to place another box in the same location.
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
    modelZ(x : number, y : number, z : number) : number;

    /**
     * ( begin auto-generated from pushStyle.xml )
     * 
     * The <b>pushStyle()</b> function saves the current style settings and
     * <b>popStyle()</b> restores the prior settings. Note that these functions are
     * always used together. They allow you to change the style settings and later
     * return to what you had. When a new style is started with <b>pushStyle()</b>,
     * it builds on the current style information. The <b>pushStyle()</b> and
     * <b>popStyle()</b> functions can be embedded to provide more control (see the
     * second example above for a demonstration.) <br />
     * <br />
     * The style information controlled by the following functions are included in
     * the style: fill(), stroke(), tint(), strokeWeight(), strokeCap(),
     * strokeJoin(), imageMode(), rectMode(), ellipseMode(), shapeMode(),
     * colorMode(), textAlign(), textFont(), textMode(), textSize(), textLeading(),
     * emissive(), specular(), shininess(), ambient()
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @see PGraphics#popStyle()
     */
    pushStyle();

    /**
     * ( begin auto-generated from popStyle.xml )
     * 
     * The <b>pushStyle()</b> function saves the current style settings and
     * <b>popStyle()</b> restores the prior settings; these functions are always
     * used together. They allow you to change the style settings and later return
     * to what you had. When a new style is started with <b>pushStyle()</b>, it
     * builds on the current style information. The <b>pushStyle()</b> and
     * <b>popStyle()</b> functions can be embedded to provide more control (see the
     * second example above for a demonstration.)
     * 
     * ( end auto-generated )
     * 
     * @webref structure
     * @see PGraphics#pushStyle()
     */
    popStyle();

    style(s : PStyle);

    /**
     * ( begin auto-generated from strokeWeight.xml )
     * 
     * Sets the width of the stroke used for lines, points, and the border around
     * shapes. All widths are set in units of pixels. <br/>
     * <br/>
     * When drawing with P3D, series of connected lines (such as the stroke around a
     * polygon, triangle, or ellipse) produce unattractive results when a thick
     * stroke weight is set
     * (<a href="http://code.google.com/p/processing/issues/detail?id=123">see Issue
     * 123</a>). With P3D, the minimum and maximum values for <b>strokeWeight()</b>
     * are controlled by the graphics card and the operating system's OpenGL
     * implementation. For instance, the thickness may not go higher than 10 pixels.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} weight the weight (in pixels) of the stroke
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#strokeJoin(int)
     * @see PGraphics#strokeCap(int)
     */
    strokeWeight(weight : number);

    /**
     * ( begin auto-generated from strokeJoin.xml )
     * 
     * Sets the style of the joints which connect line segments. These joints are
     * either mitered, beveled, or rounded and specified with the corresponding
     * parameters MITER, BEVEL, and ROUND. The default joint is MITER. <br/>
     * <br/>
     * This function is not available with the P3D renderer,
     * (<a href="http://code.google.com/p/processing/issues/detail?id=123">see Issue
     * 123</a>). More information about the renderers can be found in the
     * <b>size()</b> reference.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} join either MITER, BEVEL, ROUND
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#strokeWeight(float)
     * @see PGraphics#strokeCap(int)
     */
    strokeJoin(join : number);

    /**
     * ( begin auto-generated from strokeCap.xml )
     * 
     * Sets the style for rendering line endings. These ends are either squared,
     * extended, or rounded and specified with the corresponding parameters SQUARE,
     * PROJECT, and ROUND. The default cap is ROUND. <br/>
     * <br/>
     * This function is not available with the P3D renderer
     * (<a href="http://code.google.com/p/processing/issues/detail?id=123">see Issue
     * 123</a>). More information about the renderers can be found in the
     * <b>size()</b> reference.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} cap either SQUARE, PROJECT, or ROUND
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#strokeWeight(float)
     * @see PGraphics#strokeJoin(int)
     * @see PApplet#size(int, int, String, String)
     */
    strokeCap(cap : number);

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
    noStroke();

    /**
     * ( begin auto-generated from stroke.xml )
     * 
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the current
     * <b>colorMode()</b> (the default color space is RGB, with each value in the
     * range from 0 to 255). <br/>
     * <br/>
     * When using hexadecimal notation to specify a color, use "#" or "0x" before
     * the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six digits to
     * specify a color (the way colors are specified in HTML and CSS). When using
     * the hexadecimal notation starting with "0x", the hexadecimal value must be
     * specified with eight characters; the first two characters define the alpha
     * component and the remainder the red, green, and blue components. <br/>
     * <br/>
     * The value for the parameter "gray" must be less than or equal to the current
     * maximum value as specified by <b>colorMode()</b>. The default maximum value
     * is 255.
     * 
     * ( end auto-generated )
     * 
     * @param {number} rgb color value in hexadecimal notation
     * @see PGraphics#noStroke()
     * @see PGraphics#strokeWeight(float)
     * @see PGraphics#strokeJoin(int)
     * @see PGraphics#strokeCap(int)
     * @see PGraphics#fill(int, float)
     * @see PGraphics#noFill()
     * @see PGraphics#tint(int, float)
     * @see PGraphics#background(float, float, float, float)
     * @see PGraphics#colorMode(int, float, float, float, float)
     */
    stroke(rgb : number);

    /**
     * @param {number} alpha opacity of the stroke
     * @param {number} rgb
     */
    stroke(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    stroke(gray : number);

    stroke(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @webref color:setting
     */
    stroke(v1 : number, v2 : number, v3 : number);

    stroke(v1 : number, v2 : number, v3 : number, alpha : number);

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
    noTint();

    /**
     * ( begin auto-generated from tint.xml )
     * 
     * Sets the fill value for displaying images. Images can be tinted to specified
     * colors or made transparent by setting the alpha.<br />
     * <br />
     * To make an image transparent, but not change it's color, use white as the
     * tint color and specify an alpha value. For instance, tint(255, 128) will make
     * an image 50% transparent (unless <b>colorMode()</b> has been used).<br />
     * <br />
     * When using hexadecimal notation to specify a color, use "#" or "0x" before
     * the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six digits to
     * specify a color (the way colors are specified in HTML and CSS). When using
     * the hexadecimal notation starting with "0x", the hexadecimal value must be
     * specified with eight characters; the first two characters define the alpha
     * component and the remainder the red, green, and blue components.<br />
     * <br />
     * The value for the parameter "gray" must be less than or equal to the current
     * maximum value as specified by <b>colorMode()</b>. The default maximum value
     * is 255.<br />
     * <br />
     * The <b>tint()</b> function is also used to control the coloring of textures
     * in 3D.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @usage web_application
     * @param {number} rgb color value in hexadecimal notation
     * @see PGraphics#noTint()
     * @see PGraphics#image(PImage, float, float, float, float)
     */
    tint(rgb : number);

    /**
     * @param {number} alpha opacity of the image
     * @param {number} rgb
     */
    tint(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    tint(gray : number);

    tint(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    tint(v1 : number, v2 : number, v3 : number);

    tint(v1 : number, v2 : number, v3 : number, alpha : number);

    /**
     * ( begin auto-generated from noFill.xml )
     * 
     * Disables filling geometry. If both <b>noStroke()</b> and <b>noFill()</b> are
     * called, nothing will be drawn to the screen.
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @usage web_application
     * @see PGraphics#fill(float, float, float, float)
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#noStroke()
     */
    noFill();

    /**
     * ( begin auto-generated from fill.xml )
     * 
     * Sets the color used to fill shapes. For example, if you run <b>fill(204, 102,
     * 0)</b>, all subsequent shapes will be filled with orange. This color is
     * either specified in terms of the RGB or HSB color depending on the current
     * <b>colorMode()</b> (the default color space is RGB, with each value in the
     * range from 0 to 255). <br/>
     * <br/>
     * When using hexadecimal notation to specify a color, use "#" or "0x" before
     * the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six digits to
     * specify a color (the way colors are specified in HTML and CSS). When using
     * the hexadecimal notation starting with "0x", the hexadecimal value must be
     * specified with eight characters; the first two characters define the alpha
     * component and the remainder the red, green, and blue components. <br/>
     * <br/>
     * The value for the parameter "gray" must be less than or equal to the current
     * maximum value as specified by <b>colorMode()</b>. The default maximum value
     * is 255. <br/>
     * <br/>
     * To change the color of an image (or a texture), use tint().
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @usage web_application
     * @param {number} rgb color variable or hex value
     * @see PGraphics#noFill()
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#noStroke()
     * @see PGraphics#tint(int, float)
     * @see PGraphics#background(float, float, float, float)
     * @see PGraphics#colorMode(int, float, float, float, float)
     */
    fill(rgb : number);

    /**
     * @param {number} alpha opacity of the fill
     * @param {number} rgb
     */
    fill(rgb : number, alpha : number);

    /**
     * @param {number} gray number specifying value between white and black
     */
    fill(gray : number);

    fill(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    fill(v1 : number, v2 : number, v3 : number);

    fill(v1 : number, v2 : number, v3 : number, alpha : number);

    /**
     * ( begin auto-generated from ambient.xml )
     * 
     * Sets the ambient reflectance for shapes drawn to the screen. This is combined
     * with the ambient light component of environment. The color components set
     * through the parameters define the reflectance. For example in the default
     * color mode, setting v1=255, v2=126, v3=0, would cause all the red light to
     * reflect and half of the green light to reflect. Used in combination with
     * <b>emissive()</b>, <b>specular()</b>, and <b>shininess()</b> in setting the
     * material properties of shapes.
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
    ambient(rgb : number);

    /**
     * @param {number} gray number specifying value between white and black
     */
    ambient(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    ambient(v1 : number, v2 : number, v3 : number);

    /**
     * ( begin auto-generated from specular.xml )
     * 
     * Sets the specular color of the materials used for shapes drawn to the screen,
     * which sets the color of hightlights. Specular refers to light which bounces
     * off a surface in a perferred direction (rather than bouncing in all
     * directions like a diffuse light). Used in combination with <b>emissive()</b>,
     * <b>ambient()</b>, and <b>shininess()</b> in setting the material properties
     * of shapes.
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
    specular(rgb : number);

    /**
     * gray number specifying value between white and black
     * @param {number} gray
     */
    specular(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    specular(v1 : number, v2 : number, v3 : number);

    /**
     * ( begin auto-generated from shininess.xml )
     * 
     * Sets the amount of gloss in the surface of shapes. Used in combination with
     * <b>ambient()</b>, <b>specular()</b>, and <b>emissive()</b> in setting the
     * material properties of shapes.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:material_properties
     * @usage web_application
     * @param {number} shine degree of shininess
     * @see PGraphics#emissive(float, float, float)
     * @see PGraphics#ambient(float, float, float)
     * @see PGraphics#specular(float, float, float)
     */
    shininess(shine : number);

    /**
     * ( begin auto-generated from emissive.xml )
     * 
     * Sets the emissive color of the material used for drawing shapes drawn to the
     * screen. Used in combination with <b>ambient()</b>, <b>specular()</b>, and
     * <b>shininess()</b> in setting the material properties of shapes.
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
    emissive(rgb : number);

    /**
     * gray number specifying value between white and black
     * @param {number} gray
     */
    emissive(gray : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    emissive(v1 : number, v2 : number, v3 : number);

    /**
     * ( begin auto-generated from lights.xml )
     * 
     * Sets the default ambient light, directional light, falloff, and specular
     * values. The defaults are ambientLight(128, 128, 128) and
     * directionalLight(128, 128, 128, 0, 0, -1), lightFalloff(1, 0, 0), and
     * lightSpecular(0, 0, 0). Lights need to be included in the draw() to remain
     * persistent in a looping program. Placing them in the setup() of a looping
     * program will cause them to only have an effect the first time through the
     * loop.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#noLights()
     */
    lights();

    /**
     * ( begin auto-generated from noLights.xml )
     * 
     * Disable all lighting. Lighting is turned off by default and enabled with the
     * <b>lights()</b> function. This function can be used to disable lighting so
     * that 2D geometry (which does not require lighting) can be drawn after a set
     * of lighted 3D geometry.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @see PGraphics#lights()
     */
    noLights();

    /**
     * ( begin auto-generated from ambientLight.xml )
     * 
     * Adds an ambient light. Ambient light doesn't come from a specific direction,
     * the rays have light have bounced around so much that objects are evenly lit
     * from all sides. Ambient lights are almost always used in combination with
     * other types of lights. Lights need to be included in the <b>draw()</b> to
     * remain persistent in a looping program. Placing them in the <b>setup()</b> of
     * a looping program will cause them to only have an effect the first time
     * through the loop. The effect of the parameters is determined by the current
     * color mode.
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
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    ambientLight(v1 : number, v2 : number, v3 : number);

    /**
     * @param {number} x x-coordinate of the light
     * @param {number} y y-coordinate of the light
     * @param {number} z z-coordinate of the light
     * @param {number} v1
     * @param {number} v2
     * @param {number} v3
     */
    ambientLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from directionalLight.xml )
     * 
     * Adds a directional light. Directional light comes from one direction and is
     * stronger when hitting a surface squarely and weaker if it hits at a a gentle
     * angle. After hitting a surface, a directional lights scatters in all
     * directions. Lights need to be included in the <b>draw()</b> to remain
     * persistent in a looping program. Placing them in the <b>setup()</b> of a
     * looping program will cause them to only have an effect the first time through
     * the loop. The affect of the <b>v1</b>, <b>v2</b>, and <b>v3</b> parameters is
     * determined by the current color mode. The <b>nx</b>, <b>ny</b>, and <b>nz</b>
     * parameters specify the direction the light is facing. For example, setting
     * <b>ny</b> to -1 will cause the geometry to be lit from below (the light is
     * facing directly upward).
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
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    directionalLight(v1 : number, v2 : number, v3 : number, nx : number, ny : number, nz : number);

    /**
     * ( begin auto-generated from pointLight.xml )
     * 
     * Adds a point light. Lights need to be included in the <b>draw()</b> to remain
     * persistent in a looping program. Placing them in the <b>setup()</b> of a
     * looping program will cause them to only have an effect the first time through
     * the loop. The affect of the <b>v1</b>, <b>v2</b>, and <b>v3</b> parameters is
     * determined by the current color mode. The <b>x</b>, <b>y</b>, and <b>z</b>
     * parameters set the position of the light.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @param {number} x  x-coordinate of the light
     * @param {number} y  y-coordinate of the light
     * @param {number} z  z-coordinate of the light
     * @see PGraphics#lights()
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    pointLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number);

    /**
     * ( begin auto-generated from spotLight.xml )
     * 
     * Adds a spot light. Lights need to be included in the <b>draw()</b> to remain
     * persistent in a looping program. Placing them in the <b>setup()</b> of a
     * looping program will cause them to only have an effect the first time through
     * the loop. The affect of the <b>v1</b>, <b>v2</b>, and <b>v3</b> parameters is
     * determined by the current color mode. The <b>x</b>, <b>y</b>, and <b>z</b>
     * parameters specify the position of the light and <b>nx</b>, <b>ny</b>,
     * <b>nz</b> specify the direction or light. The <b>angle</b> parameter affects
     * angle of the spotlight cone.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1            red or hue value (depending on current color mode)
     * @param {number} v2            green or saturation value (depending on current color
     * mode)
     * @param {number} v3            blue or brightness value (depending on current color
     * mode)
     * @param {number} x             x-coordinate of the light
     * @param {number} y             y-coordinate of the light
     * @param {number} z             z-coordinate of the light
     * @param {number} nx            direction along the x axis
     * @param {number} ny            direction along the y axis
     * @param {number} nz            direction along the z axis
     * @param {number} angle         angle of the spotlight cone
     * @param {number} concentration exponent determining the center bias of the cone
     * @see PGraphics#lights()
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     */
    spotLight(v1 : number, v2 : number, v3 : number, x : number, y : number, z : number, nx : number, ny : number, nz : number, angle : number, concentration : number);

    /**
     * ( begin auto-generated from lightFalloff.xml )
     * 
     * Sets the falloff rates for point lights, spot lights, and ambient lights. The
     * parameters are used to determine the falloff with the following
     * equation:<br />
     * <br />
     * d = distance from light position to vertex position<br />
     * falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)<br />
     * <br />
     * Like <b>fill()</b>, it affects only the elements which are created after it
     * in the code. The default value if <b>LightFalloff(1.0, 0.0, 0.0)</b>.
     * Thinking about an ambient light with a falloff can be tricky. It is used, for
     * example, if you wanted a region of your scene to be lit ambiently one color
     * and another region to be lit ambiently by another color, you would use an
     * ambient light with location and falloff. You can think of it as a point light
     * that doesn't care which direction a surface is facing.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} constant  constant value or determining falloff
     * @param {number} linear    linear value for determining falloff
     * @param {number} quadratic quadratic value for determining falloff
     * @see PGraphics#lights()
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     * @see PGraphics#lightSpecular(float, float, float)
     */
    lightFalloff(constant : number, linear : number, quadratic : number);

    /**
     * ( begin auto-generated from lightSpecular.xml )
     * 
     * Sets the specular color for lights. Like <b>fill()</b>, it affects only the
     * elements which are created after it in the code. Specular refers to light
     * which bounces off a surface in a perferred direction (rather than bouncing in
     * all directions like a diffuse light) and is used for creating highlights. The
     * specular quality of a light interacts with the specular material qualities
     * set through the <b>specular()</b> and <b>shininess()</b> functions.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @see PGraphics#specular(float, float, float)
     * @see PGraphics#lights()
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float,
     * float, float, float, float)
     */
    lightSpecular(v1 : number, v2 : number, v3 : number);

    /**
     * ( begin auto-generated from background.xml )
     * 
     * The <b>background()</b> function sets the color used for the background of
     * the Processing window. The default background is light gray. In the
     * <b>draw()</b> function, the background color is used to clear the display
     * window at the beginning of each frame. <br/>
     * <br/>
     * An image can also be used as the background for a sketch, however its width
     * and height must be the same size as the sketch window. To resize an image 'b'
     * to the size of the sketch window, use b.resize(width, height). <br/>
     * <br/>
     * Images used as background will ignore the current <b>tint()</b> setting.
     * <br/>
     * <br/>
     * It is not possible to use transparency (alpha) in background colors with the
     * main drawing surface, however they will work properly with
     * <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * <p>
     * Clear the background with a color that includes an alpha value. This can only
     * be used with objects created by createGraphics(), because the main drawing
     * surface cannot be set transparent.
     * </p>
     * <p>
     * It might be tempting to use this function to partially clear the screen on
     * each frame, however that's not how this function works. When calling
     * background(), the pixels will be replaced with pixels that have that level of
     * transparency. To do a semi-transparent overlay, use fill() with alpha and
     * draw a rectangle.
     * </p>
     * 
     * @webref color:setting
     * @usage web_application
     * @param {number} rgb any value of the color datatype
     * @see PGraphics#stroke(float)
     * @see PGraphics#fill(float)
     * @see PGraphics#tint(float)
     * @see PGraphics#colorMode(int)
     */
    background(rgb : number);

    /**
     * @param {number} alpha opacity of the background
     * @param {number} rgb
     */
    background(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    background(gray : number);

    background(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on the current color mode)
     * @param {number} v2 green or saturation value (depending on the current color mode)
     * @param {number} v3 blue or brightness value (depending on the current color mode)
     */
    background(v1 : number, v2 : number, v3 : number);

    background(v1 : number, v2 : number, v3 : number, alpha : number);

    /**
     * @webref color:setting
     */
    clear();

    /**
     * Takes an RGB or ARGB image and sets it as the background. The width and
     * height of the image must be the same size as the sketch. Use
     * image.resize(width, height) to make short work of such a task.<br/>
     * <br/>
     * Note that even if the image is set as RGB, the high 8 bits of each pixel
     * should be set opaque (0xFF000000) because the image data will be copied
     * directly to the screen, and non-opaque background images may have strange
     * behavior. Use image.filter(OPAQUE) to handle this easily.<br/>
     * <br/>
     * When using 3D, this will also clear the zbuffer (if it exists).
     * 
     * @param {PImage} image PImage to set as background (must be same size as the sketch
     * window)
     */
    background(image : PImage);

    /**
     * ( begin auto-generated from colorMode.xml )
     * 
     * Changes the way Processing interprets color data. By default, the parameters
     * for <b>fill()</b>, <b>stroke()</b>, <b>background()</b>, and <b>color()</b>
     * are defined by values between 0 and 255 using the RGB color model. The
     * <b>colorMode()</b> function is used to change the numerical range used for
     * specifying colors and to switch color systems. For example, calling
     * <b>colorMode(RGB, 1.0)</b> will specify that values are specified between 0
     * and 1. The limits for defining colors are altered by setting the parameters
     * range1, range2, range3, and range 4.
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @usage web_application
     * @param {number} mode Either RGB or HSB, corresponding to Red/Green/Blue and
     * Hue/Saturation/Brightness
     * @see PGraphics#background(float)
     * @see PGraphics#fill(float)
     * @see PGraphics#stroke(float)
     */
    colorMode(mode : number);

    /**
     * @param {number} max range for all color elements
     * @param {number} mode
     */
    colorMode(mode : number, max : number);

    /**
     * @param {number} max1 range for the red or hue depending on the current color mode
     * @param {number} max2 range for the green or saturation depending on the current color
     * mode
     * @param {number} max3 range for the blue or brightness depending on the current color
     * mode
     * @param {number} mode
     */
    colorMode(mode : number, max1 : number, max2 : number, max3 : number);

    /**
     * @param {number} maxA range for the alpha
     * @param {number} mode
     * @param {number} max1
     * @param {number} max2
     * @param {number} max3
     */
    colorMode(mode : number, max1 : number, max2 : number, max3 : number, maxA : number);

    /**
     * ( begin auto-generated from alpha.xml )
     * 
     * Extracts the alpha value from a color.
     * 
     * ( end auto-generated )
     * 
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
    alpha(rgb : number) : number;

    /**
     * ( begin auto-generated from red.xml )
     * 
     * Extracts the red value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a float so be careful
     * not to assign it to an int value.<br />
     * <br />
     * The red() function is easy to use and undestand, but is slower than another
     * technique. To achieve the same results when working in <b>colorMode(RGB,
     * 255)</b>, but with greater speed, use the &gt;&gt; (right shift) operator
     * with a bit mask. For example, the following two lines of code are
     * equivalent:<br />
     * 
     * <pre>
     * float r1 = red(myColor);<br />float r2 = myColor &gt;&gt; 16
     * &amp; 0xFF;
     * </pre>
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
    red(rgb : number) : number;

    /**
     * ( begin auto-generated from green.xml )
     * 
     * Extracts the green value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a float so be careful
     * not to assign it to an int value.<br />
     * <br />
     * The <b>green()</b> function is easy to use and undestand, but is slower than
     * another technique. To achieve the same results when working in
     * <b>colorMode(RGB, 255)</b>, but with greater speed, use the &gt;&gt; (right
     * shift) operator with a bit mask. For example, the following two lines of code
     * are equivalent:<br />
     * 
     * <pre>
     * float r1 = green(myColor);<br />float r2 =
     * myColor &gt;&gt; 8 &amp; 0xFF;
     * </pre>
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
    green(rgb : number) : number;

    /**
     * ( begin auto-generated from blue.xml )
     * 
     * Extracts the blue value from a color, scaled to match current
     * <b>colorMode()</b>. This value is always returned as a float so be careful
     * not to assign it to an int value.<br />
     * <br />
     * The <b>blue()</b> function is easy to use and undestand, but is slower than
     * another technique. To achieve the same results when working in
     * <b>colorMode(RGB, 255)</b>, but with greater speed, use a bit mask to remove
     * the other color components. For example, the following two lines of code are
     * equivalent:<br />
     * 
     * <pre>
     * float r1 = blue(myColor);<br />float r2 = myColor
     * &amp; 0xFF;
     * </pre>
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
    blue(rgb : number) : number;

    /**
     * ( begin auto-generated from hue.xml )
     * 
     * Extracts the hue value from a color.
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
     * @see PGraphics#saturation(int)
     * @see PGraphics#brightness(int)
     * @return {number}
     */
    hue(rgb : number) : number;

    /**
     * ( begin auto-generated from saturation.xml )
     * 
     * Extracts the saturation value from a color.
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
     * @see PGraphics#brightness(int)
     * @return {number}
     */
    saturation(rgb : number) : number;

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
    brightness(rgb : number) : number;

    /**
     * ( begin auto-generated from PImage_get.xml )
     * 
     * Reads the color of any pixel or grabs a section of an image. If no parameters
     * are specified, the entire image is returned. Use the <b>x</b> and <b>y</b>
     * parameters to get the value of one pixel. Get a section of the display window
     * by specifying an additional <b>width</b> and <b>height</b> parameter. When
     * getting an image, the <b>x</b> and <b>y</b> parameters define the coordinates
     * for the upper-left corner of the image, regardless of the current
     * <b>imageMode()</b>.<br />
     * <br />
     * If the pixel requested is outside of the image window, black is returned. The
     * numbers returned are scaled according to the current color ranges, but only
     * RGB values are returned by this function. For example, even though you may
     * have drawn a shape with <b>colorMode(HSB)</b>, the numbers returned will be
     * in RGB format.<br />
     * <br />
     * Getting the color of a single pixel with <b>get(x, y)</b> is easy, but not as
     * fast as grabbing the data directly from <b>pixels[]</b>. The equivalent
     * statement to <b>get(x, y)</b> using <b>pixels[]</b> is
     * <b>pixels[y*width+x]</b>. See the reference for <b>pixels[]</b> for more
     * information.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Returns an ARGB "color" type (a packed 32 bit int with the
     * color. If the coordinate is outside the image, zero is returned (black, but
     * completely transparent).
     * <P>
     * If the image is in RGB format (i.e. on a PVideo object), the value will get
     * its high bits set, just to avoid cases where they haven't been set already.
     * <P>
     * If the image is in ALPHA format, this returns a white with its alpha value
     * set.
     * <P>
     * This function is included primarily for beginners. It is quite slow because
     * it has to check to see if the x, y that was provided is inside the bounds,
     * and then has to check to see what image type it is. If you want things to be
     * more efficient, access the pixels[] array directly.
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
    get(x : number, y : number) : number;

    /**
     * @param {number} w width of pixel rectangle to get
     * @param {number} h height of pixel rectangle to get
     * @param {number} x
     * @param {number} y
     * @return {PImage}
     */
    get(x : number, y : number, w : number, h : number) : PImage;

    /**
     * Returns a copy of this PImage. Equivalent to get(0, 0, width, height).
     * Deprecated, just use copy() instead.
     * @return {PImage}
     */
    get() : PImage;

    copy() : PImage;

    /**
     * ( begin auto-generated from PImage_set.xml )
     * 
     * Changes the color of any pixel or writes an image directly into the display
     * window.<br />
     * <br />
     * The <b>x</b> and <b>y</b> parameters specify the pixel to change and the
     * <b>color</b> parameter specifies the color value. The color parameter is
     * affected by the current color mode (the default is RGB values from 0 to 255).
     * When setting an image, the <b>x</b> and <b>y</b> parameters define the
     * coordinates for the upper-left corner of the image, regardless of the current
     * <b>imageMode()</b>. <br />
     * <br />
     * Setting the color of a single pixel with <b>set(x, y)</b> is easy, but not as
     * fast as putting the data directly into <b>pixels[]</b>. The equivalent
     * statement to <b>set(x, y, #000000)</b> using <b>pixels[]</b> is
     * <b>pixels[y*width+x] = #000000</b>. See the reference for <b>pixels[]</b> for
     * more information.
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
    set(x : number, y : number, c : number);

    /**
     * <h3>Advanced</h3> Efficient method of drawing an image's pixels directly to
     * this surface. No variations are employed, meaning that any scale, tint, or
     * imageMode settings will be ignored.
     * 
     * @param {PImage} img image to copy into the original image
     * @param {number} x
     * @param {number} y
     */
    set(x : number, y : number, img : PImage);

    /**
     * ( begin auto-generated from PImage_mask.xml )
     * 
     * Masks part of an image from displaying by loading another image and using it
     * as an alpha channel. This mask image should only contain grayscale data, but
     * only the blue color channel is used. The mask image needs to be the same size
     * as the image to which it is applied.<br />
     * <br />
     * In addition to using a mask image, an integer array containing the alpha
     * channel data can be specified directly. This method is useful for creating
     * dynamically generated alpha masks. This array must be of the same length as
     * the target image's pixels array and should contain only grayscale data of
     * values between 0-255.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * 
     * Set alpha channel for an image. Black colors in the source image will make
     * the destination image completely transparent, and white will make things
     * fully opaque. Gray values will be in-between steps.
     * <P>
     * Strictly speaking the "blue" value from the source image is used as the alpha
     * color. For a fully grayscale image, this is correct, but for a color image
     * it's not 100% accurate. For a more accurate conversion, first use
     * filter(GRAY) which will make the image into a "correct" grayscale by
     * performing a proper luminance-based conversion.
     * 
     * @webref pimage:method
     * @usage web_application
     * @param {PImage} img image to use as the mask
     * @brief Masks part of an image with another image as an alpha channel
     */
    mask(img : PImage);

    filter(kind : number);

    /**
     * ( begin auto-generated from PImage_filter.xml )
     * 
     * Filters an image as defined by one of the following modes:<br />
     * <br />
     * THRESHOLD - converts the image to black and white pixels depending if they
     * are above or below the threshold defined by the level parameter. The level
     * must be between 0.0 (black) and 1.0(white). If no level is specified, 0.5 is
     * used.<br />
     * <br />
     * GRAY - converts any colors in the image to grayscale equivalents<br />
     * <br />
     * INVERT - sets each pixel to its inverse value<br />
     * <br />
     * POSTERIZE - limits each channel of the image to the number of colors
     * specified as the level parameter<br />
     * <br />
     * BLUR - executes a Guassian blur with the level parameter specifying the
     * extent of the blurring. If no level parameter is used, the blur is equivalent
     * to Guassian blur of radius 1<br />
     * <br />
     * OPAQUE - sets the alpha channel to entirely opaque<br />
     * <br />
     * ERODE - reduces the light areas with the amount defined by the level
     * parameter<br />
     * <br />
     * DILATE - increases the light areas with the amount defined by the level
     * parameter
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3> Method to apply a variety of basic filters to this image.
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
     * @param {number} kind  Either THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE,
     * or DILATE
     * @param {number} param unique for each, see above
     */
    filter(kind : number, param : number);

    /**
     * ( begin auto-generated from PImage_copy.xml )
     * 
     * Copies a region of pixels from one image into another. If the source and
     * destination regions aren't the same size, it will automatically resize source
     * pixels to fit the specified target region. No alpha information is used in
     * the process, however if the source image has an alpha channel set, it will be
     * copied as well. <br />
     * <br />
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
    copy(sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number);

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
    copy(src : PImage, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number);

    blend(sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number, mode : number);

    /**
     * ( begin auto-generated from PImage_blend.xml )
     * 
     * Blends a region of pixels into the image specified by the <b>img</b>
     * parameter. These copies utilize full alpha channel support and a choice of
     * the following modes to blend the colors of source pixels (A) with the ones of
     * pixels in the destination image (B):<br />
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
     * OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens
     * light values.<br />
     * <br />
     * HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.<br />
     * <br />
     * SOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as
     * harsh.<br />
     * <br />
     * DODGE - Lightens light tones and increases contrast, ignores darks. Called
     * "Color Dodge" in Illustrator and Photoshop.<br />
     * <br />
     * BURN - Darker areas are applied, increasing contrast, ignores lights. Called
     * "Color Burn" in Illustrator and Photoshop.<br />
     * <br />
     * All modes use the alpha information (highest byte) of source image pixels as
     * the blending factor. If the source and destination regions are different
     * sizes, the image will be automatically resized to match the destination size.
     * If the <b>srcImg</b> parameter is not used, the display window is used as the
     * source image.<br />
     * <br />
     * As of release 0149, this function ignores <b>imageMode()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref image:pixels
     * @brief Copies a pixel or rectangle of pixels using different blending modes
     * @param {PImage} src  an image variable referring to the source image
     * @param {number} sx   X coordinate of the source's upper left corner
     * @param {number} sy   Y coordinate of the source's upper left corner
     * @param {number} sw   source image width
     * @param {number} sh   source image height
     * @param {number} dx   X coordinate of the destinations's upper left corner
     * @param {number} dy   Y coordinate of the destinations's upper left corner
     * @param {number} dw   destination image width
     * @param {number} dh   destination image height
     * @param {number} mode Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE,
     * EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT,
     * DODGE, BURN
     * 
     * @see PApplet#alpha(int)
     * @see PImage#copy(PImage, int, int, int, int, int, int, int, int)
     * @see PImage#blendColor(int,int,int)
     */
    blend(src : PImage, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number, mode : number);

    externals : PApplet.Externals;

    nativeFeatures : NativeFeatures;
}

declare namespace PApplet {

    /**
     * Full name of the Java version (i.e. 1.5.0_11).
     */
    export var javaVersionName : string;

    export var javaPlatform : number;

    /**
     * Do not use; javaPlatform or javaVersionName are better options. For instance,
     * javaPlatform is useful when you need a number for comparison, i.e. "if
     * (javaPlatform >= 9)".
     * 
     * @deprecated
     */
    export var javaVersion : number;

    /**
     * Current platform in use, one of the PConstants WINDOWS, MACOSX, MACOS9, LINUX
     * or OTHER.
     */
    export var platform : number;

    /**
     * Whether to use native (AWT) dialogs for selectInput and selectOutput. The
     * native dialogs on some platforms can be ugly, buggy, or missing features. For
     * 3.3.5, this defaults to true on all platforms.
     */
    export var useNativeSelect : boolean;

    export var DEBUG : boolean;

    /**
     * Default width and height for sketch when not specified
     */
    export var DEFAULT_WIDTH : number;

    export var DEFAULT_HEIGHT : number;

    /**
     * used by the UncaughtExceptionHandler, so has to be static
     */
    export var uncaughtThrowable : Error;

    /**
     * Position of the upper-lefthand corner of the editor window that launched this
     * applet.
     */
    export var ARGS_EDITOR_LOCATION : string;

    export var ARGS_EXTERNAL : string;

    /**
     * Location for where to position the applet window on screen.
     * <p>
     * This is used by the editor to when saving the previous applet location, or
     * could be used by other classes to launch at a specific position on-screen.
     */
    export var ARGS_LOCATION : string;

    /**
     * Used by the PDE to suggest a display (set in prefs, passed on Run)
     */
    export var ARGS_DISPLAY : string;

    export var ARGS_WINDOW_COLOR : string;

    export var ARGS_PRESENT : string;

    export var ARGS_STOP_COLOR : string;

    export var ARGS_HIDE_STOP : string;

    /**
     * Allows the user or PdeEditor to set a specific sketch folder path.
     * <p>
     * Used by PdeEditor to pass in the location where saveFrame() and all that
     * stuff should write things.
     */
    export var ARGS_SKETCH_FOLDER : string;

    export var ARGS_DENSITY : string;

    /**
     * When run externally to a PdeEditor, this is sent by the sketch when it quits.
     */
    export var EXTERNAL_STOP : string;

    /**
     * When run externally to a PDE Editor, this is sent by the applet whenever the
     * window is moved.
     * <p>
     * This is used so that the editor can re-open the sketch window in the same
     * position as the user last left it.
     */
    export var EXTERNAL_MOVE : string;

    export var ERROR_MIN_MAX : string;

    /**
     * ( begin auto-generated from second.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>second()</b>
     * function returns the current second as a value from 0 - 59.
     * 
     * ( end auto-generated )
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    export function second() : number;

    /**
     * ( begin auto-generated from minute.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>minute()</b>
     * function returns the current minute as a value from 0 - 59.
     * 
     * ( end auto-generated )
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    export function minute() : number;

    /**
     * ( begin auto-generated from hour.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>hour()</b>
     * function returns the current hour as a value from 0 - 23.
     * 
     * ( end auto-generated )
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    export function hour() : number;

    /**
     * ( begin auto-generated from day.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>day()</b>
     * function returns the current day as a value from 1 - 31.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3> Get the current day of the month (1 through 31).
     * <p>
     * If you're looking for the day of the week (M-F or whatever) or day of the
     * year (1..365) then use java's Calendar.get()
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    export function day() : number;

    /**
     * ( begin auto-generated from month.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>month()</b>
     * function returns the current month as a value from 1 - 12.
     * 
     * ( end auto-generated )
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#year()
     * @return {number}
     */
    export function month() : number;

    /**
     * ( begin auto-generated from year.xml )
     * 
     * Processing communicates with the clock on your computer. The <b>year()</b>
     * function returns the current year as an integer (2003, 2004, 2005, etc).
     * 
     * ( end auto-generated ) The <b>year()</b> function returns the current year as
     * an integer (2003, 2004, 2005, etc).
     * 
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#month()
     * @return {number}
     */
    export function year() : number;

    export var openLauncher : string;

    /**
     * ( begin auto-generated from launch.xml )
     * 
     * Attempts to open an application or file using your platform's launcher. The
     * <b>file</b> parameter is a String specifying the file name and location. The
     * location parameter must be a full path name, or the name of an executable in
     * the system's PATH. In most cases, using a full path is the best option,
     * rather than relying on the system PATH. Be sure to make the file executable
     * before attempting to open it (chmod +x). <br/>
     * <br/>
     * The <b>args</b> parameter is a String or String array which is passed to the
     * command line. If you have multiple parameters, e.g. an application and a
     * document, or a command with multiple switches, use the version that takes a
     * String array, and place each individual item in a separate element. <br/>
     * <br/>
     * If args is a String (not an array), then it can only be a single file or
     * application with no parameters. It's not the same as executing that String
     * using a shell. For instance, launch("javac -help") will not work properly.
     * <br/>
     * <br/>
     * This function behaves differently on each platform. On Windows, the
     * parameters are sent to the Windows shell via "cmd /c". On Mac OS X, the
     * "open" command is used (type "man open" in Terminal.app for documentation).
     * On Linux, it first tries gnome-open, then kde-open, but if neither are
     * available, it sends the command to the shell without any alterations. <br/>
     * <br/>
     * For users familiar with Java, this is not quite the same as Runtime.exec(),
     * because the launcher command is prepended. Instead, the <b>exec(String[])</b>
     * function is a shortcut for Runtime.getRuntime.exec(String[]).
     * 
     * ( end auto-generated )
     * 
     * @webref input:files
     * @param {Array} args arguments to the launcher, eg. a filename.
     * @usage Application
     * @return {*}
     */
    export function launch(...args : string[]) : any;

    /**
     * Pass a set of arguments directly to the command line. Uses Java's <A HREF=
     * "https://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#exec-java.lang.String:A-">Runtime.exec()</A>
     * method. This is different from the
     * <A HREF="https://processing.org/reference/launch_.html">launch()</A> method,
     * which uses the operating system's launcher to open the files. It's always a
     * good idea to use a full path to the executable here.
     * 
     * <pre>
     * exec("/usr/bin/say", "welcome to the command line");
     * </pre>
     * 
     * Or if you want to wait until it's completed, something like this:
     * 
     * <pre>
     * Process p = exec("/usr/bin/say", "waiting until done");
     * try {
     * int result = p.waitFor();
     * println("the process returned " + result);
     * } catch (InterruptedException e) {
     * }
     * </pre>
     * 
     * You can also get the system output and error streams from the Process object,
     * but that's more that we'd like to cover here.
     * 
     * @return {*} a <A HREF=
     * "https://docs.oracle.com/javase/8/docs/api/java/lang/Process.html">Process</A>
     * object
     * @param {Array} args
     */
    export function exec(...args : string[]) : any;

    /**
     * Alternative version of exec() that retrieves stdout and stderr into the
     * StringList objects provided. This is a convenience function that handles
     * simple exec() calls. If the results will be more than a couple lines, you
     * shouldn't use this function, you should use a more elaborate method that
     * makes use of proper threading (to drain the shell output) and error handling
     * to address the many things that can go wrong within this method.
     * 
     * @param {StringList} stdout a non-null StringList object to be filled with any output
     * @param {StringList} stderr a non-null StringList object to be filled with error lines
     * @param {Array} args   each argument to be passed as a series of String objects
     * @return {number} the result returned from the application, or -1 if an Exception
     * occurs before the application is able to return a result.
     */
    export function exec(stdout : StringList, stderr : StringList, ...args : string[]) : number;

    /**
     * Same as exec() above, but prefixes the call with a shell.
     * @param {StringList} stdout
     * @param {StringList} stderr
     * @param {Array} args
     * @return {number}
     */
    export function shell(stdout : StringList, stderr : StringList, ...args : string[]) : number;

    /**
     * ( begin auto-generated from print.xml )
     * 
     * Writes to the console area of the Processing environment. This is often
     * helpful for looking at the data a program is producing. The companion
     * function <b>println()</b> works like <b>print()</b>, but creates a new line
     * of text for each call to the function. Individual elements can be separated
     * with quotes ("") and joined with the addition operator (+).<br />
     * <br />
     * Beginning with release 0125, to print the contents of an array, use
     * println(). There's no sensible way to do a <b>print()</b> of an array,
     * because there are too many possibilities for how to separate the data
     * (spaces, commas, etc). If you want to print an array as a single line, use
     * <b>join()</b>. With <b>join()</b>, you can choose any delimiter you like and
     * <b>print()</b> the result.<br />
     * <br />
     * Using <b>print()</b> on an object will output <b>null</b>, a memory location
     * that may look like "@10be08," or the result of the <b>toString()</b> method
     * from the object that's being printed. Advanced users who want more useful
     * output when calling <b>print()</b> on their own classes can add a
     * <b>toString()</b> method to the class that returns a String.
     * 
     * ( end auto-generated )
     * 
     * @webref output:text_area
     * @usage IDE
     * @param {number} what data to print to console
     * @see PApplet#println()
     * @see PApplet#printArray(Object)
     * @see PApplet#join(String[], char)
     */
    export function print(what : number);

    export function print(what : boolean);

    export function print(what : string);

    export function print(what : number);

    export function print(what : number);

    export function print(what : number);

    export function print(what : number);

    export function print(what : string);

    /**
     * @param {Array} variables list of data, separated by commas
     */
    export function print(...variables : any[]);

    /**
     * ( begin auto-generated from println.xml )
     * 
     * Writes to the text area of the Processing environment's console. This is
     * often helpful for looking at the data a program is producing. Each call to
     * this function creates a new line of output. Individual elements can be
     * separated with quotes ("") and joined with the string concatenation operator
     * (+). See <b>print()</b> for more about what to expect in the output. <br/>
     * <br/>
     * <b>println()</b> on an array (by itself) will write the contents of the array
     * to the console. This is often helpful for looking at the data a program is
     * producing. A new line is put between each element of the array. This function
     * can only print one dimensional arrays. For arrays with higher dimensions, the
     * result will be closer to that of <b>print()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref output:text_area
     * @usage IDE
     * @see PApplet#print(byte)
     * @see PApplet#printArray(Object)
     */
    export function println();

    /**
     * @param {number} what data to print to console
     */
    export function println(what : number);

    export function println(what : boolean);

    export function println(what : string);

    export function println(what : number);

    export function println(what : number);

    export function println(what : number);

    export function println(what : number);

    export function println(what : string);

    /**
     * @param {Array} variables list of data, separated by commas
     */
    export function println(...variables : any[]);

    /**
     * For arrays, use printArray() instead. This function causes a warning because
     * the new print(Object...) and println(Object...) functions can't be reliably
     * bound by the compiler.
     * @param {*} what
     */
    export function println(what : any);

    /**
     * ( begin auto-generated from printArray.xml )
     * 
     * To come...
     * 
     * ( end auto-generated )
     * 
     * @webref output:text_area
     * @param {*} what one-dimensional array
     * @usage IDE
     * @see PApplet#print(byte)
     * @see PApplet#println()
     */
    export function printArray(what : any);

    export function debug(msg : string);

    /**
     * ( begin auto-generated from abs.xml )
     * 
     * Calculates the absolute value (magnitude) of a number. The absolute value of
     * a number is always positive.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number to compute
     * @return {number}
     */
    export function abs(n : number) : number;

    export function abs(n : number) : number;

    /**
     * ( begin auto-generated from sq.xml )
     * 
     * Squares a number (multiplies a number by itself). The result is always a
     * positive number, as multiplying two negative numbers always yields a positive
     * result. For example, -1 * -1 = 1.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number to square
     * @see PApplet#sqrt(float)
     * @return {number}
     */
    export function sq(n : number) : number;

    /**
     * ( begin auto-generated from sqrt.xml )
     * 
     * Calculates the square root of a number. The square root of a number is always
     * positive, even though there may be a valid negative root. The square root
     * <b>s</b> of number <b>a</b> is such that <b>s*s = a</b>. It is the opposite
     * of squaring.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n non-negative number
     * @see PApplet#pow(float, float)
     * @see PApplet#sq(float)
     * @return {number}
     */
    export function sqrt(n : number) : number;

    /**
     * ( begin auto-generated from log.xml )
     * 
     * Calculates the natural logarithm (the base-<i>e</i> logarithm) of a number.
     * This function expects the values greater than 0.0.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number greater than 0.0
     * @return {number}
     */
    export function log(n : number) : number;

    /**
     * ( begin auto-generated from exp.xml )
     * 
     * Returns Euler's number <i>e</i> (2.71828...) raised to the power of the
     * <b>value</b> parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n exponent to raise
     * @return {number}
     */
    export function exp(n : number) : number;

    /**
     * ( begin auto-generated from pow.xml )
     * 
     * Facilitates exponential expressions. The <b>pow()</b> function is an
     * efficient way of multiplying numbers by themselves (or their reciprocal) in
     * large quantities. For example, <b>pow(3, 5)</b> is equivalent to the
     * expression 3*3*3*3*3 and <b>pow(3, -5)</b> is equivalent to 1 / 3*3*3*3*3.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n base of the exponential expression
     * @param {number} e power by which to raise the base
     * @see PApplet#sqrt(float)
     * @return {number}
     */
    export function pow(n : number, e : number) : number;

    /**
     * ( begin auto-generated from max.xml )
     * 
     * Determines the largest value in a sequence of numbers.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} a first number to compare
     * @param {number} b second number to compare
     * @see PApplet#min(float, float, float)
     * @return {number}
     */
    export function max(a : number, b : number) : number;

    export function max(a : number, b : number) : number;

    /**
     * @param {number} c third number to compare
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    export function max(a : number, b : number, c : number) : number;

    export function max(a : number, b : number, c : number) : number;

    /**
     * @param {Array} list array of numbers to compare
     * @return {number}
     */
    export function max(list : number[]) : number;

    export function max(list : number[]) : number;

    export function min(a : number, b : number) : number;

    export function min(a : number, b : number) : number;

    export function min(a : number, b : number, c : number) : number;

    /**
     * ( begin auto-generated from min.xml )
     * 
     * Determines the smallest value in a sequence of numbers.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} a first number
     * @param {number} b second number
     * @param {number} c third number
     * @see PApplet#max(float, float, float)
     * @return {number}
     */
    export function min(a : number, b : number, c : number) : number;

    /**
     * @param {Array} list array of numbers to compare
     * @return {number}
     */
    export function min(list : number[]) : number;

    export function min(list : number[]) : number;

    export function constrain(amt : number, low : number, high : number) : number;

    /**
     * ( begin auto-generated from constrain.xml )
     * 
     * Constrains a value to not exceed a maximum and minimum value.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} amt  the value to constrain
     * @param {number} low  minimum limit
     * @param {number} high maximum limit
     * @see PApplet#max(float, float, float)
     * @see PApplet#min(float, float, float)
     * @return {number}
     */
    export function constrain(amt : number, low : number, high : number) : number;

    /**
     * ( begin auto-generated from sin.xml )
     * 
     * Calculates the sine of an angle. This function expects the values of the
     * <b>angle</b> parameter to be provided in radians (values from 0 to 6.28).
     * Values are returned in the range -1 to 1.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#cos(float)
     * @see PApplet#tan(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    export function sin(angle : number) : number;

    /**
     * ( begin auto-generated from cos.xml )
     * 
     * Calculates the cosine of an angle. This function expects the values of the
     * <b>angle</b> parameter to be provided in radians (values from 0 to PI*2).
     * Values are returned in the range -1 to 1.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#sin(float)
     * @see PApplet#tan(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    export function cos(angle : number) : number;

    /**
     * ( begin auto-generated from tan.xml )
     * 
     * Calculates the ratio of the sine and cosine of an angle. This function
     * expects the values of the <b>angle</b> parameter to be provided in radians
     * (values from 0 to PI*2). Values are returned in the range <b>infinity</b> to
     * <b>-infinity</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#cos(float)
     * @see PApplet#sin(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    export function tan(angle : number) : number;

    /**
     * ( begin auto-generated from asin.xml )
     * 
     * The inverse of <b>sin()</b>, returns the arc sine of a value. This function
     * expects the values in the range of -1 to 1 and values are returned in the
     * range <b>-PI/2</b> to <b>PI/2</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} value the value whose arc sine is to be returned
     * @see PApplet#sin(float)
     * @see PApplet#acos(float)
     * @see PApplet#atan(float)
     * @return {number}
     */
    export function asin(value : number) : number;

    /**
     * ( begin auto-generated from acos.xml )
     * 
     * The inverse of <b>cos()</b>, returns the arc cosine of a value. This function
     * expects the values in the range of -1 to 1 and values are returned in the
     * range <b>0</b> to <b>PI (3.1415927)</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} value the value whose arc cosine is to be returned
     * @see PApplet#cos(float)
     * @see PApplet#asin(float)
     * @see PApplet#atan(float)
     * @return {number}
     */
    export function acos(value : number) : number;

    /**
     * ( begin auto-generated from atan.xml )
     * 
     * The inverse of <b>tan()</b>, returns the arc tangent of a value. This
     * function expects the values in the range of -Infinity to Infinity (exclusive)
     * and values are returned in the range <b>-PI/2</b> to <b>PI/2 </b>.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} value -Infinity to Infinity (exclusive)
     * @see PApplet#tan(float)
     * @see PApplet#asin(float)
     * @see PApplet#acos(float)
     * @return {number}
     */
    export function atan(value : number) : number;

    /**
     * ( begin auto-generated from atan2.xml )
     * 
     * Calculates the angle (in radians) from a specified point to the coordinate
     * origin as measured from the positive x-axis. Values are returned as a
     * <b>float</b> in the range from <b>PI</b> to <b>-PI</b>. The <b>atan2()</b>
     * function is most often used for orienting geometry to the position of the
     * cursor. Note: The y-coordinate of the point is the first parameter and the
     * x-coordinate is the second due the the structure of calculating the tangent.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} y y-coordinate of the point
     * @param {number} x x-coordinate of the point
     * @see PApplet#tan(float)
     * @return {number}
     */
    export function atan2(y : number, x : number) : number;

    /**
     * ( begin auto-generated from degrees.xml )
     * 
     * Converts a radian measurement to its corresponding value in degrees. Radians
     * and degrees are two ways of measuring the same thing. There are 360 degrees
     * in a circle and 2*PI radians in a circle. For example, 90&deg; = PI/2 =
     * 1.5707964. All trigonometric functions in Processing require their parameters
     * to be specified in radians.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} radians radian value to convert to degrees
     * @see PApplet#radians(float)
     * @return {number}
     */
    export function degrees(radians : number) : number;

    /**
     * ( begin auto-generated from radians.xml )
     * 
     * Converts a degree measurement to its corresponding value in radians. Radians
     * and degrees are two ways of measuring the same thing. There are 360 degrees
     * in a circle and 2*PI radians in a circle. For example, 90&deg; = PI/2 =
     * 1.5707964. All trigonometric functions in Processing require their parameters
     * to be specified in radians.
     * 
     * ( end auto-generated )
     * 
     * @webref math:trigonometry
     * @param {number} degrees degree value to convert to radians
     * @see PApplet#degrees(float)
     * @return {number}
     */
    export function radians(degrees : number) : number;

    /**
     * ( begin auto-generated from ceil.xml )
     * 
     * Calculates the closest int value that is greater than or equal to the value
     * of the parameter. For example, <b>ceil(9.03)</b> returns the value 10.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number to round up
     * @see PApplet#floor(float)
     * @see PApplet#round(float)
     * @return {number}
     */
    export function ceil(n : number) : number;

    /**
     * ( begin auto-generated from floor.xml )
     * 
     * Calculates the closest int value that is less than or equal to the value of
     * the parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number to round down
     * @see PApplet#ceil(float)
     * @see PApplet#round(float)
     * @return {number}
     */
    export function floor(n : number) : number;

    /**
     * ( begin auto-generated from round.xml )
     * 
     * Calculates the integer closest to the <b>value</b> parameter. For example,
     * <b>round(9.2)</b> returns the value 9.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} n number to round
     * @see PApplet#floor(float)
     * @see PApplet#ceil(float)
     * @return {number}
     */
    export function round(n : number) : number;

    export function mag(a : number, b : number) : number;

    /**
     * ( begin auto-generated from mag.xml )
     * 
     * Calculates the magnitude (or length) of a vector. A vector is a direction in
     * space commonly used in computer graphics and linear algebra. Because it has
     * no "start" position, the magnitude of a vector can be thought of as the
     * distance from coordinate (0,0) to its (x,y) value. Therefore, mag() is a
     * shortcut for writing "dist(0, 0, x, y)".
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} a first value
     * @param {number} b second value
     * @param {number} c third value
     * @see PApplet#dist(float, float, float, float)
     * @return {number}
     */
    export function mag(a : number, b : number, c : number) : number;

    export function dist(x1 : number, y1 : number, x2 : number, y2 : number) : number;

    /**
     * ( begin auto-generated from dist.xml )
     * 
     * Calculates the distance between two points.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} x1 x-coordinate of the first point
     * @param {number} y1 y-coordinate of the first point
     * @param {number} z1 z-coordinate of the first point
     * @param {number} x2 x-coordinate of the second point
     * @param {number} y2 y-coordinate of the second point
     * @param {number} z2 z-coordinate of the second point
     * @return {number}
     */
    export function dist(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number) : number;

    /**
     * ( begin auto-generated from lerp.xml )
     * 
     * Calculates a number between two numbers at a specific increment. The
     * <b>amt</b> parameter is the amount to interpolate between the two values
     * where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is
     * half-way in between, etc. The lerp function is convenient for creating motion
     * along a straight path and for drawing dotted lines.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} start first value
     * @param {number} stop  second value
     * @param {number} amt   float between 0.0 and 1.0
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @see PGraphics#bezierPoint(float, float, float, float, float)
     * @see PVector#lerp(PVector, float)
     * @see PGraphics#lerpColor(int, int, float)
     * @return {number}
     */
    export function lerp(start : number, stop : number, amt : number) : number;

    /**
     * ( begin auto-generated from norm.xml )
     * 
     * Normalizes a number from another range into a value between 0 and 1. <br/>
     * <br/>
     * Identical to map(value, low, high, 0, 1); <br/>
     * <br/>
     * Numbers outside the range are not clamped to 0 and 1, because out-of-range
     * values are often intentional and useful.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} value the incoming value to be converted
     * @param {number} start lower bound of the value's current range
     * @param {number} stop  upper bound of the value's current range
     * @see PApplet#map(float, float, float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    export function norm(value : number, start : number, stop : number) : number;

    /**
     * ( begin auto-generated from map.xml )
     * 
     * Re-maps a number from one range to another. In the example above, the number
     * '25' is converted from a value in the range 0..100 into a value that ranges
     * from the left edge (0) to the right edge (width) of the screen. <br/>
     * <br/>
     * Numbers outside the range are not clamped to 0 and 1, because out-of-range
     * values are often intentional and useful.
     * 
     * ( end auto-generated )
     * 
     * @webref math:calculation
     * @param {number} value  the incoming value to be converted
     * @param {number} start1 lower bound of the value's current range
     * @param {number} stop1  upper bound of the value's current range
     * @param {number} start2 lower bound of the value's target range
     * @param {number} stop2  upper bound of the value's target range
     * @see PApplet#norm(float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    export function map(value : number, start1 : number, stop1 : number, start2 : number, stop2 : number) : number;

    export var PERLIN_YWRAPB : number;

    export var PERLIN_YWRAP : number;

    export var PERLIN_ZWRAPB : number;

    export var PERLIN_ZWRAP : number;

    export var PERLIN_SIZE : number;

    export var ASYNC_IMAGE_LOADER_THREAD_PREFIX : string;

    /**
     * @nowebref
     * @param {*} file
     * @return {JSONObject}
     */
    export function loadJSONObject(file : any) : JSONObject;

    export function loadJSONArray(file : any) : JSONArray;

    export var lookAndFeelCheck : boolean;

    /**
     * Initialize the Look & Feel if it hasn't been already. Call this before using
     * any Swing-related code in PApplet methods.
     * @private
     */
    export function checkLookAndFeel();

    export function selectInput(prompt : string, callbackMethod : string, file : any, callbackObject : any, parent : any, sketch : any);

    export function selectInput(prompt : string, callbackMethod : string, file : any, callbackObject : any, parent : any);

    export function selectOutput(prompt : string, callbackMethod : string, file : any, callbackObject : any, parent : any);

    export function selectOutput(prompt : string, callbackMethod : string, file : any, callbackObject : any, parent : any, sketch : any);

    export function selectImpl(prompt : string, callbackMethod : string, defaultSelection : any, callbackObject : any, parentFrame : any, mode : number, sketch : any);

    export function selectFolder(prompt : string, callbackMethod : string, defaultSelection : any, callbackObject : any, parentFrame : any);

    export function selectFolder(prompt : string, callbackMethod : string, defaultSelection : any, callbackObject : any, parentFrame : any, sketch : any);

    export function selectCallback(selectedFile : any, callbackMethod : string, callbackObject : any);

    export function listFiles(base : any, ...options : string[]) : any;

    export function listFilesImpl(folder : any, recursive : boolean, extensions : string[], hidden : boolean, directories : boolean, files : boolean, list : Array<any>);

    /**
     * Get the compression-free extension for this filename.
     * 
     * @param {string} filename The filename to check
     * @return {string} an extension, skipping past .gz if it's present
     */
    export function checkExtension(filename : string) : string;

    /**
     * @nowebref
     * @param {*} file
     * @return {*}
     */
    export function createReader(file : any) : { str: string, cursor: number };

    /**
     * @nowebref I want to read lines from a stream. If I have to type the following
     * lines any more I'm gonna send Sun my medical bills.
     * @param {*} input
     * @return {*}
     */
    export function createReader(input : { str: string, cursor: number }) : { str: string, cursor: number };

    /**
     * @nowebref I want to print lines to a file. I have RSI from typing these eight
     * lines of code so many times.
     * @param {*} file
     * @return {*}
     */
    export function createWriter(file : any) : any;

    /**
     * @nowebref I want to print lines to a file. Why am I always explaining myself?
     * It's the JavaSoft API engineers who need to explain themselves.
     * @param {*} output
     * @return {*}
     */
    export function createWriter(output : any) : any;

    /**
     * @nowebref
     * @param {*} file
     * @return {*}
     */
    export function createInput(file : any) : { str: string, cursor: number };

    /**
     * @nowebref
     * @param {*} input
     * @return {Array}
     */
    export function loadBytes(input : { str: string, cursor: number }) : number[];

    /**
     * @nowebref
     * @param {*} file
     * @return {Array}
     */
    export function loadBytes(file : any) : number[];

    /**
     * @nowebref
     * @param {*} file
     * @return {Array}
     */
    export function loadStrings(file : any) : string[];

    /**
     * @nowebref
     * @param {*} input
     * @return {Array}
     */
    export function loadStrings(input : { str: string, cursor: number }) : string[];

    export function loadStrings(reader : { str: string, cursor: number }) : string[];

    /**
     * @nowebref
     * @param {*} file
     * @return {*}
     */
    export function createOutput(file : any) : any;

    /**
     * @nowebref
     * @param {*} target
     * @param {*} source
     * @return {boolean}
     */
    export function saveStream(target : any, source : { str: string, cursor: number }) : boolean;

    /**
     * @nowebref
     * @param {*} target
     * @param {*} source
     */
    export function saveStream(target : any, source : { str: string, cursor: number });

    /**
     * Creates a temporary file based on the name/extension of another file and in
     * the same parent directory. Ensures that the same extension is used (i.e. so
     * that .gz files are gzip compressed on output) and that it's done from the
     * same directory so that renaming the file later won't cross file system
     * boundaries.
     * @param {*} file
     * @return {*}
     * @private
     */
    export function createTempFile(file : any) : any;

    /**
     * @nowebref Saves bytes to a specific File location specified by the user.
     * @param {*} file
     * @param {Array} data
     */
    export function saveBytes(file : any, data : number[]);

    /**
     * @nowebref Spews a buffer of bytes to an OutputStream.
     * @param {*} output
     * @param {Array} data
     */
    export function saveBytes(output : any, data : number[]);

    /**
     * @nowebref
     * @param {*} file
     * @param {Array} data
     */
    export function saveStrings(file : any, data : string[]);

    /**
     * @nowebref
     * @param {*} output
     * @param {Array} data
     */
    export function saveStrings(output : any, data : string[]);

    export function calcSketchPath() : string;

    export var desktopFolder : any;

    /**
     * Not a supported function. For testing use only.
     * @param {string} what
     * @return {*}
     */
    export function desktopFile(what : string) : any;

    /**
     * Not a supported function. For testing use only.
     * @param {string} what
     * @return {string}
     */
    export function desktopPath(what : string) : string;

    /**
     * Takes a path and creates any in-between folders if they don't already exist.
     * Useful when trying to save to a subfolder that may not actually exist.
     * @param {string} path
     */
    export function createPath(path : string);

    export function createPath(file : any);

    export function getExtension(filename : string) : string;

    export function urlEncode(str : string) : string;

    export function urlDecode(str : string) : string;

    /**
     * ( begin auto-generated from sort.xml )
     * 
     * Sorts an array of numbers from smallest to largest and puts an array of words
     * in alphabetical order. The original array is not modified, a re-ordered array
     * is returned. The <b>count</b> parameter states the number of elements to
     * sort. For example if there are 12 elements in an array and if count is the
     * value 5, only the first five elements on the array will be sorted. <!--As of
     * release 0126, the alphabetical ordering is case insensitive.-->
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list array to sort
     * @see PApplet#reverse(boolean[])
     * @return {Array}
     */
    export function sort(list : number[]) : number[];

    /**
     * @param {number} count number of elements to sort, starting from 0
     * @param {Array} list
     * @return {Array}
     */
    export function sort(list : number[], count : number) : number[];

    export function sort(list : string[]) : string[];

    export function sort(list : string[], count : number) : string[];

    export function sort(list : number[]) : number[];

    export function sort(list : number[], count : number) : number[];

    export function sort(list : number[]) : number[];

    export function sort(list : number[], count : number) : number[];

    export function sort(list : string[]) : string[];

    export function sort(list : string[], count : number) : string[];

    /**
     * ( begin auto-generated from arrayCopy.xml )
     * 
     * Copies an array (or part of an array) to another array. The <b>src</b> array
     * is copied to the <b>dst</b> array, beginning at the position specified by
     * <b>srcPos</b> and into the position specified by <b>dstPos</b>. The number of
     * elements to copy is determined by <b>length</b>. The simplified version with
     * two arguments copies an entire array to another of the same size. It is
     * equivalent to "arrayCopy(src, 0, dst, 0, src.length)". This function is far
     * more efficient for copying array data than iterating through a <b>for</b> and
     * copying each element.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {*} src         the source array
     * @param {number} srcPosition starting position in the source array
     * @param {*} dst         the destination array of the same data type as the source
     * array
     * @param {number} dstPosition starting position in the destination array
     * @param {number} length      number of array elements to be copied
     * @see PApplet#concat(boolean[], boolean[])
     */
    export function arrayCopy(src : any, srcPosition : number, dst : any, dstPosition : number, length : number);

    /**
     * Convenience method for arraycopy(). Identical to
     * <CODE>arraycopy(src, 0, dst, 0, length);</CODE>
     * @param {*} src
     * @param {*} dst
     * @param {number} length
     */
    export function arrayCopy(src : any, dst : any, length : number);

    /**
     * Shortcut to copy the entire contents of the source into the destination
     * array. Identical to <CODE>arraycopy(src, 0, dst, 0, src.length);</CODE>
     * @param {*} src
     * @param {*} dst
     */
    export function arrayCopy(src : any, dst : any);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {number} srcPosition
     * @param {*} dst
     * @param {number} dstPosition
     * @param {number} length
     */
    export function arraycopy(src : any, srcPosition : number, dst : any, dstPosition : number, length : number);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {*} dst
     * @param {number} length
     */
    export function arraycopy(src : any, dst : any, length : number);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {*} dst
     */
    export function arraycopy(src : any, dst : any);

    /**
     * ( begin auto-generated from expand.xml )
     * 
     * Increases the size of an array. By default, this function doubles the size of
     * the array, but the optional <b>newSize</b> parameter provides precise control
     * over the increase in size. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) expand(originalArray)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list the array to expand
     * @see PApplet#shorten(boolean[])
     * @return {Array}
     */
    export function expand(list : boolean[]) : boolean[];

    /**
     * @param {number} newSize new size for the array
     * @param {Array} list
     * @return {Array}
     */
    export function expand(list : boolean[], newSize : number) : boolean[];

    export function expand(list : number[]) : number[];

    export function expand(list : number[], newSize : number) : number[];

    export function expand(list : string[]) : string[];

    export function expand(list : string[], newSize : number) : string[];

    export function expand(list : number[]) : number[];

    export function expand(list : number[], newSize : number) : number[];

    export function expand(list : number[]) : number[];

    export function expand(list : number[], newSize : number) : number[];

    export function expand(list : number[]) : number[];

    export function expand(list : number[], newSize : number) : number[];

    export function expand(list : number[]) : number[];

    export function expand(list : number[], newSize : number) : number[];

    export function expand(list : string[]) : string[];

    export function expand(list : string[], newSize : number) : string[];

    /**
     * @nowebref
     * @param {*} array
     * @return {*}
     */
    export function expand(array : any) : any;

    export function expand(list : any, newSize : number) : any;

    /**
     * ( begin auto-generated from append.xml )
     * 
     * Expands an array by one element and adds data to the new position. The
     * datatype of the <b>element</b> parameter must be the same as the datatype of
     * the array. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) append(originalArray, element)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} array array to append
     * @param {number} value new data for the array
     * @see PApplet#shorten(boolean[])
     * @see PApplet#expand(boolean[])
     * @return {Array}
     */
    export function append(array : number[], value : number) : number[];

    export function append(array : string[], value : string) : string[];

    export function append(array : number[], value : number) : number[];

    export function append(array : number[], value : number) : number[];

    export function append(array : string[], value : string) : string[];

    export function append(array : any, value : any) : any;

    /**
     * ( begin auto-generated from shorten.xml )
     * 
     * Decreases an array by one element and returns the shortened array. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) shorten(originalArray)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list array to shorten
     * @see PApplet#append(byte[], byte)
     * @see PApplet#expand(boolean[])
     * @return {Array}
     */
    export function shorten(list : boolean[]) : boolean[];

    export function shorten(list : number[]) : number[];

    export function shorten(list : string[]) : string[];

    export function shorten(list : number[]) : number[];

    export function shorten(list : number[]) : number[];

    export function shorten(list : string[]) : string[];

    export function shorten(list : any) : any;

    /**
     * ( begin auto-generated from splice.xml )
     * 
     * Inserts a value or array of values into an existing array. The first two
     * parameters must be of the same datatype. The <b>array</b> parameter defines
     * the array which will be modified and the second parameter defines the data
     * which will be inserted. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) splice(array1, array2, index)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list  array to splice into
     * @param {boolean} value value to be spliced in
     * @param {number} index position in the array from which to insert data
     * @see PApplet#concat(boolean[], boolean[])
     * @see PApplet#subset(boolean[], int, int)
     * @return {Array}
     */
    export function splice(list : boolean[], value : boolean, index : number) : boolean[];

    export function splice(list : boolean[], value : boolean[], index : number) : boolean[];

    export function splice(list : number[], value : number, index : number) : number[];

    export function splice(list : number[], value : number[], index : number) : number[];

    export function splice(list : string[], value : string, index : number) : string[];

    export function splice(list : string[], value : string[], index : number) : string[];

    export function splice(list : number[], value : number, index : number) : number[];

    export function splice(list : number[], value : number[], index : number) : number[];

    export function splice(list : number[], value : number, index : number) : number[];

    export function splice(list : number[], value : number[], index : number) : number[];

    export function splice(list : string[], value : string, index : number) : string[];

    export function splice(list : string[], value : string[], index : number) : string[];

    export function splice(list : any, value : any, index : number) : any;

    export function subset(list : boolean[], start : number) : boolean[];

    /**
     * ( begin auto-generated from subset.xml )
     * 
     * Extracts an array of elements from an existing array. The <b>array</b>
     * parameter defines the array from which the elements will be copied and the
     * <b>offset</b> and <b>length</b> parameters determine which elements to
     * extract. If no <b>length</b> is given, elements will be extracted from the
     * <b>offset</b> to the end of the array. When specifying the <b>offset</b>
     * remember the first array element is 0. This function does not change the
     * source array. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) subset(originalArray, 0, 4)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list  array to extract from
     * @param {number} start position to begin
     * @param {number} count number of values to extract
     * @see PApplet#splice(boolean[], boolean, int)
     * @return {Array}
     */
    export function subset(list : boolean[], start : number, count : number) : boolean[];

    export function subset(list : number[], start : number) : number[];

    export function subset(list : number[], start : number, count : number) : number[];

    export function subset(list : string[], start : number) : string[];

    export function subset(list : string[], start : number, count : number) : string[];

    export function subset(list : number[], start : number) : number[];

    export function subset(list : number[], start : number, count : number) : number[];

    export function subset(list : number[], start : number) : number[];

    export function subset(list : number[], start : number, count : number) : number[];

    export function subset(list : string[], start : number) : string[];

    export function subset(list : string[], start : number, count : number) : string[];

    export function subset(list : any, start : number) : any;

    export function subset(list : any, start : number, count : number) : any;

    /**
     * ( begin auto-generated from concat.xml )
     * 
     * Concatenates two arrays. For example, concatenating the array { 1, 2, 3 } and
     * the array { 4, 5, 6 } yields { 1, 2, 3, 4, 5, 6 }. Both parameters must be
     * arrays of the same datatype. <br/>
     * <br/>
     * When using an array of objects, the data returned from the function must be
     * cast to the object array's data type. For example: <em>SomeClass[] items =
     * (SomeClass[]) concat(array1, array2)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} a first array to concatenate
     * @param {Array} b second array to concatenate
     * @see PApplet#splice(boolean[], boolean, int)
     * @see PApplet#arrayCopy(Object, int, Object, int, int)
     * @return {Array}
     */
    export function concat(a : boolean[], b : boolean[]) : boolean[];

    export function concat(a : number[], b : number[]) : number[];

    export function concat(a : string[], b : string[]) : string[];

    export function concat(a : number[], b : number[]) : number[];

    export function concat(a : number[], b : number[]) : number[];

    export function concat(a : string[], b : string[]) : string[];

    export function concat(a : any, b : any) : any;

    /**
     * ( begin auto-generated from reverse.xml )
     * 
     * Reverses the order of an array.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list booleans[], bytes[], chars[], ints[], floats[], or Strings[]
     * @see PApplet#sort(String[], int)
     * @return {Array}
     */
    export function reverse(list : boolean[]) : boolean[];

    export function reverse(list : number[]) : number[];

    export function reverse(list : string[]) : string[];

    export function reverse(list : number[]) : number[];

    export function reverse(list : number[]) : number[];

    export function reverse(list : string[]) : string[];

    export function reverse(list : any) : any;

    /**
     * ( begin auto-generated from trim.xml )
     * 
     * Removes whitespace characters from the beginning and end of a String. In
     * addition to standard whitespace characters such as space, carriage return,
     * and tab, this function also removes the Unicode "nbsp" character.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {string} str any string
     * @see PApplet#split(String, String)
     * @see PApplet#join(String[], char)
     * @return {string}
     */
    export function trim(str : string) : string;

    /**
     * @param {Array} array a String array
     * @return {Array}
     */
    export function trim(array : string[]) : string[];

    /**
     * ( begin auto-generated from join.xml )
     * 
     * Combines an array of Strings into one String, each separated by the
     * character(s) used for the <b>separator</b> parameter. To join arrays of ints
     * or floats, it's necessary to first convert them to strings using <b>nf()</b>
     * or <b>nfs()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {Array} list      array of Strings
     * @param {string} separator char or String to be placed between each item
     * @see PApplet#split(String, String)
     * @see PApplet#trim(String)
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @return {string}
     */
    export function join(list : string[], separator : string) : string;

    export function join(list : string[], separator : string) : string;

    export function splitTokens(value : string) : string[];

    /**
     * ( begin auto-generated from splitTokens.xml )
     * 
     * The splitTokens() function splits a String at one or many character "tokens."
     * The <b>tokens</b> parameter specifies the character or characters to be used
     * as a boundary. <br/>
     * <br/>
     * If no <b>tokens</b> character is specified, any whitespace character is used
     * to split. Whitespace characters include tab (\\t), line feed (\\n), carriage
     * return (\\r), form feed (\\f), and space. To convert a String to an array of
     * integers or floats, use the datatype conversion functions <b>int()</b> and
     * <b>float()</b> to convert the array of Strings.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {string} value the String to be split
     * @param {string} delim list of individual characters that will be used as separators
     * @see PApplet#split(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    export function splitTokens(value : string, delim : string) : string[];

    /**
     * ( begin auto-generated from split.xml )
     * 
     * The split() function breaks a string into pieces using a character or string
     * as the divider. The <b>delim</b> parameter specifies the character or
     * characters that mark the boundaries between each piece. A String[] array is
     * returned that contains each of the pieces. <br/>
     * <br/>
     * If the result is a set of numbers, you can convert the String[] array to to a
     * float[] or int[] array using the datatype conversion functions <b>int()</b>
     * and <b>float()</b> (see example above). <br/>
     * <br/>
     * The <b>splitTokens()</b> function works in a similar fashion, except that it
     * splits using a range of characters instead of a specific character or
     * sequence. <!-- /><br />
     * This function uses regular expressions to determine how the <b>delim</b>
     * parameter divides the <b>str</b> parameter. Therefore, if you use characters
     * such parentheses and brackets that are used with regular expressions as a
     * part of the <b>delim</b> parameter, you'll need to put two blackslashes
     * (\\\\) in front of the character (see example above). You can read more about
     * <a href="http://en.wikipedia.org/wiki/Regular_expression">regular
     * expressions</a> and
     * <a href="http://en.wikipedia.org/wiki/Escape_character">escape characters</a>
     * on Wikipedia. -->
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @usage web_application
     * @param {string} value the String to be split
     * @param {string} delim the character or String used to separate the data
     * @return {Array}
     */
    export function split(value : string, delim : string) : string[];

    export function split(value : string, delim : string) : string[];

    /**
     * ( begin auto-generated from match.xml )
     * 
     * The match() function is used to apply a regular expression to a piece of
     * text, and return matching groups (elements found inside parentheses) as a
     * String array. No match will return null. If no groups are specified in the
     * regexp, but the sequence matches, an array of length one (with the matched
     * text as the first element of the array) will be returned.<br />
     * <br />
     * To use the function, first check to see if the result is null. If the result
     * is null, then the sequence did not match. If the sequence did match, an array
     * is returned. If there are groups (specified by sets of parentheses) in the
     * regexp, then the contents of each will be returned in the array. Element [0]
     * of a regexp match returns the entire matching string, and the match groups
     * start at element [1] (the first group is [1], the second [2], and so
     * on).<br />
     * <br />
     * The syntax can be found in the reference for Java's
     * <a href="http://download.oracle.com/javase/6/docs/api/">Pattern</a> class.
     * For regular expression syntax, read the
     * <a href="http://download.oracle.com/javase/tutorial/essential/regex/">Java
     * Tutorial</a> on the topic.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {string} str    the String to be searched
     * @param {string} regexp the regexp to be used for matching
     * @see PApplet#matchAll(String, String)
     * @see PApplet#split(String, String)
     * @see PApplet#splitTokens(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    export function match(str : string, regexp : string) : string[];

    /**
     * ( begin auto-generated from matchAll.xml )
     * 
     * This function is used to apply a regular expression to a piece of text, and
     * return a list of matching groups (elements found inside parentheses) as a
     * two-dimensional String array. No matches will return null. If no groups are
     * specified in the regexp, but the sequence matches, a two dimensional array is
     * still returned, but the second dimension is only of length one.<br />
     * <br />
     * To use the function, first check to see if the result is null. If the result
     * is null, then the sequence did not match at all. If the sequence did match, a
     * 2D array is returned. If there are groups (specified by sets of parentheses)
     * in the regexp, then the contents of each will be returned in the array.
     * Assuming, a loop with counter variable i, element [i][0] of a regexp match
     * returns the entire matching string, and the match groups start at element
     * [i][1] (the first group is [i][1], the second [i][2], and so on).<br />
     * <br />
     * The syntax can be found in the reference for Java's
     * <a href="http://download.oracle.com/javase/6/docs/api/">Pattern</a> class.
     * For regular expression syntax, read the
     * <a href="http://download.oracle.com/javase/tutorial/essential/regex/">Java
     * Tutorial</a> on the topic.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {string} str    the String to be searched
     * @param {string} regexp the regexp to be used for matching
     * @see PApplet#match(String, String)
     * @see PApplet#split(String, String)
     * @see PApplet#splitTokens(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    export function matchAll(str : string, regexp : string) : string[][];

    /**
     * <p>
     * Convert an integer to a boolean. Because of how Java handles upgrading
     * numbers, this will also cover byte and char (as they will upgrade to an int
     * without any sort of explicit cast).
     * </p>
     * <p>
     * The preprocessor will convert boolean(what) to parseBoolean(what).
     * </p>
     * 
     * @return {boolean} false if 0, true if any other number
     * @param {number} what
     */
    export function parseBoolean(what : number) : boolean;

    /**
     * Convert the string "true" or "false" to a boolean.
     * 
     * @return {boolean} true if 'what' is "true" or "TRUE", false otherwise
     * @param {string} what
     */
    export function parseBoolean(what : string) : boolean;

    /**
     * Convert an int array to a boolean array. An int equal to zero will return
     * false, and any other value will return true.
     * 
     * @return {Array} array of boolean elements
     * @param {Array} what
     */
    export function parseBoolean(what : number[]) : boolean[];

    export function parseBoolean(what : string[]) : boolean[];

    export function parseByte(what : boolean) : number;

    export function parseByte(what : string) : number;

    export function parseByte(what : number) : number;

    export function parseByte(what : number) : number;

    export function parseByte(what : boolean[]) : number[];

    export function parseByte(what : string[]) : number[];

    export function parseByte(what : number[]) : number[];

    export function parseByte(what : number[]) : number[];

    export function parseChar(what : number) : string;

    export function parseChar(what : number) : string;

    export function parseChar(what : number[]) : string[];

    export function parseChar(what : number[]) : string[];

    export function parseInt(what : boolean) : number;

    /**
     * Note that parseInt() will un-sign a signed byte value.
     * @param {number} what
     * @return {number}
     */
    export function parseInt(what : number) : number;

    /**
     * Note that parseInt('5') is unlike String in the sense that it won't return 5,
     * but the ascii value. This is because ((int) someChar) returns the ascii
     * value, and parseInt() is just longhand for the cast.
     * @param {string} what
     * @return {number}
     */
    export function parseInt(what : string) : number;

    /**
     * Same as floor(), or an (int) cast.
     * @param {number} what
     * @return {number}
     */
    export function parseInt(what : number) : number;

    /**
     * Parse a String into an int value. Returns 0 if the value is bad.
     * @param {string} what
     * @return {number}
     */
    export function parseInt(what : string) : number;

    /**
     * Parse a String to an int, and provide an alternate value that should be used
     * when the number is invalid.
     * @param {string} what
     * @param {number} otherwise
     * @return {number}
     */
    export function parseInt(what : string, otherwise : number) : number;

    export function parseInt(what : boolean[]) : number[];

    export function parseInt(what : number[]) : number[];

    export function parseInt(what : string[]) : number[];

    export function parseInt(what : number[]) : number[];

    /**
     * Make an array of int elements from an array of String objects. If the String
     * can't be parsed as a number, it will be set to zero.
     * 
     * String s[] = { "1", "300", "44" }; int numbers[] = parseInt(s);
     * 
     * numbers will contain { 1, 300, 44 }
     * @param {Array} what
     * @return {Array}
     */
    export function parseInt(what : string[]) : number[];

    /**
     * Make an array of int elements from an array of String objects. If the String
     * can't be parsed as a number, its entry in the array will be set to the value
     * of the "missing" parameter.
     * 
     * String s[] = { "1", "300", "apple", "44" }; int numbers[] = parseInt(s,
     * 9999);
     * 
     * numbers will contain { 1, 300, 9999, 44 }
     * @param {Array} what
     * @param {number} missing
     * @return {Array}
     */
    export function parseInt(what : string[], missing : number) : number[];

    /**
     * Convert an int to a float value. Also handles bytes because of Java's rules
     * for upgrading values.
     * @param {number} what
     * @return {number}
     */
    export function parseFloat(what : number) : number;

    export function parseFloat(what : string) : number;

    export function parseFloat(what : string, otherwise : number) : number;

    export function parseFloat(what : number[]) : number[];

    export function parseFloat(what : number[]) : number[];

    export function parseFloat(what : string[]) : number[];

    export function parseFloat(what : string[], missing : number) : number[];

    export function str(x : boolean) : string;

    export function str(x : number) : string;

    export function str(x : string) : string;

    export function str(x : number) : string;

    export function str(x : number) : string;

    export function str(x : boolean[]) : string[];

    export function str(x : number[]) : string[];

    export function str(x : string[]) : string[];

    export function str(x : number[]) : string[];

    export function str(x : number[]) : string[];

    export function nf(num : number) : string;

    export function nf(nums : number[]) : string[];

    /**
     * Integer number formatter.
     */
    export var int_nf_digits : number;

    export var int_nf_commas : boolean;

    /**
     * ( begin auto-generated from nf.xml )
     * 
     * Utility function for formatting numbers into strings. There are two versions,
     * one for formatting floats and one for formatting ints. The values for the
     * <b>digits</b>, <b>left</b>, and <b>right</b> parameters should always be
     * positive integers.<br />
     * <br />
     * As shown in the above example, <b>nf()</b> is used to add zeros to the left
     * and/or right of a number. This is typically for aligning a list of numbers.
     * To <em>remove</em> digits from a floating-point number, use the <b>int()</b>,
     * <b>ceil()</b>, <b>floor()</b>, or <b>round()</b> functions.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {Array} nums   the numbers to format
     * @param {number} digits number of digits to pad with zero
     * @see PApplet#nfs(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfc(float, int)
     * @see <a href=
     * "https://processing.org/reference/intconvert_.html">int(float)</a>
     * @return {Array}
     */
    export function nf(nums : number[], digits : number) : string[];

    /**
     * @param {number} num the number to format
     * @param {number} digits
     * @return {string}
     */
    export function nf(num : number, digits : number) : string;

    /**
     * ( begin auto-generated from nfc.xml )
     * 
     * Utility function for formatting numbers into strings and placing appropriate
     * commas to mark units of 1000. There are two versions, one for formatting ints
     * and one for formatting an array of ints. The value for the <b>digits</b>
     * parameter should always be a positive integer. <br/>
     * <br/>
     * For a non-US locale, this will insert periods instead of commas, or whatever
     * is apprioriate for that region.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {Array} nums the numbers to format
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @return {Array}
     */
    export function nfc(nums : number[]) : string[];

    /**
     * @param {number} num the number to format
     * @return {string}
     */
    export function nfc(num : number) : string;

    /**
     * ( begin auto-generated from nfs.xml )
     * 
     * Utility function for formatting numbers into strings. Similar to <b>nf()</b>
     * but leaves a blank space in front of positive numbers so they align with
     * negative numbers in spite of the minus symbol. There are two versions, one
     * for formatting floats and one for formatting ints. The values for the
     * <b>digits</b>, <b>left</b>, and <b>right</b> parameters should always be
     * positive integers.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {number} num    the number to format
     * @param {number} digits number of digits to pad with zeroes
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfc(float, int)
     * @return {string}
     */
    export function nfs(num : number, digits : number) : string;

    /**
     * @param {Array} nums the numbers to format
     * @param {number} digits
     * @return {Array}
     */
    export function nfs(nums : number[], digits : number) : string[];

    /**
     * ( begin auto-generated from nfp.xml )
     * 
     * Utility function for formatting numbers into strings. Similar to <b>nf()</b>
     * but puts a "+" in front of positive numbers and a "-" in front of negative
     * numbers. There are two versions, one for formatting floats and one for
     * formatting ints. The values for the <b>digits</b>, <b>left</b>, and
     * <b>right</b> parameters should always be positive integers.
     * 
     * ( end auto-generated )
     * 
     * @webref data:string_functions
     * @param {number} num    the number to format
     * @param {number} digits number of digits to pad with zeroes
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @see PApplet#nfc(float, int)
     * @return {string}
     */
    export function nfp(num : number, digits : number) : string;

    /**
     * @param {Array} nums the numbers to format
     * @param {number} digits
     * @return {Array}
     */
    export function nfp(nums : number[], digits : number) : string[];

    export var float_nf_left : number;

    export var float_nf_right : number;

    export var float_nf_commas : boolean;

    /**
     * @param {number} left  number of digits to the left of the decimal point
     * @param {number} right number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    export function nf(nums : number[], left : number, right : number) : string[];

    export function nf(num : number, left : number, right : number) : string;

    /**
     * @param {number} right number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    export function nfc(nums : number[], right : number) : string[];

    export function nfc(num : number, right : number) : string;

    /**
     * @param {number} left  the number of digits to the left of the decimal point
     * @param {number} right the number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    export function nfs(nums : number[], left : number, right : number) : string[];

    export function nfs(num : number, left : number, right : number) : string;

    /**
     * @param {number} left  the number of digits to the left of the decimal point
     * @param {number} right the number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    export function nfp(nums : number[], left : number, right : number) : string[];

    export function nfp(num : number, left : number, right : number) : string;

    /**
     * ( begin auto-generated from hex.xml )
     * 
     * Converts a byte, char, int, or color to a String containing the equivalent
     * hexadecimal notation. For example color(0, 102, 153) will convert to the
     * String "FF006699". This function can help make your geeky debugging sessions
     * much happier. <br/>
     * <br/>
     * Note that the maximum number of digits is 8, because an int value can only
     * represent up to 32 bits. Specifying more than eight digits will simply
     * shorten the string to eight anyway.
     * 
     * ( end auto-generated )
     * 
     * @webref data:conversion
     * @param {number} value the value to convert
     * @see PApplet#unhex(String)
     * @see PApplet#binary(byte)
     * @see PApplet#unbinary(String)
     * @return {string}
     */
    export function hex(value : number) : string;

    export function hex(value : string) : string;

    export function hex(value : number) : string;

    /**
     * @param {number} digits the number of digits (maximum 8)
     * @param {number} value
     * @return {string}
     */
    export function hex(value : number, digits : number) : string;

    /**
     * ( begin auto-generated from unhex.xml )
     * 
     * Converts a String representation of a hexadecimal number to its equivalent
     * integer value.
     * 
     * ( end auto-generated )
     * 
     * @webref data:conversion
     * @param {string} value String to convert to an integer
     * @see PApplet#hex(int, int)
     * @see PApplet#binary(byte)
     * @see PApplet#unbinary(String)
     * @return {number}
     */
    export function unhex(value : string) : number;

    /**
     * Returns a String that contains the binary value of a byte. The returned value
     * will always have 8 digits.
     * @param {number} value
     * @return {string}
     */
    export function binary(value : number) : string;

    /**
     * Returns a String that contains the binary value of a char. The returned value
     * will always have 16 digits because chars are two bytes long.
     * @param {string} value
     * @return {string}
     */
    export function binary(value : string) : string;

    /**
     * Returns a String that contains the binary value of an int. The length depends
     * on the size of the number itself. If you want a specific number of digits use
     * binary(int what, int digits) to specify how many.
     * @param {number} value
     * @return {string}
     */
    export function binary(value : number) : string;

    /**
     * ( begin auto-generated from binary.xml )
     * 
     * Converts a byte, char, int, or color to a String containing the equivalent
     * binary notation. For example color(0, 102, 153, 255) will convert to the
     * String "11111111000000000110011010011001". This function can help make your
     * geeky debugging sessions much happier. <br/>
     * <br/>
     * Note that the maximum number of digits is 32, because an int value can only
     * represent up to 32 bits. Specifying more than 32 digits will simply shorten
     * the string to 32 anyway.
     * 
     * ( end auto-generated )
     * 
     * @webref data:conversion
     * @param {number} value  value to convert
     * @param {number} digits number of digits to return
     * @see PApplet#unbinary(String)
     * @see PApplet#hex(int,int)
     * @see PApplet#unhex(String)
     * @return {string}
     */
    export function binary(value : number, digits : number) : string;

    /**
     * ( begin auto-generated from unbinary.xml )
     * 
     * Converts a String representation of a binary number to its equivalent integer
     * value. For example, unbinary("00001000") will return 8.
     * 
     * ( end auto-generated )
     * 
     * @webref data:conversion
     * @param {string} value String to convert to an integer
     * @see PApplet#binary(byte)
     * @see PApplet#hex(int,int)
     * @see PApplet#unhex(String)
     * @return {number}
     */
    export function unbinary(value : string) : number;

    export function blendColor(c1 : number, c2 : number, mode : number) : number;

    /**
     * main() method for running this class from the command line.
     * <p>
     * Usage: PApplet [options] &lt;class name&gt; [sketch args]
     * <ul>
     * <li>The [options] are one or several of the parameters seen below.
     * <li>The class name is required. If you're running outside the PDE and your
     * class is in a package, this should include the full name. That means that if
     * the class is called Sketchy and the package is com.sketchycompany then
     * com.sketchycompany.Sketchy should be used as the class name.
     * <li>The [sketch args] are any command line parameters you want to send to the
     * sketch itself. These will be passed into the args[] array in PApplet.
     * <p>
     * The simplest way to turn and sketch into an application is to add the
     * following code to your program:
     * 
     * <PRE>
     * static public void main(String args[]) {
     * PApplet.main("YourSketchName");
     * }
     * </PRE>
     * 
     * That will properly launch your code from a double-clickable .jar or from the
     * command line.
     * 
     * <PRE>
     * Parameters useful for launching or also used by the PDE:
     * 
     * --location=x,y         Upper-lefthand corner of where the applet
     * should appear on screen. If not used,
     * the default is to center on the main screen.
     * 
     * --present              Presentation mode: blanks the entire screen and
     * shows the sketch by itself. If the sketch is
     * smaller than the screen, the background around it
     * will use the --window-color setting.
     * 
     * --hide-stop            Use to hide the stop button in situations where
     * you don't want to allow users to exit. also
     * see the FAQ on information for capturing the ESC
     * key when running in presentation mode.
     * 
     * --stop-color=#xxxxxx   Color of the 'stop' text used to quit an
     * sketch when it's in present mode.
     * 
     * --window-color=#xxxxxx Background color of the window. The color used
     * around the sketch when it's smaller than the
     * minimum window size for the OS, and the matte
     * color when using 'present' mode.
     * 
     * --sketch-path          Location of where to save files from functions
     * like saveStrings() or saveFrame(). defaults to
     * the folder that the java application was
     * launched from, which means if this isn't set by
     * the pde, everything goes into the same folder
     * as processing.exe.
     * 
     * --display=n            Set what display should be used by this sketch.
     * Displays are numbered starting from 1. This will
     * be overridden by fullScreen() calls that specify
     * a display. Omitting this option will cause the
     * default display to be used.
     * 
     * Parameters used by Processing when running via the PDE
     * 
     * --external             set when the applet is being used by the PDE
     * 
     * --editor-location=x,y  position of the upper-lefthand corner of the
     * editor window, for placement of applet window
     * 
     * All parameters *after* the sketch class name are passed to the sketch
     * itself and available from its 'args' array while the sketch is running.
     * 
     * &#64;see PApplet#args
     * </PRE>
     * @param {Array} args
     */
    export function main(args : string[]);

    /**
     * Convenience method so that PApplet.main(YourSketch.class) launches a sketch,
     * rather than having to call getName() on it.
     * @param {*} mainClass
     * @param {Array} args
     */
    export function main(mainClass : any, ...args : string[]);

    /**
     * Convenience method so that PApplet.main("YourSketch") launches a sketch,
     * rather than having to wrap it into a single element String array.
     * 
     * @param {string} mainClass name of the class to load (with package if any)
     */
    export function main(mainClass : string);

    /**
     * Convenience method so that PApplet.main("YourSketch", args) launches a
     * sketch, rather than having to wrap it into a String array, and appending the
     * 'args' array when not null.
     * 
     * @param {string} mainClass  name of the class to load (with package if any)
     * @param {Array} sketchArgs command line arguments to pass to the sketch's 'args'
     * array. Note that this is <i>not</i> the same as the args
     * passed to (and understood by) PApplet such as --display.
     */
    export function main(mainClass : string, sketchArgs : string[]);

    export function runSketch(args : string[], constructedSketch : any);

    /**
     * Convenience method, should only be called by PSurface subclasses.
     */
    export function hideMenuBar();

    /**
     * @nowebref Interpolate between two colors. Like lerp(), but for the individual
     * color components of a color supplied as an int value.
     * @param {number} c1
     * @param {number} c2
     * @param {number} amt
     * @param {number} mode
     * @return {number}
     */
    export function lerpColor(c1 : number, c2 : number, amt : number, mode : number) : number;

    /**
     * Display a warning that the specified method is only available with 3D.
     * 
     * @param {string} method The method name (no parentheses)
     */
    export function showDepthWarning(method : string);

    /**
     * Display a warning that the specified method that takes x, y, z parameters can
     * only be used with x and y parameters in this renderer.
     * 
     * @param {string} method The method name (no parentheses)
     */
    export function showDepthWarningXYZ(method : string);

    /**
     * Display a warning that the specified method is simply unavailable.
     * @param {string} method
     */
    export function showMethodWarning(method : string);

    /**
     * Error that a particular variation of a method is unavailable (even though
     * other variations are). For instance, if vertex(x, y, u, v) is not available,
     * but vertex(x, y) is just fine.
     * @param {string} str
     */
    export function showVariationWarning(str : string);

    /**
     * Display a warning that the specified method is not implemented, meaning that
     * it could be either a completely missing function, although other variations
     * of it may still work properly.
     * @param {string} method
     */
    export function showMissingWarning(method : string);
}


declare namespace PApplet {

    export interface PImageLike {
        width : number;

        height : number;

        imageData : ImageData;

        toImageData() : ImageData;
    }

    export class RegisteredMethods {
        public __parent: any;
        count : number;

        objects : any[];

        methods : { owner: any, name: string, fn : Function }[];

        emptyArgs : any[];

        handle();

        handle(args : any[]);

        public remove(object : any);

        findIndex(object : any) : number;
    }

    export class AsyncImageLoader {
        public __parent: any;
        filename : string;

        extension : string;

        vessel : PImage;

        public constructor(__parent: any, filename : string, extension : string, vessel : PImage);
    }

    export class Externals {
        public canvas : HTMLCanvasElement;
    }
}


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


/**
 * Adds an additional parameter that indicates the font came from a file,
 * not a built-in OS font.
 * 
 * @nowebref
 * @param {*} font
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
    font : any;

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
    static fonts : any;

    static fontDifferent : any;

    lazyImage : any;

    lazyGraphics : any;

    lazyMetrics : any;

    lazySamples : number[];

    public constructor();

    public constructor(font : any, smooth : boolean);

    public constructor(font : any, smooth : boolean, charset : string[]);

    public constructor(font : any, smooth : boolean, charset : string[], stream : boolean, density : number);

    public constructor(input : { str: string, cursor: number });

    /**
     * Write this PFont to an OutputStream.
     * <p>
     * This is used by the Create Font tool, or whatever anyone else dreams
     * up for messing with fonts themselves.
     * <p>
     * It is assumed that the calling class will handle closing
     * the stream when finished.
     * @param {*} output
     */
    public save(output : any);

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
     * @return {*}
     */
    public getFont() : any;

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
     * @return {*}
     */
    public static findFont(name : string) : any;
}

declare namespace PFont {

    /**
     * A single character, and its visage.
     * @param {*} is
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

        public constructor(__parent: any, is : any);

        readHeader(is : any);

        writeHeader(os : any);

        readBitmap(is : any);

        writeBitmap(os : any);

        constructor(__parent: any, c : string);
    }
}


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

    public fromImageData(imageData : ImageData);

    public toImageData() : ImageData;
}

/**
 * A matrix is used to define graphical transformations. PMatrix is the common
 * interface for both the 2D and 3D matrix classes in Processing. A matrix is a
 * grid of numbers, which can be multiplied by a vector to give another vector.
 * Multiplying a point by a particular matrix might translate it, rotate it,
 * or carry out a combination of transformations.
 * 
 * Multiplying matrices by each other combines their effects; use the
 * {@code apply} and {@code preApply} methods for this.
 * @class
 */
interface PMatrix {
    /**
     * Make this an identity matrix. Multiplying by it will have no effect.
     */
    reset();

    /**
     * Returns a copy of this PMatrix.
     * @return {*}
     */
    get() : PMatrix;

    /**
     * Copies the matrix contents into a float array.
     * If target is null (or not the correct size), a new array will be created.
     * @param {Array} target
     * @return {Array}
     */
    get(target : number[]) : number[];

    /**
     * Make this matrix become a copy of src.
     * @param {*} src
     */
    set(src : PMatrix);

    /**
     * Set the contents of this matrix to the contents of source. Fills the
     * matrix left-to-right, starting in the top row.
     * @param {Array} source
     */
    set(source : number[]);

    /**
     * Set the matrix content to this 2D matrix or its 3D equivalent.
     * @param {number} m00
     * @param {number} m01
     * @param {number} m02
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     */
    set(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    /**
     * Set the matrix content to the 3D matrix supplied, if this matrix is 3D.
     * @param {number} m00
     * @param {number} m01
     * @param {number} m02
     * @param {number} m03
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     * @param {number} m13
     * @param {number} m20
     * @param {number} m21
     * @param {number} m22
     * @param {number} m23
     * @param {number} m30
     * @param {number} m31
     * @param {number} m32
     * @param {number} m33
     */
    set(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    translate(tx : number, ty : number);

    translate(tx : number, ty : number, tz : number);

    rotate(angle : number);

    rotateX(angle : number);

    rotateY(angle : number);

    rotateZ(angle : number);

    rotate(angle : number, v0 : number, v1 : number, v2 : number);

    scale(s : number);

    scale(sx : number, sy : number);

    scale(x : number, y : number, z : number);

    shearX(angle : number);

    shearY(angle : number);

    /**
     * Multiply this matrix by another.
     * @param {*} source
     */
    apply(source : PMatrix);

    /**
     * Multiply this matrix by another.
     * @param {PMatrix2D} source
     */
    apply(source : PMatrix2D);

    /**
     * Multiply this matrix by another.
     * @param {PMatrix3D} source
     */
    apply(source : PMatrix3D);

    /**
     * Multiply this matrix by another.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    apply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Multiply this matrix by another.
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
    apply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Apply another matrix to the left of this one.
     * @param {*} left
     */
    preApply(left : PMatrix);

    /**
     * Apply another matrix to the left of this one.
     * @param {PMatrix2D} left
     */
    preApply(left : PMatrix2D);

    /**
     * Apply another matrix to the left of this one. 3D only.
     * @param {PMatrix3D} left
     */
    preApply(left : PMatrix3D);

    /**
     * Apply another matrix to the left of this one.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    preApply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Apply another matrix to the left of this one. 3D only.
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
    preApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Multiply source by this matrix, and return the result.
     * The result will be stored in target if target is non-null, and target
     * will then be the matrix returned. This improves performance if you reuse
     * target, so it's recommended if you call this many times in draw().
     * @param {PVector} source
     * @param {PVector} target
     * @return {PVector}
     */
    mult(source : PVector, target : PVector) : PVector;

    /**
     * Multiply a multi-element vector against this matrix.
     * Supplying and recycling a target array improves performance, so it's
     * recommended if you call this many times in draw().
     * @param {Array} source
     * @param {Array} target
     * @return {Array}
     */
    mult(source : number[], target : number[]) : number[];

    /**
     * Transpose this matrix; rows become columns and columns rows.
     */
    transpose();

    /**
     * Invert this matrix. Will not necessarily succeed, because some matrices
     * map more than one point to the same image point, and so are irreversible.
     * @return {boolean} true if successful
     */
    invert() : boolean;

    /**
     * @return {number} the determinant of the matrix
     */
    determinant() : number;
}

/**
 * 3x2 affine matrix implementation.
 * Matrices are used to describe a transformation; see {@link PMatrix} for a
 * general description. This matrix looks like the following when multiplying
 * a vector (x, y) in {@code mult()}.
 * <pre>
 * [m00 m01 m02][x]   [m00*x + m01*y + m02*1]   [x']
 * [m10 m11 m12][y] = [m10*x + m11*y + m12*1] = [y']
 * [ 0   0   1 ][1]   [ 0*x  +  0*y  +  1*1 ]   [ 1]</pre>
 * (x', y') is returned. The values in the matrix determine the transformation.
 * They are modified by the various transformation functions.
 * @param {number} m00
 * @param {number} m01
 * @param {number} m02
 * @param {number} m10
 * @param {number} m11
 * @param {number} m12
 * @class
 */
declare class PMatrix2D implements PMatrix {
    public m00 : number;

    public m01 : number;

    public m02 : number;

    public m10 : number;

    public m11 : number;

    public m12 : number;

    public constructor();

    public constructor(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    public constructor(matrix : PMatrix);

    public reset();

    /**
     * Returns a copy of this PMatrix.
     * @return {PMatrix2D}
     */
    public get() : PMatrix2D;

    /**
     * Copies the matrix contents into a 6 entry float array.
     * If target is null (or not the correct size), a new array will be created.
     * Returned in the order {@code {m00, m01, m02, m10, m11, m12}}.
     * @param {Array} target
     * @return {Array}
     */
    public get(target : number[]) : number[];

    /**
     * If matrix is a PMatrix2D, sets this matrix to be a copy of it.
     * @throws IllegalArgumentException If <tt>matrix</tt> is not 2D.
     * @param {*} matrix
     */
    public set(matrix : PMatrix);

    /**
     * Unavailable in 2D. Does nothing.
     * @param {PMatrix3D} src
     */
    public set(src : PMatrix3D);

    public set(source : number[]);

    /**
     * Sets the matrix content.
     * @param {number} m00
     * @param {number} m01
     * @param {number} m02
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     */
    public set(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    /**
     * Unavailable in 2D. Does nothing.
     * @param {number} m00
     * @param {number} m01
     * @param {number} m02
     * @param {number} m03
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     * @param {number} m13
     * @param {number} m20
     * @param {number} m21
     * @param {number} m22
     * @param {number} m23
     * @param {number} m30
     * @param {number} m31
     * @param {number} m32
     * @param {number} m33
     */
    public set(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    public translate(tx : number, ty : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public translate(x : number, y : number, z : number);

    public rotate(angle : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {number} angle
     */
    public rotateX(angle : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {number} angle
     */
    public rotateY(angle : number);

    public rotateZ(angle : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {number} angle
     * @param {number} v0
     * @param {number} v1
     * @param {number} v2
     */
    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    public scale(s : number);

    public scale(sx : number, sy : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public scale(x : number, y : number, z : number);

    public shearX(angle : number);

    public shearY(angle : number);

    public apply(source : PMatrix);

    public apply(source : PMatrix2D);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {PMatrix3D} source
     */
    public apply(source : PMatrix3D);

    public apply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
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
    public apply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Apply another matrix to the left of this one.
     * @param {*} source
     */
    public preApply(source : PMatrix);

    public preApply(left : PMatrix2D);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
     * @param {PMatrix3D} left
     */
    public preApply(left : PMatrix3D);

    public preApply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Unavailable in 2D.
     * @throws IllegalArgumentException
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
    public preApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * {@inheritDoc}
     * Ignores any z component.
     * @param {PVector} source
     * @param {PVector} target
     * @return {PVector}
     */
    public mult(source : PVector, target : PVector) : PVector;

    /**
     * Multiply a two element vector against this matrix.
     * If out is null or not length four, a new float array will be returned.
     * The values for vec and out can be the same (though that's less efficient).
     * @param {Array} vec
     * @param {Array} out
     * @return {Array}
     */
    public mult(vec : number[], out : number[]) : number[];

    /**
     * Returns the x-coordinate of the result of multiplying the point (x, y)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public multX(x : number, y : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the point (x, y)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public multY(x : number, y : number) : number;

    /**
     * Unavailable in 2D. Does nothing.
     */
    public transpose();

    public invert() : boolean;

    /**
     * @return {number} the determinant of the matrix
     */
    public determinant() : number;

    public print();

    isIdentity() : boolean;

    isWarped() : boolean;

    /*private*/ static max(a : number, b : number) : number;

    /*private*/ static abs(a : number) : number;

    /*private*/ static sin(angle : number) : number;

    /*private*/ static cos(angle : number) : number;

    /*private*/ static tan(angle : number) : number;
}

/**
 * 4x4 matrix implementation.
 * Matrices are used to describe a transformation; see {@link PMatrix} for a
 * general description. This matrix looks like the following when multiplying
 * a vector (x, y, z, w) in {@code mult()}.
 * <pre>
 * [m00 m01 m02 m03][x]   [m00*x + m01*y + m02*z + m03*w]   [x']
 * [m10 m11 m12 m13][y] = [m10*x + m11*y + m12*z + m13*w] = [y']
 * [m20 m21 m22 m23][z]   [m20*x + m21*y + m22*z + m23*w]   [z']
 * [m30 m31 m32 m33][w]   [m30*x + m31*y + m32*z + m33*w]   [w']</pre>
 * (x', y', z', w') is returned. The values in the matrix determine the
 * transformation. They are modified by the various transformation functions.
 * 
 * To transform 3D coordinates, w is set to 1, amd w' is made to be 1 by
 * setting the bottom row of the matrix to <code>[0 0 0 1]</code>. The
 * resulting point is then (x', y', z').
 * @param {number} m00
 * @param {number} m01
 * @param {number} m02
 * @param {number} m03
 * @param {number} m10
 * @param {number} m11
 * @param {number} m12
 * @param {number} m13
 * @param {number} m20
 * @param {number} m21
 * @param {number} m22
 * @param {number} m23
 * @param {number} m30
 * @param {number} m31
 * @param {number} m32
 * @param {number} m33
 * @class
 */
declare class PMatrix3D implements PMatrix {
    public m00 : number;

    public m01 : number;

    public m02 : number;

    public m03 : number;

    public m10 : number;

    public m11 : number;

    public m12 : number;

    public m13 : number;

    public m20 : number;

    public m21 : number;

    public m22 : number;

    public m23 : number;

    public m30 : number;

    public m31 : number;

    public m32 : number;

    public m33 : number;

    inverseCopy : PMatrix3D;

    public constructor();

    public constructor(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    public constructor(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    public constructor(matrix : PMatrix);

    public reset();

    /**
     * Returns a copy of this PMatrix.
     * @return {PMatrix3D}
     */
    public get() : PMatrix3D;

    /**
     * Copies the matrix contents into a 16 entry float array.
     * If target is null (or not the correct size), a new array will be created.
     * @param {Array} target
     * @return {Array}
     */
    public get(target : number[]) : number[];

    public set(matrix : PMatrix);

    public set(source : number[]);

    public set(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    public set(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    public translate(tx : number, ty : number);

    public translate(tx : number, ty : number, tz : number);

    public rotate(angle : number);

    public rotateX(angle : number);

    public rotateY(angle : number);

    public rotateZ(angle : number);

    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    public scale(s : number);

    public scale(sx : number, sy : number);

    public scale(x : number, y : number, z : number);

    public shearX(angle : number);

    public shearY(angle : number);

    public apply(source : PMatrix);

    public apply(source : PMatrix2D);

    public apply(source : PMatrix3D);

    public apply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    public apply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Apply the 3D equivalent of the 2D matrix supplied to the left of this one.
     * @param {PMatrix2D} left
     */
    public preApply(left : PMatrix2D);

    /**
     * Apply another matrix to the left of this one.
     * @param {*} source
     */
    public preApply(source : PMatrix);

    /**
     * Apply another matrix to the left of this one.
     * @param {PMatrix3D} left
     */
    public preApply(left : PMatrix3D);

    /**
     * Apply the 3D equivalent of the 2D matrix supplied to the left of this one.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    public preApply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Apply another matrix to the left of this one.
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
    public preApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Multiply source by this matrix, and return the result.
     * The result will be stored in target if target is non-null, and target
     * will then be the matrix returned. This improves performance if you reuse
     * target, so it's recommended if you call this many times in draw().
     * @param {PVector} source
     * @param {PVector} target
     * @return {PVector}
     */
    public mult(source : PVector, target : PVector) : PVector;

    /**
     * Multiply a three or four element vector against this matrix. If out is
     * null or not length 3 or 4, a new float array (length 3) will be returned.
     * Supplying and recycling a target array improves performance, so it's
     * recommended if you call this many times in draw.
     * @param {Array} source
     * @param {Array} target
     * @return {Array}
     */
    public mult(source : number[], target : number[]) : number[];

    /**
     * Returns the x-coordinate of the result of multiplying the point (x, y)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public multX(x : number, y : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the point (x, y)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public multY(x : number, y : number) : number;

    /**
     * Returns the x-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multX(x : number, y : number, z : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multY(x : number, y : number, z : number) : number;

    /**
     * Returns the z-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multZ(x : number, y : number, z : number) : number;

    /**
     * Returns the fourth element of the result of multiplying the vector
     * (x, y, z) by this matrix. (Acts as if w = 1 was supplied.)
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multW(x : number, y : number, z : number) : number;

    /**
     * Returns the x-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multX(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multY(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the z-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multZ(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the w-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multW(x : number, y : number, z : number, w : number) : number;

    /**
     * Transpose this matrix; rows become columns and columns rows.
     */
    public transpose();

    /**
     * Invert this matrix. Will not necessarily succeed, because some matrices
     * map more than one point to the same image point, and so are irreversible.
     * @return {boolean} true if successful
     */
    public invert() : boolean;

    /**
     * Calculate the determinant of a 3x3 matrix.
     * @return {number} result
     * @param {number} t00
     * @param {number} t01
     * @param {number} t02
     * @param {number} t10
     * @param {number} t11
     * @param {number} t12
     * @param {number} t20
     * @param {number} t21
     * @param {number} t22
     * @private
     */
    /*private*/ determinant3x3(t00 : number, t01 : number, t02 : number, t10 : number, t11 : number, t12 : number, t20 : number, t21 : number, t22 : number) : number;

    /**
     * @return {number} the determinant of the matrix
     */
    public determinant() : number;

    invTranslate(tx : number, ty : number, tz : number);

    invRotateX(angle : number);

    invRotateY(angle : number);

    invRotateZ(angle : number);

    invRotate(angle : number, v0 : number, v1 : number, v2 : number);

    invScale(x : number, y : number, z : number);

    invApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number) : boolean;

    public print();

    /*private*/ static max(a : number, b : number) : number;

    /*private*/ static abs(a : number) : number;

    /*private*/ static sin(angle : number) : number;

    /*private*/ static cos(angle : number) : number;
}

/**
 * ( begin auto-generated from PShape.xml )
 * 
 * Datatype for storing shapes. Processing can currently load and display
 * SVG (Scalable Vector Graphics) shapes. Before a shape is used, it must
 * be loaded with the <b>loadShape()</b> function. The <b>shape()</b>
 * function is used to draw the shape to the display window. The
 * <b>PShape</b> object contain a group of methods, linked below, that can
 * operate on the shape data.
 * <br /><br />
 * The <b>loadShape()</b> function supports SVG files created with Inkscape
 * and Adobe Illustrator. It is not a full SVG implementation, but offers
 * some straightforward support for handling vector data.
 * 
 * ( end auto-generated )
 * <h3>Advanced</h3>
 * 
 * In-progress class to handle shape data, currently to be considered of
 * alpha or beta quality. Major structural work may be performed on this class
 * after the release of Processing 1.0. Such changes may include:
 * 
 * <ul>
 * <li> addition of proper accessors to read shape vertex and coloring data
 * (this is the second most important part of having a PShape class after all).
 * <li> a means of creating PShape objects ala beginShape() and endShape().
 * <li> load(), update(), and cache methods ala PImage, so that shapes can
 * have renderer-specific optimizations, such as vertex arrays in OpenGL.
 * <li> splitting this class into multiple classes to handle different
 * varieties of shape data (primitives vs collections of vertices vs paths)
 * <li> change of package declaration, for instance moving the code into
 * package def.processing.shape (if the code grows too much).
 * </ul>
 * 
 * <p>For the time being, this class and its shape() and loadShape() friends in
 * PApplet exist as placeholders for more exciting things to come. If you'd
 * like to work with this class, make a subclass (see how PShapeSVG works)
 * and you can play with its internal methods all you like.</p>
 * 
 * <p>Library developers are encouraged to create PShape objects when loading
 * shape data, so that they can eventually hook into the bounty that will be
 * the PShape interface, and the ease of loadShape() and shape().</p>
 * 
 * @webref shape
 * @usage Web &amp; Application
 * @see PApplet#loadShape(String)
 * @see PApplet#createShape()
 * @see PApplet#shapeMode(int)
 * @instanceName sh any variable of type PShape
 * @param {PGraphics} g
 * @param {number} kind
 * @param {Array} params
 * @class
 */
declare class PShape implements PConstants {
    name : string;

    nameTable : any;

    /**
     * A line, ellipse, arc, image, etc.
     */
    public static PRIMITIVE : number;

    /**
     * A series of vertex, curveVertex, and bezierVertex calls.
     */
    public static PATH : number;

    /**
     * Collections of vertices created with beginShape().
     */
    public static GEOMETRY : number;

    /**
     * The shape type, one of GROUP, PRIMITIVE, PATH, or GEOMETRY.
     */
    family : number;

    /**
     * ELLIPSE, LINE, QUAD; TRIANGLE_FAN, QUAD_STRIP; etc.
     */
    kind : number;

    matrix : PMatrix;

    textureMode : any;

    /**
     * Texture or image data associated with this shape.
     */
    image : PImage;

    public static OUTSIDE_BEGIN_END_ERROR : string;

    public static INSIDE_BEGIN_END_ERROR : string;

    public static NO_SUCH_VERTEX_ERROR : string;

    public static NO_VERTICES_ERROR : string;

    public static NOT_A_SIMPLE_VERTEX : string;

    public static PER_VERTEX_UNSUPPORTED : string;

    /**
     * ( begin auto-generated from PShape_width.xml )
     * 
     * The width of the PShape document.
     * 
     * ( end auto-generated )
     * @webref pshape:field
     * @usage web_application
     * @brief     Shape document width
     * @see PShape#height
     */
    public width : number;

    /**
     * ( begin auto-generated from PShape_height.xml )
     * 
     * The height of the PShape document.
     * 
     * ( end auto-generated )
     * @webref pshape:field
     * @usage web_application
     * @brief     Shape document height
     * @see PShape#width
     */
    public height : number;

    public depth : number;

    g : PGraphics;

    visible : boolean;

    /**
     * Retained shape being created with beginShape/endShape
     */
    openShape : boolean;

    openContour : boolean;

    stroke : any;

    strokeColor : number;

    strokeWeight : any;

    strokeCap : any;

    strokeJoin : any;

    fill : any;

    fillColor : number;

    tint : any;

    tintColor : number;

    ambientColor : number;

    setAmbient : any;

    specularColor : number;

    emissiveColor : number;

    shininess : any;

    sphereDetailU : number;

    sphereDetailV : number;

    rectMode : number;

    ellipseMode : number;

    /**
     * Temporary toggle for whether styles should be honored.
     */
    style : boolean;

    /**
     * For primitive shapes in particular, params like x/y/w/h or x1/y1/x2/y2.
     */
    params : number[];

    vertexCount : number;

    /**
     * When drawing POLYGON shapes, the second param is an array of length
     * VERTEX_FIELD_COUNT. When drawing PATH shapes, the second param has only
     * two variables.
     */
    vertices : number[][];

    parent : PShape;

    childCount : number;

    children : PShape[];

    /**
     * Array of VERTEX, BEZIER_VERTEX, and CURVE_VERTEX calls.
     */
    vertexCodeCount : number;

    vertexCodes : number[];

    /**
     * True if this is a closed path.
     */
    close : boolean;

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
     * True if colorMode(RGB, 255)
     */
    colorModeDefault : boolean;

    /**
     * True if contains 3D data
     */
    is3D : any;

    perVertexStyles : boolean;

    public constructor();

    public constructor(family : number);

    public constructor(g : PGraphics, family : number);

    public constructor(g : PGraphics, kind : number, ...params : number[]);

    public setFamily(family : number);

    public setKind(kind : number);

    public setName(name : string);

    public getName() : string;

    /**
     * ( begin auto-generated from PShape_isVisible.xml )
     * 
     * Returns a boolean value "true" if the image is set to be visible,
     * "false" if not. This is modified with the <b>setVisible()</b> parameter.
     * <br/> <br/>
     * The visibility of a shape is usually controlled by whatever program
     * created the SVG file. For instance, this parameter is controlled by
     * showing or hiding the shape in the layers palette in Adobe Illustrator.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Returns a boolean value "true" if the image is set to be visible, "false" if not
     * @see PShape#setVisible(boolean)
     * @return {boolean}
     */
    public isVisible() : boolean;

    /**
     * ( begin auto-generated from PShape_setVisible.xml )
     * 
     * Sets the shape to be visible or invisible. This is determined by the
     * value of the <b>visible</b> parameter.
     * <br/> <br/>
     * The visibility of a shape is usually controlled by whatever program
     * created the SVG file. For instance, this parameter is controlled by
     * showing or hiding the shape in the layers palette in Adobe Illustrator.
     * 
     * ( end auto-generated )
     * @webref pshape:mathod
     * @usage web_application
     * @brief Sets the shape to be visible or invisible
     * @param {boolean} visible "false" makes the shape invisible and "true" makes it visible
     * @see PShape#isVisible()
     */
    public setVisible(visible : boolean);

    /**
     * ( begin auto-generated from PShape_disableStyle.xml )
     * 
     * Disables the shape's style data and uses Processing's current styles.
     * Styles include attributes such as colors, stroke weight, and stroke
     * joints.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Overrides this shape's style information and uses PGraphics styles and
     * colors. Identical to ignoreStyles(true). Also disables styles for all
     * child shapes.
     * @webref pshape:method
     * @usage web_application
     * @brief     Disables the shape's style data and uses Processing styles
     * @see PShape#enableStyle()
     */
    public disableStyle();

    /**
     * ( begin auto-generated from PShape_enableStyle.xml )
     * 
     * Enables the shape's style data and ignores Processing's current styles.
     * Styles include attributes such as colors, stroke weight, and stroke
     * joints.
     * 
     * ( end auto-generated )
     * 
     * @webref pshape:method
     * @usage web_application
     * @brief Enables the shape's style data and ignores the Processing styles
     * @see PShape#disableStyle()
     */
    public enableStyle();

    /**
     * Get the width of the drawing area (not necessarily the shape boundary).
     * @return {number}
     */
    public getWidth() : number;

    /**
     * Get the height of the drawing area (not necessarily the shape boundary).
     * @return {number}
     */
    public getHeight() : number;

    /**
     * Get the depth of the shape area (not necessarily the shape boundary). Only makes sense for 3D PShape subclasses,
     * such as PShape3D.
     * @return {number}
     */
    public getDepth() : number;

    /**
     * Return true if this shape is 2D. Defaults to true.
     * @return {boolean}
     */
    public is2D() : boolean;

    public set3D(val : boolean);

    public texture(tex : PImage);

    public noTexture();

    solid(solid : boolean);

    /**
     * @webref shape:vertex
     * @brief Starts a new contour
     * @see PShape#endContour()
     */
    public beginContour();

    beginContourImpl();

    /**
     * @webref shape:vertex
     * @brief Ends a contour
     * @see PShape#beginContour()
     */
    public endContour();

    endContourImpl();

    public vertex(x : number, y : number);

    public vertex(x : number, y : number, u : number, v : number);

    public vertex(x : number, y : number, z : number);

    public vertex(x : number, y : number, z : number, u : number, v : number);

    public normal(nx : number, ny : number, nz : number);

    public attribPosition(name : string, x : number, y : number, z : number);

    public attribNormal(name : string, nx : number, ny : number, nz : number);

    public attribColor(name : string, color : number);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : boolean[]);

    /**
     * @webref pshape:method
     * @brief Starts the creation of a new PShape
     * @see PApplet#endShape()
     */
    public beginShape();

    public beginShape(kind : number);

    /**
     * @webref pshape:method
     * @brief Finishes the creation of a new PShape
     * @see PApplet#beginShape()
     */
    public endShape();

    public endShape(mode : number);

    public noFill();

    public noStroke();

    public noTint();

    public ambient(rgb : number);

    public ambient(gray : number);

    public ambient(x : number, y : number, z : number);

    public specular(rgb : number);

    public specular(gray : number);

    public specular(x : number, y : number, z : number);

    public emissive(rgb : number);

    public emissive(gray : number);

    public emissive(x : number, y : number, z : number);

    public bezierDetail(detail : number);

    public bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    public bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    public quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    public quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    public curveDetail(detail : number);

    public curveTightness(tightness : number);

    public curveVertex(x : number, y : number);

    public curveVertex(x : number, y : number, z : number);

    pre(g : PGraphics);

    styles(g : PGraphics);

    post(g : PGraphics);

    static copyPrimitive(src : PShape, dest : PShape);

    static copyGeometry(src : PShape, dest : PShape);

    static copyPath(src : PShape, dest : PShape);

    static copyMatrix(src : PShape, dest : PShape);

    static copyStyles(src : PShape, dest : PShape);

    static copyImage(src : PShape, dest : PShape);

    /**
     * Called by the following (the shape() command adds the g)
     * PShape s = loadShape("blah.svg");
     * shape(s);
     * @param {PGraphics} g
     */
    public draw(g : PGraphics);

    /**
     * Draws the SVG document.
     * @param {PGraphics} g
     */
    drawImpl(g : PGraphics);

    drawGroup(g : PGraphics);

    drawPrimitive(g : PGraphics);

    drawGeometry(g : PGraphics);

    drawPath(g : PGraphics);

    public getParent() : PShape;

    /**
     * @webref
     * @brief Returns the number of children
     * @return {number}
     */
    public getChildCount() : number;

    /**
     * Resize the children[] array to be in line with childCount
     */
    crop();

    public getChildren() : PShape[];

    /**
     * ( begin auto-generated from PShape_getChild.xml )
     * 
     * Extracts a child shape from a parent shape. Specify the name of the
     * shape with the <b>target</b> parameter. The shape is returned as a
     * <b>PShape</b> object, or <b>null</b> is returned if there is an error.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Returns a child element of a shape as a PShape object
     * @param {number} index the layer position of the shape to get
     * @see PShape#addChild(PShape)
     * @return {PShape}
     */
    public getChild(index : number) : PShape;

    /**
     * @param {string} target the name of the shape to get
     * @return {PShape}
     */
    public getChild(target : string) : PShape;

    /**
     * Same as getChild(name), except that it first walks all the way up the
     * hierarchy to the eldest grandparent, so that children can be found anywhere.
     * @param {string} target
     * @return {PShape}
     */
    public findChild(target : string) : PShape;

    /**
     * @webref pshape:method
     * @brief Adds a new child
     * @param {PShape} who any variable of type PShape
     * @see PShape#getChild(int)
     */
    public addChild(who : PShape);

    /**
     * @param {number} idx the layer position in which to insert the new child
     * @param {PShape} who
     */
    public addChild(who : PShape, idx : number);

    /**
     * Remove the child shape with index idx.
     * @param {number} idx
     */
    public removeChild(idx : number);

    /**
     * Add a shape to the name lookup table.
     * @param {string} nom
     * @param {PShape} shape
     */
    public addName(nom : string, shape : PShape);

    /**
     * Returns the index of child who.
     * @param {PShape} who
     * @return {number}
     */
    public getChildIndex(who : PShape) : number;

    public getTessellation() : PShape;

    /**
     * The shape type, one of GROUP, PRIMITIVE, PATH, or GEOMETRY.
     * @return {number}
     */
    public getFamily() : number;

    public getKind() : number;

    public getParams() : number[];

    public getParams(target : number[]) : number[];

    public getParam(index : number) : number;

    setParams(source : number[]);

    public setPath(vcount : number, verts : number[][]);

    setPath(vcount : number, verts : number[][], ccount : number, codes : number[]);

    /**
     * @webref pshape:method
     * @brief Returns the total number of vertices as an int
     * @see PShape#getVertex(int)
     * @see PShape#setVertex(int, float, float)
     * @return {number}
     */
    public getVertexCount() : number;

    /**
     * @webref pshape:method
     * @brief Returns the vertex at the index position
     * @param {number} index the location of the vertex
     * @see PShape#setVertex(int, float, float)
     * @see PShape#getVertexCount()
     * @return {PVector}
     */
    public getVertex(index : number) : PVector;

    /**
     * @param {PVector} vec PVector to assign the data to
     * @param {number} index
     * @return {PVector}
     */
    public getVertex(index : number, vec : PVector) : PVector;

    public getVertexX(index : number) : number;

    public getVertexY(index : number) : number;

    public getVertexZ(index : number) : number;

    /**
     * @webref pshape:method
     * @brief Sets the vertex at the index position
     * @param {number} index the location of the vertex
     * @param {number} x the x value for the vertex
     * @param {number} y the y value for the vertex
     * @see PShape#getVertex(int)
     * @see PShape#getVertexCount()
     */
    public setVertex(index : number, x : number, y : number);

    /**
     * @param {number} z the z value for the vertex
     * @param {number} index
     * @param {number} x
     * @param {number} y
     */
    public setVertex(index : number, x : number, y : number, z : number);

    /**
     * @param {PVector} vec the PVector to define the x, y, z coordinates
     * @param {number} index
     */
    public setVertex(index : number, vec : PVector);

    public getNormal(index : number) : PVector;

    public getNormal(index : number, vec : PVector) : PVector;

    public getNormalX(index : number) : number;

    public getNormalY(index : number) : number;

    public getNormalZ(index : number) : number;

    public setNormal(index : number, nx : number, ny : number, nz : number);

    public setAttrib(name : string, index : number, ...values : number[]);

    public setAttrib(name : string, index : number, ...values : number[]);

    public setAttrib(name : string, index : number, ...values : boolean[]);

    public getTextureU(index : number) : number;

    public getTextureV(index : number) : number;

    public setTextureUV(index : number, u : number, v : number);

    public setTextureMode(mode : number);

    public setTexture(tex : PImage);

    public getFill(index : number) : number;

    /**
     * @nowebref
     * @param {boolean} fill
     */
    public setFill(fill : boolean);

    /**
     * ( begin auto-generated from PShape_setFill.xml )
     * 
     * The <b>setFill()</b> method defines the fill color of a <b>PShape</b>.
     * This method is used after shapes are created or when a shape is defined explicitly
     * (e.g. <b>createShape(RECT, 20, 20, 80, 80)</b>) as shown in the above example.
     * When a shape is created with <b>beginShape()</b> and <b>endShape()</b>, its
     * attributes may be changed with <b>fill()</b> and <b>stroke()</b> within
     * <b>beginShape()</b> and <b>endShape()</b>. However, after the shape is
     * created, only the <b>setFill()</b> method can define a new fill value for
     * the <b>PShape</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref
     * @param {number} fill
     * @brief Set the fill value
     */
    public setFill(fill : number);

    /**
     * @nowebref
     * @param {number} index
     * @param {number} fill
     */
    public setFill(index : number, fill : number);

    public getTint(index : number) : number;

    public setTint(tint : boolean);

    public setTint(fill : number);

    public setTint(index : number, tint : number);

    public getStroke(index : number) : number;

    /**
     * @nowebref
     * @param {boolean} stroke
     */
    public setStroke(stroke : boolean);

    /**
     * ( begin auto-generated from PShape_setStroke.xml )
     * 
     * The <b>setStroke()</b> method defines the outline color of a <b>PShape</b>.
     * This method is used after shapes are created or when a shape is defined
     * explicitly (e.g. <b>createShape(RECT, 20, 20, 80, 80)</b>) as shown in
     * the above example. When a shape is created with <b>beginShape()</b> and
     * <b>endShape()</b>, its attributes may be changed with <b>fill()</b> and
     * <b>stroke()</b> within <b>beginShape()</b> and <b>endShape()</b>.
     * However, after the shape is created, only the <b>setStroke()</b> method
     * can define a new stroke value for the <b>PShape</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref
     * @param {number} stroke
     * @brief Set the stroke value
     */
    public setStroke(stroke : number);

    /**
     * @nowebref
     * @param {number} index
     * @param {number} stroke
     */
    public setStroke(index : number, stroke : number);

    public getStrokeWeight(index : number) : number;

    public setStrokeWeight(weight : number);

    public setStrokeWeight(index : number, weight : number);

    public setStrokeJoin(join : number);

    public setStrokeCap(cap : number);

    public getAmbient(index : number) : number;

    public getSpecular(index : number) : number;

    public setSpecular(specular : number);

    public setSpecular(index : number, specular : number);

    public getEmissive(index : number) : number;

    public setEmissive(emissive : number);

    public setEmissive(index : number, emissive : number);

    public getShininess(index : number) : number;

    public setShininess(shine : number);

    public setShininess(index : number, shine : number);

    public getVertexCodes() : number[];

    public getVertexCodeCount() : number;

    /**
     * One of VERTEX, BEZIER_VERTEX, CURVE_VERTEX, or BREAK.
     * @param {number} index
     * @return {number}
     */
    public getVertexCode(index : number) : number;

    public isClosed() : boolean;

    public contains(x : number, y : number) : boolean;

    /**
     * ( begin auto-generated from PShape_translate.xml )
     * 
     * Specifies an amount to displace the shape. The <b>x</b> parameter
     * specifies left/right translation, the <b>y</b> parameter specifies
     * up/down translation, and the <b>z</b> parameter specifies translations
     * toward/away from the screen. Subsequent calls to the method accumulates
     * the effect. For example, calling <b>translate(50, 0)</b> and then
     * <b>translate(20, 0)</b> is the same as <b>translate(70, 0)</b>. This
     * transformation is applied directly to the shape, it's not refreshed each
     * time <b>draw()</b> is run.
     * <br /><br />
     * Using this method with the <b>z</b> parameter requires using the P3D
     * parameter in combination with size.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Displaces the shape
     * @param {number} x left/right translation
     * @param {number} y up/down translation
     * @see PShape#rotate(float)
     * @see PShape#scale(float)
     * @see PShape#resetMatrix()
     */
    public translate(x : number, y : number);

    /**
     * @param {number} z forward/back translation
     * @param {number} x
     * @param {number} y
     */
    public translate(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from PShape_rotateX.xml )
     * 
     * Rotates a shape around the x-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateX(HALF_PI)</b> and then <b>rotateX(HALF_PI)</b> is the
     * same as <b>rotateX(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the x-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateY(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateX(angle : number);

    /**
     * ( begin auto-generated from PShape_rotateY.xml )
     * 
     * Rotates a shape around the y-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateY(HALF_PI)</b> and then <b>rotateY(HALF_PI)</b> is the
     * same as <b>rotateY(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * 
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the y-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateX(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateY(angle : number);

    /**
     * ( begin auto-generated from PShape_rotateZ.xml )
     * 
     * Rotates a shape around the z-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateZ(HALF_PI)</b> and then <b>rotateZ(HALF_PI)</b> is the
     * same as <b>rotateZ(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the z-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateX(float)
     * @see PShape#rotateY(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateZ(angle : number);

    /**
     * ( begin auto-generated from PShape_rotate.xml )
     * 
     * Rotates a shape the amount specified by the <b>angle</b> parameter.
     * Angles should be specified in radians (values from 0 to TWO_PI) or
     * converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Transformations apply to everything that happens after and subsequent
     * calls to the method accumulates the effect. For example, calling
     * <b>rotate(HALF_PI)</b> and then <b>rotate(HALF_PI)</b> is the same as
     * <b>rotate(PI)</b>. This transformation is applied directly to the shape,
     * it's not refreshed each time <b>draw()</b> is run.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotateX(float)
     * @see PShape#rotateY(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotate(angle : number);

    /**
     * @nowebref
     * @param {number} angle
     * @param {number} v0
     * @param {number} v1
     * @param {number} v2
     */
    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    /**
     * ( begin auto-generated from PShape_scale.xml )
     * 
     * Increases or decreases the size of a shape by expanding and contracting
     * vertices. Shapes always scale from the relative origin of their bounding
     * box. Scale values are specified as decimal percentages. For example, the
     * method call <b>scale(2.0)</b> increases the dimension of a shape by
     * 200%. Subsequent calls to the method multiply the effect. For example,
     * calling <b>scale(2.0)</b> and then <b>scale(1.5)</b> is the same as
     * <b>scale(3.0)</b>. This transformation is applied directly to the shape,
     * it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * Using this method with the <b>z</b> parameter requires using the P3D
     * parameter in combination with size.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Increases and decreases the size of a shape
     * @param {number} s percentate to scale the object
     * @see PShape#rotate(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public scale(s : number);

    public scale(x : number, y : number);

    /**
     * @param {number} x percentage to scale the object in the x-axis
     * @param {number} y percentage to scale the object in the y-axis
     * @param {number} z percentage to scale the object in the z-axis
     */
    public scale(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from PShape_resetMatrix.xml )
     * 
     * Replaces the current matrix of a shape with the identity matrix. The
     * equivalent function in OpenGL is glLoadIdentity().
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @brief Replaces the current matrix of a shape with the identity matrix
     * @usage web_application
     * @see PShape#rotate(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     */
    public resetMatrix();

    public applyMatrix(source : PMatrix);

    public applyMatrix(source : PMatrix2D);

    public applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    public applyMatrix(source : PMatrix3D);

    public applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Make sure that the shape's matrix is 1) not null, and 2) has a matrix
     * that can handle <em>at least</em> the specified number of dimensions.
     * @param {number} dimensions
     */
    checkMatrix(dimensions : number);

    colorCalc(rgb : number);

    colorCalc(rgb : number, alpha : number);

    colorCalc(gray : number);

    colorCalc(gray : number, alpha : number);

    colorCalc(x : number, y : number, z : number);

    colorCalc(x : number, y : number, z : number, a : number);

    colorCalcARGB(argb : number, alpha : number);
}

/**
 * This class is not part of the Processing API and should not be used
 * directly. Instead, use loadShape() and methods like it, which will make
 * use of this class. Using this class directly will cause your code to break
 * when combined with future versions of Processing.
 * <p>
 * OBJ loading implemented using code from Saito's OBJLoader library:
 * http://code.google.com/p/saitoobjloader/
 * and OBJReader from Ahmet Kizilay
 * http://www.openprocessing.org/visuals/?visualID=191
 * @param {*} parent
 * @param {*} reader
 * @param {string} basePath
 * @class
 * @extends PShape
 */
declare class PShapeOBJ extends PShape {
    public constructor(parent : any, filename : string);

    public constructor(parent : any, reader : { str: string, cursor: number });

    public constructor(parent : any, reader : { str: string, cursor: number }, basePath : string);

    constructor(face : PShapeOBJ.OBJFace, mtl : PShapeOBJ.OBJMaterial, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    addChildren(faces : Array<PShapeOBJ.OBJFace>, materials : Array<PShapeOBJ.OBJMaterial>, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    static parseOBJ(parent : any, path : string, reader : { str: string, cursor: number }, faces : Array<PShapeOBJ.OBJFace>, materials : Array<PShapeOBJ.OBJMaterial>, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    static parseMTL(parent : any, mtlfn : string, path : string, reader : { str: string, cursor: number }, materials : Array<PShapeOBJ.OBJMaterial>, materialsHash : any);

    static addMaterial(mtlname : string, materials : Array<PShapeOBJ.OBJMaterial>, materialsHash : any) : PShapeOBJ.OBJMaterial;

    static rgbaValue(color : PVector) : number;

    static rgbaValue(color : PVector, alpha : number) : number;

    static getBasePath(parent : any, filename : string) : string;
}

declare namespace PShapeOBJ {

    export class OBJFace {
        vertIdx : Array<number>;

        texIdx : Array<number>;

        normIdx : Array<number>;

        matIdx : number;

        name : string;

        constructor();
    }

    export class OBJMaterial {
        name : string;

        ka : PVector;

        kd : PVector;

        ks : PVector;

        d : number;

        ns : number;

        kdMap : PImage;

        constructor();

        constructor(name : string);
    }
}


/**
 * Initializes a new SVG object from the given XML object.
 * @param {XML} svg
 * @class
 * @extends PShape
 */
declare class PShapeSVG extends PShape {
    element : XML;

    opacity : number;

    strokeOpacity : number;

    fillOpacity : number;

    /**
     * Width of containing SVG (used for percentages).
     */
    svgWidth : number;

    /**
     * Height of containing SVG (used for percentages).
     */
    svgHeight : number;

    /**
     * ?((w² + h²)/2) of containing SVG (used for percentages).
     */
    svgSizeXY : number;

    strokeGradient : PShapeSVG.Gradient;

    strokeName : string;

    fillGradient : PShapeSVG.Gradient;

    fillName : string;

    public constructor(svg : XML);

    constructor(parent : PShapeSVG, properties : XML, parseKids : boolean);

    setParent(parent : PShapeSVG);

    /**
     * Factory method for subclasses.
     * @param {PShapeSVG} parent
     * @param {XML} properties
     * @param {boolean} parseKids
     * @return {PShapeSVG}
     */
    createShape(parent : PShapeSVG, properties : XML, parseKids : boolean) : PShapeSVG;

    parseChildren(graphics : XML);

    /**
     * Parse a child XML element.
     * Override this method to add parsing for more SVG elements.
     * @param {XML} elem
     * @return {PShape}
     */
    parseChild(elem : XML) : PShape;

    parseLine();

    /**
     * Handles parsing ellipse and circle tags.
     * @param {boolean} circle true if this is a circle and not an ellipse
     */
    parseEllipse(circle : boolean);

    parseRect();

    /**
     * Parse a polyline or polygon from an SVG file.
     * Syntax defined at http://www.w3.org/TR/SVG/shapes.html#PointsBNF
     * @param {boolean} close true if shape is closed (polygon), false if not (polyline)
     */
    parsePoly(close : boolean);

    parsePath();

    parsePathVertex(x : number, y : number);

    parsePathCode(what : number);

    parsePathMoveto(px : number, py : number);

    parsePathLineto(px : number, py : number);

    parsePathCurveto(x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number);

    parsePathQuadto(cx : number, cy : number, x2 : number, y2 : number);

    parsePathArcto(x1 : number, y1 : number, rx : number, ry : number, angle : number, fa : boolean, fs : boolean, x2 : number, y2 : number);

    /**
     * Parse the specified SVG matrix into a PMatrix2D. Note that PMatrix2D
     * is rotated relative to the SVG definition, so parameters are rearranged
     * here. More about the transformation matrices in
     * <a href="http://www.w3.org/TR/SVG/coords.html#TransformAttribute">this section</a>
     * of the SVG documentation.
     * @param {string} matrixStr text of the matrix param.
     * @return {PMatrix2D} a good old-fashioned PMatrix2D
     */
    static parseTransform(matrixStr : string) : PMatrix2D;

    static parseSingleTransform(matrixStr : string) : PMatrix2D;

    parseColors(properties : XML);

    setOpacity(opacityText : string);

    setFillOpacity(opacityText : string);

    setColor(colorText : string, isFill : boolean);

    /**
     * Parses the "color" datatype only, and prints an error if it is not of this form.
     * http://www.w3.org/TR/SVG/types.html#DataTypeColor
     * @return {number} 0xRRGGBB (no alpha). Zero on error.
     * @param {string} colorText
     */
    static parseSimpleColor(colorText : string) : number;

    /**
     * Deliberately conforms to the HTML 4.01 color spec + en-gb grey, rather
     * than the (unlikely to be useful) entire 147-color system used in SVG.
     */
    static colorNames : IntDict;

    static parseRGB(what : string) : number;

    static parseStyleAttributes(style : string) : StringDict;

    /**
     * Used in place of element.getFloatAttribute(a) because we can
     * have a unit suffix (length or coordinate).
     * @param {XML} element what to parse
     * @param {string} attribute name of the attribute to get
     * @param {number} relativeTo (float) Used for %. When relative to viewbox, should
     * be svgWidth for horizontal dimentions, svgHeight for vertical, and
     * svgXYSize for anything else.
     * @return {number} unit-parsed version of the data
     */
    static getFloatWithUnit(element : XML, attribute : string, relativeTo : number) : number;

    /**
     * Parse a size that may have a suffix for its units.
     * This assumes 90dpi, which implies, as given in the
     * <A HREF="http://www.w3.org/TR/SVG/coords.html#Units">units</A> spec:
     * <UL>
     * <LI>"1pt" equals "1.25px" (and therefore 1.25 user units)
     * <LI>"1pc" equals "15px" (and therefore 15 user units)
     * <LI>"1mm" would be "3.543307px" (3.543307 user units)
     * <LI>"1cm" equals "35.43307px" (and therefore 35.43307 user units)
     * <LI>"1in" equals "90px" (and therefore 90 user units)
     * </UL>
     * @param {number} relativeTo (float) Used for %. When relative to viewbox, should
     * be svgWidth for horizontal dimentions, svgHeight for vertical, and
     * svgXYSize for anything else.
     * @param {string} text
     * @return {number}
     */
    static parseUnitSize(text : string, relativeTo : number) : number;

    static parseFloatOrPercent(text : string) : number;

    /**
     * Prints out the SVG document. Useful for parsing.
     */
    public print();
}

declare namespace PShapeSVG {

    export class Gradient extends PShapeSVG {
        transform : any;

        public offset : number[];

        public color : number[];

        public count : number;

        public constructor(parent : PShapeSVG, properties : XML);
    }

    export class Font extends PShapeSVG {
        public face : PShapeSVG.FontFace;

        public namedGlyphs : any;

        public unicodeGlyphs : any;

        public glyphCount : number;

        public glyphs : PShapeSVG.FontGlyph[];

        public missingGlyph : PShapeSVG.FontGlyph;

        horizAdvX : number;

        public constructor(parent : PShapeSVG, properties : XML);

        drawShape();

        public drawString(g : PGraphics, str : string, x : number, y : number, size : number);

        public drawChar(g : PGraphics, c : string, x : number, y : number, size : number);

        public textWidth(str : string, size : number) : number;
    }

    export class FontFace extends PShapeSVG {
        horizOriginX : number;

        horizOriginY : number;

        vertOriginX : number;

        vertOriginY : number;

        vertAdvY : number;

        fontFamily : string;

        fontWeight : number;

        fontStretch : string;

        unitsPerEm : number;

        panose1 : number[];

        ascent : number;

        descent : number;

        bbox : number[];

        underlineThickness : number;

        underlinePosition : number;

        public constructor(parent : PShapeSVG, properties : XML);

        drawShape();
    }

    export class FontGlyph extends PShapeSVG {
        public name : string;

        unicode : string;

        horizAdvX : number;

        public constructor(parent : PShapeSVG, properties : XML, font : PShapeSVG.Font);

        isLegit() : boolean;
    }

    export class LinearGradient extends PShapeSVG.Gradient {
        public __parent: any;
        public x1 : number;

        public y1 : number;

        public x2 : number;

        public y2 : number;
    }

    export class RadialGradient extends PShapeSVG.Gradient {
        public __parent: any;
        public cx : number;

        public cy : number;

        public r : number;
    }
}


declare class PStyle implements PConstants {
    public imageMode : number;

    public rectMode : number;

    public ellipseMode : number;

    public shapeMode : number;

    public blendMode : number;

    public colorMode : number;

    public colorModeX : number;

    public colorModeY : number;

    public colorModeZ : number;

    public colorModeA : number;

    public tint : boolean;

    public tintColor : number;

    public fill : boolean;

    public fillColor : number;

    public stroke : boolean;

    public strokeColor : number;

    public strokeWeight : number;

    public strokeCap : number;

    public strokeJoin : number;

    public ambientR : number;

    public ambientG : number;

    public ambientB : number;

    public specularR : number;

    public specularG : number;

    public specularB : number;

    public emissiveR : number;

    public emissiveG : number;

    public emissiveB : number;

    public shininess : number;

    public textFont : PFont;

    public textAlign : number;

    public textAlignY : number;

    public textMode : number;

    public textSize : number;

    public textLeading : number;
}

interface PSurface {
    initOffscreen(sketch : any);

    initFrame(sketch : any);

    /**
     * Get the native window object associated with this drawing surface.
     * For Java2D, this will be an AWT Frame object. For OpenGL, the window.
     * The data returned here is subject to the whims of the renderer,
     * and using this method means you're willing to deal with underlying
     * implementation changes and that you won't throw a fit like a toddler
     * if your code breaks sometime in the future.
     * @return {*}
     */
    getNative() : any;

    /**
     * Set the window (and dock, or whatever necessary) title.
     * @param {string} title
     */
    setTitle(title : string);

    /**
     * Show or hide the window.
     * @param {boolean} visible
     */
    setVisible(visible : boolean);

    /**
     * Set true if we want to resize things (default is not resizable)
     * @param {boolean} resizable
     */
    setResizable(resizable : boolean);

    /**
     * Dumb name, but inherited from Frame and no better ideas.
     * @param {boolean} always
     */
    setAlwaysOnTop(always : boolean);

    setIcon(icon : PImage);

    placeWindow(location : number[], editorLocation : number[]);

    placePresent(stopColor : number);

    setupExternalMessages();

    setLocation(x : number, y : number);

    setSize(width : number, height : number);

    setFrameRate(fps : number);

    setCursor(kind : number);

    setCursor(image : PImage, hotspotX : number, hotspotY : number);

    showCursor();

    hideCursor();

    /**
     * Start the animation thread
     */
    startThread();

    /**
     * On the next trip through the animation thread, things should go sleepy-bye.
     * Does not pause the thread immediately because that needs to happen on the
     * animation thread itself, so fires on the next trip through draw().
     */
    pauseThread();

    resumeThread();

    /**
     * Stop the animation thread (set it null)
     * @return {boolean} false if already stopped
     */
    stopThread() : boolean;

    isStopped() : boolean;
}

declare namespace PSurface {

    /**
     * Minimum dimensions for the window holding an applet. This varies between
     * platforms, Mac OS X 10.3 (confirmed with 10.7 and Java 6) can do any
     * height but requires at least 128 pixels width. Windows XP has another
     * set of limitations. And for all I know, Linux probably allows window
     * sizes to be negative numbers.
     */
    export var MIN_WINDOW_WIDTH : number;

    export var MIN_WINDOW_HEIGHT : number;
}


/**
 * Surface that's not really visible. Used for PDF and friends, or as a base
 * class for other drawing surfaces. It includes the standard rendering loop.
 * @param {PGraphics} graphics
 * @class
 */
declare class PSurfaceNone implements PSurface {
    sketch : any;

    graphics : PGraphics;

    thread : any;

    paused : boolean;

    pauseObject : any;

    frameRateTarget : number;

    frameRatePeriod : number;

    public constructor(graphics : PGraphics);

    /**
     * 
     * @param {*} sketch
     */
    public initOffscreen(sketch : any);

    /**
     * 
     * @param {*} sketch
     */
    public initFrame(sketch : any);

    public getNative() : any;

    /**
     * Set the window (and dock, or whatever necessary) title.
     * @param {string} title
     */
    public setTitle(title : string);

    /**
     * 
     * @param {PImage} image
     */
    public setIcon(image : PImage);

    /**
     * Show or hide the window.
     * @param {boolean} visible
     */
    public setVisible(visible : boolean);

    /**
     * Set true if we want to resize things (default is not resizable)
     * @param {boolean} resizable
     */
    public setResizable(resizable : boolean);

    /**
     * 
     * @param {Array} location
     * @param {Array} editorLocation
     */
    public placeWindow(location : number[], editorLocation : number[]);

    /**
     * 
     * @param {number} stopColor
     */
    public placePresent(stopColor : number);

    /**
     * 
     */
    public setupExternalMessages();

    /**
     * 
     * @param {boolean} always
     */
    public setAlwaysOnTop(always : boolean);

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public setLocation(x : number, y : number);

    /**
     * 
     * @param {number} wide
     * @param {number} high
     */
    public setSize(wide : number, high : number);

    public setCursor(kind : number);

    public setCursor(image : PImage, hotspotX : number, hotspotY : number);

    public showCursor();

    public hideCursor();

    public createThread() : any;

    public startThread();

    public stopThread() : boolean;

    public isStopped() : boolean;

    public pauseThread();

    checkPause();

    public resumeThread();

    public setFrameRate(fps : number);
}

declare namespace PSurfaceNone {

    export class AnimationThread {
        public __parent: any;
        public callDraw();
    }
}


/**
 * Constructor for a 3D vector.
 * 
 * @param  {number} x the x coordinate.
 * @param  {number} y the y coordinate.
 * @param  {number} z the z coordinate.
 * @class
 */
declare class PVector {
    /**
     * ( begin auto-generated from PVector_x.xml )
     * 
     * The x component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The x component of the vector
     */
    public x : number;

    /**
     * ( begin auto-generated from PVector_y.xml )
     * 
     * The y component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The y component of the vector
     */
    public y : number;

    /**
     * ( begin auto-generated from PVector_z.xml )
     * 
     * The z component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The z component of the vector
     */
    public z : number;

    /**
     * Array so that this can be temporarily used in an array context
     */
    array : any;

    public constructor();

    public constructor(x : number, y : number, z : number);

    public constructor(x : number, y : number);

    /**
     * ( begin auto-generated from PVector_set.xml )
     * 
     * Sets the x, y, and z component of the vector using two or three separate
     * variables, the data from a PVector, or the values from a float array.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @param {number} z the z component of the vector
     * @brief Set the components of the vector
     * @return {PVector}
     */
    public set(x : number, y : number, z : number) : PVector;

    /**
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @return {PVector}
     */
    public set(x : number, y : number) : PVector;

    /**
     * @param {PVector} v any variable of type PVector
     * @return {PVector}
     */
    public set(v : PVector) : PVector;

    /**
     * Set the x, y (and maybe z) coordinates using a float[] array as the source.
     * @param {Array} source array to copy from
     * @return {PVector}
     */
    public set(source : number[]) : PVector;

    /**
     * ( begin auto-generated from PVector_random2D.xml )
     * 
     * Make a new 2D unit vector with a random direction.  If you pass in "this"
     * as an argument, it will use the PApplet's random number generator.  You can
     * also pass in a target PVector to fill.
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {PVector} the random PVector
     * @brief Make a new 2D unit vector with a random direction.
     * @see PVector#random3D()
     */
    public static random2D() : PVector;

    /**
     * Make a new 2D unit vector with a random direction
     * using Processing's current random number generator
     * @param {*} parent current PApplet instance
     * @return {PVector} the random PVector
     */
    public static random2D(parent : any) : PVector;

    /**
     * Set a 2D vector to a random unit vector with a random direction
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the random PVector
     */
    public static random2D(target : PVector) : PVector;

    /**
     * Make a new 2D unit vector with a random direction. Pass in the parent
     * PApplet if you want randomSeed() to work (and be predictable). Or leave
     * it null and be... random.
     * @return {PVector} the random PVector
     * @param {PVector} target
     * @param {*} parent
     */
    public static random2D(target : PVector, parent : any) : PVector;

    /**
     * ( begin auto-generated from PVector_random3D.xml )
     * 
     * Make a new 3D unit vector with a random direction.  If you pass in "this"
     * as an argument, it will use the PApplet's random number generator.  You can
     * also pass in a target PVector to fill.
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {PVector} the random PVector
     * @brief Make a new 3D unit vector with a random direction.
     * @see PVector#random2D()
     */
    public static random3D() : PVector;

    /**
     * Make a new 3D unit vector with a random direction
     * using Processing's current random number generator
     * @param {*} parent current PApplet instance
     * @return {PVector} the random PVector
     */
    public static random3D(parent : any) : PVector;

    /**
     * Set a 3D vector to a random unit vector with a random direction
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the random PVector
     */
    public static random3D(target : PVector) : PVector;

    /**
     * Make a new 3D unit vector with a random direction
     * @return {PVector} the random PVector
     * @param {PVector} target
     * @param {*} parent
     */
    public static random3D(target : PVector, parent : any) : PVector;

    /**
     * ( begin auto-generated from PVector_sub.xml )
     * 
     * Make a new 2D unit vector from an angle.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Make a new 2D unit vector from an angle
     * @param {number} angle the angle in radians
     * @return {PVector} the new unit PVector
     */
    public static fromAngle(angle : number) : PVector;

    /**
     * Make a new 2D unit vector from an angle
     * 
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the PVector
     * @param {number} angle
     */
    public static fromAngle(angle : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_copy.xml )
     * 
     * Gets a copy of the vector, returns a PVector object.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Get a copy of the vector
     * @return {PVector}
     */
    public copy() : PVector;

    public get() : PVector;

    /**
     * @param {Array} target
     * @return {Array}
     */
    public get(target : number[]) : number[];

    /**
     * ( begin auto-generated from PVector_mag.xml )
     * 
     * Calculates the magnitude (length) of the vector and returns the result
     * as a float (this is simply the equation <em>sqrt(x*x + y*y + z*z)</em>.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Calculate the magnitude of the vector
     * @return {number} magnitude (length) of the vector
     * @see PVector#magSq()
     */
    public mag() : number;

    /**
     * ( begin auto-generated from PVector_mag.xml )
     * 
     * Calculates the squared magnitude of the vector and returns the result
     * as a float (this is simply the equation <em>(x*x + y*y + z*z)</em>.)
     * Faster if the real length is not required in the
     * case of comparing vectors, etc.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Calculate the magnitude of the vector, squared
     * @return {number} squared magnitude of the vector
     * @see PVector#mag()
     */
    public magSq() : number;

    /**
     * ( begin auto-generated from PVector_add.xml )
     * 
     * Adds x, y, and z components to a vector, adds one vector to another, or
     * adds two independent vectors together. The version of the method that
     * adds two vectors together is a static method and returns a PVector, the
     * others have no return value -- they act directly on the vector. See the
     * examples for more context.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v the vector to be added
     * @brief Adds x, y, and z components to a vector, one vector to another, or two independent vectors
     * @return {PVector}
     */
    public add(v : PVector) : PVector;

    /**
     * @param {number} x x component of the vector
     * @param {number} y y component of the vector
     * @return {PVector}
     */
    public add(x : number, y : number) : PVector;

    /**
     * @param {number} z z component of the vector
     * @param {number} x
     * @param {number} y
     * @return {PVector}
     */
    public add(x : number, y : number, z : number) : PVector;

    /**
     * Add two vectors
     * @param {PVector} v1 a vector
     * @param {PVector} v2 another vector
     * @return {PVector}
     */
    public static add(v1 : PVector, v2 : PVector) : PVector;

    /**
     * Add two vectors into a target vector
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @param {PVector} v1
     * @param {PVector} v2
     * @return {PVector}
     */
    public static add(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_sub.xml )
     * 
     * Subtracts x, y, and z components from a vector, subtracts one vector
     * from another, or subtracts two independent vectors. The version of the
     * method that subtracts two vectors is a static method and returns a
     * PVector, the others have no return value -- they act directly on the
     * vector. See the examples for more context.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v any variable of type PVector
     * @brief Subtract x, y, and z components from a vector, one vector from another, or two independent vectors
     * @return {PVector}
     */
    public sub(v : PVector) : PVector;

    /**
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @return {PVector}
     */
    public sub(x : number, y : number) : PVector;

    /**
     * @param {number} z the z component of the vector
     * @param {number} x
     * @param {number} y
     * @return {PVector}
     */
    public sub(x : number, y : number, z : number) : PVector;

    /**
     * Subtract one vector from another
     * @param {PVector} v1 the x, y, and z components of a PVector object
     * @param {PVector} v2 the x, y, and z components of a PVector object
     * @return {PVector}
     */
    public static sub(v1 : PVector, v2 : PVector) : PVector;

    /**
     * Subtract one vector from another and store in another vector
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v1
     * @param {PVector} v2
     * @return {PVector}
     */
    public static sub(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_mult.xml )
     * 
     * Multiplies a vector by a scalar or multiplies one vector by another.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Multiply a vector by a scalar
     * @param {number} n the number to multiply with the vector
     * @return {PVector}
     */
    public mult(n : number) : PVector;

    /**
     * @param {PVector} v the vector to multiply by the scalar
     * @param {number} n
     * @return {PVector}
     */
    public static mult(v : PVector, n : number) : PVector;

    /**
     * Multiply a vector by a scalar, and write the result into a target PVector.
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v
     * @param {number} n
     * @return {PVector}
     */
    public static mult(v : PVector, n : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_div.xml )
     * 
     * Divides a vector by a scalar or divides one vector by another.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Divide a vector by a scalar
     * @param {number} n the number by which to divide the vector
     * @return {PVector}
     */
    public div(n : number) : PVector;

    /**
     * Divide a vector by a scalar and return the result in a new vector.
     * @param {PVector} v the vector to divide by the scalar
     * @return {PVector} a new vector that is v1 / n
     * @param {number} n
     */
    public static div(v : PVector, n : number) : PVector;

    /**
     * Divide a vector by a scalar and store the result in another vector.
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v
     * @param {number} n
     * @return {PVector}
     */
    public static div(v : PVector, n : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_dist.xml )
     * 
     * Calculates the Euclidean distance between two points (considering a
     * point as a vector object).
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v the x, y, and z coordinates of a PVector
     * @brief Calculate the distance between two points
     * @return {number}
     */
    public dist(v : PVector) : number;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @return {number} the Euclidean distance between v1 and v2
     */
    public static dist(v1 : PVector, v2 : PVector) : number;

    /**
     * ( begin auto-generated from PVector_dot.xml )
     * 
     * Calculates the dot product of two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v any variable of type PVector
     * @return {number} the dot product
     * @brief Calculate the dot product of two vectors
     */
    public dot(v : PVector) : number;

    /**
     * @param {number} x x component of the vector
     * @param {number} y y component of the vector
     * @param {number} z z component of the vector
     * @return {number}
     */
    public dot(x : number, y : number, z : number) : number;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @return {number}
     */
    public static dot(v1 : PVector, v2 : PVector) : number;

    /**
     * ( begin auto-generated from PVector_cross.xml )
     * 
     * Calculates and returns a vector composed of the cross product between
     * two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @param {PVector} v the vector to calculate the cross product
     * @brief Calculate and return the cross product
     * @return {PVector}
     */
    public cross(v : PVector) : PVector;

    /**
     * @param {PVector} v any variable of type PVector
     * @param {PVector} target PVector to store the result
     * @return {PVector}
     */
    public cross(v : PVector, target : PVector) : PVector;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @param {PVector} target PVector to store the result
     * @return {PVector}
     */
    public static cross(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_normalize.xml )
     * 
     * Normalize the vector to length 1 (make it a unit vector).
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Normalize the vector to a length of 1
     * @return {PVector}
     */
    public normalize() : PVector;

    /**
     * @param {PVector} target Set to null to create a new vector
     * @return {PVector} a new vector (if target was null), or target
     */
    public normalize(target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_limit.xml )
     * 
     * Limit the magnitude of this vector to the value used for the <b>max</b> parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {number} max the maximum magnitude for the vector
     * @brief Limit the magnitude of the vector
     * @return {PVector}
     */
    public limit(max : number) : PVector;

    /**
     * ( begin auto-generated from PVector_setMag.xml )
     * 
     * Set the magnitude of this vector to the value used for the <b>len</b> parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {number} len the new length for this vector
     * @brief Set the magnitude of the vector
     * @return {PVector}
     */
    public setMag(len : number) : PVector;

    /**
     * Sets the magnitude of this vector, storing the result in another vector.
     * @param {PVector} target Set to null to create a new vector
     * @param {number} len the new length for the new vector
     * @return {PVector} a new vector (if target was null), or target
     */
    public setMag(target : PVector, len : number) : PVector;

    /**
     * ( begin auto-generated from PVector_setMag.xml )
     * 
     * Calculate the angle of rotation for this vector (only 2D vectors)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {number} the angle of rotation
     * @brief Calculate the angle of rotation for this vector
     */
    public heading() : number;

    public heading2D() : number;

    /**
     * ( begin auto-generated from PVector_rotate.xml )
     * 
     * Rotate the vector by an angle (only 2D vectors), magnitude remains the same
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Rotate the vector by an angle (2D only)
     * @param {number} theta the angle of rotation
     * @return {PVector}
     */
    public rotate(theta : number) : PVector;

    /**
     * ( begin auto-generated from PVector_rotate.xml )
     * 
     * Linear interpolate the vector to another vector
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Linear interpolate the vector to another vector
     * @param {PVector} v the vector to lerp to
     * @param {number} amt  The amount of interpolation; some value between 0.0 (old vector) and 1.0 (new vector). 0.1 is very near the old vector; 0.5 is halfway in between.
     * @see PApplet#lerp(float, float, float)
     * @return {PVector}
     */
    public lerp(v : PVector, amt : number) : PVector;

    /**
     * Linear interpolate between two vectors (returns a new PVector object)
     * @param {PVector} v1 the vector to start from
     * @param {PVector} v2 the vector to lerp to
     * @param {number} amt
     * @return {PVector}
     */
    public static lerp(v1 : PVector, v2 : PVector, amt : number) : PVector;

    /**
     * Linear interpolate the vector to x,y,z values
     * @param {number} x the x component to lerp to
     * @param {number} y the y component to lerp to
     * @param {number} z the z component to lerp to
     * @param {number} amt
     * @return {PVector}
     */
    public lerp(x : number, y : number, z : number, amt : number) : PVector;

    /**
     * ( begin auto-generated from PVector_angleBetween.xml )
     * 
     * Calculates and returns the angle (in radians) between two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v1 the x, y, and z components of a PVector
     * @param {PVector} v2 the x, y, and z components of a PVector
     * @brief Calculate and return the angle between two vectors
     * @return {number}
     */
    public static angleBetween(v1 : PVector, v2 : PVector) : number;

    /**
     * 
     * @return {string}
     */
    public toString() : string;

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

/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class FloatDict {
    /**
     * Number of elements in the table
     */
    count : number;

    keys : any;

    values : any;

    /**
     * Internal implementation for faster lookups
     */
    /*private*/ indices : any;

    public constructor();

    public constructor(length : number);

    public constructor(reader : { str: string, cursor: number });

    public constructor(keys : string[], values : number[]);

    public constructor(pairs : any[][]);

    /**
     * @webref floatdict:method
     * @brief Returns the number of key/value pairs
     * @return {number}
     */
    public size() : number;

    /**
     * Resize the internal data, this can only be used to shrink the list.
     * Helpful for situations like sorting and then grabbing the top 50 entries.
     * @param {number} length
     */
    public resize(length : number);

    /**
     * Remove all entries.
     * 
     * @webref floatdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : Array<FloatDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref floatdict:method
     * @brief Return a copy of the internal keys array
     * @return {Array}
     */
    public keyArray() : string[];

    public keyArray(outgoing : string[]) : string[];

    public value(index : number) : number;

    public valueIterator() : any;

    /**
     * Create a new array and copy each of the values into it.
     * 
     * @webref floatdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : number[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * @param {Array} array
     * @return {Array}
     */
    public valueArray(array : number[]) : number[];

    /**
     * Return a value for the specified key.
     * 
     * @webref floatdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {number}
     */
    public get(key : string) : number;

    public get(key : string, alternate : number) : number;

    /**
     * @webref floatdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {number} amount
     */
    public set(key : string, amount : number);

    public setIndex(index : number, key : string, value : number);

    /**
     * @webref floatdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    /**
     * @webref floatdict:method
     * @brief Add to a value
     * @param {string} key
     * @param {number} amount
     */
    public add(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Subtract from a value
     * @param {string} key
     * @param {number} amount
     */
    public sub(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Multiply a value
     * @param {string} key
     * @param {number} amount
     */
    public mult(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Divide a value
     * @param {string} key
     * @param {number} amount
     */
    public div(key : string, amount : number);

    checkMinMax(functionName : string);

    /**
     * @webref floatlist:method
     * @brief Return the smallest value
     * @return {number}
     */
    public minIndex() : number;

    public minKey() : string;

    public minValue() : number;

    /**
     * @webref floatlist:method
     * @brief Return the largest value
     * @return {number}
     */
    public maxIndex() : number;

    /**
     * The key for a max value; null if empty or everything is NaN (no max).
     * @return {string}
     */
    public maxKey() : string;

    /**
     * The max value. (Or NaN if no entries or they're all NaN.)
     * @return {number}
     */
    public maxValue() : number;

    public sum() : number;

    public sumDouble() : number;

    public index(what : string) : number;

    create(what : string, much : number);

    /**
     * @webref floatdict:method
     * @brief Remove a key/value pair
     * @param {string} key
     * @return {number}
     */
    public remove(key : string) : number;

    public removeIndex(index : number) : string;

    public swap(a : number, b : number);

    /**
     * Sort the keys alphabetically (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref floatdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * @webref floatdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in descending order (largest value will be at [0]).
     * 
     * @webref floatdict:method
     * @brief Sort by values in ascending order
     */
    public sortValues();

    /**
     * Set true to ensure that the order returned is identical. Slightly
     * slower because the tie-breaker for identical values compares the keys.
     * @param {boolean} stable
     */
    public sortValues(stable : boolean);

    /**
     * @webref floatdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    public sortValuesReverse(stable : boolean);

    sortImpl(useKeys : boolean, reverse : boolean, stable : boolean);

    /**
     * Sum all of the values in this dictionary, then return a new FloatDict of
     * each key, divided by the total sum. The total for all values will be ~1.0.
     * @return {FloatDict} a FloatDict with the original keys, mapped to their pct of the total
     */
    public getPercent() : FloatDict;

    /**
     * Returns a duplicate copy of this object.
     * @return {FloatDict}
     */
    public copy() : FloatDict;

    public print();

    /**
     * Write tab-delimited entries out to
     * @param {*} writer
     */
    public write(writer : any);

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

declare namespace FloatDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : number;

        constructor(__parent: any, key : string, value : number);
    }
}


/**
 * @nowebref
 * @param {number} length
 * @class
 */
declare class FloatList {
    count : number;

    data : number[];

    public constructor();

    public constructor(length : number);

    public constructor(list : number[]);

    public constructor(iter : Array<any>);

    public constructor(...items : any[]);

    /**
     * Improve efficiency by removing allocated but unused entries from the
     * internal array used to store the data. Set to private, though it could
     * be useful to have this public if lists are frequently making drastic
     * size changes (from very large to very small).
     * @private
     */
    /*private*/ crop();

    /**
     * Get the length of the list.
     * 
     * @webref floatlist:method
     * @brief Get the length of the list
     * @return {number}
     */
    public size() : number;

    public resize(length : number);

    /**
     * Remove all entries from the list.
     * 
     * @webref floatlist:method
     * @brief Remove all entries from the list
     */
    public clear();

    /**
     * Get an entry at a particular index.
     * 
     * @webref floatlist:method
     * @brief Get an entry at a particular index
     * @param {number} index
     * @return {number}
     */
    public get(index : number) : number;

    /**
     * Set the entry at a particular index. If the index is past the length of
     * the list, it'll expand the list to accommodate, and fill the intermediate
     * entries with 0s.
     * 
     * @webref floatlist:method
     * @brief Set the entry at a particular index
     * @param {number} index
     * @param {number} what
     */
    public set(index : number, what : number);

    /**
     * Just an alias for append(), but matches pop()
     * @param {number} value
     */
    public push(value : number);

    public pop() : number;

    /**
     * Remove an element from the specified index.
     * 
     * @webref floatlist:method
     * @brief Remove an element from the specified index
     * @param {number} index
     * @return {number}
     */
    public remove(index : number) : number;

    public removeValue(value : number) : number;

    public removeValues(value : number) : number;

    /**
     * Replace the first instance of a particular value
     * @param {number} value
     * @param {number} newValue
     * @return {boolean}
     */
    public replaceValue(value : number, newValue : number) : boolean;

    /**
     * Replace all instances of a particular value
     * @param {number} value
     * @param {number} newValue
     * @return {boolean}
     */
    public replaceValues(value : number, newValue : number) : boolean;

    /**
     * Add a new entry to the list.
     * 
     * @webref floatlist:method
     * @brief Add a new entry to the list
     * @param {number} value
     */
    public append(value : number);

    public append(values : number[]);

    public append(list : FloatList);

    /**
     * Add this value, but only if it's not already in the list.
     * @param {number} value
     */
    public appendUnique(value : number);

    public insert(index : number, value : number);

    public insert(index : number, values : number[]);

    public insert(index : number, list : FloatList);

    /**
     * Return the first index of a particular value.
     * @param {number} what
     * @return {number}
     */
    public index(what : number) : number;

    /**
     * @webref floatlist:method
     * @brief Check if a number is a part of the list
     * @param {number} value
     * @return {boolean}
     */
    public hasValue(value : number) : boolean;

    /*private*/ boundsProblem(index : number, method : string);

    /**
     * @webref floatlist:method
     * @brief Add to a value
     * @param {number} index
     * @param {number} amount
     */
    public add(index : number, amount : number);

    /**
     * @webref floatlist:method
     * @brief Subtract from a value
     * @param {number} index
     * @param {number} amount
     */
    public sub(index : number, amount : number);

    /**
     * @webref floatlist:method
     * @brief Multiply a value
     * @param {number} index
     * @param {number} amount
     */
    public mult(index : number, amount : number);

    /**
     * @webref floatlist:method
     * @brief Divide a value
     * @param {number} index
     * @param {number} amount
     */
    public div(index : number, amount : number);

    /*private*/ checkMinMax(functionName : string);

    /**
     * @webref floatlist:method
     * @brief Return the smallest value
     * @return {number}
     */
    public min() : number;

    public minIndex() : number;

    /**
     * @webref floatlist:method
     * @brief Return the largest value
     * @return {number}
     */
    public max() : number;

    public maxIndex() : number;

    public sum() : number;

    public sumDouble() : number;

    /**
     * Sorts the array in place.
     * 
     * @webref floatlist:method
     * @brief Sorts an array, lowest to highest
     */
    public sort();

    /**
     * Reverse sort, orders values from highest to lowest
     * 
     * @webref floatlist:method
     * @brief Reverse sort, orders values from highest to lowest
     */
    public sortReverse();

    /**
     * @webref floatlist:method
     * @brief Reverse the order of the list elements
     */
    public reverse();

    /**
     * Randomize the order of the list elements. Note that this does not
     * obey the randomSeed() function in PApplet.
     * 
     * @webref floatlist:method
     * @brief Randomize the order of the list elements
     */
    public shuffle();

    /**
     * Randomize the list order using the random() function from the specified
     * sketch, allowing shuffle() to use its current randomSeed() setting.
     * @param {*} sketch
     */
    public shuffle(sketch : any);

    public copy() : FloatList;

    /**
     * Returns the actual array being used to store the data. For advanced users,
     * this is the fastest way to access a large list. Suitable for iterating
     * with a for() loop, but modifying the list will have terrible consequences.
     * @return {Array}
     */
    public values() : number[];

    /**
     * Implemented this way so that we can use a FloatList in a for loop.
     * @return {*}
     */
    public iterator() : any;

    /**
     * Create a new array with a copy of all the values.
     * @return {Array} an array sized by the length of the list with each of the values.
     * @webref floatlist:method
     * @brief Create a new array with a copy of all the values
     */
    public array() : number[];

    /**
     * Copy values into the specified array. If the specified array is null or
     * not the same size, a new array will be allocated.
     * @param {Array} array
     * @return {Array}
     */
    public array(array : number[]) : number[];

    /**
     * Returns a normalized version of this array. Called getPercent() for
     * consistency with the Dict classes. It's a getter method because it needs
     * to returns a new list (because IntList/Dict can't do percentages or
     * normalization in place on int values).
     * @return {FloatList}
     */
    public getPercent() : FloatList;

    public getSubset(start : number) : FloatList;

    public getSubset(start : number, num : number) : FloatList;

    public join(separator : string) : string;

    public print();

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class IntDict {
    /**
     * Number of elements in the table
     */
    count : number;

    keys : any;

    values : any;

    /**
     * Internal implementation for faster lookups
     */
    /*private*/ indices : any;

    public constructor();

    public constructor(length : number);

    public constructor(reader : { str: string, cursor: number });

    public constructor(keys : string[], values : number[]);

    public constructor(pairs : any[][]);

    /**
     * Returns the number of key/value pairs
     * 
     * @webref intdict:method
     * @brief Returns the number of key/value pairs
     * @return {number}
     */
    public size() : number;

    /**
     * Resize the internal data, this can only be used to shrink the list.
     * Helpful for situations like sorting and then grabbing the top 50 entries.
     * @param {number} length
     */
    public resize(length : number);

    /**
     * Remove all entries.
     * 
     * @webref intdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : Array<IntDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref intdict:method
     * @brief Return a copy of the internal keys array
     * @return {Array}
     */
    public keyArray() : string[];

    public keyArray(outgoing : string[]) : string[];

    public value(index : number) : number;

    public valueIterator() : any;

    /**
     * Create a new array and copy each of the values into it.
     * 
     * @webref intdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : number[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * 
     * @param {Array} array values to copy into the array
     * @return {Array}
     */
    public valueArray(array : number[]) : number[];

    /**
     * Return a value for the specified key.
     * 
     * @webref intdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {number}
     */
    public get(key : string) : number;

    public get(key : string, alternate : number) : number;

    /**
     * Create a new key/value pair or change the value of one.
     * 
     * @webref intdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {number} amount
     */
    public set(key : string, amount : number);

    public setIndex(index : number, key : string, value : number);

    /**
     * @webref intdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    /**
     * Increase the value associated with a specific key by 1.
     * 
     * @webref intdict:method
     * @brief Increase the value of a specific key value by 1
     * @param {string} key
     */
    public increment(key : string);

    /**
     * Merge another dictionary into this one. Calling this increment()
     * since it doesn't make sense in practice for the other dictionary types,
     * even though it's technically an add().
     * @param {IntDict} dict
     */
    public increment(dict : IntDict);

    /**
     * @webref intdict:method
     * @brief Add to a value
     * @param {string} key
     * @param {number} amount
     */
    public add(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Subtract from a value
     * @param {string} key
     * @param {number} amount
     */
    public sub(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Multiply a value
     * @param {string} key
     * @param {number} amount
     */
    public mult(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Divide a value
     * @param {string} key
     * @param {number} amount
     */
    public div(key : string, amount : number);

    checkMinMax(functionName : string);

    public minIndex() : number;

    public minKey() : string;

    public minValue() : number;

    public maxIndex() : number;

    /**
     * return the key corresponding to the maximum value or null if no entries
     * @return {string}
     */
    public maxKey() : string;

    public maxValue() : number;

    public sum() : number;

    public sumLong() : number;

    public index(what : string) : number;

    create(what : string, much : number);

    /**
     * @webref intdict:method
     * @brief Remove a key/value pair
     * @param {string} key
     * @return {number}
     */
    public remove(key : string) : number;

    public removeIndex(index : number) : string;

    public swap(a : number, b : number);

    /**
     * Sort the keys alphabetically (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref intdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * Sort the keys alphabetically in reverse (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref intdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in ascending order. The smallest value will be at [0].
     * 
     * @webref intdict:method
     * @brief Sort by values in ascending order
     */
    public sortValues();

    /**
     * Set true to ensure that the order returned is identical. Slightly
     * slower because the tie-breaker for identical values compares the keys.
     * @param {boolean} stable
     */
    public sortValues(stable : boolean);

    /**
     * Sort by values in descending order. The largest value will be at [0].
     * 
     * @webref intdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    public sortValuesReverse(stable : boolean);

    sortImpl(useKeys : boolean, reverse : boolean, stable : boolean);

    /**
     * Sum all of the values in this dictionary, then return a new FloatDict of
     * each key, divided by the total sum. The total for all values will be ~1.0.
     * @return {FloatDict} an IntDict with the original keys, mapped to their pct of the total
     */
    public getPercent() : FloatDict;

    /**
     * Returns a duplicate copy of this object.
     * @return {IntDict}
     */
    public copy() : IntDict;

    public print();

    /**
     * Write tab-delimited entries out to
     * @param {*} writer
     */
    public write(writer : any);

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

declare namespace IntDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : number;

        constructor(__parent: any, key : string, value : number);
    }
}


/**
 * @nowebref
 * @param {number} length
 * @class
 */
declare class IntList {
    count : number;

    data : number[];

    public constructor();

    public constructor(length : number);

    public constructor(source : number[]);

    public constructor(iter : Array<any>);

    public constructor(...items : any[]);

    public static fromRange(stop : number) : IntList;

    public static fromRange(start : number, stop : number) : IntList;

    /**
     * Improve efficiency by removing allocated but unused entries from the
     * internal array used to store the data. Set to private, though it could
     * be useful to have this public if lists are frequently making drastic
     * size changes (from very large to very small).
     * @private
     */
    /*private*/ crop();

    /**
     * Get the length of the list.
     * 
     * @webref intlist:method
     * @brief Get the length of the list
     * @return {number}
     */
    public size() : number;

    public resize(length : number);

    /**
     * Remove all entries from the list.
     * 
     * @webref intlist:method
     * @brief Remove all entries from the list
     */
    public clear();

    /**
     * Get an entry at a particular index.
     * 
     * @webref intlist:method
     * @brief Get an entry at a particular index
     * @param {number} index
     * @return {number}
     */
    public get(index : number) : number;

    /**
     * Set the entry at a particular index. If the index is past the length of
     * the list, it'll expand the list to accommodate, and fill the intermediate
     * entries with 0s.
     * 
     * @webref intlist:method
     * @brief Set the entry at a particular index
     * @param {number} index
     * @param {number} what
     */
    public set(index : number, what : number);

    /**
     * Just an alias for append(), but matches pop()
     * @param {number} value
     */
    public push(value : number);

    public pop() : number;

    /**
     * Remove an element from the specified index
     * 
     * @webref intlist:method
     * @brief Remove an element from the specified index
     * @param {number} index
     * @return {number}
     */
    public remove(index : number) : number;

    public removeValue(value : number) : number;

    public removeValues(value : number) : number;

    /**
     * Add a new entry to the list.
     * 
     * @webref intlist:method
     * @brief Add a new entry to the list
     * @param {number} value
     */
    public append(value : number);

    public append(values : number[]);

    public append(list : IntList);

    /**
     * Add this value, but only if it's not already in the list.
     * @param {number} value
     */
    public appendUnique(value : number);

    public insert(index : number, value : number);

    public insert(index : number, values : number[]);

    public insert(index : number, list : IntList);

    /**
     * Return the first index of a particular value.
     * @param {number} what
     * @return {number}
     */
    public index(what : number) : number;

    /**
     * @webref intlist:method
     * @brief Check if a number is a part of the list
     * @param {number} value
     * @return {boolean}
     */
    public hasValue(value : number) : boolean;

    /**
     * @webref intlist:method
     * @brief Add one to a value
     * @param {number} index
     */
    public increment(index : number);

    /*private*/ boundsProblem(index : number, method : string);

    /**
     * @webref intlist:method
     * @brief Add to a value
     * @param {number} index
     * @param {number} amount
     */
    public add(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Subtract from a value
     * @param {number} index
     * @param {number} amount
     */
    public sub(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Multiply a value
     * @param {number} index
     * @param {number} amount
     */
    public mult(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Divide a value
     * @param {number} index
     * @param {number} amount
     */
    public div(index : number, amount : number);

    /*private*/ checkMinMax(functionName : string);

    /**
     * @webref intlist:method
     * @brief Return the smallest value
     * @return {number}
     */
    public min() : number;

    public minIndex() : number;

    /**
     * @webref intlist:method
     * @brief Return the largest value
     * @return {number}
     */
    public max() : number;

    public maxIndex() : number;

    public sum() : number;

    public sumLong() : number;

    /**
     * Sorts the array in place.
     * 
     * @webref intlist:method
     * @brief Sorts the array, lowest to highest
     */
    public sort();

    /**
     * Reverse sort, orders values from highest to lowest.
     * 
     * @webref intlist:method
     * @brief Reverse sort, orders values from highest to lowest
     */
    public sortReverse();

    /**
     * @webref intlist:method
     * @brief Reverse the order of the list elements
     */
    public reverse();

    /**
     * Randomize the order of the list elements. Note that this does not
     * obey the randomSeed() function in PApplet.
     * 
     * @webref intlist:method
     * @brief Randomize the order of the list elements
     */
    public shuffle();

    /**
     * Randomize the list order using the random() function from the specified
     * sketch, allowing shuffle() to use its current randomSeed() setting.
     * @param {*} sketch
     */
    public shuffle(sketch : any);

    public copy() : IntList;

    /**
     * Returns the actual array being used to store the data. For advanced users,
     * this is the fastest way to access a large list. Suitable for iterating
     * with a for() loop, but modifying the list will have terrible consequences.
     * @return {Array}
     */
    public values() : number[];

    /**
     * 
     * @return {*}
     */
    public iterator() : any;

    /**
     * Create a new array with a copy of all the values.
     * 
     * @return {Array} an array sized by the length of the list with each of the values.
     * @webref intlist:method
     * @brief Create a new array with a copy of all the values
     */
    public array() : number[];

    /**
     * Copy values into the specified array. If the specified array is null or
     * not the same size, a new array will be allocated.
     * @param {Array} array
     * @return {Array}
     */
    public array(array : number[]) : number[];

    /**
     * Returns a normalized version of this array. Called getPercent() for
     * consistency with the Dict classes. It's a getter method because it needs
     * to returns a new list (because IntList/Dict can't do percentages or
     * normalization in place on int values).
     * @return {FloatList}
     */
    public getPercent() : FloatList;

    public getSubset(start : number) : IntList;

    public getSubset(start : number, num : number) : IntList;

    public join(separator : string) : string;

    public print();

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

/**
 * @nowebref
 * @param {*} reader
 * @class
 * @author JSON.org
 */
declare class JSONArray {
    /**
     * The arrayList where the JSONArray's properties are kept.
     */
    /*private*/ myArrayList : Array<any>;

    public constructor();

    public constructor(reader : { str: string, cursor: number });

    constructor(x : JSONTokener);

    public constructor(list : IntList);

    public constructor(list : FloatList);

    public constructor(list : StringList);

    /**
     * Construct a JSONArray from a source JSON text.
     * @param {string} source     A string that begins with
     * <code>[</code>&nbsp;<small>(left bracket)</small>
     * and ends with <code>]</code>&nbsp;<small>(right bracket)</small>.
     * @return {JSONArray} {@code null} if there is a syntax error.
     */
    public static parse(source : string) : JSONArray;

    constructor(array : any);

    /**
     * Get the optional object value associated with an index.
     * @param {number} index must be between 0 and length() - 1
     * @return      {*} An object value, or null if there is no
     * object at that index.
     * @private
     */
    /*private*/ opt(index : number) : any;

    /**
     * Get the object value associated with an index.
     * @param {number} index must be between 0 and length() - 1
     * @return {*} An object value.
     * @throws RuntimeException If there is no value for the index.
     */
    public get(index : number) : any;

    /**
     * Get the string associated with an index.
     * 
     * @webref jsonarray:method
     * @brief Gets the String value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return      {string} A string value.
     * @throws RuntimeException If there is no string value for the index.
     * @see JSONArray#getInt(int)
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getBoolean(int)
     */
    public getString(index : number) : string;

    /**
     * Get the optional string associated with an index.
     * The defaultValue is returned if the key is not found.
     * 
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {string} defaultValue     The default value.
     * @return      {string} A String value.
     */
    public getString(index : number, defaultValue : string) : string;

    /**
     * Get the int value associated with an index.
     * 
     * @webref jsonarray:method
     * @brief Gets the int value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return {number} The value.
     * @throws RuntimeException If the key is not found or if the value is not a number.
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getString(int)
     * @see JSONArray#getBoolean(int)
     */
    public getInt(index : number) : number;

    /**
     * Get the optional int value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getInt(index : number, defaultValue : number) : number;

    /**
     * Get the long value associated with an index.
     * 
     * @param {number} index The index must be between 0 and length() - 1
     * @return      {number} The value.
     * @throws   RuntimeException If the key is not found or if the value cannot
     * be converted to a number.
     */
    public getLong(index : number) : number;

    /**
     * Get the optional long value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getLong(index : number, defaultValue : number) : number;

    /**
     * Get a value from an index as a float. JSON uses 'double' values
     * internally, so this is simply getDouble() cast to a float.
     * 
     * @webref jsonarray:method
     * @brief Gets the float value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @see JSONArray#getInt(int)
     * @see JSONArray#getString(int)
     * @see JSONArray#getBoolean(int)
     * @return {number}
     */
    public getFloat(index : number) : number;

    public getFloat(index : number, defaultValue : number) : number;

    /**
     * Get the double value associated with an index.
     * 
     * @param {number} index must be between 0 and length() - 1
     * @return      {number} The value.
     * @throws   RuntimeException If the key is not found or if the value cannot
     * be converted to a number.
     */
    public getDouble(index : number) : number;

    /**
     * Get the optional double value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * 
     * @param {number} index subscript
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getDouble(index : number, defaultValue : number) : number;

    /**
     * Get the boolean value associated with an index.
     * The string values "true" and "false" are converted to boolean.
     * 
     * @webref jsonarray:method
     * @brief Gets the boolean value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return      {boolean} The truth.
     * @throws RuntimeException If there is no value for the index or if the
     * value is not convertible to boolean.
     * @see JSONArray#getInt(int)
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getString(int)
     */
    public getBoolean(index : number) : boolean;

    /**
     * Get the optional boolean value associated with an index.
     * It returns the defaultValue if there is no value at that index or if
     * it is not a Boolean or the String "true" or "false" (case insensitive).
     * 
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {boolean} defaultValue     A boolean default.
     * @return      {boolean} The truth.
     */
    public getBoolean(index : number, defaultValue : boolean) : boolean;

    /**
     * Get the JSONArray associated with an index.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONArray associated with an index value
     * @param {number} index must be between 0 and length() - 1
     * @return {JSONArray} A JSONArray value.
     * @throws RuntimeException If there is no value for the index. or if the
     * value is not a JSONArray
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#setJSONArray(int, JSONArray)
     */
    public getJSONArray(index : number) : JSONArray;

    public getJSONArray(index : number, defaultValue : JSONArray) : JSONArray;

    /**
     * Get the JSONObject associated with an index.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONObject associated with an index value
     * @param {number} index the index value of the object to get
     * @return {JSONObject} A JSONObject value.
     * @throws RuntimeException If there is no value for the index or if the
     * value is not a JSONObject
     * @see JSONArray#getJSONArray(int)
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#setJSONArray(int, JSONArray)
     */
    public getJSONObject(index : number) : JSONObject;

    public getJSONObject(index : number, defaultValue : JSONObject) : JSONObject;

    /**
     * Get this entire array as a String array.
     * 
     * @webref jsonarray:method
     * @brief Gets the entire array as an array of Strings
     * @see JSONArray#getIntArray()
     * @return {Array}
     */
    public getStringArray() : string[];

    /**
     * Get this entire array as an int array. Everything must be an int.
     * 
     * @webref jsonarray:method
     * @brief Gets the entire array as array of ints
     * @see JSONArray#getStringArray()
     * @return {Array}
     */
    public getIntArray() : number[];

    /**
     * Get this entire array as a long array. Everything must be an long.
     * @return {Array}
     */
    public getLongArray() : number[];

    /**
     * Get this entire array as a float array. Everything must be an float.
     * @return {Array}
     */
    public getFloatArray() : number[];

    /**
     * Get this entire array as a double array. Everything must be an double.
     * @return {Array}
     */
    public getDoubleArray() : number[];

    /**
     * Get this entire array as a boolean array. Everything must be a boolean.
     * @return {Array}
     */
    public getBooleanArray() : boolean[];

    /**
     * Append an String value. This increases the array's length by one.
     * 
     * @webref jsonarray:method
     * @brief Appends a value, increasing the array's length by one
     * @param {string} value a String value
     * @return {JSONArray} this.
     * @see JSONArray#size()
     * @see JSONArray#remove(int)
     */
    public append(value : string) : JSONArray;

    /**
     * Append an int value. This increases the array's length by one.
     * 
     * @param {number} value an int value
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append an long value. This increases the array's length by one.
     * 
     * @nowebref
     * @param {number} value A long value.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a float value. This increases the array's length by one.
     * This will store the value as a double, since there are no floats in JSON.
     * 
     * @param {number} value a float value
     * @throws RuntimeException if the value is not finite.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a double value. This increases the array's length by one.
     * 
     * @nowebref
     * @param {number} value A double value.
     * @throws RuntimeException if the value is not finite.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a boolean value. This increases the array's length by one.
     * 
     * @param {boolean} value a boolean value
     * @return {JSONArray} this.
     */
    public append(value : boolean) : JSONArray;

    /**
     * @param {JSONArray} value a JSONArray value
     * @return {JSONArray}
     */
    public append(value : JSONArray) : JSONArray;

    /**
     * @param {JSONObject} value a JSONObject value
     * @return {JSONArray}
     */
    public append(value : JSONObject) : JSONArray;

    /**
     * Append an object value. This increases the array's length by one.
     * @param {*} value An object value.  The value should be a
     * Boolean, Double, Integer, JSONArray, JSONObject, Long, or String, or the
     * JSONObject.NULL object.
     * @return {JSONArray} this.
     */
    append(value : any) : JSONArray;

    /**
     * Put or replace a String value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * 
     * @webref jsonarray:method
     * @brief Put a String value in the JSONArray
     * @param {number} index an index value
     * @param {string} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setString(index : number, value : string) : JSONArray;

    /**
     * Put or replace an int value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * 
     * @webref jsonarray:method
     * @brief Put an int value in the JSONArray
     * @param {number} index an index value
     * @param {number} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setString(int, String)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setInt(index : number, value : number) : JSONArray;

    /**
     * Put or replace a long value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * @param {number} index The subscript.
     * @param {number} value A long value.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     */
    public setLong(index : number, value : number) : JSONArray;

    /**
     * Put or replace a float value. If the index is greater than the length
     * of the JSONArray, then null elements will be added as necessary to pad
     * it out. There are no 'double' values in JSON, so this is passed to
     * setDouble(value).
     * 
     * @webref jsonarray:method
     * @brief Put a float value in the JSONArray
     * @param {number} index an index value
     * @param {number} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the value is
     * not finite.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setString(int, String)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setFloat(index : number, value : number) : JSONArray;

    /**
     * Put or replace a double value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * @param {number} index The subscript.
     * @param {number} value A double value.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the value is
     * not finite.
     */
    public setDouble(index : number, value : number) : JSONArray;

    /**
     * Put or replace a boolean value in the JSONArray. If the index is greater
     * than the length of the JSONArray, then null elements will be added as
     * necessary to pad it out.
     * 
     * @webref jsonarray:method
     * @brief Put a boolean value in the JSONArray
     * @param {number} index an index value
     * @param {boolean} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setString(int, String)
     */
    public setBoolean(index : number, value : boolean) : JSONArray;

    /**
     * @webref jsonarray:method
     * @brief Sets the JSONArray value associated with an index value
     * @param {number} index the index value to target
     * @param {JSONArray} value the value to assign
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#getJSONArray(int)
     * @return {JSONArray}
     */
    public setJSONArray(index : number, value : JSONArray) : JSONArray;

    /**
     * @webref jsonarray:method
     * @brief Sets the JSONObject value associated with an index value
     * @param {number} index the index value to target
     * @param {JSONObject} value the value to assign
     * @see JSONArray#setJSONArray(int, JSONArray)
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#getJSONArray(int)
     * @return {JSONArray}
     */
    public setJSONObject(index : number, value : JSONObject) : JSONArray;

    /**
     * Put or replace an object value in the JSONArray. If the index is greater
     * than the length of the JSONArray, then null elements will be added as
     * necessary to pad it out.
     * @param {number} index The subscript.
     * @param {*} value The value to put into the array. The value should be a
     * Boolean, Double, Integer, JSONArray, JSONObject, Long, or String, or the
     * JSONObject.NULL object.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the the value is
     * an invalid number.
     * @private
     */
    /*private*/ set(index : number, value : any) : JSONArray;

    /**
     * Get the number of elements in the JSONArray, included nulls.
     * 
     * @webref jsonarray:method
     * @brief Gets the number of elements in the JSONArray
     * @return {number} The length (or size).
     * @see JSONArray#append(String)
     * @see JSONArray#remove(int)
     */
    public size() : number;

    /**
     * Determine if the value is null.
     * @webref
     * @param {number} index must be between 0 and length() - 1
     * @return {boolean} true if the value at the index is null, or if there is no value.
     */
    public isNull(index : number) : boolean;

    /**
     * Remove an index and close the hole.
     * 
     * @webref jsonarray:method
     * @brief Removes an element
     * @param {number} index the index value of the element to be removed
     * @return {*} The value that was associated with the index, or null if there was no value.
     * @see JSONArray#size()
     * @see JSONArray#append(String)
     */
    public remove(index : number) : any;

    public save(file : any, options : string) : boolean;

    public write(output : any) : boolean;

    public write(output : any, options : string) : boolean;

    /**
     * Return the JSON data formatted with two spaces for indents.
     * Chosen to do this since it's the most common case (e.g. with println()).
     * Same as format(2). Use the format() function for more options.
     * @return {string}
     */
    public toString() : string;

    /**
     * Make a pretty-printed JSON text of this JSONArray.
     * Warning: This method assumes that the data structure is acyclical.
     * @param {number} indentFactor The number of spaces to add to each level of
     * indentation. Use -1 to specify no indentation and no newlines.
     * @return {string} a printable, displayable, transmittable
     * representation of the object, beginning
     * with <code>[</code>&nbsp;<small>(left bracket)</small> and ending
     * with <code>]</code>&nbsp;<small>(right bracket)</small>.
     */
    public format(indentFactor : number) : string;

    /**
     * Write the contents of the JSONArray as JSON text to a writer.
     * <p>
     * Warning: This method assumes that the data structure is acyclic.
     * 
     * @param {number} indentFactor
     * The number of spaces to add to each level of indentation.
     * Use -1 to specify no indentation and no newlines.
     * @param {number} indent
     * The indention of the top level.
     * @return {*} The writer.
     * @throws RuntimeException
     * @param {*} writer
     */
    writeInternal(writer : any, indentFactor : number, indent : number) : any;

    /**
     * Make a string from the contents of this JSONArray. The
     * <code>separator</code> string is inserted between each element.
     * Warning: This method assumes that the data structure is acyclic.
     * @param {string} separator A string that will be inserted between the elements.
     * @return {string} a string.
     * @throws RuntimeException If the array contains an invalid number.
     */
    public join(separator : string) : string;
}

/**
 * @nowebref
 * @param {*} reader
 * @class
 * @author JSON.org
 */
declare class JSONObject {
    /**
     * The maximum number of keys in the key pool.
     */
    static keyPoolSize : number;

    /**
     * Key pooling is like string interning, but without permanently tying up
     * memory. To help conserve memory, storage of duplicated key strings in
     * JSONObjects will be avoided by using a key pool to manage unique key
     * string objects. This is used by JSONObject.put(string, object).
     */
    static keyPool : any;

    /**
     * The map where the JSONObject's properties are kept.
     */
    /*private*/ map : any;

    /**
     * It is sometimes more convenient and less ambiguous to have a
     * <code>NULL</code> object than to use Java's <code>null</code> value.
     * <code>JSONObject.NULL.equals(null)</code> returns <code>true</code>.
     * <code>JSONObject.NULL.toString()</code> returns <code>"null"</code>.
     */
    public static NULL : any;

    public constructor();

    public constructor(reader : { str: string, cursor: number });

    constructor(x : JSONTokener);

    constructor(map : any);

    public constructor(dict : IntDict);

    public constructor(dict : FloatDict);

    public constructor(dict : StringDict);

    constructor(bean : any);

    /**
     * Construct a JSONObject from a source JSON text string.
     * This is the most commonly used JSONObject constructor.
     * @param {string} source    A string beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @exception RuntimeException If there is a syntax error in the source
     * string or a duplicated key.
     * @return {JSONObject}
     */
    public static parse(source : string) : JSONObject;

    /**
     * Produce a string from a double. The string "null" will be returned if
     * the number is not finite.
     * @param  {number} d A double.
     * @return {string} A String.
     */
    static doubleToString(d : number) : string;

    /**
     * Get the value object associated with a key.
     * 
     * @param {string} key   A key string.
     * @return      {*} The object associated with the key.
     * @throws      RuntimeException if the key is not found.
     */
    public get(key : string) : any;

    /**
     * Gets the String associated with a key
     * 
     * @webref jsonobject:method
     * @brief Gets the string value associated with a key
     * @param {string} key a key string
     * @return {string} A string which is the value.
     * @throws RuntimeException if there is no string value for the key.
     * @see JSONObject#getInt(String)
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getBoolean(String)
     */
    public getString(key : string) : string;

    /**
     * Get an optional string associated with a key.
     * It returns the defaultValue if there is no such key.
     * 
     * @param {string} key   A key string.
     * @param {string} defaultValue     The default.
     * @return      {string} A string which is the value.
     */
    public getString(key : string, defaultValue : string) : string;

    /**
     * Gets the int value associated with a key
     * 
     * @webref jsonobject:method
     * @brief Gets the int value associated with a key
     * @param {string} key A key string.
     * @return {number} The integer value.
     * @throws RuntimeException if the key is not found or if the value cannot
     * be converted to an integer.
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getString(String)
     * @see JSONObject#getBoolean(String)
     */
    public getInt(key : string) : number;

    /**
     * Get an optional int value associated with a key,
     * or the default if there is no such key or if the value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key   A key string.
     * @param {number} defaultValue     The default.
     * @return      {number} An object which is the value.
     */
    public getInt(key : string, defaultValue : number) : number;

    /**
     * Get the long value associated with a key.
     * 
     * @param {string} key   A key string.
     * @return      {number} The long value.
     * @throws   RuntimeException if the key is not found or if the value cannot
     * be converted to a long.
     */
    public getLong(key : string) : number;

    /**
     * Get an optional long value associated with a key,
     * or the default if there is no such key or if the value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key          A key string.
     * @param {number} defaultValue The default.
     * @return             {number} An object which is the value.
     */
    public getLong(key : string, defaultValue : number) : number;

    /**
     * @webref jsonobject:method
     * @brief Gets the float value associated with a key
     * @param {string} key a key string
     * @see JSONObject#getInt(String)
     * @see JSONObject#getString(String)
     * @see JSONObject#getBoolean(String)
     * @return {number}
     */
    public getFloat(key : string) : number;

    public getFloat(key : string, defaultValue : number) : number;

    /**
     * Get the double value associated with a key.
     * @param {string} key   A key string.
     * @return      {number} The numeric value.
     * @throws RuntimeException if the key is not found or
     * if the value is not a Number object and cannot be converted to a number.
     */
    public getDouble(key : string) : number;

    /**
     * Get an optional double associated with a key, or the
     * defaultValue if there is no such key or if its value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key   A key string.
     * @param {number} defaultValue     The default.
     * @return      {number} An object which is the value.
     */
    public getDouble(key : string, defaultValue : number) : number;

    /**
     * Get the boolean value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the boolean value associated with a key
     * @param {string} key a key string
     * @return {boolean} The truth.
     * @throws RuntimeException if the value is not a Boolean or the String "true" or "false".
     * @see JSONObject#getInt(String)
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getString(String)
     */
    public getBoolean(key : string) : boolean;

    /**
     * Get an optional boolean associated with a key.
     * It returns the defaultValue if there is no such key, or if it is not
     * a Boolean or the String "true" or "false" (case insensitive).
     * 
     * @param {string} key              A key string.
     * @param {boolean} defaultValue     The default.
     * @return      {boolean} The truth.
     */
    public getBoolean(key : string, defaultValue : boolean) : boolean;

    /**
     * Get the JSONArray value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONArray value associated with a key
     * @param {string} key a key string
     * @return {JSONArray} A JSONArray which is the value, or null if not present
     * @throws RuntimeException if the value is not a JSONArray.
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#setJSONArray(String, JSONArray)
     */
    public getJSONArray(key : string) : JSONArray;

    /**
     * Get the JSONObject value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONObject value associated with a key
     * @param {string} key a key string
     * @return {JSONObject} A JSONObject which is the value or null if not available.
     * @throws RuntimeException if the value is not a JSONObject.
     * @see JSONObject#getJSONArray(String)
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#setJSONArray(String, JSONArray)
     */
    public getJSONObject(key : string) : JSONObject;

    /**
     * Determine if the JSONObject contains a specific key.
     * @param {string} key   A key string.
     * @return      {boolean} true if the key exists in the JSONObject.
     */
    public hasKey(key : string) : boolean;

    /**
     * Determine if the value associated with the key is null or if there is
     * no value.
     * 
     * @webref
     * @param {string} key   A key string.
     * @return      {boolean} true if there is no value associated with the key or if
     * the value is the JSONObject.NULL object.
     */
    public isNull(key : string) : boolean;

    /**
     * Get an enumeration of the keys of the JSONObject.
     * 
     * @return {*} An iterator of the keys.
     */
    public keyIterator() : any;

    /**
     * Get a set of keys of the JSONObject.
     * 
     * @return {Array} A keySet.
     */
    public keys() : Array<any>;

    /**
     * Get the number of keys stored in the JSONObject.
     * 
     * @return {number} The number of keys in the JSONObject.
     */
    public size() : number;

    /**
     * Produce a string from a Number.
     * @param  {number} number A Number
     * @return {string} A String.
     * @throws RuntimeException If number is null or a non-finite number.
     * @private
     */
    static numberToString(number : number) : string;

    /**
     * Get an optional value associated with a key.
     * @param {string} key   A key string.
     * @return      {*} An object which is the value, or null if there is no value.
     * @private
     */
    opt(key : string) : any;

    populateMap(bean : any);

    /**
     * @webref jsonobject:method
     * @brief Put a key/String pair in the JSONObject
     * @param {string} key a key string
     * @param {string} value the value to assign
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setBoolean(String, boolean)
     * @return {JSONObject}
     */
    public setString(key : string, value : string) : JSONObject;

    /**
     * Put a key/int pair in the JSONObject.
     * 
     * @webref jsonobject:method
     * @brief Put a key/int pair in the JSONObject
     * @param {string} key a key string
     * @param {number} value the value to assign
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setString(String, String)
     * @see JSONObject#setBoolean(String, boolean)
     */
    public setInt(key : string, value : number) : JSONObject;

    /**
     * Put a key/long pair in the JSONObject.
     * 
     * @param {string} key   A key string.
     * @param {number} value A long which is the value.
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     */
    public setLong(key : string, value : number) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Put a key/float pair in the JSONObject
     * @param {string} key a key string
     * @param {number} value the value to assign
     * @throws RuntimeException If the key is null or if the number is NaN or infinite.
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setString(String, String)
     * @see JSONObject#setBoolean(String, boolean)
     * @return {JSONObject}
     */
    public setFloat(key : string, value : number) : JSONObject;

    /**
     * Put a key/double pair in the JSONObject.
     * 
     * @param {string} key   A key string.
     * @param {number} value A double which is the value.
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null or if the number is NaN or infinite.
     */
    public setDouble(key : string, value : number) : JSONObject;

    /**
     * Put a key/boolean pair in the JSONObject.
     * 
     * @webref jsonobject:method
     * @brief Put a key/boolean pair in the JSONObject
     * @param {string} key a key string
     * @param {boolean} value the value to assign
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setString(String, String)
     */
    public setBoolean(key : string, value : boolean) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Sets the JSONObject value associated with a key
     * @param {string} key a key string
     * @param {JSONObject} value value to assign
     * @see JSONObject#setJSONArray(String, JSONArray)
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#getJSONArray(String)
     * @return {JSONObject}
     */
    public setJSONObject(key : string, value : JSONObject) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Sets the JSONArray value associated with a key
     * @param {string} key a key string
     * @param {JSONArray} value value to assign
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#getJSONArray(String)
     * @return {JSONObject}
     */
    public setJSONArray(key : string, value : JSONArray) : JSONObject;

    /**
     * Put a key/value pair in the JSONObject. If the value is null,
     * then the key will be removed from the JSONObject if it is present.
     * @param {string} key   A key string.
     * @param {*} value An object which is the value. It should be of one of these
     * types: Boolean, Double, Integer, JSONArray, JSONObject, Long, String,
     * or the JSONObject.NULL object.
     * @return {JSONObject} this.
     * @throws RuntimeException If the value is non-finite number
     * or if the key is null.
     */
    public put(key : string, value : any) : JSONObject;

    /**
     * Put a key/value pair in the JSONObject, but only if the key and the
     * value are both non-null, and only if there is not already a member
     * with that name.
     * @param {string} key
     * @param {*} value
     * @return {JSONObject} {@code this}.
     * @throws RuntimeException if the key is a duplicate, or if
     * {@link #put(String,Object)} throws.
     * @private
     */
    putOnce(key : string, value : any) : JSONObject;

    /**
     * Produce a string in double quotes with backslash sequences in all the
     * right places. A backslash will be inserted within </, producing <\/,
     * allowing JSON text to be delivered in HTML. In JSON text, a string
     * cannot contain a control character or an unescaped quote or backslash.
     * @param {string} string A String
     * @return  {string} A String correctly formatted for insertion in a JSON text.
     */
    static quote(string : string) : string;

    static quote(string : string, w : any) : any;

    /**
     * Remove a name and its value, if present.
     * @param {string} key The name to be removed.
     * @return {*} The value that was associated with the name,
     * or null if there was no value.
     */
    public remove(key : string) : any;

    /**
     * Try to convert a string into a number, boolean, or null. If the string
     * can't be converted, return the string.
     * @param {string} string A String.
     * @return {*} A simple JSON value.
     */
    static stringToValue(string : string) : any;

    /**
     * Throw an exception if the object is a NaN or infinite number.
     * @param {*} o The object to test. If not Float or Double, accepted without
     * exceptions.
     * @throws RuntimeException If o is infinite or NaN.
     */
    static testValidity(o : any);

    public save(file : any, options : string) : boolean;

    public write(output : any) : boolean;

    public write(output : any, options : string) : boolean;

    /**
     * Return the JSON data formatted with two spaces for indents.
     * Chosen to do this since it's the most common case (e.g. with println()).
     * Same as format(2). Use the format() function for more options.
     * @return {string}
     */
    public toString() : string;

    /**
     * Make a prettyprinted JSON text of this JSONObject.
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * @param {number} indentFactor The number of spaces to add to each level of
     * indentation.
     * @return {string} a printable, displayable, portable, transmittable
     * representation of the object, beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @throws RuntimeException If the object contains an invalid number.
     */
    public format(indentFactor : number) : string;

    /**
     * Make a JSON text of an Object value. If the object has an
     * value.toJSONString() method, then that method will be used to produce
     * the JSON text. The method is required to produce a strictly
     * conforming text. If the object does not contain a toJSONString
     * method (which is the most common case), then a text will be
     * produced by other means. If the value is an array or Collection,
     * then a JSONArray will be made from it and its toJSONString method
     * will be called. If the value is a MAP, then a JSONObject will be made
     * from it and its toJSONString method will be called. Otherwise, the
     * value's toString method will be called, and the result will be quoted.
     * 
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * @param {*} value The value to be serialized.
     * @return {string} a printable, displayable, transmittable
     * representation of the object, beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @throws RuntimeException If the value is or contains an invalid number.
     */
    static valueToString(value : any) : string;

    /**
     * Wrap an object, if necessary. If the object is null, return the NULL
     * object. If it is an array or collection, wrap it in a JSONArray. If
     * it is a map, wrap it in a JSONObject. If it is a standard property
     * (Double, String, et al) then it is already wrapped. Otherwise, if it
     * comes from one of the java packages, turn it into a string. And if
     * it doesn't, try to wrap it in a JSONObject. If the wrapping fails,
     * then null is returned.
     * 
     * @param {*} object The object to wrap
     * @return {*} The wrapped value
     */
    static wrap(object : any) : any;

    static writeValue(writer : any, value : any, indentFactor : number, indent : number) : any;

    static indent(writer : any, indent : number);

    /**
     * Write the contents of the JSONObject as JSON text to a writer.
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * 
     * @return {*} The writer.
     * @throws RuntimeException
     * @param {*} writer
     * @param {number} indentFactor
     * @param {number} indent
     */
    writeInternal(writer : any, indentFactor : number, indent : number) : any;
}

declare namespace JSONObject {

    /**
     * JSONObject.NULL is equivalent to the value that JavaScript calls null,
     * whilst Java's null is equivalent to the value that JavaScript calls
     * undefined.
     * @class
     */
    export class Null {
        /**
         * There is only intended to be a single instance of the NULL object,
         * so the clone method returns itself.
         * @return     {*} NULL.
         */
        clone() : any;

        /**
         * A Null object is equal to the null value and to itself.
         * @param {*} object    An object to test for nullness.
         * @return {boolean} true if the object parameter is the JSONObject.NULL object
         * or null.
         */
        public equals(object : any) : boolean;

        /**
         * Get the "null" string value.
         * @return {string} The string "null".
         */
        public toString() : string;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }
}


/**
 * Construct a JSONTokener from a Reader.
 * 
 * @param {*} reader     A reader.
 * @class
 * @author JSON.org
 */
declare class JSONTokener {
    /*private*/ character : number;

    /*private*/ eof : boolean;

    /*private*/ index : number;

    /*private*/ line : number;

    /*private*/ previous : string;

    /*private*/ reader : { str: string, cursor: number };

    /*private*/ usePrevious : boolean;

    public constructor(reader : { str: string, cursor: number });

    public constructor(inputStream : { str: string, cursor: number });

    public constructor(s : string);

    /**
     * Back up one character. This provides a sort of lookahead capability,
     * so that you can test for a digit or letter before attempting to parse
     * the next number or identifier.
     */
    public back();

    /**
     * Get the hex value of a character (base16).
     * @param {string} c A character between '0' and '9' or between 'A' and 'F' or
     * between 'a' and 'f'.
     * @return  {number} An int between 0 and 15, or -1 if c was not a hex digit.
     */
    public static dehexchar(c : string) : number;

    public end() : boolean;

    /**
     * Determine if the source string still contains characters that next()
     * can consume.
     * @return {boolean} true if not yet at the end of the source.
     */
    public more() : boolean;

    /**
     * Get the next character in the source string.
     * 
     * @return {string} The next character, or 0 if past the end of the source string.
     */
    public next() : string;

    /**
     * Consume the next character, and check that it matches a specified
     * character.
     * @param {string} c The character to match.
     * @return {string} The character.
     * @throws JSONException if the character does not match.
     */
    public next(c : string) : string;

    /**
     * Get the next n characters.
     * 
     * @param {number} n     The number of characters to take.
     * @return      {string} A string of n characters.
     * @throws JSONException
     * Substring bounds error if there are not
     * n characters remaining in the source string.
     */
    public next(n : number) : string;

    /**
     * Get the next char in the string, skipping whitespace.
     * @throws JSONException
     * @return  {string} A character, or 0 if there are no more characters.
     */
    public nextClean() : string;

    /**
     * Return the characters up to the next close quote character.
     * Backslash processing is done. The formal JSON format does not
     * allow strings in single quotes, but an implementation is allowed to
     * accept them.
     * @param {string} quote The quoting character, either
     * <code>"</code>&nbsp;<small>(double quote)</small> or
     * <code>'</code>&nbsp;<small>(single quote)</small>.
     * @return      {string} A String.
     * @throws JSONException Unterminated string.
     */
    public nextString(quote : string) : string;

    /**
     * Get the text up but not including the specified character or the
     * end of line, whichever comes first.
     * @param  {string} delimiter A delimiter character.
     * @return   {string} A string.
     */
    public nextTo(delimiter : string) : string;

    /**
     * Get the text up but not including one of the specified delimiter
     * characters or the end of line, whichever comes first.
     * @param {string} delimiters A set of delimiter characters.
     * @return {string} A string, trimmed.
     */
    public nextTo(delimiters : string) : string;

    /**
     * Get the next value. The value can be a Boolean, Double, Integer,
     * JSONArray, JSONObject, Long, or String, or the JSONObject.NULL object.
     * @throws JSONException If syntax error.
     * 
     * @return {*} An object.
     */
    public nextValue() : any;

    /**
     * Skip characters until the next character is the requested character.
     * If the requested character is not found, no characters are skipped.
     * @param {string} to A character to skip to.
     * @return {string} The requested character, or zero if the requested character
     * is not found.
     */
    public skipTo(to : string) : string;

    /**
     * Make a printable string of this JSONTokener.
     * 
     * @return {string} " at {index} [character {character} line {line}]"
     */
    public toString() : string;
}

/**
 * Internal sorter used by several data classes.
 * Advanced users only, not official API.
 * @class
 */
declare class Sort {
    public constructor();

    public run();

    sort(i : number, j : number);

    partition(left : number, right : number) : number;

    public size() : number;

    public compare(a : number, b : number) : number;

    public swap(a : number, b : number);
}

/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class StringDict {
    /**
     * Number of elements in the table
     */
    count : number;

    keys : any;

    values : any;

    /**
     * Internal implementation for faster lookups
     */
    /*private*/ indices : any;

    public constructor();

    public constructor(length : number);

    public constructor(reader : { str: string, cursor: number });

    public constructor(keys : string[], values : string[]);

    public constructor(pairs : string[][]);

    public constructor(row : TableRow);

    /**
     * @webref stringdict:method
     * @brief Returns the number of key/value pairs
     * @return {number}
     */
    public size() : number;

    /**
     * Resize the internal data, this can only be used to shrink the list.
     * Helpful for situations like sorting and then grabbing the top 50 entries.
     * @param {number} length
     */
    public resize(length : number);

    /**
     * Remove all entries.
     * 
     * @webref stringdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : Array<StringDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref stringdict:method
     * @brief Return a copy of the internal keys array
     * @return {Array}
     */
    public keyArray() : string[];

    public keyArray(outgoing : string[]) : string[];

    public value(index : number) : string;

    public valueIterator() : any;

    /**
     * Create a new array and copy each of the values into it.
     * 
     * @webref stringdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : string[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * @param {Array} array
     * @return {Array}
     */
    public valueArray(array : string[]) : string[];

    /**
     * Return a value for the specified key.
     * 
     * @webref stringdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {string}
     */
    public get(key : string) : string;

    public get(key : string, alternate : string) : string;

    /**
     * @webref stringdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {string} value
     */
    public set(key : string, value : string);

    public setIndex(index : number, key : string, value : string);

    public index(what : string) : number;

    /**
     * @webref stringdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    create(key : string, value : string);

    /**
     * @webref stringdict:method
     * @brief Remove a key/value pair
     * @param {string} key
     * @return {number}
     */
    public remove(key : string) : number;

    public removeIndex(index : number) : string;

    public swap(a : number, b : number);

    /**
     * Sort the keys alphabetically (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref stringdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * @webref stringdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in descending order (largest value will be at [0]).
     * 
     * @webref stringdict:method
     * @brief Sort by values in ascending order
     */
    public sortValues();

    /**
     * @webref stringdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    sortImpl(useKeys : boolean, reverse : boolean);

    /**
     * Returns a duplicate copy of this object.
     * @return {StringDict}
     */
    public copy() : StringDict;

    public print();

    /**
     * Write tab-delimited entries out to
     * @param {*} writer
     */
    public write(writer : any);

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

declare namespace StringDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : string;

        constructor(__parent: any, key : string, value : string);
    }
}


/**
 * @nowebref
 * @param {number} length
 * @class
 */
declare class StringList {
    count : number;

    data : string[];

    public constructor();

    public constructor(length : number);

    public constructor(list : string[]);

    public constructor(...items : any[]);

    public constructor(iter : Array<string>);

    /**
     * Improve efficiency by removing allocated but unused entries from the
     * internal array used to store the data. Set to private, though it could
     * be useful to have this public if lists are frequently making drastic
     * size changes (from very large to very small).
     * @private
     */
    /*private*/ crop();

    /**
     * Get the length of the list.
     * 
     * @webref stringlist:method
     * @brief Get the length of the list
     * @return {number}
     */
    public size() : number;

    public resize(length : number);

    /**
     * Remove all entries from the list.
     * 
     * @webref stringlist:method
     * @brief Remove all entries from the list
     */
    public clear();

    /**
     * Get an entry at a particular index.
     * 
     * @webref stringlist:method
     * @brief Get an entry at a particular index
     * @param {number} index
     * @return {string}
     */
    public get(index : number) : string;

    /**
     * Set the entry at a particular index. If the index is past the length of
     * the list, it'll expand the list to accommodate, and fill the intermediate
     * entries with 0s.
     * 
     * @webref stringlist:method
     * @brief Set an entry at a particular index
     * @param {number} index
     * @param {string} what
     */
    public set(index : number, what : string);

    /**
     * Just an alias for append(), but matches pop()
     * @param {string} value
     */
    public push(value : string);

    public pop() : string;

    /**
     * Remove an element from the specified index.
     * 
     * @webref stringlist:method
     * @brief Remove an element from the specified index
     * @param {number} index
     * @return {string}
     */
    public remove(index : number) : string;

    public removeValue(value : string) : number;

    public removeValues(value : string) : number;

    public replaceValue(value : string, newValue : string) : number;

    public replaceValues(value : string, newValue : string) : number;

    /**
     * Add a new entry to the list.
     * 
     * @webref stringlist:method
     * @brief Add a new entry to the list
     * @param {string} value
     */
    public append(value : string);

    public append(values : string[]);

    public append(list : StringList);

    /**
     * Add this value, but only if it's not already in the list.
     * @param {string} value
     */
    public appendUnique(value : string);

    public insert(index : number, value : string);

    public insert(index : number, values : string[]);

    public insert(index : number, list : StringList);

    /**
     * Return the first index of a particular value.
     * @param {string} what
     * @return {number}
     */
    public index(what : string) : number;

    /**
     * @webref stringlist:method
     * @brief Check if a value is a part of the list
     * @param {string} value
     * @return {boolean}
     */
    public hasValue(value : string) : boolean;

    /**
     * Sorts the array in place.
     * 
     * @webref stringlist:method
     * @brief Sorts the array in place
     */
    public sort();

    /**
     * Reverse sort, orders values from highest to lowest.
     * 
     * @webref stringlist:method
     * @brief Reverse sort, orders values from highest to lowest
     */
    public sortReverse();

    /*private*/ sortImpl(reverse : boolean);

    /**
     * @webref stringlist:method
     * @brief Reverse the order of the list elements
     */
    public reverse();

    /**
     * Randomize the order of the list elements. Note that this does not
     * obey the randomSeed() function in PApplet.
     * 
     * @webref stringlist:method
     * @brief Randomize the order of the list elements
     */
    public shuffle();

    /**
     * Randomize the list order using the random() function from the specified
     * sketch, allowing shuffle() to use its current randomSeed() setting.
     * @param {*} sketch
     */
    public shuffle(sketch : any);

    /**
     * Make the entire list lower case.
     * 
     * @webref stringlist:method
     * @brief Make the entire list lower case
     */
    public lower();

    /**
     * Make the entire list upper case.
     * 
     * @webref stringlist:method
     * @brief Make the entire list upper case
     */
    public upper();

    public copy() : StringList;

    /**
     * Returns the actual array being used to store the data. Suitable for
     * iterating with a for() loop, but modifying the list could cause terrible
     * things to happen.
     * @return {Array}
     */
    public values() : string[];

    /**
     * 
     * @return {*}
     */
    public iterator() : any;

    /**
     * Create a new array with a copy of all the values.
     * 
     * @return {Array} an array sized by the length of the list with each of the values.
     * @webref stringlist:method
     * @brief Create a new array with a copy of all the values
     */
    public array() : string[];

    /**
     * Copy values into the specified array. If the specified array is null or
     * not the same size, a new array will be allocated.
     * @param {Array} array
     * @return {Array}
     */
    public array(array : string[]) : string[];

    public getSubset(start : number) : StringList;

    public getSubset(start : number, num : number) : StringList;

    /**
     * Get a list of all unique entries.
     * @return {Array}
     */
    public getUnique() : string[];

    /**
     * Count the number of times each String entry is found in this list.
     * @return {IntDict}
     */
    public getTally() : IntDict;

    /**
     * Create a dictionary associating each entry in this list to its index.
     * @return {IntDict}
     */
    public getOrder() : IntDict;

    public join(separator : string) : string;

    public print();

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

/**
 * version that uses a File object; future releases (or data types)
 * may include additional optimizations here
 * 
 * @nowebref
 * @param {*} file
 * @param {string} options
 * @class
 */
declare class Table {
    rowCount : number;

    allocCount : number;

    missingString : string;

    missingInt : number;

    missingLong : number;

    missingFloat : number;

    missingDouble : number;

    missingCategory : number;

    columnTitles : string[];

    columnCategories : Table.HashMapBlows[];

    columnIndices : any;

    columns : any[];

    public static STRING : number;

    public static INT : number;

    public static LONG : number;

    public static FLOAT : number;

    public static DOUBLE : number;

    public static CATEGORY : number;

    columnTypes : number[];

    rowIterator : Table.RowIterator;

    expandIncrement : number;

    public constructor();

    public constructor(file : any);

    public constructor(file : any, options : string);

    public constructor(input : { str: string, cursor: number });

    public constructor(input : { str: string, cursor: number }, options : string);

    public constructor(rows : Array<TableRow>);

    public constructor(rs : any);

    public typedParse(input : { str: string, cursor: number }, options : string) : Table;

    init();

    static loadExtensions : string[];

    static saveExtensions : string[];

    public static extensionOptions(loading : boolean, filename : string, options : string) : string;

    parse(input : { str: string, cursor: number }, options : string);

    parseBasic(reader : { str: string, cursor: number }, header : boolean, tsv : boolean);

    csl : Table.CommaSeparatedLine;

    /**
     * Parse a line of text as comma-separated values, returning each value as
     * one entry in an array of String objects. Remove quotes from entries that
     * begin and end with them, and convert 'escaped' quotes to actual quotes.
     * @param {string} line line of text to be parsed
     * @return {Array} an array of the individual values formerly separated by commas
     * @param {*} reader
     */
    splitLineCSV(line : string, reader : { str: string, cursor: number }) : string[];

    /**
     * Read a .ods (OpenDoc spreadsheet) zip file from an InputStream, and
     * return the InputStream for content.xml contained inside.
     * @param {*} input
     * @return {*}
     * @private
     */
    odsFindContentXML(input : { str: string, cursor: number }) : { str: string, cursor: number };

    odsParse(input : { str: string, cursor: number }, worksheet : string, header : boolean);

    /**
     * Parses a single sheet of XML from this file.
     * @param The XML object for a single worksheet from the ODS file
     * @param {XML} sheet
     * @param {boolean} header
     * @private
     */
    odsParseSheet(sheet : XML, header : boolean);

    odsAppendNotNull(kid : XML, buffer : { str: string, toString: Function });

    /**
     * incomplete, do not use
     * @param {*} enclosingObject
     * @param {string} fieldName
     */
    public parseInto(enclosingObject : any, fieldName : string);

    public save(file : any, options : string) : boolean;

    public save(output : any, options : string) : boolean;

    writeTSV(writer : any);

    writeCSV(writer : any);

    writeEntryCSV(writer : any, entry : string);

    writeHTML(writer : any);

    writeEntryHTML(writer : any, entry : string);

    saveODS(os : any);

    saveStringODS(output : any, text : string);

    saveNumberODS(output : any, text : string);

    static utf8 : string;

    static writeUTF(output : any, ...lines : string[]);

    saveBinary(os : any);

    loadBinary(is : { str: string, cursor: number });

    /**
     * @webref table:method
     * @brief Adds a new column to a table
     * @see Table#removeColumn(String)
     */
    public addColumn();

    /**
     * @param {string} title the title to be used for the new column
     */
    public addColumn(title : string);

    /**
     * @param {number} type the type to be used for the new column: INT, LONG, FLOAT, DOUBLE, or STRING
     * @param {string} title
     */
    public addColumn(title : string, type : number);

    public insertColumn(index : number);

    public insertColumn(index : number, title : string);

    public insertColumn(index : number, title : string, type : number);

    /**
     * @webref table:method
     * @brief Removes a column from a table
     * @param {string} columnName the title of the column to be removed
     * @see Table#addColumn()
     */
    public removeColumn(columnName : string);

    /**
     * @param {number} column the index number of the column to be removed
     */
    public removeColumn(column : number);

    /**
     * @webref table:method
     * @brief Gets the number of columns in a table
     * @see Table#getRowCount()
     * @return {number}
     */
    public getColumnCount() : number;

    /**
     * Change the number of columns in this table. Resizes all rows to ensure
     * the same number of columns in each row. Entries in the additional (empty)
     * columns will be set to null.
     * @param {number} newCount
     */
    public setColumnCount(newCount : number);

    public setColumnType(columnName : string, columnType : string);

    static parseColumnType(columnType : string) : number;

    /**
     * Set the data type for a column so that using it is more efficient.
     * @param {number} column the column to change
     * @param {string} columnType One of int, long, float, double, string, or category.
     */
    public setColumnType(column : number, columnType : string);

    public setColumnType(columnName : string, newType : number);

    /**
     * Sets the column type. If data already exists, then it'll be converted to
     * the new type.
     * @param {number} column the column whose type should be changed
     * @param {number} newType something fresh, maybe try an int or a float for size?
     */
    public setColumnType(column : number, newType : number);

    /**
     * Set the entire table to a specific data type.
     * @param {string} type
     */
    public setTableType(type : string);

    public setColumnTypes(types : number[]);

    /**
     * Set the titles (and if a second column is present) the data types for
     * this table based on a file loaded separately. This will look for the
     * title in column 0, and the type in column 1. Better yet, specify a
     * column named "title" and another named "type" in the dictionary table
     * to future-proof the code.
     * @param {Table} dictionary
     */
    public setColumnTypes(dictionary : Table);

    public getColumnType(columnName : string) : number;

    /**
     * Returns one of Table.STRING, Table.INT, etc...
     * @param {number} column
     * @return {number}
     */
    public getColumnType(column : number) : number;

    public getColumnTypes() : number[];

    /**
     * Remove the first row from the data set, and use it as the column titles.
     * Use loadTable("table.csv", "header") instead.
     * @return {Array}
     */
    public removeTitleRow() : string[];

    public setColumnTitles(titles : string[]);

    public setColumnTitle(column : number, title : string);

    public hasColumnTitles() : boolean;

    public getColumnTitles() : string[];

    public getColumnTitle(col : number) : string;

    public getColumnIndex(columnName : string) : number;

    /**
     * Get the index of a column.
     * @param {string} name Name of the column.
     * @param {boolean} report Whether to throw an exception if the column wasn't found.
     * @return {number} index of the found column, or -1 if not found.
     */
    getColumnIndex(name : string, report : boolean) : number;

    /**
     * Same as getColumnIndex(), but creates the column if it doesn't exist.
     * Named this way to not conflict with checkColumn(), an internal function
     * used to ensure that a columns exists, and also to denote that it returns
     * an int for the column index.
     * @param {string} title column title
     * @return {number} index of a new or previously existing column
     */
    public checkColumnIndex(title : string) : number;

    /**
     * @webref table:method
     * @brief Gets the number of rows in a table
     * @see Table#getColumnCount()
     * @return {number}
     */
    public getRowCount() : number;

    public lastRowIndex() : number;

    /**
     * @webref table:method
     * @brief Removes all rows from a table
     * @see Table#addRow()
     * @see Table#removeRow(int)
     */
    public clearRows();

    public setRowCount(newCount : number);

    /**
     * @webref table:method
     * @brief Adds a row to a table
     * @see Table#removeRow(int)
     * @see Table#clearRows()
     * @return {*}
     */
    public addRow() : TableRow;

    /**
     * @param {*} source a reference to the original row to be duplicated
     * @return {*}
     */
    public addRow(source : TableRow) : TableRow;

    public setRow(row : number, source : TableRow) : TableRow;

    /**
     * @nowebref
     * @param {Array} columnData
     * @return {*}
     */
    public addRow(columnData : any[]) : TableRow;

    public addRows(source : Table);

    public insertRow(insert : number, columnData : any[]);

    /**
     * @webref table:method
     * @brief Removes a row from a table
     * @param {number} row ID number of the row to remove
     * @see Table#addRow()
     * @see Table#clearRows()
     */
    public removeRow(row : number);

    public setRow(row : number, pieces : any[]);

    setRowCol(row : number, col : number, piece : any);

    /**
     * @webref table:method
     * @brief Gets a row from a table
     * @param {number} row ID number of the row to get
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public getRow(row : number) : TableRow;

    /**
     * Note that this one iterator instance is shared by any calls to iterate
     * the rows of this table. This is very efficient, but not thread-safe.
     * If you want to iterate in a multi-threaded manner, don't use the iterator.
     * 
     * @webref table:method
     * @brief Gets multiple rows from a table
     * @see Table#getRow(int)
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*[]}
     */
    public rows() : Array<TableRow>;

    /**
     * @nowebref
     * @param {Array} indices
     * @return {*[]}
     */
    public rows(indices : number[]) : Array<TableRow>;

    /**
     * @webref table:method
     * @brief Get an integer value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {number}
     */
    public getInt(row : number, column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {number}
     */
    public getInt(row : number, columnName : string) : number;

    public setMissingInt(value : number);

    /**
     * @webref table:method
     * @brief Store an integer value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setInt(row : number, column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {number} value
     */
    public setInt(row : number, columnName : string, value : number);

    public getIntColumn(name : string) : number[];

    public getIntColumn(col : number) : number[];

    public getIntRow(row : number) : number[];

    public getLong(row : number, column : number) : number;

    public getLong(row : number, columnName : string) : number;

    public setMissingLong(value : number);

    public setLong(row : number, column : number, value : number);

    public setLong(row : number, columnName : string, value : number);

    public getLongColumn(name : string) : number[];

    public getLongColumn(col : number) : number[];

    public getLongRow(row : number) : number[];

    /**
     * Get a float value from the specified row and column. If the value is null
     * or not parseable as a float, the "missing" value is returned. By default,
     * this is Float.NaN, but can be controlled with setMissingFloat().
     * 
     * @webref table:method
     * @brief Get a float value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getInt(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {number}
     */
    public getFloat(row : number, column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {number}
     */
    public getFloat(row : number, columnName : string) : number;

    public setMissingFloat(value : number);

    /**
     * @webref table:method
     * @brief Store a float value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see Table#setInt(int, int, int)
     * @see Table#setString(int, int, String)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setFloat(row : number, column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {number} value
     */
    public setFloat(row : number, columnName : string, value : number);

    public getFloatColumn(name : string) : number[];

    public getFloatColumn(col : number) : number[];

    public getFloatRow(row : number) : number[];

    public getDouble(row : number, column : number) : number;

    public getDouble(row : number, columnName : string) : number;

    public setMissingDouble(value : number);

    public setDouble(row : number, column : number, value : number);

    public setDouble(row : number, columnName : string, value : number);

    public getDoubleColumn(name : string) : number[];

    public getDoubleColumn(col : number) : number[];

    public getDoubleRow(row : number) : number[];

    /**
     * Get a String value from the table. If the row is longer than the table
     * 
     * @webref table:method
     * @brief Get an String value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {string}
     */
    public getString(row : number, column : number) : string;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {string}
     */
    public getString(row : number, columnName : string) : string;

    /**
     * Treat entries with this string as "missing". Also used for categorial.
     * @param {string} value
     */
    public setMissingString(value : string);

    /**
     * @webref table:method
     * @brief Store a String value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {string} value value to assign
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setString(row : number, column : number, value : string);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {string} value
     */
    public setString(row : number, columnName : string, value : string);

    /**
     * @webref table:method
     * @brief Gets all values in the specified column
     * @param {string} columnName title of the column to search
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {Array}
     */
    public getStringColumn(columnName : string) : string[];

    /**
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public getStringColumn(column : number) : string[];

    public getStringRow(row : number) : string[];

    /**
     * Return the row that contains the first String that matches.
     * @param {string} value the String to match
     * @param {number} column ID number of the column to search
     * @return {number}
     */
    public findRowIndex(value : string, column : number) : number;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} value the String to match
     * @param {string} columnName title of the column to search
     * @return {number}
     */
    public findRowIndex(value : string, columnName : string) : number;

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} value the String to match
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public findRowIndices(value : string, column : number) : number[];

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} value the String to match
     * @param {string} columnName title of the column to search
     * @return {Array}
     */
    public findRowIndices(value : string, columnName : string) : number[];

    /**
     * @webref table:method
     * @brief Finds a row that contains the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public findRow(value : string, column : number) : TableRow;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public findRow(value : string, columnName : string) : TableRow;

    /**
     * @webref table:method
     * @brief Finds multiple rows that contain the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*[]}
     */
    public findRows(value : string, column : number) : Array<TableRow>;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*[]}
     */
    public findRows(value : string, columnName : string) : Array<TableRow>;

    /**
     * @brief Finds multiple rows that contain the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @return {*}
     */
    public findRowIterator(value : string, column : number) : any;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public findRowIterator(value : string, columnName : string) : any;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} regexp the String to match
     * @param {number} column ID number of the column to search
     * @return {number}
     */
    public matchRowIndex(regexp : string, column : number) : number;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} what the String to match
     * @param {string} columnName title of the column to search
     * @return {number}
     */
    public matchRowIndex(what : string, columnName : string) : number;

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} regexp the String to match
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public matchRowIndices(regexp : string, column : number) : number[];

    /**
     * Return a list of rows that match the regex passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} what the String to match
     * @param {string} columnName title of the column to search
     * @return {Array}
     */
    public matchRowIndices(what : string, columnName : string) : number[];

    /**
     * @webref table:method
     * @brief Finds a row that matches the given expression
     * @param {string} regexp the regular expression to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public matchRow(regexp : string, column : number) : TableRow;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} regexp
     * @return {*}
     */
    public matchRow(regexp : string, columnName : string) : TableRow;

    /**
     * @webref table:method
     * @brief Finds multiple rows that match the given expression
     * @param {string} regexp the regular expression to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @return {*[]}
     */
    public matchRows(regexp : string, column : number) : Array<TableRow>;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} regexp
     * @return {*[]}
     */
    public matchRows(regexp : string, columnName : string) : Array<TableRow>;

    /**
     * @webref table:method
     * @brief Finds multiple rows that match the given expression
     * @param {string} value the regular expression to match
     * @param {number} column ID number of the column to search
     * @return {*}
     */
    public matchRowIterator(value : string, column : number) : any;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public matchRowIterator(value : string, columnName : string) : any;

    /**
     * Replace a String with another. Set empty entries null by using
     * replace("", null) or use replace(null, "") to go the other direction.
     * If this is a typed table, only String columns will be modified.
     * @param {string} orig
     * @param {string} replacement
     */
    public replace(orig : string, replacement : string);

    public replace(orig : string, replacement : string, col : number);

    public replace(orig : string, replacement : string, colName : string);

    public replaceAll(regex : string, replacement : string);

    public replaceAll(regex : string, replacement : string, column : number);

    /**
     * Run String.replaceAll() on all entries in a column.
     * Only works with columns that are already String values.
     * @param {string} regex the String to match
     * @param {string} columnName title of the column to search
     * @param {string} replacement
     */
    public replaceAll(regex : string, replacement : string, columnName : string);

    /**
     * Remove any of the specified characters from the entire table.
     * 
     * @webref table:method
     * @brief Removes characters from the table
     * @param {string} tokens a list of individual characters to be removed
     * @see Table#trim()
     */
    public removeTokens(tokens : string);

    /**
     * Removed any of the specified characters from a column. For instance,
     * the following code removes dollar signs and commas from column 2:
     * <pre>
     * table.removeTokens(",$", 2);
     * </pre>
     * 
     * @param {number} column ID number of the column to process
     * @param {string} tokens
     */
    public removeTokens(tokens : string, column : number);

    /**
     * @param {string} columnName title of the column to process
     * @param {string} tokens
     */
    public removeTokens(tokens : string, columnName : string);

    /**
     * @webref table:method
     * @brief Trims whitespace from values
     * @see Table#removeTokens(String)
     */
    public trim();

    isEmptyArray(contents : string[]) : boolean;

    /**
     * @param {number} column ID number of the column to trim
     */
    public trim(column : number);

    /**
     * @param {string} columnName title of the column to trim
     */
    public trim(columnName : string);

    /**
     * Make sure this is a legit column, and if not, expand the table.
     * @param {number} col
     */
    ensureColumn(col : number);

    /**
     * Make sure this is a legit row, and if not, expand the table.
     * @param {number} row
     */
    ensureRow(row : number);

    /**
     * Make sure this is a legit row and column. If not, expand the table.
     * @param {number} row
     * @param {number} col
     */
    ensureBounds(row : number, col : number);

    /**
     * Throw an error if this row doesn't exist.
     * @param {number} row
     */
    checkRow(row : number);

    /**
     * Throw an error if this column doesn't exist.
     * @param {number} column
     */
    checkColumn(column : number);

    /**
     * Throw an error if this entry is out of bounds.
     * @param {number} row
     * @param {number} column
     */
    checkBounds(row : number, column : number);

    /**
     * Sorts (orders) a table based on the values in a column.
     * 
     * @webref table:method
     * @brief Orders a table based on the values in a column
     * @param {string} columnName the name of the column to sort
     * @see Table#trim()
     */
    public sort(columnName : string);

    /**
     * @param {number} column the column ID, e.g. 0, 1, 2
     */
    public sort(column : number);

    public sortReverse(columnName : string);

    public sortReverse(column : number);

    sort(column : number, reverse : boolean);

    public getUnique(columnName : string) : string[];

    public getUnique(column : number) : string[];

    public getTally(columnName : string) : IntDict;

    public getTally(column : number) : IntDict;

    public getOrder(columnName : string) : IntDict;

    public getOrder(column : number) : IntDict;

    public getIntList(columnName : string) : IntList;

    public getIntList(column : number) : IntList;

    public getFloatList(columnName : string) : FloatList;

    public getFloatList(column : number) : FloatList;

    public getStringList(columnName : string) : StringList;

    public getStringList(column : number) : StringList;

    public getIntDict(keyColumnName : string, valueColumnName : string) : IntDict;

    public getIntDict(keyColumn : number, valueColumn : number) : IntDict;

    public getFloatDict(keyColumnName : string, valueColumnName : string) : FloatDict;

    public getFloatDict(keyColumn : number, valueColumn : number) : FloatDict;

    public getStringDict(keyColumnName : string, valueColumnName : string) : StringDict;

    public getStringDict(keyColumn : number, valueColumn : number) : StringDict;

    public getRowMap(columnName : string) : any;

    /**
     * Return a mapping that connects the entry from a column back to the row
     * from which it came. For instance:
     * <pre>
     * Table t = loadTable("country-data.tsv", "header");
     * // use the contents of the 'country' column to index the table
     * Map<String, TableRow> lookup = t.getRowMap("country");
     * // get the row that has "us" in the "country" column:
     * TableRow usRow = lookup.get("us");
     * // get an entry from the 'population' column
     * int population = usRow.getInt("population");
     * </pre>
     * @param {number} column
     * @return {*}
     */
    public getRowMap(column : number) : any;

    createSubset(rowSubset : number[]) : Table;

    /**
     * Searches the entire table for float values.
     * Returns missing float (Float.NaN by default) if no valid numbers found.
     * @return {number}
     */
    getMaxFloat() : number;

    convertBasic(reader : { str: string, cursor: number }, tsv : boolean, outputFile : any);

    convertRow(output : any, pieces : string[]);

    /**
     * Make a copy of the current table
     * @return {Table}
     */
    public copy() : Table;

    public write(writer : any);

    public print();
}

declare namespace Table {

    export class CommaSeparatedLine {
        c : string[];

        pieces : string[];

        pieceCount : number;

        start : number;

        handle(line : string, reader : { str: string, cursor: number }) : string[];

        addPiece(start : number, stop : number, quotes : boolean);

        /**
         * Returns the next comma (not inside a quote) in the specified array.
         * @param c array to search
         * @param index offset at which to start looking
         * @return {boolean} index of the comma, or -1 if line ended inside an unclosed quote
         */
        ingest() : boolean;
    }

    export class RowPointer implements TableRow {
        table : Table;

        row : number;

        public constructor(table : Table, row : number);

        public setRow(row : number);

        public getString(column : number) : string;

        public getString(columnName : string) : string;

        public getInt(column : number) : number;

        public getInt(columnName : string) : number;

        public getLong(column : number) : number;

        public getLong(columnName : string) : number;

        public getFloat(column : number) : number;

        public getFloat(columnName : string) : number;

        public getDouble(column : number) : number;

        public getDouble(columnName : string) : number;

        public setString(column : number, value : string);

        public setString(columnName : string, value : string);

        public setInt(column : number, value : number);

        public setInt(columnName : string, value : number);

        public setLong(column : number, value : number);

        public setLong(columnName : string, value : number);

        public setFloat(column : number, value : number);

        public setFloat(columnName : string, value : number);

        public setDouble(column : number, value : number);

        public setDouble(columnName : string, value : number);

        public getColumnCount() : number;

        public getColumnType(columnName : string) : number;

        public getColumnType(column : number) : number;

        public getColumnTypes() : number[];

        public getColumnTitle(column : number) : string;

        public getColumnTitles() : string[];

        public print();

        public write(writer : any);
    }

    export class RowIterator {
        table : Table;

        rp : Table.RowPointer;

        row : number;

        public constructor(table : Table);

        public remove();

        public next() : TableRow;

        public hasNext() : boolean;

        public reset();
    }

    export class RowIndexIterator {
        table : Table;

        rp : Table.RowPointer;

        indices : number[];

        index : number;

        public constructor(table : Table, indices : number[]);

        public remove();

        public next() : TableRow;

        public hasNext() : boolean;

        public reset();
    }

    export class HashMapBlows {
        dataToIndex : any;

        indexToData : Array<string>;

        constructor();

        constructor(input : any);

        /**
         * gets the index, and creates one if it doesn't already exist.
         * @param {string} key
         * @return {number}
         */
        index(key : string) : number;

        key(index : number) : string;

        hasCategory(index : number) : boolean;

        setCategory(index : number, name : string);

        size() : number;

        write(output : any);

        writeln(writer : any);

        read(input : any);
    }
}


/**
 * @webref data:composite
 * @see Table
 * @see Table#addRow()
 * @see Table#removeRow(int)
 * @see Table#clearRows()
 * @see Table#getRow(int)
 * @see Table#rows()
 * @class
 */
interface TableRow {
    /**
     * @webref tablerow:method
     * @brief Get an String value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getFloat(int)
     * @return {string}
     */
    getString(column : number) : string;

    /**
     * @param {string} columnName title of the column to reference
     * @return {string}
     */
    getString(columnName : string) : string;

    /**
     * @webref tablerow:method
     * @brief Get an integer value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getFloat(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getInt(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getInt(columnName : string) : number;

    /**
     * @brief Get a long value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getFloat(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getLong(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getLong(columnName : string) : number;

    /**
     * @webref tablerow:method
     * @brief Get a float value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getFloat(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getFloat(columnName : string) : number;

    /**
     * @brief Get a double value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getDouble(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getDouble(columnName : string) : number;

    /**
     * @webref tablerow:method
     * @brief Store a String value in the specified column
     * @param {number} column ID number of the target column
     * @param {string} value value to assign
     * @see TableRow#setInt(int, int)
     * @see TableRow#setFloat(int, float)
     */
    setString(column : number, value : string);

    /**
     * @param {string} columnName title of the target column
     * @param {string} value
     */
    setString(columnName : string, value : string);

    /**
     * @webref tablerow:method
     * @brief Store an integer value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setInt(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setInt(columnName : string, value : number);

    /**
     * @brief Store a long value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setLong(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setLong(columnName : string, value : number);

    /**
     * @webref tablerow:method
     * @brief Store a float value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setInt(int, int)
     * @see TableRow#setString(int, String)
     */
    setFloat(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setFloat(columnName : string, value : number);

    /**
     * @brief Store a double value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setDouble(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setDouble(columnName : string, value : number);

    /**
     * @webref tablerow:method
     * @brief Get the column count.
     * @return {number} count of all columns
     */
    getColumnCount() : number;

    /**
     * @brief Get the column type.
     * @param {string} columnName title of the target column
     * @return {number} type of the column
     */
    getColumnType(columnName : string) : number;

    /**
     * @param {number} column ID number of the target column
     * @return {number}
     */
    getColumnType(column : number) : number;

    /**
     * @brief Get the all column types
     * @return {Array} list of all column types
     */
    getColumnTypes() : number[];

    /**
     * @webref tablerow:method
     * @brief Get the column title.
     * @param {number} column ID number of the target column
     * @return {string} title of the column
     */
    getColumnTitle(column : number) : string;

    /**
     * @brief Get the all column titles
     * @return {Array} list of all column titles
     */
    getColumnTitles() : string[];

    write(writer : any);

    print();
}

/**
 * Advanced users only; use loadXML() in PApplet.
 * 
 * @nowebref
 * @param {*} file
 * @param {string} options
 * @class
 */
declare class XML {
    /**
     * The internal representation, a DOM node.
     */
    node : any;

    /**
     * The parent element.
     */
    parent : XML;

    /**
     * Child elements, once loaded.
     */
    children : XML[];

    constructor();

    public constructor(file : any);

    public constructor(file : any, options : string);

    public constructor(input : { str: string, cursor: number });

    public constructor(input : { str: string, cursor: number }, options : string);

    public constructor(reader : { str: string, cursor: number });

    public constructor(reader : { str: string, cursor: number }, options : string);

    public constructor(name : string);

    constructor(parent : XML, node : any);

    /**
     * @webref xml:method
     * @brief Converts String content to an XML object
     * @param {string} data the content to be parsed as XML
     * @return {XML} an XML object, or null
     * @throws SAXException
     * @throws ParserConfigurationException
     * @throws IOException
     * @nowebref
     */
    public static parse(data : string) : XML;

    /**
     * @nowebref
     * @param {string} data
     * @param {string} options
     * @return {XML}
     */
    public static parse(data : string, options : string) : XML;

    public save(file : any) : boolean;

    public save(file : any, options : string) : boolean;

    public write(output : any) : boolean;

    /**
     * Returns the parent element. This method returns null for the root
     * element.
     * 
     * @webref xml:method
     * @brief Gets a copy of the element's parent
     * @return {XML}
     */
    public getParent() : XML;

    /**
     * Internal function; not included in reference.
     * @return {*}
     */
    getNative() : any;

    /**
     * Returns the full name (i.e. the name including an eventual namespace
     * prefix) of the element.
     * 
     * @webref xml:method
     * @brief Gets the element's full name
     * @return {string} the name, or null if the element only contains #PCDATA.
     */
    public getName() : string;

    /**
     * @webref xml:method
     * @brief Sets the element's name
     * @param {string} newName
     */
    public setName(newName : string);

    /**
     * Returns the name of the element (without namespace prefix).
     * 
     * Internal function; not included in reference.
     * @return {string}
     */
    public getLocalName() : string;

    /**
     * Honey, can you just check on the kids? Thanks.
     * 
     * Internal function; not included in reference.
     */
    checkChildren();

    /**
     * Returns the number of children.
     * 
     * @webref xml:method
     * @brief Returns the element's number of children
     * @return {number} the count.
     */
    public getChildCount() : number;

    /**
     * Returns a boolean of whether or not there are children.
     * 
     * @webref xml:method
     * @brief Checks whether or not an element has any children
     * @return {boolean}
     */
    public hasChildren() : boolean;

    /**
     * Put the names of all children into an array. Same as looping through
     * each child and calling getName() on each XMLElement.
     * 
     * @webref xml:method
     * @brief Returns the names of all children as an array
     * @return {Array}
     */
    public listChildren() : string[];

    /**
     * Returns an array containing all the child elements.
     * 
     * @webref xml:method
     * @brief Returns an array containing all child elements
     * @return {Array}
     */
    public getChildren() : XML[];

    /**
     * Quick accessor for an element at a particular index.
     * 
     * @webref xml:method
     * @brief Returns the child element with the specified index value or path
     * @param {number} index
     * @return {XML}
     */
    public getChild(index : number) : XML;

    /**
     * Get a child by its name or path.
     * 
     * @param {string} name element name or path/to/element
     * @return {XML} the first matching element or null if no match
     */
    public getChild(name : string) : XML;

    /**
     * Internal helper function for getChild(String).
     * 
     * @param {Array} items result of splitting the query on slashes
     * @param {number} offset where in the items[] array we're currently looking
     * @return {XML} matching element or null if no match
     * @author processing.org
     */
    getChildRecursive(items : string[], offset : number) : XML;

    /**
     * Get any children that match this name or path. Similar to getChild(),
     * but will grab multiple matches rather than only the first.
     * 
     * @param {string} name element name or path/to/element
     * @return {Array} array of child elements that match
     * @author processing.org
     */
    public getChildren(name : string) : XML[];

    getChildrenRecursive(items : string[], offset : number) : XML[];

    /**
     * @webref xml:method
     * @brief Appends a new child to the element
     * @param {string} tag
     * @return {XML}
     */
    public addChild(tag : string) : XML;

    public addChild(child : XML) : XML;

    /**
     * Internal handler to add the node structure.
     * @param {*} newNode
     * @return {XML}
     */
    appendChild(newNode : any) : XML;

    /**
     * @webref xml:method
     * @brief Removes the specified child
     * @param {XML} kid
     */
    public removeChild(kid : XML);

    public trim();

    /**
     * Returns the number of attributes.
     * 
     * @webref xml:method
     * @brief Counts the specified element's number of attributes
     * @return {number}
     */
    public getAttributeCount() : number;

    /**
     * Get a list of the names for all of the attributes for this node.
     * 
     * @webref xml:method
     * @brief Returns a list of names of all attributes as an array
     * @return {Array}
     */
    public listAttributes() : string[];

    /**
     * Returns whether an attribute exists.
     * 
     * @webref xml:method
     * @brief Checks whether or not an element has the specified attribute
     * @param {string} name
     * @return {boolean}
     */
    public hasAttribute(name : string) : boolean;

    /**
     * @webref xml:method
     * @brief Gets the content of an attribute as a String
     * @param {string} name
     * @return {string}
     */
    public getString(name : string) : string;

    public getString(name : string, defaultValue : string) : string;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as a String
     * @param {string} name
     * @param {string} value
     */
    public setString(name : string, value : string);

    /**
     * @webref xml:method
     * @brief Gets the content of an attribute as an int
     * @param {string} name
     * @return {number}
     */
    public getInt(name : string) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as an int
     * @param {string} name
     * @param {number} value
     */
    public setInt(name : string, value : number);

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute
     * @param {number} defaultValue the default value of the attribute
     * @return {number} the value, or defaultValue if the attribute does not exist
     */
    public getInt(name : string, defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an element as an int
     * @param {string} name
     * @param {number} value
     */
    public setLong(name : string, value : number);

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute.
     * @param {number} defaultValue the default value of the attribute.
     * @return {number} the value, or defaultValue if the attribute does not exist.
     */
    public getLong(name : string, defaultValue : number) : number;

    /**
     * Returns the value of an attribute, or zero if not present.
     * 
     * @webref xml:method
     * @brief Gets the content of an attribute as a float
     * @param {string} name
     * @return {number}
     */
    public getFloat(name : string) : number;

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute.
     * @param {number} defaultValue the default value of the attribute.
     * @return {number} the value, or defaultValue if the attribute does not exist.
     */
    public getFloat(name : string, defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as a float
     * @param {string} name
     * @param {number} value
     */
    public setFloat(name : string, value : number);

    public getDouble(name : string) : number;

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute
     * @param {number} defaultValue the default value of the attribute
     * @return {number} the value, or defaultValue if the attribute does not exist
     */
    public getDouble(name : string, defaultValue : number) : number;

    public setDouble(name : string, value : number);

    /**
     * Return the #PCDATA content of the element. If the element has a
     * combination of #PCDATA content and child elements, the #PCDATA
     * sections can be retrieved as unnamed child objects. In this case,
     * this method returns null.
     * 
     * @webref xml:method
     * @brief Gets the content of an element
     * @return {string} the content.
     * @see XML#getIntContent()
     * @see XML#getFloatContent()
     */
    public getContent() : string;

    public getContent(defaultValue : string) : string;

    /**
     * @webref xml:method
     * @brief Gets the content of an element as an int
     * @return {number} the content.
     * @see XML#getContent()
     * @see XML#getFloatContent()
     */
    public getIntContent() : number;

    /**
     * @param {number} defaultValue the default value of the attribute
     * @return {number}
     */
    public getIntContent(defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Gets the content of an element as a float
     * @return {number} the content.
     * @see XML#getContent()
     * @see XML#getIntContent()
     */
    public getFloatContent() : number;

    /**
     * @param {number} defaultValue the default value of the attribute
     * @return {number}
     */
    public getFloatContent(defaultValue : number) : number;

    public getLongContent() : number;

    public getLongContent(defaultValue : number) : number;

    public getDoubleContent() : number;

    public getDoubleContent(defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an element
     * @param {string} text
     */
    public setContent(text : string);

    public setIntContent(value : number);

    public setFloatContent(value : number);

    public setLongContent(value : number);

    public setDoubleContent(value : number);

    /**
     * Format this XML data as a String.
     * 
     * @webref xml:method
     * @brief Formats XML data as a String
     * @param {number} indent -1 for a single line (and no declaration), >= 0 for indents and newlines
     * @return {string} the content
     * @see XML#toString()
     */
    public format(indent : number) : string;

    public print();

    /**
     * Return the XML document formatted with two spaces for indents.
     * Chosen to do this since it's the most common case (e.g. with println()).
     * Same as format(2). Use the format() function for more options.
     * 
     * @webref xml:method
     * @brief Gets XML data as a String using default formatting
     * @return {string} the content
     * @see XML#format(int)
     */
    public toString() : string;
}

declare class ProcessingEvent {
    nativeObject : any;

    millis : number;

    action : number;

    public static SHIFT : number;

    public static CTRL : number;

    public static META : number;

    public static ALT : number;

    modifiers : number;

    public static KEY : number;

    public static MOUSE : number;

    public static TOUCH : number;

    flavor : number;

    public constructor(nativeObject : any, millis : number, action : number, modifiers : number);

    public getFlavor() : number;

    /**
     * Get the platform-native event object. This might be the java.awt event
     * on the desktop, though if you're using OpenGL on the desktop it'll be a
     * NEWT event that JOGL uses. Android events are something else altogether.
     * Bottom line, use this only if you know what you're doing, and don't make
     * assumptions about the class type.
     * @return {*}
     */
    public getNative() : any;

    public getMillis() : number;

    public getAction() : number;

    public getModifiers() : number;

    public isShiftDown() : boolean;

    public isControlDown() : boolean;

    public isMetaDown() : boolean;

    public isAltDown() : boolean;
}

declare class ProcessingKeyEvent extends ProcessingEvent {
    public static PRESS : number;

    public static RELEASE : number;

    public static TYPE : number;

    key : string;

    keyCode : number;

    isAutoRepeat : any;

    public constructor(nativeObject : any, millis : number, action : number, modifiers : number, key : string, keyCode : number);

    public constructor(nativeObject : any, millis : number, action : number, modifiers : number, key : string, keyCode : number, isAutoRepeat : boolean);

    public getKey() : string;

    public getKeyCode() : number;
}

declare class ProcessingMouseEvent extends ProcessingEvent {
    public static PRESS : number;

    public static RELEASE : number;

    public static CLICK : number;

    public static DRAG : number;

    public static MOVE : number;

    public static ENTER : number;

    public static EXIT : number;

    public static WHEEL : number;

    x : number;

    y : number;

    button : number;

    count : number;

    public constructor(nativeObject : any, millis : number, action : number, modifiers : number, x : number, y : number, button : number, count : number);

    public getX() : number;

    public getY() : number;

    /**
     * Which button was pressed, either LEFT, CENTER, or RIGHT.
     * @return {number}
     */
    public getButton() : number;

    /**
     * Do not use, getCount() is the correct method.
     * @return {number}
     */
    public getClickCount() : number;

    /**
     * Do not use, getCount() is the correct method.
     * @return {number}
     */
    public getAmount() : number;

    /**
     * Number of clicks for mouse button events, or the number of steps (positive
     * or negative depending on direction) for a mouse wheel event.
     * Wheel events follow Java (see <a href="http://docs.oracle.com/javase/6/docs/api/java/awt/event/MouseWheelEvent.html#getWheelRotation()">here</a>), so
     * getAmount() will return "negative values if the mouse wheel was rotated
     * up or away from the user" and positive values in the other direction.
     * On Mac OS X, this will be reversed when "natural" scrolling is enabled
     * in System Preferences &rarr Mouse.
     * @return {number}
     */
    public getCount() : number;

    /*private*/ actionString() : string;
}

declare class ProcessingTouchEvent extends ProcessingEvent {}

/**
 * All the infrastructure needed for optimized font rendering
 * in OpenGL. Basically, this special class is needed because
 * fonts in Processing are handled by a separate PImage for each
 * glyph. For performance reasons, all these glyphs should be
 * stored in a single OpenGL texture (otherwise, rendering a
 * string of text would involve binding and un-binding several
 * textures.
 * PFontTexture manages the correspondence between individual
 * glyphs and the large OpenGL texture containing them. Also,
 * in the case that the font size is very large, one single
 * OpenGL texture might not be enough to store all the glyphs,
 * so PFontTexture also takes care of spreading a single font
 * over several textures.
 * @author Andres Colubri
 * @param {PGraphicsOpenGL} pg
 * @param {PFont} font
 * @param {boolean} is3D
 * @class
 */
declare class FontTexture implements PConstants {
    pgl : PGL;

    is3D : boolean;

    minSize : number;

    maxSize : number;

    offsetX : number;

    offsetY : number;

    lineHeight : number;

    textures : Texture[];

    images : PImage[];

    lastTex : number;

    glyphTexinfos : FontTexture.TextureInfo[];

    texinfoMap : any;

    public constructor(pg : PGraphicsOpenGL, font : PFont, is3D : boolean);

    allocate();

    dispose();

    initTexture(pg : PGraphicsOpenGL, font : PFont);

    public addTexture(pg : PGraphicsOpenGL) : boolean;

    public begin();

    public end();

    public getTexture(info : FontTexture.TextureInfo) : PImage;

    public addAllGlyphsToTexture(pg : PGraphicsOpenGL, font : PFont);

    public updateGlyphsTexCoords();

    public getTexInfo(glyph : PFont.Glyph) : FontTexture.TextureInfo;

    public addToTexture(pg : PGraphicsOpenGL, glyph : PFont.Glyph) : FontTexture.TextureInfo;

    public contextIsOutdated() : boolean;

    addToTexture(pg : PGraphicsOpenGL, idx : number, glyph : PFont.Glyph);
}

declare namespace FontTexture {

    export class TextureInfo {
        public __parent: any;
        texIndex : number;

        width : number;

        height : number;

        crop : number[];

        u0 : number;

        u1 : number;

        v0 : number;

        v1 : number;

        pixels : number[];

        constructor(__parent: any, tidx : number, cropX : number, cropY : number, cropW : number, cropH : number, pix : number[]);

        updateUV();

        updateTex();
    }
}


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

    pixelBuffer : any;

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

    public getPixelBuffer() : any;

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

/**
 * Constructs a new {@code LinePath} object from the given specified initial
 * values. This method is only intended for internal use and should not be
 * made public if the other constructors for this class are ever exposed.
 * 
 * @param {number} rule
 * the winding rule
 * @param {number} initialCapacity
 * the size to make the initial array to store the path segment types
 * @class
 */
declare class LinePath {
    /**
     * The winding rule constant for specifying an even-odd rule
     * for determining the interior of a path.
     * The even-odd rule specifies that a point lies inside the
     * path if a ray drawn in any direction from that point to
     * infinity is crossed by path segments an odd number of times.
     */
    public static WIND_EVEN_ODD : number;

    /**
     * The winding rule constant for specifying a non-zero rule
     * for determining the interior of a path.
     * The non-zero rule specifies that a point lies inside the
     * path if a ray drawn in any direction from that point to
     * infinity is crossed by path segments a different number
     * of times in the counter-clockwise direction than the
     * clockwise direction.
     */
    public static WIND_NON_ZERO : number;

    /**
     * Starts segment at a given position.
     */
    public static SEG_MOVETO : number;

    /**
     * Extends segment by adding a line to a given position.
     */
    public static SEG_LINETO : number;

    /**
     * Closes segment at current position.
     */
    public static SEG_CLOSE : number;

    /**
     * Joins path segments by extending their outside edges until they meet.
     */
    public static JOIN_MITER : number;

    /**
     * Joins path segments by rounding off the corner at a radius of half the line
     * width.
     */
    public static JOIN_ROUND : number;

    /**
     * Joins path segments by connecting the outer corners of their wide outlines
     * with a straight segment.
     */
    public static JOIN_BEVEL : number;

    /**
     * Ends unclosed subpaths and dash segments with no added decoration.
     */
    public static CAP_BUTT : number;

    /**
     * Ends unclosed subpaths and dash segments with a round decoration that has a
     * radius equal to half of the width of the pen.
     */
    public static CAP_ROUND : number;

    /**
     * Ends unclosed subpaths and dash segments with a square projection that
     * extends beyond the end of the segment to a distance equal to half of the
     * line width.
     */
    public static CAP_SQUARE : number;

    static identity : PMatrix2D;

    static defaultMiterlimit : number;

    static INIT_SIZE : number;

    static EXPAND_MAX : number;

    pointTypes : number[];

    floatCoords : number[];

    pointColors : number[];

    numTypes : number;

    numCoords : number;

    windingRule : number;

    public constructor();

    public constructor(rule : number);

    public constructor(rule : number, initialCapacity : number);

    needRoom(needMove : boolean, newPoints : number);

    /**
     * Adds a point to the path by moving to the specified coordinates specified
     * in float precision.
     * <p>
     * This method provides a single precision variant of the double precision
     * {@code moveTo()} method on the base {@code LinePath} class.
     * 
     * @param {number} x
     * the specified X coordinate
     * @param {number} y
     * the specified Y coordinate
     * @see LinePath#moveTo
     * @param {number} c
     */
    public moveTo(x : number, y : number, c : number);

    /**
     * Adds a point to the path by drawing a straight line from the current
     * coordinates to the new specified coordinates specified in float precision.
     * <p>
     * This method provides a single precision variant of the double precision
     * {@code lineTo()} method on the base {@code LinePath} class.
     * 
     * @param {number} x
     * the specified X coordinate
     * @param {number} y
     * the specified Y coordinate
     * @see LinePath#lineTo
     * @param {number} c
     */
    public lineTo(x : number, y : number, c : number);

    /**
     * The iterator for this class is not multi-threaded safe, which means that
     * the {@code LinePath} class does not guarantee that modifications to the
     * geometry of this {@code LinePath} object do not affect any iterations of that
     * geometry that are already in process.
     * @return {LinePath.PathIterator}
     */
    public getPathIterator() : LinePath.PathIterator;

    /**
     * Closes the current subpath by drawing a straight line back to the
     * coordinates of the last {@code moveTo}. If the path is already closed then
     * this method has no effect.
     */
    public closePath();

    /**
     * Returns the fill style winding rule.
     * 
     * @return {number} an integer representing the current winding rule.
     * @see #WIND_EVEN_ODD
     * @see #WIND_NON_ZERO
     * @see #setWindingRule
     */
    public getWindingRule() : number;

    /**
     * Sets the winding rule for this path to the specified value.
     * 
     * @param {number} rule
     * an integer representing the specified winding rule
     * @exception IllegalArgumentException
     * if {@code rule} is not either {@link #WIND_EVEN_ODD} or
     * {@link #WIND_NON_ZERO}
     * @see #getWindingRule
     */
    public setWindingRule(rule : number);

    /**
     * Resets the path to empty. The append position is set back to the beginning
     * of the path and all coordinates and point types are forgotten.
     */
    public reset();

    public static createStrokedPath(src : LinePath, weight : number, caps : number, join : number) : LinePath;

    public static createStrokedPath(src : LinePath, weight : number, caps : number, join : number, miterlimit : number) : LinePath;

    /**
     * Constructs a solid <code>LinePath</code> with the specified attributes.
     * 
     * @param {LinePath} src
     * the original path to be stroked
     * @param {number} weight
     * the weight of the stroked path
     * @param {number} caps
     * the decoration of the ends of the segments in the path
     * @param {number} join
     * the decoration applied where path segments meet
     * @param {number} miterlimit
     * @param {PMatrix2D} transform
     * @return {LinePath}
     */
    public static createStrokedPath(src : LinePath, weight : number, caps : number, join : number, miterlimit : number, transform : PMatrix2D) : LinePath;

    static strokeTo(src : LinePath, width : number, caps : number, join : number, miterlimit : number, transform : PMatrix2D, lsink : LineStroker);

    static pathTo(pi : LinePath.PathIterator, lsink : LineStroker);

    public static copyOf(source : number[], length : number) : number[];

    public static copyOf(source : number[], length : number) : number[];

    public static copyOf(source : number[], length : number) : number[];

    public static isqrt(x : number) : number;

    public static lsqrt(x : number) : number;

    public static hypot(x : number, y : number) : number;

    public static hypot(x : number, y : number) : number;

    public static hypot(x : number, y : number) : number;

    static FloatToS15_16(flt : number) : number;

    static S15_16ToFloat(fix : number) : number;
}

declare namespace LinePath {

    export class PathIterator {
        floatCoords : number[];

        typeIdx : number;

        pointIdx : number;

        colorIdx : number;

        path : LinePath;

        static curvecoords : number[];

        constructor(p2df : LinePath);

        public currentSegment(coords : number[]) : number;

        public currentSegment(coords : number[]) : number;

        public getWindingRule() : number;

        public isDone() : boolean;

        public next();
    }
}


/**
 * Constructs a <code>LineStroker</code>.
 * 
 * @param {LineStroker} output
 * an output <code>LineStroker</code>.
 * @param {number} lineWidth
 * the desired line width in pixels, in S15.16 format.
 * @param {number} capStyle
 * the desired end cap style, one of <code>CAP_BUTT</code>,
 * <code>CAP_ROUND</code> or <code>CAP_SQUARE</code>.
 * @param {number} joinStyle
 * the desired line join style, one of <code>JOIN_MITER</code>,
 * <code>JOIN_ROUND</code> or <code>JOIN_BEVEL</code>.
 * @param {number} miterLimit
 * the desired miter limit, in S15.16 format.
 * @param {PMatrix2D} transform
 * a <code>Transform4</code> object indicating the transform that has
 * been previously applied to all incoming coordinates. This is
 * required in order to produce consistently shaped end caps and
 * joins.
 * @class
 */
declare class LineStroker {
    /*private*/ output : LineStroker;

    /*private*/ capStyle : number;

    /*private*/ joinStyle : number;

    /*private*/ m00 : number;

    /*private*/ m01 : number;

    /*private*/ m10 : number;

    /*private*/ m11 : number;

    /*private*/ lineWidth2 : number;

    /*private*/ scaledLineWidth2 : number;

    /*private*/ numPenSegments : number;

    /*private*/ pen_dx : number[];

    /*private*/ pen_dy : number[];

    /*private*/ penIncluded : boolean[];

    /*private*/ join : number[];

    /*private*/ offset : number[];

    /*private*/ reverse : number[];

    /*private*/ miter : number[];

    /*private*/ miterLimitSq : number;

    /*private*/ prev : number;

    /*private*/ rindex : number;

    /*private*/ started : boolean;

    /*private*/ lineToOrigin : boolean;

    /*private*/ joinToOrigin : boolean;

    /*private*/ sx0 : number;

    /*private*/ sy0 : number;

    /*private*/ sx1 : number;

    /*private*/ sy1 : number;

    /*private*/ x0 : number;

    /*private*/ y0 : number;

    /*private*/ scolor0 : number;

    /*private*/ pcolor0 : number;

    /*private*/ color0 : number;

    /*private*/ mx0 : number;

    /*private*/ my0 : number;

    /*private*/ omx : number;

    /*private*/ omy : number;

    /*private*/ px0 : number;

    /*private*/ py0 : number;

    /*private*/ m00_2_m01_2 : number;

    /*private*/ m10_2_m11_2 : number;

    /*private*/ m00_m10_m01_m11 : number;

    public constructor();

    public constructor(output : LineStroker, lineWidth : number, capStyle : number, joinStyle : number, miterLimit : number, transform : PMatrix2D);

    /**
     * Sets the output <code>LineStroker</code> of this <code>LineStroker</code>.
     * 
     * @param {LineStroker} output
     * an output <code>LineStroker</code>.
     */
    public setOutput(output : LineStroker);

    /**
     * Sets the parameters of this <code>LineStroker</code>.
     * 
     * @param {number} lineWidth
     * the desired line width in pixels, in S15.16 format.
     * @param {number} capStyle
     * the desired end cap style, one of <code>CAP_BUTT</code>,
     * <code>CAP_ROUND</code> or <code>CAP_SQUARE</code>.
     * @param {number} joinStyle
     * the desired line join style, one of <code>JOIN_MITER</code>,
     * <code>JOIN_ROUND</code> or <code>JOIN_BEVEL</code>.
     * @param {number} miterLimit
     * the desired miter limit, in S15.16 format.
     * @param {PMatrix2D} transform
     * a <code>Transform4</code> object indicating the transform that has
     * been previously applied to all incoming coordinates. This is
     * required in order to produce consistently shaped end caps and
     * joins.
     */
    public setParameters(lineWidth : number, capStyle : number, joinStyle : number, miterLimit : number, transform : PMatrix2D);

    /*private*/ computeOffset(x0 : number, y0 : number, x1 : number, y1 : number, m : number[]);

    /*private*/ ensureCapacity(newrindex : number);

    /*private*/ isCCW(x0 : number, y0 : number, x1 : number, y1 : number, x2 : number, y2 : number) : boolean;

    /*private*/ side(x : number, y : number, x0 : number, y0 : number, x1 : number, y1 : number) : boolean;

    /*private*/ computeRoundJoin(cx : number, cy : number, xa : number, ya : number, xb : number, yb : number, side : number, flip : boolean, join : number[]) : number;

    static ROUND_JOIN_THRESHOLD : number;

    static ROUND_JOIN_INTERNAL_THRESHOLD : number;

    /*private*/ drawRoundJoin(x : number, y : number, omx : number, omy : number, mx : number, my : number, side : number, color : number, flip : boolean, rev : boolean, threshold : number);

    /*private*/ computeMiter(ix0 : number, iy0 : number, ix1 : number, iy1 : number, ix0p : number, iy0p : number, ix1p : number, iy1p : number, m : number[]);

    /*private*/ drawMiter(px0 : number, py0 : number, x0 : number, y0 : number, x1 : number, y1 : number, omx : number, omy : number, mx : number, my : number, color : number, rev : boolean);

    public moveTo(x0 : number, y0 : number, c0 : number);

    joinSegment : boolean;

    public lineJoin();

    public lineTo(x1 : number, y1 : number, c1 : number);

    /*private*/ lineToImpl(x1 : number, y1 : number, c1 : number, joinSegment : boolean);

    public close();

    public end();

    lineLength(ldx : number, ldy : number) : number;

    /*private*/ finish();

    /*private*/ emitMoveTo(x0 : number, y0 : number, c0 : number);

    /*private*/ emitLineTo(x1 : number, y1 : number, c1 : number);

    /*private*/ emitLineTo(x1 : number, y1 : number, c1 : number, rev : boolean);

    /*private*/ emitClose();
}

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

    sketch : any;

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


declare class PGraphics2D extends PGraphicsOpenGL {
    defaultCamera();

    static isSupportedExtension(extension : string) : boolean;

    static loadShapeImpl(pg : PGraphics, filename : string, extension : string) : PShape;
}

declare class PGraphics3D extends PGraphicsOpenGL {
    defaultCamera();

    static isSupportedExtension(extension : string) : boolean;

    static loadShapeImpl(pg : PGraphics, filename : string, extension : string) : PShape;
}

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


/**
 * Creates a shader program using the specified vertex and fragment
 * shaders.
 * 
 * @param {*} parent the parent program
 * @param {string} vertFilename name of the vertex shader
 * @param {string} fragFilename name of the fragment shader
 * @class
 */
declare class PShader implements PConstants {
    static POINT : number;

    static LINE : number;

    static POLY : number;

    static COLOR : number;

    static LIGHT : number;

    static TEXTURE : number;

    static TEXLIGHT : number;

    static pointShaderAttrRegexp : string;

    static pointShaderInRegexp : string;

    static lineShaderAttrRegexp : string;

    static lineShaderInRegexp : string;

    static pointShaderDefRegexp : string;

    static lineShaderDefRegexp : string;

    static colorShaderDefRegexp : string;

    static lightShaderDefRegexp : string;

    static texShaderDefRegexp : string;

    static texlightShaderDefRegexp : string;

    static polyShaderDefRegexp : string;

    static triShaderAttrRegexp : string;

    static quadShaderAttrRegexp : string;

    parent : any;

    primaryPG : PGraphicsOpenGL;

    currentPG : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    type : number;

    public glProgram : number;

    public glVertex : number;

    public glFragment : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceShader;

    vertexURL : URL;

    fragmentURL : URL;

    vertexFilename : string;

    fragmentFilename : string;

    vertexShaderSource : string[];

    fragmentShaderSource : string[];

    bound : any;

    uniformValues : any;

    textures : any;

    texUnits : any;

    intBuffer : any;

    floatBuffer : any;

    loadedAttributes : boolean;

    loadedUniforms : boolean;

    transformMatLoc : number;

    modelviewMatLoc : number;

    projectionMatLoc : number;

    ppixelsLoc : number;

    ppixelsUnit : number;

    viewportLoc : number;

    resolutionLoc : number;

    perspectiveLoc : number;

    scaleLoc : number;

    lightCountLoc : number;

    lightPositionLoc : number;

    lightNormalLoc : number;

    lightAmbientLoc : number;

    lightDiffuseLoc : number;

    lightSpecularLoc : number;

    lightFalloffLoc : number;

    lightSpotLoc : number;

    texture : Texture;

    texUnit : number;

    textureLoc : number;

    texMatrixLoc : number;

    texOffsetLoc : number;

    tcmat : number[];

    vertexLoc : number;

    colorLoc : number;

    normalLoc : number;

    texCoordLoc : number;

    normalMatLoc : number;

    directionLoc : number;

    offsetLoc : number;

    ambientLoc : number;

    specularLoc : number;

    emissiveLoc : number;

    shininessLoc : number;

    public constructor();

    public constructor(parent : any);

    public constructor(parent : any, vertFilename : string, fragFilename : string);

    public constructor(parent : any, vertURL : URL, fragURL : URL);

    public constructor(parent : any, vertSource : string[], fragSource : string[]);

    public setVertexShader(vertFilename : string);

    public setVertexShader(vertURL : URL);

    public setVertexShader(vertSource : string[]);

    public setFragmentShader(fragFilename : string);

    public setFragmentShader(fragURL : URL);

    public setFragmentShader(fragSource : string[]);

    /**
     * Initializes (if needed) and binds the shader program.
     */
    public bind();

    /**
     * Unbinds the shader program.
     */
    public unbind();

    /**
     * @webref rendering:shaders
     * @brief Sets a variable within the shader
     * @param {string} name the name of the uniform variable to modify
     * @param {number} x first component of the variable to modify
     */
    public set(name : string, x : number);

    /**
     * @param {number} y second component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[2], vec2)
     * @param {string} name
     * @param {number} x
     */
    public set(name : string, x : number, y : number);

    /**
     * @param {number} z third component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[3], vec3)
     * @param {string} name
     * @param {number} x
     * @param {number} y
     */
    public set(name : string, x : number, y : number, z : number);

    /**
     * @param {number} w fourth component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[4], vec4)
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public set(name : string, x : number, y : number, z : number, w : number);

    public set(name : string, x : number);

    public set(name : string, x : number, y : number);

    public set(name : string, x : number, y : number, z : number);

    public set(name : string, x : number, y : number, z : number, w : number);

    /**
     * @param {PVector} vec modifies all the components of an array/vector uniform variable. PVector can only be used if the type of the variable is vec3.
     * @param {string} name
     */
    public set(name : string, vec : PVector);

    public set(name : string, x : boolean);

    public set(name : string, x : boolean, y : boolean);

    public set(name : string, x : boolean, y : boolean, z : boolean);

    public set(name : string, x : boolean, y : boolean, z : boolean, w : boolean);

    public set(name : string, vec : number[]);

    /**
     * @param {number} ncoords number of coordinates per element, max 4
     * @param {string} name
     * @param {Array} vec
     */
    public set(name : string, vec : number[], ncoords : number);

    public set(name : string, vec : number[]);

    public set(name : string, vec : number[], ncoords : number);

    public set(name : string, vec : boolean[]);

    public set(name : string, boolvec : boolean[], ncoords : number);

    /**
     * @param {PMatrix2D} mat matrix of values
     * @param {string} name
     */
    public set(name : string, mat : PMatrix2D);

    public set(name : string, mat : PMatrix3D);

    /**
     * @param {boolean} use3x3 enforces the matrix is 3 x 3
     * @param {string} name
     * @param {PMatrix3D} mat
     */
    public set(name : string, mat : PMatrix3D, use3x3 : boolean);

    /**
     * @param {PImage} tex sets the sampler uniform variable to read from this image texture
     * @param {string} name
     */
    public set(name : string, tex : PImage);

    /**
     * Extra initialization method that can be used by subclasses, called after
     * compiling and attaching the vertex and fragment shaders, and before
     * linking the shader program.
     */
    setup();

    draw(idxId : number, count : number, offset : number);

    /**
     * Returns the ID location of the attribute parameter given its name.
     * 
     * @param {string} name String
     * @return {number} int
     */
    getAttributeLoc(name : string) : number;

    /**
     * Returns the ID location of the uniform parameter given its name.
     * 
     * @param {string} name String
     * @return {number} int
     */
    getUniformLoc(name : string) : number;

    setAttributeVBO(loc : number, vboId : number, size : number, type : number, normalized : boolean, stride : number, offset : number);

    setUniformValue(loc : number, x : number);

    setUniformValue(loc : number, x : number, y : number);

    setUniformValue(loc : number, x : number, y : number, z : number);

    setUniformValue(loc : number, x : number, y : number, z : number, w : number);

    setUniformValue(loc : number, x : number);

    setUniformValue(loc : number, x : number, y : number);

    setUniformValue(loc : number, x : number, y : number, z : number);

    setUniformValue(loc : number, x : number, y : number, z : number, w : number);

    setUniformVector(loc : number, vec : number[], ncoords : number, length : number);

    setUniformVector(loc : number, vec : number[], ncoords : number, length : number);

    setUniformMatrix(loc : number, mat : number[]);

    setUniformTex(loc : number, tex : Texture);

    setUniformImpl(name : string, type : number, value : any);

    consumeUniforms();

    updateIntBuffer(vec : number[]);

    updateFloatBuffer(vec : number[]);

    bindTextures();

    unbindTextures();

    public init();

    create();

    compile() : boolean;

    validate();

    contextIsOutdated() : boolean;

    hasVertexShader() : boolean;

    hasFragmentShader() : boolean;

    /**
     * @param shaderSource a string containing the shader's code
     * @return {boolean}
     */
    compileVertexShader() : boolean;

    /**
     * @param shaderSource a string containing the shader's code
     * @return {boolean}
     */
    compileFragmentShader() : boolean;

    dispose();

    static getShaderType(source : string[], defaultType : number) : number;

    getType() : number;

    setType(type : number);

    hasType() : boolean;

    isPointShader() : boolean;

    isLineShader() : boolean;

    isPolyShader() : boolean;

    checkPolyType(type : number) : boolean;

    getLastTexUnit() : number;

    setRenderer(pg : PGraphicsOpenGL);

    loadAttributes();

    loadUniforms();

    setCommonUniforms();

    bindTyped();

    unbindTyped();

    setTexture(tex : Texture);

    supportsTexturing() : boolean;

    supportLighting() : boolean;

    accessTexCoords() : boolean;

    accessNormals() : boolean;

    accessLightAttribs() : boolean;

    setVertexAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setColorAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setNormalAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setTexcoordAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setAmbientAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setSpecularAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setEmissiveAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setShininessAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setLineAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setPointAttribute(vboId : number, size : number, type : number, stride : number, offset : number);
}

declare namespace PShader {

    export class UniformValue {
        static INT1 : number;

        static INT2 : number;

        static INT3 : number;

        static INT4 : number;

        static FLOAT1 : number;

        static FLOAT2 : number;

        static FLOAT3 : number;

        static FLOAT4 : number;

        static INT1VEC : number;

        static INT2VEC : number;

        static INT3VEC : number;

        static INT4VEC : number;

        static FLOAT1VEC : number;

        static FLOAT2VEC : number;

        static FLOAT3VEC : number;

        static FLOAT4VEC : number;

        static MAT2 : number;

        static MAT3 : number;

        static MAT4 : number;

        static SAMPLER2D : number;

        type : number;

        value : any;

        constructor(type : number, value : any);
    }
}


/**
 * Create a shape from the PRIMITIVE family, using this kind and these params
 * @param {PGraphicsOpenGL} pg
 * @param {number} kind
 * @param {Array} p
 * @class
 * @extends PShape
 */
declare class PShapeOpenGL extends PShape {
    public static POSITION : number;

    public static NORMAL : number;

    public static TEXCOORD : number;

    public static DIRECTION : number;

    public static OFFSET : number;

    static TRANSLATE : number;

    static ROTATE : number;

    static SCALE : number;

    static MATRIX : number;

    pg : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    root : PShapeOpenGL;

    inGeo : PGraphicsOpenGL.InGeometry;

    tessGeo : PGraphicsOpenGL.TessGeometry;

    tessellator : PGraphicsOpenGL.Tessellator;

    polyAttribs : PGraphicsOpenGL.AttributeMap;

    textures : Array<PImage>;

    strokedTexture : any;

    untexChild : any;

    bufPolyVertex : VertexBuffer;

    bufPolyColor : VertexBuffer;

    bufPolyNormal : VertexBuffer;

    bufPolyTexcoord : VertexBuffer;

    bufPolyAmbient : VertexBuffer;

    bufPolySpecular : VertexBuffer;

    bufPolyEmissive : VertexBuffer;

    bufPolyShininess : VertexBuffer;

    bufPolyIndex : VertexBuffer;

    bufLineVertex : VertexBuffer;

    bufLineColor : VertexBuffer;

    bufLineAttrib : VertexBuffer;

    bufLineIndex : VertexBuffer;

    bufPointVertex : VertexBuffer;

    bufPointColor : VertexBuffer;

    bufPointAttrib : VertexBuffer;

    bufPointIndex : VertexBuffer;

    public glUsage : number;

    polyVertCopyOffset : number;

    polyIndCopyOffset : number;

    lineVertCopyOffset : number;

    lineIndCopyOffset : number;

    pointVertCopyOffset : number;

    pointIndCopyOffset : number;

    polyIndexOffset : number;

    polyVertexOffset : number;

    polyVertexAbs : number;

    polyVertexRel : number;

    lineIndexOffset : number;

    lineVertexOffset : number;

    lineVertexAbs : number;

    lineVertexRel : number;

    pointIndexOffset : number;

    pointVertexOffset : number;

    pointVertexAbs : number;

    pointVertexRel : number;

    firstPolyIndexCache : number;

    lastPolyIndexCache : number;

    firstLineIndexCache : number;

    lastLineIndexCache : number;

    firstPointIndexCache : number;

    lastPointIndexCache : number;

    firstPolyVertex : number;

    lastPolyVertex : number;

    firstLineVertex : number;

    lastLineVertex : number;

    firstPointVertex : number;

    lastPointVertex : number;

    transform : any;

    transformStack : Array<PMatrix>;

    tessellated : boolean;

    needBufferInit : boolean;

    ___solid : boolean;

    breakShape : boolean;

    shapeCreated : boolean;

    hasPolys : boolean;

    hasLines : boolean;

    hasPoints : boolean;

    __bezierDetail : number;

    __curveDetail : number;

    __curveTightness : number;

    savedBezierDetail : number;

    savedCurveDetail : number;

    savedCurveTightness : number;

    normalX : number;

    normalY : number;

    normalZ : number;

    static NORMAL_MODE_AUTO : number;

    static NORMAL_MODE_SHAPE : number;

    static NORMAL_MODE_VERTEX : number;

    normalMode : number;

    modified : boolean;

    modifiedPolyVertices : boolean;

    modifiedPolyColors : boolean;

    modifiedPolyNormals : boolean;

    modifiedPolyTexCoords : boolean;

    modifiedPolyAmbient : boolean;

    modifiedPolySpecular : boolean;

    modifiedPolyEmissive : boolean;

    modifiedPolyShininess : boolean;

    modifiedLineVertices : boolean;

    modifiedLineColors : boolean;

    modifiedLineAttributes : boolean;

    modifiedPointVertices : boolean;

    modifiedPointColors : boolean;

    modifiedPointAttributes : boolean;

    firstModifiedPolyVertex : number;

    lastModifiedPolyVertex : number;

    firstModifiedPolyColor : number;

    lastModifiedPolyColor : number;

    firstModifiedPolyNormal : number;

    lastModifiedPolyNormal : number;

    firstModifiedPolyTexcoord : number;

    lastModifiedPolyTexcoord : number;

    firstModifiedPolyAmbient : number;

    lastModifiedPolyAmbient : number;

    firstModifiedPolySpecular : number;

    lastModifiedPolySpecular : number;

    firstModifiedPolyEmissive : number;

    lastModifiedPolyEmissive : number;

    firstModifiedPolyShininess : number;

    lastModifiedPolyShininess : number;

    firstModifiedLineVertex : number;

    lastModifiedLineVertex : number;

    firstModifiedLineColor : number;

    lastModifiedLineColor : number;

    firstModifiedLineAttribute : number;

    lastModifiedLineAttribute : number;

    firstModifiedPointVertex : number;

    lastModifiedPointVertex : number;

    firstModifiedPointColor : number;

    lastModifiedPointColor : number;

    firstModifiedPointAttribute : number;

    lastModifiedPointAttribute : number;

    savedStroke : boolean;

    savedStrokeColor : number;

    savedStrokeWeight : number;

    savedStrokeCap : number;

    savedStrokeJoin : number;

    savedFill : boolean;

    savedFillColor : number;

    savedTint : boolean;

    savedTintColor : number;

    savedAmbientColor : number;

    savedSpecularColor : number;

    savedEmissiveColor : number;

    savedShininess : number;

    savedTextureMode : number;

    updateRoot(root : PShape);

    public static createShape(pg : PGraphicsOpenGL, src : PShape) : PShapeOpenGL;

    public static copyGroup(pg : PGraphicsOpenGL, src : PShape, dest : PShape);

    getVertexMin(min : PVector);

    getVertexMax(max : PVector);

    getVertexSum(sum : PVector, count : number) : number;

    setTextureModeImpl(mode : number);

    setTextureImpl(tex : PImage);

    scaleTextureUV(uFactor : number, vFactor : number);

    addTexture(tex : PImage);

    removeTexture(tex : PImage, caller : PShapeOpenGL);

    hasTexture() : boolean;

    hasTexture(tex : PImage) : boolean;

    hasStrokedTexture() : boolean;

    vertexImpl(x : number, y : number, z : number, u : number, v : number);

    vertexBreak() : boolean;

    attribImpl(name : string, kind : number, type : number, size : number) : PGraphicsOpenGL.VertexAttribute;

    pushTransform();

    popTransform() : PMatrix;

    applyMatrixImpl(matrix : PMatrix);

    bezierVertexImpl(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    quadraticVertexImpl(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    curveVertexImpl(x : number, y : number, z : number);

    setFillImpl(fill : number);

    setTintImpl(tint : number);

    setStrokeImpl(stroke : boolean);

    setStrokeImpl(stroke : number);

    setStrokeWeightImpl(weight : number);

    setAmbientImpl(ambient : number);

    setSpecularImpl(specular : number);

    setEmissiveImpl(emissive : number);

    setShininessImpl(shininess : number);

    updateTessellation();

    markForTessellation();

    initModified();

    tessellate();

    collectPolyAttribs();

    tessellateImpl();

    tessellatePoint();

    tessellateLine();

    tessellateTriangle();

    tessellateQuad();

    tessellateRect();

    tessellateEllipse();

    tessellateArc();

    tessellateBox();

    tessellateSphere();

    tessellatePath();

    saveBezierVertexSettings();

    restoreBezierVertexSettings();

    saveCurveVertexSettings();

    restoreCurveVertexSettings();

    aggregate();

    aggregateImpl();

    updatePolyIndexCache();

    startStrokedTex(n : number) : boolean;

    setFirstStrokeVertex(n : number, vert : number);

    setLastStrokeVertex(vert : number);

    updateLineIndexCache();

    updatePointIndexCache();

    initBuffers();

    initPolyBuffers();

    initLineBuffers();

    initPointBuffers();

    contextIsOutdated() : boolean;

    updateGeometry();

    updateGeometryImpl();

    copyPolyVertices(offset : number, size : number);

    copyPolyColors(offset : number, size : number);

    copyPolyNormals(offset : number, size : number);

    copyPolyTexCoords(offset : number, size : number);

    copyPolyAmbient(offset : number, size : number);

    copyPolySpecular(offset : number, size : number);

    copyPolyEmissive(offset : number, size : number);

    copyPolyShininess(offset : number, size : number);

    copyPolyAttrib(attrib : PGraphicsOpenGL.VertexAttribute, offset : number, size : number);

    copyLineVertices(offset : number, size : number);

    copyLineColors(offset : number, size : number);

    copyLineAttributes(offset : number, size : number);

    copyPointVertices(offset : number, size : number);

    copyPointColors(offset : number, size : number);

    copyPointAttributes(offset : number, size : number);

    setModifiedPolyVertices(first : number, last : number);

    setModifiedPolyColors(first : number, last : number);

    setModifiedPolyNormals(first : number, last : number);

    setModifiedPolyTexCoords(first : number, last : number);

    setModifiedPolyAmbient(first : number, last : number);

    setModifiedPolySpecular(first : number, last : number);

    setModifiedPolyEmissive(first : number, last : number);

    setModifiedPolyShininess(first : number, last : number);

    setModifiedPolyAttrib(attrib : PGraphicsOpenGL.VertexAttribute, first : number, last : number);

    setModifiedLineVertices(first : number, last : number);

    setModifiedLineColors(first : number, last : number);

    setModifiedLineAttributes(first : number, last : number);

    setModifiedPointVertices(first : number, last : number);

    setModifiedPointColors(first : number, last : number);

    setModifiedPointAttributes(first : number, last : number);

    /*private*/ inGeoToVertices();

    fragmentedGroup(g : PGraphicsOpenGL) : boolean;
}

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

    pixelBuffer : any;

    edgePixels : number[];

    edgeBuffer : any;

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

    public setNative(pixBuf : any, x : number, y : number, w : number, h : number);

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

    public copyBufferFromSource(natRef : any, byteBuf : any, w : number, h : number);

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

        rgbBuf : any;

        constructor(__parent: any, nat : any, rgb : any, w : number, h : number);

        dispose();
    }
}


declare class VertexBuffer {
    static INIT_VERTEX_BUFFER_SIZE : number;

    static INIT_INDEX_BUFFER_SIZE : number;

    public glId : number;

    target : number;

    elementSize : number;

    ncoords : number;

    index : boolean;

    pgl : PGL;

    context : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceVertexBuffer;

    constructor(pg : PGraphicsOpenGL, target : number, ncoords : number, esize : number);

    constructor(pg : PGraphicsOpenGL, target : number, ncoords : number, esize : number, index : boolean);

    create();

    init();

    dispose();

    contextIsOutdated() : boolean;
}


