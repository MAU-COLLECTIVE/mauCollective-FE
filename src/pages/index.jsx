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
      <Recent id="news" />
      <About id="about" />
      <Artists id="artists" />
      <RecentCollaboration id="collaborations" />
      <Recent id="events" />
    </HomeLayout>
  )
}

export default HomePage