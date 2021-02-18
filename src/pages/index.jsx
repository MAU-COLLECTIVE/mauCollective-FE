import React from 'react'
import {
  Recent,
  About,
  RecentCollaboration
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'

const HomePage = () => {
  return (
    <HomeLayout>
      <RecentCollaboration />
      <Recent />
      <About />
      <Recent />
    </HomeLayout>
  )
}

export default HomePage