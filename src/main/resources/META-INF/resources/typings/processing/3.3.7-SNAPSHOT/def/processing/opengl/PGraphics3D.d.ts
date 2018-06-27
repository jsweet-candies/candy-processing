/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare class PGraphics3D extends PGraphicsOpenGL {
    public constructor();

    /**
     * 
     * @return {boolean}
     */
    public is2D() : boolean;

    /**
     * 
     * @return {boolean}
     */
    public is3D() : boolean;

    /**
     * 
     */
    defaultPerspective();

    /**
     * 
     */
    defaultCamera();

    /**
     * 
     */
    begin2D();

    /**
     * 
     */
    end2D();

    static isSupportedExtension(extension : string) : boolean;

    static loadShapeImpl(pg : PGraphics, filename : string, extension : string) : PShape;
}


