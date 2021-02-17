import React from 'react'
import PropTypes from 'prop-types'

const BadgeNumber = ({ number }) => (
  <span className="absolute text-sm left-0 top-0 font-light">{number}</span>
)

BadgeNumber.propTypes = {
  number: PropTypes.string.isRequired
}

export default BadgeNumber