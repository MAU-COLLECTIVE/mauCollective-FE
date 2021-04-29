import React, { useMemo, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'
import HomeContext from 'contexts/HomeContext'

const Home = ({ data }) => {
  const [isLandscape, setIsLandscape] = useState(true)
  const ctx = useContext(HomeContext)

  const backgroundImage = useMemo(() => {
    if(isLandscape) return getGatsbyImage(data?.homeBackgroundTab?.imgLandscape?.asset?.id, {maxWidth: 1920, layout: 'fullWidth'})
    else return getGatsbyImage(data?.homeBackgroundTab?.imgPotrait?.asset?.id, {maxWidth: 1000, layout: 'fullWidth'})
  }, [isLandscape]);

  const backgroundVideo = useMemo(() => {
    if(isLandscape) return data?.homeBackgroundTab?.videoLandscape?.asset?.url
    else return data?.homeBackgroundTab?.videoPotrait?.asset?.url
  }, [isLandscape])

  const logo = useMemo(() => getGatsbyImage(data?.logo?.asset?.id, {maxWidth: 900}), [data?.logo?.asset?.id]);
  
  // Re-orientation listener
  useEffect(() => {
    const reorentation = () => {
      const orientation = (window.screen.orientation || {}).type || window.screen.mozOrientation || window.screen.msOrientation;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if ((orientation === "landscape-primary" || orientation === "landscape-secondary") && isMobile) {
        setIsLandscape(true)
      }
      else setIsLandscape(false)
    }

    reorentation();
    window.addEventListener('orientationchange', reorentation);
    return () => window.removeEventListener('orientationchange', reorentation);
  }, [])

  return (
    <div id="home" className="min-h-screen max-w-screen relative flex justify-center items-center bg-white">
      <div className="absolute block w-full h-full top-0 left-0 z-0">
        {backgroundImage ? (
          <GatsbyImage
            className="w-full h-full object-cover"
            image={backgroundImage}  
            alt="Background Image"
          />
        ) : (
          <video className="w-full h-full object-cover" src={backgroundVideo} autoPlay loop playsInline muted></video>
        )}
      </div>
      <button className="w-full m-10 md:m-0 md:w-auto z-10 focus:outline-none" onClick={ctx.toggleIsInLanding}>
        <GatsbyImage
          className="object-cover"
          image={logo}
          alt="Foreground Image"
        />
      </button>
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home