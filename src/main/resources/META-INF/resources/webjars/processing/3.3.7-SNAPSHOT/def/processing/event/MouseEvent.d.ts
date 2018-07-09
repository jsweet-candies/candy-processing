/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare class MouseEvent extends Event {
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

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}


