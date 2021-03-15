import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'react-i18next'

const NavbarBlog = ({ title }) => {
  const { t } = useTranslation();

  return (
    <nav className="lg:h-screen p-4 lg:p-10 text-black flex flex-col items-start">
      <OverlayLink
        type="main"
        to="/"
        className="relative px-6 py-4 mb-4 lg:mb-16">
          <BadgeNumber number="01" />
          <span className="block font-medium uppercase text-xs">{t('shared.close')}</span>
      </OverlayLink>
      <div className="lg:px-6 block w-full">
        <h1 className="lg:hidden font-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-8 xl:mb-28 uppercase tracking-wide">{title}</h1>
        <div className="flex lg:flex-col space-x-6">
          <h2 className="uppercase w-1/2 lg:w-auto font-light mb-6 text-xs">{t('shared.categories')}</h2>
          <ul className="lg:ml-5 w-1/2 lg:w-auto lg:space-y-1 flex flex-wrap lg:flex-col text-xs">
            <li className="uppercase font-light">{t('navbar.news')}</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">{t('navbar.about')}</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">{t('navbar.artists')}</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">{t('navbar.collaborations')}</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">{t('navbar.events')}</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavbarBlog.propTypes = {
  title: PropTypes.string
}

export default NavbarBlog