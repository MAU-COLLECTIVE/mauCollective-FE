import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'
import OverlayLink from 'components/shared/OverlayLink'

const Artist = () => {
  return (
    <div className="min-h-screen max-w-screen py-6 2xl:py-10 flex flex-col items-start bg-black text-white">
      <OverlayLink
        type="main"
        to="/"
        className="relative mx-4 2xl:mx-10 px-6 py-4 mb-8">
          <BadgeNumber number="01" />
          <span className="block font-medium uppercase text-xs">Close</span>
      </OverlayLink>
      <div className="flex mx-4 2xl:mx-10">
        <div className="lg:w-2/3">
          <div className="relative px-6 py-4 mb-6">
            <BadgeNumber number="02" />
            <h1 className="block font-semibold text-3xl uppercase">Joe Karnavian</h1>
          </div>
          <p className="px-6 font-mono xl:text-lg text-gray-300 mb-32">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi, assumenda nisi, quisquam molestias iste quod ratione officia aut dignissimos, adipisci hic. Ratione, distinctio? Magni optio exercitationem vel molestias suscipit.</p>
          <div className="lg:hidden flex flex-1 flex-col items-center space-y-8 mb-32">
            <img src="/img/artist.png" alt="artist" className="w-full" style={{  maxWidth: '600px' }} />
            <div className="flex space-x-2">
              <a href="#fb"><img src="/icons/fb.svg"/></a>
              <a href="#fb"><img src="/icons/ig.svg"/></a>
              <a href="#fb"><img src="/icons/youtube.svg"/></a>
              <a href="#fb"><img src="/icons/spotify.svg"/></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0 justify-between lg:justify-start">
            <div className="flex flex-col">
              <div className="relative px-6 py-4 mb-6">
                <BadgeNumber number="03" />
                <a href="#" className="block font-semibold text-3xl uppercase">Music</a>
              </div>
              <ul className="px-6">
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex justify-end space-x-8 font-light text-sm text-gray-200 py-6 first:pt-0">
                  1/2
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="relative px-6 py-4 mb-6">
                <BadgeNumber number="04" />
                <a href="#" className="block font-semibold text-3xl uppercase">Video</a>
              </div>
              <ul className="px-6">
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-sm">Live Performance</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">Stream on:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex justify-end space-x-8 font-light text-sm text-gray-200 py-6 first:pt-0">
                  1/2
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 flex-col items-center space-y-8">
          <img src="/img/artist.png" alt="artist" className="w-full" style={{  maxWidth: '600px' }} />
          <div className="flex space-x-2">
            <a href="#fb"><img src="/icons/fb.svg"/></a>
            <a href="#fb"><img src="/icons/ig.svg"/></a>
            <a href="#fb"><img src="/icons/youtube.svg"/></a>
            <a href="#fb"><img src="/icons/spotify.svg"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist