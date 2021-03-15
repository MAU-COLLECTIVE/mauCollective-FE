import './src/css/main.css'
import './src/css/fonts.css'

import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { HomeProvider } from './src/contexts/HomeContext';
import i18next from 'configs/i18n';
import { I18nextProvider } from 'react-i18next';
smoothscroll.polyfill();

export const wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18next}>
    <HomeProvider>
      {element}
    </HomeProvider>
  </I18nextProvider>
)