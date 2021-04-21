import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import HomeContext from 'contexts/HomeContext'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const NavbarHomeComponent = ({ className, isHome }) => {
	const { t } = useTranslation()
	const ctx = useContext(HomeContext)

	const toggleArtistType = () => {
		const artistSection = document.getElementById('artists')
		artistSection.scrollIntoView({ behavior: 'smooth' })
		ctx.changeArtistType()
	}

	const handleNav = (id) => {
		const element = document.getElementById(id)
		if(id === 'home') {
			window.scrollTo(0, 0);
			return true;
		}
		if(element) {
			const offset = 0
			const bodyRect = document.body.getBoundingClientRect().top
			const elementRect = element.getBoundingClientRect().top
			const elementPosition = elementRect - bodyRect
			const offsetPosition = elementPosition - offset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className={`lg:space-x-4 ${className}`}>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="01" className="hidden lg:block" />
        {isHome ? (
					<button onClick={() => handleNav('home')} className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">{t('homeSection.homeCategory')}</button>
				) : (
					<OverlayLink
						type="secondary"
						to="/"
						className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
							{t('homeSection.homeCategory')}
					</OverlayLink>
				)}
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="02" className="hidden lg:block" />
				<button
					onClick={() => handleNav('news')}
					className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
					{t('newsSection.newsCategory')}
				</button>
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="03" className="hidden lg:block" />
				<button
					onClick={() => handleNav('about')}
					className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
					{t('aboutSection.aboutCategory')}
				</button>
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="04" className="hidden lg:block" />
				<button
					onClick={() => handleNav('artists')}
					className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
					{t('artistSection.artistCategory')}
				</button>
				<button
					id="btn-artist-type"
					className="z-50 absolute w-max break-words hidden font-normal text-xs tracking-widest lg:font-medium uppercas focus:outline-nonee focus:outline-none"
					onClick={toggleArtistType}>
					{ctx.artistType === 'slider'
						? t('artistSection.artistViewAllStyle')
						: t('artistSection.artistShuffleStyle')}
				</button>
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="05" className="hidden lg:block" />
				<button
					onClick={() => handleNav('collaborations')}
					className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
					{t('collaborationSection.collaborationCategory')}
				</button>
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="06" className="hidden lg:block" />
				<button
					onClick={() => handleNav('events')}
					className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
					{t('eventSection.eventCategory')}
				</button>
			</div>
			<div className="relative w-full lg:w-auto lg:px-6 py-2 lg:py-4">
				<BadgeNumber number="07" className="hidden lg:block" />
				<OverlayLink type="secondary" to={'/shop'}>
					<button
						onClick={() => {
							scrollTo(0, 0)
						}}
						className="break-words block font-normal text-xs tracking-widest lg:font-medium uppercase focus:outline-none">
						{t('shopSection.shopCategory')}
					</button>
				</OverlayLink>
			</div>
		</div>
	)
}

NavbarHomeComponent.propTypes = {
	className: PropTypes.string,
	isHome: PropTypes.bool
}

export default NavbarHomeComponent