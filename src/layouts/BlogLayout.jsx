import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/shared/SEO'
import { NavbarBlog } from 'components/shared/Navbar'

const BlogLayout = ({ children }) => {
  return (
    <div className="max-w-screen lg:max-h-screen flex flex-row lg:overflow-y-hidden bg-white">
      <SEO />
      <NavbarBlog />
      <main className="flex-1 lg:overflow-y-auto px-4 py-10 sm:py-4 lg:px-16 lg:py-12">
        {children}
      </main>
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node
}

export default BlogLayout