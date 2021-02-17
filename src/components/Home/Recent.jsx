import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'
import CardPost from 'components/shared/CardPost'

const RecentNews = () => {
  return (
    <div className="px-6 py-28 flex flex-col">
      <a href="#view-all-news" className="font-light uppercase w-full text-right px-6 mb-4">View all news</a>
      <div className="flex">
        <div className="relative px-6 py-4 w-1/3">
          <BadgeNumber number="02" />
          <h1 className="font-black text-6xl mb-52 uppercase">MOST RECENT NEWS HEADLINE</h1>
          <p className="font-mono text-xl text-gray-600 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p>
          <a href="#continue-read" className="font-light uppercase border-b-2 border-black border-solid">Continue reading</a>
        </div>
        <div className="px-6 flex-1 space-y-6">
          <div className="block w-full h-96 bg-gray-300">Image</div>
          <div className="flex space-x-6">
            <div className="w-1/3">
              <CardPost />
            </div>
            <div className="w-1/3">
              <CardPost />
            </div>
            <div className="w-1/3">
              <CardPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RecentNews