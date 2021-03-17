import './src/css/main.css'
import './src/css/fonts.css'

import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { HomeProvider } from './src/contexts/HomeContext';
smoothscroll.polyfill();

export const wrapRootElement = ({ element }) => (
  <HomeProvider>
    {element}
  </HomeProvider>
)