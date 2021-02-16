import React from 'react'
import PropTypes from 'prop-types'

// Components
import { NavbarHome } from 'components/Navbar'

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <NavbarHome />
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node
}

export default HomeLayout