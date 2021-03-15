import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <div className={`group ${className}`}>
      <button
        className={`lg:invisible lg:group-hover:visible font-medium uppercase text-xs tracking-widest focus:outline-none ${language === 'en' ? 'text-white lg:text-black' : 'text-gray-400'}`}
        onClick={() => setLanguage('en')}
      >EN</button>
      <span className="lg:invisible lg:group-hover:visible text-xs">/</span>
      <button
        className={`lg:invisible lg:group-hover:visible font-medium uppercase text-xs tracking-widest focus:outline-none ${language === 'vn' ? 'text-white lg:text-black' : 'text-gray-400'}`}
        onClick={() => setLanguage('vn')}
      >VN</button>
      <span className="lg:invisible lg:group-hover:visible text-xs">/</span>
      <button
        className={`lg:invisible lg:group-hover:visible font-medium uppercase text-xs tracking-widest focus:outline-none ${language === 'jp' ? 'text-white lg:text-black' : 'text-gray-400'}`}
        onClick={() => setLanguage('jp')}
      >JP</button>
      <p className="hidden lg:block lg:group-hover:hidden font-medium uppercase text-xs tracking-widest focus:outline-none cursor-pointer">{language}</p>
    </div>
  )
}

LanguageSwitcher.propTypes = {
  className: PropTypes.string
}

export default LanguageSwitcher