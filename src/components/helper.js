import { getGatsbyImageData } from 'gatsby-source-sanity'

const sanityConfig = {projectId: process.env.GATSBY_SANITY_PROJECT_ID, dataset: process.env.GATSBY_SANITY_DATASET}

export const getGatsbyImage = (data, params) => {
  return getGatsbyImageData(data, params, sanityConfig)
};

export const capitalize = string => string.trim().replace(/^\w/, (c) => c.toUpperCase());

export const getVideoEmbed = (input) => {
  if (input.match( /youtu/ )) {
    const pattern = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(\S+)/g;
    if (pattern.test(input)) {
      let newInput = input;
      const replacement = '<iframe width="560" height="349" src="https://www.youtube.com/embed/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen loading="lazy"></iframe>';
      return newInput.replace(pattern, replacement);
    }
  }
  else if (input.match( /vimeo/ )) {
    const pattern = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(\S+)/g;
    if (pattern.test(input)) {
      let newInput = input;
      const replacement = '<iframe width="560" height="349" src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen loading="lazy"></iframe>';
      return newInput.replace(pattern, replacement);
    }
  }
}