/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Constructor for a 3D vector.
 * 
 * @param  {number} x the x coordinate.
 * @param  {number} y the y coordinate.
 * @param  {number} z the z coordinate.
 * @class
 */
declare class PVector {
    /**
     * ( begin auto-generated from PVector_x.xml )
     * 
     * The x component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The x component of the vector
     */
    public x : number;

    /**
     * ( begin auto-generated from PVector_y.xml )
     * 
     * The y component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The y component of the vector
     */
    public y : number;

    /**
     * ( begin auto-generated from PVector_z.xml )
     * 
     * The z component of the vector. This field (variable) can be used to both
     * get and set the value (see above example.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:field
     * @usage web_application
     * @brief The z component of the vector
     */
    public z : number;

    /**
     * Array so that this can be temporarily used in an array context
     */
    array : any;

    public constructor();

    public constructor(x : number, y : number, z : number);

    public constructor(x : number, y : number);

    /**
     * ( begin auto-generated from PVector_set.xml )
     * 
     * Sets the x, y, and z component of the vector using two or three separate
     * variables, the data from a PVector, or the values from a float array.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @param {number} z the z component of the vector
     * @brief Set the components of the vector
     * @return {PVector}
     */
    public set(x : number, y : number, z : number) : PVector;

    /**
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @return {PVector}
     */
    public set(x : number, y : number) : PVector;

    /**
     * @param {PVector} v any variable of type PVector
     * @return {PVector}
     */
    public set(v : PVector) : PVector;

    /**
     * Set the x, y (and maybe z) coordinates using a float[] array as the source.
     * @param {Array} source array to copy from
     * @return {PVector}
     */
    public set(source : number[]) : PVector;

    /**
     * ( begin auto-generated from PVector_random2D.xml )
     * 
     * Make a new 2D unit vector with a random direction.  If you pass in "this"
     * as an argument, it will use the PApplet's random number generator.  You can
     * also pass in a target PVector to fill.
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {PVector} the random PVector
     * @brief Make a new 2D unit vector with a random direction.
     * @see PVector#random3D()
     */
    public static random2D() : PVector;

    /**
     * Make a new 2D unit vector with a random direction
     * using Processing's current random number generator
     * @param {PApplet} parent current PApplet instance
     * @return {PVector} the random PVector
     */
    public static random2D(parent : PApplet) : PVector;

    /**
     * Set a 2D vector to a random unit vector with a random direction
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the random PVector
     */
    public static random2D(target : PVector) : PVector;

    /**
     * Make a new 2D unit vector with a random direction. Pass in the parent
     * PApplet if you want randomSeed() to work (and be predictable). Or leave
     * it null and be... random.
     * @return {PVector} the random PVector
     * @param {PVector} target
     * @param {PApplet} parent
     */
    public static random2D(target : PVector, parent : PApplet) : PVector;

    /**
     * ( begin auto-generated from PVector_random3D.xml )
     * 
     * Make a new 3D unit vector with a random direction.  If you pass in "this"
     * as an argument, it will use the PApplet's random number generator.  You can
     * also pass in a target PVector to fill.
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {PVector} the random PVector
     * @brief Make a new 3D unit vector with a random direction.
     * @see PVector#random2D()
     */
    public static random3D() : PVector;

    /**
     * Make a new 3D unit vector with a random direction
     * using Processing's current random number generator
     * @param {PApplet} parent current PApplet instance
     * @return {PVector} the random PVector
     */
    public static random3D(parent : PApplet) : PVector;

    /**
     * Set a 3D vector to a random unit vector with a random direction
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the random PVector
     */
    public static random3D(target : PVector) : PVector;

    /**
     * Make a new 3D unit vector with a random direction
     * @return {PVector} the random PVector
     * @param {PVector} target
     * @param {PApplet} parent
     */
    public static random3D(target : PVector, parent : PApplet) : PVector;

    /**
     * ( begin auto-generated from PVector_sub.xml )
     * 
     * Make a new 2D unit vector from an angle.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Make a new 2D unit vector from an angle
     * @param {number} angle the angle in radians
     * @return {PVector} the new unit PVector
     */
    public static fromAngle(angle : number) : PVector;

    /**
     * Make a new 2D unit vector from an angle
     * 
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @return {PVector} the PVector
     * @param {number} angle
     */
    public static fromAngle(angle : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_copy.xml )
     * 
     * Gets a copy of the vector, returns a PVector object.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Get a copy of the vector
     * @return {PVector}
     */
    public copy() : PVector;

    public get() : PVector;

    /**
     * @param {Array} target
     * @return {Array}
     */
    public get(target : number[]) : number[];

    /**
     * ( begin auto-generated from PVector_mag.xml )
     * 
     * Calculates the magnitude (length) of the vector and returns the result
     * as a float (this is simply the equation <em>sqrt(x*x + y*y + z*z)</em>.)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Calculate the magnitude of the vector
     * @return {number} magnitude (length) of the vector
     * @see PVector#magSq()
     */
    public mag() : number;

    /**
     * ( begin auto-generated from PVector_mag.xml )
     * 
     * Calculates the squared magnitude of the vector and returns the result
     * as a float (this is simply the equation <em>(x*x + y*y + z*z)</em>.)
     * Faster if the real length is not required in the
     * case of comparing vectors, etc.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Calculate the magnitude of the vector, squared
     * @return {number} squared magnitude of the vector
     * @see PVector#mag()
     */
    public magSq() : number;

    /**
     * ( begin auto-generated from PVector_add.xml )
     * 
     * Adds x, y, and z components to a vector, adds one vector to another, or
     * adds two independent vectors together. The version of the method that
     * adds two vectors together is a static method and returns a PVector, the
     * others have no return value -- they act directly on the vector. See the
     * examples for more context.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v the vector to be added
     * @brief Adds x, y, and z components to a vector, one vector to another, or two independent vectors
     * @return {PVector}
     */
    public add(v : PVector) : PVector;

    /**
     * @param {number} x x component of the vector
     * @param {number} y y component of the vector
     * @return {PVector}
     */
    public add(x : number, y : number) : PVector;

    /**
     * @param {number} z z component of the vector
     * @param {number} x
     * @param {number} y
     * @return {PVector}
     */
    public add(x : number, y : number, z : number) : PVector;

    /**
     * Add two vectors
     * @param {PVector} v1 a vector
     * @param {PVector} v2 another vector
     * @return {PVector}
     */
    public static add(v1 : PVector, v2 : PVector) : PVector;

    /**
     * Add two vectors into a target vector
     * @param {PVector} target the target vector (if null, a new vector will be created)
     * @param {PVector} v1
     * @param {PVector} v2
     * @return {PVector}
     */
    public static add(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_sub.xml )
     * 
     * Subtracts x, y, and z components from a vector, subtracts one vector
     * from another, or subtracts two independent vectors. The version of the
     * method that subtracts two vectors is a static method and returns a
     * PVector, the others have no return value -- they act directly on the
     * vector. See the examples for more context.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v any variable of type PVector
     * @brief Subtract x, y, and z components from a vector, one vector from another, or two independent vectors
     * @return {PVector}
     */
    public sub(v : PVector) : PVector;

    /**
     * @param {number} x the x component of the vector
     * @param {number} y the y component of the vector
     * @return {PVector}
     */
    public sub(x : number, y : number) : PVector;

    /**
     * @param {number} z the z component of the vector
     * @param {number} x
     * @param {number} y
     * @return {PVector}
     */
    public sub(x : number, y : number, z : number) : PVector;

    /**
     * Subtract one vector from another
     * @param {PVector} v1 the x, y, and z components of a PVector object
     * @param {PVector} v2 the x, y, and z components of a PVector object
     * @return {PVector}
     */
    public static sub(v1 : PVector, v2 : PVector) : PVector;

    /**
     * Subtract one vector from another and store in another vector
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v1
     * @param {PVector} v2
     * @return {PVector}
     */
    public static sub(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_mult.xml )
     * 
     * Multiplies a vector by a scalar or multiplies one vector by another.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Multiply a vector by a scalar
     * @param {number} n the number to multiply with the vector
     * @return {PVector}
     */
    public mult(n : number) : PVector;

    /**
     * @param {PVector} v the vector to multiply by the scalar
     * @param {number} n
     * @return {PVector}
     */
    public static mult(v : PVector, n : number) : PVector;

    /**
     * Multiply a vector by a scalar, and write the result into a target PVector.
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v
     * @param {number} n
     * @return {PVector}
     */
    public static mult(v : PVector, n : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_div.xml )
     * 
     * Divides a vector by a scalar or divides one vector by another.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Divide a vector by a scalar
     * @param {number} n the number by which to divide the vector
     * @return {PVector}
     */
    public div(n : number) : PVector;

    /**
     * Divide a vector by a scalar and return the result in a new vector.
     * @param {PVector} v the vector to divide by the scalar
     * @return {PVector} a new vector that is v1 / n
     * @param {number} n
     */
    public static div(v : PVector, n : number) : PVector;

    /**
     * Divide a vector by a scalar and store the result in another vector.
     * @param {PVector} target PVector in which to store the result
     * @param {PVector} v
     * @param {number} n
     * @return {PVector}
     */
    public static div(v : PVector, n : number, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_dist.xml )
     * 
     * Calculates the Euclidean distance between two points (considering a
     * point as a vector object).
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v the x, y, and z coordinates of a PVector
     * @brief Calculate the distance between two points
     * @return {number}
     */
    public dist(v : PVector) : number;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @return {number} the Euclidean distance between v1 and v2
     */
    public static dist(v1 : PVector, v2 : PVector) : number;

    /**
     * ( begin auto-generated from PVector_dot.xml )
     * 
     * Calculates the dot product of two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v any variable of type PVector
     * @return {number} the dot product
     * @brief Calculate the dot product of two vectors
     */
    public dot(v : PVector) : number;

    /**
     * @param {number} x x component of the vector
     * @param {number} y y component of the vector
     * @param {number} z z component of the vector
     * @return {number}
     */
    public dot(x : number, y : number, z : number) : number;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @return {number}
     */
    public static dot(v1 : PVector, v2 : PVector) : number;

    /**
     * ( begin auto-generated from PVector_cross.xml )
     * 
     * Calculates and returns a vector composed of the cross product between
     * two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @param {PVector} v the vector to calculate the cross product
     * @brief Calculate and return the cross product
     * @return {PVector}
     */
    public cross(v : PVector) : PVector;

    /**
     * @param {PVector} v any variable of type PVector
     * @param {PVector} target PVector to store the result
     * @return {PVector}
     */
    public cross(v : PVector, target : PVector) : PVector;

    /**
     * @param {PVector} v1 any variable of type PVector
     * @param {PVector} v2 any variable of type PVector
     * @param {PVector} target PVector to store the result
     * @return {PVector}
     */
    public static cross(v1 : PVector, v2 : PVector, target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_normalize.xml )
     * 
     * Normalize the vector to length 1 (make it a unit vector).
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Normalize the vector to a length of 1
     * @return {PVector}
     */
    public normalize() : PVector;

    /**
     * @param {PVector} target Set to null to create a new vector
     * @return {PVector} a new vector (if target was null), or target
     */
    public normalize(target : PVector) : PVector;

    /**
     * ( begin auto-generated from PVector_limit.xml )
     * 
     * Limit the magnitude of this vector to the value used for the <b>max</b> parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {number} max the maximum magnitude for the vector
     * @brief Limit the magnitude of the vector
     * @return {PVector}
     */
    public limit(max : number) : PVector;

    /**
     * ( begin auto-generated from PVector_setMag.xml )
     * 
     * Set the magnitude of this vector to the value used for the <b>len</b> parameter.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {number} len the new length for this vector
     * @brief Set the magnitude of the vector
     * @return {PVector}
     */
    public setMag(len : number) : PVector;

    /**
     * Sets the magnitude of this vector, storing the result in another vector.
     * @param {PVector} target Set to null to create a new vector
     * @param {number} len the new length for the new vector
     * @return {PVector} a new vector (if target was null), or target
     */
    public setMag(target : PVector, len : number) : PVector;

    /**
     * ( begin auto-generated from PVector_setMag.xml )
     * 
     * Calculate the angle of rotation for this vector (only 2D vectors)
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @return {number} the angle of rotation
     * @brief Calculate the angle of rotation for this vector
     */
    public heading() : number;

    public heading2D() : number;

    /**
     * ( begin auto-generated from PVector_rotate.xml )
     * 
     * Rotate the vector by an angle (only 2D vectors), magnitude remains the same
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Rotate the vector by an angle (2D only)
     * @param {number} theta the angle of rotation
     * @return {PVector}
     */
    public rotate(theta : number) : PVector;

    /**
     * ( begin auto-generated from PVector_rotate.xml )
     * 
     * Linear interpolate the vector to another vector
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @brief Linear interpolate the vector to another vector
     * @param {PVector} v the vector to lerp to
     * @param {number} amt  The amount of interpolation; some value between 0.0 (old vector) and 1.0 (new vector). 0.1 is very near the old vector; 0.5 is halfway in between.
     * @see PApplet#lerp(float, float, float)
     * @return {PVector}
     */
    public lerp(v : PVector, amt : number) : PVector;

    /**
     * Linear interpolate between two vectors (returns a new PVector object)
     * @param {PVector} v1 the vector to start from
     * @param {PVector} v2 the vector to lerp to
     * @param {number} amt
     * @return {PVector}
     */
    public static lerp(v1 : PVector, v2 : PVector, amt : number) : PVector;

    /**
     * Linear interpolate the vector to x,y,z values
     * @param {number} x the x component to lerp to
     * @param {number} y the y component to lerp to
     * @param {number} z the z component to lerp to
     * @param {number} amt
     * @return {PVector}
     */
    public lerp(x : number, y : number, z : number, amt : number) : PVector;

    /**
     * ( begin auto-generated from PVector_angleBetween.xml )
     * 
     * Calculates and returns the angle (in radians) between two vectors.
     * 
     * ( end auto-generated )
     * 
     * @webref pvector:method
     * @usage web_application
     * @param {PVector} v1 the x, y, and z components of a PVector
     * @param {PVector} v2 the x, y, and z components of a PVector
     * @brief Calculate and return the angle between two vectors
     * @return {number}
     */
    public static angleBetween(v1 : PVector, v2 : PVector) : number;

    /**
     * 
     * @return {string}
     */
    public toString() : string;

    /**
     * 
     * @param {*} obj
     * @return {boolean}
     */
    public equals(obj : any) : boolean;

    /**
     * 
     * @return {number}
     */
    public hashCode() : number;
}


