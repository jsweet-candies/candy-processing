/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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



