import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'

const About = ({ id, data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const imageData = getGatsbyImage(data?.aboutTab?.logo?.asset?.id, {maxWidth: 400})

  return (
    <div id={id} className="min-h-screen bg-black text-white px-2 lg:px-6 py-28 flex flex-col justify-center space-y-20">
      <div className="flex flex-col xl:flex-row space-y-20 xl:space-y-0">
        <div className="relative xl:w-3/5 px-2 lg:px-6 py-4">
          <BadgeNumber number="03" />
          <h1 className="font-semibold text-3xl mb-4 text-white uppercase">{t('aboutSection.aboutCategory')}</h1>
          <p className="font-mono xl:text-lg text-gray-200">
            {data?.aboutTab?.description?.[language]}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-8">
          <GatsbyImage image={imageData} alt="Brand Logo" />
          <div className="flex space-x-2">
            <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.facebook}><img src="/icons/fb.svg"/></a>
            <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.instagram}><img src="/icons/ig.svg"/></a>
            <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.youtube}><img src="/icons/youtube.svg"/></a>
            <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.spotify}><img src="/icons/spotify.svg"/></a>
          </div>
        </div>
      </div>
      <div className="relative px-2 lg:px-6 py-4 xl:w-3/5">
        <h1 className="font-semibold text-3xl mb-8 text-white uppercase">{t('aboutSection.contactUsField')}</h1>
        <div className="flex flex-wrap space-y-8 sm:space-y-0 justify-between">
          <div className="w-full sm:w-auto">
            <p className="font-mono xl:text-lg text-gray-200">
              {data?.name}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col space-x-0 lg:space-x-28 xl:space-x-0">
            <div>
              <p className="font-mono xl:text-lg text-gray-200">{data?.aboutTab?.address?.streetNo?.[language]}</p>
              <p className="font-mono xl:text-lg text-gray-200 mb-6">{data?.aboutTab?.address?.streetName?.[language]}</p>
            </div>
            <div>
              <p className="font-mono xl:text-lg text-gray-200">{data?.aboutTab?.address?.city?.[language]}</p>
              <p className="font-mono xl:text-lg text-gray-200">{data?.aboutTab?.address?.country?.[language]}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row md:space-x-28 2xl:space-x-28 xl:space-x-0">
            <div>
              <p className="font-mono xl:text-lg text-gray-200">Email</p>
              <p className="font-mono xl:text-lg text-gray-200 mb-6">{data?.aboutTab?.email}</p>
            </div>
            <div>
              <p className="font-mono xl:text-lg text-gray-200">Phone</p>
              <p className="font-mono xl:text-lg text-gray-200">{data?.aboutTab?.phoneNum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object.isRequired,
}

export default About