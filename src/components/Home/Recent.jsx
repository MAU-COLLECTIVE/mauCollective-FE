import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'
import CardPost from 'components/shared/CardPost'

const RecentNews = () => {
  return (
    <div className="min-h-screen px-2 lg:px-6 py-28 flex flex-col justify-center">
      <div className="text-right px-2 lg:px-6 mb-4">
        <a href="#view-all-news" className="font-light text-sm md:text-base uppercase">View all news</a>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="relative px-2 lg:px-6 py-4 w-full xl:w-1/3">
          <BadgeNumber number="02" />
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-8 xl:mb-28 uppercase">MOST RECENT NEWS HEADLINE</h1>
          <div className="xl:hidden md:block w-full h-96 mb-8 xl:mb-0 bg-gray-300">Image</div>
          <div className="flex flex-col md:flex-row xl:flex-col md:space-x-8 items-start justify-start xl:space-x-0 space-y-8 md:space-y-0 xl:space-y-8">
            <p className="font-mono sm:text-lg xl:text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p>
            <a href="#continue-read" className="font-light text-sm md:text-base uppercase border-b-2 border-black border-solid whitespace-nowrap">Continue reading</a>
          </div>
        </div>
        <div className="px-2 lg:px-6 flex-1 space-y-6">
          <div className="hidden xl:block w-full h-96 bg-gray-300">Image</div>
          <div className="flex space-x-6">
            <div className="w-1/2 lg:w-1/3">
              <CardPost />
            </div>
            <div className="w-1/2 lg:w-1/3">
              <CardPost />
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <CardPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RecentNews