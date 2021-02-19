import React from 'react'
import {
  Recent,
  About,
  RecentCollaboration,
  Artists
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'

const HomePage = () => {
  return (
    <HomeLayout>
      <Artists />
      <RecentCollaboration />
      <Recent />
      <About />
      <Recent />
    </HomeLayout>
  )
}

export default HomePage