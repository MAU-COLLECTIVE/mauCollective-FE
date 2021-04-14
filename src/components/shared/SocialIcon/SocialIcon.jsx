import React from 'react'
import PropTypes from 'prop-types'

const Social = ({ url, src, className }) => {
  if(url && src) return (
    <a target="_blank"rel="noreferrer" href={url} className={className}><img src={src} alt="Social Media Icon" /></a>
  )
  else return null;
}

Social.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
}

export default React.memo(Social)