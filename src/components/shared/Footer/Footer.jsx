import React from 'react'

const Footer = () => (
  <footer className="px-2 lg:px-12 py-12 flex flex-col space-y-4 xl:space-y-0 xl:flex-row">
    <div className="xl:w-1/3 flex justify-between xl:justify-start">
      <h1 className="font-light text-sm">M.A.U Collective</h1>
      <div className="flex justify-end space-x-2 xl:hidden">
        <a href="#fb"><img src="/icons/fb-dark.svg"/></a>
        <a href="#fb"><img src="/icons/ig-dark.svg"/></a>
        <a href="#fb"><img src="/icons/youtube-dark.svg"/></a>
        <a href="#fb"><img src="/icons/spotify-dark.svg"/></a>
      </div>
    </div>
    <div className="relative flex-1 flex flex-wrap sm:space-x-8 2xl:space-x-16 space-y-4 sm:space-y-0 justify-between xl:justify-start">
      <div className="w-1/2 sm:w-auto">
        <p className="font-light text-sm">Ho Chi Minh City</p>
        <p className="font-light text-sm">Vietnam</p>
      </div>
      <div className="w-1/2 sm:w-auto">
        <p className="font-light text-sm">371/4 Hai Ba Trung</p>
        <p className="font-light text-sm">District 3</p>
      </div>
      <div className="w-full sm:w-auto flex sm:flex-col mt-6 sm:mt-0">
        <p className="font-light text-sm w-1/2 sm:w-auto">
          <span className="font-medium md:hidden mr-2 text-gray-400">T</span>
          +84 93 785 10 36
        </p>
        <p className="font-light text-sm md:hidden w-1/2 sm:w-auto">
          <span className="font-medium md:hidden mr-2 text-gray-400">E</span>
          info@mau.network
        </p>
      </div>
      <div className="hidden md:block">
        <p className="font-light text-sm">info@mau.network</p>
      </div>
      <div className="hidden xl:flex flex-1 justify-end space-x-2">
        <a href="#fb"><img src="/icons/fb-dark.svg"/></a>
        <a href="#fb"><img src="/icons/ig-dark.svg"/></a>
        <a href="#fb"><img src="/icons/youtube-dark.svg"/></a>
        <a href="#fb"><img src="/icons/spotify-dark.svg"/></a>
      </div>
    </div>
  </footer>
)

export default Footer