/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class IntDict {
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
     * Returns the number of key/value pairs
     * 
     * @webref intdict:method
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
     * @webref intdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : java.lang.Iterable<IntDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref intdict:method
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
     * @webref intdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : number[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * 
     * @param {Array} array values to copy into the array
     * @return {Array}
     */
    public valueArray(array : number[]) : number[];

    /**
     * Return a value for the specified key.
     * 
     * @webref intdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {number}
     */
    public get(key : string) : number;

    public get(key : string, alternate : number) : number;

    /**
     * Create a new key/value pair or change the value of one.
     * 
     * @webref intdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {number} amount
     */
    public set(key : string, amount : number);

    public setIndex(index : number, key : string, value : number);

    /**
     * @webref intdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    /**
     * Increase the value associated with a specific key by 1.
     * 
     * @webref intdict:method
     * @brief Increase the value of a specific key value by 1
     * @param {string} key
     */
    public increment(key : string);

    /**
     * Merge another dictionary into this one. Calling this increment()
     * since it doesn't make sense in practice for the other dictionary types,
     * even though it's technically an add().
     * @param {IntDict} dict
     */
    public increment(dict : IntDict);

    /**
     * @webref intdict:method
     * @brief Add to a value
     * @param {string} key
     * @param {number} amount
     */
    public add(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Subtract from a value
     * @param {string} key
     * @param {number} amount
     */
    public sub(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Multiply a value
     * @param {string} key
     * @param {number} amount
     */
    public mult(key : string, amount : number);

    /**
     * @webref intdict:method
     * @brief Divide a value
     * @param {string} key
     * @param {number} amount
     */
    public div(key : string, amount : number);

    checkMinMax(functionName : string);

    public minIndex() : number;

    public minKey() : string;

    public minValue() : number;

    public maxIndex() : number;

    /**
     * return the key corresponding to the maximum value or null if no entries
     * @return {string}
     */
    public maxKey() : string;

    public maxValue() : number;

    public sum() : number;

    public sumLong() : number;

    public index(what : string) : number;

    create(what : string, much : number);

    /**
     * @webref intdict:method
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
     * @webref intdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * Sort the keys alphabetically in reverse (ignoring case). Uses the value as a
     * tie-breaker (only really possible with a key that has a case change).
     * 
     * @webref intdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in ascending order. The smallest value will be at [0].
     * 
     * @webref intdict:method
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
     * Sort by values in descending order. The largest value will be at [0].
     * 
     * @webref intdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    public sortValuesReverse(stable : boolean);

    sortImpl(useKeys : boolean, reverse : boolean, stable : boolean);

    /**
     * Sum all of the values in this dictionary, then return a new FloatDict of
     * each key, divided by the total sum. The total for all values will be ~1.0.
     * @return {FloatDict} an IntDict with the original keys, mapped to their pct of the total
     */
    public getPercent() : FloatDict;

    /**
     * Returns a duplicate copy of this object.
     * @return {IntDict}
     */
    public copy() : IntDict;

    public print();

    /**
     * Write tab-delimited entries out to
     * @param {java.io.PrintWriter} writer
     */
    public write(writer : java.io.PrintWriter);

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

declare namespace IntDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : number;

        constructor(__parent: any, key : string, value : number);
    }
}



