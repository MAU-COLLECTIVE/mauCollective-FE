import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export const query = graphql`
  query ArtistPage($language: String!, $slug: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    sanityArtist(slug: {current: {eq: $slug}}) {
      artistName
      description {
        lang {
          en
            vn
            jp
        }
      }
    }
  }
`;

const ArtistPage = ({ pageContext, location, data }) => {
  const { t } = useTranslation();
  const { language } = pageContext;
  const section = location?.state?.section;
  const { sanityArtist: artist } = data;

  return (
    <div className="min-h-screen max-w-screen py-6 2xl:py-10 flex flex-col items-start bg-black text-white">
      <OverlayLink
        type="main"
        to="/"
        section={section}
        className="relative mx-4 2xl:mx-10 px-6 py-4 mb-8">
          <BadgeNumber number="01" />
          <span className="block font-medium uppercase text-xs">{t('shared.close')}</span>
      </OverlayLink>
      <div className="w-full flex px-4 2xl:px-10">
        <div className="lg:w-2/3">
          <div className="relative px-6 py-4 mb-6">
            <BadgeNumber number="02" />
            <h1 className="block font-semibold text-3xl uppercase">
              {artist?.artistName}
            </h1>
          </div>
          <p className="px-6 font-mono xl:text-lg text-gray-300 mb-32">
            {artist?.description?.lang?.[language]}
          </p>
          <div className="lg:hidden flex flex-1 flex-col items-center space-y-8 mb-32">
            <img src="/img/artist.png" alt="artist" className="w-full" style={{ maxWidth: '600px' }} />
            <div className="flex space-x-2">
              <a href="#fb"><img src="/icons/fb.svg"/></a>
              <a href="#fb"><img src="/icons/ig.svg"/></a>
              <a href="#fb"><img src="/icons/youtube.svg"/></a>
              <a href="#fb"><img src="/icons/spotify.svg"/></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0 justify-between lg:justify-start">
            <div className="flex flex-col">
              <div className="relative px-6 py-4 mb-6">
                <BadgeNumber number="03" />
                <a href="#" className="block font-semibold text-3xl uppercase">{t('artistPage.music')}</a>
              </div>
              <ul className="px-6">
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex justify-end space-x-8 font-light text-xs xs:text-sm text-gray-400 py-6 first:pt-0">
                  1/2
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="relative px-6 py-4 mb-6">
                <BadgeNumber number="04" />
                <a href="#" className="block font-semibold text-3xl uppercase">{t('artistPage.video')}</a>
              </div>
              <ul className="px-6">
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
                  <p className="tracking-wide">2019</p>
                  <div className="flex flex-col">
                    <p className="tracking-wide">Wean</p>
                    <p className="text-xs xs:text-sm">{t('artistPage.livePerform')}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <p className="text-right">{t('artistPage.streamOn')}:</p>
                    <div className="flex space-x-1 mt-auto">
                      <img src="/icons/fb.svg" className="w-4 opacity-75" />
                      <img src="/icons/ig.svg" className="w-4 opacity-75" />
                    </div>
                  </div>
                </li>
                <li className="flex justify-end space-x-8 font-light text-xs xs:text-sm text-gray-400 py-6 first:pt-0">
                  1/2
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 flex-col items-center space-y-8">
          <img src="/img/artist.png" alt="artist" className="w-full" style={{  maxWidth: '600px' }} />
          <div className="flex space-x-2">
            <a href="#fb"><img src="/icons/fb.svg"/></a>
            <a href="#fb"><img src="/icons/ig.svg"/></a>
            <a href="#fb"><img src="/icons/youtube.svg"/></a>
            <a href="#fb"><img src="/icons/spotify.svg"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

ArtistPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default ArtistPage