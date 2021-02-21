import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'

const NavbarBlog = () => {
  return (
    <nav className="h-screen p-10 text-black flex flex-col">
      <div className="relative px-6 py-4 mb-16">
        <BadgeNumber number="01" />
        <a href="#" className="block font-medium uppercase">Close</a>
      </div>
      <div className="px-6">
        <h1 className="uppercase font-light mb-6">Categories</h1>
        <ul className="ml-5 space-y-1">
          <li className="uppercase font-light">News</li>
          <li className="uppercase font-light">About M.A.U</li>
          <li className="uppercase font-light">Artists</li>
          <li className="uppercase font-light">Collaborations</li>
          <li className="uppercase font-light">Events</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarBlog