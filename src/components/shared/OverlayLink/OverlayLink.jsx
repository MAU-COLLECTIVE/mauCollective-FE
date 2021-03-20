import React from 'react'
import PropTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import { useI18next } from "gatsby-plugin-react-i18next";

const swipe = ({node, exit, type, triggerName}) => {
  const scrollTop =
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    document.body.scrollTop ||
    window.pageYOffset

  if (type === "secondary" && triggerName === "entry") {
    return gsap.timeline()
      .set(node, {
        overflowY: 'hidden',
        height: '100vh',
        scrollTop: scrollTop,
      })
      .from(node, {x: `100%`, ease: "power1.easeIn", duration: exit.length})
      .set(node, {overflowY: 'initial'})
  } else if (type === "main" && triggerName === "exit") {
    return gsap.timeline()
      .set(node, {
        overflowY: 'hidden',
        height: '100vh',
        scrollTop: scrollTop,
      })
      .to(node, {x: `+=100%`, ease: "power1.easeIn", duration: exit.length})
      .set(node, {overflowY: 'initial'})
  }
}

export default function SwipeOver({to, type, ...props}) {
  const {language, defaultLanguage} = useI18next();
  const linkTo = `${language !== defaultLanguage ? `/${language}` : ''}${to}`

  const exitLength = 0.7
  const entryLength = 0.7
  const entryZ = type === "main" ? 0 : 1
  const exitZ = type === "main" ? 1 : 0

  return (
    <TransitionLink
      exit={{
        length: exitLength,
        trigger: ({node, exit}) =>
          swipe({
            node,
            exit,
            type,
            triggerName: 'exit',
          }),
        zIndex: exitZ,
      }}
      entry={{
        length: entryLength,
        trigger: ({node, exit}) =>
          swipe({
            node,
            exit,
            type,
            triggerName: 'entry',
          }),
        zIndex: entryZ,
      }}
      to={linkTo}
      {...props}>
      {props.children}
    </TransitionLink>
  )
}

SwipeOver.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["main", "secondary"]).isRequired,
  children: PropTypes.node.isRequired
}