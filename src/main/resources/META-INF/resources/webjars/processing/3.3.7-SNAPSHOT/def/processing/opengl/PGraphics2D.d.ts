/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare class PGraphics2D extends PGraphicsOpenGL {
    public constructor();

    /**
     * 
     * @return {boolean}
     */
    public is2D() : boolean;

    /**
     * 
     * @return {boolean}
     */
    public is3D() : boolean;

    /**
     * 
     * @param {number} which
     */
    public hint(which : number);

    /**
     * 
     */
    public ortho();

    /**
     * 
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     */
    public ortho(left : number, right : number, bottom : number, top : number);

    /**
     * 
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} near
     * @param {number} far
     */
    public ortho(left : number, right : number, bottom : number, top : number, near : number, far : number);

    /**
     * 
     */
    public perspective();

    /**
     * 
     * @param {number} fov
     * @param {number} aspect
     * @param {number} zNear
     * @param {number} zFar
     */
    public perspective(fov : number, aspect : number, zNear : number, zFar : number);

    /**
     * 
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} znear
     * @param {number} zfar
     */
    public frustum(left : number, right : number, bottom : number, top : number, znear : number, zfar : number);

    /**
     * 
     */
    defaultPerspective();

    /**
     * 
     */
    public beginCamera();

    /**
     * 
     */
    public endCamera();

    /**
     * 
     */
    defaultCamera();

    /**
     * 
     */
    begin2D();

    /**
     * 
     */
    end2D();

    static isSupportedExtension(extension : string) : boolean;

    static loadShapeImpl(pg : PGraphics, filename : string, extension : string) : PShape;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelX(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelY(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public modelZ(x : number, y : number, z : number) : number;

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

    /**
     * 
     * @param {number} x2
     * @param {number} y2
     * @param {number} z2
     * @param {number} x4
     * @param {number} y4
     * @param {number} z4
     */
    public quadraticVertex(x2 : number, y2 : number, z2 : number, x4 : number, y4 : number, z4 : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public curveVertex(x : number, y : number, z : number);

    /**
     * 
     * @param {number} w
     * @param {number} h
     * @param {number} d
     */
    public box(w : number, h : number, d : number);

    /**
     * 
     * @param {number} r
     */
    public sphere(r : number);

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
     * @param {number} vx
     * @param {number} vy
     * @param {number} vz
     */
    public rotate(angle : number, vx : number, vy : number, vz : number);

    /**
     * 
     * @param {PMatrix3D} source
     */
    public applyMatrix(source : PMatrix3D);

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
     * @param {number} sx
     * @param {number} sy
     * @param {number} sz
     */
    public scale(sx : number, sy : number, sz : number);

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public screenX(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public screenY(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {number}
     */
    public screenZ(x : number, y : number, z : number) : number;

    /**
     * 
     * @param {PMatrix3D} target
     * @return {PMatrix3D}
     */
    public getMatrix(target : PMatrix3D) : PMatrix3D;

    /**
     * 
     * @param {PMatrix3D} source
     */
    public setMatrix(source : PMatrix3D);

    /**
     * 
     */
    public noLights();

    /**
     * 
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     */
    public ambientLight(red : number, green : number, blue : number);

    /**
     * 
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public ambientLight(red : number, green : number, blue : number, x : number, y : number, z : number);

    /**
     * 
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     */
    public directionalLight(red : number, green : number, blue : number, nx : number, ny : number, nz : number);

    /**
     * 
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public pointLight(red : number, green : number, blue : number, x : number, y : number, z : number);

    /**
     * 
     * @param {number} red
     * @param {number} green
     * @param {number} blue
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     * @param {number} angle
     * @param {number} concentration
     */
    public spotLight(red : number, green : number, blue : number, x : number, y : number, z : number, nx : number, ny : number, nz : number, angle : number, concentration : number);

    /**
     * 
     * @param {number} constant
     * @param {number} linear
     * @param {number} quadratic
     */
    public lightFalloff(constant : number, linear : number, quadratic : number);
}


