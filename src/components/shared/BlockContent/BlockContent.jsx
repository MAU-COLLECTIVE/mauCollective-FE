/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import SanityBlockContent from '@sanity/block-content-to-react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage, getVideoEmbed } from 'components/helper'

const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
      }

      return <p>{props.children}</p>

      // Fall back to default handling
      // return SanityBlockContent.defaultSerializers.types.block(props);
    },
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    imageWithCaption: (props) => {
      const image = getGatsbyImage(props.node.asset._ref, {maxWidth: 1920, layout: 'fullWidth'});
      return (
        <div className="flex flex-col">
          {image && <GatsbyImage image={image} alt={`Image property ${props.node.asset._key}`} />}
          {props?.node?.caption && (
            <span className="mx-4 2xl:mx-8 mt-2 font-light font-mono text-base">
              {props.node.caption}
            </span>
          )}
        </div>
      )
    },
    youtube: ({node}) => {
      const { url } = node
      const vid = getVideoEmbed(url)
      return (
        <div className="video-wrapper">
          <div dangerouslySetInnerHTML={{__html: vid}} />
        </div>
      )
    }
  },
  list: (props) =>
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) => <li>{props.children}</li>,
  marks: {
    link: (props) => (
      <a href={props.mark.href} 
         target="_blank" rel="noreferrer"
         className="text-gray-400 transition-opacity opacity-75 hover:opacity-100">
        {props.children}</a>
    ),
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    code: (props) => <code>{props.children}</code>
  }
};

const BlockContent = ({ blocks, className = '' }) => {
  return (
    <SanityBlockContent
      renderContainerOnSingleChild
      blocks={blocks}
      serializers={serializers}
      className={className} />
  )
}

BlockContent.propTypes = {
  blocks: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default BlockContent