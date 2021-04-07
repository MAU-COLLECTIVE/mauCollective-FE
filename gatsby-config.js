const { languages, defaultLanguage } = require('./languages')

require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: "M.A.U Collective",
    siteUrl: "localhost:8000"
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        apiVersion: '2021-03-25',
        graphqlTag: 'default',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages,
        defaultLanguage,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `localhost:8000/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          defaultNS: `translation`,
          debug: false,
          lowerCaseLng: true,
          saveMissing: false,
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          }
        },
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
