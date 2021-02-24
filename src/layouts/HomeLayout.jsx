import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/shared/SEO'
import { NavbarHome } from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <SEO />
        <NavbarHome />
      </header>
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