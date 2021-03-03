import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types';

const initState = {
  artistType: 'slider',
  setArtistType: () => {}
}

const HomeContext = createContext(initState);

const HomeProvider = ({ children }) => {
  const [artistType, setArtistType] = useState('slider');
  const changeArtistType = () => setArtistType(prev => prev === 'slider' ? 'shuffle' : 'slider');

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