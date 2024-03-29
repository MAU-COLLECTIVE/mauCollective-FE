import React from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { useI18next } from 'gatsby-plugin-react-i18next'

const CloseButton = ({ referrer = true, withNumber = true, className }) => {
  const { t } = useTranslation();
  const { language, defaultLanguage } = useI18next();
  const location = useLocation();
  const indexUrl = language === defaultLanguage ? '/' : `/${language}`
  const goBack = () => {
    if(referrer)
      return navigate(location?.state?.referrer ? -1 : indexUrl)
    else
      return navigate(indexUrl)
  }

  return (
    <button
      className={className}
      onClick={goBack}>
        {withNumber && <BadgeNumber number="01" />}
        <span className="block font-medium uppercase text-xs">{t('shared.close')}</span>
    </button>
  )
}

CloseButton.propTypes = {
  withNumber: PropTypes.bool,
  className: PropTypes.string,
  referrer: PropTypes.bool
}

export default CloseButton