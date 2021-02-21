import React from 'react'
import PropTypes from 'prop-types'

// Components
import SEO from 'components/shared/SEO'
import { NavbarBlog } from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

const BlogLayout = ({ children }) => {
  return (
    <div className="max-w-screen max-h-screen flex overflow-y-hidden">
      <SEO />
      <NavbarBlog />
      <main className="flex-1 overflow-y-auto px-16 py-12">
        {children}
      </main>
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node
}

export default BlogLayout