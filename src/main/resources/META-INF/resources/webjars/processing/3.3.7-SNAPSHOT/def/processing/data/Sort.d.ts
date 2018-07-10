/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Internal sorter used by several data classes.
 * Advanced users only, not official API.
 * @class
 */
declare class Sort {
    public constructor();

    public run();

    sort(i : number, j : number);

    partition(left : number, right : number) : number;

    public size() : number;

    public compare(a : number, b : number) : number;

    public swap(a : number, b : number);
}


