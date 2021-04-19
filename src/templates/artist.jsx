import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import ArtistMedia from  'components/shared/ArtistMedia'
import SEO from 'components/shared/SEO'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'
import Social from 'components/shared/SocialIcon'
import CloseButton from 'components/shared/CloseButton'

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
      social {
        facebook
        instagram
        spotify
        youtube
      }
      musicAndVideoTab {
        someMusic {
          _key
          songTitle
          releaseYear(formatString: "YYYY")
          shortDes
          streamLink {
            appleMusic
            spotify
            youtube
          }
        }
        someVideo {
          _key
          videoTitle
          releaseYear(formatString: "YYYY")
          shortDes
          streamLink {
            facebook
            instagram
            youtube
          }
        }
      }
      profilePicture {
        asset {
          id
        }
      }
    }
  }
`;

const ArtistPage = ({ pageContext, data }) => {
  const { t } = useTranslation();
  const { language } = pageContext;
  const { sanityArtist: artist } = data;
  const image = useMemo(() => getGatsbyImage(artist?.profilePicture?.asset?.id, {maxWidth: 600, layout: 'fullWidth'}), [artist]);

  return (
    <React.Fragment>
      <SEO titleTemplate={artist?.artistName}
           description={artist?.description?.lang?.[language]} />
      <div className="min-h-screen px-4 py-10 sm:py-4 lg:py-12 flex flex-col items-start bg-black text-white">
        <CloseButton className="relative mx-4 2xl:mx-10 px-6 py-4 mb-8 focus:outline-none" />
        <div className="w-full flex px-4 2xl:px-10 space-x-10">
          <div className="w-full lg:w-3/5">
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
              {image && (
                <GatsbyImage
                  className="w-full h-auto"
                  image={image}
                  alt={`Image of ${artist?.artistName}`}
                />
              )}
              <div className="flex space-x-2">
                <Social url={artist?.social?.facebook} src="/icons/fb.svg" />
                <Social url={artist?.social?.instagram} src="/icons/ig.svg" />
                <Social url={artist?.social?.youtube} src="/icons/youtube.svg" />
                <Social url={artist?.social?.spotify} src="/icons/spotify.svg" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-16 space-y-16 md:space-y-0 justify-between lg:justify-start">
              {artist?.musicAndVideoTab?.someMusic?.length > 0 && (
                <div className="w-full md:w-1/2">
                  <ArtistMedia
                    title={t('artistPage.music')}
                    number="03"
                    data={artist?.musicAndVideoTab?.someMusic}
                  />
                </div>
              )}
              {artist?.musicAndVideoTab?.someVideo?.length > 0 && (
                <div className="w-full md:w-1/2">
                  <ArtistMedia
                    title={t('artistPage.video')}
                    number="03"
                    data={artist?.musicAndVideoTab?.someVideo}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:flex flex-1 flex-col items-center space-y-8">
            {image && (
              <GatsbyImage
                className="w-full h-auto"
                image={image}
                alt={`Image of ${artist?.artistName}`}
              />
            )}
            <div className="flex space-x-2">
              <Social url={artist?.social?.facebook} src="/icons/fb.svg" />
              <Social url={artist?.social?.instagram} src="/icons/ig.svg" />
              <Social url={artist?.social?.youtube} src="/icons/youtube.svg" />
              <Social url={artist?.social?.spotify} src="/icons/spotify.svg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ArtistPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default React.memo(ArtistPage)