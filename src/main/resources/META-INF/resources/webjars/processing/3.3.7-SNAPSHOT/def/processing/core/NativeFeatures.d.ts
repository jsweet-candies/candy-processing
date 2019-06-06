/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * This interface provides access to browser's native features. It aims to
 * guarantee that webworker world can communicate with main world seamlessly
 * @class
 */
interface NativeFeatures {
    invoke(featureCreatePImageFromCanvasContext : "createPImageFromCanvasContext", width : number, height : number, canvasContext : CanvasRenderingContext2D) : PImage;

    invoke(featureCreateDomElement : "createDomElement", tagName : "video") : HTMLVideoElement;

    invoke(featureCreateDomElement : "createDomElement", tagName : "canvas") : HTMLCanvasElement;

    invoke(featureCreateDomElement : "createDomElement", tagName : string) : HTMLElement;

    invoke(featureGetDomElementById : "getDomElementById", id : string) : HTMLElement;

    invoke(featureQueryDomElementBySelector : "queryDomElementBySelector", cssSelector : string) : HTMLElement;

    invoke(featureGetUserMedia : "getUserMedia", options : any) : Promise<any>;

    resolve<TElement>(element : TElement) : Promise<TElement>;
}

declare namespace NativeFeatures {

    export interface createDomElement {    }

    export interface getDomElementById {    }

    export interface queryDomElementBySelector {    }

    export interface getUserMedia {    }

    export interface createPImageFromCanvasContext {    }
}



