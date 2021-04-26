import React, { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'
import HomeContext from 'contexts/HomeContext'

const Home = ({ data }) => {
  const ctx = useContext(HomeContext)
  const backgroundImage = useMemo(() => getGatsbyImage(data?.backgroundImage?.asset?.id, {maxWidth: 1920, layout: 'fullWidth'}), [data?.backgroundImage?.asset?.id]);
  const mainImage = useMemo(() => getGatsbyImage(data?.mainImage?.asset?.id, {maxWidth: 900}), [data?.mainImage?.asset?.id]);
  
  return (
    <div id="home" className="h-screen w-screen relative p-0 flex justify-center items-center bg-white">
      <GatsbyImage
        className="absolute w-full h-full object-cover"
        image={backgroundImage}  
        alt="Background Image"
      />
      <button className="w-full m-10 md:m-0 md:w-auto" onClick={ctx.toggleIsInLanding}>
        <GatsbyImage
          className="object-cover"
          image={mainImage}
          alt="Foreground Image"
        />
      </button>
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home