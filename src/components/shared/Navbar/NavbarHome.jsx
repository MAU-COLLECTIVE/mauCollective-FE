import React, { useState, useEffect, useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import LanguageSwitcher from 'components/shared/LanguageSwitcher'
import HomeContext from 'contexts/HomeContext'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useLocation } from '@reach/router'

const NavComponent = ({ className }) => {
  const { t } = useTranslation();
  const ctx = useContext(HomeContext);
  const location = useLocation();
  const section = location?.state?.section;

  const toggleArtistType = () => {
    const artistSection = document.getElementById('artists')
    artistSection.scrollIntoView({ behavior: 'smooth' });
    ctx.changeArtistType();
  }

  const handleNav = (id) => {
    const element = document.getElementById(id);
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  useLayoutEffect(() => {
    if(section) handleNav(section)
  }, [section])
    

  return (
    <div className={`lg:space-x-4 ${className}`}>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="01" className="hidden lg:block" />
        <button onClick={(e ) => { e.preventDefault(); scrollTo(0, 0); }} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('homeSection.homeCategory')}</button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="02" className="hidden lg:block" />
        <button onClick={() => handleNav('news')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('newsSection.newsCategory')}</button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="03" className="hidden lg:block" />
        <button onClick={() => handleNav('about')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('aboutSection.aboutCategory')}</button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="04" className="hidden lg:block" />
        <button onClick={() => handleNav('artists')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('artistSection.artistCategory')}</button>
        <button
          id="btn-artist-type"
          className="absolute w-max break-words hidden font-normal text-xs tracking-widest lg:font-medium uppercas focus:outline-nonee focus:outline-none"
          onClick={toggleArtistType}>
          {ctx.artistType === 'slider' ? t('artistSection.artistViewAllStyle') : t('artistSection.artistShuffleStyle')}
        </button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="05" className="hidden lg:block" />
        <button onClick={() => handleNav('collaborations')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('collaborationSection.collaborationCategory')}</button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="06" className="hidden lg:block" />
        <button onClick={() => handleNav('events')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('eventSection.eventCategory')}</button>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="07" className="hidden lg:block" />
        <button className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('shopSection.shopCategory')}</button>
      </div>
    </div>
  )
}

NavComponent.propTypes = {
  className: PropTypes.string
}

const NavbarHome = () => {

  const [isToggled, setIsToggeled] = useState(false);
  const handleToggle = () => setIsToggeled(prev => !prev);

  useEffect(() => {
    if(isToggled) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isToggled])

  // Resize listener
  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      if(width > 1124) {
        document.body.style.overflowY = "auto";
        setIsToggeled(false);
      }
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [])

  useEffect(() => {
    // intersection observer setup
    const section = document.getElementById('artists');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    function observerCallback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById('btn-artist-type').style.display = 'block';
        }
        else {
          document.getElementById('btn-artist-type').style.display = 'none';
        }
      });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(section);
    return () => observer.unobserve(section);
  }, [])

  return (
    <React.Fragment>
      <nav id="navbar" className="bg-transparent z-40 px-4 lg:px-6 py-2 fixed w-full flex lg:space-x-4 items-center justify-between lg:justify-start"
        style={{ mixBlendMode: 'exclusion', filter: 'invert(1)' }}>
        <NavComponent className="hidden lg:flex flex-wrap flex-col justify-start items-start lg:flex-row" />
        <button
          className="block lg:hidden font-medium uppercase text-xs tracking-widest py-4"
          onClick={handleToggle}>MENU</button>
        <LanguageSwitcher className="hidden lg:px-6 py-4 lg:flex lg:flex-1 justify-end space-x-2 lg:mr-2" />
      </nav>
      {/* Sidebar */}
      <div className={`transform transition-transform ease-in-out duration-500 pl-6 pr-20 py-2 fixed z-50 ${isToggled ? 'translate-x-0' : '-translate-x-full'} flex flex-1 flex-wrap flex-col justify-start items-start lg:flex-row h-screen lg:min-h-0 w-auto max-w-full lg:hidden bg-black text-white`}>
        <button
          className="block lg:hidden my-6 self-end -mr-14"
          onClick={handleToggle}>
            <img src="/icons/close.svg" alt="close" />
        </button>
        <NavComponent />
        <LanguageSwitcher className="lg:px-6 py-2 lg:py-4 flex lg:flex-1 justify-end space-x-2 mt-auto mb-8" />
      </div>
    </React.Fragment>
  )
}

export default NavbarHome