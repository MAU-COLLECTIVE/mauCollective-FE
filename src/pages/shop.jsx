import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import HomeLayout from 'layouts/HomeLayout'
import SEO from 'components/shared/SEO'
import OverlayLink from '../components/shared/OverlayLink'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'

export const query = graphql`
	query ComingSoonPage($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
		# Get about
		sanityAbout {
			name
			aboutTab {
				email
				phoneNum
				logo {
					asset {
						id
						gatsbyImageData
					}
				}
				description {
					lang {
						en
						jp
						vn
					}
				}
				metaSeoDescription {
					lang {
						en
						jp
						vn
					}
				}
				social {
					facebook
					instagram
					spotify
					youtube
				}
				address {
					city {
						lang {
							en
							jp
							vn
						}
					}
					country {
						lang {
							en
							jp
							vn
						}
					}
					streetName {
						lang {
							en
							jp
							vn
						}
					}
					streetNo {
						lang {
							en
							jp
							vn
						}
					}
				}
			}
		}
	}
`

const ComingSoonPage = ({ data }) => {
	const { t } = useTranslation()
	const { language } = useI18next()
	const { sanityAbout: about } = data

	return (
		<HomeLayout hideFooter={true} isHome={false}>
			<SEO
				description={about?.aboutTab?.metaSeoDescription?.lang?.[language]}
			/>
			<div className="min-h-screen bg-black text-white flex flex-col text-center justify-center items-center uppercase ">
				<div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
					{t('shopSection.shopComingSoon')}
				</div>
				<OverlayLink
					type="secondary"
					to={'/'}
					className="whitespace-nowrap text-base border-solid border-white border-b-2 hover:text-gray-600 hover:border-gray-600 transition-colors">
					{t('shopSection.shopGoBack')}
				</OverlayLink>
			</div>
		</HomeLayout>
	)
}

ComingSoonPage.propTypes = {
	pageContext: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
}

export default React.memo(ComingSoonPage)
