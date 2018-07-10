/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Advanced users only; use loadXML() in PApplet.
 * 
 * @nowebref
 * @param {*} file
 * @param {string} options
 * @class
 */
declare class XML {
    /**
     * The internal representation, a DOM node.
     */
    node : any;

    /**
     * The parent element.
     */
    parent : XML;

    /**
     * Child elements, once loaded.
     */
    children : XML[];

    constructor();

    public constructor(file : any);

    public constructor(file : any, options : string);

    public constructor(input : { str: string, cursor: number });

    public constructor(input : { str: string, cursor: number }, options : string);

    public constructor(reader : { str: string, cursor: number });

    public constructor(reader : { str: string, cursor: number }, options : string);

    public constructor(name : string);

    constructor(parent : XML, node : any);

    /**
     * @webref xml:method
     * @brief Converts String content to an XML object
     * @param {string} data the content to be parsed as XML
     * @return {XML} an XML object, or null
     * @throws SAXException
     * @throws ParserConfigurationException
     * @throws IOException
     * @nowebref
     */
    public static parse(data : string) : XML;

    /**
     * @nowebref
     * @param {string} data
     * @param {string} options
     * @return {XML}
     */
    public static parse(data : string, options : string) : XML;

    public save(file : any) : boolean;

    public save(file : any, options : string) : boolean;

    public write(output : any) : boolean;

    /**
     * Returns the parent element. This method returns null for the root
     * element.
     * 
     * @webref xml:method
     * @brief Gets a copy of the element's parent
     * @return {XML}
     */
    public getParent() : XML;

    /**
     * Internal function; not included in reference.
     * @return {*}
     */
    getNative() : any;

    /**
     * Returns the full name (i.e. the name including an eventual namespace
     * prefix) of the element.
     * 
     * @webref xml:method
     * @brief Gets the element's full name
     * @return {string} the name, or null if the element only contains #PCDATA.
     */
    public getName() : string;

    /**
     * @webref xml:method
     * @brief Sets the element's name
     * @param {string} newName
     */
    public setName(newName : string);

    /**
     * Returns the name of the element (without namespace prefix).
     * 
     * Internal function; not included in reference.
     * @return {string}
     */
    public getLocalName() : string;

    /**
     * Honey, can you just check on the kids? Thanks.
     * 
     * Internal function; not included in reference.
     */
    checkChildren();

    /**
     * Returns the number of children.
     * 
     * @webref xml:method
     * @brief Returns the element's number of children
     * @return {number} the count.
     */
    public getChildCount() : number;

    /**
     * Returns a boolean of whether or not there are children.
     * 
     * @webref xml:method
     * @brief Checks whether or not an element has any children
     * @return {boolean}
     */
    public hasChildren() : boolean;

    /**
     * Put the names of all children into an array. Same as looping through
     * each child and calling getName() on each XMLElement.
     * 
     * @webref xml:method
     * @brief Returns the names of all children as an array
     * @return {Array}
     */
    public listChildren() : string[];

    /**
     * Returns an array containing all the child elements.
     * 
     * @webref xml:method
     * @brief Returns an array containing all child elements
     * @return {Array}
     */
    public getChildren() : XML[];

    /**
     * Quick accessor for an element at a particular index.
     * 
     * @webref xml:method
     * @brief Returns the child element with the specified index value or path
     * @param {number} index
     * @return {XML}
     */
    public getChild(index : number) : XML;

    /**
     * Get a child by its name or path.
     * 
     * @param {string} name element name or path/to/element
     * @return {XML} the first matching element or null if no match
     */
    public getChild(name : string) : XML;

    /**
     * Internal helper function for getChild(String).
     * 
     * @param {Array} items result of splitting the query on slashes
     * @param {number} offset where in the items[] array we're currently looking
     * @return {XML} matching element or null if no match
     * @author processing.org
     */
    getChildRecursive(items : string[], offset : number) : XML;

    /**
     * Get any children that match this name or path. Similar to getChild(),
     * but will grab multiple matches rather than only the first.
     * 
     * @param {string} name element name or path/to/element
     * @return {Array} array of child elements that match
     * @author processing.org
     */
    public getChildren(name : string) : XML[];

    getChildrenRecursive(items : string[], offset : number) : XML[];

    /**
     * @webref xml:method
     * @brief Appends a new child to the element
     * @param {string} tag
     * @return {XML}
     */
    public addChild(tag : string) : XML;

    public addChild(child : XML) : XML;

    /**
     * Internal handler to add the node structure.
     * @param {*} newNode
     * @return {XML}
     */
    appendChild(newNode : any) : XML;

    /**
     * @webref xml:method
     * @brief Removes the specified child
     * @param {XML} kid
     */
    public removeChild(kid : XML);

    public trim();

    /**
     * Returns the number of attributes.
     * 
     * @webref xml:method
     * @brief Counts the specified element's number of attributes
     * @return {number}
     */
    public getAttributeCount() : number;

    /**
     * Get a list of the names for all of the attributes for this node.
     * 
     * @webref xml:method
     * @brief Returns a list of names of all attributes as an array
     * @return {Array}
     */
    public listAttributes() : string[];

    /**
     * Returns whether an attribute exists.
     * 
     * @webref xml:method
     * @brief Checks whether or not an element has the specified attribute
     * @param {string} name
     * @return {boolean}
     */
    public hasAttribute(name : string) : boolean;

    /**
     * @webref xml:method
     * @brief Gets the content of an attribute as a String
     * @param {string} name
     * @return {string}
     */
    public getString(name : string) : string;

    public getString(name : string, defaultValue : string) : string;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as a String
     * @param {string} name
     * @param {string} value
     */
    public setString(name : string, value : string);

    /**
     * @webref xml:method
     * @brief Gets the content of an attribute as an int
     * @param {string} name
     * @return {number}
     */
    public getInt(name : string) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as an int
     * @param {string} name
     * @param {number} value
     */
    public setInt(name : string, value : number);

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute
     * @param {number} defaultValue the default value of the attribute
     * @return {number} the value, or defaultValue if the attribute does not exist
     */
    public getInt(name : string, defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an element as an int
     * @param {string} name
     * @param {number} value
     */
    public setLong(name : string, value : number);

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute.
     * @param {number} defaultValue the default value of the attribute.
     * @return {number} the value, or defaultValue if the attribute does not exist.
     */
    public getLong(name : string, defaultValue : number) : number;

    /**
     * Returns the value of an attribute, or zero if not present.
     * 
     * @webref xml:method
     * @brief Gets the content of an attribute as a float
     * @param {string} name
     * @return {number}
     */
    public getFloat(name : string) : number;

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute.
     * @param {number} defaultValue the default value of the attribute.
     * @return {number} the value, or defaultValue if the attribute does not exist.
     */
    public getFloat(name : string, defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an attribute as a float
     * @param {string} name
     * @param {number} value
     */
    public setFloat(name : string, value : number);

    public getDouble(name : string) : number;

    /**
     * Returns the value of an attribute.
     * 
     * @param {string} name the non-null full name of the attribute
     * @param {number} defaultValue the default value of the attribute
     * @return {number} the value, or defaultValue if the attribute does not exist
     */
    public getDouble(name : string, defaultValue : number) : number;

    public setDouble(name : string, value : number);

    /**
     * Return the #PCDATA content of the element. If the element has a
     * combination of #PCDATA content and child elements, the #PCDATA
     * sections can be retrieved as unnamed child objects. In this case,
     * this method returns null.
     * 
     * @webref xml:method
     * @brief Gets the content of an element
     * @return {string} the content.
     * @see XML#getIntContent()
     * @see XML#getFloatContent()
     */
    public getContent() : string;

    public getContent(defaultValue : string) : string;

    /**
     * @webref xml:method
     * @brief Gets the content of an element as an int
     * @return {number} the content.
     * @see XML#getContent()
     * @see XML#getFloatContent()
     */
    public getIntContent() : number;

    /**
     * @param {number} defaultValue the default value of the attribute
     * @return {number}
     */
    public getIntContent(defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Gets the content of an element as a float
     * @return {number} the content.
     * @see XML#getContent()
     * @see XML#getIntContent()
     */
    public getFloatContent() : number;

    /**
     * @param {number} defaultValue the default value of the attribute
     * @return {number}
     */
    public getFloatContent(defaultValue : number) : number;

    public getLongContent() : number;

    public getLongContent(defaultValue : number) : number;

    public getDoubleContent() : number;

    public getDoubleContent(defaultValue : number) : number;

    /**
     * @webref xml:method
     * @brief Sets the content of an element
     * @param {string} text
     */
    public setContent(text : string);

    public setIntContent(value : number);

    public setFloatContent(value : number);

    public setLongContent(value : number);

    public setDoubleContent(value : number);

    /**
     * Format this XML data as a String.
     * 
     * @webref xml:method
     * @brief Formats XML data as a String
     * @param {number} indent -1 for a single line (and no declaration), >= 0 for indents and newlines
     * @return {string} the content
     * @see XML#toString()
     */
    public format(indent : number) : string;

    public print();

    /**
     * Return the XML document formatted with two spaces for indents.
     * Chosen to do this since it's the most common case (e.g. with println()).
     * Same as format(2). Use the format() function for more options.
     * 
     * @webref xml:method
     * @brief Gets XML data as a String using default formatting
     * @return {string} the content
     * @see XML#format(int)
     */
    public toString() : string;
}


