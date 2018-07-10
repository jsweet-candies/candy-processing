/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Create a shape from the PRIMITIVE family, using this kind and these params
 * @param {PGraphicsOpenGL} pg
 * @param {number} kind
 * @param {Array} p
 * @class
 * @extends PShape
 */
declare class PShapeOpenGL extends PShape {
    public static POSITION : number;

    public static NORMAL : number;

    public static TEXCOORD : number;

    public static DIRECTION : number;

    public static OFFSET : number;

    static TRANSLATE : number;

    static ROTATE : number;

    static SCALE : number;

    static MATRIX : number;

    pg : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    root : PShapeOpenGL;

    inGeo : PGraphicsOpenGL.InGeometry;

    tessGeo : PGraphicsOpenGL.TessGeometry;

    tessellator : PGraphicsOpenGL.Tessellator;

    polyAttribs : PGraphicsOpenGL.AttributeMap;

    textures : Array<PImage>;

    strokedTexture : any;

    untexChild : any;

    bufPolyVertex : VertexBuffer;

    bufPolyColor : VertexBuffer;

    bufPolyNormal : VertexBuffer;

    bufPolyTexcoord : VertexBuffer;

    bufPolyAmbient : VertexBuffer;

    bufPolySpecular : VertexBuffer;

    bufPolyEmissive : VertexBuffer;

    bufPolyShininess : VertexBuffer;

    bufPolyIndex : VertexBuffer;

    bufLineVertex : VertexBuffer;

    bufLineColor : VertexBuffer;

    bufLineAttrib : VertexBuffer;

    bufLineIndex : VertexBuffer;

    bufPointVertex : VertexBuffer;

    bufPointColor : VertexBuffer;

    bufPointAttrib : VertexBuffer;

    bufPointIndex : VertexBuffer;

    public glUsage : number;

    polyVertCopyOffset : number;

    polyIndCopyOffset : number;

    lineVertCopyOffset : number;

    lineIndCopyOffset : number;

    pointVertCopyOffset : number;

    pointIndCopyOffset : number;

    polyIndexOffset : number;

    polyVertexOffset : number;

    polyVertexAbs : number;

    polyVertexRel : number;

    lineIndexOffset : number;

    lineVertexOffset : number;

    lineVertexAbs : number;

    lineVertexRel : number;

    pointIndexOffset : number;

    pointVertexOffset : number;

    pointVertexAbs : number;

    pointVertexRel : number;

    firstPolyIndexCache : number;

    lastPolyIndexCache : number;

    firstLineIndexCache : number;

    lastLineIndexCache : number;

    firstPointIndexCache : number;

    lastPointIndexCache : number;

    firstPolyVertex : number;

    lastPolyVertex : number;

    firstLineVertex : number;

    lastLineVertex : number;

    firstPointVertex : number;

    lastPointVertex : number;

    transform : any;

    transformStack : Array<PMatrix>;

    tessellated : boolean;

    needBufferInit : boolean;

    solid : any;

    breakShape : boolean;

    shapeCreated : boolean;

    hasPolys : boolean;

    hasLines : boolean;

    hasPoints : boolean;

    bezierDetail : any;

    curveDetail : any;

    curveTightness : any;

    savedBezierDetail : number;

    savedCurveDetail : number;

    savedCurveTightness : number;

    normalX : number;

    normalY : number;

    normalZ : number;

    static NORMAL_MODE_AUTO : number;

    static NORMAL_MODE_SHAPE : number;

    static NORMAL_MODE_VERTEX : number;

    normalMode : number;

    modified : boolean;

    modifiedPolyVertices : boolean;

    modifiedPolyColors : boolean;

    modifiedPolyNormals : boolean;

    modifiedPolyTexCoords : boolean;

    modifiedPolyAmbient : boolean;

    modifiedPolySpecular : boolean;

    modifiedPolyEmissive : boolean;

    modifiedPolyShininess : boolean;

    modifiedLineVertices : boolean;

    modifiedLineColors : boolean;

    modifiedLineAttributes : boolean;

    modifiedPointVertices : boolean;

    modifiedPointColors : boolean;

    modifiedPointAttributes : boolean;

    firstModifiedPolyVertex : number;

    lastModifiedPolyVertex : number;

    firstModifiedPolyColor : number;

    lastModifiedPolyColor : number;

    firstModifiedPolyNormal : number;

    lastModifiedPolyNormal : number;

    firstModifiedPolyTexcoord : number;

    lastModifiedPolyTexcoord : number;

    firstModifiedPolyAmbient : number;

    lastModifiedPolyAmbient : number;

    firstModifiedPolySpecular : number;

    lastModifiedPolySpecular : number;

    firstModifiedPolyEmissive : number;

    lastModifiedPolyEmissive : number;

    firstModifiedPolyShininess : number;

    lastModifiedPolyShininess : number;

    firstModifiedLineVertex : number;

    lastModifiedLineVertex : number;

    firstModifiedLineColor : number;

    lastModifiedLineColor : number;

    firstModifiedLineAttribute : number;

    lastModifiedLineAttribute : number;

    firstModifiedPointVertex : number;

    lastModifiedPointVertex : number;

    firstModifiedPointColor : number;

    lastModifiedPointColor : number;

    firstModifiedPointAttribute : number;

    lastModifiedPointAttribute : number;

    savedStroke : boolean;

    savedStrokeColor : number;

    savedStrokeWeight : number;

    savedStrokeCap : number;

    savedStrokeJoin : number;

    savedFill : boolean;

    savedFillColor : number;

    savedTint : boolean;

    savedTintColor : number;

    savedAmbientColor : number;

    savedSpecularColor : number;

    savedEmissiveColor : number;

    savedShininess : number;

    savedTextureMode : number;

    constructor();

    public constructor(pg : PGraphicsOpenGL, family : number);

    public constructor(pg : PGraphicsOpenGL, kind : number, ...p : number[]);

    /**
     * 
     * @param {PShape} who
     */
    public addChild(who : PShape);

    /**
     * 
     * @param {PShape} who
     * @param {number} idx
     */
    public addChild(who : PShape, idx : number);

    /**
     * 
     * @param {number} idx
     */
    public removeChild(idx : number);

    updateRoot(root : PShape);

    public static createShape(pg : PGraphicsOpenGL, src : PShape) : PShapeOpenGL;

    public static copyGroup(pg : PGraphicsOpenGL, src : PShape, dest : PShape);

    /**
     * 
     * @return {number}
     */
    public getWidth() : number;

    /**
     * 
     * @return {number}
     */
    public getHeight() : number;

    /**
     * 
     * @return {number}
     */
    public getDepth() : number;

    getVertexMin(min : PVector);

    getVertexMax(max : PVector);

    getVertexSum(sum : PVector, count : number) : number;

    /**
     * 
     * @param {number} mode
     */
    public setTextureMode(mode : number);

    setTextureModeImpl(mode : number);

    /**
     * 
     * @param {PImage} tex
     */
    public setTexture(tex : PImage);

    setTextureImpl(tex : PImage);

    scaleTextureUV(uFactor : number, vFactor : number);

    addTexture(tex : PImage);

    removeTexture(tex : PImage, caller : PShapeOpenGL);

    hasTexture() : boolean;

    hasTexture(tex : PImage) : boolean;

    hasStrokedTexture() : boolean;

    /**
     * 
     */
    beginContourImpl();

    /**
     * 
     */
    endContourImpl();

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public vertex(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} u
     * @param {number} v
     */
    public vertex(x : number, y : number, u : number, v : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public vertex(x : number, y : number, z : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} u
     * @param {number} v
     */
    public vertex(x : number, y : number, z : number, u : number, v : number);

    vertexImpl(x : number, y : number, z : number, u : number, v : number);

    vertexBreak() : boolean;

    /**
     * 
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     */
    public normal(nx : number, ny : number, nz : number);

    /**
     * 
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public attribPosition(name : string, x : number, y : number, z : number);

    /**
     * 
     * @param {string} name
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     */
    public attribNormal(name : string, nx : number, ny : number, nz : number);

    /**
     * 
     * @param {string} name
     * @param {number} color
     */
    public attribColor(name : string, color : number);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {Array} values
     */
    public attrib(name : string, ...values : boolean[]);

    attribImpl(name : string, kind : number, type : number, size : number) : PGraphicsOpenGL.VertexAttribute;

    /**
     * 
     * @param {number} mode
     */
    public endShape(mode : number);

    /**
     * 
     * @param {Array} source
     */
    public setParams(source : number[]);

    /**
     * 
     * @param {number} vcount
     * @param {Array} verts
     * @param {number} ccount
     * @param {Array} codes
     */
    public setPath(vcount : number, verts : number[][], ccount : number, codes : number[]);

    /**
     * 
     * @param {number} tx
     * @param {number} ty
     */
    public translate(tx : number, ty : number);

    /**
     * 
     * @param {number} tx
     * @param {number} ty
     * @param {number} tz
     */
    public translate(tx : number, ty : number, tz : number);

    /**
     * 
     * @param {number} angle
     */
    public rotate(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateX(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateY(angle : number);

    /**
     * 
     * @param {number} angle
     */
    public rotateZ(angle : number);

    /**
     * 
     * @param {number} angle
     * @param {number} v0
     * @param {number} v1
     * @param {number} v2
     */
    public rotate(angle : number, v0 : number, v1 : number, v2 : number);

    /**
     * 
     * @param {number} s
     */
    public scale(s : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public scale(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public scale(x : number, y : number, z : number);

    /**
     * 
     * @param {PMatrix2D} source
     */
    public applyMatrix(source : PMatrix2D);

    /**
     * 
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n10 : number, n11 : number, n12 : number);

    /**
     * 
     * @param {number} n00
     * @param {number} n01
     * @param {number} n02
     * @param {number} n03
     * @param {number} n10
     * @param {number} n11
     * @param {number} n12
     * @param {number} n13
     * @param {number} n20
     * @param {number} n21
     * @param {number} n22
     * @param {number} n23
     * @param {number} n30
     * @param {number} n31
     * @param {number} n32
     * @param {number} n33
     */
    public applyMatrix(n00 : number, n01 : number, n02 : number, n03 : number, n10 : number, n11 : number, n12 : number, n13 : number, n20 : number, n21 : number, n22 : number, n23 : number, n30 : number, n31 : number, n32 : number, n33 : number);

    /**
     * 
     */
    public resetMatrix();

    pushTransform();

    popTransform() : PMatrix;

    applyMatrixImpl(matrix : PMatrix);

    /**
     * 
     * @param {number} x2
     * @param {number} y2
     * @param {number} x3
     * @param {number} y3
     * @param {number} x4
     * @param {number} y4
     */
    public bezierVertex(x2 : number, y2 : number, x3 : number, y3 : number, x4 : number, y4 : number);

    /**
     * 
     * @param {number} x2
     * @param {number} y2
     * @param {number} z2
     * @param {number} x3
     * @param {number} y3
     * @param {number} z3
     * @param {number} x4
     * @param {number} y4
     * @param {number} z4
     */
    public bezierVertex(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    bezierVertexImpl(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    /**
     * 
     * @param {number} cx
     * @param {number} cy
     * @param {number} x3
     * @param {number} y3
     */
    public quadraticVertex(cx : number, cy : number, x3 : number, y3 : number);

    /**
     * 
     * @param {number} cx
     * @param {number} cy
     * @param {number} cz
     * @param {number} x3
     * @param {number} y3
     * @param {number} z3
     */
    public quadraticVertex(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    quadraticVertexImpl(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public curveVertex(x : number, y : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public curveVertex(x : number, y : number, z : number);

    curveVertexImpl(x : number, y : number, z : number);

    /**
     * 
     * @return {number}
     */
    public getVertexCount() : number;

    /**
     * 
     * @param {number} index
     * @param {PVector} vec
     * @return {PVector}
     */
    public getVertex(index : number, vec : PVector) : PVector;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getVertexX(index : number) : number;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getVertexY(index : number) : number;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getVertexZ(index : number) : number;

    /**
     * 
     * @param {number} index
     * @param {number} x
     * @param {number} y
     */
    public setVertex(index : number, x : number, y : number);

    /**
     * 
     * @param {number} index
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public setVertex(index : number, x : number, y : number, z : number);

    /**
     * 
     * @param {number} index
     * @param {PVector} vec
     */
    public setVertex(index : number, vec : PVector);

    /**
     * 
     * @param {number} index
     * @param {PVector} vec
     * @return {PVector}
     */
    public getNormal(index : number, vec : PVector) : PVector;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getNormalX(index : number) : number;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getNormalY(index : number) : number;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getNormalZ(index : number) : number;

    /**
     * 
     * @param {number} index
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     */
    public setNormal(index : number, nx : number, ny : number, nz : number);

    /**
     * 
     * @param {string} name
     * @param {number} index
     * @param {Array} values
     */
    public setAttrib(name : string, index : number, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {number} index
     * @param {Array} values
     */
    public setAttrib(name : string, index : number, ...values : number[]);

    /**
     * 
     * @param {string} name
     * @param {number} index
     * @param {Array} values
     */
    public setAttrib(name : string, index : number, ...values : boolean[]);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getTextureU(index : number) : number;

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getTextureV(index : number) : number;

    /**
     * 
     * @param {number} index
     * @param {number} u
     * @param {number} v
     */
    public setTextureUV(index : number, u : number, v : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getFill(index : number) : number;

    /**
     * 
     * @param {boolean} fill
     */
    public setFill(fill : boolean);

    /**
     * 
     * @param {number} fill
     */
    public setFill(fill : number);

    setFillImpl(fill : number);

    /**
     * 
     * @param {number} index
     * @param {number} fill
     */
    public setFill(index : number, fill : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getTint(index : number) : number;

    /**
     * 
     * @param {boolean} tint
     */
    public setTint(tint : boolean);

    /**
     * 
     * @param {number} tint
     */
    public setTint(tint : number);

    setTintImpl(tint : number);

    /**
     * 
     * @param {number} index
     * @param {number} tint
     */
    public setTint(index : number, tint : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getStroke(index : number) : number;

    /**
     * 
     * @param {boolean} stroke
     */
    public setStroke(stroke : boolean);

    setStrokeImpl(stroke : boolean);

    /**
     * 
     * @param {number} stroke
     */
    public setStroke(stroke : number);

    setStrokeImpl(stroke : number);

    /**
     * 
     * @param {number} index
     * @param {number} stroke
     */
    public setStroke(index : number, stroke : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getStrokeWeight(index : number) : number;

    /**
     * 
     * @param {number} weight
     */
    public setStrokeWeight(weight : number);

    setStrokeWeightImpl(weight : number);

    /**
     * 
     * @param {number} index
     * @param {number} weight
     */
    public setStrokeWeight(index : number, weight : number);

    /**
     * 
     * @param {number} join
     */
    public setStrokeJoin(join : number);

    /**
     * 
     * @param {number} cap
     */
    public setStrokeCap(cap : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getAmbient(index : number) : number;

    setAmbientImpl(ambient : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getSpecular(index : number) : number;

    /**
     * 
     * @param {number} specular
     */
    public setSpecular(specular : number);

    setSpecularImpl(specular : number);

    /**
     * 
     * @param {number} index
     * @param {number} specular
     */
    public setSpecular(index : number, specular : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getEmissive(index : number) : number;

    /**
     * 
     * @param {number} emissive
     */
    public setEmissive(emissive : number);

    setEmissiveImpl(emissive : number);

    /**
     * 
     * @param {number} index
     * @param {number} emissive
     */
    public setEmissive(index : number, emissive : number);

    /**
     * 
     * @param {number} index
     * @return {number}
     */
    public getShininess(index : number) : number;

    /**
     * 
     * @param {number} shininess
     */
    public setShininess(shininess : number);

    setShininessImpl(shininess : number);

    /**
     * 
     * @param {number} index
     * @param {number} shine
     */
    public setShininess(index : number, shine : number);

    /**
     * 
     * @return {Array}
     */
    public getVertexCodes() : number[];

    /**
     * 
     * @return {number}
     */
    public getVertexCodeCount() : number;

    /**
     * One of VERTEX, BEZIER_VERTEX, CURVE_VERTEX, or BREAK.
     * @param {number} index
     * @return {number}
     */
    public getVertexCode(index : number) : number;

    /**
     * 
     * @return {PShape}
     */
    public getTessellation() : PShape;

    public getTessellation(kind : number, data : number) : number[];

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    public contains(x : number, y : number) : boolean;

    updateTessellation();

    markForTessellation();

    initModified();

    tessellate();

    collectPolyAttribs();

    tessellateImpl();

    tessellatePoint();

    tessellateLine();

    tessellateTriangle();

    tessellateQuad();

    tessellateRect();

    tessellateEllipse();

    tessellateArc();

    tessellateBox();

    tessellateSphere();

    tessellatePath();

    saveBezierVertexSettings();

    restoreBezierVertexSettings();

    saveCurveVertexSettings();

    restoreCurveVertexSettings();

    aggregate();

    aggregateImpl();

    updatePolyIndexCache();

    startStrokedTex(n : number) : boolean;

    setFirstStrokeVertex(n : number, vert : number);

    setLastStrokeVertex(vert : number);

    updateLineIndexCache();

    updatePointIndexCache();

    initBuffers();

    initPolyBuffers();

    initLineBuffers();

    initPointBuffers();

    contextIsOutdated() : boolean;

    updateGeometry();

    updateGeometryImpl();

    copyPolyVertices(offset : number, size : number);

    copyPolyColors(offset : number, size : number);

    copyPolyNormals(offset : number, size : number);

    copyPolyTexCoords(offset : number, size : number);

    copyPolyAmbient(offset : number, size : number);

    copyPolySpecular(offset : number, size : number);

    copyPolyEmissive(offset : number, size : number);

    copyPolyShininess(offset : number, size : number);

    copyPolyAttrib(attrib : PGraphicsOpenGL.VertexAttribute, offset : number, size : number);

    copyLineVertices(offset : number, size : number);

    copyLineColors(offset : number, size : number);

    copyLineAttributes(offset : number, size : number);

    copyPointVertices(offset : number, size : number);

    copyPointColors(offset : number, size : number);

    copyPointAttributes(offset : number, size : number);

    setModifiedPolyVertices(first : number, last : number);

    setModifiedPolyColors(first : number, last : number);

    setModifiedPolyNormals(first : number, last : number);

    setModifiedPolyTexCoords(first : number, last : number);

    setModifiedPolyAmbient(first : number, last : number);

    setModifiedPolySpecular(first : number, last : number);

    setModifiedPolyEmissive(first : number, last : number);

    setModifiedPolyShininess(first : number, last : number);

    setModifiedPolyAttrib(attrib : PGraphicsOpenGL.VertexAttribute, first : number, last : number);

    setModifiedLineVertices(first : number, last : number);

    setModifiedLineColors(first : number, last : number);

    setModifiedLineAttributes(first : number, last : number);

    setModifiedPointVertices(first : number, last : number);

    setModifiedPointColors(first : number, last : number);

    setModifiedPointAttributes(first : number, last : number);

    /**
     * 
     */
    public disableStyle();

    /**
     * 
     */
    public enableStyle();

    /**
     * 
     * @param {PGraphics} g
     */
    styles(g : PGraphics);

    /**
     * 
     * @param {PGraphics} g
     */
    public draw(g : PGraphics);

    /*private*/ inGeoToVertices();

    fragmentedGroup(g : PGraphicsOpenGL) : boolean;

    /**
     * 
     * @param {PGraphics} g
     */
    pre(g : PGraphics);

    /**
     * 
     * @param {PGraphics} g
     */
    post(g : PGraphics);

    /**
     * 
     * @param {PGraphics} g
     */
    drawGeometry(g : PGraphics);
}


