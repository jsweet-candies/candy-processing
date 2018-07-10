/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Surface that's not really visible. Used for PDF and friends, or as a base
 * class for other drawing surfaces. It includes the standard rendering loop.
 * @param {PGraphics} graphics
 * @class
 */
declare class PSurfaceNone implements PSurface {
    sketch : PApplet;

    graphics : PGraphics;

    thread : any;

    paused : boolean;

    pauseObject : any;

    frameRateTarget : number;

    frameRatePeriod : number;

    public constructor(graphics : PGraphics);

    /**
     * 
     * @param {PApplet} sketch
     */
    public initOffscreen(sketch : PApplet);

    /**
     * 
     * @param {PApplet} sketch
     */
    public initFrame(sketch : PApplet);

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



