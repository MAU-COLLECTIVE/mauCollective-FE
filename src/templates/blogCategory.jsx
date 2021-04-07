import React, { useCallback, useMemo } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import BlogLayout from 'layouts/BlogLayout'
import CardPost from 'components/shared/CardPost'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { getGatsbyImage } from 'components/helper'
import SEO from 'components/shared/SEO'

export const query = graphql`
  query BlogCategoryPage($language: String!, $id: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allSanityPost(
      filter: {categories: {elemMatch: {_id: {eq: $id}}}}
    ) {
      nodes {
        _id
        _updatedAt(formatString: "DD.MM.YYYY")
        slug {
          current
        }
        title {
          en
          vn
          jp
        }
        mainImage {
          asset {
            id
            gatsbyImageData
          }
        }
      }
    }
    sanityCategory(_id: {eq: $id}) {
      title
    }
  }
`;

const BlogPage = ({ pageContext, data }) => {
  const { t } = useTranslation();
  const { language } = pageContext;
  const { sanityCategory: category, allSanityPost: { nodes: posts} } = data;
  const renderCategory = useCallback(category => {
    switch (category.toLowerCase()) {
      case 'news': return t('newsSection.newsCategory');
      case 'artist': return t('artistSection.artistCategory');
      case 'collaborations': return t('collaborationSection.collaborationCategory');
      case 'events': return t('eventSection.eventCategory');
      default: return 'Title';
    }
  }, [category?.title])

  return (
    <BlogLayout>
      <SEO titleTemplate={category?.title} />
      <div className="flex flex-col">
        <h1 className="block font-black text-2xl sm:text-5xl mb-8 sm:mb-10 lg:mb-14 uppercase xl:tracking-wide text-right sm:text-left">
          {renderCategory(category?.title)}
        </h1>
        <div className="-mt-3 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
          {posts.map(post => (
            <CardPost
              key={post?._id}
              title={post?.title?.[language]}
              image={useMemo(() => getGatsbyImage(post?.mainImage?.asset?.id, {maxWidth: 800, aspectRatio: 2.0}), [post?.mainImage?.asset?.id])}
              slug={post?.slug?.current}
              date={post?._updatedAt}
            />
          ))}
        </div>
      </div>
    </BlogLayout>
  )
}

BlogPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default React.memo(BlogPage)