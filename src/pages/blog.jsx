import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from 'layouts/BlogLayout'
import CardPost from 'components/shared/CardPost'

const BlogPage = () => {
  return (
    <BlogLayout>
      <div className="flex flex-col">
        <h1 className="block font-black text-2xl sm:text-5xl mb-8 sm:mb-10 lg:mb-14 uppercase xl:tracking-wide text-right sm:text-left">NEWS</h1>
        <div className="-mt-3 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </BlogLayout>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default BlogPage