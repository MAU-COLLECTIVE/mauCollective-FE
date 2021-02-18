import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'

const RecentCollaboration = () => {
  return (
    <div className="px-2 lg:px-6 py-28 flex flex-col bg-gray-300">
      <div className="text-right px-2 lg:px-6 mb-4">
        <a href="#view-all-news" className="font-light text-sm md:text-base uppercase">View all <br/>collaborations</a>
      </div>
      <div className="flex flex-col lg:flex-row px-2 lg:px-6">
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-8 xl:mb-28 uppercase">OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.</h1>
          <p className="font-mono sm:text-lg xl:text-xl text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p>
          <a href="#continue-read" className="font-light text-sm md:text-base uppercase border-b-2 border-black border-solid whitespace-nowrap">Watch video</a>
        </div>
        <ul className="flex flex-row mt-28 lg:mt-0 lg:flex-col lg:flex-1 lg:items-end justify-center space-x-4 lg:space-x-0 lg:space-y-4 text-sm md:text-base">
          <li className="border-b-2 border-black">01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
        </ul>
      </div>
    </div>
  )
}

export default RecentCollaboration