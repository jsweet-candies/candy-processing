/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {{ str: string, cursor: number }} reader
 * @class
 * @author JSON.org
 */
declare class JSONObject {
    /**
     * The maximum number of keys in the key pool.
     */
    static keyPoolSize : number;

    /**
     * Key pooling is like string interning, but without permanently tying up
     * memory. To help conserve memory, storage of duplicated key strings in
     * JSONObjects will be avoided by using a key pool to manage unique key
     * string objects. This is used by JSONObject.put(string, object).
     */
    static keyPool : any;

    /**
     * The map where the JSONObject's properties are kept.
     */
    /*private*/ map : any;

    /**
     * It is sometimes more convenient and less ambiguous to have a
     * <code>NULL</code> object than to use Java's <code>null</code> value.
     * <code>JSONObject.NULL.equals(null)</code> returns <code>true</code>.
     * <code>JSONObject.NULL.toString()</code> returns <code>"null"</code>.
     */
    public static NULL : any;

    public constructor();

    public constructor(reader : { str: string, cursor: number });

    constructor(x : JSONTokener);

    constructor(map : any);

    public constructor(dict : IntDict);

    public constructor(dict : FloatDict);

    public constructor(dict : StringDict);

    constructor(bean : any);

    /**
     * Construct a JSONObject from a source JSON text string.
     * This is the most commonly used JSONObject constructor.
     * @param {string} source    A string beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @exception RuntimeException If there is a syntax error in the source
     * string or a duplicated key.
     * @return {JSONObject}
     */
    public static parse(source : string) : JSONObject;

    /**
     * Produce a string from a double. The string "null" will be returned if
     * the number is not finite.
     * @param  {number} d A double.
     * @return {string} A String.
     */
    static doubleToString(d : number) : string;

    /**
     * Get the value object associated with a key.
     * 
     * @param {string} key   A key string.
     * @return      {*} The object associated with the key.
     * @throws      RuntimeException if the key is not found.
     */
    public get(key : string) : any;

    /**
     * Gets the String associated with a key
     * 
     * @webref jsonobject:method
     * @brief Gets the string value associated with a key
     * @param {string} key a key string
     * @return {string} A string which is the value.
     * @throws RuntimeException if there is no string value for the key.
     * @see JSONObject#getInt(String)
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getBoolean(String)
     */
    public getString(key : string) : string;

    /**
     * Get an optional string associated with a key.
     * It returns the defaultValue if there is no such key.
     * 
     * @param {string} key   A key string.
     * @param {string} defaultValue     The default.
     * @return      {string} A string which is the value.
     */
    public getString(key : string, defaultValue : string) : string;

    /**
     * Gets the int value associated with a key
     * 
     * @webref jsonobject:method
     * @brief Gets the int value associated with a key
     * @param {string} key A key string.
     * @return {number} The integer value.
     * @throws RuntimeException if the key is not found or if the value cannot
     * be converted to an integer.
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getString(String)
     * @see JSONObject#getBoolean(String)
     */
    public getInt(key : string) : number;

    /**
     * Get an optional int value associated with a key,
     * or the default if there is no such key or if the value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key   A key string.
     * @param {number} defaultValue     The default.
     * @return      {number} An object which is the value.
     */
    public getInt(key : string, defaultValue : number) : number;

    /**
     * Get the long value associated with a key.
     * 
     * @param {string} key   A key string.
     * @return      {number} The long value.
     * @throws   RuntimeException if the key is not found or if the value cannot
     * be converted to a long.
     */
    public getLong(key : string) : number;

    /**
     * Get an optional long value associated with a key,
     * or the default if there is no such key or if the value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key          A key string.
     * @param {number} defaultValue The default.
     * @return             {number} An object which is the value.
     */
    public getLong(key : string, defaultValue : number) : number;

    /**
     * @webref jsonobject:method
     * @brief Gets the float value associated with a key
     * @param {string} key a key string
     * @see JSONObject#getInt(String)
     * @see JSONObject#getString(String)
     * @see JSONObject#getBoolean(String)
     * @return {number}
     */
    public getFloat(key : string) : number;

    public getFloat(key : string, defaultValue : number) : number;

    /**
     * Get the double value associated with a key.
     * @param {string} key   A key string.
     * @return      {number} The numeric value.
     * @throws RuntimeException if the key is not found or
     * if the value is not a Number object and cannot be converted to a number.
     */
    public getDouble(key : string) : number;

    /**
     * Get an optional double associated with a key, or the
     * defaultValue if there is no such key or if its value is not a number.
     * If the value is a string, an attempt will be made to evaluate it as
     * a number.
     * 
     * @param {string} key   A key string.
     * @param {number} defaultValue     The default.
     * @return      {number} An object which is the value.
     */
    public getDouble(key : string, defaultValue : number) : number;

    /**
     * Get the boolean value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the boolean value associated with a key
     * @param {string} key a key string
     * @return {boolean} The truth.
     * @throws RuntimeException if the value is not a Boolean or the String "true" or "false".
     * @see JSONObject#getInt(String)
     * @see JSONObject#getFloat(String)
     * @see JSONObject#getString(String)
     */
    public getBoolean(key : string) : boolean;

    /**
     * Get an optional boolean associated with a key.
     * It returns the defaultValue if there is no such key, or if it is not
     * a Boolean or the String "true" or "false" (case insensitive).
     * 
     * @param {string} key              A key string.
     * @param {boolean} defaultValue     The default.
     * @return      {boolean} The truth.
     */
    public getBoolean(key : string, defaultValue : boolean) : boolean;

    /**
     * Get the JSONArray value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONArray value associated with a key
     * @param {string} key a key string
     * @return {JSONArray} A JSONArray which is the value, or null if not present
     * @throws RuntimeException if the value is not a JSONArray.
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#setJSONArray(String, JSONArray)
     */
    public getJSONArray(key : string) : JSONArray;

    /**
     * Get the JSONObject value associated with a key.
     * 
     * @webref jsonobject:method
     * @brief Gets the JSONObject value associated with a key
     * @param {string} key a key string
     * @return {JSONObject} A JSONObject which is the value or null if not available.
     * @throws RuntimeException if the value is not a JSONObject.
     * @see JSONObject#getJSONArray(String)
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#setJSONArray(String, JSONArray)
     */
    public getJSONObject(key : string) : JSONObject;

    /**
     * Determine if the JSONObject contains a specific key.
     * @param {string} key   A key string.
     * @return      {boolean} true if the key exists in the JSONObject.
     */
    public hasKey(key : string) : boolean;

    /**
     * Determine if the value associated with the key is null or if there is
     * no value.
     * 
     * @webref
     * @param {string} key   A key string.
     * @return      {boolean} true if there is no value associated with the key or if
     * the value is the JSONObject.NULL object.
     */
    public isNull(key : string) : boolean;

    /**
     * Get an enumeration of the keys of the JSONObject.
     * 
     * @return {*} An iterator of the keys.
     */
    public keyIterator() : any;

    /**
     * Get a set of keys of the JSONObject.
     * 
     * @return {Array} A keySet.
     */
    public keys() : Array<any>;

    /**
     * Get the number of keys stored in the JSONObject.
     * 
     * @return {number} The number of keys in the JSONObject.
     */
    public size() : number;

    /**
     * Produce a string from a Number.
     * @param  {number} number A Number
     * @return {string} A String.
     * @throws RuntimeException If number is null or a non-finite number.
     * @private
     */
    static numberToString(number : number) : string;

    /**
     * Get an optional value associated with a key.
     * @param {string} key   A key string.
     * @return      {*} An object which is the value, or null if there is no value.
     * @private
     */
    opt(key : string) : any;

    populateMap(bean : any);

    /**
     * @webref jsonobject:method
     * @brief Put a key/String pair in the JSONObject
     * @param {string} key a key string
     * @param {string} value the value to assign
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setBoolean(String, boolean)
     * @return {JSONObject}
     */
    public setString(key : string, value : string) : JSONObject;

    /**
     * Put a key/int pair in the JSONObject.
     * 
     * @webref jsonobject:method
     * @brief Put a key/int pair in the JSONObject
     * @param {string} key a key string
     * @param {number} value the value to assign
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setString(String, String)
     * @see JSONObject#setBoolean(String, boolean)
     */
    public setInt(key : string, value : number) : JSONObject;

    /**
     * Put a key/long pair in the JSONObject.
     * 
     * @param {string} key   A key string.
     * @param {number} value A long which is the value.
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     */
    public setLong(key : string, value : number) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Put a key/float pair in the JSONObject
     * @param {string} key a key string
     * @param {number} value the value to assign
     * @throws RuntimeException If the key is null or if the number is NaN or infinite.
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setString(String, String)
     * @see JSONObject#setBoolean(String, boolean)
     * @return {JSONObject}
     */
    public setFloat(key : string, value : number) : JSONObject;

    /**
     * Put a key/double pair in the JSONObject.
     * 
     * @param {string} key   A key string.
     * @param {number} value A double which is the value.
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null or if the number is NaN or infinite.
     */
    public setDouble(key : string, value : number) : JSONObject;

    /**
     * Put a key/boolean pair in the JSONObject.
     * 
     * @webref jsonobject:method
     * @brief Put a key/boolean pair in the JSONObject
     * @param {string} key a key string
     * @param {boolean} value the value to assign
     * @return {JSONObject} this.
     * @throws RuntimeException If the key is null.
     * @see JSONObject#setInt(String, int)
     * @see JSONObject#setFloat(String, float)
     * @see JSONObject#setString(String, String)
     */
    public setBoolean(key : string, value : boolean) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Sets the JSONObject value associated with a key
     * @param {string} key a key string
     * @param {JSONObject} value value to assign
     * @see JSONObject#setJSONArray(String, JSONArray)
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#getJSONArray(String)
     * @return {JSONObject}
     */
    public setJSONObject(key : string, value : JSONObject) : JSONObject;

    /**
     * @webref jsonobject:method
     * @brief Sets the JSONArray value associated with a key
     * @param {string} key a key string
     * @param {JSONArray} value value to assign
     * @see JSONObject#setJSONObject(String, JSONObject)
     * @see JSONObject#getJSONObject(String)
     * @see JSONObject#getJSONArray(String)
     * @return {JSONObject}
     */
    public setJSONArray(key : string, value : JSONArray) : JSONObject;

    /**
     * Put a key/value pair in the JSONObject. If the value is null,
     * then the key will be removed from the JSONObject if it is present.
     * @param {string} key   A key string.
     * @param {*} value An object which is the value. It should be of one of these
     * types: Boolean, Double, Integer, JSONArray, JSONObject, Long, String,
     * or the JSONObject.NULL object.
     * @return {JSONObject} this.
     * @throws RuntimeException If the value is non-finite number
     * or if the key is null.
     */
    public put(key : string, value : any) : JSONObject;

    /**
     * Put a key/value pair in the JSONObject, but only if the key and the
     * value are both non-null, and only if there is not already a member
     * with that name.
     * @param {string} key
     * @param {*} value
     * @return {JSONObject} {@code this}.
     * @throws RuntimeException if the key is a duplicate, or if
     * {@link #put(String,Object)} throws.
     * @private
     */
    putOnce(key : string, value : any) : JSONObject;

    /**
     * Produce a string in double quotes with backslash sequences in all the
     * right places. A backslash will be inserted within </, producing <\/,
     * allowing JSON text to be delivered in HTML. In JSON text, a string
     * cannot contain a control character or an unescaped quote or backslash.
     * @param {string} string A String
     * @return  {string} A String correctly formatted for insertion in a JSON text.
     */
    static quote(string : string) : string;

    static quote(string : string, w : java.io.Writer) : java.io.Writer;

    /**
     * Remove a name and its value, if present.
     * @param {string} key The name to be removed.
     * @return {*} The value that was associated with the name,
     * or null if there was no value.
     */
    public remove(key : string) : any;

    /**
     * Try to convert a string into a number, boolean, or null. If the string
     * can't be converted, return the string.
     * @param {string} string A String.
     * @return {*} A simple JSON value.
     */
    static stringToValue(string : string) : any;

    /**
     * Throw an exception if the object is a NaN or infinite number.
     * @param {*} o The object to test. If not Float or Double, accepted without
     * exceptions.
     * @throws RuntimeException If o is infinite or NaN.
     */
    static testValidity(o : any);

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
     * Make a prettyprinted JSON text of this JSONObject.
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * @param {number} indentFactor The number of spaces to add to each level of
     * indentation.
     * @return {string} a printable, displayable, portable, transmittable
     * representation of the object, beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @throws RuntimeException If the object contains an invalid number.
     */
    public format(indentFactor : number) : string;

    /**
     * Make a JSON text of an Object value. If the object has an
     * value.toJSONString() method, then that method will be used to produce
     * the JSON text. The method is required to produce a strictly
     * conforming text. If the object does not contain a toJSONString
     * method (which is the most common case), then a text will be
     * produced by other means. If the value is an array or Collection,
     * then a JSONArray will be made from it and its toJSONString method
     * will be called. If the value is a MAP, then a JSONObject will be made
     * from it and its toJSONString method will be called. Otherwise, the
     * value's toString method will be called, and the result will be quoted.
     * 
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * @param {*} value The value to be serialized.
     * @return {string} a printable, displayable, transmittable
     * representation of the object, beginning
     * with <code>{</code>&nbsp;<small>(left brace)</small> and ending
     * with <code>}</code>&nbsp;<small>(right brace)</small>.
     * @throws RuntimeException If the value is or contains an invalid number.
     */
    static valueToString(value : any) : string;

    /**
     * Wrap an object, if necessary. If the object is null, return the NULL
     * object. If it is an array or collection, wrap it in a JSONArray. If
     * it is a map, wrap it in a JSONObject. If it is a standard property
     * (Double, String, et al) then it is already wrapped. Otherwise, if it
     * comes from one of the java packages, turn it into a string. And if
     * it doesn't, try to wrap it in a JSONObject. If the wrapping fails,
     * then null is returned.
     * 
     * @param {*} object The object to wrap
     * @return {*} The wrapped value
     */
    static wrap(object : any) : any;

    static writeValue(writer : java.io.Writer, value : any, indentFactor : number, indent : number) : java.io.Writer;

    static indent(writer : java.io.Writer, indent : number);

    /**
     * Write the contents of the JSONObject as JSON text to a writer.
     * <p>
     * Warning: This method assumes that the data structure is acyclical.
     * 
     * @return {java.io.Writer} The writer.
     * @throws RuntimeException
     * @param {java.io.Writer} writer
     * @param {number} indentFactor
     * @param {number} indent
     */
    writeInternal(writer : java.io.Writer, indentFactor : number, indent : number) : java.io.Writer;
}

declare namespace JSONObject {

    /**
     * JSONObject.NULL is equivalent to the value that JavaScript calls null,
     * whilst Java's null is equivalent to the value that JavaScript calls
     * undefined.
     * @class
     */
    export class Null {
        /**
         * There is only intended to be a single instance of the NULL object,
         * so the clone method returns itself.
         * @return     {*} NULL.
         */
        clone() : any;

        /**
         * A Null object is equal to the null value and to itself.
         * @param {*} object    An object to test for nullness.
         * @return {boolean} true if the object parameter is the JSONObject.NULL object
         * or null.
         */
        public equals(object : any) : boolean;

        /**
         * Get the "null" string value.
         * @return {string} The string "null".
         */
        public toString() : string;

        /**
         * 
         * @return {number}
         */
        public hashCode() : number;
    }
}



