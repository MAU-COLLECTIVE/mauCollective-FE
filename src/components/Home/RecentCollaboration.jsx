import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TweenMax } from 'gsap/all'

const data = [
  {
    id: 1,
    title: 'AVRIL OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Avril Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/avril.jpg'
  },
  {
    id: 2,
    title: 'OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/collab.png'
  }
]

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const RecentCollaboration = ({ id }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevCurrentIndex = usePrevious(currentIndex);
  const imgRef = useRef([]);

  useEffect(() => {
    TweenMax.to(imgRef.current[prevCurrentIndex], 0.5, {css:{autoAlpha:0}}) 
    TweenMax.to(imgRef.current[currentIndex], 0.5, {css:{autoAlpha:1}})
  }, [currentIndex])

  return (
    <div id={id} className="min-h-screen relative px-2 lg:px-6 py-28 flex flex-col justify-between text-gray-200">
      {data.map((dt, index) => (
        <img
          key={dt.id}
          className="absolute w-full h-full object-cover -mx-2 lg:-mx-6 -my-28 z-0 transition-all invisible"
          style={{ filter: 'brightness(75%)' }}
          src={dt?.img}
          ref={elm => imgRef.current[index] = elm} />
      ))}
      <div className="text-right px-2 lg:px-6 mb-4 z-10">
        <a href="#view-all-news" className="font-light text-sm md:text-base uppercase">View all <br/>collaborations</a>
      </div>
      <div className="flex flex-col lg:flex-row px-2 lg:px-6 z-10">
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-8 xl:mb-28 uppercase">{data?.[currentIndex]?.title}</h1>
          <p className="font-mono sm:text-lg xl:text-xl mb-8">{data?.[currentIndex]?.desc}</p>
          <a href="#continue-read" className="font-light text-sm md:text-base uppercase border-b-2 border-white border-solid whitespace-nowrap">Watch video</a>
        </div>
        <ul className="flex flex-row mt-28 lg:mt-0 lg:flex-col lg:flex-1 lg:items-end justify-center space-x-4 lg:space-x-0 lg:space-y-4 text-sm md:text-base">
          <li onClick={() => setCurrentIndex(0)} className={`cursor-pointer transition-all ${currentIndex == 0 && 'border-b-2 border-white'}`}>01</li>
          <li onClick={() => setCurrentIndex(1)} className={`cursor-pointer transition-all ${currentIndex == 1 && 'border-b-2 border-white'}`}>02</li>
        </ul>
      </div>
    </div>
  )
}

RecentCollaboration.propTypes = {
  id: PropTypes.string
}

export default RecentCollaboration