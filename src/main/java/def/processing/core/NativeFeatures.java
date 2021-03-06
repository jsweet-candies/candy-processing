package def.processing.core;

import def.dom.CanvasRenderingContext2D;
import def.dom.MediaStream;
import def.dom.HTMLCanvasElement;
import def.dom.HTMLElement;
import def.dom.HTMLVideoElement;
import def.js.Promise;
import jsweet.lang.Interface;
import jsweet.lang.StringType;
import jsweet.util.StringTypes.canvas;
import jsweet.util.StringTypes.video;

/**
 * This interface provides access to browser's native features. It aims to
 * guarantee that webworker world can communicate with main world seamlessly
 */
@Interface
public abstract class NativeFeatures {

	public native PImage invoke(
			NativeFeatures.createPImageFromCanvasContext featureCreatePImageFromCanvasContext, int width, int height,
			CanvasRenderingContext2D canvasContext);

	public native void invoke(NativeFeatures.freeObjectMemory featureFreeObjectMemory, Object object);
	
	public native HTMLVideoElement invoke(NativeFeatures.createDomElement featureCreateDomElement, video tagName);

	public native HTMLCanvasElement invoke(NativeFeatures.createDomElement featureCreateDomElement, canvas tagName);

	public native HTMLElement invoke(NativeFeatures.createDomElement featureCreateDomElement, String tagName);

	public native HTMLElement invoke(NativeFeatures.getDomElementById featureGetDomElementById, String id);

	public native HTMLElement invoke(NativeFeatures.queryDomElementBySelector featureQueryDomElementBySelector,
			String cssSelector);

	public native Promise<MediaStream> invoke(NativeFeatures.getUserMedia featureGetUserMedia, Object options);

	public native <TElement> Promise<TElement> resolve(TElement element);

	@StringType
	public interface createDomElement {
	}

	@StringType
	public static NativeFeatures.createDomElement createDomElement = null;

	@StringType
	public interface getDomElementById {
	}

	@StringType
	public static NativeFeatures.getDomElementById getDomElementById = null;

	@StringType
	public interface queryDomElementBySelector {
	}

	@StringType
	public static NativeFeatures.queryDomElementBySelector queryDomElementBySelector = null;

	@StringType
	public interface getUserMedia {
	}

	@StringType
	public static NativeFeatures.getUserMedia getUserMedia = null;

	@StringType
	public interface createPImageFromCanvasContext {
	}

	@StringType
	public static NativeFeatures.createPImageFromCanvasContext createPImageFromCanvasContext = null;
	
	@StringType
	public interface freeObjectMemory {
	}

	@StringType
	public static NativeFeatures.freeObjectMemory freeObjectMemory = null;
}