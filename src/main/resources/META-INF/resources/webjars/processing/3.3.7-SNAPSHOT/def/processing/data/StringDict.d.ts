/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {Array} keys
 * @param {Array} values
 * @class
 */
declare class StringDict {
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

    public constructor(keys : string[], values : string[]);

    public constructor(pairs : string[][]);

    public constructor(row : TableRow);

    /**
     * @webref stringdict:method
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
     * @webref stringdict:method
     * @brief Remove all entries
     */
    public clear();

    resetIndices();

    public entries() : Array<StringDict.Entry>;

    public entryIterator() : any;

    public key(index : number) : string;

    crop();

    public keyIterator() : any;

    /**
     * Return a copy of the internal keys array. This array can be modified.
     * 
     * @webref stringdict:method
     * @brief Return a copy of the internal keys array
     * @return {Array}
     */
    public keyArray() : string[];

    public keyArray(outgoing : string[]) : string[];

    public value(index : number) : string;

    public valueIterator() : any;

    /**
     * Create a new array and copy each of the values into it.
     * 
     * @webref stringdict:method
     * @brief Create a new array and copy each of the values into it
     * @return {Array}
     */
    public valueArray() : string[];

    /**
     * Fill an already-allocated array with the values (more efficient than
     * creating a new array each time). If 'array' is null, or not the same
     * size as the number of values, a new array will be allocated and returned.
     * @param {Array} array
     * @return {Array}
     */
    public valueArray(array : string[]) : string[];

    /**
     * Return a value for the specified key.
     * 
     * @webref stringdict:method
     * @brief Return a value for the specified key
     * @param {string} key
     * @return {string}
     */
    public get(key : string) : string;

    public get(key : string, alternate : string) : string;

    /**
     * @webref stringdict:method
     * @brief Create a new key/value pair or change the value of one
     * @param {string} key
     * @param {string} value
     */
    public set(key : string, value : string);

    public setIndex(index : number, key : string, value : string);

    public index(what : string) : number;

    /**
     * @webref stringdict:method
     * @brief Check if a key is a part of the data structure
     * @param {string} key
     * @return {boolean}
     */
    public hasKey(key : string) : boolean;

    create(key : string, value : string);

    /**
     * @webref stringdict:method
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
     * @webref stringdict:method
     * @brief Sort the keys alphabetically
     */
    public sortKeys();

    /**
     * @webref stringdict:method
     * @brief Sort the keys alphabetically in reverse
     */
    public sortKeysReverse();

    /**
     * Sort by values in descending order (largest value will be at [0]).
     * 
     * @webref stringdict:method
     * @brief Sort by values in ascending order
     */
    public sortValues();

    /**
     * @webref stringdict:method
     * @brief Sort by values in descending order
     */
    public sortValuesReverse();

    sortImpl(useKeys : boolean, reverse : boolean);

    /**
     * Returns a duplicate copy of this object.
     * @return {StringDict}
     */
    public copy() : StringDict;

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

declare namespace StringDict {

    export class Entry {
        public __parent: any;
        public key : string;

        public value : string;

        constructor(__parent: any, key : string, value : string);
    }
}



