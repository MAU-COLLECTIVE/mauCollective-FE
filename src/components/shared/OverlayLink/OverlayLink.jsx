import React, { useEffect } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import { useI18next } from 'gatsby-plugin-react-i18next'

function PaintDrip({
  type = 'main',
  to,
  ...props
}) {
	const createRipple = ({ length }, event, node) => {
		const body = document.body
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		const piTwo = Math.PI * 2

		const rgb = '#ffffff'

		canvas.style.zIndex = 10000
		canvas.style.top = 0
		canvas.style.position = 'fixed'

		let vw = (canvas.width = window.innerWidth)
		let vh = (canvas.height = window.innerHeight)

		body.appendChild(canvas)

		// Event coords
		const x = event.clientX
		const y = event.clientY

		// Delta - difference between event and farthest corner
		const dx = x < vw / 2 ? vw - x : x
		const dy = y < vh / 2 ? vh - y : y

		const radius = Math.sqrt(dx * dx + dy * dy)

		const ripple = {
			alpha: 0,
			radius: 0,
			x: x,
			y: y,
		}

		const seconds = length

		gsap.timeline({
			onUpdate: drawRipple,
			onComplete: () => removeCanvas(seconds / 3),
		})
			.to(ripple, { alpha: 1, duration: seconds / 4 })
			.to(
				ripple,
				{ 
					radius: radius,
					ease: "power1.easeIn",
					duration: seconds - seconds / 3,
				},
				0
			)
			.set(node, { visibility: 'hidden' })
			.to(
				canvas,
				{ 
					x: '100%',
					ease: "power1.easeIn",
					duration: seconds / 3,
				},
				`+=${seconds * 0.4}`
			)

		function drawRipple() {
			ctx.clearRect(0, 0, vw, vh)
			ctx.beginPath()
			ctx.arc(ripple.x, ripple.y, ripple.radius, 0, piTwo, false)
			ctx.fillStyle = rgb
			ctx.fill()
		}

		window.addEventListener('resize', onResize)

		function removeCanvas(wait = 0) {
			setTimeout(() => {
				body.removeChild(canvas)
			}, wait)
		}

		function onResize() {
			vw = canvas.width = window.innerWidth
			vh = canvas.height = window.innerHeight
		}
	}

	const getDirection = from => {
		switch (from) {
			case 'main':
				return { xPercent: -5 }
			case 'secondary':
				return { xPercent: 5 }
			default:
				return {}
		}
	}

	const slideIn = ({ length }, node, from) => {
		gsap.from(node, length, {
			...getDirection(from),
			ease: 'power1.easeOut',
		})
	}

	useEffect(() => {
    const onResize = () => {
      this.vw = this.canvas.width = window.innerWidth
      this.vh = this.canvas.height = window.innerHeight
    }

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const aniLength = 1
  const aniDelay = aniLength / 1.75
  const {language, defaultLanguage} = useI18next();
  const linkTo = `${language !== defaultLanguage ? `/${language}` : ''}${to}`

  return (
    <>
      <TransitionLink
        exit={{
          length: aniLength,
          trigger: ({ exit, e, node }) =>
            createRipple(
              exit,
              e,
              node
            ),
        }}
        entry={{
          delay: aniDelay,
          length: aniLength,
          trigger: ({ entry, node }) =>
            slideIn(entry, node, type),
        }}
        to={linkTo}
        {...props}>
        {props.children}
      </TransitionLink>
    </>
  )
}

export default PaintDrip