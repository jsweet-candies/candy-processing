/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
declare namespace event {
    export class KeyEvent extends def.processing.event.ProcessingEvent {
        public static PRESS : number;

        public static RELEASE : number;

        public static TYPE : number;

        key : string;

        keyCode : number;

        isAutoRepeat : any;

        public constructor(nativeObject : any, millis : number, action : number, modifiers : number, key : string, keyCode : number);

        public constructor(nativeObject : any, millis : number, action : number, modifiers : number, key : string, keyCode : number, isAutoRepeat : boolean);

        public getKey() : string;

        public getKeyCode() : number;
    }
}

