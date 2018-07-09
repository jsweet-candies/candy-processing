/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {number} length
 * @class
 */
declare class StringList {
    count : number;

    data : string[];

    public constructor();

    public constructor(length : number);

    public constructor(list : string[]);

    public constructor(...items : any[]);

    public constructor(iter : java.lang.Iterable<string>);

    /**
     * Improve efficiency by removing allocated but unused entries from the
     * internal array used to store the data. Set to private, though it could
     * be useful to have this public if lists are frequently making drastic
     * size changes (from very large to very small).
     * @private
     */
    /*private*/ crop();

    /**
     * Get the length of the list.
     * 
     * @webref stringlist:method
     * @brief Get the length of the list
     * @return {number}
     */
    public size() : number;

    public resize(length : number);

    /**
     * Remove all entries from the list.
     * 
     * @webref stringlist:method
     * @brief Remove all entries from the list
     */
    public clear();

    /**
     * Get an entry at a particular index.
     * 
     * @webref stringlist:method
     * @brief Get an entry at a particular index
     * @param {number} index
     * @return {string}
     */
    public get(index : number) : string;

    /**
     * Set the entry at a particular index. If the index is past the length of
     * the list, it'll expand the list to accommodate, and fill the intermediate
     * entries with 0s.
     * 
     * @webref stringlist:method
     * @brief Set an entry at a particular index
     * @param {number} index
     * @param {string} what
     */
    public set(index : number, what : string);

    /**
     * Just an alias for append(), but matches pop()
     * @param {string} value
     */
    public push(value : string);

    public pop() : string;

    /**
     * Remove an element from the specified index.
     * 
     * @webref stringlist:method
     * @brief Remove an element from the specified index
     * @param {number} index
     * @return {string}
     */
    public remove(index : number) : string;

    public removeValue(value : string) : number;

    public removeValues(value : string) : number;

    public replaceValue(value : string, newValue : string) : number;

    public replaceValues(value : string, newValue : string) : number;

    /**
     * Add a new entry to the list.
     * 
     * @webref stringlist:method
     * @brief Add a new entry to the list
     * @param {string} value
     */
    public append(value : string);

    public append(values : string[]);

    public append(list : StringList);

    /**
     * Add this value, but only if it's not already in the list.
     * @param {string} value
     */
    public appendUnique(value : string);

    public insert(index : number, value : string);

    public insert(index : number, values : string[]);

    public insert(index : number, list : StringList);

    /**
     * Return the first index of a particular value.
     * @param {string} what
     * @return {number}
     */
    public index(what : string) : number;

    /**
     * @webref stringlist:method
     * @brief Check if a value is a part of the list
     * @param {string} value
     * @return {boolean}
     */
    public hasValue(value : string) : boolean;

    /**
     * Sorts the array in place.
     * 
     * @webref stringlist:method
     * @brief Sorts the array in place
     */
    public sort();

    /**
     * Reverse sort, orders values from highest to lowest.
     * 
     * @webref stringlist:method
     * @brief Reverse sort, orders values from highest to lowest
     */
    public sortReverse();

    /*private*/ sortImpl(reverse : boolean);

    /**
     * @webref stringlist:method
     * @brief Reverse the order of the list elements
     */
    public reverse();

    /**
     * Randomize the order of the list elements. Note that this does not
     * obey the randomSeed() function in PApplet.
     * 
     * @webref stringlist:method
     * @brief Randomize the order of the list elements
     */
    public shuffle();

    /**
     * Randomize the list order using the random() function from the specified
     * sketch, allowing shuffle() to use its current randomSeed() setting.
     * @param {PApplet} sketch
     */
    public shuffle(sketch : PApplet);

    /**
     * Make the entire list lower case.
     * 
     * @webref stringlist:method
     * @brief Make the entire list lower case
     */
    public lower();

    /**
     * Make the entire list upper case.
     * 
     * @webref stringlist:method
     * @brief Make the entire list upper case
     */
    public upper();

    public copy() : StringList;

    /**
     * Returns the actual array being used to store the data. Suitable for
     * iterating with a for() loop, but modifying the list could cause terrible
     * things to happen.
     * @return {Array}
     */
    public values() : string[];

    /**
     * 
     * @return {*}
     */
    public iterator() : any;

    /**
     * Create a new array with a copy of all the values.
     * 
     * @return {Array} an array sized by the length of the list with each of the values.
     * @webref stringlist:method
     * @brief Create a new array with a copy of all the values
     */
    public array() : string[];

    /**
     * Copy values into the specified array. If the specified array is null or
     * not the same size, a new array will be allocated.
     * @param {Array} array
     * @return {Array}
     */
    public array(array : string[]) : string[];

    public getSubset(start : number) : StringList;

    public getSubset(start : number, num : number) : StringList;

    /**
     * Get a list of all unique entries.
     * @return {Array}
     */
    public getUnique() : string[];

    /**
     * Count the number of times each String entry is found in this list.
     * @return {IntDict}
     */
    public getTally() : IntDict;

    /**
     * Create a dictionary associating each entry in this list to its index.
     * @return {IntDict}
     */
    public getOrder() : IntDict;

    public join(separator : string) : string;

    public print();

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


