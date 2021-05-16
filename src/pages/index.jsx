import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
  Home,
  Recent,
  About,
  RecentCollaboration,
  Artists,
  ArtistSlider
} from 'components/Home'

import HomeLayout from 'layouts/HomeLayout'
import HomeContext from 'contexts/HomeContext'
import SEO from 'components/shared/SEO'

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
    # Get home
    sanityHome {
      logo {
        asset {
          id
          gatsbyImageData
          url
        }
      }
      homeBackgroundTab {
        imgLandscape {
          asset {
            id
            gatsbyImageData
            url
          }
        }
        imgPotrait {
          asset {
            id
            gatsbyImageData
            url
          }
        }
        videoLandscape {
          asset {
            url
          }
        }
        videoPotrait {
          asset {
            url
          }
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
        _updatedAt(formatString: "DD.MM.YYYY")
        slug {
          current
        }
        title {
          lang {
            en
            vn
            jp
          }
        }
        shortDesc {
          lang {
            en
            vn
            jp
          }
        }
        mainImage {
          asset {
            id
            gatsbyImageData
          }
        }
        body {
          lang {
            _rawEn
            _rawVn
            _rawJp
          }
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
        _updatedAt(formatString: "DD.MM.YYYY")
        slug {
          current
        }
        title {
          lang {
            en
            vn
            jp
          }
        }
        shortDesc {
          lang {
            en
            vn
            jp
          }
        }
        mainImage {
          asset {
            id
            gatsbyImageData
          }
        }
        body {
          lang {
            _rawEn
            _rawVn
            _rawJp
          }
        }
      }
    }
    # Get all post (category: collaborations)
    allCollaborationPost: allSanityPost(
      filter: {categories: {elemMatch: {title: {eq: "Collaborations"}}}}
      limit: 5  
    ) {
      nodes {
        _id
        _updatedAt(formatString: "DD.MM.YYYY")
        slug {
          current
        }
        title {
          lang {
            en
            vn
            jp
          }
        }
        shortDesc {
          lang {
            en
            vn
            jp
          }
        }
        mainImage {
          asset {
            id
            gatsbyImageData
          }
        }
      }
    }
    # Get all artists
    allSanityArtist(sort: {fields: artistName, order: ASC}) {
      nodes {
        _id
        slug {
          current
        }
        artistName
        description {
          lang {
            en
            vn
            jp
          }
        }
        profilePicture {
          asset {
            id
          }
        }
      }
    }
    # Get about
    sanityAbout {
      name
      aboutTab {
        email
        phoneNum
        logo {
          asset {
            id
            gatsbyImageData
            url
          }
        }
        description {
          lang {
            en
            jp
            vn
          }
        }
        metaSeoDescription {
          lang {
            en
            jp
            vn
          }
        }
        social {
          facebook
          instagram
          spotify
          youtube
        }
        address {
          city {
            lang {
              en
              jp
              vn
            }
          }
          country {
            lang {
              en
              jp
              vn
            }
          }
          streetName {
            lang {
              en
              jp
              vn
            }
          }
          streetNo {
            lang {
              en
              jp
              vn
            }
          }
        }
      }
    }
  }
`;

const HomePage = ({ pageContext, data }) => {
  const { language } = pageContext;
  const ctx = useContext(HomeContext);
  const {
    sanityHome: home,
    allSanityArtist: { nodes: artists },
    allNewsPost: { nodes: newsPost },
    allEventPost: { nodes: eventPost },
    allCollaborationPost: { nodes: collaborationPost },
    sanityAbout: about
  } = data;

  const isHomeAvailable = home?.logo &&
                          (home?.homeBackgroundTab?.imgLandscape && home?.homeBackgroundTab?.imgPotrait) ||
                          (home?.homeBackgroundTab?.videoLandscape && home?.homeBackgroundTab?.videoPotrait)

  return (
    <HomeLayout hideFooter={ctx.isInLanding}>
      <SEO
        description={about?.aboutTab?.metaSeoDescription?.lang?.[language]}
        imgUrl={about?.aboutTab?.logo?.asset?.url}  
      /> 
      {ctx.isInLanding && isHomeAvailable ? (
        <Home id="home" data={home} />
      ) : (
        <React.Fragment>
          <Recent id="news" data={newsPost} />
          <About id="about" data={about} />
          <div id="artists" className="min-h-screen block">
            {ctx.artistType === 'slider' ? (
              <ArtistSlider data={artists} />
            ) : (
              <Artists data={artists} />
            )}
          </div>
          <RecentCollaboration id="collaborations" data={collaborationPost} />
          <Recent id="events" data={eventPost} />
        </React.Fragment>
      )}
    </HomeLayout>
  )
}

HomePage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default React.memo(HomePage)