import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Artists = ({ id }) => {
  return (
    <div id={id} className="min-h-screen bg-black text-white px-4 lg:px-14 py-28 flex flex-col justify-center space-y-20">
      <h1 className="font-semibold text-3xl text-white uppercase">ARTISTS</h1>
      <div className="grid gap-x-10 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        <AniLink
          swipe direction="left"
          top="entry" to="/artist"
          className="w-full">
            <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
              <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
              <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
            </div>
        </AniLink>
        {/* <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div>
        <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
          <img src="/img/artist.png" alt="artist" className="w-full sm:w-32 sm:h-32 md:w-52 md:h-52" />
          <h2 className="font-semibold text-lg uppercase">DYCAL</h2>
        </div> */}
      </div>
    </div>
  )
}

Artists.propTypes = {
  id: PropTypes.string
}

export default Artists