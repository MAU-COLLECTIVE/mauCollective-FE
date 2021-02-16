import React from 'react'
import BadgeNumber from 'components/BadgeNumber'

const Section2 = () => {
  return (
    <div className="px-6 py-8 flex flex-col">
      <a href="#view-all-news" className="font-light uppercase w-full text-right px-6 mb-4">View all news</a>
      <div className="flex">
        <div className="relative px-6 py-4 w-1/3">
          <BadgeNumber number="02" />
          <h1 className="font-black text-6xl mb-52">MOST RECENT NEWS HEADLINE</h1>
          <p className="font-mono text-xl text-gray-600 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p>
          <a href="#continue-read" className="font-light uppercase border-b-2 border-black border-solid">Continue reading</a>
        </div>
        <div className="px-6 flex-1 space-y-6">
          <div className="block w-full h-96 bg-gray-300">Image</div>
          <div className="flex space-x-6">
            <div className="w-1/3 flex flex-col space-y-4">
              <div className="w-full h-40 bg-gray-300">Image</div>
              <h2 className="font-mono font-semibold text-xl">Card Title</h2>
              <p className="font-light">18.01.2021</p>
            </div>
            <div className="w-1/3 flex flex-col space-y-4">
              <div className="w-full h-40 bg-gray-300">Image</div>
              <h2 className="font-mono font-semibold text-xl">Card Title</h2>
              <p className="font-light">18.01.2021</p>
            </div>
            <div className="w-1/3 flex flex-col space-y-4">
              <div className="w-full h-40 bg-gray-300">Image</div>
              <h2 className="font-mono font-semibold text-xl">Card Title</h2>
              <p className="font-light">18.01.2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Section2