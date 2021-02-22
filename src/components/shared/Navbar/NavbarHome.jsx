import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'

const NavComponent = ({ className }) => (
  <div className={`lg:space-x-4 ${className}`}>
    <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="01" className="hidden lg:block" />
        <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(0, 0); }} className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">Home</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="02" className="hidden lg:block" />
        <a href="#news" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">News</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="03" className="hidden lg:block" />
        <a href="#about" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">About M.A.U</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="04" className="hidden lg:block" />
        <a href="#artists" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">Artists</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="05" className="hidden lg:block" />
        <a href="#collaborations" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">Collaborations</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="06" className="hidden lg:block" />
        <a href="#events" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">Events</a>
      </div>
      <div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
        <BadgeNumber number="07" className="hidden lg:block" />
        <a href="#" className="break-words block font-normal text-2xl lg:text-base lg:font-medium uppercase">Shop</a>
      </div>
  </div>
)

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

  return (
    <React.Fragment>
      <nav id="navbar" className="bg-white text-black z-40 px-4 lg:px-6 py-2 fixed w-full flex lg:space-x-4 items-center justify-between lg:justify-start"
        style={{ mixBlendMode: 'exclusion', filter: 'invert(1)' }}>
        <NavComponent className="hidden lg:flex flex-wrap flex-col justify-start items-start lg:flex-row" />
        <button
          className="block lg:hidden font-medium uppercase py-4"
          onClick={handleToggle}>MENU</button>
        <div className="lg:px-6 py-4 flex lg:flex-1 justify-end space-x-2">
          <p className="font-medium uppercase">EN</p>
          <span>/</span>
          <p className="font-medium uppercase">VI</p>
          <span>/</span>
          <p className="font-medium uppercase">JP</p>
        </div>
      </nav>
      {/* Sidebar */}
      <div className={`pl-6 pr-20 py-2 fixed z-50 ${isToggled ? 'flex' : 'hidden'} flex-wrap flex-col justify-start items-start lg:flex-row h-screen lg:min-h-0 w-max max-w-full lg:hidden bg-black text-white`}>
        <button
          className="block lg:hidden my-6 self-end -mr-14"
          onClick={handleToggle}>
            <img src="/icons/close.svg" alt="close" />
        </button>
        <NavComponent />
        <div className="lg:px-6 py-2 lg:py-4 flex lg:flex-1 justify-end space-x-2 mt-auto mb-8">
          <p className="font-medium uppercase">EN</p>
          <span>/</span>
          <p className="font-medium uppercase">VI</p>
          <span>/</span>
          <p className="font-medium uppercase">JP</p>
        </div>
      </div>
      {/* Sidebar Overlay */}
      <div className={`z-40 ${isToggled ? 'block' : 'hidden'} absolute w-screen min-h-screen h-full bg-black opacity-80`} />
    </React.Fragment>
  )
}

export default NavbarHome