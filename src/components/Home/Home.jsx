import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'

const Home = ({ data }) => {
  const backgroundImage = useMemo(() => getGatsbyImage(data?.backgroundImage?.asset?.id, {maxWidth: 1920, layout: 'fullWidth'}), [data?.backgroundImage?.asset?.id]);
  const mainImage = useMemo(() => getGatsbyImage(data?.mainImage?.asset?.id, {maxWidth: 900}), [data?.mainImage?.asset?.id]);
  
  return (
    <div id="home" className="min-h-screen relative flex justify-center items-center bg-white">
      <GatsbyImage
        className="absolute w-screen h-screen object-cover"
        image={backgroundImage}  
        alt="Background Image"
      />
      <GatsbyImage
        className="w-full m-10 md:m-0 md:w-auto object-cover"
        image={mainImage}
        alt="Foreground Image"
      />
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home