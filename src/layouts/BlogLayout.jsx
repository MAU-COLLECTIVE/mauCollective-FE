import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/shared/SEO'
import { NavbarBlog } from 'components/shared/Navbar'

const BlogLayout = ({ children, title }) => {
  return (
    <div className="max-w-screen lg:max-h-screen flex flex-col lg:flex-row lg:overflow-y-hidden">
      <SEO />
      <NavbarBlog title={title} />
      <main className="flex-1 lg:overflow-y-auto px-4 lg:px-16 py-12">
        {children}
      </main>
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default BlogLayout