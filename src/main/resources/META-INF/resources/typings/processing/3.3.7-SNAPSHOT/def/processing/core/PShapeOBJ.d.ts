/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * This class is not part of the Processing API and should not be used
 * directly. Instead, use loadShape() and methods like it, which will make
 * use of this class. Using this class directly will cause your code to break
 * when combined with future versions of Processing.
 * <p>
 * OBJ loading implemented using code from Saito's OBJLoader library:
 * http://code.google.com/p/saitoobjloader/
 * and OBJReader from Ahmet Kizilay
 * http://www.openprocessing.org/visuals/?visualID=191
 * @param {PApplet} parent
 * @param {{ str: string, cursor: number }} reader
 * @param {string} basePath
 * @class
 * @extends PShape
 */
declare class PShapeOBJ extends PShape {
    public constructor(parent : PApplet, filename : string);

    public constructor(parent : PApplet, reader : { str: string, cursor: number });

    public constructor(parent : PApplet, reader : { str: string, cursor: number }, basePath : string);

    constructor(face : PShapeOBJ.OBJFace, mtl : PShapeOBJ.OBJMaterial, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    addChildren(faces : Array<PShapeOBJ.OBJFace>, materials : Array<PShapeOBJ.OBJMaterial>, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    static parseOBJ(parent : PApplet, path : string, reader : { str: string, cursor: number }, faces : Array<PShapeOBJ.OBJFace>, materials : Array<PShapeOBJ.OBJMaterial>, coords : Array<PVector>, normals : Array<PVector>, texcoords : Array<PVector>);

    static parseMTL(parent : PApplet, mtlfn : string, path : string, reader : { str: string, cursor: number }, materials : Array<PShapeOBJ.OBJMaterial>, materialsHash : any);

    static addMaterial(mtlname : string, materials : Array<PShapeOBJ.OBJMaterial>, materialsHash : any) : PShapeOBJ.OBJMaterial;

    static rgbaValue(color : PVector) : number;

    static rgbaValue(color : PVector, alpha : number) : number;

    static getBasePath(parent : PApplet, filename : string) : string;
}

declare namespace PShapeOBJ {

    export class OBJFace {
        vertIdx : Array<number>;

        texIdx : Array<number>;

        normIdx : Array<number>;

        matIdx : number;

        name : string;

        constructor();
    }

    export class OBJMaterial {
        name : string;

        ka : PVector;

        kd : PVector;

        ks : PVector;

        d : number;

        ns : number;

        kdMap : PImage;

        constructor();

        constructor(name : string);
    }
}



