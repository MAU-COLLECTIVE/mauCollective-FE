import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import CardPost from 'components/shared/CardPost'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage, capitalize } from 'components/helper'
import BlockContent from 'components/shared/BlockContent'

const Recent = ({ id, data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const firstImage = getGatsbyImage(data?.[0]?.mainImage?.asset?.id, {maxWidth: 1600, aspectRatio: 2.0});

  return (
    <div id={id} className="min-h-screen bg-white px-2 lg:px-6 py-28 flex flex-col justify-center">
      <div className="text-right px-2 lg:px-6 mb-2 hidden xl:block">
        <OverlayLink
          type="secondary"
          to={`/blog/${id}`}
          section={id}
          className="font-light text-xs uppercase">
            {`${t('shared.viewAll')} ${id === 'news' ? t('newsSection.newsCategory') : t('eventSection.eventCategory')}`}
        </OverlayLink>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="relative px-2 lg:px-6 py-4 w-full xl:w-1/3">
          <BadgeNumber number={id === 'news' ? '02' : '04'} />
          <h1 className="font-black text-2xl xs:text-3xl lg:text-5xl mb-8 xl:mb-28 uppercase xl:tracking-wide">
            {data?.[0]?.title?.[language]}
          </h1>
          <GatsbyImage
            className="xl:hidden md:block w-full mb-8 xl:mb-0"
            image={firstImage}
            alt={`Image of ${data?.[0].title?.[language]}`}
          />
          <div className="flex flex-col md:flex-row xl:flex-col md:space-x-8 items-start justify-start xl:space-x-0 space-y-8 md:space-y-0 xl:space-y-8">
            {/* <p className="font-mono text-sm xs:text-lg font-light xl:font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p> */}
            <BlockContent
              blocks={data?.[0].body?.[`_raw${capitalize(language)}`]}
              className="font-mono text-sm xs:text-lg font-light xl:font-normal w-full break-all" />
            <OverlayLink
              type="secondary"
              to={`/blog/${data?.[0]?.slug?.current}`}
              section={id}
              className="font-light text-sm leading-6 uppercase border-b-2 border-black border-solid whitespace-nowrap hover:text-gray-600 hover:border-gray-600 transition-colors">
                {t('shared.continueRead')}</OverlayLink>
          </div>
        </div>
        <div className="px-2 lg:px-6 py-2 flex-1 xl:space-y-6">
          <GatsbyImage
            className="hidden xl:block w-full h-96"
            image={firstImage}
            alt={`Image of ${data?.[0].title?.[language]}`}
          />
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="block mt-8 sm:mt-0 xl:hidden w-1/3 lg:pr-6 xl:pr-0">
              <OverlayLink
                type="secondary"
                to="/blog"
                section={id}
                className="font-light text-xs uppercase hover:text-gray-400 transition-colors">
                  {`${t('shared.viewAll')} ${id === 'news' ? t('newsSection.newsCategory') : t('eventSection.eventCategory')}`}
              </OverlayLink>
            </div>
            {data?.length && (
              <div className="w-full sm:w-2/3 lg:w-full grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
                {data.filter((_, i) => i !== 0).map((dt, i) => {
                  let className;
                  if(i === 2) className = 'block sm:hidden xl:block'
                  else if(i === 3) className = 'block sm:hidden 3xl:block'
                  else className = '';
                  return (
                    <div key={dt?._id} className={className}>
                      <CardPost
                        image={getGatsbyImage(dt?.mainImage?.asset?.id, {maxWidth: 600, aspectRatio: 2.0})}
                        title={dt?.title?.[language]}
                        slug={dt?.slug?.current}
                      />
                    </div>
                  )})}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

Recent.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array.isRequired,
}

export default Recent