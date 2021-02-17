import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/SEO'
import { NavbarHome } from 'components/Navbar'
import Footer from 'components/Footer'

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <NavbarHome />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node
}

export default HomeLayout