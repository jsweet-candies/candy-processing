/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * All the infrastructure needed for optimized font rendering
 * in OpenGL. Basically, this special class is needed because
 * fonts in Processing are handled by a separate PImage for each
 * glyph. For performance reasons, all these glyphs should be
 * stored in a single OpenGL texture (otherwise, rendering a
 * string of text would involve binding and un-binding several
 * textures.
 * PFontTexture manages the correspondence between individual
 * glyphs and the large OpenGL texture containing them. Also,
 * in the case that the font size is very large, one single
 * OpenGL texture might not be enough to store all the glyphs,
 * so PFontTexture also takes care of spreading a single font
 * over several textures.
 * @author Andres Colubri
 * @param {PGraphicsOpenGL} pg
 * @param {PFont} font
 * @param {boolean} is3D
 * @class
 */
declare class FontTexture implements PConstants {
    pgl : PGL;

    is3D : boolean;

    minSize : number;

    maxSize : number;

    offsetX : number;

    offsetY : number;

    lineHeight : number;

    textures : Texture[];

    images : PImage[];

    lastTex : number;

    glyphTexinfos : FontTexture.TextureInfo[];

    texinfoMap : any;

    public constructor(pg : PGraphicsOpenGL, font : PFont, is3D : boolean);

    allocate();

    dispose();

    initTexture(pg : PGraphicsOpenGL, font : PFont);

    public addTexture(pg : PGraphicsOpenGL) : boolean;

    public begin();

    public end();

    public getTexture(info : FontTexture.TextureInfo) : PImage;

    public addAllGlyphsToTexture(pg : PGraphicsOpenGL, font : PFont);

    public updateGlyphsTexCoords();

    public getTexInfo(glyph : PFont.Glyph) : FontTexture.TextureInfo;

    public addToTexture(pg : PGraphicsOpenGL, glyph : PFont.Glyph) : FontTexture.TextureInfo;

    public contextIsOutdated() : boolean;

    addToTexture(pg : PGraphicsOpenGL, idx : number, glyph : PFont.Glyph);
}

declare namespace FontTexture {

    export class TextureInfo {
        public __parent: any;
        texIndex : number;

        width : number;

        height : number;

        crop : number[];

        u0 : number;

        u1 : number;

        v0 : number;

        v1 : number;

        pixels : number[];

        constructor(__parent: any, tidx : number, cropX : number, cropY : number, cropW : number, cropH : number, pix : number[]);

        updateUV();

        updateTex();
    }
}



