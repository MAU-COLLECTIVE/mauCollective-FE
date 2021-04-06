import './src/css/main.css'
import './src/css/fonts.css'

import React from 'react';
import { HomeProvider } from './src/contexts/HomeContext';

export const wrapRootElement = ({ element }) => (
  <HomeProvider>
    {element}
  </HomeProvider>
)