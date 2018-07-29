/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @nowebref
 * @param {number} length
 * @class
 */
declare class IntList {
    count : number;

    data : number[];

    public constructor();

    public constructor(length : number);

    public constructor(source : number[]);

    public constructor(iter : Array<any>);

    public constructor(...items : any[]);

    public static fromRange(stop : number) : IntList;

    public static fromRange(start : number, stop : number) : IntList;

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
     * @webref intlist:method
     * @brief Get the length of the list
     * @return {number}
     */
    public size() : number;

    public resize(length : number);

    /**
     * Remove all entries from the list.
     * 
     * @webref intlist:method
     * @brief Remove all entries from the list
     */
    public clear();

    /**
     * Get an entry at a particular index.
     * 
     * @webref intlist:method
     * @brief Get an entry at a particular index
     * @param {number} index
     * @return {number}
     */
    public get(index : number) : number;

    /**
     * Set the entry at a particular index. If the index is past the length of
     * the list, it'll expand the list to accommodate, and fill the intermediate
     * entries with 0s.
     * 
     * @webref intlist:method
     * @brief Set the entry at a particular index
     * @param {number} index
     * @param {number} what
     */
    public set(index : number, what : number);

    /**
     * Just an alias for append(), but matches pop()
     * @param {number} value
     */
    public push(value : number);

    public pop() : number;

    /**
     * Remove an element from the specified index
     * 
     * @webref intlist:method
     * @brief Remove an element from the specified index
     * @param {number} index
     * @return {number}
     */
    public remove(index : number) : number;

    public removeValue(value : number) : number;

    public removeValues(value : number) : number;

    /**
     * Add a new entry to the list.
     * 
     * @webref intlist:method
     * @brief Add a new entry to the list
     * @param {number} value
     */
    public append(value : number);

    public append(values : number[]);

    public append(list : IntList);

    /**
     * Add this value, but only if it's not already in the list.
     * @param {number} value
     */
    public appendUnique(value : number);

    public insert(index : number, value : number);

    public insert(index : number, values : number[]);

    public insert(index : number, list : IntList);

    /**
     * Return the first index of a particular value.
     * @param {number} what
     * @return {number}
     */
    public index(what : number) : number;

    /**
     * @webref intlist:method
     * @brief Check if a number is a part of the list
     * @param {number} value
     * @return {boolean}
     */
    public hasValue(value : number) : boolean;

    /**
     * @webref intlist:method
     * @brief Add one to a value
     * @param {number} index
     */
    public increment(index : number);

    /*private*/ boundsProblem(index : number, method : string);

    /**
     * @webref intlist:method
     * @brief Add to a value
     * @param {number} index
     * @param {number} amount
     */
    public add(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Subtract from a value
     * @param {number} index
     * @param {number} amount
     */
    public sub(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Multiply a value
     * @param {number} index
     * @param {number} amount
     */
    public mult(index : number, amount : number);

    /**
     * @webref intlist:method
     * @brief Divide a value
     * @param {number} index
     * @param {number} amount
     */
    public div(index : number, amount : number);

    /*private*/ checkMinMax(functionName : string);

    /**
     * @webref intlist:method
     * @brief Return the smallest value
     * @return {number}
     */
    public min() : number;

    public minIndex() : number;

    /**
     * @webref intlist:method
     * @brief Return the largest value
     * @return {number}
     */
    public max() : number;

    public maxIndex() : number;

    public sum() : number;

    public sumLong() : number;

    /**
     * Sorts the array in place.
     * 
     * @webref intlist:method
     * @brief Sorts the array, lowest to highest
     */
    public sort();

    /**
     * Reverse sort, orders values from highest to lowest.
     * 
     * @webref intlist:method
     * @brief Reverse sort, orders values from highest to lowest
     */
    public sortReverse();

    /**
     * @webref intlist:method
     * @brief Reverse the order of the list elements
     */
    public reverse();

    /**
     * Randomize the order of the list elements. Note that this does not
     * obey the randomSeed() function in PApplet.
     * 
     * @webref intlist:method
     * @brief Randomize the order of the list elements
     */
    public shuffle();

    /**
     * Randomize the list order using the random() function from the specified
     * sketch, allowing shuffle() to use its current randomSeed() setting.
     * @param {*} sketch
     */
    public shuffle(sketch : any);

    public copy() : IntList;

    /**
     * Returns the actual array being used to store the data. For advanced users,
     * this is the fastest way to access a large list. Suitable for iterating
     * with a for() loop, but modifying the list will have terrible consequences.
     * @return {Array}
     */
    public values() : number[];

    /**
     * 
     * @return {*}
     */
    public iterator() : any;

    /**
     * Create a new array with a copy of all the values.
     * 
     * @return {Array} an array sized by the length of the list with each of the values.
     * @webref intlist:method
     * @brief Create a new array with a copy of all the values
     */
    public array() : number[];

    /**
     * Copy values into the specified array. If the specified array is null or
     * not the same size, a new array will be allocated.
     * @param {Array} array
     * @return {Array}
     */
    public array(array : number[]) : number[];

    /**
     * Returns a normalized version of this array. Called getPercent() for
     * consistency with the Dict classes. It's a getter method because it needs
     * to returns a new list (because IntList/Dict can't do percentages or
     * normalization in place on int values).
     * @return {FloatList}
     */
    public getPercent() : FloatList;

    public getSubset(start : number) : IntList;

    public getSubset(start : number, num : number) : IntList;

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


