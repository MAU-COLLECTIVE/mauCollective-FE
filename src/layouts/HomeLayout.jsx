import React from 'react'
import PropTypes from 'prop-types'

// Components
import { NavbarHome } from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

const HomeLayout = ({ children, hideFooter }) => {
	return (
		<React.Fragment>
			<header>
				<NavbarHome />
			</header>
			<main>{children}</main>
			{!hideFooter && <Footer />}
		</React.Fragment>
	)
}

HomeLayout.propTypes = {
	children: PropTypes.node,
	hideFooter: PropTypes.bool,
}

export default HomeLayout
