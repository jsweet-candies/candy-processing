/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {{ str: string, cursor: number }} reader
 * @class
 * @author JSON.org
 */
declare class JSONArray {
    /**
     * The arrayList where the JSONArray's properties are kept.
     */
    /*private*/ myArrayList : Array<any>;

    public constructor();

    public constructor(reader : { str: string, cursor: number });

    constructor(x : JSONTokener);

    public constructor(list : IntList);

    public constructor(list : FloatList);

    public constructor(list : StringList);

    /**
     * Construct a JSONArray from a source JSON text.
     * @param {string} source     A string that begins with
     * <code>[</code>&nbsp;<small>(left bracket)</small>
     * and ends with <code>]</code>&nbsp;<small>(right bracket)</small>.
     * @return {JSONArray} {@code null} if there is a syntax error.
     */
    public static parse(source : string) : JSONArray;

    constructor(array : any);

    /**
     * Get the optional object value associated with an index.
     * @param {number} index must be between 0 and length() - 1
     * @return      {*} An object value, or null if there is no
     * object at that index.
     * @private
     */
    /*private*/ opt(index : number) : any;

    /**
     * Get the object value associated with an index.
     * @param {number} index must be between 0 and length() - 1
     * @return {*} An object value.
     * @throws RuntimeException If there is no value for the index.
     */
    public get(index : number) : any;

    /**
     * Get the string associated with an index.
     * 
     * @webref jsonarray:method
     * @brief Gets the String value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return      {string} A string value.
     * @throws RuntimeException If there is no string value for the index.
     * @see JSONArray#getInt(int)
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getBoolean(int)
     */
    public getString(index : number) : string;

    /**
     * Get the optional string associated with an index.
     * The defaultValue is returned if the key is not found.
     * 
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {string} defaultValue     The default value.
     * @return      {string} A String value.
     */
    public getString(index : number, defaultValue : string) : string;

    /**
     * Get the int value associated with an index.
     * 
     * @webref jsonarray:method
     * @brief Gets the int value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return {number} The value.
     * @throws RuntimeException If the key is not found or if the value is not a number.
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getString(int)
     * @see JSONArray#getBoolean(int)
     */
    public getInt(index : number) : number;

    /**
     * Get the optional int value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getInt(index : number, defaultValue : number) : number;

    /**
     * Get the long value associated with an index.
     * 
     * @param {number} index The index must be between 0 and length() - 1
     * @return      {number} The value.
     * @throws   RuntimeException If the key is not found or if the value cannot
     * be converted to a number.
     */
    public getLong(index : number) : number;

    /**
     * Get the optional long value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getLong(index : number, defaultValue : number) : number;

    /**
     * Get a value from an index as a float. JSON uses 'double' values
     * internally, so this is simply getDouble() cast to a float.
     * 
     * @webref jsonarray:method
     * @brief Gets the float value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @see JSONArray#getInt(int)
     * @see JSONArray#getString(int)
     * @see JSONArray#getBoolean(int)
     * @return {number}
     */
    public getFloat(index : number) : number;

    public getFloat(index : number, defaultValue : number) : number;

    /**
     * Get the double value associated with an index.
     * 
     * @param {number} index must be between 0 and length() - 1
     * @return      {number} The value.
     * @throws   RuntimeException If the key is not found or if the value cannot
     * be converted to a number.
     */
    public getDouble(index : number) : number;

    /**
     * Get the optional double value associated with an index.
     * The defaultValue is returned if there is no value for the index,
     * or if the value is not a number and cannot be converted to a number.
     * 
     * @param {number} index subscript
     * @param {number} defaultValue     The default value.
     * @return      {number} The value.
     */
    public getDouble(index : number, defaultValue : number) : number;

    /**
     * Get the boolean value associated with an index.
     * The string values "true" and "false" are converted to boolean.
     * 
     * @webref jsonarray:method
     * @brief Gets the boolean value associated with an index
     * @param {number} index must be between 0 and length() - 1
     * @return      {boolean} The truth.
     * @throws RuntimeException If there is no value for the index or if the
     * value is not convertible to boolean.
     * @see JSONArray#getInt(int)
     * @see JSONArray#getFloat(int)
     * @see JSONArray#getString(int)
     */
    public getBoolean(index : number) : boolean;

    /**
     * Get the optional boolean value associated with an index.
     * It returns the defaultValue if there is no value at that index or if
     * it is not a Boolean or the String "true" or "false" (case insensitive).
     * 
     * @param {number} index The index must be between 0 and length() - 1.
     * @param {boolean} defaultValue     A boolean default.
     * @return      {boolean} The truth.
     */
    public getBoolean(index : number, defaultValue : boolean) : boolean;

    /**
     * Get the JSONArray associated with an index.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONArray associated with an index value
     * @param {number} index must be between 0 and length() - 1
     * @return {JSONArray} A JSONArray value.
     * @throws RuntimeException If there is no value for the index. or if the
     * value is not a JSONArray
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#setJSONArray(int, JSONArray)
     */
    public getJSONArray(index : number) : JSONArray;

    public getJSONArray(index : number, defaultValue : JSONArray) : JSONArray;

    /**
     * Get the JSONObject associated with an index.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONObject associated with an index value
     * @param {number} index the index value of the object to get
     * @return {JSONObject} A JSONObject value.
     * @throws RuntimeException If there is no value for the index or if the
     * value is not a JSONObject
     * @see JSONArray#getJSONArray(int)
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#setJSONArray(int, JSONArray)
     */
    public getJSONObject(index : number) : JSONObject;

    public getJSONObject(index : number, defaultValue : JSONObject) : JSONObject;

    /**
     * Get this entire array as a String array.
     * 
     * @webref jsonarray:method
     * @brief Gets the entire array as an array of Strings
     * @see JSONArray#getIntArray()
     * @return {Array}
     */
    public getStringArray() : string[];

    /**
     * Get this entire array as an int array. Everything must be an int.
     * 
     * @webref jsonarray:method
     * @brief Gets the entire array as array of ints
     * @see JSONArray#getStringArray()
     * @return {Array}
     */
    public getIntArray() : number[];

    /**
     * Get this entire array as a long array. Everything must be an long.
     * @return {Array}
     */
    public getLongArray() : number[];

    /**
     * Get this entire array as a float array. Everything must be an float.
     * @return {Array}
     */
    public getFloatArray() : number[];

    /**
     * Get this entire array as a double array. Everything must be an double.
     * @return {Array}
     */
    public getDoubleArray() : number[];

    /**
     * Get this entire array as a boolean array. Everything must be a boolean.
     * @return {Array}
     */
    public getBooleanArray() : boolean[];

    /**
     * Append an String value. This increases the array's length by one.
     * 
     * @webref jsonarray:method
     * @brief Appends a value, increasing the array's length by one
     * @param {string} value a String value
     * @return {JSONArray} this.
     * @see JSONArray#size()
     * @see JSONArray#remove(int)
     */
    public append(value : string) : JSONArray;

    /**
     * Append an int value. This increases the array's length by one.
     * 
     * @param {number} value an int value
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append an long value. This increases the array's length by one.
     * 
     * @nowebref
     * @param {number} value A long value.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a float value. This increases the array's length by one.
     * This will store the value as a double, since there are no floats in JSON.
     * 
     * @param {number} value a float value
     * @throws RuntimeException if the value is not finite.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a double value. This increases the array's length by one.
     * 
     * @nowebref
     * @param {number} value A double value.
     * @throws RuntimeException if the value is not finite.
     * @return {JSONArray} this.
     */
    public append(value : number) : JSONArray;

    /**
     * Append a boolean value. This increases the array's length by one.
     * 
     * @param {boolean} value a boolean value
     * @return {JSONArray} this.
     */
    public append(value : boolean) : JSONArray;

    /**
     * @param {JSONArray} value a JSONArray value
     * @return {JSONArray}
     */
    public append(value : JSONArray) : JSONArray;

    /**
     * @param {JSONObject} value a JSONObject value
     * @return {JSONArray}
     */
    public append(value : JSONObject) : JSONArray;

    /**
     * Append an object value. This increases the array's length by one.
     * @param {*} value An object value.  The value should be a
     * Boolean, Double, Integer, JSONArray, JSONObject, Long, or String, or the
     * JSONObject.NULL object.
     * @return {JSONArray} this.
     */
    append(value : any) : JSONArray;

    /**
     * Put or replace a String value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * 
     * @webref jsonarray:method
     * @brief Put a String value in the JSONArray
     * @param {number} index an index value
     * @param {string} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setString(index : number, value : string) : JSONArray;

    /**
     * Put or replace an int value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * 
     * @webref jsonarray:method
     * @brief Put an int value in the JSONArray
     * @param {number} index an index value
     * @param {number} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setString(int, String)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setInt(index : number, value : number) : JSONArray;

    /**
     * Put or replace a long value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * @param {number} index The subscript.
     * @param {number} value A long value.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     */
    public setLong(index : number, value : number) : JSONArray;

    /**
     * Put or replace a float value. If the index is greater than the length
     * of the JSONArray, then null elements will be added as necessary to pad
     * it out. There are no 'double' values in JSON, so this is passed to
     * setDouble(value).
     * 
     * @webref jsonarray:method
     * @brief Put a float value in the JSONArray
     * @param {number} index an index value
     * @param {number} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the value is
     * not finite.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setString(int, String)
     * @see JSONArray#setBoolean(int, boolean)
     */
    public setFloat(index : number, value : number) : JSONArray;

    /**
     * Put or replace a double value. If the index is greater than the length of
     * the JSONArray, then null elements will be added as necessary to pad
     * it out.
     * @param {number} index The subscript.
     * @param {number} value A double value.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the value is
     * not finite.
     */
    public setDouble(index : number, value : number) : JSONArray;

    /**
     * Put or replace a boolean value in the JSONArray. If the index is greater
     * than the length of the JSONArray, then null elements will be added as
     * necessary to pad it out.
     * 
     * @webref jsonarray:method
     * @brief Put a boolean value in the JSONArray
     * @param {number} index an index value
     * @param {boolean} value the value to assign
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative.
     * @see JSONArray#setInt(int, int)
     * @see JSONArray#setFloat(int, float)
     * @see JSONArray#setString(int, String)
     */
    public setBoolean(index : number, value : boolean) : JSONArray;

    /**
     * @webref jsonarray:method
     * @brief Sets the JSONArray value associated with an index value
     * @param {number} index the index value to target
     * @param {JSONArray} value the value to assign
     * @see JSONArray#setJSONObject(int, JSONObject)
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#getJSONArray(int)
     * @return {JSONArray}
     */
    public setJSONArray(index : number, value : JSONArray) : JSONArray;

    /**
     * @webref jsonarray:method
     * @brief Sets the JSONObject value associated with an index value
     * @param {number} index the index value to target
     * @param {JSONObject} value the value to assign
     * @see JSONArray#setJSONArray(int, JSONArray)
     * @see JSONArray#getJSONObject(int)
     * @see JSONArray#getJSONArray(int)
     * @return {JSONArray}
     */
    public setJSONObject(index : number, value : JSONObject) : JSONArray;

    /**
     * Put or replace an object value in the JSONArray. If the index is greater
     * than the length of the JSONArray, then null elements will be added as
     * necessary to pad it out.
     * @param {number} index The subscript.
     * @param {*} value The value to put into the array. The value should be a
     * Boolean, Double, Integer, JSONArray, JSONObject, Long, or String, or the
     * JSONObject.NULL object.
     * @return {JSONArray} this.
     * @throws RuntimeException If the index is negative or if the the value is
     * an invalid number.
     * @private
     */
    /*private*/ set(index : number, value : any) : JSONArray;

    /**
     * Get the number of elements in the JSONArray, included nulls.
     * 
     * @webref jsonarray:method
     * @brief Gets the number of elements in the JSONArray
     * @return {number} The length (or size).
     * @see JSONArray#append(String)
     * @see JSONArray#remove(int)
     */
    public size() : number;

    /**
     * Determine if the value is null.
     * @webref
     * @param {number} index must be between 0 and length() - 1
     * @return {boolean} true if the value at the index is null, or if there is no value.
     */
    public isNull(index : number) : boolean;

    /**
     * Remove an index and close the hole.
     * 
     * @webref jsonarray:method
     * @brief Removes an element
     * @param {number} index the index value of the element to be removed
     * @return {*} The value that was associated with the index, or null if there was no value.
     * @see JSONArray#size()
     * @see JSONArray#append(String)
     */
    public remove(index : number) : any;

    public save(file : java.io.File, options : string) : boolean;

    public write(output : java.io.PrintWriter) : boolean;

    public write(output : java.io.PrintWriter, options : string) : boolean;

    /**
     * Return the JSON data formatted with two spaces for indents.
     * Chosen to do this since it's the most common case (e.g. with println()).
     * Same as format(2). Use the format() function for more options.
     * @return {string}
     */
    public toString() : string;

    /**
     * Make a pretty-printed JSON text of this JSONArray.
     * Warning: This method assumes that the data structure is acyclical.
     * @param {number} indentFactor The number of spaces to add to each level of
     * indentation. Use -1 to specify no indentation and no newlines.
     * @return {string} a printable, displayable, transmittable
     * representation of the object, beginning
     * with <code>[</code>&nbsp;<small>(left bracket)</small> and ending
     * with <code>]</code>&nbsp;<small>(right bracket)</small>.
     */
    public format(indentFactor : number) : string;

    /**
     * Write the contents of the JSONArray as JSON text to a writer.
     * <p>
     * Warning: This method assumes that the data structure is acyclic.
     * 
     * @param {number} indentFactor
     * The number of spaces to add to each level of indentation.
     * Use -1 to specify no indentation and no newlines.
     * @param {number} indent
     * The indention of the top level.
     * @return {java.io.Writer} The writer.
     * @throws RuntimeException
     * @param {java.io.Writer} writer
     */
    writeInternal(writer : java.io.Writer, indentFactor : number, indent : number) : java.io.Writer;

    /**
     * Make a string from the contents of this JSONArray. The
     * <code>separator</code> string is inserted between each element.
     * Warning: This method assumes that the data structure is acyclic.
     * @param {string} separator A string that will be inserted between the elements.
     * @return {string} a string.
     * @throws RuntimeException If the array contains an invalid number.
     */
    public join(separator : string) : string;
}


