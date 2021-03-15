import React from 'react'
import PropTypes from 'prop-types'
import OverlayLink from 'components/shared/OverlayLink'

const Artists = ({ id }) => {
  return (
    <div id={id} className="min-h-screen bg-black text-white px-4 lg:px-14 py-28 flex flex-col justify-center space-y-20">
      <div className="grid gap-x-10 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
            </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
        <OverlayLink
          type="secondary"
          to="/artist"
          className="w-full">
          <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
            <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
            <h2 className="font-semibold text-sm tracking-wide uppercase text-center">DYCAL</h2>
          </div>
        </OverlayLink>
      </div>
    </div>
  )
}

Artists.propTypes = {
  id: PropTypes.string
}

export default Artists