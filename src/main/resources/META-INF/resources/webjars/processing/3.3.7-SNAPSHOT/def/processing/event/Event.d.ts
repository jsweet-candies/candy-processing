/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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


