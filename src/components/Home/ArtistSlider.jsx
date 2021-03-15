import React, { useEffect, useRef, useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

const isEven = (value) => (value%2 == 0);

const ArtistSlider = () => {

  const picker = useRef();
  const { current: cells } = useRef([]);
  const animation = useRef();
  const proxy = useRef();
  const [values, setValues] = useState();
  
  useEffect(() => {
    gsap.defaults({
      ease: "none"
    });

    gsap.registerPlugin(Draggable);

    let baseTl = gsap.timeline({ paused: true });

    const newValues = {
      cellWidth: window.innerWidth * 0.5,
      rotation: -90,
      numCells: cells.length,
      cellStep: 1 / cells.length,
      wrapWidth: (window.innerWidth * 0.5) * cells.length
    }

    setValues(newValues);

    gsap.set(picker.current, {
      perspective: 1100,
      width: newValues.wrapWidth - newValues.cellWidth
    });

    for (let i = 0; i < cells.length; i++) {
      initCell(cells[i], i);
    }

    let progress = newValues.cellStep;
    if(!isEven(newValues.numCells))
      progress = newValues.cellStep / 2;

    animation.current = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2))
      .progress(progress);

    new Draggable(proxy.current, {
      allowContextMenu: true,
      type: "x",
      trigger: picker.current,
      throwProps: true,
      onDrag: updateProgress,
      snap: {
        x: snapX
      }
    });

    function snapX(x) {
      return Math.round(x / newValues.cellWidth) * newValues.cellWidth;
    }

    function updateProgress() {
      let newProg = this.x / newValues.wrapWidth;
      newProg = newProg - Math.floor(newProg);
      // animation.current.pause();
      animation.current.progress(newProg);
      console.log(newProg)
    }

    function initCell(element, index) {
      gsap.set(element, {
        width: newValues.cellWidth,
        scale: 0.9,
        rotation: newValues.rotation,
        x: -newValues.cellWidth
      });

      let tl = gsap
        .timeline({ repeat: 1 })
        .to(element, 1, { x: "+=" + newValues.wrapWidth, rotation: -newValues.rotation }, 0)
        .to(element, newValues.cellStep, { scale: 1, repeat: 1, yoyo: true }, 0.5 - newValues.cellStep);

      baseTl.add(tl, index * -newValues.cellStep);
    }
  }, [picker, proxy])

  const scrollTo = (id) => {

    // console.log(values.cellStep)
    let newProgress;

    // step: 0.5
    // 1: 0
    // 2: 0.5

    // step: 0.333
    // 1: 0.166
    // 2: 0.833
    // 3: 0.500

    // step: 0.25
    // 1: 0.25
    // 2: 0
    // 3: 0.75
    // 4: 0.50

    // step: 0.20
    // 1: 0.30
    // 2: 0.10
    // 3: 0.90
    // 4: 0.70
    // 5: 0.50

    // step: 0.166
    // 1: 0.332
    // 2: 0.166
    // 3: 0
    // 4: 0.830
    // 5: 0.664
    // 6: 0.498

    // step: 0.142
    // 1: 0.354
    // 2: 0.212
    // 3: 0.070
    // 4: 0.926
    // 5: 0.784
    // 6: 0.642
    // 7: 0.500

    // step: 0.125
    // 1: 0.375
    // 2: 0.250
    // 3: 0.125
    // 4: 0
    // 5: 0.875
    // 6: 0.750
    // 7: 0.625
    // 8: 0.500

    const center = Math.floor(values.numCells / 2)
    if(id === center) {
      if(isEven(values.numCells))
        newProgress = 0;
      else
        newProgress = values.cellStep / 2;
    }
    else if(id < center)
      newProgress = 0.5 - (values.cellStep * (id));
    else {
      const count = id - center;
      if(!isEven(values.numCells))
        newProgress = 1 - (values.cellStep * count - (values.cellStep / 2));
      else
        newProgress = 1 - (values.cellStep * count);
    }

    gsap.timeline().to(animation.current, 0.5, { progress: newProgress });
  }

  return (
    <div className="bg-black text-white h-screen relative flex flex-col w-full items-center justify-center overflow-hidden">
      <div ref={proxy}></div>
      <div id="picker" className="picker" ref={picker}>
        <div className="cell" ref={elm => cells[0] = elm}>
          <div className="cell-content" onClick={() => scrollTo(1)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">1 Dycal 1</h1>
          </div>
        </div>     
        <div className="cell" ref={elm => cells[1] = elm}>
          <div className="cell-content" onClick={() => scrollTo(2)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">2 Dycal 2</h1>
          </div>
        </div>  
        <div className="cell" ref={elm => cells[2] = elm}>
          <div className="cell-content" onClick={() => scrollTo(3)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">3 Dycal 3</h1>
          </div>
        </div>  
        <div className="cell" ref={elm => cells[3] = elm}>
          <div className="cell-content" onClick={() => scrollTo(4)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">4 Dycal 4</h1>
          </div>
        </div>  
        <div className="cell" ref={elm => cells[4] = elm}>
          <div className="cell-content" onClick={() => scrollTo(5)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">5 Dycal 5</h1>
          </div>
        </div>
         <div className="cell" ref={elm => cells[5] = elm}>
          <div className="cell-content" onClick={() => scrollTo(6)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">6 Dycal 6</h1>
          </div>
        </div>
        {/*<div className="cell" ref={elm => cells[6] = elm}>
          <div className="cell-content" onClick={() => scrollTo(6)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">7 Dycal 7</h1>
          </div>
        </div> */}
        {/* <div className="cell" ref={elm => cells[7] = elm}>
          <div className="cell-content" onClick={() => scrollTo(7)}>
            <img src="/img/artist.png" className="rounded-full w-full h-full" />
            <h1 className="text-center font-medium text-xl tracking-wide uppercase mt-8">8 Dycal 8</h1>
          </div>
        </div> */}
      </div>  
    </div>
  )
}

export default ArtistSlider