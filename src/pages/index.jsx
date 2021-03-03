import React, { useContext } from 'react'
import {
  Recent,
  About,
  RecentCollaboration,
  Artists,
  ArtistSlider
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'
import HomeContext from 'contexts/HomeContext'

const HomePage = () => {

  const ctx = useContext(HomeContext);

  return (
    <HomeLayout>
      <Recent id="news" />
      <About id="about" />
      <div id="artists">
        {ctx.artistType === 'slider' ? (
          <ArtistSlider />
        ) : (
          <Artists />
        )}
      </div>
      <RecentCollaboration id="collaborations" />
      <Recent id="events" />
    </HomeLayout>
  )
}

export default HomePage