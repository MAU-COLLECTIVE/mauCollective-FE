import React from 'react'
import PropTypes from 'prop-types'

// Components
import { NavbarHome } from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

const HomeLayout = ({ children, hideNav, hideFooter, isHome }) => {
	return (
		<React.Fragment>
			{!hideNav && (
				<header>
					<NavbarHome isHome={isHome} />
				</header>
			)}
			<main>{children}</main>
			{!hideFooter && <Footer />}
		</React.Fragment>
	)
}

HomeLayout.propTypes = {
	children: PropTypes.node,
	hideFooter: PropTypes.bool,
	isHome: PropTypes.bool
}

export default HomeLayout
