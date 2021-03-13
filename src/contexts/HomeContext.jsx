import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const initState = {
  artistType: 'slider',
  setArtistType: () => {}
}

const HomeContext = createContext(initState);

const HomeProvider = ({ children }) => {
  const [artistType, setArtistType] = useState('slider'); // slider or shuffle
  const changeArtistType = () => setArtistType(prev => prev === 'slider' ? 'shuffle' : 'slider');

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if(width < 1124) setArtistType('shuffle')
      else setArtistType('slider')
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [])

  return (
    <HomeContext.Provider value={{ artistType, changeArtistType }}>
      {children}
    </HomeContext.Provider>
  )
}

HomeProvider.propTypes = {
  children: PropTypes.node
}

export default HomeContext

export { HomeProvider }