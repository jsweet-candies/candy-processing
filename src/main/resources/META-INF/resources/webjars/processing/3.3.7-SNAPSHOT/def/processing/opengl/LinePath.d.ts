/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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



