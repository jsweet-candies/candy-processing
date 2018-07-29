/* -*- mode: java; c-basic-offset: 2; indent-tabs-mode: nil -*- */

/*
  Part of the Processing project - http://processing.org

  Copyright (c) 2015 The Processing Foundation

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation, version 2.1.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General
  Public License along with this library; if not, write to the
  Free Software Foundation, Inc., 59 Temple Place, Suite 330,
  Boston, MA  02111-1307  USA
*/

package def.processing.core;


/**
 * Surface that's not really visible. Used for PDF and friends, or as a base
 * class for other drawing surfaces. It includes the standard rendering loop.
 */
public class PSurfaceNone implements PSurface {
  protected PApplet sketch;
  protected PGraphics graphics;

  protected Thread thread;
  protected boolean paused;
  protected Object pauseObject = new Object();

  protected float frameRateTarget = 60;
  protected long frameRatePeriod = 1000000000L / 60L;


  public PSurfaceNone(PGraphics graphics) {
    this.graphics = graphics;
  }


  @Override
  public void initOffscreen(PApplet sketch) {
    this.sketch = sketch;

    setSize(sketch.sketchWidth(), sketch.sketchHeight());
  }


//  public Component initComponent(PApplet sketch) {
//    return null;
//  }


  @Override
  public void initFrame(PApplet sketch) {/*, int backgroundColor,
                        int deviceIndex, boolean fullScreen,
                        boolean spanDisplays) {*/
    //this.sketch = sketch;
    throw new IllegalStateException("initFrame() not available with " +
                                    getClass().getSimpleName());
  }


  public Object getNative() {
    return null;
  }


  /** Set the window (and dock, or whatever necessary) title. */
  @Override
  public void setTitle(String title) {
    // You're in a utopian PSurface implementation where titles don't exist.
  }


  @Override
  public void setIcon(PImage image) {
    // I ain't visible, man.
  }


  /** Show or hide the window. */
  @Override
  public void setVisible(boolean visible) {
    // I'm always invisible. You can't catch me.
  }


  /** Set true if we want to resize things (default is not resizable) */
  @Override
  public void setResizable(boolean resizable) {
    // I don't need size to know my worth.
  }


  @Override
  public void placeWindow(int[] location, int[] editorLocation) { }


  @Override
  public void placePresent(int stopColor) { }


  @Override
  public void setupExternalMessages() { }


  @Override
  public void setAlwaysOnTop(boolean always) { }


  //


  @Override
  public void setLocation(int x, int y) {
    // I'm everywhere, because I'm nowhere.
  }


  @Override
  public void setSize(int wide, int high) {
    if (PApplet.DEBUG) {
      //System.out.format("frame visible %b, setSize(%d, %d) %n", frame.isVisible(), wide, high);
      new Exception(String.format("setSize(%d, %d)", wide, high)).printStackTrace(System.out);
    }

    //if (wide == sketchWidth && high == sketchHeight) {  // doesn't work on launch
    if (wide == sketch.width && high == sketch.height) {
      if (PApplet.DEBUG) {
        new Exception("w/h unchanged " + wide + " " + high).printStackTrace(System.out);
      }
      return;  // unchanged, don't rebuild everything
    }

    //throw new RuntimeException("implement me, see readme.md");
    sketch.width = wide;
    sketch.height = high;

    // set PGraphics variables for width/height/pixelWidth/pixelHeight
    graphics.setSize(wide, high);
  }


//  public void initImage(PGraphics graphics) {
//    // TODO Auto-generated method stub
//
//  }

//  public Component getComponent() {
//    return null;
//  }


//  public void setSmooth(int level) {
//    // TODO Auto-generated method stub
//  }

//  void requestFocus() {
//  }

//  public void blit() {
//    // TODO Auto-generated method stub
//  }

  public void setCursor(int kind) { }

  public void setCursor(PImage image, int hotspotX, int hotspotY) { }

  public void showCursor() { }

  public void hideCursor() { }


  //


  public Thread createThread() {
    return new AnimationThread();
  }


  public void startThread() {
    if (thread == null) {
      thread = createThread();
      thread.start();
    } else {
      throw new IllegalStateException("Thread already started in " +
                                      getClass().getSimpleName());
    }
  }


  public boolean stopThread() {
    if (thread == null) {
      return false;
    }
    thread = null;
    return true;
  }


  public boolean isStopped() {
    return thread == null || !thread.isAlive();
  }


  // sets a flag to pause the thread when ready
  public void pauseThread() {
    PApplet.debug("PApplet.run() paused, calling object wait...");
    paused = true;
  }


  // halts the animation thread if the pause flag is set
  protected void checkPause() {
    if (paused) {
      synchronized (pauseObject) {
        try {
          pauseObject.wait();
//          PApplet.debug("out of wait");
        } catch (InterruptedException e) {
          // waiting for this interrupt on a start() (resume) call
        }
      }
    }
//    PApplet.debug("done with pause");
  }


  public void resumeThread() {
    paused = false;
    synchronized (pauseObject) {
      pauseObject.notifyAll();  // wake up the animation thread
    }
  }


  public void setFrameRate(float fps) {
    frameRateTarget = fps;
    frameRatePeriod = (long) (1000000000.0 / frameRateTarget);
    //g.setFrameRate(fps);
  }


  public class AnimationThread extends Thread {

    public AnimationThread() {
      super("Animation Thread");
    }

    // broken out so it can be overridden by Danger et al
    public void callDraw() {
      sketch.handleDraw();
    }
  }
}
