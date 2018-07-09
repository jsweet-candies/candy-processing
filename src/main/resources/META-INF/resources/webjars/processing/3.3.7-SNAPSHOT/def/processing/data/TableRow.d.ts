/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @webref data:composite
 * @see Table
 * @see Table#addRow()
 * @see Table#removeRow(int)
 * @see Table#clearRows()
 * @see Table#getRow(int)
 * @see Table#rows()
 * @class
 */
interface TableRow {
    /**
     * @webref tablerow:method
     * @brief Get an String value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getFloat(int)
     * @return {string}
     */
    getString(column : number) : string;

    /**
     * @param {string} columnName title of the column to reference
     * @return {string}
     */
    getString(columnName : string) : string;

    /**
     * @webref tablerow:method
     * @brief Get an integer value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getFloat(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getInt(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getInt(columnName : string) : number;

    /**
     * @brief Get a long value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getFloat(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getLong(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getLong(columnName : string) : number;

    /**
     * @webref tablerow:method
     * @brief Get a float value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getFloat(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getFloat(columnName : string) : number;

    /**
     * @brief Get a double value from the specified column
     * @param {number} column ID number of the column to reference
     * @see TableRow#getInt(int)
     * @see TableRow#getString(int)
     * @return {number}
     */
    getDouble(column : number) : number;

    /**
     * @param {string} columnName title of the column to reference
     * @return {number}
     */
    getDouble(columnName : string) : number;

    /**
     * @webref tablerow:method
     * @brief Store a String value in the specified column
     * @param {number} column ID number of the target column
     * @param {string} value value to assign
     * @see TableRow#setInt(int, int)
     * @see TableRow#setFloat(int, float)
     */
    setString(column : number, value : string);

    /**
     * @param {string} columnName title of the target column
     * @param {string} value
     */
    setString(columnName : string, value : string);

    /**
     * @webref tablerow:method
     * @brief Store an integer value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setInt(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setInt(columnName : string, value : number);

    /**
     * @brief Store a long value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setLong(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setLong(columnName : string, value : number);

    /**
     * @webref tablerow:method
     * @brief Store a float value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setInt(int, int)
     * @see TableRow#setString(int, String)
     */
    setFloat(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setFloat(columnName : string, value : number);

    /**
     * @brief Store a double value in the specified column
     * @param {number} column ID number of the target column
     * @param {number} value value to assign
     * @see TableRow#setFloat(int, float)
     * @see TableRow#setString(int, String)
     */
    setDouble(column : number, value : number);

    /**
     * @param {string} columnName title of the target column
     * @param {number} value
     */
    setDouble(columnName : string, value : number);

    /**
     * @webref tablerow:method
     * @brief Get the column count.
     * @return {number} count of all columns
     */
    getColumnCount() : number;

    /**
     * @brief Get the column type.
     * @param {string} columnName title of the target column
     * @return {number} type of the column
     */
    getColumnType(columnName : string) : number;

    /**
     * @param {number} column ID number of the target column
     * @return {number}
     */
    getColumnType(column : number) : number;

    /**
     * @brief Get the all column types
     * @return {Array} list of all column types
     */
    getColumnTypes() : number[];

    /**
     * @webref tablerow:method
     * @brief Get the column title.
     * @param {number} column ID number of the target column
     * @return {string} title of the column
     */
    getColumnTitle(column : number) : string;

    /**
     * @brief Get the all column titles
     * @return {Array} list of all column titles
     */
    getColumnTitles() : string[];

    write(writer : any);

    print();
}


