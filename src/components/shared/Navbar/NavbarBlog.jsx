import React from 'react'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { navigate } from 'gatsby'

const NavbarBlog = () => {
  const { t } = useTranslation();

  return (
    <nav className="lg:h-screen p-2 lg:p-10 text-black flex flex-col items-start">
      <button
        className="relative p-4 mb-8 lg:mb-16 focus:outline-none"
        onClick={() => navigate('/')}>
          <span className="block font-medium uppercase text-xs">{t('shared.close')}</span>
      </button>
      <div className="px-4 block w-full">
        <ul className="w-auto flex flex-wrap flex-col text-xs space-y-4">
          <li className="uppercase font-light">
            <OverlayLink type="secondary" to='/news'>{t('newsSection.newsCategory')}</OverlayLink>
          </li>
          <li className="uppercase font-light">
            <OverlayLink type="secondary" to='/collaborations'>{t('collaborationSection.collaborationCategory')}</OverlayLink>
          </li>
          <li className="uppercase font-light">
            <OverlayLink type="secondary" to='/events'>{t('eventSection.eventCategory')}</OverlayLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarBlog