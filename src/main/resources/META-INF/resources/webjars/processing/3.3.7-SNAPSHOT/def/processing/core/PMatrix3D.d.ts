/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * 4x4 matrix implementation.
 * Matrices are used to describe a transformation; see {@link PMatrix} for a
 * general description. This matrix looks like the following when multiplying
 * a vector (x, y, z, w) in {@code mult()}.
 * <pre>
 * [m00 m01 m02 m03][x]   [m00*x + m01*y + m02*z + m03*w]   [x']
 * [m10 m11 m12 m13][y] = [m10*x + m11*y + m12*z + m13*w] = [y']
 * [m20 m21 m22 m23][z]   [m20*x + m21*y + m22*z + m23*w]   [z']
 * [m30 m31 m32 m33][w]   [m30*x + m31*y + m32*z + m33*w]   [w']</pre>
 * (x', y', z', w') is returned. The values in the matrix determine the
 * transformation. They are modified by the various transformation functions.
 * 
 * To transform 3D coordinates, w is set to 1, amd w' is made to be 1 by
 * setting the bottom row of the matrix to <code>[0 0 0 1]</code>. The
 * resulting point is then (x', y', z').
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
 * @class
 */
declare class PMatrix3D implements PMatrix {
    public m00 : number;

    public m01 : number;

    public m02 : number;

    public m03 : number;

    public m10 : number;

    public m11 : number;

    public m12 : number;

    public m13 : number;

    public m20 : number;

    public m21 : number;

    public m22 : number;

    public m23 : number;

    public m30 : number;

    public m31 : number;

    public m32 : number;

    public m33 : number;

    inverseCopy : PMatrix3D;

    public constructor();

    public constructor(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    public constructor(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    public constructor(matrix : PMatrix);

    public reset();

    /**
     * Returns a copy of this PMatrix.
     * @return {PMatrix3D}
     */
    public get() : PMatrix3D;

    /**
     * Copies the matrix contents into a 16 entry float array.
     * If target is null (or not the correct size), a new array will be created.
     * @param {Array} target
     * @return {Array}
     */
    public get(target : number[]) : number[];

    public set(matrix : PMatrix);

    public set(source : number[]);

    public set(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    public set(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    public translate(tx : number, ty : number);

    public translate(tx : number, ty : number, tz : number);

    public rotate(angle : number);

    public rotateX(angle : number);

    public rotateY(angle : number);

    public rotateZ(angle : number);

    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    public scale(s : number);

    public scale(sx : number, sy : number);

    public scale(x : number, y : number, z : number);

    public shearX(angle : number);

    public shearY(angle : number);

    public apply(source : PMatrix);

    public apply(source : PMatrix2D);

    public apply(source : PMatrix3D);

    public apply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    public apply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Apply the 3D equivalent of the 2D matrix supplied to the left of this one.
     * @param {PMatrix2D} left
     */
    public preApply(left : PMatrix2D);

    /**
     * Apply another matrix to the left of this one.
     * @param {*} source
     */
    public preApply(source : PMatrix);

    /**
     * Apply another matrix to the left of this one.
     * @param {PMatrix3D} left
     */
    public preApply(left : PMatrix3D);

    /**
     * Apply the 3D equivalent of the 2D matrix supplied to the left of this one.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    public preApply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Apply another matrix to the left of this one.
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
     * Multiply source by this matrix, and return the result.
     * The result will be stored in target if target is non-null, and target
     * will then be the matrix returned. This improves performance if you reuse
     * target, so it's recommended if you call this many times in draw().
     * @param {PVector} source
     * @param {PVector} target
     * @return {PVector}
     */
    public mult(source : PVector, target : PVector) : PVector;

    /**
     * Multiply a three or four element vector against this matrix. If out is
     * null or not length 3 or 4, a new float array (length 3) will be returned.
     * Supplying and recycling a target array improves performance, so it's
     * recommended if you call this many times in draw.
     * @param {Array} source
     * @param {Array} target
     * @return {Array}
     */
    public mult(source : number[], target : number[]) : number[];

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
     * Returns the x-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multX(x : number, y : number, z : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multY(x : number, y : number, z : number) : number;

    /**
     * Returns the z-coordinate of the result of multiplying the point (x, y, z)
     * by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multZ(x : number, y : number, z : number) : number;

    /**
     * Returns the fourth element of the result of multiplying the vector
     * (x, y, z) by this matrix. (Acts as if w = 1 was supplied.)
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public multW(x : number, y : number, z : number) : number;

    /**
     * Returns the x-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multX(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the y-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multY(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the z-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multZ(x : number, y : number, z : number, w : number) : number;

    /**
     * Returns the w-coordinate of the result of multiplying the vector
     * (x, y, z, w) by this matrix.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {number}
     */
    public multW(x : number, y : number, z : number, w : number) : number;

    /**
     * Transpose this matrix; rows become columns and columns rows.
     */
    public transpose();

    /**
     * Invert this matrix. Will not necessarily succeed, because some matrices
     * map more than one point to the same image point, and so are irreversible.
     * @return {boolean} true if successful
     */
    public invert() : boolean;

    /**
     * Calculate the determinant of a 3x3 matrix.
     * @return {number} result
     * @param {number} t00
     * @param {number} t01
     * @param {number} t02
     * @param {number} t10
     * @param {number} t11
     * @param {number} t12
     * @param {number} t20
     * @param {number} t21
     * @param {number} t22
     * @private
     */
    /*private*/ determinant3x3(t00 : number, t01 : number, t02 : number, t10 : number, t11 : number, t12 : number, t20 : number, t21 : number, t22 : number) : number;

    /**
     * @return {number} the determinant of the matrix
     */
    public determinant() : number;

    invTranslate(tx : number, ty : number, tz : number);

    invRotateX(angle : number);

    invRotateY(angle : number);

    invRotateZ(angle : number);

    invRotate(angle : number, v0 : number, v1 : number, v2 : number);

    invScale(x : number, y : number, z : number);

    invApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number) : boolean;

    public print();

    /*private*/ static max(a : number, b : number) : number;

    /*private*/ static abs(a : number) : number;

    /*private*/ static sin(angle : number) : number;

    /*private*/ static cos(angle : number) : number;
}


