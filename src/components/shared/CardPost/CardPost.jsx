import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import OverlayLink from 'components/shared/OverlayLink'

const CardPost = ({ title, image, slug, date }) => {
  return (
    <div className="flex flex-col space-y-4">
      {image && (
        <OverlayLink
          type="secondary"
          to={slug}>
            <GatsbyImage
              className="w-full h-auto"
              image={image}
              alt={`Image of ${title}`}
            />
        </OverlayLink>
      )}
      <OverlayLink
        type="secondary"
        to={slug}
        className="font-mono font-semibold text-sm hover:text-gray-600 transition-colors">
          {title}
      </OverlayLink>
      <p className="font-light text-xs">
        {date}
      </p>
    </div>
  )
}

CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default React.memo(CardPost)