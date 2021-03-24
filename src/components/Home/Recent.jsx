import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import CardPost from 'components/shared/CardPost'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Recent = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div id={id} className="min-h-screen bg-white px-2 lg:px-6 py-28 flex flex-col justify-center">
      <div className="text-right px-2 lg:px-6 mb-2 hidden xl:block">
        <OverlayLink
          type="secondary"
          to="/blog"
          section={id}
          className="font-light text-xs uppercase">
            {t('shared.viewAll')+' '+t('newsSection.newsCategory')}
        </OverlayLink>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="relative px-2 lg:px-6 py-4 w-full xl:w-1/3">
          <BadgeNumber number="02" />
          <h1 className="font-black text-2xl xs:text-3xl lg:text-5xl mb-8 xl:mb-28 uppercase xl:tracking-wide">MOST RECENT NEWS HEADLINE</h1>
          <div className="xl:hidden md:block w-full h-96 mb-8 xl:mb-0 bg-gray-300">Image</div>
          <div className="flex flex-col md:flex-row xl:flex-col md:space-x-8 items-start justify-start xl:space-x-0 space-y-8 md:space-y-0 xl:space-y-8">
            <p className="font-mono text-sm xs:text-lg font-light xl:font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.</p>
            <OverlayLink
              type="secondary"
              to="/single-post"
              section={id}
              className="font-light text-sm leading-6 uppercase border-b-2 border-black border-solid whitespace-nowrap">
                {t('shared.continueRead')}</OverlayLink>
          </div>
        </div>
        <div className="px-2 lg:px-6 py-2 flex-1 xl:space-y-6">
          <div className="hidden xl:block w-full h-96 bg-gray-300">Image</div>
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="block mt-8 sm:mt-0 xl:hidden w-1/3 lg:pr-6 xl:pr-0">
              <OverlayLink
                type="secondary"
                to="/blog"
                section={id}
                className="font-light text-xs uppercase">
                {t('shared.viewAll')+' '+t('newsSection.newsCategory')}
              </OverlayLink>
            </div>
            <div className="w-full sm:w-2/3 lg:w-full grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
              <div>
                <CardPost />
              </div>
              <div>
                <CardPost />
              </div>
              <div className="block sm:hidden xl:block">
                <CardPost />
              </div>
              <div className="block sm:hidden 3xl:block">
                <CardPost />
              </div>
            </div>
            {/*<div className="flex flex-wrap sm:flex-nowrap space-x-6 w-full sm:w-2/3 lg:w-full">*/}
            {/*  <div className="w-1/2 xl:w-1/3 3xl:w-1/4">*/}
            {/*    <CardPost />*/}
            {/*  </div>*/}
            {/*  <div className="w-1/2 xl:w-1/3 3xl:w-1/4">*/}
            {/*    <CardPost />*/}
            {/*  </div>*/}
            {/*  <div className="block sm:hidden xl:block w-1/2 lg:w-1/3 3xl:w-1/4">*/}
            {/*    <CardPost />*/}
            {/*  </div>*/}
            {/*  <div className="block sm:hidden 3xl:block w-1/2 lg:w-1/3 3xl:w-1/4">*/}
            {/*    <CardPost />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
};

Recent.propTypes = {
  id: PropTypes.string
}

export default Recent