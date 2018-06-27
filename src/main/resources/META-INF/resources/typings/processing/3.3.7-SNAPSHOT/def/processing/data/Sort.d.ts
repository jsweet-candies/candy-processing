/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Internal sorter used by several data classes.
 * Advanced users only, not official API.
 * @class
 */
declare abstract class Sort {
    public constructor();

    public run();

    sort(i : number, j : number);

    partition(left : number, right : number) : number;

    public abstract size() : number;

    public abstract compare(a : number, b : number) : number;

    public abstract swap(a : number, b : number);
}


