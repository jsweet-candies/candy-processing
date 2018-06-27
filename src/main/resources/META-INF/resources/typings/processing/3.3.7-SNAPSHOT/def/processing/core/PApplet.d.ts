/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Base class for all sketches that use def.processing.core.
 * <p/>
 * The <A HREF="https://github.com/processing/processing/wiki/Window-Size-and-Full-Screen">
 * Window Size and Full Screen</A> page on the Wiki has useful information
 * about sizing, multiple displays, full screen, etc.
 * <p/>
 * Processing uses active mode rendering. All animation tasks happen on the
 * "Processing Animation Thread". The setup() and draw() methods are handled
 * by that thread, and events (like mouse movement and key presses, which are
 * fired by the event dispatch thread or EDT) are queued to be safely handled
 * at the end of draw().
 * <p/>
 * Starting with 3.0a6, blit operations are on the EDT, so as not to cause
 * GUI problems with Swing and AWT. In the case of the default renderer, the
 * sketch renders to an offscreen image, then the EDT is asked to bring that
 * image to the screen.
 * <p/>
 * For code that needs to run on the EDT, use EventQueue.invokeLater(). When
 * doing so, be careful to synchronize between that code and the Processing
 * animation thread. That is, you can't call Processing methods from the EDT
 * or at any random time from another thread. Use of a callback function or
 * the registerXxx() methods in PApplet can help ensure that your code doesn't
 * do something naughty.
 * <p/>
 * As of Processing 3.0, we have removed Applet as the base class for PApplet.
 * This means that we can remove lots of legacy code, however one downside is
 * that it's no longer possible (without extra code) to embed a PApplet into
 * another Java application.
 * <p/>
 * As of Processing 3.0, we have discontinued support for versions of Java
 * prior to 1.8. We don't have enough people to support it, and for a
 * project of our (tiny) size, we should be focusing on the future, rather
 * than working around legacy Java code.
 * @class
 */
declare class PApplet implements PConstants {
    /**
     * Full name of the Java version (i.e. 1.5.0_11).
     */
    public static javaVersionName : string;

    public static javaPlatform : number;

    static __static_initializer_0() {
        var version : string;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(PApplet.javaVersionName, "1.")) {
            version = version.substring(2);
        }
        PApplet.javaPlatform = PApplet.parseInt(version.substring(0, version.indexOf('.')));
    }

    /**
     * Do not use; javaPlatform or javaVersionName are better options.
     * For instance, javaPlatform is useful when you need a number for
     * comparison, i.e. "if (javaPlatform >= 9)".
     * @deprecated
     */
    public static javaVersion : number;

    /**
     * Current platform in use, one of the
     * PConstants WINDOWS, MACOSX, MACOS9, LINUX or OTHER.
     */
    public static platform : number;

    static __static_initializer_1() {
        var osname : string;
        if(osname.indexOf("Mac") !== -1) {
            PApplet.platform = PConstants.MACOSX;
        } else if(osname.indexOf("Windows") !== -1) {
            PApplet.platform = PConstants.WINDOWS;
        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(osname,"Linux"))) {
            PApplet.platform = PConstants.LINUX;
        } else {
            PApplet.platform = PConstants.OTHER;
        }
    }

    /**
     * Whether to use native (AWT) dialogs for selectInput and selectOutput.
     * The native dialogs on some platforms can be ugly, buggy, or missing
     * features. For 3.3.5, this defaults to true on all platforms.
     */
    public static useNativeSelect : boolean;

    /**
     * The PGraphics renderer associated with this PApplet
     */
    public g : PGraphics;

    /**
     * ( begin auto-generated from displayWidth.xml )
     * 
     * System variable which stores the width of the computer screen. For
     * example, if the current screen resolution is 1024x768,
     * <b>displayWidth</b> is 1024 and <b>displayHeight</b> is 768. These
     * dimensions are useful when exporting full-screen applications.
     * <br /><br />
     * To ensure that the sketch takes over the entire screen, use "Present"
     * instead of "Run". Otherwise the window will still have a frame border
     * around it and not be placed in the upper corner of the screen. On Mac OS
     * X, the menu bar will remain present unless "Present" mode is used.
     * 
     * ( end auto-generated )
     */
    public displayWidth : number;

    /**
     * ( begin auto-generated from displayHeight.xml )
     * 
     * System variable that stores the height of the computer screen. For
     * example, if the current screen resolution is 1024x768,
     * <b>displayWidth</b> is 1024 and <b>displayHeight</b> is 768. These
     * dimensions are useful when exporting full-screen applications.
     * <br /><br />
     * To ensure that the sketch takes over the entire screen, use "Present"
     * instead of "Run". Otherwise the window will still have a frame border
     * around it and not be placed in the upper corner of the screen. On Mac OS
     * X, the menu bar will remain present unless "Present" mode is used.
     * 
     * ( end auto-generated )
     */
    public displayHeight : number;

    /**
     * A leech graphics object that is echoing all events.
     */
    public recorder : PGraphics;

    /**
     * Command line options passed in from main().
     * This does not include the arguments passed in to PApplet itself.
     * @see PApplet#main
     */
    public args : string[];

    /**
     * Path to sketch folder. Previously undocumented, made private in 3.0a5
     * so that people use the sketchPath() method and it's inited properly.
     * Call sketchPath() once to set the default.
     */
    /*private*/ sketchPath : any;

    static DEBUG : boolean;

    /**
     * Default width and height for sketch when not specified
     */
    public static DEFAULT_WIDTH : number;

    public static DEFAULT_HEIGHT : number;

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
     * @see PApplet#loadPixels()
     * @see PApplet#updatePixels()
     * @see PApplet#get(int, int, int, int)
     * @see PApplet#set(int, int, int)
     * @see PImage
     */
    public pixels : number[];

    /**
     * ( begin auto-generated from width.xml )
     * 
     * System variable which stores the width of the display window. This value
     * is set by the first parameter of the <b>size()</b> function. For
     * example, the function call <b>size(320, 240)</b> sets the <b>width</b>
     * variable to the value 320. The value of <b>width</b> is zero until
     * <b>size()</b> is called.
     * 
     * ( end auto-generated )
     * @webref environment
     * @see PApplet#height
     * @see PApplet#size(int, int)
     */
    public width : number;

    /**
     * ( begin auto-generated from height.xml )
     * 
     * System variable which stores the height of the display window. This
     * value is set by the second parameter of the <b>size()</b> function. For
     * example, the function call <b>size(320, 240)</b> sets the <b>height</b>
     * variable to the value 240. The value of <b>height</b> is zero until
     * <b>size()</b> is called.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#width
     * @see PApplet#size(int, int)
     */
    public height : number;

    /**
     * ( begin auto-generated from pixelWidth.xml )
     * 
     * When <b>pixelDensity(2)</d> is used to make use of a high resolution
     * display (called a Retina display on OS X or high-dpi on Windows and
     * Linux), the width and height of the sketch do not change, but the
     * number of pixels is doubled. As a result, all operations that use pixels
     * (like <b>loadPixels()</b>, <b>get()</b>, <b>set()</b>, etc.) happen
     * in this doubled space. As a convenience, the variables <b>pixelWidth</b>
     * and <b>pixelHeight<b> hold the actual width and height of the sketch
     * in pixels. This is useful for any sketch that uses the <b>pixels[]</b>
     * array, for instance, because the number of elements in the array will
     * be <b>pixelWidth*pixelHeight</b>, not <b>width*height</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelHeight
     * @see #pixelDensity(int)
     * @see #displayDensity()
     */
    public pixelWidth : number;

    /**
     * ( begin auto-generated from pixelHeight.xml )
     * 
     * When <b>pixelDensity(2)</d> is used to make use of a high resolution
     * display (called a Retina display on OS X or high-dpi on Windows and
     * Linux), the width and height of the sketch do not change, but the
     * number of pixels is doubled. As a result, all operations that use pixels
     * (like <b>loadPixels()</b>, <b>get()</b>, <b>set()</b>, etc.) happen
     * in this doubled space. As a convenience, the variables <b>pixelWidth</b>
     * and <b>pixelHeight<b> hold the actual width and height of the sketch
     * in pixels. This is useful for any sketch that uses the <b>pixels[]</b>
     * array, for instance, because the number of elements in the array will
     * be <b>pixelWidth*pixelHeight</b>, not <b>width*height</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelWidth
     * @see #pixelDensity(int)
     * @see #displayDensity()
     */
    public pixelHeight : number;

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
    public mouseX : number;

    /**
     * ( begin auto-generated from mouseY.xml )
     * 
     * The system variable <b>mouseY</b> always contains the current vertical
     * coordinate of the mouse.
     * 
     * ( end auto-generated )
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
    public mouseY : number;

    /**
     * ( begin auto-generated from pmouseX.xml )
     * 
     * The system variable <b>pmouseX</b> always contains the horizontal
     * position of the mouse in the frame previous to the current frame.<br />
     * <br />
     * You may find that <b>pmouseX</b> and <b>pmouseY</b> have different
     * values inside <b>draw()</b> and inside events like <b>mousePressed()</b>
     * and <b>mouseMoved()</b>. This is because they're used for different
     * roles, so don't mix them. Inside <b>draw()</b>, <b>pmouseX</b> and
     * <b>pmouseY</b> update only once per frame (once per trip through your
     * <b>draw()</b>). But, inside mouse events, they update each time the
     * event is called. If they weren't separated, then the mouse would be read
     * only once per frame, making response choppy. If the mouse variables were
     * always updated multiple times per frame, using <NOBR><b>line(pmouseX,
     * pmouseY, mouseX, mouseY)</b></NOBR> inside <b>draw()</b> would have lots
     * of gaps, because <b>pmouseX</b> may have changed several times in
     * between the calls to <b>line()</b>. Use <b>pmouseX</b> and
     * <b>pmouseY</b> inside <b>draw()</b> if you want values relative to the
     * previous frame. Use <b>pmouseX</b> and <b>pmouseY</b> inside the mouse
     * functions if you want continuous response.
     * 
     * ( end auto-generated )
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
    public pmouseX : number;

    /**
     * ( begin auto-generated from pmouseY.xml )
     * 
     * The system variable <b>pmouseY</b> always contains the vertical position
     * of the mouse in the frame previous to the current frame. More detailed
     * information about how <b>pmouseY</b> is updated inside of <b>draw()</b>
     * and mouse events is explained in the reference for <b>pmouseX</b>.
     * 
     * ( end auto-generated )
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
    public pmouseY : number;

    /**
     * Previous mouseX/Y for the draw loop, separated out because this is
     * separate from the pmouseX/Y when inside the mouse event handlers.
     * See emouseX/Y for an explanation.
     */
    dmouseX : number;

    /**
     * Previous mouseX/Y for the draw loop, separated out because this is
     * separate from the pmouseX/Y when inside the mouse event handlers.
     * See emouseX/Y for an explanation.
     */
    dmouseY : number;

    /**
     * The pmouseX/Y for the event handlers (mousePressed(), mouseDragged() etc)
     * these are different because mouse events are queued to the end of
     * draw, so the previous position has to be updated on each event,
     * as opposed to the pmouseX/Y that's used inside draw, which is expected
     * to be updated once per trip through draw().
     */
    emouseX : number;

    /**
     * The pmouseX/Y for the event handlers (mousePressed(), mouseDragged() etc)
     * these are different because mouse events are queued to the end of
     * draw, so the previous position has to be updated on each event,
     * as opposed to the pmouseX/Y that's used inside draw, which is expected
     * to be updated once per trip through draw().
     */
    emouseY : number;

    /**
     * Used to set pmouseX/Y to mouseX/Y the first time mouseX/Y are used,
     * otherwise pmouseX/Y are always zero, causing a nasty jump.
     * <p>
     * Just using (frameCount == 0) won't work since mouseXxxxx()
     * may not be called until a couple frames into things.
     * <p>
     * @deprecated Please refrain from using this variable, it will be removed
     * from future releases of Processing because it cannot be used consistently
     * across platforms and input methods.
     */
    public firstMouse : boolean;

    /**
     * ( begin auto-generated from mouseButton.xml )
     * 
     * Processing automatically tracks if the mouse button is pressed and which
     * button is pressed. The value of the system variable <b>mouseButton</b>
     * is either <b>LEFT</b>, <b>RIGHT</b>, or <b>CENTER</b> depending on which
     * button is pressed.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced:</h3>
     * 
     * If running on Mac OS, a ctrl-click will be interpreted as the right-hand
     * mouse button (unlike Java, which reports it as the left mouse).
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
    public mouseButton : number;

    /**
     * ( begin auto-generated from mousePressed_var.xml )
     * 
     * Variable storing if a mouse button is pressed. The value of the system
     * variable <b>mousePressed</b> is true if a mouse button is pressed and
     * false if a button is not pressed.
     * 
     * ( end auto-generated )
     * @webref input:mouse
     * @see PApplet#mouseX
     * @see PApplet#mouseY
     * @see PApplet#pmouseX
     * @see PApplet#pmouseY
     * @see PApplet#mousePressed()
     * @see PApplet#mouseReleased()
     * @see PApplet#mouseClicked()
     * @see PApplet#mouseMoved()
     * @see PApplet#mouseDragged()
     * @see PApplet#mouseButton
     * @see PApplet#mouseWheel(MouseEvent)
     */
    public mousePressed : any;

    /**
     * @deprecated Use a mouse event handler that passes an event instead.
     */
    public mouseEvent : MouseEvent;

    /**
     * ( begin auto-generated from key.xml )
     * 
     * The system variable <b>key</b> always contains the value of the most
     * recent key on the keyboard that was used (either pressed or released).
     * <br/> <br/>
     * For non-ASCII keys, use the <b>keyCode</b> variable. The keys included
     * in the ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and
     * DELETE) do not require checking to see if they key is coded, and you
     * should simply use the <b>key</b> variable instead of <b>keyCode</b> If
     * you're making cross-platform projects, note that the ENTER key is
     * commonly used on PCs and Unix and the RETURN key is used instead on
     * Macintosh. Check for both ENTER and RETURN to make sure your program
     * will work for all platforms.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * 
     * Last key pressed.
     * <p>
     * If it's a coded key, i.e. UP/DOWN/CTRL/SHIFT/ALT,
     * this will be set to CODED (0xffff or 65535).
     * 
     * @webref input:keyboard
     * @see PApplet#keyCode
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     * @see PApplet#keyReleased()
     */
    public key : string;

    /**
     * ( begin auto-generated from keyCode.xml )
     * 
     * The variable <b>keyCode</b> is used to detect special keys such as the
     * UP, DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT. When checking
     * for these keys, it's first necessary to check and see if the key is
     * coded. This is done with the conditional "if (key == CODED)" as shown in
     * the example.
     * <br/> <br/>
     * The keys included in the ASCII specification (BACKSPACE, TAB, ENTER,
     * RETURN, ESC, and DELETE) do not require checking to see if they key is
     * coded, and you should simply use the <b>key</b> variable instead of
     * <b>keyCode</b> If you're making cross-platform projects, note that the
     * ENTER key is commonly used on PCs and Unix and the RETURN key is used
     * instead on Macintosh. Check for both ENTER and RETURN to make sure your
     * program will work for all platforms.
     * <br/> <br/>
     * For users familiar with Java, the values for UP and DOWN are simply
     * shorter versions of Java's KeyEvent.VK_UP and KeyEvent.VK_DOWN. Other
     * keyCode values can be found in the Java <a
     * href="http://download.oracle.com/javase/6/docs/api/java/awt/event/KeyEvent.html">KeyEvent</a> reference.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * When "key" is set to CODED, this will contain a Java key code.
     * <p>
     * For the arrow keys, keyCode will be one of UP, DOWN, LEFT and RIGHT.
     * Also available are ALT, CONTROL and SHIFT. A full set of constants
     * can be obtained from java.awt.event.KeyEvent, from the VK_XXXX variables.
     * 
     * @webref input:keyboard
     * @see PApplet#key
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     * @see PApplet#keyReleased()
     */
    public keyCode : number;

    /**
     * ( begin auto-generated from keyPressed_var.xml )
     * 
     * The boolean system variable <b>keyPressed</b> is <b>true</b> if any key
     * is pressed and <b>false</b> if no keys are pressed.
     * 
     * ( end auto-generated )
     * @webref input:keyboard
     * @see PApplet#key
     * @see PApplet#keyCode
     * @see PApplet#keyPressed()
     * @see PApplet#keyReleased()
     */
    public keyPressed : any;

    pressedKeys : Array<number>;

    /**
     * The last KeyEvent object passed into a mouse function.
     * @deprecated Use a key event handler that passes an event instead.
     */
    public keyEvent : KeyEvent;

    /**
     * ( begin auto-generated from focused.xml )
     * 
     * Confirms if a Processing program is "focused", meaning that it is active
     * and will accept input from mouse or keyboard. This variable is "true" if
     * it is focused and "false" if not. This variable is often used when you
     * want to warn people they need to click on or roll over an applet before
     * it will work.
     * 
     * ( end auto-generated )
     * @webref environment
     */
    public focused : boolean;

    /**
     * Time in milliseconds when the applet was started.
     * <p>
     * Used by the millis() function.
     */
    millisOffset : number;

    /**
     * ( begin auto-generated from frameRate_var.xml )
     * 
     * The system variable <b>frameRate</b> contains the approximate frame rate
     * of the software as it executes. The initial value is 10 fps and is
     * updated with each frame. The value is averaged (integrated) over several
     * frames. As such, this value won't be valid until after 5-10 frames.
     * 
     * ( end auto-generated )
     * @webref environment
     * @see PApplet#frameRate(float)
     * @see PApplet#frameCount
     */
    public frameRate : any;

    looping : boolean;

    /**
     * flag set to true when a redraw is asked for by the user
     */
    redraw : any;

    /**
     * ( begin auto-generated from frameCount.xml )
     * 
     * The system variable <b>frameCount</b> contains the number of frames
     * displayed since the program started. Inside <b>setup()</b> the value is
     * 0 and and after the first iteration of draw it is 1, etc.
     * 
     * ( end auto-generated )
     * @webref environment
     * @see PApplet#frameRate(float)
     * @see PApplet#frameRate
     */
    public frameCount : number;

    /**
     * true if the sketch has stopped permanently.
     */
    public finished : boolean;

    /**
     * used by the UncaughtExceptionHandler, so has to be static
     */
    static uncaughtThrowable : Error;

    /**
     * true if exit() has been called so that things shut down
     * once the main thread kicks off.
     */
    exitCalled : any;

    /**
     * Position of the upper-lefthand corner of the editor window
     * that launched this applet.
     */
    public static ARGS_EDITOR_LOCATION : string;

    public static ARGS_EXTERNAL : string;

    /**
     * Location for where to position the applet window on screen.
     * <p>
     * This is used by the editor to when saving the previous applet
     * location, or could be used by other classes to launch at a
     * specific position on-screen.
     */
    public static ARGS_LOCATION : string;

    /**
     * Used by the PDE to suggest a display (set in prefs, passed on Run)
     */
    public static ARGS_DISPLAY : string;

    public static ARGS_WINDOW_COLOR : string;

    public static ARGS_PRESENT : string;

    public static ARGS_STOP_COLOR : string;

    public static ARGS_HIDE_STOP : string;

    /**
     * Allows the user or PdeEditor to set a specific sketch folder path.
     * <p>
     * Used by PdeEditor to pass in the location where saveFrame()
     * and all that stuff should write things.
     */
    public static ARGS_SKETCH_FOLDER : string;

    public static ARGS_DENSITY : string;

    /**
     * When run externally to a PdeEditor,
     * this is sent by the sketch when it quits.
     */
    public static EXTERNAL_STOP : string;

    /**
     * When run externally to a PDE Editor, this is sent by the applet
     * whenever the window is moved.
     * <p>
     * This is used so that the editor can re-open the sketch window
     * in the same position as the user last left it.
     */
    public static EXTERNAL_MOVE : string;

    /**
     * true if this sketch is being run by the PDE
     */
    external : boolean;

    static ERROR_MIN_MAX : string;

    surface : PSurface;

    public getSurface() : PSurface;

    /**
     * A dummy frame to keep compatibility with 2.x code
     * and encourage users to update.
     */
    public frame : java.awt.Frame;

    insideSettings : any;

    renderer : string;

    smooth : any;

    fullScreen : any;

    display : number;

    displayDevices : java.awt.GraphicsDevice[];

    public pixelDensity : any;

    suggestedDensity : number;

    present : boolean;

    outputPath : string;

    outputStream : java.io.OutputStream;

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
    public settings();

    public sketchWidth() : number;

    public sketchHeight() : number;

    public sketchRenderer() : string;

    public sketchSmooth() : number;

    public sketchFullScreen() : boolean;

    public sketchDisplay() : number;

    public sketchOutputPath() : string;

    public sketchOutputStream() : java.io.OutputStream;

    public sketchWindowColor() : number;

    public sketchPixelDensity() : number;

    /**
     * ( begin auto-generated from displayDensity.xml )
     * 
     * This function returns the number "2" if the screen is a high-density
     * screen (called a Retina display on OS X or high-dpi on Windows and Linux)
     * and a "1" if not. This information is useful for a program to adapt to
     * run at double the pixel density on a screen that supports it.
     * 
     * ( end auto-generated )
     * 
     * @webref environment
     * @see PApplet#pixelDensity(int)
     * @see PApplet#size(int,int)
     * @return {number}
     */
    public displayDensity() : number;

    /**
     * @param {number} display the display number to check
     * @return {number}
     */
    public displayDensity(display : number) : number;

    /**
     * Called by PSurface objects to set the width and height variables,
     * and update the pixelWidth and pixelHeight variables.
     * @param {number} width
     * @param {number} height
     */
    public setSize(width : number, height : number);

    /**
     * @webref environment
     */
    public noSmooth();

    smoothWarning(method : string);

    public getGraphics() : PGraphics;

    public orientation(which : number);

    /**
     * Called by the browser or applet viewer to inform this applet that it
     * should start its execution. It is called after the init method and
     * each time the applet is revisited in a Web page.
     * <p/>
     * Called explicitly via the first call to PApplet.paint(), because
     * PAppletGL needs to have a usable screen before getting things rolling.
     */
    public start();

    /**
     * Called by the browser or applet viewer to inform
     * this applet that it should stop its execution.
     * <p/>
     * Unfortunately, there are no guarantees from the Java spec
     * when or if stop() will be called (i.e. on browser quit,
     * or when moving between web pages), and it's not always called.
     */
    public stop();

    /**
     * Sketch has been paused. Called when switching tabs in a browser or
     * swapping to a different application on Android. Also called just before
     * quitting. Use to safely disable things like serial, sound, or sensors.
     */
    public pause();

    /**
     * Sketch has resumed. Called when switching tabs in a browser or
     * swapping to this application on Android. Also called on startup.
     * Use this to safely disable things like serial, sound, or sensors.
     */
    public resume();

    /**
     * Map of registered methods, stored by name.
     */
    registerMap : any;

    /**
     * Lock when un/registering from multiple threads
     */
    /*private*/ registerLock : any;

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
     * In addition, the new (for 2.0) processing.event classes are passed to
     * the following event types:
     * <ul>
     * <li>mouseEvent
     * <li>keyEvent
     * <li>touchEvent
     * </ul>
     * The older java.awt events are no longer supported.
     * See the Library Wiki page for more details.
     * @param {string} methodName name of the method to be called
     * @param {*} target the target object that should receive the event
     */
    public registerMethod(methodName : string, target : any);

    registerNoArgs(name : string, o : any);

    registerWithArgs(name : string, o : any, cargs : any[]);

    public unregisterMethod(name : string, target : any);

    handleMethods(methodName : string);

    handleMethods(methodName : string, args : any[]);

    /**
     * ( begin auto-generated from setup.xml )
     * 
     * The <b>setup()</b> function is called once when the program starts. It's
     * used to define initial
     * enviroment properties such as screen size and background color and to
     * load media such as images
     * and fonts as the program starts. There can only be one <b>setup()</b>
     * function for each program and
     * it shouldn't be called again after its initial execution. Note:
     * Variables declared within
     * <b>setup()</b> are not accessible within other functions, including
     * <b>draw()</b>.
     * 
     * ( end auto-generated )
     * @webref structure
     * @usage web_application
     * @see PApplet#size(int, int)
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     * @see PApplet#draw()
     */
    public setup();

    /**
     * ( begin auto-generated from draw.xml )
     * 
     * Called directly after <b>setup()</b> and continuously executes the lines
     * of code contained inside its block until the program is stopped or
     * <b>noLoop()</b> is called. The <b>draw()</b> function is called
     * automatically and should never be called explicitly. It should always be
     * controlled with <b>noLoop()</b>, <b>redraw()</b> and <b>loop()</b>.
     * After <b>noLoop()</b> stops the code in <b>draw()</b> from executing,
     * <b>redraw()</b> causes the code inside <b>draw()</b> to execute once and
     * <b>loop()</b> will causes the code inside <b>draw()</b> to execute
     * continuously again. The number of times <b>draw()</b> executes in each
     * second may be controlled with <b>frameRate()</b> function.
     * There can only be one <b>draw()</b> function for each sketch
     * and <b>draw()</b> must exist if you want the code to run continuously or
     * to process events such as <b>mousePressed()</b>. Sometimes, you might
     * have an empty call to <b>draw()</b> in your program as shown in the
     * above example.
     * 
     * ( end auto-generated )
     * @webref structure
     * @usage web_application
     * @see PApplet#setup()
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     * @see PApplet#redraw()
     * @see PApplet#frameRate(float)
     * @see PGraphics#background(float, float, float, float)
     */
    public draw();

    /**
     * ( begin auto-generated from size.xml )
     * 
     * Defines the dimension of the display window in units of pixels. The
     * <b>size()</b> function must be the first line in <b>setup()</b>. If
     * <b>size()</b> is not used, the default size of the window is 100x100
     * pixels. The system variables <b>width</b> and <b>height</b> are set by
     * the parameters passed to this function.<br />
     * <br />
     * Do not use variables as the parameters to <b>size()</b> function,
     * because it will cause problems when exporting your sketch. When
     * variables are used, the dimensions of your sketch cannot be determined
     * during export. Instead, employ numeric values in the <b>size()</b>
     * statement, and then use the built-in <b>width</b> and <b>height</b>
     * variables inside your program when the dimensions of the display window
     * are needed.<br />
     * <br />
     * The <b>size()</b> function can only be used once inside a sketch, and
     * cannot be used for resizing.<br/>
     * <br/> <b>renderer</b> parameter selects which rendering engine to use.
     * For example, if you will be drawing 3D shapes, use <b>P3D</b>, if you
     * want to export images from a program as a PDF file use <b>PDF</b>. A
     * brief description of the three primary renderers follows:<br />
     * <br />
     * <b>P2D</b> (Processing 2D) - The default renderer that supports two
     * dimensional drawing.<br />
     * <br />
     * <b>P3D</b> (Processing 3D) - 3D graphics renderer that makes use of
     * OpenGL-compatible graphics hardware.<br />
     * <br />
     * <b>PDF</b> - The PDF renderer draws 2D graphics directly to an Acrobat
     * PDF file. This produces excellent results when you need vector shapes
     * for high resolution output or printing. You must first use Import
     * Library &rarr; PDF to make use of the library. More information can be
     * found in the PDF library reference.<br />
     * <br />
     * The P3D renderer doesn't support <b>strokeCap()</b> or
     * <b>strokeJoin()</b>, which can lead to ugly results when using
     * <b>strokeWeight()</b>. (<a
     * href="http://code.google.com/p/processing/issues/detail?id=123">Issue
     * 123</a>) <br />
     * <br />
     * The maximum width and height is limited by your operating system, and is
     * usually the width and height of your actual screen. On some machines it
     * may simply be the number of pixels on your current screen, meaning that
     * a screen of 800x600 could support <b>size(1600, 300)</b>, since it's the
     * same number of pixels. This varies widely so you'll have to try
     * different rendering modes and sizes until you get what you're looking
     * for. If you need something larger, use <b>createGraphics</b> to create a
     * non-visible drawing surface.<br />
     * <br />
     * Again, the <b>size()</b> function must be the first line of the code (or
     * first item inside setup). Any code that appears before the <b>size()</b>
     * command may run more than once, which can lead to confusing results.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * If using Java 1.3 or later, this will default to using
     * PGraphics2, the Java2D-based renderer. If using Java 1.1,
     * or if PGraphics2 is not available, then PGraphics will be used.
     * To set your own renderer, use the other version of the size()
     * method that takes a renderer as its last parameter.
     * <p>
     * If called once a renderer has already been set, this will
     * use the previous renderer and simply resize it.
     * 
     * @webref environment
     * @param {number} width width of the display window in units of pixels
     * @param {number} height height of the display window in units of pixels
     * @see PApplet#width
     * @see PApplet#height
     */
    public size(width : number, height : number);

    public size(width : number, height : number, renderer : string);

    /**
     * @nowebref
     * @param {number} width
     * @param {number} height
     * @param {string} renderer
     * @param {string} path
     */
    public size(width : number, height : number, renderer : string, path : string);

    public createGraphics(w : number, h : number) : PGraphics;

    /**
     * ( begin auto-generated from createGraphics.xml )
     * 
     * Creates and returns a new <b>PGraphics</b> object of the types P2D or
     * P3D. Use this class if you need to draw into an off-screen graphics
     * buffer. The PDF renderer requires the filename parameter. The DXF
     * renderer should not be used with <b>createGraphics()</b>, it's only
     * built for use with <b>beginRaw()</b> and <b>endRaw()</b>.<br />
     * <br />
     * It's important to call any drawing functions between <b>beginDraw()</b>
     * and <b>endDraw()</b> statements. This is also true for any functions
     * that affect drawing, such as <b>smooth()</b> or <b>colorMode()</b>.<br/>
     * <br/> the main drawing surface which is completely opaque, surfaces
     * created with <b>createGraphics()</b> can have transparency. This makes
     * it possible to draw into a graphics and maintain the alpha channel. By
     * using <b>save()</b> to write a PNG or TGA file, the transparency of the
     * graphics object will be honored. Note that transparency levels are
     * binary: pixels are either complete opaque or transparent. For the time
     * being, this means that text characters will be opaque blocks. This will
     * be fixed in a future release (<a
     * href="http://code.google.com/p/processing/issues/detail?id=80">Issue 80</a>).
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Create an offscreen PGraphics object for drawing. This can be used
     * for bitmap or vector images drawing or rendering.
     * <UL>
     * <LI>Do not use "new PGraphicsXxxx()", use this method. This method
     * ensures that internal variables are set up properly that tie the
     * new graphics context back to its parent PApplet.
     * <LI>The basic way to create bitmap images is to use the <A
     * HREF="http://processing.org/reference/saveFrame_.html">saveFrame()</A>
     * function.
     * <LI>If you want to create a really large scene and write that,
     * first make sure that you've allocated a lot of memory in the Preferences.
     * <LI>If you want to create images that are larger than the screen,
     * you should create your own PGraphics object, draw to that, and use
     * <A HREF="http://processing.org/reference/save_.html">save()</A>.
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
     * <LI>It's important to always wrap drawing to createGraphics() with
     * beginDraw() and endDraw() (beginFrame() and endFrame() prior to
     * revision 0115). The reason is that the renderer needs to know when
     * drawing has stopped, so that it can update itself internally.
     * This also handles calling the defaults() method, for people familiar
     * with that.
     * <LI>With Processing 0115 and later, it's possible to write images in
     * formats other than the default .tga and .tiff. The exact formats and
     * background information can be found in the developer's reference for
     * <A HREF="http://dev.processing.org/reference/core/javadoc/processing/core/PImage.html#save(java.lang.String)">PImage.save()</A>.
     * </UL>
     * 
     * @webref rendering
     * @param {number} w width in pixels
     * @param {number} h height in pixels
     * @param {string} renderer Either P2D, P3D, or PDF
     * @see PGraphics#PGraphics
     * @return {PGraphics}
     */
    public createGraphics(w : number, h : number, renderer : string) : PGraphics;

    /**
     * Create an offscreen graphics surface for drawing, in this case
     * for a renderer that writes to a file (such as PDF or DXF).
     * @param {string} path the name of the file (can be an absolute or relative path)
     * @param {number} w
     * @param {number} h
     * @param {string} renderer
     * @return {PGraphics}
     */
    public createGraphics(w : number, h : number, renderer : string, path : string) : PGraphics;

    /**
     * Version of createGraphics() used internally.
     * @param {string} path A path (or null if none), can be absolute or relative ({@link PApplet#savePath} will be called)
     * @param {number} w
     * @param {number} h
     * @param {string} renderer
     * @param {boolean} primary
     * @return {PGraphics}
     */
    makeGraphics(w : number, h : number, renderer : string, path : string, primary : boolean) : PGraphics;

    /**
     * Create default renderer, likely to be resized, but needed for surface init.
     * @return {PGraphics}
     */
    createPrimaryGraphics() : PGraphics;

    /**
     * ( begin auto-generated from createImage.xml )
     * 
     * Creates a new PImage (the datatype for storing images). This provides a
     * fresh buffer of pixels to play with. Set the size of the buffer with the
     * <b>width</b> and <b>height</b> parameters. The <b>format</b> parameter
     * defines how the pixels are stored. See the PImage reference for more information.
     * <br/> <br/>
     * Be sure to include all three parameters, specifying only the width and
     * height (but no format) will produce a strange error.
     * <br/> <br/>
     * Advanced users please note that createImage() should be used instead of
     * the syntax <tt>new PImage()</tt>.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Preferred method of creating new PImage objects, ensures that a
     * reference to the parent PApplet is included, which makes save() work
     * without needing an absolute path.
     * 
     * @webref image
     * @param {number} w width in pixels
     * @param {number} h height in pixels
     * @param {number} format Either RGB, ARGB, ALPHA (grayscale alpha channel)
     * @see PImage
     * @see PGraphics
     * @return {PImage}
     */
    public createImage(w : number, h : number, format : number) : PImage;

    insideDraw : boolean;

    /**
     * Last time in nanoseconds that frameRate was checked
     */
    frameRateLastNanos : number;

    public handleDraw();

    /**
     * ( begin auto-generated from loop.xml )
     * 
     * Causes Processing to continuously execute the code within <b>draw()</b>.
     * If <b>noLoop()</b> is called, the code in <b>draw()</b> stops executing.
     * 
     * ( end auto-generated )
     * @webref structure
     * @usage web_application
     * @see PApplet#noLoop()
     * @see PApplet#redraw()
     * @see PApplet#draw()
     */
    public loop();

    /**
     * ( begin auto-generated from noLoop.xml )
     * 
     * Stops Processing from continuously executing the code within
     * <b>draw()</b>. If <b>loop()</b> is called, the code in <b>draw()</b>
     * begin to run continuously again. If using <b>noLoop()</b> in
     * <b>setup()</b>, it should be the last line inside the block.
     * <br/> <br/>
     * When <b>noLoop()</b> is used, it's not possible to manipulate or access
     * the screen inside event handling functions such as <b>mousePressed()</b>
     * or <b>keyPressed()</b>. Instead, use those functions to call
     * <b>redraw()</b> or <b>loop()</b>, which will run <b>draw()</b>, which
     * can update the screen properly. This means that when noLoop() has been
     * called, no drawing can happen, and functions like saveFrame() or
     * loadPixels() may not be used.
     * <br/> <br/>
     * Note that if the sketch is resized, <b>redraw()</b> will be called to
     * update the sketch, even after <b>noLoop()</b> has been specified.
     * Otherwise, the sketch would enter an odd state until <b>loop()</b> was called.
     * 
     * ( end auto-generated )
     * @webref structure
     * @usage web_application
     * @see PApplet#loop()
     * @see PApplet#redraw()
     * @see PApplet#draw()
     */
    public noLoop();

    public isLooping() : boolean;

    eventQueue : java.util.concurrent.BlockingQueue<Event>;

    /*private*/ eventQueueDequeueLock : any;

    /**
     * Add an event to the internal event queue, or process it immediately if
     * the sketch is not currently looping.
     * @param {Event} pe
     */
    public postEvent(pe : Event);

    dequeueEvents();

    /**
     * Actually take action based on a mouse event.
     * Internally updates mouseX, mouseY, mousePressed, and mouseEvent.
     * Then it calls the event type with no params,
     * i.e. mousePressed() or mouseReleased() that the user may have
     * overloaded to do something more useful.
     * @param {MouseEvent} event
     */
    handleMouseEvent(event : MouseEvent);

    /**
     * ( begin auto-generated from mouseReleased.xml )
     * 
     * The <b>mouseReleased()</b> function is called every time a mouse button
     * is released.
     * 
     * ( end auto-generated )
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
    public mouseReleased();

    public mouseReleased(event : MouseEvent);

    /**
     * ( begin auto-generated from mouseClicked.xml )
     * 
     * The <b>mouseClicked()</b> function is called once after a mouse button
     * has been pressed and then released.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * When the mouse is clicked, mousePressed() will be called,
     * then mouseReleased(), then mouseClicked(). Note that
     * mousePressed is already false inside of mouseClicked().
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
    public mouseClicked();

    public mouseClicked(event : MouseEvent);

    /**
     * ( begin auto-generated from mouseDragged.xml )
     * 
     * The <b>mouseDragged()</b> function is called once every time the mouse
     * moves and a mouse button is pressed.
     * 
     * ( end auto-generated )
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
    public mouseDragged();

    public mouseDragged(event : MouseEvent);

    /**
     * ( begin auto-generated from mouseMoved.xml )
     * 
     * The <b>mouseMoved()</b> function is called every time the mouse moves
     * and a mouse button is not pressed.
     * 
     * ( end auto-generated )
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
    public mouseMoved();

    public mouseMoved(event : MouseEvent);

    public mouseEntered();

    public mouseEntered(event : MouseEvent);

    public mouseExited();

    public mouseExited(event : MouseEvent);

    /**
     * @nowebref
     */
    public mouseWheel();

    /**
     * The event.getAmount() method returns negative values if the mouse wheel
     * if rotated up or away from the user and positive in the other direction.
     * On OS X with "natural" scrolling enabled, the values are opposite.
     * 
     * @webref input:mouse
     * @param {MouseEvent} event the MouseEvent
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
     * @see PApplet#mouseButton
     */
    public mouseWheel(event : MouseEvent);

    handleKeyEvent(event : KeyEvent);

    /**
     * ( begin auto-generated from keyReleased.xml )
     * 
     * The <b>keyReleased()</b> function is called once every time a key is
     * released. The key that was released will be stored in the <b>key</b>
     * variable. See <b>key</b> and <b>keyReleased</b> for more information.
     * 
     * ( end auto-generated )
     * @webref input:keyboard
     * @see PApplet#key
     * @see PApplet#keyCode
     * @see PApplet#keyPressed
     * @see PApplet#keyPressed()
     */
    public keyReleased();

    public keyReleased(event : KeyEvent);

    /**
     * ( begin auto-generated from keyTyped.xml )
     * 
     * The <b>keyTyped()</b> function is called once every time a key is
     * pressed, but action keys such as Ctrl, Shift, and Alt are ignored.
     * Because of how operating systems handle key repeats, holding down a key
     * will cause multiple calls to <b>keyTyped()</b>, the rate is set by the
     * operating system and how each computer is configured.
     * 
     * ( end auto-generated )
     * @webref input:keyboard
     * @see PApplet#keyPressed
     * @see PApplet#key
     * @see PApplet#keyCode
     * @see PApplet#keyReleased()
     */
    public keyTyped();

    public keyTyped(event : KeyEvent);

    public focusGained();

    public focusLost();

    /**
     * ( begin auto-generated from millis.xml )
     * 
     * Returns the number of milliseconds (thousandths of a second) since
     * starting an applet. This information is often used for timing animation
     * sequences.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * <p>
     * This is a function, rather than a variable, because it may
     * change multiple times per frame.
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
    public millis() : number;

    /**
     * ( begin auto-generated from second.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>second()</b> function returns the current second as a value from 0 - 59.
     * 
     * ( end auto-generated )
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#minute()
     * @see PApplet#hour()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * 
     * @return {number}
     */
    public static second() : number;

    /**
     * ( begin auto-generated from minute.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>minute()</b> function returns the current minute as a value from 0 - 59.
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
     * 
     * 
     * @return {number}
     */
    public static minute() : number;

    /**
     * ( begin auto-generated from hour.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>hour()</b> function returns the current hour as a value from 0 - 23.
     * 
     * ( end auto-generated )
     * @webref input:time_date
     * @see PApplet#millis()
     * @see PApplet#second()
     * @see PApplet#minute()
     * @see PApplet#day()
     * @see PApplet#month()
     * @see PApplet#year()
     * @return {number}
     */
    public static hour() : number;

    /**
     * ( begin auto-generated from day.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>day()</b> function returns the current day as a value from 1 - 31.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Get the current day of the month (1 through 31).
     * <p>
     * If you're looking for the day of the week (M-F or whatever)
     * or day of the year (1..365) then use java's Calendar.get()
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
    public static day() : number;

    /**
     * ( begin auto-generated from month.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>month()</b> function returns the current month as a value from 1 - 12.
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
    public static month() : number;

    /**
     * ( begin auto-generated from year.xml )
     * 
     * Processing communicates with the clock on your computer. The
     * <b>year()</b> function returns the current year as an integer (2003,
     * 2004, 2005, etc).
     * 
     * ( end auto-generated )
     * The <b>year()</b> function returns the current year as an integer (2003, 2004, 2005, etc).
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
    public static year() : number;

    /**
     * ( begin auto-generated from delay.xml )
     * 
     * The delay() function causes the program to halt for a specified time.
     * Delay times are specified in thousandths of a second. For example,
     * running delay(3000) will stop the program for three seconds and
     * delay(500) will stop the program for a half-second.
     * 
     * The screen only updates when the end of draw() is reached, so delay()
     * cannot be used to slow down drawing. For instance, you cannot use delay()
     * to control the timing of an animation.
     * 
     * The delay() function should only be used for pausing scripts (i.e.
     * a script that needs to pause a few seconds before attempting a download,
     * or a sketch that needs to wait a few milliseconds before reading from
     * the serial port).
     * 
     * ( end auto-generated )
     * @webref environment
     * @param {number} napTime milliseconds to pause before running draw() again
     * @see PApplet#frameRate
     * @see PApplet#draw()
     */
    public delay(napTime : number);

    /**
     * Links to a webpage either in the same window or in a new window. The
     * complete URL must be specified.
     * 
     * <h3>Advanced</h3>
     * Link to an external page without all the muss.
     * <p>
     * When run with an applet, uses the browser to open the url,
     * for applications, attempts to launch a browser with the url.
     * 
     * @param {string} url the complete URL, as a String in quotes
     */
    public link(url : string);

    static openLauncher : string;

    /**
     * ( begin auto-generated from launch.xml )
     * 
     * Attempts to open an application or file using your platform's launcher.
     * The <b>file</b> parameter is a String specifying the file name and
     * location. The location parameter must be a full path name, or the name
     * of an executable in the system's PATH. In most cases, using a full path
     * is the best option, rather than relying on the system PATH. Be sure to
     * make the file executable before attempting to open it (chmod +x).
     * <br/> <br/>
     * The <b>args</b> parameter is a String or String array which is passed to
     * the command line. If you have multiple parameters, e.g. an application
     * and a document, or a command with multiple switches, use the version
     * that takes a String array, and place each individual item in a separate
     * element.
     * <br/> <br/>
     * If args is a String (not an array), then it can only be a single file or
     * application with no parameters. It's not the same as executing that
     * String using a shell. For instance, launch("javac -help") will not work
     * properly.
     * <br/> <br/>
     * This function behaves differently on each platform. On Windows, the
     * parameters are sent to the Windows shell via "cmd /c". On Mac OS X, the
     * "open" command is used (type "man open" in Terminal.app for
     * documentation). On Linux, it first tries gnome-open, then kde-open, but
     * if neither are available, it sends the command to the shell without any
     * alterations.
     * <br/> <br/>
     * For users familiar with Java, this is not quite the same as
     * Runtime.exec(), because the launcher command is prepended. Instead, the
     * <b>exec(String[])</b> function is a shortcut for
     * Runtime.getRuntime.exec(String[]).
     * 
     * ( end auto-generated )
     * @webref input:files
     * @param {Array} args arguments to the launcher, eg. a filename.
     * @usage Application
     * @return {java.lang.Process}
     */
    public static launch(...args : string[]) : java.lang.Process;

    /**
     * Pass a set of arguments directly to the command line. Uses Java's
     * <A HREF="https://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#exec-java.lang.String:A-">Runtime.exec()</A>
     * method. This is different from the <A HREF="https://processing.org/reference/launch_.html">launch()</A>
     * method, which uses the operating system's launcher to open the files.
     * It's always a good idea to use a full path to the executable here.
     * <pre>
     * exec("/usr/bin/say", "welcome to the command line");
     * </pre>
     * Or if you want to wait until it's completed, something like this:
     * <pre>
     * Process p = exec("/usr/bin/say", "waiting until done");
     * try {
     * int result = p.waitFor();
     * println("the process returned " + result);
     * } catch (InterruptedException e) { }
     * </pre>
     * You can also get the system output and error streams from the Process
     * object, but that's more that we'd like to cover here.
     * @return {java.lang.Process} a <A HREF="https://docs.oracle.com/javase/8/docs/api/java/lang/Process.html">Process</A> object
     * @param {Array} args
     */
    public static exec(...args : string[]) : java.lang.Process;

    /**
     * Alternative version of exec() that retrieves stdout and stderr into the
     * StringList objects provided. This is a convenience function that handles
     * simple exec() calls. If the results will be more than a couple lines,
     * you shouldn't use this function, you should use a more elaborate method
     * that makes use of proper threading (to drain the shell output) and error
     * handling to address the many things that can go wrong within this method.
     * 
     * @param {StringList} stdout a non-null StringList object to be filled with any output
     * @param {StringList} stderr a non-null StringList object to be filled with error lines
     * @param {Array} args each argument to be passed as a series of String objects
     * @return {number} the result returned from the application, or -1 if an Exception
     * occurs before the application is able to return a result.
     */
    public static exec(stdout : StringList, stderr : StringList, ...args : string[]) : number;

    /**
     * Same as exec() above, but prefixes the call with a shell.
     * @param {StringList} stdout
     * @param {StringList} stderr
     * @param {Array} args
     * @return {number}
     */
    public static shell(stdout : StringList, stderr : StringList, ...args : string[]) : number;

    /**
     * Better way of handling e.printStackTrace() calls so that they can be
     * handled by subclasses as necessary.
     * @param {Error} t
     */
    printStackTrace(t : Error);

    /**
     * Function for an applet/application to kill itself and
     * display an error. Mostly this is here to be improved later.
     * @param {string} what
     */
    public die(what : string);

    /**
     * Same as above but with an exception. Also needs work.
     * @param {string} what
     * @param {Error} e
     */
    public die(what : string, e : Error);

    /**
     * ( begin auto-generated from exit.xml )
     * 
     * Quits/stops/exits the program. Programs without a <b>draw()</b> function
     * exit automatically after the last line has run, but programs with
     * <b>draw()</b> run continuously until the program is manually stopped or
     * <b>exit()</b> is run.<br />
     * <br />
     * Rather than terminating immediately, <b>exit()</b> will cause the sketch
     * to exit after <b>draw()</b> has completed (or after <b>setup()</b>
     * completes if called during the <b>setup()</b> function).<br />
     * <br />
     * For Java programmers, this is <em>not</em> the same as System.exit().
     * Further, System.exit() should not be used because closing out an
     * application while <b>draw()</b> is running may cause a crash
     * (particularly with P3D).
     * 
     * ( end auto-generated )
     * @webref structure
     */
    public exit();

    /**
     * Some subclasses (I'm looking at you, processing.py) might wish to do something
     * other than actually terminate the JVM. This gives them a chance to do whatever
     * they have in mind when cleaning up.
     */
    public exitActual();

    /**
     * Called to dispose of resources and shut down the sketch.
     * Destroys the thread, dispose the renderer,and notify listeners.
     * <p>
     * Not to be called or overriden by users. If called multiple times,
     * will only notify listeners once. Register a dispose listener instead.
     */
    public dispose();

    /**
     * Call a method in the current class based on its name.
     * <p/>
     * Note that the function being called must be public. Inside the PDE,
     * 'public' is automatically added, but when used without the preprocessor,
     * (like from Eclipse) you'll have to do it yourself.
     * @param {string} name
     */
    public method(name : string);

    /**
     * Launch a new thread and call the specified function from that new thread.
     * This is a very simple way to do a thread without needing to get into
     * classes, runnables, etc.
     * <p/>
     * Note that the function being called must be public. Inside the PDE,
     * 'public' is automatically added, but when used without the preprocessor,
     * (like from Eclipse) you'll have to do it yourself.
     * 
     * @webref structure
     * @usage Application
     * @param {string} name name of the function to be executed in a separate thread
     * @see PApplet#setup()
     * @see PApplet#draw()
     * @see PApplet#loop()
     * @see PApplet#noLoop()
     */
    public thread(name : string);

    /**
     * ( begin auto-generated from save.xml )
     * 
     * Saves an image from the display window. Images are saved in TIFF, TARGA,
     * JPEG, and PNG format depending on the extension within the
     * <b>filename</b> parameter. For example, "image.tif" will have a TIFF
     * image and "image.png" will save a PNG image. If no extension is included
     * in the filename, the image will save in TIFF format and <b>.tif</b> will
     * be added to the name. These files are saved to the sketch's folder,
     * which may be opened by selecting "Show sketch folder" from the "Sketch"
     * menu. It is not possible to use <b>save()</b> while running the program
     * in a web browser.
     * <br/> images saved from the main drawing window will be opaque. To save
     * images without a background, use <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * @webref output:image
     * @param {string} filename any sequence of letters and numbers
     * @see PApplet#saveFrame()
     * @see PApplet#createGraphics(int, int, String)
     */
    public save(filename : string);

    /**
     * 
     */
    public saveFrame();

    /**
     * ( begin auto-generated from saveFrame.xml )
     * 
     * Saves a numbered sequence of images, one image each time the function is
     * run. To save an image that is identical to the display window, run the
     * function at the end of <b>draw()</b> or within mouse and key events such
     * as <b>mousePressed()</b> and <b>keyPressed()</b>. If <b>saveFrame()</b>
     * is called without parameters, it will save the files as screen-0000.tif,
     * screen-0001.tif, etc. It is possible to specify the name of the sequence
     * with the <b>filename</b> parameter and make the choice of saving TIFF,
     * TARGA, PNG, or JPEG files with the <b>ext</b> parameter. These image
     * sequences can be loaded into programs such as Apple's QuickTime software
     * and made into movies. These files are saved to the sketch's folder,
     * which may be opened by selecting "Show sketch folder" from the "Sketch"
     * menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser
     * unless the sketch is <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</A>. To
     * save a file back to a server, see the <a
     * href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.<br/>
     * <br/ >
     * All images saved from the main drawing window will be opaque. To save
     * images without a background, use <b>createGraphics()</b>.
     * 
     * ( end auto-generated )
     * @webref output:image
     * @see PApplet#save(String)
     * @see PApplet#createGraphics(int, int, String, String)
     * @see PApplet#frameCount
     * @param {string} filename any sequence of letters or numbers that ends with either ".tif", ".tga", ".jpg", or ".png"
     */
    public saveFrame(filename : string);

    /**
     * Check a string for #### signs to see if the frame number should be
     * inserted. Used for functions like saveFrame() and beginRecord() to
     * replace the # marks with the frame number. If only one # is used,
     * it will be ignored, under the assumption that it's probably not
     * intended to be the frame number.
     * @param {string} what
     * @return {string}
     */
    public insertFrame(what : string) : string;

    /**
     * Set the cursor type
     * @param {number} kind either ARROW, CROSS, HAND, MOVE, TEXT, or WAIT
     */
    public cursor(kind : number);

    /**
     * Replace the cursor with the specified PImage. The x- and y-
     * coordinate of the center will be the center of the image.
     * @param {PImage} img
     */
    public cursor(img : PImage);

    /**
     * ( begin auto-generated from cursor.xml )
     * 
     * Sets the cursor to a predefined symbol, an image, or makes it visible if
     * already hidden. If you are trying to set an image as the cursor, it is
     * recommended to make the size 16x16 or 32x32 pixels. It is not possible
     * to load an image as the cursor if you are exporting your program for the
     * Web and not all MODES work with all Web browsers. The values for
     * parameters <b>x</b> and <b>y</b> must be less than the dimensions of the image.
     * <br /> <br />
     * Setting or hiding the cursor generally does not work with "Present" mode
     * (when running full-screen).
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Set a custom cursor to an image with a specific hotspot.
     * Only works with JDK 1.2 and later.
     * Currently seems to be broken on Java 1.4 for Mac OS X
     * <p>
     * Based on code contributed by Amit Pitaru, plus additional
     * code to handle Java versions via reflection by Jonathan Feinberg.
     * Reflection removed for release 0128 and later.
     * @webref environment
     * @see PApplet#noCursor()
     * @param {PImage} img any variable of type PImage
     * @param {number} x the horizontal active spot of the cursor
     * @param {number} y the vertical active spot of the cursor
     */
    public cursor(img : PImage, x : number, y : number);

    /**
     * Show the cursor after noCursor() was called.
     * Notice that the program remembers the last set cursor type
     */
    public cursor();

    /**
     * ( begin auto-generated from noCursor.xml )
     * 
     * Hides the cursor from view. Will not work when running the program in a
     * web browser or when running in full screen (Present) mode.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Hide the cursor by creating a transparent image
     * and using it as a custom cursor.
     * @webref environment
     * @see PApplet#cursor()
     * @usage Application
     */
    public noCursor();

    /**
     * ( begin auto-generated from print.xml )
     * 
     * Writes to the console area of the Processing environment. This is often
     * helpful for looking at the data a program is producing. The companion
     * function <b>println()</b> works like <b>print()</b>, but creates a new
     * line of text for each call to the function. Individual elements can be
     * separated with quotes ("") and joined with the addition operator (+).<br />
     * <br />
     * Beginning with release 0125, to print the contents of an array, use
     * println(). There's no sensible way to do a <b>print()</b> of an array,
     * because there are too many possibilities for how to separate the data
     * (spaces, commas, etc). If you want to print an array as a single line,
     * use <b>join()</b>. With <b>join()</b>, you can choose any delimiter you
     * like and <b>print()</b> the result.<br />
     * <br />
     * Using <b>print()</b> on an object will output <b>null</b>, a memory
     * location that may look like "@10be08," or the result of the
     * <b>toString()</b> method from the object that's being printed. Advanced
     * users who want more useful output when calling <b>print()</b> on their
     * own classes can add a <b>toString()</b> method to the class that returns
     * a String.
     * 
     * ( end auto-generated )
     * @webref output:text_area
     * @usage IDE
     * @param {number} what data to print to console
     * @see PApplet#println()
     * @see PApplet#printArray(Object)
     * @see PApplet#join(String[], char)
     */
    public static print(what : number);

    public static print(what : boolean);

    public static print(what : string);

    public static print(what : number);

    public static print(what : number);

    public static print(what : number);

    public static print(what : number);

    public static print(what : string);

    /**
     * @param {Array} variables list of data, separated by commas
     */
    public static print(...variables : any[]);

    /**
     * ( begin auto-generated from println.xml )
     * 
     * Writes to the text area of the Processing environment's console. This is
     * often helpful for looking at the data a program is producing. Each call
     * to this function creates a new line of output. Individual elements can
     * be separated with quotes ("") and joined with the string concatenation
     * operator (+). See <b>print()</b> for more about what to expect in the output.
     * <br/><br/> <b>println()</b> on an array (by itself) will write the
     * contents of the array to the console. This is often helpful for looking
     * at the data a program is producing. A new line is put between each
     * element of the array. This function can only print one dimensional
     * arrays. For arrays with higher dimensions, the result will be closer to
     * that of <b>print()</b>.
     * 
     * ( end auto-generated )
     * @webref output:text_area
     * @usage IDE
     * @see PApplet#print(byte)
     * @see PApplet#printArray(Object)
     */
    public static println();

    /**
     * @param {number} what data to print to console
     */
    public static println(what : number);

    public static println(what : boolean);

    public static println(what : string);

    public static println(what : number);

    public static println(what : number);

    public static println(what : number);

    public static println(what : number);

    public static println(what : string);

    /**
     * @param {Array} variables list of data, separated by commas
     */
    public static println(...variables : any[]);

    /**
     * For arrays, use printArray() instead. This function causes a warning
     * because the new print(Object...) and println(Object...) functions can't
     * be reliably bound by the compiler.
     * @param {*} what
     */
    public static println(what : any);

    /**
     * ( begin auto-generated from printArray.xml )
     * 
     * To come...
     * 
     * ( end auto-generated )
     * @webref output:text_area
     * @param {*} what one-dimensional array
     * @usage IDE
     * @see PApplet#print(byte)
     * @see PApplet#println()
     */
    public static printArray(what : any);

    public static debug(msg : string);

    /**
     * ( begin auto-generated from abs.xml )
     * 
     * Calculates the absolute value (magnitude) of a number. The absolute
     * value of a number is always positive.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number to compute
     * @return {number}
     */
    public static abs(n : number) : number;

    public static abs(n : number) : number;

    /**
     * ( begin auto-generated from sq.xml )
     * 
     * Squares a number (multiplies a number by itself). The result is always a
     * positive number, as multiplying two negative numbers always yields a
     * positive result. For example, -1 * -1 = 1.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number to square
     * @see PApplet#sqrt(float)
     * @return {number}
     */
    public static sq(n : number) : number;

    /**
     * ( begin auto-generated from sqrt.xml )
     * 
     * Calculates the square root of a number. The square root of a number is
     * always positive, even though there may be a valid negative root. The
     * square root <b>s</b> of number <b>a</b> is such that <b>s*s = a</b>. It
     * is the opposite of squaring.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n non-negative number
     * @see PApplet#pow(float, float)
     * @see PApplet#sq(float)
     * @return {number}
     */
    public static sqrt(n : number) : number;

    /**
     * ( begin auto-generated from log.xml )
     * 
     * Calculates the natural logarithm (the base-<i>e</i> logarithm) of a
     * number. This function expects the values greater than 0.0.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number greater than 0.0
     * @return {number}
     */
    public static log(n : number) : number;

    /**
     * ( begin auto-generated from exp.xml )
     * 
     * Returns Euler's number <i>e</i> (2.71828...) raised to the power of the
     * <b>value</b> parameter.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n exponent to raise
     * @return {number}
     */
    public static exp(n : number) : number;

    /**
     * ( begin auto-generated from pow.xml )
     * 
     * Facilitates exponential expressions. The <b>pow()</b> function is an
     * efficient way of multiplying numbers by themselves (or their reciprocal)
     * in large quantities. For example, <b>pow(3, 5)</b> is equivalent to the
     * expression 3*3*3*3*3 and <b>pow(3, -5)</b> is equivalent to 1 / 3*3*3*3*3.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n base of the exponential expression
     * @param {number} e power by which to raise the base
     * @see PApplet#sqrt(float)
     * @return {number}
     */
    public static pow(n : number, e : number) : number;

    /**
     * ( begin auto-generated from max.xml )
     * 
     * Determines the largest value in a sequence of numbers.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} a first number to compare
     * @param {number} b second number to compare
     * @see PApplet#min(float, float, float)
     * @return {number}
     */
    public static max(a : number, b : number) : number;

    public static max(a : number, b : number) : number;

    /**
     * @param {number} c third number to compare
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    public static max(a : number, b : number, c : number) : number;

    public static max(a : number, b : number, c : number) : number;

    /**
     * @param {Array} list array of numbers to compare
     * @return {number}
     */
    public static max(list : number[]) : number;

    public static max(list : number[]) : number;

    public static min(a : number, b : number) : number;

    public static min(a : number, b : number) : number;

    public static min(a : number, b : number, c : number) : number;

    /**
     * ( begin auto-generated from min.xml )
     * 
     * Determines the smallest value in a sequence of numbers.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} a first number
     * @param {number} b second number
     * @param {number} c third number
     * @see PApplet#max(float, float, float)
     * @return {number}
     */
    public static min(a : number, b : number, c : number) : number;

    /**
     * @param {Array} list array of numbers to compare
     * @return {number}
     */
    public static min(list : number[]) : number;

    public static min(list : number[]) : number;

    public static constrain(amt : number, low : number, high : number) : number;

    /**
     * ( begin auto-generated from constrain.xml )
     * 
     * Constrains a value to not exceed a maximum and minimum value.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} amt the value to constrain
     * @param {number} low minimum limit
     * @param {number} high maximum limit
     * @see PApplet#max(float, float, float)
     * @see PApplet#min(float, float, float)
     * @return {number}
     */
    public static constrain(amt : number, low : number, high : number) : number;

    /**
     * ( begin auto-generated from sin.xml )
     * 
     * Calculates the sine of an angle. This function expects the values of the
     * <b>angle</b> parameter to be provided in radians (values from 0 to
     * 6.28). Values are returned in the range -1 to 1.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#cos(float)
     * @see PApplet#tan(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    public static sin(angle : number) : number;

    /**
     * ( begin auto-generated from cos.xml )
     * 
     * Calculates the cosine of an angle. This function expects the values of
     * the <b>angle</b> parameter to be provided in radians (values from 0 to
     * PI*2). Values are returned in the range -1 to 1.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#sin(float)
     * @see PApplet#tan(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    public static cos(angle : number) : number;

    /**
     * ( begin auto-generated from tan.xml )
     * 
     * Calculates the ratio of the sine and cosine of an angle. This function
     * expects the values of the <b>angle</b> parameter to be provided in
     * radians (values from 0 to PI*2). Values are returned in the range
     * <b>infinity</b> to <b>-infinity</b>.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} angle an angle in radians
     * @see PApplet#cos(float)
     * @see PApplet#sin(float)
     * @see PApplet#radians(float)
     * @return {number}
     */
    public static tan(angle : number) : number;

    /**
     * ( begin auto-generated from asin.xml )
     * 
     * The inverse of <b>sin()</b>, returns the arc sine of a value. This
     * function expects the values in the range of -1 to 1 and values are
     * returned in the range <b>-PI/2</b> to <b>PI/2</b>.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} value the value whose arc sine is to be returned
     * @see PApplet#sin(float)
     * @see PApplet#acos(float)
     * @see PApplet#atan(float)
     * @return {number}
     */
    public static asin(value : number) : number;

    /**
     * ( begin auto-generated from acos.xml )
     * 
     * The inverse of <b>cos()</b>, returns the arc cosine of a value. This
     * function expects the values in the range of -1 to 1 and values are
     * returned in the range <b>0</b> to <b>PI (3.1415927)</b>.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} value the value whose arc cosine is to be returned
     * @see PApplet#cos(float)
     * @see PApplet#asin(float)
     * @see PApplet#atan(float)
     * @return {number}
     */
    public static acos(value : number) : number;

    /**
     * ( begin auto-generated from atan.xml )
     * 
     * The inverse of <b>tan()</b>, returns the arc tangent of a value. This
     * function expects the values in the range of -Infinity to Infinity
     * (exclusive) and values are returned in the range <b>-PI/2</b> to <b>PI/2 </b>.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} value -Infinity to Infinity (exclusive)
     * @see PApplet#tan(float)
     * @see PApplet#asin(float)
     * @see PApplet#acos(float)
     * @return {number}
     */
    public static atan(value : number) : number;

    /**
     * ( begin auto-generated from atan2.xml )
     * 
     * Calculates the angle (in radians) from a specified point to the
     * coordinate origin as measured from the positive x-axis. Values are
     * returned as a <b>float</b> in the range from <b>PI</b> to <b>-PI</b>.
     * The <b>atan2()</b> function is most often used for orienting geometry to
     * the position of the cursor.  Note: The y-coordinate of the point is the
     * first parameter and the x-coordinate is the second due the the structure
     * of calculating the tangent.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} y y-coordinate of the point
     * @param {number} x x-coordinate of the point
     * @see PApplet#tan(float)
     * @return {number}
     */
    public static atan2(y : number, x : number) : number;

    /**
     * ( begin auto-generated from degrees.xml )
     * 
     * Converts a radian measurement to its corresponding value in degrees.
     * Radians and degrees are two ways of measuring the same thing. There are
     * 360 degrees in a circle and 2*PI radians in a circle. For example,
     * 90&deg; = PI/2 = 1.5707964. All trigonometric functions in Processing
     * require their parameters to be specified in radians.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} radians radian value to convert to degrees
     * @see PApplet#radians(float)
     * @return {number}
     */
    public static degrees(radians : number) : number;

    /**
     * ( begin auto-generated from radians.xml )
     * 
     * Converts a degree measurement to its corresponding value in radians.
     * Radians and degrees are two ways of measuring the same thing. There are
     * 360 degrees in a circle and 2*PI radians in a circle. For example,
     * 90&deg; = PI/2 = 1.5707964. All trigonometric functions in Processing
     * require their parameters to be specified in radians.
     * 
     * ( end auto-generated )
     * @webref math:trigonometry
     * @param {number} degrees degree value to convert to radians
     * @see PApplet#degrees(float)
     * @return {number}
     */
    public static radians(degrees : number) : number;

    /**
     * ( begin auto-generated from ceil.xml )
     * 
     * Calculates the closest int value that is greater than or equal to the
     * value of the parameter. For example, <b>ceil(9.03)</b> returns the value 10.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number to round up
     * @see PApplet#floor(float)
     * @see PApplet#round(float)
     * @return {number}
     */
    public static ceil(n : number) : number;

    /**
     * ( begin auto-generated from floor.xml )
     * 
     * Calculates the closest int value that is less than or equal to the value
     * of the parameter.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number to round down
     * @see PApplet#ceil(float)
     * @see PApplet#round(float)
     * @return {number}
     */
    public static floor(n : number) : number;

    /**
     * ( begin auto-generated from round.xml )
     * 
     * Calculates the integer closest to the <b>value</b> parameter. For
     * example, <b>round(9.2)</b> returns the value 9.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} n number to round
     * @see PApplet#floor(float)
     * @see PApplet#ceil(float)
     * @return {number}
     */
    public static round(n : number) : number;

    public static mag(a : number, b : number) : number;

    /**
     * ( begin auto-generated from mag.xml )
     * 
     * Calculates the magnitude (or length) of a vector. A vector is a
     * direction in space commonly used in computer graphics and linear
     * algebra. Because it has no "start" position, the magnitude of a vector
     * can be thought of as the distance from coordinate (0,0) to its (x,y)
     * value. Therefore, mag() is a shortcut for writing "dist(0, 0, x, y)".
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} a first value
     * @param {number} b second value
     * @param {number} c third value
     * @see PApplet#dist(float, float, float, float)
     * @return {number}
     */
    public static mag(a : number, b : number, c : number) : number;

    public static dist(x1 : number, y1 : number, x2 : number, y2 : number) : number;

    /**
     * ( begin auto-generated from dist.xml )
     * 
     * Calculates the distance between two points.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} x1 x-coordinate of the first point
     * @param {number} y1 y-coordinate of the first point
     * @param {number} z1 z-coordinate of the first point
     * @param {number} x2 x-coordinate of the second point
     * @param {number} y2 y-coordinate of the second point
     * @param {number} z2 z-coordinate of the second point
     * @return {number}
     */
    public static dist(x1 : number, y1 : number, z1 : number, x2 : number, y2 : number, z2 : number) : number;

    /**
     * ( begin auto-generated from lerp.xml )
     * 
     * Calculates a number between two numbers at a specific increment. The
     * <b>amt</b> parameter is the amount to interpolate between the two values
     * where 0.0 equal to the first point, 0.1 is very near the first point,
     * 0.5 is half-way in between, etc. The lerp function is convenient for
     * creating motion along a straight path and for drawing dotted lines.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} start first value
     * @param {number} stop second value
     * @param {number} amt float between 0.0 and 1.0
     * @see PGraphics#curvePoint(float, float, float, float, float)
     * @see PGraphics#bezierPoint(float, float, float, float, float)
     * @see PVector#lerp(PVector, float)
     * @see PGraphics#lerpColor(int, int, float)
     * @return {number}
     */
    public static lerp(start : number, stop : number, amt : number) : number;

    /**
     * ( begin auto-generated from norm.xml )
     * 
     * Normalizes a number from another range into a value between 0 and 1.
     * <br/> <br/>
     * Identical to map(value, low, high, 0, 1);
     * <br/> <br/>
     * Numbers outside the range are not clamped to 0 and 1, because
     * out-of-range values are often intentional and useful.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} value the incoming value to be converted
     * @param {number} start lower bound of the value's current range
     * @param {number} stop upper bound of the value's current range
     * @see PApplet#map(float, float, float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    public static norm(value : number, start : number, stop : number) : number;

    /**
     * ( begin auto-generated from map.xml )
     * 
     * Re-maps a number from one range to another. In the example above,
     * the number '25' is converted from a value in the range 0..100 into
     * a value that ranges from the left edge (0) to the right edge (width)
     * of the screen.
     * <br/> <br/>
     * Numbers outside the range are not clamped to 0 and 1, because
     * out-of-range values are often intentional and useful.
     * 
     * ( end auto-generated )
     * @webref math:calculation
     * @param {number} value the incoming value to be converted
     * @param {number} start1 lower bound of the value's current range
     * @param {number} stop1 upper bound of the value's current range
     * @param {number} start2 lower bound of the value's target range
     * @param {number} stop2 upper bound of the value's target range
     * @see PApplet#norm(float, float, float)
     * @see PApplet#lerp(float, float, float)
     * @return {number}
     */
    public static map(value : number, start1 : number, stop1 : number, start2 : number, stop2 : number) : number;

    internalRandom : java.util.Random;

    /**
     * @param {number} high
     * @return {number}
     */
    public random(high : number) : number;

    /**
     * ( begin auto-generated from randomGaussian.xml )
     * 
     * Returns a float from a random series of numbers having a mean of 0
     * and standard deviation of 1. Each time the <b>randomGaussian()</b>
     * function is called, it returns a number fitting a Gaussian, or
     * normal, distribution. There is theoretically no minimum or maximum
     * value that <b>randomGaussian()</b> might return. Rather, there is
     * just a very low probability that values far from the mean will be
     * returned; and a higher probability that numbers near the mean will
     * be returned.
     * 
     * ( end auto-generated )
     * @webref math:random
     * @see PApplet#random(float,float)
     * @see PApplet#noise(float, float, float)
     * @return {number}
     */
    public randomGaussian() : number;

    /**
     * ( begin auto-generated from random.xml )
     * 
     * Generates random numbers. Each time the <b>random()</b> function is
     * called, it returns an unexpected value within the specified range. If
     * one parameter is passed to the function it will return a <b>float</b>
     * between zero and the value of the <b>high</b> parameter. The function
     * call <b>random(5)</b> returns values between 0 and 5 (starting at zero,
     * up to but not including 5). If two parameters are passed, it will return
     * a <b>float</b> with a value between the the parameters. The function
     * call <b>random(-5, 10.2)</b> returns values starting at -5 up to (but
     * not including) 10.2. To convert a floating-point random number to an
     * integer, use the <b>int()</b> function.
     * 
     * ( end auto-generated )
     * @webref math:random
     * @param {number} low lower limit
     * @param {number} high upper limit
     * @see PApplet#randomSeed(long)
     * @see PApplet#noise(float, float, float)
     * @return {number}
     */
    public random(low : number, high : number) : number;

    /**
     * ( begin auto-generated from randomSeed.xml )
     * 
     * Sets the seed value for <b>random()</b>. By default, <b>random()</b>
     * produces different results each time the program is run. Set the
     * <b>value</b> parameter to a constant to return the same pseudo-random
     * numbers each time the software is run.
     * 
     * ( end auto-generated )
     * @webref math:random
     * @param {number} seed seed value
     * @see PApplet#random(float,float)
     * @see PApplet#noise(float, float, float)
     * @see PApplet#noiseSeed(long)
     */
    public randomSeed(seed : number);

    static PERLIN_YWRAPB : number;

    static PERLIN_YWRAP : number;

    static PERLIN_ZWRAPB : number;

    static PERLIN_ZWRAP : number;

    static PERLIN_SIZE : number;

    perlin_octaves : number;

    perlin_amp_falloff : number;

    perlin_TWOPI : number;

    perlin_PI : number;

    perlin_cosTable : number[];

    perlin : number[];

    perlinRandom : java.util.Random;

    /**
     * 
     * @param {number} x
     * @return {number}
     */
    public noise(x : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    public noise(x : number, y : number) : number;

    /**
     * ( begin auto-generated from noise.xml )
     * 
     * Returns the Perlin noise value at specified coordinates. Perlin noise is
     * a random sequence generator producing a more natural ordered, harmonic
     * succession of numbers compared to the standard <b>random()</b> function.
     * It was invented by Ken Perlin in the 1980s and been used since in
     * graphical applications to produce procedural textures, natural motion,
     * shapes, terrains etc.<br /><br /> The main difference to the
     * <b>random()</b> function is that Perlin noise is defined in an infinite
     * n-dimensional space where each pair of coordinates corresponds to a
     * fixed semi-random value (fixed only for the lifespan of the program).
     * The resulting value will always be between 0.0 and 1.0. Processing can
     * compute 1D, 2D and 3D noise, depending on the number of coordinates
     * given. The noise value can be animated by moving through the noise space
     * as demonstrated in the example above. The 2nd and 3rd dimension can also
     * be interpreted as time.<br /><br />The actual noise is structured
     * similar to an audio signal, in respect to the function's use of
     * frequencies. Similar to the concept of harmonics in physics, perlin
     * noise is computed over several octaves which are added together for the
     * final result. <br /><br />Another way to adjust the character of the
     * resulting sequence is the scale of the input coordinates. As the
     * function works within an infinite space the value of the coordinates
     * doesn't matter as such, only the distance between successive coordinates
     * does (eg. when using <b>noise()</b> within a loop). As a general rule
     * the smaller the difference between coordinates, the smoother the
     * resulting noise sequence will be. Steps of 0.005-0.03 work best for most
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
    public noise(x : number, y : number, z : number) : number;

    noise_fsc(i : number) : number;

    /**
     * ( begin auto-generated from noiseDetail.xml )
     * 
     * Adjusts the character and level of detail produced by the Perlin noise
     * function. Similar to harmonics in physics, noise is computed over
     * several octaves. Lower octaves contribute more to the output signal and
     * as such define the overal intensity of the noise, whereas higher octaves
     * create finer grained details in the noise sequence. By default, noise is
     * computed over 4 octaves with each octave contributing exactly half than
     * its predecessor, starting at 50% strength for the 1st octave. This
     * falloff amount can be changed by adding an additional function
     * parameter. Eg. a falloff factor of 0.75 means each octave will now have
     * 75% impact (25% less) of the previous lower octave. Any value between
     * 0.0 and 1.0 is valid, however note that values greater than 0.5 might
     * result in greater than 1.0 values returned by <b>noise()</b>.<br /><br
     * />By changing these parameters, the signal created by the <b>noise()</b>
     * function can be adapted to fit very specific needs and characteristics.
     * 
     * ( end auto-generated )
     * @webref math:random
     * @param {number} lod number of octaves to be used by the noise
     * @see PApplet#noise(float, float, float)
     */
    public noiseDetail(lod : number);

    /**
     * @see #noiseDetail(int)
     * @param {number} falloff falloff factor for each octave
     * @param {number} lod
     */
    public noiseDetail(lod : number, falloff : number);

    /**
     * ( begin auto-generated from noiseSeed.xml )
     * 
     * Sets the seed value for <b>noise()</b>. By default, <b>noise()</b>
     * produces different results each time the program is run. Set the
     * <b>value</b> parameter to a constant to return the same pseudo-random
     * numbers each time the software is run.
     * 
     * ( end auto-generated )
     * @webref math:random
     * @param {number} seed seed value
     * @see PApplet#noise(float, float, float)
     * @see PApplet#noiseDetail(int, float)
     * @see PApplet#random(float,float)
     * @see PApplet#randomSeed(long)
     */
    public noiseSeed(seed : number);

    loadImageFormats : string[];

    /**
     * ( begin auto-generated from loadImage.xml )
     * 
     * Loads an image into a variable of type <b>PImage</b>. Four types of
     * images ( <b>.gif</b>, <b>.jpg</b>, <b>.tga</b>, <b>.png</b>) images may
     * be loaded. To load correctly, images must be located in the data
     * directory of the current sketch. In most cases, load all images in
     * <b>setup()</b> to preload them at the start of the program. Loading
     * images inside <b>draw()</b> will reduce the speed of a program.<br/>
     * <br/> <b>filename</b> parameter can also be a URL to a file found
     * online. For security reasons, a Processing sketch found online can only
     * download files from the same server from which it came. Getting around
     * this restriction requires a <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed
     * applet</a>.<br/>
     * <br/> <b>extension</b> parameter is used to determine the image type in
     * cases where the image filename does not end with a proper extension.
     * Specify the extension as the second parameter to <b>loadImage()</b>, as
     * shown in the third example on this page.<br/>
     * <br/> an image is not loaded successfully, the <b>null</b> value is
     * returned and an error message will be printed to the console. The error
     * message does not halt the program, however the null value may cause a
     * NullPointerException if your code does not check whether the value
     * returned from <b>loadImage()</b> is null.<br/>
     * <br/> on the type of error, a <b>PImage</b> object may still be
     * returned, but the width and height of the image will be set to -1. This
     * happens if bad image data is returned or cannot be decoded properly.
     * Sometimes this happens with image URLs that produce a 403 error or that
     * redirect to a password prompt, because <b>loadImage()</b> will attempt
     * to interpret the HTML as image data.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @param {string} filename name of file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform
     * @see PImage
     * @see PGraphics#image(PImage, float, float, float, float)
     * @see PGraphics#imageMode(int)
     * @see PGraphics#background(float, float, float, float)
     * @return {PImage}
     */
    public loadImage(filename : string) : PImage;

    /**
     * @param {string} extension type of image to load, for example "png", "gif", "jpg"
     * @param {string} filename
     * @return {PImage}
     */
    public loadImage(filename : string, extension : string) : PImage;

    public requestImage(filename : string) : PImage;

    /**
     * ( begin auto-generated from requestImage.xml )
     * 
     * This function load images on a separate thread so that your sketch does
     * not freeze while images load during <b>setup()</b>. While the image is
     * loading, its width and height will be 0. If an error occurs while
     * loading the image, its width and height will be set to -1. You'll know
     * when the image has loaded properly because its width and height will be
     * greater than 0. Asynchronous image loading (particularly when
     * downloading from a server) can dramatically improve performance.<br />
     * <br/> <b>extension</b> parameter is used to determine the image type in
     * cases where the image filename does not end with a proper extension.
     * Specify the extension as the second parameter to <b>requestImage()</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @param {string} filename name of the file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform
     * @param {string} extension the type of image to load, for example "png", "gif", "jpg"
     * @see PImage
     * @see PApplet#loadImage(String, String)
     * @return {PImage}
     */
    public requestImage(filename : string, extension : string) : PImage;

    /**
     * By trial and error, four image loading threads seem to work best when
     * loading images from online. This is consistent with the number of open
     * connections that web browsers will maintain. The variable is made public
     * (however no accessor has been added since it's esoteric) if you really
     * want to have control over the value used. For instance, when loading local
     * files, it might be better to only have a single thread (or two) loading
     * images so that you're disk isn't simply jumping around.
     */
    public requestImageMax : number;

    requestImageCount : number;

    static ASYNC_IMAGE_LOADER_THREAD_PREFIX : string;

    /**
     * Use Java 1.4 ImageIO methods to load an image.
     * @param {string} filename
     * @return {PImage}
     */
    loadImageIO(filename : string) : PImage;

    /**
     * Targa image loader for RLE-compressed TGA files.
     * <p>
     * Rewritten for 0115 to read/write RLE-encoded targa images.
     * For 0125, non-RLE encoded images are now supported, along with
     * images whose y-order is reversed (which is standard for TGA files).
     * <p>
     * A version of this function is in MovieMaker.java. Any fixes here
     * should be applied over in MovieMaker as well.
     * <p>
     * Known issue with RLE encoding and odd behavior in some apps:
     * https://github.com/processing/processing/issues/2096
     * Please help!
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
    public loadXML(filename : string) : XML;

    /**
     * @nowebref
     * @param {string} filename
     * @param {string} options
     * @return {XML}
     */
    public loadXML(filename : string, options : string) : XML;

    /**
     * @webref input:files
     * @brief Converts String content to an XML object
     * @param {string} xmlString the content to be parsed as XML
     * @return {XML} an XML object, or null
     * @see XML
     * @see PApplet#loadXML(String)
     * @see PApplet#saveXML(XML, String)
     */
    public parseXML(xmlString : string) : XML;

    public parseXML(xmlString : string, options : string) : XML;

    /**
     * @webref output:files
     * @param {XML} xml the XML object to save to disk
     * @param {string} filename name of the file to write to
     * @see XML
     * @see PApplet#loadXML(String)
     * @see PApplet#parseXML(String)
     * @return {boolean}
     */
    public saveXML(xml : XML, filename : string) : boolean;

    /**
     * @nowebref
     * @param {XML} xml
     * @param {string} filename
     * @param {string} options
     * @return {boolean}
     */
    public saveXML(xml : XML, filename : string, options : string) : boolean;

    /**
     * @webref input:files
     * @param {string} input String to parse as a JSONObject
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {JSONObject}
     */
    public parseJSONObject(input : string) : JSONObject;

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
    public loadJSONObject(filename : string) : JSONObject;

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {JSONObject}
     */
    public static loadJSONObject(file : java.io.File) : JSONObject;

    /**
     * @webref output:files
     * @param {JSONObject} json the JSONObject to save
     * @param {string} filename the name of the file to save to
     * @see JSONObject
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#loadJSONArray(String)
     * @see PApplet#saveJSONArray(JSONArray, String)
     * @return {boolean}
     */
    public saveJSONObject(json : JSONObject, filename : string) : boolean;

    /**
     * @param {string} options "compact" and "indent=N", replace N with the number of spaces
     * @param {JSONObject} json
     * @param {string} filename
     * @return {boolean}
     */
    public saveJSONObject(json : JSONObject, filename : string, options : string) : boolean;

    /**
     * @webref input:files
     * @param {string} input String to parse as a JSONArray
     * @see JSONObject
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {JSONArray}
     */
    public parseJSONArray(input : string) : JSONArray;

    /**
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @see PApplet#saveJSONArray(JSONArray, String)
     * @return {JSONArray}
     */
    public loadJSONArray(filename : string) : JSONArray;

    public static loadJSONArray(file : java.io.File) : JSONArray;

    /**
     * @webref output:files
     * @param {JSONArray} json the JSONArray to save
     * @param {string} filename the name of the file to save to
     * @see JSONObject
     * @see JSONArray
     * @see PApplet#loadJSONObject(String)
     * @see PApplet#loadJSONArray(String)
     * @see PApplet#saveJSONObject(JSONObject, String)
     * @return {boolean}
     */
    public saveJSONArray(json : JSONArray, filename : string) : boolean;

    /**
     * @param {string} options "compact" and "indent=N", replace N with the number of spaces
     * @param {JSONArray} json
     * @param {string} filename
     * @return {boolean}
     */
    public saveJSONArray(json : JSONArray, filename : string, options : string) : boolean;

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
    public loadTable(filename : string) : Table;

    /**
     * Options may contain "header", "tsv", "csv", or "bin" separated by commas.
     * 
     * Another option is "dictionary=filename.tsv", which allows users to
     * specify a "dictionary" file that contains a mapping of the column titles
     * and the data types used in the table file. This can be far more efficient
     * (in terms of speed and memory usage) for loading and parsing tables. The
     * dictionary file can only be tab separated values (.tsv) and its extension
     * will be ignored. This option was added in Processing 2.0.2.
     * 
     * @param {string} options may contain "header", "tsv", "csv", or "bin" separated by commas
     * @param {string} filename
     * @return {Table}
     */
    public loadTable(filename : string, options : string) : Table;

    /**
     * @webref output:files
     * @param {Table} table the Table object to save to a file
     * @param {string} filename the filename to which the Table should be saved
     * @see Table
     * @see PApplet#loadTable(String)
     * @return {boolean}
     */
    public saveTable(table : Table, filename : string) : boolean;

    /**
     * @param {string} options can be one of "tsv", "csv", "bin", or "html"
     * @param {Table} table
     * @param {string} filename
     * @return {boolean}
     */
    public saveTable(table : Table, filename : string, options : string) : boolean;

    /**
     * ( begin auto-generated from loadFont.xml )
     * 
     * Loads a font into a variable of type <b>PFont</b>. To load correctly,
     * fonts must be located in the data directory of the current sketch. To
     * create a font to use with Processing, select "Create Font..." from the
     * Tools menu. This will create a font in the format Processing requires
     * and also adds it to the current sketch's data directory.<br />
     * <br />
     * Like <b>loadImage()</b> and other functions that load data, the
     * <b>loadFont()</b> function should not be used inside <b>draw()</b>,
     * because it will slow down the sketch considerably, as the font will be
     * re-loaded from the disk (or network) on each frame.<br />
     * <br />
     * For most renderers, Processing displays fonts using the .vlw font
     * format, which uses images for each letter, rather than defining them
     * through vector data. When <b>hint(ENABLE_NATIVE_FONTS)</b> is used with
     * the JAVA2D renderer, the native version of a font will be used if it is
     * installed on the user's machine.<br />
     * <br />
     * Using <b>createFont()</b> (instead of loadFont) enables vector data to
     * be used with the JAVA2D (default) renderer setting. This can be helpful
     * when many font sizes are needed, or when using any renderer based on
     * JAVA2D, such as the PDF library.
     * 
     * ( end auto-generated )
     * @webref typography:loading_displaying
     * @param {string} filename name of the font to load
     * @see PFont
     * @see PGraphics#textFont(PFont, float)
     * @see PApplet#createFont(String, float, boolean, char[])
     * @return {PFont}
     */
    public loadFont(filename : string) : PFont;

    /**
     * Used by PGraphics to remove the requirement for loading a font!
     * @param {number} size
     * @return {PFont}
     */
    createDefaultFont(size : number) : PFont;

    public createFont(name : string, size : number) : PFont;

    public createFont(name : string, size : number, smooth : boolean) : PFont;

    /**
     * ( begin auto-generated from createFont.xml )
     * 
     * Dynamically converts a font to the format used by Processing from either
     * a font name that's installed on the computer, or from a .ttf or .otf
     * file inside the sketches "data" folder. This function is an advanced
     * feature for precise control. On most occasions you should create fonts
     * through selecting "Create Font..." from the Tools menu.
     * <br /><br />
     * Use the <b>PFont.list()</b> method to first determine the names for the
     * fonts recognized by the computer and are compatible with this function.
     * Because of limitations in Java, not all fonts can be used and some might
     * work with one operating system and not others. When sharing a sketch
     * with other people or posting it on the web, you may need to include a
     * .ttf or .otf version of your font in the data directory of the sketch
     * because other people might not have the font installed on their
     * computer. Only fonts that can legally be distributed should be included
     * with a sketch.
     * <br /><br />
     * The <b>size</b> parameter states the font size you want to generate. The
     * <b>smooth</b> parameter specifies if the font should be antialiased or
     * not, and the <b>charset</b> parameter is an array of chars that
     * specifies the characters to generate.
     * <br /><br />
     * This function creates a bitmapped version of a font in the same manner
     * as the Create Font tool. It loads a font by name, and converts it to a
     * series of images based on the size of the font. When possible, the
     * <b>text()</b> function will use a native font rather than the bitmapped
     * version created behind the scenes with <b>createFont()</b>. For
     * instance, when using P2D, the actual native version of the font will be
     * employed by the sketch, improving drawing quality and performance. With
     * the P3D renderer, the bitmapped version will be used. While this can
     * drastically improve speed and appearance, results are poor when
     * exporting if the sketch does not include the .otf or .ttf file, and the
     * requested font is not available on the machine running the sketch.
     * 
     * ( end auto-generated )
     * @webref typography:loading_displaying
     * @param {string} name name of the font to load
     * @param {number} size point size of the font
     * @param {boolean} smooth true for an antialiased font, false for aliased
     * @param {Array} charset array containing characters to be generated
     * @see PFont
     * @see PGraphics#textFont(PFont, float)
     * @see PGraphics#text(String, float, float, float, float)
     * @see PApplet#loadFont(String)
     * @return {PFont}
     */
    public createFont(name : string, size : number, smooth : boolean, charset : string[]) : PFont;

    static lookAndFeelCheck : boolean;

    /**
     * Initialize the Look & Feel if it hasn't been already.
     * Call this before using any Swing-related code in PApplet methods.
     * @private
     */
    static checkLookAndFeel();

    /**
     * Open a platform-specific file chooser dialog to select a file for input.
     * After the selection is made, the selected File will be passed to the
     * 'callback' function. If the dialog is closed or canceled, null will be
     * sent to the function, so that the program is not waiting for additional
     * input. The callback is necessary because of how threading works.
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
     * methods inside a sketch when run from the PDE, but must explicitly be
     * set when using Eclipse or other development environments.
     * 
     * @webref input:files
     * @param {string} prompt message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    public selectInput(prompt : string, callback : string);

    public selectInput(prompt : string, callback : string, file : java.io.File);

    public selectInput(prompt : string, callback : string, file : java.io.File, callbackObject : any);

    public static selectInput(prompt : string, callbackMethod : string, file : java.io.File, callbackObject : any, parent : java.awt.Frame, sketch : PApplet);

    public static selectInput(prompt : string, callbackMethod : string, file : java.io.File, callbackObject : any, parent : java.awt.Frame);

    /**
     * See selectInput() for details.
     * 
     * @webref output:files
     * @param {string} prompt message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    public selectOutput(prompt : string, callback : string);

    public selectOutput(prompt : string, callback : string, file : java.io.File);

    public selectOutput(prompt : string, callback : string, file : java.io.File, callbackObject : any);

    public static selectOutput(prompt : string, callbackMethod : string, file : java.io.File, callbackObject : any, parent : java.awt.Frame);

    public static selectOutput(prompt : string, callbackMethod : string, file : java.io.File, callbackObject : any, parent : java.awt.Frame, sketch : PApplet);

    static selectImpl(prompt : string, callbackMethod : string, defaultSelection : java.io.File, callbackObject : any, parentFrame : java.awt.Frame, mode : number, sketch : PApplet);

    /**
     * See selectInput() for details.
     * 
     * @webref input:files
     * @param {string} prompt message to the user
     * @param {string} callback name of the method to be called when the selection is made
     */
    public selectFolder(prompt : string, callback : string);

    public selectFolder(prompt : string, callback : string, file : java.io.File);

    public selectFolder(prompt : string, callback : string, file : java.io.File, callbackObject : any);

    public static selectFolder(prompt : string, callbackMethod : string, defaultSelection : java.io.File, callbackObject : any, parentFrame : java.awt.Frame);

    public static selectFolder(prompt : string, callbackMethod : string, defaultSelection : java.io.File, callbackObject : any, parentFrame : java.awt.Frame, sketch : PApplet);

    static selectCallback(selectedFile : java.io.File, callbackMethod : string, callbackObject : any);

    public listPaths(path : string, ...options : string[]) : string[];

    public listFiles(path : string, ...options : string[]) : java.io.File[];

    public static listFiles(base : java.io.File, ...options : string[]) : java.io.File[];

    static listFilesImpl(folder : java.io.File, recursive : boolean, extensions : string[], hidden : boolean, directories : boolean, files : boolean, list : Array<java.io.File>);

    /**
     * Get the compression-free extension for this filename.
     * @param {string} filename The filename to check
     * @return {string} an extension, skipping past .gz if it's present
     */
    public static checkExtension(filename : string) : string;

    /**
     * ( begin auto-generated from createReader.xml )
     * 
     * Creates a <b>BufferedReader</b> object that can be used to read files
     * line-by-line as individual <b>String</b> objects. This is the complement
     * to the <b>createWriter()</b> function.
     * <br/> <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default
     * encoding for your platform was used, which causes problems when files
     * are moved to other platforms.
     * 
     * ( end auto-generated )
     * @webref input:files
     * @param {string} filename name of the file to be opened
     * @see BufferedReader
     * @see PApplet#createWriter(String)
     * @see PrintWriter
     * @return {{ str: string, cursor: number }}
     */
    public createReader(filename : string) : { str: string, cursor: number };

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {{ str: string, cursor: number }}
     */
    public static createReader(file : java.io.File) : { str: string, cursor: number };

    /**
     * @nowebref
     * I want to read lines from a stream. If I have to type the
     * following lines any more I'm gonna send Sun my medical bills.
     * @param {{ str: string, cursor: number }} input
     * @return {{ str: string, cursor: number }}
     */
    public static createReader(input : { str: string, cursor: number }) : { str: string, cursor: number };

    /**
     * ( begin auto-generated from createWriter.xml )
     * 
     * Creates a new file in the sketch folder, and a <b>PrintWriter</b> object
     * to write to it. For the file to be made correctly, it should be flushed
     * and must be closed with its <b>flush()</b> and <b>close()</b> methods
     * (see above example).
     * <br/> <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default
     * encoding for your platform was used, which causes problems when files
     * are moved to other platforms.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename name of the file to be created
     * @see PrintWriter
     * @see PApplet#createReader
     * @see BufferedReader
     * @return {java.io.PrintWriter}
     */
    public createWriter(filename : string) : java.io.PrintWriter;

    /**
     * @nowebref
     * I want to print lines to a file. I have RSI from typing these
     * eight lines of code so many times.
     * @param {java.io.File} file
     * @return {java.io.PrintWriter}
     */
    public static createWriter(file : java.io.File) : java.io.PrintWriter;

    /**
     * @nowebref
     * I want to print lines to a file. Why am I always explaining myself?
     * It's the JavaSoft API engineers who need to explain themselves.
     * @param {java.io.OutputStream} output
     * @return {java.io.PrintWriter}
     */
    public static createWriter(output : java.io.OutputStream) : java.io.PrintWriter;

    /**
     * ( begin auto-generated from createInput.xml )
     * 
     * This is a function for advanced programmers to open a Java InputStream.
     * It's useful if you want to use the facilities provided by PApplet to
     * easily open files from the data folder or from a URL, but want an
     * InputStream object so that you can use other parts of Java to take more
     * control of how the stream is read.<br />
     * <br />
     * The filename passed in can be:<br />
     * - A URL, for instance <b>openStream("http://processing.org/")</b><br />
     * - A file in the sketch's <b>data</b> folder<br />
     * - The full path to a file to be opened locally (when running as an
     * application)<br />
     * <br />
     * If the requested item doesn't exist, null is returned. If not online,
     * this will also check to see if the user is asking for a file whose name
     * isn't properly capitalized. If capitalization is different, an error
     * will be printed to the console. This helps prevent issues that appear
     * when a sketch is exported to the web, where case sensitivity matters, as
     * opposed to running from inside the Processing Development Environment on
     * Windows or Mac OS, where case sensitivity is preserved but ignored.<br />
     * <br />
     * If the file ends with <b>.gz</b>, the stream will automatically be gzip
     * decompressed. If you don't want the automatic decompression, use the
     * related function <b>createInputRaw()</b>.
     * <br />
     * In earlier releases, this function was called <b>openStream()</b>.<br />
     * <br />
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Simplified method to open a Java InputStream.
     * <p>
     * This method is useful if you want to use the facilities provided
     * by PApplet to easily open things from the data folder or from a URL,
     * but want an InputStream object so that you can use other Java
     * methods to take more control of how the stream is read.
     * <p>
     * If the requested item doesn't exist, null is returned.
     * (Prior to 0096, die() would be called, killing the applet)
     * <p>
     * For 0096+, the "data" folder is exported intact with subfolders,
     * and openStream() properly handles subdirectories from the data folder
     * <p>
     * If not online, this will also check to see if the user is asking
     * for a file whose name isn't properly capitalized. This helps prevent
     * issues when a sketch is exported to the web, where case sensitivity
     * matters, as opposed to Windows and the Mac OS default where
     * case sensitivity is preserved but ignored.
     * <p>
     * It is strongly recommended that libraries use this method to open
     * data files, so that the loading sequence is handled in the same way
     * as functions like loadBytes(), loadImage(), etc.
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
     * @return {{ str: string, cursor: number }}
     */
    public createInput(filename : string) : { str: string, cursor: number };

    /**
     * Call openStream() without automatic gzip decompression.
     * @param {string} filename
     * @return {{ str: string, cursor: number }}
     */
    public createInputRaw(filename : string) : { str: string, cursor: number };

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {{ str: string, cursor: number }}
     */
    public static createInput(file : java.io.File) : { str: string, cursor: number };

    /**
     * ( begin auto-generated from loadBytes.xml )
     * 
     * Reads the contents of a file or url and places it in a byte array. If a
     * file is specified, it must be located in the sketch's "data"
     * directory/folder.<br />
     * <br />
     * The filename parameter can also be a URL to a file found online. For
     * security reasons, a Processing sketch found online can only download
     * files from the same server from which it came. Getting around this
     * restriction requires a <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</a>.
     * 
     * ( end auto-generated )
     * @webref input:files
     * @param {string} filename name of a file in the data folder or a URL.
     * @see PApplet#loadStrings(String)
     * @see PApplet#saveStrings(String, String[])
     * @see PApplet#saveBytes(String, byte[])
     * @return {Array}
     */
    public loadBytes(filename : string) : number[];

    /**
     * @nowebref
     * @param {{ str: string, cursor: number }} input
     * @return {Array}
     */
    public static loadBytes(input : { str: string, cursor: number }) : number[];

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {Array}
     */
    public static loadBytes(file : java.io.File) : number[];

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {Array}
     */
    public static loadStrings(file : java.io.File) : string[];

    /**
     * ( begin auto-generated from loadStrings.xml )
     * 
     * Reads the contents of a file or url and creates a String array of its
     * individual lines. If a file is specified, it must be located in the
     * sketch's "data" directory/folder.<br />
     * <br />
     * The filename parameter can also be a URL to a file found online. For
     * security reasons, a Processing sketch found online can only download
     * files from the same server from which it came. Getting around this
     * restriction requires a <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</a>.
     * <br />
     * If the file is not available or an error occurs, <b>null</b> will be
     * returned and an error message will be printed to the console. The error
     * message does not halt the program, however the null value may cause a
     * NullPointerException if your code does not check whether the value
     * returned is null.
     * <br/> <br/>
     * Starting with Processing release 0134, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default
     * encoding for your platform was used, which causes problems when files
     * are moved to other platforms.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Load data from a file and shove it into a String array.
     * <p>
     * Exceptions are handled internally, when an error, occurs, an
     * exception is printed to the console and 'null' is returned,
     * but the program continues running. This is a tradeoff between
     * 1) showing the user that there was a problem but 2) not requiring
     * that all i/o code is contained in try/catch blocks, for the sake
     * of new users (or people who are just trying to get things done
     * in a "scripting" fashion. If you want to handle exceptions,
     * use Java methods for I/O.
     * 
     * @webref input:files
     * @param {string} filename name of the file or url to load
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveStrings(String, String[])
     * @see PApplet#saveBytes(String, byte[])
     * @return {Array}
     */
    public loadStrings(filename : string) : string[];

    /**
     * @nowebref
     * @param {{ str: string, cursor: number }} input
     * @return {Array}
     */
    public static loadStrings(input : { str: string, cursor: number }) : string[];

    public static loadStrings(reader : { str: string, cursor: number }) : string[];

    /**
     * ( begin auto-generated from createOutput.xml )
     * 
     * Similar to <b>createInput()</b>, this creates a Java <b>OutputStream</b>
     * for a given filename or path. The file will be created in the sketch
     * folder, or in the same folder as an exported application.
     * <br /><br />
     * If the path does not exist, intermediate folders will be created. If an
     * exception occurs, it will be printed to the console, and <b>null</b>
     * will be returned.
     * <br /><br />
     * This function is a convenience over the Java approach that requires you
     * to 1) create a FileOutputStream object, 2) determine the exact file
     * location, and 3) handle exceptions. Exceptions are handled internally by
     * the function, which is more appropriate for "sketch" projects.
     * <br /><br />
     * If the output filename ends with <b>.gz</b>, the output will be
     * automatically GZIP compressed as it is written.
     * 
     * ( end auto-generated )
     * @webref output:files
     * @param {string} filename name of the file to open
     * @see PApplet#createInput(String)
     * @see PApplet#selectOutput(String,String)
     * @return {java.io.OutputStream}
     */
    public createOutput(filename : string) : java.io.OutputStream;

    /**
     * @nowebref
     * @param {java.io.File} file
     * @return {java.io.OutputStream}
     */
    public static createOutput(file : java.io.File) : java.io.OutputStream;

    /**
     * ( begin auto-generated from saveStream.xml )
     * 
     * Save the contents of a stream to a file in the sketch folder. This is
     * basically <b>saveBytes(blah, loadBytes())</b>, but done more efficiently
     * (and with less confusing syntax).<br />
     * <br />
     * When using the <b>targetFile</b> parameter, it writes to a <b>File</b>
     * object for greater control over the file location. (Note that unlike
     * some other functions, this will not automatically compress or uncompress
     * gzip files.)
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} target name of the file to write to
     * @param {string} source location to read from (a filename, path, or URL)
     * @see PApplet#createOutput(String)
     * @return {boolean}
     */
    public saveStream(target : string, source : string) : boolean;

    /**
     * Identical to the other saveStream(), but writes to a File
     * object, for greater control over the file location.
     * <p/>
     * Note that unlike other api methods, this will not automatically
     * compress or uncompress gzip files.
     * @param {java.io.File} target
     * @param {string} source
     * @return {boolean}
     */
    public saveStream(target : java.io.File, source : string) : boolean;

    /**
     * @nowebref
     * @param {string} target
     * @param {{ str: string, cursor: number }} source
     * @return {boolean}
     */
    public saveStream(target : string, source : { str: string, cursor: number }) : boolean;

    /**
     * @nowebref
     * @param {java.io.File} target
     * @param {{ str: string, cursor: number }} source
     * @return {boolean}
     */
    public static saveStream(target : java.io.File, source : { str: string, cursor: number }) : boolean;

    /**
     * @nowebref
     * @param {java.io.OutputStream} target
     * @param {{ str: string, cursor: number }} source
     */
    public static saveStream(target : java.io.OutputStream, source : { str: string, cursor: number });

    /**
     * ( begin auto-generated from saveBytes.xml )
     * 
     * Opposite of <b>loadBytes()</b>, will write an entire array of bytes to a
     * file. The data is saved in binary format. This file is saved to the
     * sketch's folder, which is opened by selecting "Show sketch folder" from
     * the "Sketch" menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser
     * unless the sketch is <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</A>. To
     * save a file back to a server, see the <a
     * href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} filename name of the file to write to
     * @param {Array} data array of bytes to be written
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveStrings(String, String[])
     */
    public saveBytes(filename : string, data : number[]);

    /**
     * Creates a temporary file based on the name/extension of another file
     * and in the same parent directory. Ensures that the same extension is used
     * (i.e. so that .gz files are gzip compressed on output) and that it's done
     * from the same directory so that renaming the file later won't cross file
     * system boundaries.
     * @param {java.io.File} file
     * @return {java.io.File}
     * @private
     */
    static createTempFile(file : java.io.File) : java.io.File;

    /**
     * @nowebref
     * Saves bytes to a specific File location specified by the user.
     * @param {java.io.File} file
     * @param {Array} data
     */
    public static saveBytes(file : java.io.File, data : number[]);

    /**
     * @nowebref
     * Spews a buffer of bytes to an OutputStream.
     * @param {java.io.OutputStream} output
     * @param {Array} data
     */
    public static saveBytes(output : java.io.OutputStream, data : number[]);

    /**
     * ( begin auto-generated from saveStrings.xml )
     * 
     * Writes an array of strings to a file, one line per string. This file is
     * saved to the sketch's folder, which is opened by selecting "Show sketch
     * folder" from the "Sketch" menu.<br />
     * <br />
     * It is not possible to use saveXxxxx() functions inside a web browser
     * unless the sketch is <a
     * href="http://wiki.processing.org/w/Sign_an_Applet">signed applet</A>. To
     * save a file back to a server, see the <a
     * href="http://wiki.processing.org/w/Saving_files_to_a_web-server">save to
     * web</A> code snippet on the Processing Wiki.<br/>
     * <br/ >
     * Starting with Processing 1.0, all files loaded and saved by the
     * Processing API use UTF-8 encoding. In previous releases, the default
     * encoding for your platform was used, which causes problems when files
     * are moved to other platforms.
     * 
     * ( end auto-generated )
     * @webref output:files
     * @param {string} filename filename for output
     * @param {Array} data string array to be written
     * @see PApplet#loadStrings(String)
     * @see PApplet#loadBytes(String)
     * @see PApplet#saveBytes(String, byte[])
     */
    public saveStrings(filename : string, data : string[]);

    /**
     * @nowebref
     * @param {java.io.File} file
     * @param {Array} data
     */
    public static saveStrings(file : java.io.File, data : string[]);

    /**
     * @nowebref
     * @param {java.io.OutputStream} output
     * @param {Array} data
     */
    public static saveStrings(output : java.io.OutputStream, data : string[]);

    static calcSketchPath() : string;

    public sketchFile(where : string) : java.io.File;

    /**
     * Returns a path inside the applet folder to save to. Like sketchPath(),
     * but creates any in-between folders so that things save properly.
     * <p/>
     * All saveXxxx() functions use the path to the sketch folder, rather than
     * its data folder. Once exported, the data folder will be found inside the
     * jar file of the exported application or applet. In this case, it's not
     * possible to save data into the jar file, because it will often be running
     * from a server, or marked in-use if running from a local file system.
     * With this in mind, saving to the data path doesn't make sense anyway.
     * If you know you're running locally, and want to save to the data folder,
     * use <TT>saveXxxx("data/blah.dat")</TT>.
     * @param {string} where
     * @return {string}
     */
    public savePath(where : string) : string;

    /**
     * Identical to savePath(), but returns a File object.
     * @param {string} where
     * @return {java.io.File}
     */
    public saveFile(where : string) : java.io.File;

    static desktopFolder : java.io.File;

    /**
     * Not a supported function. For testing use only.
     * @param {string} what
     * @return {java.io.File}
     */
    public static desktopFile(what : string) : java.io.File;

    /**
     * Not a supported function. For testing use only.
     * @param {string} what
     * @return {string}
     */
    public static desktopPath(what : string) : string;

    /**
     * <b>This function almost certainly does not do the thing you want it to.</b>
     * The data path is handled differently on each platform, and should not be
     * considered a location to write files. It should also not be assumed that
     * this location can be read from or listed. This function is used internally
     * as a possible location for reading files. It's still "public" as a
     * holdover from earlier code.
     * <p>
     * Libraries should use createInput() to get an InputStream or createOutput()
     * to get an OutputStream. sketchPath() can be used to get a location
     * relative to the sketch. Again, <b>do not</b> use this to get relative
     * locations of files. You'll be disappointed when your app runs on different
     * platforms.
     * @param {string} where
     * @return {string}
     */
    public dataPath(where : string) : string;

    /**
     * Return a full path to an item in the data folder as a File object.
     * See the dataPath() method for more information.
     * @param {string} where
     * @return {java.io.File}
     */
    public dataFile(where : string) : java.io.File;

    /**
     * Takes a path and creates any in-between folders if they don't
     * already exist. Useful when trying to save to a subfolder that
     * may not actually exist.
     * @param {string} path
     */
    public static createPath(path : string);

    public static createPath(file : java.io.File);

    public static getExtension(filename : string) : string;

    public static urlEncode(str : string) : string;

    public static urlDecode(str : string) : string;

    /**
     * ( begin auto-generated from sort.xml )
     * 
     * Sorts an array of numbers from smallest to largest and puts an array of
     * words in alphabetical order. The original array is not modified, a
     * re-ordered array is returned. The <b>count</b> parameter states the
     * number of elements to sort. For example if there are 12 elements in an
     * array and if count is the value 5, only the first five elements on the
     * array will be sorted. <!--As of release 0126, the alphabetical ordering
     * is case insensitive.-->
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {Array} list array to sort
     * @see PApplet#reverse(boolean[])
     * @return {Array}
     */
    public static sort(list : number[]) : number[];

    /**
     * @param {number} count number of elements to sort, starting from 0
     * @param {Array} list
     * @return {Array}
     */
    public static sort(list : number[], count : number) : number[];

    public static sort(list : string[]) : string[];

    public static sort(list : string[], count : number) : string[];

    public static sort(list : number[]) : number[];

    public static sort(list : number[], count : number) : number[];

    public static sort(list : number[]) : number[];

    public static sort(list : number[], count : number) : number[];

    public static sort(list : string[]) : string[];

    public static sort(list : string[], count : number) : string[];

    /**
     * ( begin auto-generated from arrayCopy.xml )
     * 
     * Copies an array (or part of an array) to another array. The <b>src</b>
     * array is copied to the <b>dst</b> array, beginning at the position
     * specified by <b>srcPos</b> and into the position specified by
     * <b>dstPos</b>. The number of elements to copy is determined by
     * <b>length</b>. The simplified version with two arguments copies an
     * entire array to another of the same size. It is equivalent to
     * "arrayCopy(src, 0, dst, 0, src.length)". This function is far more
     * efficient for copying array data than iterating through a <b>for</b> and
     * copying each element.
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {*} src the source array
     * @param {number} srcPosition starting position in the source array
     * @param {*} dst the destination array of the same data type as the source array
     * @param {number} dstPosition starting position in the destination array
     * @param {number} length number of array elements to be copied
     * @see PApplet#concat(boolean[], boolean[])
     */
    public static arrayCopy(src : any, srcPosition : number, dst : any, dstPosition : number, length : number);

    /**
     * Convenience method for arraycopy().
     * Identical to <CODE>arraycopy(src, 0, dst, 0, length);</CODE>
     * @param {*} src
     * @param {*} dst
     * @param {number} length
     */
    public static arrayCopy(src : any, dst : any, length : number);

    /**
     * Shortcut to copy the entire contents of
     * the source into the destination array.
     * Identical to <CODE>arraycopy(src, 0, dst, 0, src.length);</CODE>
     * @param {*} src
     * @param {*} dst
     */
    public static arrayCopy(src : any, dst : any);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {number} srcPosition
     * @param {*} dst
     * @param {number} dstPosition
     * @param {number} length
     */
    public static arraycopy(src : any, srcPosition : number, dst : any, dstPosition : number, length : number);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {*} dst
     * @param {number} length
     */
    public static arraycopy(src : any, dst : any, length : number);

    /**
     * @deprecated Use arrayCopy() instead.
     * @param {*} src
     * @param {*} dst
     */
    public static arraycopy(src : any, dst : any);

    /**
     * ( begin auto-generated from expand.xml )
     * 
     * Increases the size of an array. By default, this function doubles the
     * size of the array, but the optional <b>newSize</b> parameter provides
     * precise control over the increase in size.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) expand(originalArray)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list the array to expand
     * @see PApplet#shorten(boolean[])
     * @return {Array}
     */
    public static expand(list : boolean[]) : boolean[];

    /**
     * @param {number} newSize new size for the array
     * @param {Array} list
     * @return {Array}
     */
    public static expand(list : boolean[], newSize : number) : boolean[];

    public static expand(list : number[]) : number[];

    public static expand(list : number[], newSize : number) : number[];

    public static expand(list : string[]) : string[];

    public static expand(list : string[], newSize : number) : string[];

    public static expand(list : number[]) : number[];

    public static expand(list : number[], newSize : number) : number[];

    public static expand(list : number[]) : number[];

    public static expand(list : number[], newSize : number) : number[];

    public static expand(list : number[]) : number[];

    public static expand(list : number[], newSize : number) : number[];

    public static expand(list : number[]) : number[];

    public static expand(list : number[], newSize : number) : number[];

    public static expand(list : string[]) : string[];

    public static expand(list : string[], newSize : number) : string[];

    /**
     * @nowebref
     * @param {*} array
     * @return {*}
     */
    public static expand(array : any) : any;

    public static expand(list : any, newSize : number) : any;

    /**
     * ( begin auto-generated from append.xml )
     * 
     * Expands an array by one element and adds data to the new position. The
     * datatype of the <b>element</b> parameter must be the same as the
     * datatype of the array.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) append(originalArray, element)</em>.
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
    public static append(array : number[], value : number) : number[];

    public static append(array : string[], value : string) : string[];

    public static append(array : number[], value : number) : number[];

    public static append(array : number[], value : number) : number[];

    public static append(array : string[], value : string) : string[];

    public static append(array : any, value : any) : any;

    /**
     * ( begin auto-generated from shorten.xml )
     * 
     * Decreases an array by one element and returns the shortened array.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) shorten(originalArray)</em>.
     * 
     * ( end auto-generated )
     * 
     * @webref data:array_functions
     * @param {Array} list array to shorten
     * @see PApplet#append(byte[], byte)
     * @see PApplet#expand(boolean[])
     * @return {Array}
     */
    public static shorten(list : boolean[]) : boolean[];

    public static shorten(list : number[]) : number[];

    public static shorten(list : string[]) : string[];

    public static shorten(list : number[]) : number[];

    public static shorten(list : number[]) : number[];

    public static shorten(list : string[]) : string[];

    public static shorten(list : any) : any;

    /**
     * ( begin auto-generated from splice.xml )
     * 
     * Inserts a value or array of values into an existing array. The first two
     * parameters must be of the same datatype. The <b>array</b> parameter
     * defines the array which will be modified and the second parameter
     * defines the data which will be inserted.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) splice(array1, array2, index)</em>.
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {Array} list array to splice into
     * @param {boolean} value value to be spliced in
     * @param {number} index position in the array from which to insert data
     * @see PApplet#concat(boolean[], boolean[])
     * @see PApplet#subset(boolean[], int, int)
     * @return {Array}
     */
    public static splice(list : boolean[], value : boolean, index : number) : boolean[];

    public static splice(list : boolean[], value : boolean[], index : number) : boolean[];

    public static splice(list : number[], value : number, index : number) : number[];

    public static splice(list : number[], value : number[], index : number) : number[];

    public static splice(list : string[], value : string, index : number) : string[];

    public static splice(list : string[], value : string[], index : number) : string[];

    public static splice(list : number[], value : number, index : number) : number[];

    public static splice(list : number[], value : number[], index : number) : number[];

    public static splice(list : number[], value : number, index : number) : number[];

    public static splice(list : number[], value : number[], index : number) : number[];

    public static splice(list : string[], value : string, index : number) : string[];

    public static splice(list : string[], value : string[], index : number) : string[];

    public static splice(list : any, value : any, index : number) : any;

    public static subset(list : boolean[], start : number) : boolean[];

    /**
     * ( begin auto-generated from subset.xml )
     * 
     * Extracts an array of elements from an existing array. The <b>array</b>
     * parameter defines the array from which the elements will be copied and
     * the <b>offset</b> and <b>length</b> parameters determine which elements
     * to extract. If no <b>length</b> is given, elements will be extracted
     * from the <b>offset</b> to the end of the array. When specifying the
     * <b>offset</b> remember the first array element is 0. This function does
     * not change the source array.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) subset(originalArray, 0, 4)</em>.
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {Array} list array to extract from
     * @param {number} start position to begin
     * @param {number} count number of values to extract
     * @see PApplet#splice(boolean[], boolean, int)
     * @return {Array}
     */
    public static subset(list : boolean[], start : number, count : number) : boolean[];

    public static subset(list : number[], start : number) : number[];

    public static subset(list : number[], start : number, count : number) : number[];

    public static subset(list : string[], start : number) : string[];

    public static subset(list : string[], start : number, count : number) : string[];

    public static subset(list : number[], start : number) : number[];

    public static subset(list : number[], start : number, count : number) : number[];

    public static subset(list : number[], start : number) : number[];

    public static subset(list : number[], start : number, count : number) : number[];

    public static subset(list : string[], start : number) : string[];

    public static subset(list : string[], start : number, count : number) : string[];

    public static subset(list : any, start : number) : any;

    public static subset(list : any, start : number, count : number) : any;

    /**
     * ( begin auto-generated from concat.xml )
     * 
     * Concatenates two arrays. For example, concatenating the array { 1, 2, 3
     * } and the array { 4, 5, 6 } yields { 1, 2, 3, 4, 5, 6 }. Both parameters
     * must be arrays of the same datatype.
     * <br/> <br/>
     * When using an array of objects, the data returned from the function must
     * be cast to the object array's data type. For example: <em>SomeClass[]
     * items = (SomeClass[]) concat(array1, array2)</em>.
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {Array} a first array to concatenate
     * @param {Array} b second array to concatenate
     * @see PApplet#splice(boolean[], boolean, int)
     * @see PApplet#arrayCopy(Object, int, Object, int, int)
     * @return {Array}
     */
    public static concat(a : boolean[], b : boolean[]) : boolean[];

    public static concat(a : number[], b : number[]) : number[];

    public static concat(a : string[], b : string[]) : string[];

    public static concat(a : number[], b : number[]) : number[];

    public static concat(a : number[], b : number[]) : number[];

    public static concat(a : string[], b : string[]) : string[];

    public static concat(a : any, b : any) : any;

    /**
     * ( begin auto-generated from reverse.xml )
     * 
     * Reverses the order of an array.
     * 
     * ( end auto-generated )
     * @webref data:array_functions
     * @param {Array} list booleans[], bytes[], chars[], ints[], floats[], or Strings[]
     * @see PApplet#sort(String[], int)
     * @return {Array}
     */
    public static reverse(list : boolean[]) : boolean[];

    public static reverse(list : number[]) : number[];

    public static reverse(list : string[]) : string[];

    public static reverse(list : number[]) : number[];

    public static reverse(list : number[]) : number[];

    public static reverse(list : string[]) : string[];

    public static reverse(list : any) : any;

    /**
     * ( begin auto-generated from trim.xml )
     * 
     * Removes whitespace characters from the beginning and end of a String. In
     * addition to standard whitespace characters such as space, carriage
     * return, and tab, this function also removes the Unicode "nbsp" character.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {string} str any string
     * @see PApplet#split(String, String)
     * @see PApplet#join(String[], char)
     * @return {string}
     */
    public static trim(str : string) : string;

    /**
     * @param {Array} array a String array
     * @return {Array}
     */
    public static trim(array : string[]) : string[];

    /**
     * ( begin auto-generated from join.xml )
     * 
     * Combines an array of Strings into one String, each separated by the
     * character(s) used for the <b>separator</b> parameter. To join arrays of
     * ints or floats, it's necessary to first convert them to strings using
     * <b>nf()</b> or <b>nfs()</b>.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {Array} list array of Strings
     * @param {string} separator char or String to be placed between each item
     * @see PApplet#split(String, String)
     * @see PApplet#trim(String)
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @return {string}
     */
    public static join(list : string[], separator : string) : string;

    public static join(list : string[], separator : string) : string;

    public static splitTokens(value : string) : string[];

    /**
     * ( begin auto-generated from splitTokens.xml )
     * 
     * The splitTokens() function splits a String at one or many character
     * "tokens." The <b>tokens</b> parameter specifies the character or
     * characters to be used as a boundary.
     * <br/> <br/>
     * If no <b>tokens</b> character is specified, any whitespace character is
     * used to split. Whitespace characters include tab (\\t), line feed (\\n),
     * carriage return (\\r), form feed (\\f), and space. To convert a String
     * to an array of integers or floats, use the datatype conversion functions
     * <b>int()</b> and <b>float()</b> to convert the array of Strings.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {string} value the String to be split
     * @param {string} delim list of individual characters that will be used as separators
     * @see PApplet#split(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    public static splitTokens(value : string, delim : string) : string[];

    /**
     * ( begin auto-generated from split.xml )
     * 
     * The split() function breaks a string into pieces using a character or
     * string as the divider. The <b>delim</b> parameter specifies the
     * character or characters that mark the boundaries between each piece. A
     * String[] array is returned that contains each of the pieces.
     * <br/> <br/>
     * If the result is a set of numbers, you can convert the String[] array to
     * to a float[] or int[] array using the datatype conversion functions
     * <b>int()</b> and <b>float()</b> (see example above).
     * <br/> <br/>
     * The <b>splitTokens()</b> function works in a similar fashion, except
     * that it splits using a range of characters instead of a specific
     * character or sequence.
     * <!-- /><br />
     * This function uses regular expressions to determine how the <b>delim</b>
     * parameter divides the <b>str</b> parameter. Therefore, if you use
     * characters such parentheses and brackets that are used with regular
     * expressions as a part of the <b>delim</b> parameter, you'll need to put
     * two blackslashes (\\\\) in front of the character (see example above).
     * You can read more about <a
     * href="http://en.wikipedia.org/wiki/Regular_expression">regular
     * expressions</a> and <a
     * href="http://en.wikipedia.org/wiki/Escape_character">escape
     * characters</a> on Wikipedia.
     * -->
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @usage web_application
     * @param {string} value the String to be split
     * @param {string} delim the character or String used to separate the data
     * @return {Array}
     */
    public static split(value : string, delim : string) : string[];

    public static split(value : string, delim : string) : string[];

    static matchPatterns : any;

    static matchPattern(regexp : string) : java.util.regex.Pattern;

    /**
     * ( begin auto-generated from match.xml )
     * 
     * The match() function is used to apply a regular expression to a piece of
     * text, and return matching groups (elements found inside parentheses) as
     * a String array. No match will return null. If no groups are specified in
     * the regexp, but the sequence matches, an array of length one (with the
     * matched text as the first element of the array) will be returned.<br />
     * <br />
     * To use the function, first check to see if the result is null. If the
     * result is null, then the sequence did not match. If the sequence did
     * match, an array is returned.
     * If there are groups (specified by sets of parentheses) in the regexp,
     * then the contents of each will be returned in the array.
     * Element [0] of a regexp match returns the entire matching string, and
     * the match groups start at element [1] (the first group is [1], the
     * second [2], and so on).<br />
     * <br />
     * The syntax can be found in the reference for Java's <a
     * href="http://download.oracle.com/javase/6/docs/api/">Pattern</a> class.
     * For regular expression syntax, read the <a
     * href="http://download.oracle.com/javase/tutorial/essential/regex/">Java
     * Tutorial</a> on the topic.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {string} str the String to be searched
     * @param {string} regexp the regexp to be used for matching
     * @see PApplet#matchAll(String, String)
     * @see PApplet#split(String, String)
     * @see PApplet#splitTokens(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    public static match(str : string, regexp : string) : string[];

    /**
     * ( begin auto-generated from matchAll.xml )
     * 
     * This function is used to apply a regular expression to a piece of text,
     * and return a list of matching groups (elements found inside parentheses)
     * as a two-dimensional String array. No matches will return null. If no
     * groups are specified in the regexp, but the sequence matches, a two
     * dimensional array is still returned, but the second dimension is only of
     * length one.<br />
     * <br />
     * To use the function, first check to see if the result is null. If the
     * result is null, then the sequence did not match at all. If the sequence
     * did match, a 2D array is returned. If there are groups (specified by
     * sets of parentheses) in the regexp, then the contents of each will be
     * returned in the array.
     * Assuming, a loop with counter variable i, element [i][0] of a regexp
     * match returns the entire matching string, and the match groups start at
     * element [i][1] (the first group is [i][1], the second [i][2], and so
     * on).<br />
     * <br />
     * The syntax can be found in the reference for Java's <a
     * href="http://download.oracle.com/javase/6/docs/api/">Pattern</a> class.
     * For regular expression syntax, read the <a
     * href="http://download.oracle.com/javase/tutorial/essential/regex/">Java
     * Tutorial</a> on the topic.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {string} str the String to be searched
     * @param {string} regexp the regexp to be used for matching
     * @see PApplet#match(String, String)
     * @see PApplet#split(String, String)
     * @see PApplet#splitTokens(String, String)
     * @see PApplet#join(String[], String)
     * @see PApplet#trim(String)
     * @return {Array}
     */
    public static matchAll(str : string, regexp : string) : string[][];

    /**
     * <p>Convert an integer to a boolean. Because of how Java handles upgrading
     * numbers, this will also cover byte and char (as they will upgrade to
     * an int without any sort of explicit cast).</p>
     * <p>The preprocessor will convert boolean(what) to parseBoolean(what).</p>
     * @return {boolean} false if 0, true if any other number
     * @param {number} what
     */
    public static parseBoolean(what : number) : boolean;

    /**
     * Convert the string "true" or "false" to a boolean.
     * @return {boolean} true if 'what' is "true" or "TRUE", false otherwise
     * @param {string} what
     */
    public static parseBoolean(what : string) : boolean;

    /**
     * Convert an int array to a boolean array. An int equal
     * to zero will return false, and any other value will return true.
     * @return {Array} array of boolean elements
     * @param {Array} what
     */
    public static parseBoolean(what : number[]) : boolean[];

    public static parseBoolean(what : string[]) : boolean[];

    public static parseByte(what : boolean) : number;

    public static parseByte(what : string) : number;

    public static parseByte(what : number) : number;

    public static parseByte(what : number) : number;

    public static parseByte(what : boolean[]) : number[];

    public static parseByte(what : string[]) : number[];

    public static parseByte(what : number[]) : number[];

    public static parseByte(what : number[]) : number[];

    public static parseChar(what : number) : string;

    public static parseChar(what : number) : string;

    public static parseChar(what : number[]) : string[];

    public static parseChar(what : number[]) : string[];

    public static parseInt(what : boolean) : number;

    /**
     * Note that parseInt() will un-sign a signed byte value.
     * @param {number} what
     * @return {number}
     */
    public static parseInt(what : number) : number;

    /**
     * Note that parseInt('5') is unlike String in the sense that it
     * won't return 5, but the ascii value. This is because ((int) someChar)
     * returns the ascii value, and parseInt() is just longhand for the cast.
     * @param {string} what
     * @return {number}
     */
    public static parseInt(what : string) : number;

    /**
     * Same as floor(), or an (int) cast.
     * @param {number} what
     * @return {number}
     */
    public static parseInt(what : number) : number;

    /**
     * Parse a String into an int value. Returns 0 if the value is bad.
     * @param {string} what
     * @return {number}
     */
    public static parseInt(what : string) : number;

    /**
     * Parse a String to an int, and provide an alternate value that
     * should be used when the number is invalid.
     * @param {string} what
     * @param {number} otherwise
     * @return {number}
     */
    public static parseInt(what : string, otherwise : number) : number;

    public static parseInt(what : boolean[]) : number[];

    public static parseInt(what : number[]) : number[];

    public static parseInt(what : string[]) : number[];

    public static parseInt(what : number[]) : number[];

    /**
     * Make an array of int elements from an array of String objects.
     * If the String can't be parsed as a number, it will be set to zero.
     * 
     * String s[] = { "1", "300", "44" };
     * int numbers[] = parseInt(s);
     * 
     * numbers will contain { 1, 300, 44 }
     * @param {Array} what
     * @return {Array}
     */
    public static parseInt(what : string[]) : number[];

    /**
     * Make an array of int elements from an array of String objects.
     * If the String can't be parsed as a number, its entry in the
     * array will be set to the value of the "missing" parameter.
     * 
     * String s[] = { "1", "300", "apple", "44" };
     * int numbers[] = parseInt(s, 9999);
     * 
     * numbers will contain { 1, 300, 9999, 44 }
     * @param {Array} what
     * @param {number} missing
     * @return {Array}
     */
    public static parseInt(what : string[], missing : number) : number[];

    /**
     * Convert an int to a float value. Also handles bytes because of
     * Java's rules for upgrading values.
     * @param {number} what
     * @return {number}
     */
    public static parseFloat(what : number) : number;

    public static parseFloat(what : string) : number;

    public static parseFloat(what : string, otherwise : number) : number;

    public static parseFloat(what : number[]) : number[];

    public static parseFloat(what : number[]) : number[];

    public static parseFloat(what : string[]) : number[];

    public static parseFloat(what : string[], missing : number) : number[];

    public static str(x : boolean) : string;

    public static str(x : number) : string;

    public static str(x : string) : string;

    public static str(x : number) : string;

    public static str(x : number) : string;

    public static str(x : boolean[]) : string[];

    public static str(x : number[]) : string[];

    public static str(x : string[]) : string[];

    public static str(x : number[]) : string[];

    public static str(x : number[]) : string[];

    public static nf(num : number) : string;

    public static nf(nums : number[]) : string[];

    /**
     * Integer number formatter.
     */
    static int_nf : java.text.NumberFormat;

    static int_nf_digits : number;

    static int_nf_commas : boolean;

    /**
     * ( begin auto-generated from nf.xml )
     * 
     * Utility function for formatting numbers into strings. There are two
     * versions, one for formatting floats and one for formatting ints. The
     * values for the <b>digits</b>, <b>left</b>, and <b>right</b> parameters
     * should always be positive integers.<br /><br />As shown in the above
     * example, <b>nf()</b> is used to add zeros to the left and/or right of a
     * number. This is typically for aligning a list of numbers. To
     * <em>remove</em> digits from a floating-point number, use the
     * <b>int()</b>, <b>ceil()</b>, <b>floor()</b>, or <b>round()</b>
     * functions.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {Array} nums the numbers to format
     * @param {number} digits number of digits to pad with zero
     * @see PApplet#nfs(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfc(float, int)
     * @see <a href="https://processing.org/reference/intconvert_.html">int(float)</a>
     * @return {Array}
     */
    public static nf(nums : number[], digits : number) : string[];

    /**
     * @param {number} num the number to format
     * @param {number} digits
     * @return {string}
     */
    public static nf(num : number, digits : number) : string;

    /**
     * ( begin auto-generated from nfc.xml )
     * 
     * Utility function for formatting numbers into strings and placing
     * appropriate commas to mark units of 1000. There are two versions, one
     * for formatting ints and one for formatting an array of ints. The value
     * for the <b>digits</b> parameter should always be a positive integer.
     * <br/><br/>
     * For a non-US locale, this will insert periods instead of commas, or
     * whatever is apprioriate for that region.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {Array} nums the numbers to format
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @return {Array}
     */
    public static nfc(nums : number[]) : string[];

    /**
     * @param {number} num the number to format
     * @return {string}
     */
    public static nfc(num : number) : string;

    /**
     * ( begin auto-generated from nfs.xml )
     * 
     * Utility function for formatting numbers into strings. Similar to
     * <b>nf()</b> but leaves a blank space in front of positive numbers so
     * they align with negative numbers in spite of the minus symbol. There are
     * two versions, one for formatting floats and one for formatting ints. The
     * values for the <b>digits</b>, <b>left</b>, and <b>right</b> parameters
     * should always be positive integers.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {number} num the number to format
     * @param {number} digits number of digits to pad with zeroes
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfp(float, int, int)
     * @see PApplet#nfc(float, int)
     * @return {string}
     */
    public static nfs(num : number, digits : number) : string;

    /**
     * @param {Array} nums the numbers to format
     * @param {number} digits
     * @return {Array}
     */
    public static nfs(nums : number[], digits : number) : string[];

    /**
     * ( begin auto-generated from nfp.xml )
     * 
     * Utility function for formatting numbers into strings. Similar to
     * <b>nf()</b> but puts a "+" in front of positive numbers and a "-" in
     * front of negative numbers. There are two versions, one for formatting
     * floats and one for formatting ints. The values for the <b>digits</b>,
     * <b>left</b>, and <b>right</b> parameters should always be positive integers.
     * 
     * ( end auto-generated )
     * @webref data:string_functions
     * @param {number} num the number to format
     * @param {number} digits number of digits to pad with zeroes
     * @see PApplet#nf(float, int, int)
     * @see PApplet#nfs(float, int, int)
     * @see PApplet#nfc(float, int)
     * @return {string}
     */
    public static nfp(num : number, digits : number) : string;

    /**
     * @param {Array} nums the numbers to format
     * @param {number} digits
     * @return {Array}
     */
    public static nfp(nums : number[], digits : number) : string[];

    static float_nf : java.text.NumberFormat;

    static float_nf_left : number;

    static float_nf_right : number;

    static float_nf_commas : boolean;

    /**
     * @param {number} left number of digits to the left of the decimal point
     * @param {number} right number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    public static nf(nums : number[], left : number, right : number) : string[];

    public static nf(num : number, left : number, right : number) : string;

    /**
     * @param {number} right number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    public static nfc(nums : number[], right : number) : string[];

    public static nfc(num : number, right : number) : string;

    /**
     * @param {number} left the number of digits to the left of the decimal point
     * @param {number} right the number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    public static nfs(nums : number[], left : number, right : number) : string[];

    public static nfs(num : number, left : number, right : number) : string;

    /**
     * @param {number} left the number of digits to the left of the decimal point
     * @param {number} right the number of digits to the right of the decimal point
     * @param {Array} nums
     * @return {Array}
     */
    public static nfp(nums : number[], left : number, right : number) : string[];

    public static nfp(num : number, left : number, right : number) : string;

    /**
     * ( begin auto-generated from hex.xml )
     * 
     * Converts a byte, char, int, or color to a String containing the
     * equivalent hexadecimal notation. For example color(0, 102, 153) will
     * convert to the String "FF006699". This function can help make your geeky
     * debugging sessions much happier.
     * <br/> <br/>
     * Note that the maximum number of digits is 8, because an int value can
     * only represent up to 32 bits. Specifying more than eight digits will
     * simply shorten the string to eight anyway.
     * 
     * ( end auto-generated )
     * @webref data:conversion
     * @param {number} value the value to convert
     * @see PApplet#unhex(String)
     * @see PApplet#binary(byte)
     * @see PApplet#unbinary(String)
     * @return {string}
     */
    public static hex(value : number) : string;

    public static hex(value : string) : string;

    public static hex(value : number) : string;

    /**
     * @param {number} digits the number of digits (maximum 8)
     * @param {number} value
     * @return {string}
     */
    public static hex(value : number, digits : number) : string;

    /**
     * ( begin auto-generated from unhex.xml )
     * 
     * Converts a String representation of a hexadecimal number to its
     * equivalent integer value.
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
    public static unhex(value : string) : number;

    /**
     * Returns a String that contains the binary value of a byte.
     * The returned value will always have 8 digits.
     * @param {number} value
     * @return {string}
     */
    public static binary(value : number) : string;

    /**
     * Returns a String that contains the binary value of a char.
     * The returned value will always have 16 digits because chars
     * are two bytes long.
     * @param {string} value
     * @return {string}
     */
    public static binary(value : string) : string;

    /**
     * Returns a String that contains the binary value of an int. The length
     * depends on the size of the number itself. If you want a specific number
     * of digits use binary(int what, int digits) to specify how many.
     * @param {number} value
     * @return {string}
     */
    public static binary(value : number) : string;

    /**
     * ( begin auto-generated from binary.xml )
     * 
     * Converts a byte, char, int, or color to a String containing the
     * equivalent binary notation. For example color(0, 102, 153, 255) will
     * convert to the String "11111111000000000110011010011001". This function
     * can help make your geeky debugging sessions much happier.
     * <br/> <br/>
     * Note that the maximum number of digits is 32, because an int value can
     * only represent up to 32 bits. Specifying more than 32 digits will simply
     * shorten the string to 32 anyway.
     * 
     * ( end auto-generated )
     * @webref data:conversion
     * @param {number} value value to convert
     * @param {number} digits number of digits to return
     * @see PApplet#unbinary(String)
     * @see PApplet#hex(int,int)
     * @see PApplet#unhex(String)
     * @return {string}
     */
    public static binary(value : number, digits : number) : string;

    /**
     * ( begin auto-generated from unbinary.xml )
     * 
     * Converts a String representation of a binary number to its equivalent
     * integer value. For example, unbinary("00001000") will return 8.
     * 
     * ( end auto-generated )
     * @webref data:conversion
     * @param {string} value String to convert to an integer
     * @see PApplet#binary(byte)
     * @see PApplet#hex(int,int)
     * @see PApplet#unhex(String)
     * @return {number}
     */
    public static unbinary(value : string) : number;

    /**
     * ( begin auto-generated from color.xml )
     * 
     * Creates colors for storing in variables of the <b>color</b> datatype.
     * The parameters are interpreted as RGB or HSB values depending on the
     * current <b>colorMode()</b>. The default mode is RGB values from 0 to 255
     * and therefore, the function call <b>color(255, 204, 0)</b> will return a
     * bright yellow color. More about how colors are stored can be found in
     * the reference for the <a href="color_datatype.html">color</a> datatype.
     * 
     * ( end auto-generated )
     * @webref color:creating_reading
     * @param {number} gray number specifying value between white and black
     * @see PApplet#colorMode(int)
     * @return {number}
     */
    public color(gray : number) : number;

    /**
     * @nowebref
     * @param {number} fgray number specifying value between white and black
     * @return {number}
     */
    public color(fgray : number) : number;

    /**
     * As of 0116 this also takes color(#FF8800, alpha)
     * @param {number} alpha relative to current color range
     * @param {number} gray
     * @return {number}
     */
    public color(gray : number, alpha : number) : number;

    /**
     * @nowebref
     * @param {number} fgray
     * @param {number} falpha
     * @return {number}
     */
    public color(fgray : number, falpha : number) : number;

    /**
     * @param {number} v1 red or hue values relative to the current color range
     * @param {number} v2 green or saturation values relative to the current color range
     * @param {number} v3 blue or brightness values relative to the current color range
     * @return {number}
     */
    public color(v1 : number, v2 : number, v3 : number) : number;

    public color(v1 : number, v2 : number, v3 : number, alpha : number) : number;

    public color(v1 : number, v2 : number, v3 : number) : number;

    public color(v1 : number, v2 : number, v3 : number, alpha : number) : number;

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

    public static blendColor(c1 : number, c2 : number, mode : number) : number;

    public frameMoved(x : number, y : number);

    public frameResized(w : number, h : number);

    /**
     * main() method for running this class from the command line.
     * <p>
     * Usage: PApplet [options] &lt;class name&gt; [sketch args]
     * <ul>
     * <li>The [options] are one or several of the parameters seen below.
     * <li>The class name is required. If you're running outside the PDE and
     * your class is in a package, this should include the full name. That means
     * that if the class is called Sketchy and the package is com.sketchycompany
     * then com.sketchycompany.Sketchy should be used as the class name.
     * <li>The [sketch args] are any command line parameters you want to send to
     * the sketch itself. These will be passed into the args[] array in PApplet.
     * <p>
     * The simplest way to turn and sketch into an application is to
     * add the following code to your program:
     * <PRE>static public void main(String args[]) {
     * PApplet.main("YourSketchName");
     * }</PRE>
     * That will properly launch your code from a double-clickable .jar
     * or from the command line.
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
     * @see PApplet#args
     * </PRE>
     * @param {Array} args
     */
    public static main(args : string[]);

    /**
     * Convenience method so that PApplet.main(YourSketch.class)
     * launches a sketch, rather than having to call getName() on it.
     * @param {*} mainClass
     * @param {Array} args
     */
    public static main(mainClass : any, ...args : string[]);

    /**
     * Convenience method so that PApplet.main("YourSketch") launches a sketch,
     * rather than having to wrap it into a single element String array.
     * @param {string} mainClass name of the class to load (with package if any)
     */
    public static main(mainClass : string);

    /**
     * Convenience method so that PApplet.main("YourSketch", args) launches a
     * sketch, rather than having to wrap it into a String array, and appending
     * the 'args' array when not null.
     * @param {string} mainClass name of the class to load (with package if any)
     * @param {Array} sketchArgs command line arguments to pass to the sketch's 'args'
     * array. Note that this is <i>not</i> the same as the args passed
     * to (and understood by) PApplet such as --display.
     */
    public static main(mainClass : string, sketchArgs : string[]);

    public static runSketch(args : string[], constructedSketch : PApplet);

    /**
     * Danger: available for advanced subclassing, but here be dragons.
     */
    showSurface();

    /**
     * See warning in showSurface()
     */
    startSurface();

    initSurface() : PSurface;

    /**
     * Convenience method, should only be called by PSurface subclasses.
     */
    public static hideMenuBar();

    /**
     * Convenience method for Python Mode to run an already-constructed sketch.
     * This makes it makes it easy to launch a sketch in Jython:
     * 
     * <pre>class MySketch(PApplet):
     * pass
     * 
     * MySketch().runSketch();</pre>
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
     * Opens a new file and all subsequent drawing functions are echoed to this
     * file as well as the display window. The <b>beginRecord()</b> function
     * requires two parameters, the first is the renderer and the second is the
     * file name. This function is always used with <b>endRecord()</b> to stop
     * the recording process and close the file.
     * <br /> <br />
     * Note that beginRecord() will only pick up any settings that happen after
     * it has been called. For instance, if you call textFont() before
     * beginRecord(), then that font will not be set for the file that you're
     * recording to.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @param {string} renderer PDF or SVG
     * @param {string} filename filename for output
     * @see PApplet#endRecord()
     * @return {PGraphics}
     */
    public beginRecord(renderer : string, filename : string) : PGraphics;

    /**
     * @nowebref
     * Begin recording (echoing) commands to the specified PGraphics object.
     * @param {PGraphics} recorder
     */
    public beginRecord(recorder : PGraphics);

    /**
     * ( begin auto-generated from endRecord.xml )
     * 
     * Stops the recording process started by <b>beginRecord()</b> and closes
     * the file.
     * 
     * ( end auto-generated )
     * @webref output:files
     * @see PApplet#beginRecord(String, String)
     */
    public endRecord();

    /**
     * ( begin auto-generated from beginRaw.xml )
     * 
     * To create vectors from 3D data, use the <b>beginRaw()</b> and
     * <b>endRaw()</b> commands. These commands will grab the shape data just
     * before it is rendered to the screen. At this stage, your entire scene is
     * nothing but a long list of individual lines and triangles. This means
     * that a shape created with <b>sphere()</b> function will be made up of
     * hundreds of triangles, rather than a single object. Or that a
     * multi-segment line shape (such as a curve) will be rendered as
     * individual segments.
     * <br /><br />
     * When using <b>beginRaw()</b> and <b>endRaw()</b>, it's possible to write
     * to either a 2D or 3D renderer. For instance, <b>beginRaw()</b> with the
     * PDF library will write the geometry as flattened triangles and lines,
     * even if recording from the <b>P3D</b> renderer.
     * <br /><br />
     * If you want a background to show up in your files, use <b>rect(0, 0,
     * width, height)</b> after setting the <b>fill()</b> to the background
     * color. Otherwise the background will not be rendered to the file because
     * the background is not shape.
     * <br /><br />
     * Using <b>hint(ENABLE_DEPTH_SORT)</b> can improve the appearance of 3D
     * geometry drawn to 2D file formats. See the <b>hint()</b> reference for
     * more details.
     * <br /><br />
     * See examples in the reference for the <b>PDF</b> and <b>DXF</b>
     * libraries for more information.
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
    public beginRaw(renderer : string, filename : string) : PGraphics;

    /**
     * @nowebref
     * Begin recording raw shape data to the specified renderer.
     * 
     * This simply echoes to g.beginRaw(), but since is placed here (rather than
     * generated by preproc.pl) for clarity and so that it doesn't echo the
     * command should beginRecord() be in use.
     * 
     * @param {PGraphics} rawGraphics ???
     */
    public beginRaw(rawGraphics : PGraphics);

    /**
     * ( begin auto-generated from endRaw.xml )
     * 
     * Complement to <b>beginRaw()</b>; they must always be used together. See
     * the <b>beginRaw()</b> reference for details.
     * 
     * ( end auto-generated )
     * 
     * @webref output:files
     * @see PApplet#beginRaw(String, String)
     */
    public endRaw();

    /**
     * ( begin auto-generated from loadPixels.xml )
     * 
     * Loads the pixel data for the display window into the <b>pixels[]</b>
     * array. This function must always be called before reading from or
     * writing to <b>pixels[]</b>.
     * <br/><br/> renderers may or may not seem to require <b>loadPixels()</b>
     * or <b>updatePixels()</b>. However, the rule is that any time you want to
     * manipulate the <b>pixels[]</b> array, you must first call
     * <b>loadPixels()</b>, and after changes have been made, call
     * <b>updatePixels()</b>. Even if the renderer may not seem to use this
     * function in the current Processing release, this will always be subject
     * to change.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Override the g.pixels[] function to set the pixels[] array
     * that's part of the PApplet object. Allows the use of
     * pixels[] in the code, rather than g.pixels[].
     * 
     * @webref image:pixels
     * @see PApplet#pixels
     * @see PApplet#updatePixels()
     */
    public loadPixels();

    /**
     * ( begin auto-generated from updatePixels.xml )
     * 
     * Updates the display window with the data in the <b>pixels[]</b> array.
     * Use in conjunction with <b>loadPixels()</b>. If you're only reading
     * pixels from the array, there's no need to call <b>updatePixels()</b>
     * unless there are changes.
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
     * @webref image:pixels
     * @see PApplet#loadPixels()
     * @see PApplet#pixels
     */
    public updatePixels();

    /**
     * @nowebref
     * @param {number} x1 x-coordinate of the upper-left corner
     * @param {number} y1 y-coordinate of the upper-left corner
     * @param {number} x2 width of the region
     * @param {number} y2 height of the region
     */
    public updatePixels(x1 : number, y1 : number, x2 : number, y2 : number);

    public endPGL();

    public flush();

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
     * Sets whether the upcoming vertex is part of an edge.
     * Equivalent to glEdgeFlag(), for people familiar with OpenGL.
     * @param {boolean} edge
     */
    public edge(edge : boolean);

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
     * ( begin auto-generated from textureMode.xml )
     * 
     * Sets the coordinate space for texture mapping. There are two options,
     * IMAGE, which refers to the actual coordinates of the image, and
     * NORMAL, which refers to a normalized space of values ranging from 0
     * to 1. The default mode is IMAGE. In IMAGE, if an image is 100 x 200
     * pixels, mapping the image onto the entire size of a quad would require
     * the points (0,0) (0,100) (100,200) (0,200). The same mapping in
     * NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1).
     * 
     * ( end auto-generated )
     * @webref image:textures
     * @param {number} mode either IMAGE or NORMAL
     * @see PGraphics#texture(PImage)
     * @see PGraphics#textureWrap(int)
     */
    public textureMode(mode : number);

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
     * @param {number} kind either POINT, LINE, TRIANGLE, QUAD, RECT, ELLIPSE, ARC, BOX, SPHERE
     * @param {Array} p parameters that match the kind of shape
     * @return {PShape}
     */
    public createShape(kind : number, ...p : number[]) : PShape;

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
    public blendMode(mode : number);

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
     * ( begin auto-generated from rectMode.xml )
     * 
     * Modifies the location from which rectangles draw. The default mode is
     * <b>rectMode(CORNER)</b>, which specifies the location to be the upper
     * left corner of the shape and uses the third and fourth parameters of
     * <b>rect()</b> to specify the width and height. The syntax
     * <b>rectMode(CORNERS)</b> uses the first and second parameters of
     * <b>rect()</b> to set the location of one corner and uses the third and
     * fourth parameters to set the opposite corner. The syntax
     * <b>rectMode(CENTER)</b> draws the image from its center point and uses
     * the third and forth parameters of <b>rect()</b> to specify the image's
     * width and height. The syntax <b>rectMode(RADIUS)</b> draws the image
     * from its center point and uses the third and forth parameters of
     * <b>rect()</b> to specify half of the image's width and height. The
     * parameter must be written in ALL CAPS because Processing is a case
     * sensitive language. Note: In version 125, the mode named CENTER_RADIUS
     * was shortened to RADIUS.
     * 
     * ( end auto-generated )
     * @webref shape:attributes
     * @param {number} mode either CORNER, CORNERS, CENTER, or RADIUS
     * @see PGraphics#rect(float, float, float, float)
     */
    public rectMode(mode : number);

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

    /**
     * ( begin auto-generated from ellipseMode.xml )
     * 
     * The origin of the ellipse is modified by the <b>ellipseMode()</b>
     * function. The default configuration is <b>ellipseMode(CENTER)</b>, which
     * specifies the location of the ellipse as the center of the shape. The
     * <b>RADIUS</b> mode is the same, but the width and height parameters to
     * <b>ellipse()</b> specify the radius of the ellipse, rather than the
     * diameter. The <b>CORNER</b> mode draws the shape from the upper-left
     * corner of its bounding box. The <b>CORNERS</b> mode uses the four
     * parameters to <b>ellipse()</b> to set two opposing corners of the
     * ellipse's bounding box. The parameter must be written in ALL CAPS
     * because Processing is a case-sensitive language.
     * 
     * ( end auto-generated )
     * @webref shape:attributes
     * @param {number} mode either CENTER, RADIUS, CORNER, or CORNERS
     * @see PApplet#ellipse(float, float, float, float)
     * @see PApplet#arc(float, float, float, float, float, float)
     */
    public ellipseMode(mode : number);

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

    /**
     * ( begin auto-generated from bezierDetail.xml )
     * 
     * Sets the resolution at which Beziers display. The default value is 20.
     * This function is only useful when using the P3D renderer as the default
     * P2D renderer does not use this information.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} detail resolution of the curves
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float, float)
     * @see PGraphics#curveTightness(float)
     */
    public bezierDetail(detail : number);

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

    /**
     * ( begin auto-generated from curveDetail.xml )
     * 
     * Sets the resolution at which curves display. The default value is 20.
     * This function is only useful when using the P3D renderer as the default
     * P2D renderer does not use this information.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} detail resolution of the curves
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     * @see PGraphics#curveTightness(float)
     */
    public curveDetail(detail : number);

    /**
     * ( begin auto-generated from curveTightness.xml )
     * 
     * Modifies the quality of forms created with <b>curve()</b> and
     * <b>curveVertex()</b>. The parameter <b>squishy</b> determines how the
     * curve fits to the vertex points. The value 0.0 is the default value for
     * <b>squishy</b> (this value defines the curves to be Catmull-Rom splines)
     * and the value 1.0 connects all the points with straight lines. Values
     * within the range -5.0 and 5.0 will deform the curves but will leave them
     * recognizable and as values increase in magnitude, they will continue to deform.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:curves
     * @param {number} tightness amount of deformation from the original vertices
     * @see PGraphics#curve(float, float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#curveVertex(float, float)
     */
    public curveTightness(tightness : number);

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
     * ( begin auto-generated from imageMode.xml )
     * 
     * Modifies the location from which images draw. The default mode is
     * <b>imageMode(CORNER)</b>, which specifies the location to be the upper
     * left corner and uses the fourth and fifth parameters of <b>image()</b>
     * to set the image's width and height. The syntax
     * <b>imageMode(CORNERS)</b> uses the second and third parameters of
     * <b>image()</b> to set the location of one corner of the image and uses
     * the fourth and fifth parameters to set the opposite corner. Use
     * <b>imageMode(CENTER)</b> to draw images centered at the given x and y
     * position.<br />
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
    public imageMode(mode : number);

    /**
     * ( begin auto-generated from image.xml )
     * 
     * Displays images to the screen. The images must be in the sketch's "data"
     * directory to load correctly. Select "Add file..." from the "Sketch" menu
     * to add the image. Processing currently works with GIF, JPEG, and Targa
     * images. The <b>img</b> parameter specifies the image to display and the
     * <b>x</b> and <b>y</b> parameters define the location of the image from
     * its upper-left corner. The image is displayed at its original size
     * unless the <b>width</b> and <b>height</b> parameters specify a different
     * size.<br />
     * <br />
     * The <b>imageMode()</b> function changes the way the parameters work. For
     * example, a call to <b>imageMode(CORNERS)</b> will change the
     * <b>width</b> and <b>height</b> parameters to define the x and y values
     * of the opposite corner of the image.<br />
     * <br />
     * The color of an image may be modified with the <b>tint()</b> function.
     * This function will maintain transparency for GIF and PNG images.
     * 
     * ( end auto-generated )
     * 
     * <h3>Advanced</h3>
     * Starting with release 0124, when using the default (JAVA2D) renderer,
     * smooth() will also improve image quality of resized images.
     * 
     * @webref image:loading_displaying
     * @param {PImage} img the image to display
     * @param {number} a x-coordinate of the image by default
     * @param {number} b y-coordinate of the image by default
     * @see PApplet#loadImage(String, String)
     * @see PImage
     * @see PGraphics#imageMode(int)
     * @see PGraphics#tint(float)
     * @see PGraphics#background(float, float, float, float)
     * @see PGraphics#alpha(int)
     */
    public image(img : PImage, a : number, b : number);

    /**
     * @param {number} c width to display the image by default
     * @param {number} d height to display the image by default
     * @param {PImage} img
     * @param {number} a
     * @param {number} b
     */
    public image(img : PImage, a : number, b : number, c : number, d : number);

    /**
     * Draw an image(), also specifying u/v coordinates.
     * In this method, the  u, v coordinates are always based on image space
     * location, regardless of the current textureMode().
     * 
     * @nowebref
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
    public image(img : PImage, a : number, b : number, c : number, d : number, u1 : number, v1 : number, u2 : number, v2 : number);

    /**
     * ( begin auto-generated from shapeMode.xml )
     * 
     * Modifies the location from which shapes draw. The default mode is
     * <b>shapeMode(CORNER)</b>, which specifies the location to be the upper
     * left corner of the shape and uses the third and fourth parameters of
     * <b>shape()</b> to specify the width and height. The syntax
     * <b>shapeMode(CORNERS)</b> uses the first and second parameters of
     * <b>shape()</b> to set the location of one corner and uses the third and
     * fourth parameters to set the opposite corner. The syntax
     * <b>shapeMode(CENTER)</b> draws the shape from its center point and uses
     * the third and forth parameters of <b>shape()</b> to specify the width
     * and height. The parameter must be written in "ALL CAPS" because
     * Processing is a case sensitive language.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:loading_displaying
     * @param {number} mode either CORNER, CORNERS, CENTER
     * @see PShape
     * @see PGraphics#shape(PShape)
     * @see PGraphics#rectMode(int)
     */
    public shapeMode(mode : number);

    public shape(shape : PShape);

    /**
     * ( begin auto-generated from shape.xml )
     * 
     * Displays shapes to the screen. The shapes must be in the sketch's "data"
     * directory to load correctly. Select "Add file..." from the "Sketch" menu
     * to add the shape. Processing currently works with SVG shapes only. The
     * <b>sh</b> parameter specifies the shape to display and the <b>x</b> and
     * <b>y</b> parameters define the location of the shape from its upper-left
     * corner. The shape is displayed at its original size unless the
     * <b>width</b> and <b>height</b> parameters specify a different size. The
     * <b>shapeMode()</b> function changes the way the parameters work. A call
     * to <b>shapeMode(CORNERS)</b>, for example, will change the width and
     * height parameters to define the x and y values of the opposite corner of
     * the shape.
     * <br /><br />
     * Note complex shapes may draw awkwardly with P3D. This renderer does not
     * yet support shapes that have holes or complicated breaks.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:loading_displaying
     * @param {PShape} shape the shape to display
     * @param {number} x x-coordinate of the shape
     * @param {number} y y-coordinate of the shape
     * @see PShape
     * @see PApplet#loadShape(String)
     * @see PGraphics#shapeMode(int)
     * 
     * Convenience method to draw at a particular location.
     */
    public shape(shape : PShape, x : number, y : number);

    /**
     * @param {number} a x-coordinate of the shape
     * @param {number} b y-coordinate of the shape
     * @param {number} c width to display the shape
     * @param {number} d height to display the shape
     * @param {PShape} shape
     */
    public shape(shape : PShape, a : number, b : number, c : number, d : number);

    public textAlign(alignX : number);

    /**
     * ( begin auto-generated from textAlign.xml )
     * 
     * Sets the current alignment for drawing text. The parameters LEFT,
     * CENTER, and RIGHT set the display characteristics of the letters in
     * relation to the values for the <b>x</b> and <b>y</b> parameters of the
     * <b>text()</b> function.
     * <br/> <br/>
     * In Processing 0125 and later, an optional second parameter can be used
     * to vertically align the text. BASELINE is the default, and the vertical
     * alignment will be reset to BASELINE if the second parameter is not used.
     * The TOP and CENTER parameters are straightforward. The BOTTOM parameter
     * offsets the line based on the current <b>textDescent()</b>. For multiple
     * lines, the final line will be aligned to the bottom, with the previous
     * lines appearing above it.
     * <br/> <br/>
     * When using <b>text()</b> with width and height parameters, BASELINE is
     * ignored, and treated as TOP. (Otherwise, text would by default draw
     * outside the box, since BASELINE is the default setting. BASELINE is not
     * a useful drawing mode for text drawn in a rectangle.)
     * <br/> <br/>
     * The vertical alignment is based on the value of <b>textAscent()</b>,
     * which many fonts do not specify correctly. It may be necessary to use a
     * hack and offset by a few pixels by hand so that the offset looks
     * correct. To do this as less of a hack, use some percentage of
     * <b>textAscent()</b> or <b>textDescent()</b> so that the hack works even
     * if you change the size of the font.
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
    public textAlign(alignX : number, alignY : number);

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
     * ( begin auto-generated from textFont.xml )
     * 
     * Sets the current font that will be drawn with the <b>text()</b>
     * function. Fonts must be loaded with <b>loadFont()</b> before it can be
     * used. This font will be used in all subsequent calls to the
     * <b>text()</b> function. If no <b>size</b> parameter is input, the font
     * will appear at its original size (the size it was created at with the
     * "Create Font..." tool) until it is changed with <b>textSize()</b>. <br
     * /> <br /> Because fonts are usually bitmaped, you should create fonts at
     * the sizes that will be used most commonly. Using <b>textFont()</b>
     * without the size parameter will result in the cleanest-looking text. <br
     * /><br /> With the default (JAVA2D) and PDF renderers, it's also possible
     * to enable the use of native fonts via the command
     * <b>hint(ENABLE_NATIVE_FONTS)</b>. This will produce vector text in
     * JAVA2D sketches and PDF output in cases where the vector data is
     * available: when the font is still installed, or the font is created via
     * the <b>createFont()</b> function (rather than the Create Font tool).
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
    public textFont(which : PFont);

    /**
     * @param {number} size the size of the letters in units of pixels
     * @param {PFont} which
     */
    public textFont(which : PFont, size : number);

    /**
     * ( begin auto-generated from textLeading.xml )
     * 
     * Sets the spacing between lines of text in units of pixels. This setting
     * will be used in all subsequent calls to the <b>text()</b> function.
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
    public textLeading(leading : number);

    /**
     * ( begin auto-generated from textMode.xml )
     * 
     * Sets the way text draws to the screen. In the default configuration, the
     * <b>MODEL</b> mode, it's possible to rotate, scale, and place letters in
     * two and three dimensional space.<br />
     * <br />
     * The <b>SHAPE</b> mode draws text using the the glyph outlines of
     * individual characters rather than as textures. This mode is only
     * supported with the <b>PDF</b> and <b>P3D</b> renderer settings. With the
     * <b>PDF</b> renderer, you must call <b>textMode(SHAPE)</b> before any
     * other drawing occurs. If the outlines are not available, then
     * <b>textMode(SHAPE)</b> will be ignored and <b>textMode(MODEL)</b> will
     * be used instead.<br />
     * <br />
     * The <b>textMode(SHAPE)</b> option in <b>P3D</b> can be combined with
     * <b>beginRaw()</b> to write vector-accurate text to 2D and 3D output
     * files, for instance <b>DXF</b> or <b>PDF</b>. The <b>SHAPE</b> mode is
     * not currently optimized for <b>P3D</b>, so if recording shape data, use
     * <b>textMode(MODEL)</b> until you're ready to capture the geometry with <b>beginRaw()</b>.
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
    public textMode(mode : number);

    /**
     * ( begin auto-generated from textSize.xml )
     * 
     * Sets the current font size. This size will be used in all subsequent
     * calls to the <b>text()</b> function. Font size is measured in units of pixels.
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
    public textSize(size : number);

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
     * ( begin auto-generated from camera.xml )
     * 
     * Sets the position of the camera through setting the eye position, the
     * center of the scene, and which axis is facing upward. Moving the eye
     * position and the direction it is pointing (the center of the scene)
     * allows the images to be seen from different angles. The version without
     * any parameters sets the camera to the default position, pointing to the
     * center of the display window with the Y axis as up. The default values
     * are <b>camera(width/2.0, height/2.0, (height/2.0) / tan(PI*30.0 /
     * 180.0), width/2.0, height/2.0, 0, 0, 1, 0)</b>. This function is similar
     * to <b>gluLookAt()</b> in OpenGL, but it first clears the current camera settings.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:camera
     * @see PGraphics#beginCamera()
     * @see PGraphics#endCamera()
     * @see PGraphics#frustum(float, float, float, float, float, float)
     */
    public camera();

    /**
     * @param {number} eyeX x-coordinate for the eye
     * @param {number} eyeY y-coordinate for the eye
     * @param {number} eyeZ z-coordinate for the eye
     * @param {number} centerX x-coordinate for the center of the scene
     * @param {number} centerY y-coordinate for the center of the scene
     * @param {number} centerZ z-coordinate for the center of the scene
     * @param {number} upX usually 0.0, 1.0, or -1.0
     * @param {number} upY usually 0.0, 1.0, or -1.0
     * @param {number} upZ usually 0.0, 1.0, or -1.0
     */
    public camera(eyeX : number, eyeY : number, eyeZ : number, centerX : number, centerY : number, centerZ : number, upX : number, upY : number, upZ : number);

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

    /**
     * ( begin auto-generated from strokeWeight.xml )
     * 
     * Sets the width of the stroke used for lines, points, and the border
     * around shapes. All widths are set in units of pixels.
     * <br/> <br/>
     * When drawing with P3D, series of connected lines (such as the stroke
     * around a polygon, triangle, or ellipse) produce unattractive results
     * when a thick stroke weight is set (<a
     * href="http://code.google.com/p/processing/issues/detail?id=123">see
     * Issue 123</a>). With P3D, the minimum and maximum values for
     * <b>strokeWeight()</b> are controlled by the graphics card and the
     * operating system's OpenGL implementation. For instance, the thickness
     * may not go higher than 10 pixels.
     * 
     * ( end auto-generated )
     * 
     * @webref shape:attributes
     * @param {number} weight the weight (in pixels) of the stroke
     * @see PGraphics#stroke(int, float)
     * @see PGraphics#strokeJoin(int)
     * @see PGraphics#strokeCap(int)
     */
    public strokeWeight(weight : number);

    /**
     * ( begin auto-generated from strokeJoin.xml )
     * 
     * Sets the style of the joints which connect line segments. These joints
     * are either mitered, beveled, or rounded and specified with the
     * corresponding parameters MITER, BEVEL, and ROUND. The default joint is
     * MITER.
     * <br/> <br/>
     * This function is not available with the P3D renderer, (<a
     * href="http://code.google.com/p/processing/issues/detail?id=123">see
     * Issue 123</a>). More information about the renderers can be found in the
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
    public strokeJoin(join : number);

    /**
     * ( begin auto-generated from strokeCap.xml )
     * 
     * Sets the style for rendering line endings. These ends are either
     * squared, extended, or rounded and specified with the corresponding
     * parameters SQUARE, PROJECT, and ROUND. The default cap is ROUND.
     * <br/> <br/>
     * This function is not available with the P3D renderer (<a
     * href="http://code.google.com/p/processing/issues/detail?id=123">see
     * Issue 123</a>). More information about the renderers can be found in the
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
    public strokeCap(cap : number);

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

    /**
     * ( begin auto-generated from stroke.xml )
     * 
     * Sets the color used to draw lines and borders around shapes. This color
     * is either specified in terms of the RGB or HSB color depending on the
     * current <b>colorMode()</b> (the default color space is RGB, with each
     * value in the range from 0 to 255).
     * <br/> <br/>
     * When using hexadecimal notation to specify a color, use "#" or "0x"
     * before the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six
     * digits to specify a color (the way colors are specified in HTML and
     * CSS). When using the hexadecimal notation starting with "0x", the
     * hexadecimal value must be specified with eight characters; the first two
     * characters define the alpha component and the remainder the red, green,
     * and blue components.
     * <br/> <br/>
     * The value for the parameter "gray" must be less than or equal to the
     * current maximum value as specified by <b>colorMode()</b>. The default
     * maximum value is 255.
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
    public stroke(rgb : number);

    /**
     * @param {number} alpha opacity of the stroke
     * @param {number} rgb
     */
    public stroke(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    public stroke(gray : number);

    public stroke(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     * @webref color:setting
     */
    public stroke(v1 : number, v2 : number, v3 : number);

    public stroke(v1 : number, v2 : number, v3 : number, alpha : number);

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

    /**
     * ( begin auto-generated from tint.xml )
     * 
     * Sets the fill value for displaying images. Images can be tinted to
     * specified colors or made transparent by setting the alpha.<br />
     * <br />
     * To make an image transparent, but not change it's color, use white as
     * the tint color and specify an alpha value. For instance, tint(255, 128)
     * will make an image 50% transparent (unless <b>colorMode()</b> has been
     * used).<br />
     * <br />
     * When using hexadecimal notation to specify a color, use "#" or "0x"
     * before the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six
     * digits to specify a color (the way colors are specified in HTML and
     * CSS). When using the hexadecimal notation starting with "0x", the
     * hexadecimal value must be specified with eight characters; the first two
     * characters define the alpha component and the remainder the red, green,
     * and blue components.<br />
     * <br />
     * The value for the parameter "gray" must be less than or equal to the
     * current maximum value as specified by <b>colorMode()</b>. The default
     * maximum value is 255.<br />
     * <br />
     * The <b>tint()</b> function is also used to control the coloring of
     * textures in 3D.
     * 
     * ( end auto-generated )
     * 
     * @webref image:loading_displaying
     * @usage web_application
     * @param {number} rgb color value in hexadecimal notation
     * @see PGraphics#noTint()
     * @see PGraphics#image(PImage, float, float, float, float)
     */
    public tint(rgb : number);

    /**
     * @param {number} alpha opacity of the image
     * @param {number} rgb
     */
    public tint(rgb : number, alpha : number);

    /**
     * @param {number} gray specifies a value between white and black
     */
    public tint(gray : number);

    public tint(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    public tint(v1 : number, v2 : number, v3 : number);

    public tint(v1 : number, v2 : number, v3 : number, alpha : number);

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

    /**
     * ( begin auto-generated from fill.xml )
     * 
     * Sets the color used to fill shapes. For example, if you run <b>fill(204,
     * 102, 0)</b>, all subsequent shapes will be filled with orange. This
     * color is either specified in terms of the RGB or HSB color depending on
     * the current <b>colorMode()</b> (the default color space is RGB, with
     * each value in the range from 0 to 255).
     * <br/> <br/>
     * When using hexadecimal notation to specify a color, use "#" or "0x"
     * before the values (e.g. #CCFFAA, 0xFFCCFFAA). The # syntax uses six
     * digits to specify a color (the way colors are specified in HTML and
     * CSS). When using the hexadecimal notation starting with "0x", the
     * hexadecimal value must be specified with eight characters; the first two
     * characters define the alpha component and the remainder the red, green,
     * and blue components.
     * <br/> <br/>
     * The value for the parameter "gray" must be less than or equal to the
     * current maximum value as specified by <b>colorMode()</b>. The default
     * maximum value is 255.
     * <br/> <br/>
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
    public fill(rgb : number);

    /**
     * @param {number} alpha opacity of the fill
     * @param {number} rgb
     */
    public fill(rgb : number, alpha : number);

    /**
     * @param {number} gray number specifying value between white and black
     */
    public fill(gray : number);

    public fill(gray : number, alpha : number);

    /**
     * @param {number} v1 red or hue value (depending on current color mode)
     * @param {number} v2 green or saturation value (depending on current color mode)
     * @param {number} v3 blue or brightness value (depending on current color mode)
     */
    public fill(v1 : number, v2 : number, v3 : number);

    public fill(v1 : number, v2 : number, v3 : number, alpha : number);

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

    /**
     * ( begin auto-generated from shininess.xml )
     * 
     * Sets the amount of gloss in the surface of shapes. Used in combination
     * with <b>ambient()</b>, <b>specular()</b>, and <b>emissive()</b> in
     * setting the material properties of shapes.
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
    public shininess(shine : number);

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

    /**
     * ( begin auto-generated from lights.xml )
     * 
     * Sets the default ambient light, directional light, falloff, and specular
     * values. The defaults are ambientLight(128, 128, 128) and
     * directionalLight(128, 128, 128, 0, 0, -1), lightFalloff(1, 0, 0), and
     * lightSpecular(0, 0, 0). Lights need to be included in the draw() to
     * remain persistent in a looping program. Placing them in the setup() of a
     * looping program will cause them to only have an effect the first time
     * through the loop.
     * 
     * ( end auto-generated )
     * 
     * @webref lights_camera:lights
     * @usage web_application
     * @see PGraphics#ambientLight(float, float, float, float, float, float)
     * @see PGraphics#directionalLight(float, float, float, float, float, float)
     * @see PGraphics#pointLight(float, float, float, float, float, float)
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     * @see PGraphics#noLights()
     */
    public lights();

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
     * ( begin auto-generated from lightSpecular.xml )
     * 
     * Sets the specular color for lights. Like <b>fill()</b>, it affects only
     * the elements which are created after it in the code. Specular refers to
     * light which bounces off a surface in a perferred direction (rather than
     * bouncing in all directions like a diffuse light) and is used for
     * creating highlights. The specular quality of a light interacts with the
     * specular material qualities set through the <b>specular()</b> and
     * <b>shininess()</b> functions.
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
     * @see PGraphics#spotLight(float, float, float, float, float, float, float, float, float, float, float)
     */
    public lightSpecular(v1 : number, v2 : number, v3 : number);

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
     * ( begin auto-generated from colorMode.xml )
     * 
     * Changes the way Processing interprets color data. By default, the
     * parameters for <b>fill()</b>, <b>stroke()</b>, <b>background()</b>, and
     * <b>color()</b> are defined by values between 0 and 255 using the RGB
     * color model. The <b>colorMode()</b> function is used to change the
     * numerical range used for specifying colors and to switch color systems.
     * For example, calling <b>colorMode(RGB, 1.0)</b> will specify that values
     * are specified between 0 and 1. The limits for defining colors are
     * altered by setting the parameters range1, range2, range3, and range 4.
     * 
     * ( end auto-generated )
     * 
     * @webref color:setting
     * @usage web_application
     * @param {number} mode Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness
     * @see PGraphics#background(float)
     * @see PGraphics#fill(float)
     * @see PGraphics#stroke(float)
     */
    public colorMode(mode : number);

    /**
     * @param {number} max range for all color elements
     * @param {number} mode
     */
    public colorMode(mode : number, max : number);

    /**
     * @param {number} max1 range for the red or hue depending on the current color mode
     * @param {number} max2 range for the green or saturation depending on the current color mode
     * @param {number} max3 range for the blue or brightness depending on the current color mode
     * @param {number} mode
     */
    public colorMode(mode : number, max1 : number, max2 : number, max3 : number);

    /**
     * @param {number} maxA range for the alpha
     * @param {number} mode
     * @param {number} max1
     * @param {number} max2
     * @param {number} max3
     */
    public colorMode(mode : number, max1 : number, max2 : number, max3 : number, maxA : number);

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
}

declare namespace PApplet {

    export class RegisteredMethods {
        public __parent: any;
        count : number;

        objects : any[];

        methods : { owner: any, name: string, fn : Function }[];

        emptyArgs : any[];

        handle();

        handle(args : any[]);

        add(object : any, method : { owner: any, name: string, fn : Function });

        /**
         * Removes first object/method pair matched (and only the first,
         * must be called multiple times if object is registered multiple times).
         * Does not shrink array afterwards, silently returns if method not found.
         * @param {*} object
         */
        public remove(object : any);

        findIndex(object : any) : number;
    }

    export class AsyncImageLoader {
        public __parent: any;
        filename : string;

        extension : string;

        vessel : PImage;

        public constructor(__parent: any, filename : string, extension : string, vessel : PImage);

        /**
         * 
         */
        public run();
    }
}



