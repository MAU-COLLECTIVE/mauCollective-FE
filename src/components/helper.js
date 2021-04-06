import { getGatsbyImageData } from 'gatsby-source-sanity'

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

export const getGatsbyImage = (data, params) => {
  return getGatsbyImageData(data, params, sanityConfig)
};

export const capitalize = string => string.trim().replace(/^\w/, (c) => c.toUpperCase());