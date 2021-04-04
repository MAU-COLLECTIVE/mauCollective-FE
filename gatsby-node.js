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

  return graphql(`
    query GetArtists {
      allSanityArtist {
        nodes {
          slug {
            current
          }
          artistName
          description {
            en
            jp
            vn
          }
        }
      }
    }  
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create artist pages.
    result.data.allSanityArtist.nodes.forEach(node => {
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
  })
}