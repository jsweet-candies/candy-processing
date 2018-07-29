/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Creates a shader program using the specified vertex and fragment
 * shaders.
 * 
 * @param {*} parent the parent program
 * @param {string} vertFilename name of the vertex shader
 * @param {string} fragFilename name of the fragment shader
 * @class
 */
declare class PShader implements PConstants {
    static POINT : number;

    static LINE : number;

    static POLY : number;

    static COLOR : number;

    static LIGHT : number;

    static TEXTURE : number;

    static TEXLIGHT : number;

    static pointShaderAttrRegexp : string;

    static pointShaderInRegexp : string;

    static lineShaderAttrRegexp : string;

    static lineShaderInRegexp : string;

    static pointShaderDefRegexp : string;

    static lineShaderDefRegexp : string;

    static colorShaderDefRegexp : string;

    static lightShaderDefRegexp : string;

    static texShaderDefRegexp : string;

    static texlightShaderDefRegexp : string;

    static polyShaderDefRegexp : string;

    static triShaderAttrRegexp : string;

    static quadShaderAttrRegexp : string;

    parent : any;

    primaryPG : PGraphicsOpenGL;

    currentPG : PGraphicsOpenGL;

    pgl : PGL;

    context : number;

    type : number;

    public glProgram : number;

    public glVertex : number;

    public glFragment : number;

    /*private*/ glres : PGraphicsOpenGL.GLResourceShader;

    vertexURL : URL;

    fragmentURL : URL;

    vertexFilename : string;

    fragmentFilename : string;

    vertexShaderSource : string[];

    fragmentShaderSource : string[];

    bound : any;

    uniformValues : any;

    textures : any;

    texUnits : any;

    intBuffer : any;

    floatBuffer : any;

    loadedAttributes : boolean;

    loadedUniforms : boolean;

    transformMatLoc : number;

    modelviewMatLoc : number;

    projectionMatLoc : number;

    ppixelsLoc : number;

    ppixelsUnit : number;

    viewportLoc : number;

    resolutionLoc : number;

    perspectiveLoc : number;

    scaleLoc : number;

    lightCountLoc : number;

    lightPositionLoc : number;

    lightNormalLoc : number;

    lightAmbientLoc : number;

    lightDiffuseLoc : number;

    lightSpecularLoc : number;

    lightFalloffLoc : number;

    lightSpotLoc : number;

    texture : Texture;

    texUnit : number;

    textureLoc : number;

    texMatrixLoc : number;

    texOffsetLoc : number;

    tcmat : number[];

    vertexLoc : number;

    colorLoc : number;

    normalLoc : number;

    texCoordLoc : number;

    normalMatLoc : number;

    directionLoc : number;

    offsetLoc : number;

    ambientLoc : number;

    specularLoc : number;

    emissiveLoc : number;

    shininessLoc : number;

    public constructor();

    public constructor(parent : any);

    public constructor(parent : any, vertFilename : string, fragFilename : string);

    public constructor(parent : any, vertURL : URL, fragURL : URL);

    public constructor(parent : any, vertSource : string[], fragSource : string[]);

    public setVertexShader(vertFilename : string);

    public setVertexShader(vertURL : URL);

    public setVertexShader(vertSource : string[]);

    public setFragmentShader(fragFilename : string);

    public setFragmentShader(fragURL : URL);

    public setFragmentShader(fragSource : string[]);

    /**
     * Initializes (if needed) and binds the shader program.
     */
    public bind();

    /**
     * Unbinds the shader program.
     */
    public unbind();

    /**
     * @webref rendering:shaders
     * @brief Sets a variable within the shader
     * @param {string} name the name of the uniform variable to modify
     * @param {number} x first component of the variable to modify
     */
    public set(name : string, x : number);

    /**
     * @param {number} y second component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[2], vec2)
     * @param {string} name
     * @param {number} x
     */
    public set(name : string, x : number, y : number);

    /**
     * @param {number} z third component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[3], vec3)
     * @param {string} name
     * @param {number} x
     * @param {number} y
     */
    public set(name : string, x : number, y : number, z : number);

    /**
     * @param {number} w fourth component of the variable to modify. The variable has to be declared with an array/vector type in the shader (i.e.: int[4], vec4)
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    public set(name : string, x : number, y : number, z : number, w : number);

    public set(name : string, x : number);

    public set(name : string, x : number, y : number);

    public set(name : string, x : number, y : number, z : number);

    public set(name : string, x : number, y : number, z : number, w : number);

    /**
     * @param {PVector} vec modifies all the components of an array/vector uniform variable. PVector can only be used if the type of the variable is vec3.
     * @param {string} name
     */
    public set(name : string, vec : PVector);

    public set(name : string, x : boolean);

    public set(name : string, x : boolean, y : boolean);

    public set(name : string, x : boolean, y : boolean, z : boolean);

    public set(name : string, x : boolean, y : boolean, z : boolean, w : boolean);

    public set(name : string, vec : number[]);

    /**
     * @param {number} ncoords number of coordinates per element, max 4
     * @param {string} name
     * @param {Array} vec
     */
    public set(name : string, vec : number[], ncoords : number);

    public set(name : string, vec : number[]);

    public set(name : string, vec : number[], ncoords : number);

    public set(name : string, vec : boolean[]);

    public set(name : string, boolvec : boolean[], ncoords : number);

    /**
     * @param {PMatrix2D} mat matrix of values
     * @param {string} name
     */
    public set(name : string, mat : PMatrix2D);

    public set(name : string, mat : PMatrix3D);

    /**
     * @param {boolean} use3x3 enforces the matrix is 3 x 3
     * @param {string} name
     * @param {PMatrix3D} mat
     */
    public set(name : string, mat : PMatrix3D, use3x3 : boolean);

    /**
     * @param {PImage} tex sets the sampler uniform variable to read from this image texture
     * @param {string} name
     */
    public set(name : string, tex : PImage);

    /**
     * Extra initialization method that can be used by subclasses, called after
     * compiling and attaching the vertex and fragment shaders, and before
     * linking the shader program.
     */
    setup();

    draw(idxId : number, count : number, offset : number);

    /**
     * Returns the ID location of the attribute parameter given its name.
     * 
     * @param {string} name String
     * @return {number} int
     */
    getAttributeLoc(name : string) : number;

    /**
     * Returns the ID location of the uniform parameter given its name.
     * 
     * @param {string} name String
     * @return {number} int
     */
    getUniformLoc(name : string) : number;

    setAttributeVBO(loc : number, vboId : number, size : number, type : number, normalized : boolean, stride : number, offset : number);

    setUniformValue(loc : number, x : number);

    setUniformValue(loc : number, x : number, y : number);

    setUniformValue(loc : number, x : number, y : number, z : number);

    setUniformValue(loc : number, x : number, y : number, z : number, w : number);

    setUniformValue(loc : number, x : number);

    setUniformValue(loc : number, x : number, y : number);

    setUniformValue(loc : number, x : number, y : number, z : number);

    setUniformValue(loc : number, x : number, y : number, z : number, w : number);

    setUniformVector(loc : number, vec : number[], ncoords : number, length : number);

    setUniformVector(loc : number, vec : number[], ncoords : number, length : number);

    setUniformMatrix(loc : number, mat : number[]);

    setUniformTex(loc : number, tex : Texture);

    setUniformImpl(name : string, type : number, value : any);

    consumeUniforms();

    updateIntBuffer(vec : number[]);

    updateFloatBuffer(vec : number[]);

    bindTextures();

    unbindTextures();

    public init();

    create();

    compile() : boolean;

    validate();

    contextIsOutdated() : boolean;

    hasVertexShader() : boolean;

    hasFragmentShader() : boolean;

    /**
     * @param shaderSource a string containing the shader's code
     * @return {boolean}
     */
    compileVertexShader() : boolean;

    /**
     * @param shaderSource a string containing the shader's code
     * @return {boolean}
     */
    compileFragmentShader() : boolean;

    dispose();

    static getShaderType(source : string[], defaultType : number) : number;

    getType() : number;

    setType(type : number);

    hasType() : boolean;

    isPointShader() : boolean;

    isLineShader() : boolean;

    isPolyShader() : boolean;

    checkPolyType(type : number) : boolean;

    getLastTexUnit() : number;

    setRenderer(pg : PGraphicsOpenGL);

    loadAttributes();

    loadUniforms();

    setCommonUniforms();

    bindTyped();

    unbindTyped();

    setTexture(tex : Texture);

    supportsTexturing() : boolean;

    supportLighting() : boolean;

    accessTexCoords() : boolean;

    accessNormals() : boolean;

    accessLightAttribs() : boolean;

    setVertexAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setColorAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setNormalAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setTexcoordAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setAmbientAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setSpecularAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setEmissiveAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setShininessAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setLineAttribute(vboId : number, size : number, type : number, stride : number, offset : number);

    setPointAttribute(vboId : number, size : number, type : number, stride : number, offset : number);
}

declare namespace PShader {

    export class UniformValue {
        static INT1 : number;

        static INT2 : number;

        static INT3 : number;

        static INT4 : number;

        static FLOAT1 : number;

        static FLOAT2 : number;

        static FLOAT3 : number;

        static FLOAT4 : number;

        static INT1VEC : number;

        static INT2VEC : number;

        static INT3VEC : number;

        static INT4VEC : number;

        static FLOAT1VEC : number;

        static FLOAT2VEC : number;

        static FLOAT3VEC : number;

        static FLOAT4VEC : number;

        static MAT2 : number;

        static MAT3 : number;

        static MAT4 : number;

        static SAMPLER2D : number;

        type : number;

        value : any;

        constructor(type : number, value : any);
    }
}



