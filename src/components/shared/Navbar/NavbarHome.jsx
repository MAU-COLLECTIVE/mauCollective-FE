import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LanguageSwitcher from 'components/shared/LanguageSwitcher'
import NavbarHomeComponent from './NavbarHomeComponent'

const NavbarHome = ({ isHome = true }) => {
	const [isToggled, setIsToggeled] = useState(false)
	const handleToggle = () => setIsToggeled((prev) => !prev)

	useEffect(() => {
		if (isToggled) document.body.style.overflowY = 'hidden'
		else document.body.style.overflowY = 'auto'
	}, [isToggled])

	// Resize listener
	useEffect(() => {
		const resize = () => {
			const width = window.innerWidth
			if (width > 1124) {
				document.body.style.overflowY = 'auto'
				setIsToggeled(false)
			}
		}

		resize()
		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])

	useEffect(() => {
		// intersection observer setup
		const section = document.getElementById('artists')

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.7,
		}

		function observerCallback(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					document.getElementById('btn-artist-type').style.display = 'block'
				} else {
					document.getElementById('btn-artist-type').style.display = 'none'
				}
			})
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)

		if (section) {
			observer.observe(section)
			return () => observer.unobserve(section)
		}
	}, [])

	return (
		<React.Fragment>
			<nav
				id="navbar"
				className="bg-transparent z-40 px-4 lg:px-6 py-2 fixed w-full flex lg:space-x-4 items-center justify-between lg:justify-start"
				style={{ mixBlendMode: 'exclusion', filter: 'invert(1)' }}>
				<NavbarHomeComponent isHome={isHome} className="hidden lg:flex flex-wrap flex-col justify-start items-start lg:flex-row" />
				<button
					className="block lg:hidden font-medium uppercase text-xs tracking-widest py-4"
					onClick={handleToggle}>
					MENU
				</button>
				<LanguageSwitcher className="hidden lg:px-6 py-4 lg:flex lg:flex-1 justify-end space-x-2 lg:mr-2" />
			</nav>
			{/* Sidebar */}
			<div
				className={`transform transition-transform ease-in-out duration-500 pl-6 pr-20 py-2 fixed z-50 ${
					isToggled ? 'translate-x-0' : '-translate-x-full'
				} flex flex-1 flex-wrap flex-col justify-start items-start lg:flex-row h-screen lg:min-h-0 w-auto max-w-full lg:hidden bg-black text-white`}>
				<button
					className="block lg:hidden my-6 self-end -mr-14"
					onClick={handleToggle}>
					<img src="/icons/close.svg" alt="close" />
				</button>
				<NavbarHomeComponent isHome={isHome} />
				<LanguageSwitcher className="lg:px-6 py-2 lg:py-4 flex lg:flex-1 justify-end space-x-2 mt-auto mb-8" />
			</div>
		</React.Fragment>
	)
}

NavbarHome.propTypes = {
	isHome: PropTypes.bool
}

export default NavbarHome
