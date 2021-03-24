import React from 'react'
import OverlayLink from 'components/shared/OverlayLink'

const Artists = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 lg:px-14 py-28 flex flex-col justify-center space-y-20">
      <div className="grid gap-x-10 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
            </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          section="artists"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-xs tracking-widest uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
      </div>
    </div>
  )
}

export default Artists