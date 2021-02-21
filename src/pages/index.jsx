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
      <Recent />
      <About />
      <Artists />
      <RecentCollaboration />
      <Recent />
    </HomeLayout>
  )
}

export default HomePage