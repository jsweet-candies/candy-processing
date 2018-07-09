/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare class VertexBuffer {
    static INIT_VERTEX_BUFFER_SIZE : number;

    static INIT_INDEX_BUFFER_SIZE : number;

    public glId : number;

    target : number;

    elementSize : number;

    ncoords : number;

    index : boolean;

    pgl : PGL;

    context : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceVertexBuffer;

    constructor(pg : PGraphicsOpenGL, target : number, ncoords : number, esize : number);

    constructor(pg : PGraphicsOpenGL, target : number, ncoords : number, esize : number, index : boolean);

    create();

    init();

    dispose();

    contextIsOutdated() : boolean;
}


