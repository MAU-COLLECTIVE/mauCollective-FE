import React from 'react'
import PropTypes from 'prop-types'

const CardPost = ({ title }) => (
  <div className="flex flex-col space-y-4">
    <div className="w-full h-40 bg-gray-300">Image</div>
    <h2 className="font-mono font-semibold text-sm">{title}</h2>
    <p className="font-light text-xs">18.01.2021</p>
  </div>
)

CardPost.propTypes = {
  title: PropTypes.string.isRequired
}


export default CardPost