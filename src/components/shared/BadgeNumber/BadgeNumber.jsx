import React from 'react'
import PropTypes from 'prop-types'

const BadgeNumber = ({ number, className }) => (
  <span className={`absolute text-xss left-1 top-1 font-light ${className}`}>{number}</span>
)

BadgeNumber.propTypes = {
  number: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default BadgeNumber