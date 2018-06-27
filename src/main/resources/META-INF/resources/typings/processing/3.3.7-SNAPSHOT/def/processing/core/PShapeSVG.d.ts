/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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

    setStrokeWeight(lineweight : string);

    setStrokeOpacity(opacityText : string);

    setStrokeJoin(linejoin : string);

    setStrokeCap(linecap : string);

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
     * Get a particular element based on its SVG ID. When editing SVG by hand,
     * this is the id="" tag on any SVG element. When editing from Illustrator,
     * these IDs can be edited by expanding the layers palette. The names used
     * in the layers palette, both for the layers or the shapes and groups
     * beneath them can be used here.
     * <PRE>
     * // This code grabs "Layer 3" and the shapes beneath it.
     * PShape layer3 = svg.getChild("Layer 3");
     * </PRE>
     * @param {string} name
     * @return {PShape}
     */
    public getChild(name : string) : PShape;

    /**
     * Prints out the SVG document. Useful for parsing.
     */
    public print();
}

declare namespace PShapeSVG {

    export class Gradient extends PShapeSVG {
        transform : java.awt.geom.AffineTransform;

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

        public constructor(__parent: any, parent : PShapeSVG, properties : XML);
    }

    export class RadialGradient extends PShapeSVG.Gradient {
        public __parent: any;
        public cx : number;

        public cy : number;

        public r : number;

        public constructor(__parent: any, parent : PShapeSVG, properties : XML);
    }
}



