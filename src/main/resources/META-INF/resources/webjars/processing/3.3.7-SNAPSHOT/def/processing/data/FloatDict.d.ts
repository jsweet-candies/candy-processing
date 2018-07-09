/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class FloatDict {
    /**
     * Number of elements in the table
     */
    count : number;

    keys : any;

    values : any;

    /**
     * Internal implementation for faster lookups
     */
    /*private*/ indices : any;

    public constructor();

    public constructor(length : number);

    public constructor(reader : { str: string, cursor: number });

    public constructor(keys : string[], values : number[]);

    public constructor(pairs : any[][]);

    /**
     * @webref floatdict:method
     * @brief Returns the number of key/value pairs
     * @return {number}
     */
    public size() : number;

    /**
     * Resize the internal data, this can only be used to shrink the list.
     * Helpful for situations like sorting and then grabbing the top 50 entries.
     * @param {number} length
     */
    public resize(length : number);

    /**
     * Remove all entries.
     * 
     * @webref floatdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : java.lang.Iterable<FloatDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref floatdict:method
     * @brief Return a copy of the internal keys array
     * @return {Array}
     */
    public keyArray() : string[];

    public keyArray(outgoing : string[]) : string[];

    public value(index : number) : number;

    public valueIterator() : any;

    /**
     * Create a new array and copy each of the values into it.
     * 
     * @webref floatdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : number[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * @param {Array} array
     * @return {Array}
     */
    public valueArray(array : number[]) : number[];

    /**
     * Return a value for the specified key.
     * 
     * @webref floatdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {number}
     */
    public get(key : string) : number;

    public get(key : string, alternate : number) : number;

    /**
     * @webref floatdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {number} amount
     */
    public set(key : string, amount : number);

    public setIndex(index : number, key : string, value : number);

    /**
     * @webref floatdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    /**
     * @webref floatdict:method
     * @brief Add to a value
     * @param {string} key
     * @param {number} amount
     */
    public add(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Subtract from a value
     * @param {string} key
     * @param {number} amount
     */
    public sub(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Multiply a value
     * @param {string} key
     * @param {number} amount
     */
    public mult(key : string, amount : number);

    /**
     * @webref floatdict:method
     * @brief Divide a value
     * @param {string} key
     * @param {number} amount
     */
    public div(key : string, amount : number);

    checkMinMax(functionName : string);

    /**
     * @webref floatlist:method
     * @brief Return the smallest value
     * @return {number}
     */
    public minIndex() : number;

    public minKey() : string;

    public minValue() : number;

    /**
     * @webref floatlist:method
     * @brief Return the largest value
     * @return {number}
     */
    public maxIndex() : number;

    /**
     * The key for a max value; null if empty or everything is NaN (no max).
     * @return {string}
     */
    public maxKey() : string;

    /**
     * The max value. (Or NaN if no entries or they're all NaN.)
     * @return {number}
     */
    public maxValue() : number;

    public sum() : number;

    public sumDouble() : number;

    public index(what : string) : number;

    create(what : string, much : number);

    /**
     * @webref floatdict:method
     * @brief Remove a key/value pair
     * @param {string} key
     * @return {number}
     */
    public remove(key : string) : number;

    public removeIndex(index : number) : string;

    public swap(a : number, b : number);

    /**
     * Sort the keys alphabetically (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref floatdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * @webref floatdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in descending order (largest value will be at [0]).
     * 
     * @webref floatdict:method
     * @brief Sort by values in ascending order
     */
    public sortValues();

    /**
     * Set true to ensure that the order returned is identical. Slightly
     * slower because the tie-breaker for identical values compares the keys.
     * @param {boolean} stable
     */
    public sortValues(stable : boolean);

    /**
     * @webref floatdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    public sortValuesReverse(stable : boolean);

    sortImpl(useKeys : boolean, reverse : boolean, stable : boolean);

    /**
     * Sum all of the values in this dictionary, then return a new FloatDict of
     * each key, divided by the total sum. The total for all values will be ~1.0.
     * @return {FloatDict} a FloatDict with the original keys, mapped to their pct of the total
     */
    public getPercent() : FloatDict;

    /**
     * Returns a duplicate copy of this object.
     * @return {FloatDict}
     */
    public copy() : FloatDict;

    public print();

    /**
     * Write tab-delimited entries out to
     * @param {*} writer
     */
    public write(writer : any);

    /**
     * Return this dictionary as a String in JSON format.
     * @return {string}
     */
    public toJSON() : string;

    /**
     * 
     * @return {string}
     */
    public toString() : string;
}

declare namespace FloatDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : number;

        constructor(__parent: any, key : string, value : number);
    }
}



