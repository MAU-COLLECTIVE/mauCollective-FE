import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

const SEO = ({ titleTemplate, description, lang, imgUrl }) => {
  const { site: { siteMetadata: { title, siteUrl } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  const { pathname } = useLocation()

  const _titleTemplate = titleTemplate ? `${titleTemplate} – ${title}` : title;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={_titleTemplate}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `author`,
          content: 'M.A.U Collective',
        },  
        {
          property: `og:title`,
          content: _titleTemplate,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteUrl}${pathname}`
        },
        {
          property: `og:image`,
          content: imgUrl
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'M.A.U Collective',
        },
      ]}
    />
  )
}

SEO.propTypes = {
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  imgUrl: PropTypes.string
};

export default SEO