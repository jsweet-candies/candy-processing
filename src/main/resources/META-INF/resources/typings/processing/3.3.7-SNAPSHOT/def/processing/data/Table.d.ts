/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * version that uses a File object; future releases (or data types)
 * may include additional optimizations here
 * 
 * @nowebref
 * @param {java.io.File} file
 * @param {string} options
 * @class
 */
declare class Table {
    rowCount : number;

    allocCount : number;

    missingString : string;

    missingInt : number;

    missingLong : number;

    missingFloat : number;

    missingDouble : number;

    missingCategory : number;

    columnTitles : string[];

    columnCategories : Table.HashMapBlows[];

    columnIndices : any;

    columns : any[];

    public static STRING : number;

    public static INT : number;

    public static LONG : number;

    public static FLOAT : number;

    public static DOUBLE : number;

    public static CATEGORY : number;

    columnTypes : number[];

    rowIterator : Table.RowIterator;

    expandIncrement : number;

    public constructor();

    public constructor(file : java.io.File);

    public constructor(file : java.io.File, options : string);

    public constructor(input : { str: string, cursor: number });

    public constructor(input : { str: string, cursor: number }, options : string);

    public constructor(rows : java.lang.Iterable<TableRow>);

    public constructor(rs : java.sql.ResultSet);

    public typedParse(input : { str: string, cursor: number }, options : string) : Table;

    init();

    static loadExtensions : string[];

    static saveExtensions : string[];

    public static extensionOptions(loading : boolean, filename : string, options : string) : string;

    parse(input : { str: string, cursor: number }, options : string);

    parseBasic(reader : { str: string, cursor: number }, header : boolean, tsv : boolean);

    csl : Table.CommaSeparatedLine;

    /**
     * Parse a line of text as comma-separated values, returning each value as
     * one entry in an array of String objects. Remove quotes from entries that
     * begin and end with them, and convert 'escaped' quotes to actual quotes.
     * @param {string} line line of text to be parsed
     * @return {Array} an array of the individual values formerly separated by commas
     * @param {{ str: string, cursor: number }} reader
     */
    splitLineCSV(line : string, reader : { str: string, cursor: number }) : string[];

    /**
     * Read a .ods (OpenDoc spreadsheet) zip file from an InputStream, and
     * return the InputStream for content.xml contained inside.
     * @param {{ str: string, cursor: number }} input
     * @return {{ str: string, cursor: number }}
     * @private
     */
    odsFindContentXML(input : { str: string, cursor: number }) : { str: string, cursor: number };

    odsParse(input : { str: string, cursor: number }, worksheet : string, header : boolean);

    /**
     * Parses a single sheet of XML from this file.
     * @param The XML object for a single worksheet from the ODS file
     * @param {XML} sheet
     * @param {boolean} header
     * @private
     */
    odsParseSheet(sheet : XML, header : boolean);

    odsAppendNotNull(kid : XML, buffer : { str: string });

    /**
     * incomplete, do not use
     * @param {*} enclosingObject
     * @param {string} fieldName
     */
    public parseInto(enclosingObject : any, fieldName : string);

    public save(file : java.io.File, options : string) : boolean;

    public save(output : java.io.OutputStream, options : string) : boolean;

    writeTSV(writer : java.io.PrintWriter);

    writeCSV(writer : java.io.PrintWriter);

    writeEntryCSV(writer : java.io.PrintWriter, entry : string);

    writeHTML(writer : java.io.PrintWriter);

    writeEntryHTML(writer : java.io.PrintWriter, entry : string);

    saveODS(os : java.io.OutputStream);

    saveStringODS(output : java.io.OutputStream, text : string);

    saveNumberODS(output : java.io.OutputStream, text : string);

    static utf8 : string;

    static writeUTF(output : java.io.OutputStream, ...lines : string[]);

    saveBinary(os : java.io.OutputStream);

    loadBinary(is : { str: string, cursor: number });

    /**
     * @webref table:method
     * @brief Adds a new column to a table
     * @see Table#removeColumn(String)
     */
    public addColumn();

    /**
     * @param {string} title the title to be used for the new column
     */
    public addColumn(title : string);

    /**
     * @param {number} type the type to be used for the new column: INT, LONG, FLOAT, DOUBLE, or STRING
     * @param {string} title
     */
    public addColumn(title : string, type : number);

    public insertColumn(index : number);

    public insertColumn(index : number, title : string);

    public insertColumn(index : number, title : string, type : number);

    /**
     * @webref table:method
     * @brief Removes a column from a table
     * @param {string} columnName the title of the column to be removed
     * @see Table#addColumn()
     */
    public removeColumn(columnName : string);

    /**
     * @param {number} column the index number of the column to be removed
     */
    public removeColumn(column : number);

    /**
     * @webref table:method
     * @brief Gets the number of columns in a table
     * @see Table#getRowCount()
     * @return {number}
     */
    public getColumnCount() : number;

    /**
     * Change the number of columns in this table. Resizes all rows to ensure
     * the same number of columns in each row. Entries in the additional (empty)
     * columns will be set to null.
     * @param {number} newCount
     */
    public setColumnCount(newCount : number);

    public setColumnType(columnName : string, columnType : string);

    static parseColumnType(columnType : string) : number;

    /**
     * Set the data type for a column so that using it is more efficient.
     * @param {number} column the column to change
     * @param {string} columnType One of int, long, float, double, string, or category.
     */
    public setColumnType(column : number, columnType : string);

    public setColumnType(columnName : string, newType : number);

    /**
     * Sets the column type. If data already exists, then it'll be converted to
     * the new type.
     * @param {number} column the column whose type should be changed
     * @param {number} newType something fresh, maybe try an int or a float for size?
     */
    public setColumnType(column : number, newType : number);

    /**
     * Set the entire table to a specific data type.
     * @param {string} type
     */
    public setTableType(type : string);

    public setColumnTypes(types : number[]);

    /**
     * Set the titles (and if a second column is present) the data types for
     * this table based on a file loaded separately. This will look for the
     * title in column 0, and the type in column 1. Better yet, specify a
     * column named "title" and another named "type" in the dictionary table
     * to future-proof the code.
     * @param {Table} dictionary
     */
    public setColumnTypes(dictionary : Table);

    public getColumnType(columnName : string) : number;

    /**
     * Returns one of Table.STRING, Table.INT, etc...
     * @param {number} column
     * @return {number}
     */
    public getColumnType(column : number) : number;

    public getColumnTypes() : number[];

    /**
     * Remove the first row from the data set, and use it as the column titles.
     * Use loadTable("table.csv", "header") instead.
     * @return {Array}
     */
    public removeTitleRow() : string[];

    public setColumnTitles(titles : string[]);

    public setColumnTitle(column : number, title : string);

    public hasColumnTitles() : boolean;

    public getColumnTitles() : string[];

    public getColumnTitle(col : number) : string;

    public getColumnIndex(columnName : string) : number;

    /**
     * Get the index of a column.
     * @param {string} name Name of the column.
     * @param {boolean} report Whether to throw an exception if the column wasn't found.
     * @return {number} index of the found column, or -1 if not found.
     */
    getColumnIndex(name : string, report : boolean) : number;

    /**
     * Same as getColumnIndex(), but creates the column if it doesn't exist.
     * Named this way to not conflict with checkColumn(), an internal function
     * used to ensure that a columns exists, and also to denote that it returns
     * an int for the column index.
     * @param {string} title column title
     * @return {number} index of a new or previously existing column
     */
    public checkColumnIndex(title : string) : number;

    /**
     * @webref table:method
     * @brief Gets the number of rows in a table
     * @see Table#getColumnCount()
     * @return {number}
     */
    public getRowCount() : number;

    public lastRowIndex() : number;

    /**
     * @webref table:method
     * @brief Removes all rows from a table
     * @see Table#addRow()
     * @see Table#removeRow(int)
     */
    public clearRows();

    public setRowCount(newCount : number);

    /**
     * @webref table:method
     * @brief Adds a row to a table
     * @see Table#removeRow(int)
     * @see Table#clearRows()
     * @return {*}
     */
    public addRow() : TableRow;

    /**
     * @param {*} source a reference to the original row to be duplicated
     * @return {*}
     */
    public addRow(source : TableRow) : TableRow;

    public setRow(row : number, source : TableRow) : TableRow;

    /**
     * @nowebref
     * @param {Array} columnData
     * @return {*}
     */
    public addRow(columnData : any[]) : TableRow;

    public addRows(source : Table);

    public insertRow(insert : number, columnData : any[]);

    /**
     * @webref table:method
     * @brief Removes a row from a table
     * @param {number} row ID number of the row to remove
     * @see Table#addRow()
     * @see Table#clearRows()
     */
    public removeRow(row : number);

    public setRow(row : number, pieces : any[]);

    setRowCol(row : number, col : number, piece : any);

    /**
     * @webref table:method
     * @brief Gets a row from a table
     * @param {number} row ID number of the row to get
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public getRow(row : number) : TableRow;

    /**
     * Note that this one iterator instance is shared by any calls to iterate
     * the rows of this table. This is very efficient, but not thread-safe.
     * If you want to iterate in a multi-threaded manner, don't use the iterator.
     * 
     * @webref table:method
     * @brief Gets multiple rows from a table
     * @see Table#getRow(int)
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public rows() : java.lang.Iterable<TableRow>;

    /**
     * @nowebref
     * @param {Array} indices
     * @return {*}
     */
    public rows(indices : number[]) : java.lang.Iterable<TableRow>;

    /**
     * @webref table:method
     * @brief Get an integer value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {number}
     */
    public getInt(row : number, column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {number}
     */
    public getInt(row : number, columnName : string) : number;

    public setMissingInt(value : number);

    /**
     * @webref table:method
     * @brief Store an integer value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setInt(row : number, column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {number} value
     */
    public setInt(row : number, columnName : string, value : number);

    public getIntColumn(name : string) : number[];

    public getIntColumn(col : number) : number[];

    public getIntRow(row : number) : number[];

    public getLong(row : number, column : number) : number;

    public getLong(row : number, columnName : string) : number;

    public setMissingLong(value : number);

    public setLong(row : number, column : number, value : number);

    public setLong(row : number, columnName : string, value : number);

    public getLongColumn(name : string) : number[];

    public getLongColumn(col : number) : number[];

    public getLongRow(row : number) : number[];

    /**
     * Get a float value from the specified row and column. If the value is null
     * or not parseable as a float, the "missing" value is returned. By default,
     * this is Float.NaN, but can be controlled with setMissingFloat().
     * 
     * @webref table:method
     * @brief Get a float value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getInt(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {number}
     */
    public getFloat(row : number, column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {number}
     */
    public getFloat(row : number, columnName : string) : number;

    public setMissingFloat(value : number);

    /**
     * @webref table:method
     * @brief Store a float value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see Table#setInt(int, int, int)
     * @see Table#setString(int, int, String)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setFloat(row : number, column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {number} value
     */
    public setFloat(row : number, columnName : string, value : number);

    public getFloatColumn(name : string) : number[];

    public getFloatColumn(col : number) : number[];

    public getFloatRow(row : number) : number[];

    public getDouble(row : number, column : number) : number;

    public getDouble(row : number, columnName : string) : number;

    public setMissingDouble(value : number);

    public setDouble(row : number, column : number, value : number);

    public setDouble(row : number, columnName : string, value : number);

    public getDoubleColumn(name : string) : number[];

    public getDoubleColumn(col : number) : number[];

    public getDoubleRow(row : number) : number[];

    /**
     * Get a String value from the table. If the row is longer than the table
     * 
     * @webref table:method
     * @brief Get an String value from the specified row and column
     * @param {number} row ID number of the row to reference
     * @param {number} column ID number of the column to reference
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getStringColumn(String)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {string}
     */
    public getString(row : number, column : number) : string;

    /**
     * @param {string} columnName title of the column to reference
     * @param {number} row
     * @return {string}
     */
    public getString(row : number, columnName : string) : string;

    /**
     * Treat entries with this string as "missing". Also used for categorial.
     * @param {string} value
     */
    public setMissingString(value : string);

    /**
     * @webref table:method
     * @brief Store a String value in the specified row and column
     * @param {number} row ID number of the target row
     * @param {number} column ID number of the target column
     * @param {string} value value to assign
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#getStringColumn(String)
     */
    public setString(row : number, column : number, value : string);

    /**
     * @param {string} columnName title of the target column
     * @param {number} row
     * @param {string} value
     */
    public setString(row : number, columnName : string, value : string);

    /**
     * @webref table:method
     * @brief Gets all values in the specified column
     * @param {string} columnName title of the column to search
     * @see Table#getInt(int, int)
     * @see Table#getFloat(int, int)
     * @see Table#getString(int, int)
     * @see Table#setInt(int, int, int)
     * @see Table#setFloat(int, int, float)
     * @see Table#setString(int, int, String)
     * @return {Array}
     */
    public getStringColumn(columnName : string) : string[];

    /**
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public getStringColumn(column : number) : string[];

    public getStringRow(row : number) : string[];

    /**
     * Return the row that contains the first String that matches.
     * @param {string} value the String to match
     * @param {number} column ID number of the column to search
     * @return {number}
     */
    public findRowIndex(value : string, column : number) : number;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} value the String to match
     * @param {string} columnName title of the column to search
     * @return {number}
     */
    public findRowIndex(value : string, columnName : string) : number;

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} value the String to match
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public findRowIndices(value : string, column : number) : number[];

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} value the String to match
     * @param {string} columnName title of the column to search
     * @return {Array}
     */
    public findRowIndices(value : string, columnName : string) : number[];

    /**
     * @webref table:method
     * @brief Finds a row that contains the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public findRow(value : string, column : number) : TableRow;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public findRow(value : string, columnName : string) : TableRow;

    /**
     * @webref table:method
     * @brief Finds multiple rows that contain the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#matchRow(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public findRows(value : string, column : number) : java.lang.Iterable<TableRow>;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public findRows(value : string, columnName : string) : java.lang.Iterable<TableRow>;

    /**
     * @brief Finds multiple rows that contain the given value
     * @param {string} value the value to match
     * @param {number} column ID number of the column to search
     * @return {*}
     */
    public findRowIterator(value : string, column : number) : any;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public findRowIterator(value : string, columnName : string) : any;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} regexp the String to match
     * @param {number} column ID number of the column to search
     * @return {number}
     */
    public matchRowIndex(regexp : string, column : number) : number;

    /**
     * Return the row that contains the first String that matches.
     * @param {string} what the String to match
     * @param {string} columnName title of the column to search
     * @return {number}
     */
    public matchRowIndex(what : string, columnName : string) : number;

    /**
     * Return a list of rows that contain the String passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} regexp the String to match
     * @param {number} column ID number of the column to search
     * @return {Array}
     */
    public matchRowIndices(regexp : string, column : number) : number[];

    /**
     * Return a list of rows that match the regex passed in. If there are no
     * matches, a zero length array will be returned (not a null array).
     * @param {string} what the String to match
     * @param {string} columnName title of the column to search
     * @return {Array}
     */
    public matchRowIndices(what : string, columnName : string) : number[];

    /**
     * @webref table:method
     * @brief Finds a row that matches the given expression
     * @param {string} regexp the regular expression to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRows(String, int)
     * @return {*}
     */
    public matchRow(regexp : string, column : number) : TableRow;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} regexp
     * @return {*}
     */
    public matchRow(regexp : string, columnName : string) : TableRow;

    /**
     * @webref table:method
     * @brief Finds multiple rows that match the given expression
     * @param {string} regexp the regular expression to match
     * @param {number} column ID number of the column to search
     * @see Table#getRow(int)
     * @see Table#rows()
     * @see Table#findRow(String, int)
     * @see Table#findRows(String, int)
     * @see Table#matchRow(String, int)
     * @return {*}
     */
    public matchRows(regexp : string, column : number) : java.lang.Iterable<TableRow>;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} regexp
     * @return {*}
     */
    public matchRows(regexp : string, columnName : string) : java.lang.Iterable<TableRow>;

    /**
     * @webref table:method
     * @brief Finds multiple rows that match the given expression
     * @param {string} value the regular expression to match
     * @param {number} column ID number of the column to search
     * @return {*}
     */
    public matchRowIterator(value : string, column : number) : any;

    /**
     * @param {string} columnName title of the column to search
     * @param {string} value
     * @return {*}
     */
    public matchRowIterator(value : string, columnName : string) : any;

    /**
     * Replace a String with another. Set empty entries null by using
     * replace("", null) or use replace(null, "") to go the other direction.
     * If this is a typed table, only String columns will be modified.
     * @param {string} orig
     * @param {string} replacement
     */
    public replace(orig : string, replacement : string);

    public replace(orig : string, replacement : string, col : number);

    public replace(orig : string, replacement : string, colName : string);

    public replaceAll(regex : string, replacement : string);

    public replaceAll(regex : string, replacement : string, column : number);

    /**
     * Run String.replaceAll() on all entries in a column.
     * Only works with columns that are already String values.
     * @param {string} regex the String to match
     * @param {string} columnName title of the column to search
     * @param {string} replacement
     */
    public replaceAll(regex : string, replacement : string, columnName : string);

    /**
     * Remove any of the specified characters from the entire table.
     * 
     * @webref table:method
     * @brief Removes characters from the table
     * @param {string} tokens a list of individual characters to be removed
     * @see Table#trim()
     */
    public removeTokens(tokens : string);

    /**
     * Removed any of the specified characters from a column. For instance,
     * the following code removes dollar signs and commas from column 2:
     * <pre>
     * table.removeTokens(",$", 2);
     * </pre>
     * 
     * @param {number} column ID number of the column to process
     * @param {string} tokens
     */
    public removeTokens(tokens : string, column : number);

    /**
     * @param {string} columnName title of the column to process
     * @param {string} tokens
     */
    public removeTokens(tokens : string, columnName : string);

    /**
     * @webref table:method
     * @brief Trims whitespace from values
     * @see Table#removeTokens(String)
     */
    public trim();

    isEmptyArray(contents : string[]) : boolean;

    /**
     * @param {number} column ID number of the column to trim
     */
    public trim(column : number);

    /**
     * @param {string} columnName title of the column to trim
     */
    public trim(columnName : string);

    /**
     * Make sure this is a legit column, and if not, expand the table.
     * @param {number} col
     */
    ensureColumn(col : number);

    /**
     * Make sure this is a legit row, and if not, expand the table.
     * @param {number} row
     */
    ensureRow(row : number);

    /**
     * Make sure this is a legit row and column. If not, expand the table.
     * @param {number} row
     * @param {number} col
     */
    ensureBounds(row : number, col : number);

    /**
     * Throw an error if this row doesn't exist.
     * @param {number} row
     */
    checkRow(row : number);

    /**
     * Throw an error if this column doesn't exist.
     * @param {number} column
     */
    checkColumn(column : number);

    /**
     * Throw an error if this entry is out of bounds.
     * @param {number} row
     * @param {number} column
     */
    checkBounds(row : number, column : number);

    /**
     * Sorts (orders) a table based on the values in a column.
     * 
     * @webref table:method
     * @brief Orders a table based on the values in a column
     * @param {string} columnName the name of the column to sort
     * @see Table#trim()
     */
    public sort(columnName : string);

    /**
     * @param {number} column the column ID, e.g. 0, 1, 2
     */
    public sort(column : number);

    public sortReverse(columnName : string);

    public sortReverse(column : number);

    sort(column : number, reverse : boolean);

    public getUnique(columnName : string) : string[];

    public getUnique(column : number) : string[];

    public getTally(columnName : string) : IntDict;

    public getTally(column : number) : IntDict;

    public getOrder(columnName : string) : IntDict;

    public getOrder(column : number) : IntDict;

    public getIntList(columnName : string) : IntList;

    public getIntList(column : number) : IntList;

    public getFloatList(columnName : string) : FloatList;

    public getFloatList(column : number) : FloatList;

    public getStringList(columnName : string) : StringList;

    public getStringList(column : number) : StringList;

    public getIntDict(keyColumnName : string, valueColumnName : string) : IntDict;

    public getIntDict(keyColumn : number, valueColumn : number) : IntDict;

    public getFloatDict(keyColumnName : string, valueColumnName : string) : FloatDict;

    public getFloatDict(keyColumn : number, valueColumn : number) : FloatDict;

    public getStringDict(keyColumnName : string, valueColumnName : string) : StringDict;

    public getStringDict(keyColumn : number, valueColumn : number) : StringDict;

    public getRowMap(columnName : string) : any;

    /**
     * Return a mapping that connects the entry from a column back to the row
     * from which it came. For instance:
     * <pre>
     * Table t = loadTable("country-data.tsv", "header");
     * // use the contents of the 'country' column to index the table
     * Map<String, TableRow> lookup = t.getRowMap("country");
     * // get the row that has "us" in the "country" column:
     * TableRow usRow = lookup.get("us");
     * // get an entry from the 'population' column
     * int population = usRow.getInt("population");
     * </pre>
     * @param {number} column
     * @return {*}
     */
    public getRowMap(column : number) : any;

    createSubset(rowSubset : number[]) : Table;

    /**
     * Searches the entire table for float values.
     * Returns missing float (Float.NaN by default) if no valid numbers found.
     * @return {number}
     */
    getMaxFloat() : number;

    convertBasic(reader : { str: string, cursor: number }, tsv : boolean, outputFile : java.io.File);

    convertRow(output : java.io.DataOutputStream, pieces : string[]);

    /**
     * Make a copy of the current table
     * @return {Table}
     */
    public copy() : Table;

    public write(writer : java.io.PrintWriter);

    public print();
}

declare namespace Table {

    export class CommaSeparatedLine {
        c : string[];

        pieces : string[];

        pieceCount : number;

        start : number;

        handle(line : string, reader : { str: string, cursor: number }) : string[];

        addPiece(start : number, stop : number, quotes : boolean);

        /**
         * Returns the next comma (not inside a quote) in the specified array.
         * @param c array to search
         * @param index offset at which to start looking
         * @return {boolean} index of the comma, or -1 if line ended inside an unclosed quote
         */
        ingest() : boolean;
    }

    export class RowPointer implements TableRow {
        table : Table;

        row : number;

        public constructor(table : Table, row : number);

        public setRow(row : number);

        public getString(column : number) : string;

        public getString(columnName : string) : string;

        public getInt(column : number) : number;

        public getInt(columnName : string) : number;

        public getLong(column : number) : number;

        public getLong(columnName : string) : number;

        public getFloat(column : number) : number;

        public getFloat(columnName : string) : number;

        public getDouble(column : number) : number;

        public getDouble(columnName : string) : number;

        public setString(column : number, value : string);

        public setString(columnName : string, value : string);

        public setInt(column : number, value : number);

        public setInt(columnName : string, value : number);

        public setLong(column : number, value : number);

        public setLong(columnName : string, value : number);

        public setFloat(column : number, value : number);

        public setFloat(columnName : string, value : number);

        public setDouble(column : number, value : number);

        public setDouble(columnName : string, value : number);

        public getColumnCount() : number;

        public getColumnType(columnName : string) : number;

        public getColumnType(column : number) : number;

        public getColumnTypes() : number[];

        public getColumnTitle(column : number) : string;

        public getColumnTitles() : string[];

        public print();

        public write(writer : java.io.PrintWriter);
    }

    export class RowIterator {
        table : Table;

        rp : Table.RowPointer;

        row : number;

        public constructor(table : Table);

        public remove();

        public next() : TableRow;

        public hasNext() : boolean;

        public reset();
    }

    export class RowIndexIterator {
        table : Table;

        rp : Table.RowPointer;

        indices : number[];

        index : number;

        public constructor(table : Table, indices : number[]);

        public remove();

        public next() : TableRow;

        public hasNext() : boolean;

        public reset();
    }

    export class HashMapBlows {
        dataToIndex : any;

        indexToData : Array<string>;

        constructor();

        constructor(input : java.io.DataInputStream);

        /**
         * gets the index, and creates one if it doesn't already exist.
         * @param {string} key
         * @return {number}
         */
        index(key : string) : number;

        key(index : number) : string;

        hasCategory(index : number) : boolean;

        setCategory(index : number, name : string);

        size() : number;

        write(output : java.io.DataOutputStream);

        writeln(writer : java.io.PrintWriter);

        read(input : java.io.DataInputStream);
    }
}



