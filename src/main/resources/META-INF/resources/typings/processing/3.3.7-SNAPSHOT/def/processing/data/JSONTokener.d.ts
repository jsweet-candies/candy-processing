/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Construct a JSONTokener from a Reader.
 * 
 * @param {{ str: string, cursor: number }} reader     A reader.
 * @class
 * @author JSON.org
 */
declare class JSONTokener {
    /*private*/ character : number;

    /*private*/ eof : boolean;

    /*private*/ index : number;

    /*private*/ line : number;

    /*private*/ previous : string;

    /*private*/ reader : { str: string, cursor: number };

    /*private*/ usePrevious : boolean;

    public constructor(reader : { str: string, cursor: number });

    public constructor(inputStream : { str: string, cursor: number });

    public constructor(s : string);

    /**
     * Back up one character. This provides a sort of lookahead capability,
     * so that you can test for a digit or letter before attempting to parse
     * the next number or identifier.
     */
    public back();

    /**
     * Get the hex value of a character (base16).
     * @param {string} c A character between '0' and '9' or between 'A' and 'F' or
     * between 'a' and 'f'.
     * @return  {number} An int between 0 and 15, or -1 if c was not a hex digit.
     */
    public static dehexchar(c : string) : number;

    public end() : boolean;

    /**
     * Determine if the source string still contains characters that next()
     * can consume.
     * @return {boolean} true if not yet at the end of the source.
     */
    public more() : boolean;

    /**
     * Get the next character in the source string.
     * 
     * @return {string} The next character, or 0 if past the end of the source string.
     */
    public next() : string;

    /**
     * Consume the next character, and check that it matches a specified
     * character.
     * @param {string} c The character to match.
     * @return {string} The character.
     * @throws JSONException if the character does not match.
     */
    public next(c : string) : string;

    /**
     * Get the next n characters.
     * 
     * @param {number} n     The number of characters to take.
     * @return      {string} A string of n characters.
     * @throws JSONException
     * Substring bounds error if there are not
     * n characters remaining in the source string.
     */
    public next(n : number) : string;

    /**
     * Get the next char in the string, skipping whitespace.
     * @throws JSONException
     * @return  {string} A character, or 0 if there are no more characters.
     */
    public nextClean() : string;

    /**
     * Return the characters up to the next close quote character.
     * Backslash processing is done. The formal JSON format does not
     * allow strings in single quotes, but an implementation is allowed to
     * accept them.
     * @param {string} quote The quoting character, either
     * <code>"</code>&nbsp;<small>(double quote)</small> or
     * <code>'</code>&nbsp;<small>(single quote)</small>.
     * @return      {string} A String.
     * @throws JSONException Unterminated string.
     */
    public nextString(quote : string) : string;

    /**
     * Get the text up but not including the specified character or the
     * end of line, whichever comes first.
     * @param  {string} delimiter A delimiter character.
     * @return   {string} A string.
     */
    public nextTo(delimiter : string) : string;

    /**
     * Get the text up but not including one of the specified delimiter
     * characters or the end of line, whichever comes first.
     * @param {string} delimiters A set of delimiter characters.
     * @return {string} A string, trimmed.
     */
    public nextTo(delimiters : string) : string;

    /**
     * Get the next value. The value can be a Boolean, Double, Integer,
     * JSONArray, JSONObject, Long, or String, or the JSONObject.NULL object.
     * @throws JSONException If syntax error.
     * 
     * @return {*} An object.
     */
    public nextValue() : any;

    /**
     * Skip characters until the next character is the requested character.
     * If the requested character is not found, no characters are skipped.
     * @param {string} to A character to skip to.
     * @return {string} The requested character, or zero if the requested character
     * is not found.
     */
    public skipTo(to : string) : string;

    /**
     * Make a printable string of this JSONTokener.
     * 
     * @return {string} " at {index} [character {character} line {line}]"
     */
    public toString() : string;
}


