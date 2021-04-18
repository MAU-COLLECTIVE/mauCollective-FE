import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { TweenLite } from 'gsap/all'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const RecentCollaboration = ({ id, data }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevCurrentIndex = usePrevious(currentIndex);
  const imgRef = useRef([]);

  useEffect(() => {
    if(imgRef.current[0] !== undefined) TweenLite.to(imgRef.current[0], 0.5, {css:{autoAlpha:1}})
  },[])

  useEffect(() => {
    if(imgRef.current[prevCurrentIndex] !== undefined &&
       imgRef.current[currentIndex] !== undefined) {
         TweenLite.to(imgRef.current[prevCurrentIndex], 0.5, {css:{autoAlpha:0}}) 
         TweenLite.to(imgRef.current[currentIndex], 0.5, {css:{autoAlpha:1}})
       }
  }, [currentIndex])

  return (
    <div id={id} className="min-h-screen relative px-2 lg:px-6 py-28 flex flex-col justify-between text-gray-200">
      {data.map((dt, index) => {
        const image = useMemo(() => getGatsbyImage(dt?.mainImage?.asset?.id, {maxWidth: 1920}), [dt?.mainImage?.asset?.id]);
        return (
          <div
            className="absolute w-full h-full -mx-2 lg:-mx-6 -my-28 z-0 transition-all invisible"
            style={{ filter: 'brightness(75%)' }}
            key={index} ref={elm => imgRef.current[index] = elm}>
              {image && (
                <GatsbyImage
                  className="w-full h-full object-cover"
                  image={image}  
                  alt={`Image of ${data?.[0].title?.lang?.[language]}`}
                />
              )}
          </div>
        )
      })}
      <div className="text-right px-2 lg:px-6 mb-4 z-10">
        <OverlayLink
          type="secondary"
          to="/blog/collaborations"
          section={id}
          className="font-light text-xs uppercase flex flex-col">
            {t('shared.viewAll')}
            <span>{t('collaborationSection.collaborationCategory')}</span>
        </OverlayLink>
      </div>
      <div className="flex flex-col lg:flex-row px-2 lg:px-6 z-10 flex-1 items-center">
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
          <h1 className="font-black text-2xl xs:text-3xl lg:text-5xl mb-8 xl:mb-28 uppercase xl:tracking-wide">{data?.[currentIndex]?.title?.lang?.[language]}</h1>
          <p className="font-mono xl:text-lg mb-8 long-text">
            {data?.[0]?.shortDesc?.lang?.[language]}
          </p>
          <OverlayLink
            type="secondary"
            to={`/blog/${data?.[0]?.slug?.current}`}
            section={id}
            className="font-light text-sm leading-6 uppercase border-b-2 border-white border-solid whitespace-nowrap hover:text-gray-300 hover:border-gray-300 transition-colors">
              {t('shared.watchVideo')}
          </OverlayLink>
        </div>
        <ul className="flex flex-row mt-28 lg:mt-0 lg:flex-col lg:flex-1 lg:items-end justify-center space-x-4 lg:space-x-0 lg:space-y-4 text-xs">
          {data?.map((_, index) => (
            <li key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer transition-all ${currentIndex === index && 'border-b-2 border-white'}`}>
                  {(index+1).toString().padStart(2, '0')}
            </li>  
          ))}
        </ul>
      </div>
    </div>
  )
}

RecentCollaboration.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array.isRequired,
}

export default React.memo(RecentCollaboration)