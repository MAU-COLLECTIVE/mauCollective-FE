import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import BadgeNumber from 'components/shared/BadgeNumber'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Social from 'components/shared/SocialIcon'

const ArtistMedia = ({ title, data, number }) => {
  const { t } = useTranslation();
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 3
  })

  const currentPageNumber = (pagination.page * pagination.perPage) - pagination.perPage;
  const hasPagination = data?.length > pagination.perPage;
  const paginatedPost = useMemo(() => {
    const newData = [...data];
    return newData.splice(currentPageNumber, pagination.perPage);
  }, [currentPageNumber, pagination.perPage]);

  const handlePaginate = () => {
    let newPage;
    if(pagination.page === 1) newPage = pagination.page + 1;
    else newPage = pagination.page - 1;
    setPagination(prev => ({ ...prev, page: newPage }))
  }
  
  return (
    <React.Fragment>
      <div className="relative px-6 py-4 mb-6">
        <BadgeNumber number={number} />
        <h2 className="block font-semibold text-3xl uppercase">{title}</h2>
      </div>
      <ul className="px-6">
        {paginatedPost.map(dt => (
          <li key={dt._key} className="flex space-x-2 md:space-x-8 font-mono font-light text-sm xs:text-lg text-gray-400 border-b border-gray-400 py-6 first:pt-0">
            <p className="tracking-wide">{dt?.releaseYear}</p>
            <div className="flex flex-col">
              <p className="tracking-wide">{dt?.songTitle ?? dt?.videoTitle}</p>
              <p className="text-xs xs:text-sm">{dt?.shortDes}</p>
            </div>
            <div className="flex flex-col flex-1 items-end">
              <p className="text-right">{t('artistPage.streamOn')}:</p>
              <div className="flex space-x-1 mt-auto">
                <Social className="w-4 opacity-75" url={dt?.streamLink?.youtube} src="/icons/youtube.svg" />
                <Social className="w-4 opacity-75" url={dt?.streamLink?.spotify} src="/icons/spotify.svg" />
                <Social className="w-4 opacity-75" url={dt?.streamLink?.appleMusic} src="/icons/apple-music.svg" />
                <Social className="w-4 opacity-75" url={dt?.streamLink?.facebookVideo} src="/icons/fb.svg" />
                <Social className="w-4 opacity-75" url={dt?.streamLink?.instagram} src="/icons/ig.svg" />
              </div>
            </div>
          </li>
        ))}
        {hasPagination && (
          <li className="flex justify-end space-x-8 font-light text-xs xs:text-sm text-gray-400 py-6 first:pt-0 select-none">
            <button onClick={handlePaginate} className="focus:outline-none">
              {pagination.page}/2
            </button>
          </li>
        )}
      </ul>
    </React.Fragment>
  )
}

ArtistMedia.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  number: PropTypes.string.isRequired
}

export default React.memo(ArtistMedia)