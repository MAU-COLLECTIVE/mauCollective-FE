import React from 'react'
import BadgeNumber from 'components/BadgeNumber'

const NavbarHome = () => {
  return (
    <nav className="px-6 py-2 flex space-x-4">
      <div className="relative px-6 py-4">
        <BadgeNumber number="01" />
        <a href="#" className="block font-medium uppercase">Home</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="02" />
        <a href="#" className="block font-medium uppercase">News</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="03" />
        <a href="#" className="block font-medium uppercase">About M.A.U</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="04" />
        <a href="#" className="block font-medium uppercase">Artists</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="05" />
        <a href="#" className="block font-medium uppercase">Collaborations</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="06" />
        <a href="#" className="block font-medium uppercase">Events</a>
      </div>
      <div className="relative px-6 py-4">
        <BadgeNumber number="07" />
        <a href="#" className="block font-medium uppercase">Shop</a>
      </div>
      <div className="px-6 py-4 flex flex-1 justify-end space-x-2">
        <p className="font-medium uppercase">EN</p>
        <span>/</span>
        <p className="font-medium uppercase">VI</p>
        <span>/</span>
        <p className="font-medium uppercase">JP</p>
      </div>
    </nav>
  )
}

export default NavbarHome