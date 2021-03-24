import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TweenLite } from 'gsap/all'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const data = [
  {
    id: 1,
    title: 'AVRIL OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Avril Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/avril.jpg'
  },
  {
    id: 2,
    title: 'OMO WITH RHYMASTIC & SUBOI IN TET HOLIDAY CAMPAIGN.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.',
    img: '/img/collab.png'
  }
]

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const RecentCollaboration = ({ id }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevCurrentIndex = usePrevious(currentIndex);
  const imgRef = useRef([]);

  useEffect(() => {
    TweenLite.to(imgRef.current[0], 0.5, {css:{autoAlpha:1}})
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
      {data.map((dt, index) => (
        <img
          key={dt.id}
          className="absolute w-full h-full object-cover -mx-2 lg:-mx-6 -my-28 z-0 transition-all invisible"
          style={{ filter: 'brightness(75%)' }}
          src={dt?.img}
          ref={elm => imgRef.current[index] = elm} />
      ))}
      <div className="text-right px-2 lg:px-6 mb-4 z-10">
        <OverlayLink
          type="secondary"
          to="/blog"
          section={id}
          className="font-light text-xs uppercase flex flex-col">
            {t('shared.viewAll')}
            <span>{t('collaborationSection.collaborationCategory')}</span>
        </OverlayLink>
      </div>
      <div className="flex flex-col lg:flex-row px-2 lg:px-6 z-10 flex-1 items-center">
        <div className="relative w-full lg:w-1/2 xl:w-1/3">
          <h1 className="font-black text-2xl xs:text-3xl lg:text-5xl mb-8 xl:mb-28 uppercase xl:tracking-wide">{data?.[currentIndex]?.title}</h1>
          <p className="font-mono xl:text-lg mb-8">{data?.[currentIndex]?.desc}</p>
          <OverlayLink
            type="secondary"
            to="/single-post"
            section={id}
            className="font-light text-sm leading-6 uppercase border-b-2 border-white border-solid whitespace-nowrap">
              {t('shared.watchVideo')}
          </OverlayLink>
        </div>
        <ul className="flex flex-row mt-28 lg:mt-0 lg:flex-col lg:flex-1 lg:items-end justify-center space-x-4 lg:space-x-0 lg:space-y-4 text-xs">
          <li onClick={() => setCurrentIndex(0)} className={`cursor-pointer transition-all ${currentIndex === 0 && 'border-b-2 border-white'}`}>01</li>
          <li onClick={() => setCurrentIndex(1)} className={`cursor-pointer transition-all ${currentIndex === 1 && 'border-b-2 border-white'}`}>02</li>
        </ul>
      </div>
    </div>
  )
}

RecentCollaboration.propTypes = {
  id: PropTypes.string
}

export default RecentCollaboration