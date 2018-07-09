/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
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


