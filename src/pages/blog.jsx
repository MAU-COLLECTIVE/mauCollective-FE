import React from 'react'

import BlogLayout from 'layouts/BlogLayout'
import CardPost from 'components/shared/CardPost'

const BlogPage = () => {
  return (
    <BlogLayout title="NEWS JG">
      <div className="flex flex-col">
        <h1 className="hidden lg:block font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-12 uppercase">NEWS</h1>
        <div className="grid grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-x-6 gap-y-12">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </BlogLayout>
  )
}

export default BlogPage