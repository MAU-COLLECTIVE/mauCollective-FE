import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ titleTemplate, description, lang }) => {
  const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
        }
      }
    }
  `);

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
          content: "https://www.mau-collective.com",
        },
      ]}
    />
  )
}

SEO.propTypes = {
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
};

export default SEO