import React from 'react'
import PropTypes from 'prop-types'
import OverlayLink from 'components/shared/OverlayLink'

const Artists = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white px-4 lg:px-14 py-28 flex flex-col justify-center space-y-20">
      <div className="grid gap-x-10 gap-y-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data.map(dt => (
          <OverlayLink
            key={dt._id}
            type="secondary"
            to={`/artist/${dt?.slug?.current}`}
            section="artists"
            className="w-full">
              <div className="max-w-max flex flex-col justify-center items-center 2xl:flex-row 2xl:space-x-6 space-y-6 2xl:space-y-0">
                <img src="/img/artist.png" alt="artist" className="w-full md:w-52 md:h-52" />
                <h2 className="font-semibold text-xs tracking-widest uppercase text-center">{dt?.artistName}</h2>
              </div>
          </OverlayLink>
        ))}
      </div>
    </div>
  )
}

Artists.propTypes = {
  data: PropTypes.array.isRequired,
}


export default React.memo(Artists)