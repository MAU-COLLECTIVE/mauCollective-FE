import React from 'react'
import {
  Recent,
  About
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'

const HomePage = () => {
  return (
    <HomeLayout>
      <Recent />
      <About />
      <Recent />
    </HomeLayout>
  )
}

export default HomePage