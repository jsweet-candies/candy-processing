/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * ( begin auto-generated from PShape.xml )
 * 
 * Datatype for storing shapes. Processing can currently load and display
 * SVG (Scalable Vector Graphics) shapes. Before a shape is used, it must
 * be loaded with the <b>loadShape()</b> function. The <b>shape()</b>
 * function is used to draw the shape to the display window. The
 * <b>PShape</b> object contain a group of methods, linked below, that can
 * operate on the shape data.
 * <br /><br />
 * The <b>loadShape()</b> function supports SVG files created with Inkscape
 * and Adobe Illustrator. It is not a full SVG implementation, but offers
 * some straightforward support for handling vector data.
 * 
 * ( end auto-generated )
 * <h3>Advanced</h3>
 * 
 * In-progress class to handle shape data, currently to be considered of
 * alpha or beta quality. Major structural work may be performed on this class
 * after the release of Processing 1.0. Such changes may include:
 * 
 * <ul>
 * <li> addition of proper accessors to read shape vertex and coloring data
 * (this is the second most important part of having a PShape class after all).
 * <li> a means of creating PShape objects ala beginShape() and endShape().
 * <li> load(), update(), and cache methods ala PImage, so that shapes can
 * have renderer-specific optimizations, such as vertex arrays in OpenGL.
 * <li> splitting this class into multiple classes to handle different
 * varieties of shape data (primitives vs collections of vertices vs paths)
 * <li> change of package declaration, for instance moving the code into
 * package def.processing.shape (if the code grows too much).
 * </ul>
 * 
 * <p>For the time being, this class and its shape() and loadShape() friends in
 * PApplet exist as placeholders for more exciting things to come. If you'd
 * like to work with this class, make a subclass (see how PShapeSVG works)
 * and you can play with its internal methods all you like.</p>
 * 
 * <p>Library developers are encouraged to create PShape objects when loading
 * shape data, so that they can eventually hook into the bounty that will be
 * the PShape interface, and the ease of loadShape() and shape().</p>
 * 
 * @webref shape
 * @usage Web &amp; Application
 * @see PApplet#loadShape(String)
 * @see PApplet#createShape()
 * @see PApplet#shapeMode(int)
 * @instanceName sh any variable of type PShape
 * @param {PGraphics} g
 * @param {number} kind
 * @param {Array} params
 * @class
 */
declare class PShape implements PConstants {
    name : string;

    nameTable : any;

    /**
     * A line, ellipse, arc, image, etc.
     */
    public static PRIMITIVE : number;

    /**
     * A series of vertex, curveVertex, and bezierVertex calls.
     */
    public static PATH : number;

    /**
     * Collections of vertices created with beginShape().
     */
    public static GEOMETRY : number;

    /**
     * The shape type, one of GROUP, PRIMITIVE, PATH, or GEOMETRY.
     */
    family : number;

    /**
     * ELLIPSE, LINE, QUAD; TRIANGLE_FAN, QUAD_STRIP; etc.
     */
    kind : number;

    matrix : PMatrix;

    textureMode : any;

    /**
     * Texture or image data associated with this shape.
     */
    image : PImage;

    public static OUTSIDE_BEGIN_END_ERROR : string;

    public static INSIDE_BEGIN_END_ERROR : string;

    public static NO_SUCH_VERTEX_ERROR : string;

    public static NO_VERTICES_ERROR : string;

    public static NOT_A_SIMPLE_VERTEX : string;

    public static PER_VERTEX_UNSUPPORTED : string;

    /**
     * ( begin auto-generated from PShape_width.xml )
     * 
     * The width of the PShape document.
     * 
     * ( end auto-generated )
     * @webref pshape:field
     * @usage web_application
     * @brief     Shape document width
     * @see PShape#height
     */
    public width : number;

    /**
     * ( begin auto-generated from PShape_height.xml )
     * 
     * The height of the PShape document.
     * 
     * ( end auto-generated )
     * @webref pshape:field
     * @usage web_application
     * @brief     Shape document height
     * @see PShape#width
     */
    public height : number;

    public depth : number;

    g : PGraphics;

    visible : boolean;

    /**
     * Retained shape being created with beginShape/endShape
     */
    openShape : boolean;

    openContour : boolean;

    stroke : any;

    strokeColor : number;

    strokeWeight : any;

    strokeCap : any;

    strokeJoin : any;

    fill : any;

    fillColor : number;

    tint : any;

    tintColor : number;

    ambientColor : number;

    setAmbient : any;

    specularColor : number;

    emissiveColor : number;

    shininess : any;

    sphereDetailU : number;

    sphereDetailV : number;

    rectMode : number;

    ellipseMode : number;

    /**
     * Temporary toggle for whether styles should be honored.
     */
    style : boolean;

    /**
     * For primitive shapes in particular, params like x/y/w/h or x1/y1/x2/y2.
     */
    params : number[];

    vertexCount : number;

    /**
     * When drawing POLYGON shapes, the second param is an array of length
     * VERTEX_FIELD_COUNT. When drawing PATH shapes, the second param has only
     * two variables.
     */
    vertices : number[][];

    parent : PShape;

    childCount : number;

    children : PShape[];

    /**
     * Array of VERTEX, BEZIER_VERTEX, and CURVE_VERTEX calls.
     */
    vertexCodeCount : number;

    vertexCodes : number[];

    /**
     * True if this is a closed path.
     */
    close : boolean;

    calcR : number;

    calcG : number;

    calcB : number;

    calcA : number;

    calcRi : number;

    calcGi : number;

    calcBi : number;

    calcAi : number;

    calcColor : number;

    calcAlpha : boolean;

    /**
     * The current colorMode
     */
    public colorMode : any;

    /**
     * Max value for red (or hue) set by colorMode
     */
    public colorModeX : number;

    /**
     * Max value for green (or saturation) set by colorMode
     */
    public colorModeY : number;

    /**
     * Max value for blue (or value) set by colorMode
     */
    public colorModeZ : number;

    /**
     * Max value for alpha set by colorMode
     */
    public colorModeA : number;

    /**
     * True if colors are not in the range 0..1
     */
    colorModeScale : boolean;

    /**
     * True if colorMode(RGB, 255)
     */
    colorModeDefault : boolean;

    /**
     * True if contains 3D data
     */
    is3D : any;

    perVertexStyles : boolean;

    public constructor();

    public constructor(family : number);

    public constructor(g : PGraphics, family : number);

    public constructor(g : PGraphics, kind : number, ...params : number[]);

    public setFamily(family : number);

    public setKind(kind : number);

    public setName(name : string);

    public getName() : string;

    /**
     * ( begin auto-generated from PShape_isVisible.xml )
     * 
     * Returns a boolean value "true" if the image is set to be visible,
     * "false" if not. This is modified with the <b>setVisible()</b> parameter.
     * <br/> <br/>
     * The visibility of a shape is usually controlled by whatever program
     * created the SVG file. For instance, this parameter is controlled by
     * showing or hiding the shape in the layers palette in Adobe Illustrator.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Returns a boolean value "true" if the image is set to be visible, "false" if not
     * @see PShape#setVisible(boolean)
     * @return {boolean}
     */
    public isVisible() : boolean;

    /**
     * ( begin auto-generated from PShape_setVisible.xml )
     * 
     * Sets the shape to be visible or invisible. This is determined by the
     * value of the <b>visible</b> parameter.
     * <br/> <br/>
     * The visibility of a shape is usually controlled by whatever program
     * created the SVG file. For instance, this parameter is controlled by
     * showing or hiding the shape in the layers palette in Adobe Illustrator.
     * 
     * ( end auto-generated )
     * @webref pshape:mathod
     * @usage web_application
     * @brief Sets the shape to be visible or invisible
     * @param {boolean} visible "false" makes the shape invisible and "true" makes it visible
     * @see PShape#isVisible()
     */
    public setVisible(visible : boolean);

    /**
     * ( begin auto-generated from PShape_disableStyle.xml )
     * 
     * Disables the shape's style data and uses Processing's current styles.
     * Styles include attributes such as colors, stroke weight, and stroke
     * joints.
     * 
     * ( end auto-generated )
     * <h3>Advanced</h3>
     * Overrides this shape's style information and uses PGraphics styles and
     * colors. Identical to ignoreStyles(true). Also disables styles for all
     * child shapes.
     * @webref pshape:method
     * @usage web_application
     * @brief     Disables the shape's style data and uses Processing styles
     * @see PShape#enableStyle()
     */
    public disableStyle();

    /**
     * ( begin auto-generated from PShape_enableStyle.xml )
     * 
     * Enables the shape's style data and ignores Processing's current styles.
     * Styles include attributes such as colors, stroke weight, and stroke
     * joints.
     * 
     * ( end auto-generated )
     * 
     * @webref pshape:method
     * @usage web_application
     * @brief Enables the shape's style data and ignores the Processing styles
     * @see PShape#disableStyle()
     */
    public enableStyle();

    /**
     * Get the width of the drawing area (not necessarily the shape boundary).
     * @return {number}
     */
    public getWidth() : number;

    /**
     * Get the height of the drawing area (not necessarily the shape boundary).
     * @return {number}
     */
    public getHeight() : number;

    /**
     * Get the depth of the shape area (not necessarily the shape boundary). Only makes sense for 3D PShape subclasses,
     * such as PShape3D.
     * @return {number}
     */
    public getDepth() : number;

    /**
     * Return true if this shape is 2D. Defaults to true.
     * @return {boolean}
     */
    public is2D() : boolean;

    public set3D(val : boolean);

    public texture(tex : PImage);

    public noTexture();

    solid(solid : boolean);

    /**
     * @webref shape:vertex
     * @brief Starts a new contour
     * @see PShape#endContour()
     */
    public beginContour();

    beginContourImpl();

    /**
     * @webref shape:vertex
     * @brief Ends a contour
     * @see PShape#beginContour()
     */
    public endContour();

    endContourImpl();

    public vertex(x : number, y : number);

    public vertex(x : number, y : number, u : number, v : number);

    public vertex(x : number, y : number, z : number);

    public vertex(x : number, y : number, z : number, u : number, v : number);

    public normal(nx : number, ny : number, nz : number);

    public attribPosition(name : string, x : number, y : number, z : number);

    public attribNormal(name : string, nx : number, ny : number, nz : number);

    public attribColor(name : string, color : number);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : number[]);

    public attrib(name : string, ...values : boolean[]);

    /**
     * @webref pshape:method
     * @brief Starts the creation of a new PShape
     * @see PApplet#endShape()
     */
    public beginShape();

    public beginShape(kind : number);

    /**
     * @webref pshape:method
     * @brief Finishes the creation of a new PShape
     * @see PApplet#beginShape()
     */
    public endShape();

    public endShape(mode : number);

    public noFill();

    public noStroke();

    public noTint();

    public ambient(rgb : number);

    public ambient(gray : number);

    public ambient(x : number, y : number, z : number);

    public specular(rgb : number);

    public specular(gray : number);

    public specular(x : number, y : number, z : number);

    public emissive(rgb : number);

    public emissive(gray : number);

    public emissive(x : number, y : number, z : number);

    public bezierDetail(detail : number);

    public bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    public bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    public quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    public quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    public curveDetail(detail : number);

    public curveTightness(tightness : number);

    public curveVertex(x : number, y : number);

    public curveVertex(x : number, y : number, z : number);

    pre(g : PGraphics);

    styles(g : PGraphics);

    post(g : PGraphics);

    static copyPrimitive(src : PShape, dest : PShape);

    static copyGeometry(src : PShape, dest : PShape);

    static copyPath(src : PShape, dest : PShape);

    static copyMatrix(src : PShape, dest : PShape);

    static copyStyles(src : PShape, dest : PShape);

    static copyImage(src : PShape, dest : PShape);

    /**
     * Called by the following (the shape() command adds the g)
     * PShape s = loadShape("blah.svg");
     * shape(s);
     * @param {PGraphics} g
     */
    public draw(g : PGraphics);

    /**
     * Draws the SVG document.
     * @param {PGraphics} g
     */
    drawImpl(g : PGraphics);

    drawGroup(g : PGraphics);

    drawPrimitive(g : PGraphics);

    drawGeometry(g : PGraphics);

    drawPath(g : PGraphics);

    public getParent() : PShape;

    /**
     * @webref
     * @brief Returns the number of children
     * @return {number}
     */
    public getChildCount() : number;

    /**
     * Resize the children[] array to be in line with childCount
     */
    crop();

    public getChildren() : PShape[];

    /**
     * ( begin auto-generated from PShape_getChild.xml )
     * 
     * Extracts a child shape from a parent shape. Specify the name of the
     * shape with the <b>target</b> parameter. The shape is returned as a
     * <b>PShape</b> object, or <b>null</b> is returned if there is an error.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Returns a child element of a shape as a PShape object
     * @param {number} index the layer position of the shape to get
     * @see PShape#addChild(PShape)
     * @return {PShape}
     */
    public getChild(index : number) : PShape;

    /**
     * @param {string} target the name of the shape to get
     * @return {PShape}
     */
    public getChild(target : string) : PShape;

    /**
     * Same as getChild(name), except that it first walks all the way up the
     * hierarchy to the eldest grandparent, so that children can be found anywhere.
     * @param {string} target
     * @return {PShape}
     */
    public findChild(target : string) : PShape;

    /**
     * @webref pshape:method
     * @brief Adds a new child
     * @param {PShape} who any variable of type PShape
     * @see PShape#getChild(int)
     */
    public addChild(who : PShape);

    /**
     * @param {number} idx the layer position in which to insert the new child
     * @param {PShape} who
     */
    public addChild(who : PShape, idx : number);

    /**
     * Remove the child shape with index idx.
     * @param {number} idx
     */
    public removeChild(idx : number);

    /**
     * Add a shape to the name lookup table.
     * @param {string} nom
     * @param {PShape} shape
     */
    public addName(nom : string, shape : PShape);

    /**
     * Returns the index of child who.
     * @param {PShape} who
     * @return {number}
     */
    public getChildIndex(who : PShape) : number;

    public getTessellation() : PShape;

    /**
     * The shape type, one of GROUP, PRIMITIVE, PATH, or GEOMETRY.
     * @return {number}
     */
    public getFamily() : number;

    public getKind() : number;

    public getParams() : number[];

    public getParams(target : number[]) : number[];

    public getParam(index : number) : number;

    setParams(source : number[]);

    public setPath(vcount : number, verts : number[][]);

    setPath(vcount : number, verts : number[][], ccount : number, codes : number[]);

    /**
     * @webref pshape:method
     * @brief Returns the total number of vertices as an int
     * @see PShape#getVertex(int)
     * @see PShape#setVertex(int, float, float)
     * @return {number}
     */
    public getVertexCount() : number;

    /**
     * @webref pshape:method
     * @brief Returns the vertex at the index position
     * @param {number} index the location of the vertex
     * @see PShape#setVertex(int, float, float)
     * @see PShape#getVertexCount()
     * @return {PVector}
     */
    public getVertex(index : number) : PVector;

    /**
     * @param {PVector} vec PVector to assign the data to
     * @param {number} index
     * @return {PVector}
     */
    public getVertex(index : number, vec : PVector) : PVector;

    public getVertexX(index : number) : number;

    public getVertexY(index : number) : number;

    public getVertexZ(index : number) : number;

    /**
     * @webref pshape:method
     * @brief Sets the vertex at the index position
     * @param {number} index the location of the vertex
     * @param {number} x the x value for the vertex
     * @param {number} y the y value for the vertex
     * @see PShape#getVertex(int)
     * @see PShape#getVertexCount()
     */
    public setVertex(index : number, x : number, y : number);

    /**
     * @param {number} z the z value for the vertex
     * @param {number} index
     * @param {number} x
     * @param {number} y
     */
    public setVertex(index : number, x : number, y : number, z : number);

    /**
     * @param {PVector} vec the PVector to define the x, y, z coordinates
     * @param {number} index
     */
    public setVertex(index : number, vec : PVector);

    public getNormal(index : number) : PVector;

    public getNormal(index : number, vec : PVector) : PVector;

    public getNormalX(index : number) : number;

    public getNormalY(index : number) : number;

    public getNormalZ(index : number) : number;

    public setNormal(index : number, nx : number, ny : number, nz : number);

    public setAttrib(name : string, index : number, ...values : number[]);

    public setAttrib(name : string, index : number, ...values : number[]);

    public setAttrib(name : string, index : number, ...values : boolean[]);

    public getTextureU(index : number) : number;

    public getTextureV(index : number) : number;

    public setTextureUV(index : number, u : number, v : number);

    public setTextureMode(mode : number);

    public setTexture(tex : PImage);

    public getFill(index : number) : number;

    /**
     * @nowebref
     * @param {boolean} fill
     */
    public setFill(fill : boolean);

    /**
     * ( begin auto-generated from PShape_setFill.xml )
     * 
     * The <b>setFill()</b> method defines the fill color of a <b>PShape</b>.
     * This method is used after shapes are created or when a shape is defined explicitly
     * (e.g. <b>createShape(RECT, 20, 20, 80, 80)</b>) as shown in the above example.
     * When a shape is created with <b>beginShape()</b> and <b>endShape()</b>, its
     * attributes may be changed with <b>fill()</b> and <b>stroke()</b> within
     * <b>beginShape()</b> and <b>endShape()</b>. However, after the shape is
     * created, only the <b>setFill()</b> method can define a new fill value for
     * the <b>PShape</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref
     * @param {number} fill
     * @brief Set the fill value
     */
    public setFill(fill : number);

    /**
     * @nowebref
     * @param {number} index
     * @param {number} fill
     */
    public setFill(index : number, fill : number);

    public getTint(index : number) : number;

    public setTint(tint : boolean);

    public setTint(fill : number);

    public setTint(index : number, tint : number);

    public getStroke(index : number) : number;

    /**
     * @nowebref
     * @param {boolean} stroke
     */
    public setStroke(stroke : boolean);

    /**
     * ( begin auto-generated from PShape_setStroke.xml )
     * 
     * The <b>setStroke()</b> method defines the outline color of a <b>PShape</b>.
     * This method is used after shapes are created or when a shape is defined
     * explicitly (e.g. <b>createShape(RECT, 20, 20, 80, 80)</b>) as shown in
     * the above example. When a shape is created with <b>beginShape()</b> and
     * <b>endShape()</b>, its attributes may be changed with <b>fill()</b> and
     * <b>stroke()</b> within <b>beginShape()</b> and <b>endShape()</b>.
     * However, after the shape is created, only the <b>setStroke()</b> method
     * can define a new stroke value for the <b>PShape</b>.
     * 
     * ( end auto-generated )
     * 
     * @webref
     * @param {number} stroke
     * @brief Set the stroke value
     */
    public setStroke(stroke : number);

    /**
     * @nowebref
     * @param {number} index
     * @param {number} stroke
     */
    public setStroke(index : number, stroke : number);

    public getStrokeWeight(index : number) : number;

    public setStrokeWeight(weight : number);

    public setStrokeWeight(index : number, weight : number);

    public setStrokeJoin(join : number);

    public setStrokeCap(cap : number);

    public getAmbient(index : number) : number;

    public getSpecular(index : number) : number;

    public setSpecular(specular : number);

    public setSpecular(index : number, specular : number);

    public getEmissive(index : number) : number;

    public setEmissive(emissive : number);

    public setEmissive(index : number, emissive : number);

    public getShininess(index : number) : number;

    public setShininess(shine : number);

    public setShininess(index : number, shine : number);

    public getVertexCodes() : number[];

    public getVertexCodeCount() : number;

    /**
     * One of VERTEX, BEZIER_VERTEX, CURVE_VERTEX, or BREAK.
     * @param {number} index
     * @return {number}
     */
    public getVertexCode(index : number) : number;

    public isClosed() : boolean;

    public contains(x : number, y : number) : boolean;

    /**
     * ( begin auto-generated from PShape_translate.xml )
     * 
     * Specifies an amount to displace the shape. The <b>x</b> parameter
     * specifies left/right translation, the <b>y</b> parameter specifies
     * up/down translation, and the <b>z</b> parameter specifies translations
     * toward/away from the screen. Subsequent calls to the method accumulates
     * the effect. For example, calling <b>translate(50, 0)</b> and then
     * <b>translate(20, 0)</b> is the same as <b>translate(70, 0)</b>. This
     * transformation is applied directly to the shape, it's not refreshed each
     * time <b>draw()</b> is run.
     * <br /><br />
     * Using this method with the <b>z</b> parameter requires using the P3D
     * parameter in combination with size.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Displaces the shape
     * @param {number} x left/right translation
     * @param {number} y up/down translation
     * @see PShape#rotate(float)
     * @see PShape#scale(float)
     * @see PShape#resetMatrix()
     */
    public translate(x : number, y : number);

    /**
     * @param {number} z forward/back translation
     * @param {number} x
     * @param {number} y
     */
    public translate(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from PShape_rotateX.xml )
     * 
     * Rotates a shape around the x-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateX(HALF_PI)</b> and then <b>rotateX(HALF_PI)</b> is the
     * same as <b>rotateX(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the x-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateY(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateX(angle : number);

    /**
     * ( begin auto-generated from PShape_rotateY.xml )
     * 
     * Rotates a shape around the y-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateY(HALF_PI)</b> and then <b>rotateY(HALF_PI)</b> is the
     * same as <b>rotateY(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * 
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the y-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateX(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateY(angle : number);

    /**
     * ( begin auto-generated from PShape_rotateZ.xml )
     * 
     * Rotates a shape around the z-axis the amount specified by the
     * <b>angle</b> parameter. Angles should be specified in radians (values
     * from 0 to TWO_PI) or converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Subsequent calls to the method accumulates the effect. For example,
     * calling <b>rotateZ(HALF_PI)</b> and then <b>rotateZ(HALF_PI)</b> is the
     * same as <b>rotateZ(PI)</b>. This transformation is applied directly to
     * the shape, it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * This method requires a 3D renderer. You need to use P3D as a third
     * parameter for the <b>size()</b> function as shown in the example above.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape around the z-axis
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotate(float)
     * @see PShape#rotateX(float)
     * @see PShape#rotateY(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotateZ(angle : number);

    /**
     * ( begin auto-generated from PShape_rotate.xml )
     * 
     * Rotates a shape the amount specified by the <b>angle</b> parameter.
     * Angles should be specified in radians (values from 0 to TWO_PI) or
     * converted to radians with the <b>radians()</b> method.
     * <br /><br />
     * Shapes are always rotated around the upper-left corner of their bounding
     * box. Positive numbers rotate objects in a clockwise direction.
     * Transformations apply to everything that happens after and subsequent
     * calls to the method accumulates the effect. For example, calling
     * <b>rotate(HALF_PI)</b> and then <b>rotate(HALF_PI)</b> is the same as
     * <b>rotate(PI)</b>. This transformation is applied directly to the shape,
     * it's not refreshed each time <b>draw()</b> is run.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Rotates the shape
     * @param {number} angle angle of rotation specified in radians
     * @see PShape#rotateX(float)
     * @see PShape#rotateY(float)
     * @see PShape#rotateZ(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public rotate(angle : number);

    /**
     * @nowebref
     * @param {number} angle
     * @param {number} v0
     * @param {number} v1
     * @param {number} v2
     */
    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    /**
     * ( begin auto-generated from PShape_scale.xml )
     * 
     * Increases or decreases the size of a shape by expanding and contracting
     * vertices. Shapes always scale from the relative origin of their bounding
     * box. Scale values are specified as decimal percentages. For example, the
     * method call <b>scale(2.0)</b> increases the dimension of a shape by
     * 200%. Subsequent calls to the method multiply the effect. For example,
     * calling <b>scale(2.0)</b> and then <b>scale(1.5)</b> is the same as
     * <b>scale(3.0)</b>. This transformation is applied directly to the shape,
     * it's not refreshed each time <b>draw()</b> is run.
     * <br /><br />
     * Using this method with the <b>z</b> parameter requires using the P3D
     * parameter in combination with size.
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @usage web_application
     * @brief Increases and decreases the size of a shape
     * @param {number} s percentate to scale the object
     * @see PShape#rotate(float)
     * @see PShape#translate(float, float)
     * @see PShape#resetMatrix()
     */
    public scale(s : number);

    public scale(x : number, y : number);

    /**
     * @param {number} x percentage to scale the object in the x-axis
     * @param {number} y percentage to scale the object in the y-axis
     * @param {number} z percentage to scale the object in the z-axis
     */
    public scale(x : number, y : number, z : number);

    /**
     * ( begin auto-generated from PShape_resetMatrix.xml )
     * 
     * Replaces the current matrix of a shape with the identity matrix. The
     * equivalent function in OpenGL is glLoadIdentity().
     * 
     * ( end auto-generated )
     * @webref pshape:method
     * @brief Replaces the current matrix of a shape with the identity matrix
     * @usage web_application
     * @see PShape#rotate(float)
     * @see PShape#scale(float)
     * @see PShape#translate(float, float)
     */
    public resetMatrix();

    public applyMatrix(source : PMatrix);

    public applyMatrix(source : PMatrix2D);

    public applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    public applyMatrix(source : PMatrix3D);

    public applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * Make sure that the shape's matrix is 1) not null, and 2) has a matrix
     * that can handle <em>at least</em> the specified number of dimensions.
     * @param {number} dimensions
     */
    checkMatrix(dimensions : number);

    colorCalc(rgb : number);

    colorCalc(rgb : number, alpha : number);

    colorCalc(gray : number);

    colorCalc(gray : number, alpha : number);

    colorCalc(x : number, y : number, z : number);

    colorCalc(x : number, y : number, z : number, a : number);

    colorCalcARGB(argb : number, alpha : number);
}


