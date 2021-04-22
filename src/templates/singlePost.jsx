import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import CardPost from 'components/shared/CardPost'
import OverlayLink from 'components/shared/OverlayLink'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import BlockContent from 'components/shared/BlockContent'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage, capitalize } from 'components/helper'
import SEO from 'components/shared/SEO'
import CloseButton from 'components/shared/CloseButton'

export const query = graphql`
  query($language: String!, $id: String!, $categoryId: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    sanityPost(_id: {eq: $id}) {
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
        caption
        asset {
          id
          url
        }
      }
      body {
        lang {
          _rawEn
          _rawVn
          _rawJp
        }
      }
      author {
        name
      }
      _updatedAt(formatString: "DD.MM.YYYY")
    }
    allSanityPost(
      filter: {
        _id: {ne: $id}
        categories: {elemMatch: {_id: {eq: $categoryId}}}
      }
      limit: 3
      sort: {fields: _updatedAt, order: DESC}
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
        mainImage {
          asset {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const SinglePost = ({ pageContext, data }) => {
  const { t } = useTranslation();
  const { language, category } = pageContext;
  const { sanityPost: post, allSanityPost: { nodes: nextPosts } } = data;
  const image = useMemo(() => getGatsbyImage(post?.mainImage?.asset?.id, {maxWidth: 1920}), [post]);

	return (
    <React.Fragment>
      <SEO
        titleTemplate={post?.title?.lang?.[language]}
        description={post?.shortDesc?.lang?.[language]}
        imgUrl={post?.mainImage?.asset?.url}  
      />
      <div className="min-h-screen max-w-screen bg-white py-6 2xl:py-10 flex flex-col items-start">
        <CloseButton className="relative mx-4 2xl:mx-10 px-6 py-4 focus:outline-none" />
        <div className="flex flex-col items-center w-full space-y-12">
          <h1 className="font-black text-2xl md:text-3xl xl:text-6xl uppercase xl:tracking-wide px-6 2xl:px-0 w-full 2xl:w-2/3 text-center">
            {post?.title?.lang?.[language]}
          </h1>
          <ul className="text-xs font-light font-mono flex flex-col items-center">
            <li className="tracking-wide">
              <span className="uppercase mr-2 tracking-widest">Author:</span>
              {post?.author?.name}
            </li>
            <li className="tracking-wide">
              <span className="uppercase mr-2 tracking-widest">Date:</span>
              {post?._updatedAt}
            </li>
          </ul>
          <div className="w-full flex flex-col">
            {image && (
              <GatsbyImage
                className="w-full mb-4"
                image={image}
                alt={`Image of ${post?.title?.lang?.[language]}`}
              />
            )}
            {post?.mainImage?.caption && (
              <span className="mx-6 2xl:mx-16 font-light self-start font-mono text-sm">
                {post?.mainImage?.caption}
              </span>
            )}
          </div>
          <BlockContent
            blocks={post?.body?.lang?.[`_raw${capitalize(language)}`]}
            className="w-full px-6 2xl:p-0 2xl:w-1/2 font-mono space-y-12 text-xl sm:text-2xl md:text-3xl text-gray-800 text-justify" />
          <ul className="text-xs font-light font-mono flex flex-col self-start mx-6 2xl:mx-16">
            <li className="tracking-wide">
              <span className="uppercase mr-2 tracking-widest">Author:</span>
              {post?.author?.name}
            </li>
            <li className="tracking-wide">
              <span className="uppercase mr-2 tracking-widest">Date:</span>
              {post?._updatedAt}
            </li>
          </ul>
          <div className="flex flex-wrap px-6 2xl:px-16 w-full flex-col md:flex-row space-y-4 2xl:space-y-0">
            <div className="w-full text-right md:mb-2 hidden md:block">
              <OverlayLink
                type="secondary"
                to={`/${category}`}
                section="news"
                className="font-light text-xs uppercase">
                  {t('shared.viewAll')+' '+category}
              </OverlayLink>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="font-black text-2xl sm:text-5xl mb-4 xl:mb-16 uppercase xl:tracking-wide">{t('shared.nextStory')}</h2>
            </div>
            <div className="w-full md:mb-2 md:hidden">
              <OverlayLink
                type="secondary"
                to={`/${category}`}
                section="news"
                className="font-light text-xs uppercase">
                  {t('shared.viewAll')+' '+category}
              </OverlayLink>
            </div>
            {nextPosts?.length > 0 && (
              <div className="flex-1 flex space-x-6">
                {nextPosts.map((dt, i) => {
                  let className;
                  if(i === 2) className = 'hidden 2xl:block 2xl:w-1/3'
                  else className = 'w-1/2 2xl:w-1/3';
                  return (
                    <div key={dt?._id} className={className}>
                      <CardPost
                        image={useMemo(() => getGatsbyImage(dt?.mainImage?.asset?.id, {maxWidth: 600, aspectRatio: 2.0}), [dt?.mainImage?.asset?.id])}
                        title={dt?.title?.lang?.[language]}
                        slug={`/${category}/${dt?.slug?.current}`}
                        date={dt?._updatedAt}
                      />
                    </div>
                  )})}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
	)
}

SinglePost.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default React.memo(SinglePost)