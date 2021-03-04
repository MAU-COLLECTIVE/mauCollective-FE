import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NavbarBlog = ({ title }) => {
  return (
    <nav className="lg:h-screen p-4 lg:p-10 text-black flex flex-col items-start">
      <AniLink
        swipe direction="right"
        top="entry" to="/"
        className="relative px-6 py-4 mb-4 lg:mb-16">
          <BadgeNumber number="01" />
          <span className="block font-medium uppercase">Close</span>
      </AniLink>
      <div className="lg:px-6 block w-full">
        <h1 className="lg:hidden font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 uppercase">{title}</h1>
        <div className="flex lg:flex-col">
          <h2 className="uppercase w-1/2 lg:w-auto font-light mb-6">Categories</h2>
          <ul className="lg:ml-5 w-1/2 lg:w-auto lg:space-y-1 flex flex-wrap lg:flex-col">
            <li className="uppercase font-light">News</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">About M.A.U</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">Artists</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">Collaborations</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
            <li className="uppercase font-light">Events</li>
            <li className="mx-2 lg:mx-0 lg:hidden">/</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavbarBlog.propTypes = {
  title: PropTypes.string
}

export default NavbarBlog