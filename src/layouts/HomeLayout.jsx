import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/shared/SEO'
import { NavbarHome } from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

const HomeLayout = ({ children }) => {
  return (
    <div className="max-w-screen flex flex-col">
      <SEO />
      <NavbarHome />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node
}

export default HomeLayout