import React from 'react'
import PropTypes from 'prop-types'
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const LanguageSwitcher = ({ className }) => {
  const {language, languages, originalPath} = useI18next();

  return (
    <div className={`group ${className}`}>
      {languages.map((lng, index) => (
        <React.Fragment key={lng}>
          <Link
            to={originalPath}
            language={lng}
            className={`lg:invisible lg:group-hover:visible font-medium uppercase text-xs tracking-widest focus:outline-none ${language === lng ? 'text-white lg:text-black' : 'text-gray-400'}`}
          >{lng}</Link>
          {index < (languages.length-1) && <span className="lg:invisible lg:group-hover:visible font-medium text-xs text-gray-400">.</span>}
        </React.Fragment>
      ))}
      <p className="hidden lg:block lg:group-hover:hidden font-medium uppercase text-xs tracking-widest focus:outline-none cursor-pointer">{language}</p>
    </div>
  )
}

LanguageSwitcher.propTypes = {
  className: PropTypes.string
}

export default LanguageSwitcher