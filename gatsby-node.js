const path = require(`path`)
const { languages, defaultLanguage } = require('./languages')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const artistTemplate = path.resolve(`src/templates/artist.jsx`)
  const categoryTemplate = path.resolve(`src/templates/blogCategory.jsx`)
  const postTemplate = path.resolve(`src/templates/singlePost.jsx`)

  return graphql(`
    query {
      # Get all artist
      allSanityArtist {
        nodes {
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
        }
      }
      # Get all category
      allSanityCategory {
        nodes {
          _id
          title
        }
      }
      # Get all post
      allSanityPost {
        nodes {
          _id
          slug {
            current
          }
          categories {
            _id
            title
          }
        }
      }
    }  
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { allSanityArtist, allSanityCategory, allSanityPost } = result.data;

    // Create artist pages.
    allSanityArtist.nodes.forEach(node => {
      languages.forEach(lang => {
        const langPrefix = lang === defaultLanguage ? `` : `${lang}/`;
        createPage({
          // Path for this page — required
          path: `${langPrefix}artist/${node.slug.current}`,
          component: artistTemplate,
          context: {
            slug: node.slug.current
          },
        })
      })
    })

    // Create category pages
    allSanityCategory.nodes.forEach(node => {
      languages.forEach(lang => {
        const langPrefix = lang === defaultLanguage ? `` : `${lang}/`;
        createPage({
          // Path for this page — required
          path: `${langPrefix}${node.title.toLowerCase()}`,
          component: categoryTemplate,
          context: {
            id: node._id
          },
        })
      })
    })

    // Create post pages
    allSanityPost.nodes.forEach(node => {
      languages.forEach(lang => {
        const langPrefix = lang === defaultLanguage ? `` : `${lang}/`;
        node.categories.forEach(category => {
          createPage({
            // Path for this page — required
            path: `${langPrefix}${category.title.toLowerCase()}/${node.slug.current}`,
            component: postTemplate,
            context: {
              id: node._id,
              categoryId: category._id,
              category: category.title.toLowerCase()
            },
          })
        })
      })
    })
  })
}