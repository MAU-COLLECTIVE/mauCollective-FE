import React, { useState } from 'react'
import PropTypes from 'prop-types'

const data = [
  {
    title: 'AVRIL OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Avril Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/avril.jpg'
  },
  {
    title: 'OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/collab.png'
  }
]

const RecentCollaboration = ({ id }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id={id} className="min-h-screen relative px-2 lg:px-6 py-28 flex flex-col justify-center text-gray-200">
      <img className="absolute w-full h-full object-cover -mx-2 lg:-mx-6 -my-28 z-0 transition-all" style={{ filter: 'brightness(75%)' }} src={data?.[currentIndex]?.img} />
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