import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
  Recent,
  About,
  RecentCollaboration,
  Artists,
  ArtistSlider
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'
import HomeContext from 'contexts/HomeContext'

export const query = graphql`
  query Homepage($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    # Get all post (category: news)
    allNewsPost: allSanityPost(
      filter: {categories: {elemMatch: {title: {eq: "News"}}}}
      limit: 5  
    ) {
      nodes {
        _id
        title {
          en
          vn
          jp
        }
      }
    }
    # Get all post (category: event)
    allEventPost: allSanityPost(
      filter: {categories: {elemMatch: {title: {eq: "Events"}}}}
      limit: 5  
    ) {
      nodes {
        _id
        title {
          en
          vn
          jp
        }
      }
    }
    # Get all artists
    allSanityArtist {
      nodes {
        _id
        slug {
          current
        }
        artistName
        description {
          en
          vn
          jp
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const ctx = useContext(HomeContext);
  const {
    allSanityArtist: { nodes: artists },
    allNewsPost: { nodes: newsPost },
    allEventPost: { nodes: eventPost }
  } = data;

  return (
    <HomeLayout>
      <Recent id="news" data={newsPost} />
      <About id="about" />
      <div id="artists" className="h-screen">
        {ctx.artistType === 'slider' ? (
          <ArtistSlider data={artists} />
        ) : (
          <Artists data={artists} />
        )}
      </div>
      <RecentCollaboration id="collaborations" />
      <Recent id="events" data={eventPost} />
    </HomeLayout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage