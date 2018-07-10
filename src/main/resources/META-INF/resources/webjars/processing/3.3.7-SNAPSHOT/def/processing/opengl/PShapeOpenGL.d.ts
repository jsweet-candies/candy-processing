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

    ___solid : boolean;

    breakShape : boolean;

    shapeCreated : boolean;

    hasPolys : boolean;

    hasLines : boolean;

    hasPoints : boolean;

    __bezierDetail : number;

    __curveDetail : number;

    __curveTightness : number;

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

    updateRoot(root : PShape);

    public static createShape(pg : PGraphicsOpenGL, src : PShape) : PShapeOpenGL;

    public static copyGroup(pg : PGraphicsOpenGL, src : PShape, dest : PShape);

    getVertexMin(min : PVector);

    getVertexMax(max : PVector);

    getVertexSum(sum : PVector, count : number) : number;

    setTextureModeImpl(mode : number);

    setTextureImpl(tex : PImage);

    scaleTextureUV(uFactor : number, vFactor : number);

    addTexture(tex : PImage);

    removeTexture(tex : PImage, caller : PShapeOpenGL);

    hasTexture() : boolean;

    hasTexture(tex : PImage) : boolean;

    hasStrokedTexture() : boolean;

    vertexImpl(x : number, y : number, z : number, u : number, v : number);

    vertexBreak() : boolean;

    attribImpl(name : string, kind : number, type : number, size : number) : PGraphicsOpenGL.VertexAttribute;

    pushTransform();

    popTransform() : PMatrix;

    applyMatrixImpl(matrix : PMatrix);

    bezierVertexImpl(x2 : number, y2 : number, z2 : number, x3 : number, y3 : number, z3 : number, x4 : number, y4 : number, z4 : number);

    quadraticVertexImpl(cx : number, cy : number, cz : number, x3 : number, y3 : number, z3 : number);

    curveVertexImpl(x : number, y : number, z : number);

    setFillImpl(fill : number);

    setTintImpl(tint : number);

    setStrokeImpl(stroke : boolean);

    setStrokeImpl(stroke : number);

    setStrokeWeightImpl(weight : number);

    setAmbientImpl(ambient : number);

    setSpecularImpl(specular : number);

    setEmissiveImpl(emissive : number);

    setShininessImpl(shininess : number);

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

    /*private*/ inGeoToVertices();

    fragmentedGroup(g : PGraphicsOpenGL) : boolean;
}


