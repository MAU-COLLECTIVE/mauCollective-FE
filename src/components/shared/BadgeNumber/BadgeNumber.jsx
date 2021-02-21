import React from 'react'
import PropTypes from 'prop-types'

const BadgeNumber = ({ number, className }) => (
  <span className={`absolute text-sm left-0 top-0 font-light ${className}`}>{number}</span>
)

BadgeNumber.propTypes = {
  number: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default BadgeNumber