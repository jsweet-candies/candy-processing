/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * A matrix is used to define graphical transformations. PMatrix is the common
 * interface for both the 2D and 3D matrix classes in Processing. A matrix is a
 * grid of numbers, which can be multiplied by a vector to give another vector.
 * Multiplying a point by a particular matrix might translate it, rotate it,
 * or carry out a combination of transformations.
 * 
 * Multiplying matrices by each other combines their effects; use the
 * {@code apply} and {@code preApply} methods for this.
 * @class
 */
interface PMatrix {
    /**
     * Make this an identity matrix. Multiplying by it will have no effect.
     */
    reset();

    /**
     * Returns a copy of this PMatrix.
     * @return {*}
     */
    get() : PMatrix;

    /**
     * Copies the matrix contents into a float array.
     * If target is null (or not the correct size), a new array will be created.
     * @param {Array} target
     * @return {Array}
     */
    get(target : number[]) : number[];

    /**
     * Make this matrix become a copy of src.
     * @param {*} src
     */
    set(src : PMatrix);

    /**
     * Set the contents of this matrix to the contents of source. Fills the
     * matrix left-to-right, starting in the top row.
     * @param {Array} source
     */
    set(source : number[]);

    /**
     * Set the matrix content to this 2D matrix or its 3D equivalent.
     * @param {number} m00
     * @param {number} m01
     * @param {number} m02
     * @param {number} m10
     * @param {number} m11
     * @param {number} m12
     */
    set(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number);

    /**
     * Set the matrix content to the 3D matrix supplied, if this matrix is 3D.
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
    set(m00 : number, m01 : number, m02 : number, m03 : number, m10 : number, m11 : number, m12 : number, m13 : number, m20 : number, m21 : number, m22 : number, m23 : number, m30 : number, m31 : number, m32 : number, m33 : number);

    translate(tx : number, ty : number);

    translate(tx : number, ty : number, tz : number);

    rotate(angle : number);

    rotateX(angle : number);

    rotateY(angle : number);

    rotateZ(angle : number);

    rotate(angle : number, v0 : number, v1 : number, v2 : number);

    scale(s : number);

    scale(sx : number, sy : number);

    scale(x : number, y : number, z : number);

    shearX(angle : number);

    shearY(angle : number);

    /**
     * Multiply this matrix by another.
     * @param {*} source
     */
    apply(source : PMatrix);

    /**
     * Multiply this matrix by another.
     * @param {PMatrix2D} source
     */
    apply(source : PMatrix2D);

    /**
     * Multiply this matrix by another.
     * @param {PMatrix3D} source
     */
    apply(source : PMatrix3D);

    /**
     * Multiply this matrix by another.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    apply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Multiply this matrix by another.
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
    apply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Apply another matrix to the left of this one.
     * @param {*} left
     */
    preApply(left : PMatrix);

    /**
     * Apply another matrix to the left of this one.
     * @param {PMatrix2D} left
     */
    preApply(left : PMatrix2D);

    /**
     * Apply another matrix to the left of this one. 3D only.
     * @param {PMatrix3D} left
     */
    preApply(left : PMatrix3D);

    /**
     * Apply another matrix to the left of this one.
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    preApply(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * Apply another matrix to the left of this one. 3D only.
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
    preApply(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Multiply source by this matrix, and return the result.
     * The result will be stored in target if target is non-null, and target
     * will then be the matrix returned. This improves performance if you reuse
     * target, so it's recommended if you call this many times in draw().
     * @param {PVector} source
     * @param {PVector} target
     * @return {PVector}
     */
    mult(source : PVector, target : PVector) : PVector;

    /**
     * Multiply a multi-element vector against this matrix.
     * Supplying and recycling a target array improves performance, so it's
     * recommended if you call this many times in draw().
     * @param {Array} source
     * @param {Array} target
     * @return {Array}
     */
    mult(source : number[], target : number[]) : number[];

    /**
     * Transpose this matrix; rows become columns and columns rows.
     */
    transpose();

    /**
     * Invert this matrix. Will not necessarily succeed, because some matrices
     * map more than one point to the same image point, and so are irreversible.
     * @return {boolean} true if successful
     */
    invert() : boolean;

    /**
     * @return {number} the determinant of the matrix
     */
    determinant() : number;
}


