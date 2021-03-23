import React from 'react'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useLocation } from '@reach/router'
import queryString from 'query-string'

const NavbarBlog = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { back } = queryString.parse(location.search);

  return (
    <nav className="lg:h-screen p-2 lg:p-10 text-black flex flex-col items-start">
      <OverlayLink
        type="main"
        to={back ? `/#${back}` : `/`}
        className="relative p-4 mb-8 lg:mb-16">
          <span className="block font-medium uppercase text-xs">{t('shared.close')}</span>
      </OverlayLink>
      <div className="px-4 block w-full">
        <ul className="w-auto flex flex-wrap flex-col text-xs space-y-4">
          <li className="uppercase font-light">{t('newsSection.newsCategory')}</li>
          <li className="uppercase font-light">{t('aboutSection.aboutCategory')}</li>
          <li className="uppercase font-light">{t('artistSection.artistCategory')}</li>
          <li className="uppercase font-light">{t('collaborationSection.collaborationCategory')}</li>
          <li className="uppercase font-light">{t('eventSection.eventCategory')}</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarBlog