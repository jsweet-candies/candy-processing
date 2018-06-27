/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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


