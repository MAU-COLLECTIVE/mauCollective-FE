import './src/css/main.css'
import './src/css/fonts.css'

import React from 'react';
import { HomeProvider } from './src/contexts/HomeContext';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const wrapRootElement = ({ element }) => (
  <HomeProvider>
    {element}
  </HomeProvider>
)

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    location.state.referrer = prevLocation ? prevLocation.pathname : null
}