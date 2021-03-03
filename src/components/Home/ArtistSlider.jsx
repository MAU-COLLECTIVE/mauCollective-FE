import React, { useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

const ArtistSlider = () => {

  useEffect(() => {
    gsap.defaults({
      ease: "none"
    });
  
    gsap.registerPlugin(Draggable);

    var picker = document.querySelector(".picker");
    var cells = document.querySelectorAll(".cell");
    var proxy = document.createElement("div");

    var cellWidth = 600;
    if(window.innerWidth > 740) {
      cellWidth = 600;
    }
    else {
      cellWidth = 400;
    }
    var rotation = -90;

    var numCells = cells.length;
    var cellStep = 1 / numCells;
    var wrapWidth = cellWidth * numCells;

    var baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      perspective: 1100,
      width: wrapWidth - cellWidth
    });

    for (var i = 0; i < cells.length; i++) {
      initCell(cells[i], i);
    }

    var animation = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2))
      .progress(1);

    var draggable = new Draggable(proxy, {
      allowContextMenu: true,
      type: "x",
      trigger: picker,
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX
      }
    });

    function snapX(x) {
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      let newProg = this.x / wrapWidth;
      newProg = newProg - Math.floor(newProg);
      animation.progress(newProg);
    }

    function initCell(element, index) {
      gsap.set(element, {
        width: cellWidth,
        scale: 0.9,
        rotation: rotation,
        x: -cellWidth
      });

      var tl = gsap
        .timeline({ repeat: 1 })
        .to(element, 1, { x: "+=" + wrapWidth, rotation: -rotation }, 0)
        .to(element, cellStep, { scale: 1, repeat: 1, yoyo: true }, 0.5 - cellStep);

      baseTl.add(tl, i * -cellStep);
    }
  }, [])

  return (
    <div className="bg-black text-white h-screen relative flex flex-col w-full items-center justify-center overflow-hidden">
      <div id="picker" className="picker">
        <div className="cell">
          <AniLink
            swipe direction="left"
            top="entry" to="/artist"
            className="cell-content">
              <img src="/img/artist.png" className="rounded-full w-full h-full" />
              <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </AniLink>
        </div>     
        <div className="cell">
          <div className="cell-content">
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </div>
        </div>  
        <div className="cell">
          <div className="cell-content">
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </div>
        </div>  
        <div className="cell">
          <div className="cell-content">
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </div>
        </div>
        <div className="cell">
          <div className="cell-content">
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-lg uppercase mt-8">Dycal</h1>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default ArtistSlider