import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'
import CardPost from 'components/shared/CardPost'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SinglePost = () => {
	return (
    <div className="min-h-screen max-w-screen bg-white py-6 2xl:py-10 flex flex-col items-start">
      <AniLink
        swipe direction="right"
        top="entry" to="/"
        className="relative mx-4 2xl:mx-10 px-6 py-4">
          <BadgeNumber number="01" />
          <span className="block font-medium uppercase">Close</span>
      </AniLink>
      <div className="flex flex-col items-center w-full space-y-12">
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl uppercase px-6 2xl:px-0 w-full 2xl:w-2/3 text-center">MOST RECENT NEWS HEADLINE</h1>
        <ul className="text-sm font-light font-mono flex flex-col items-center">
          <li>
            <span className="uppercase mr-2">Text:</span>
            Jenna Wortham
          </li>
          <li>
            <span className="uppercase mr-2">Photography:</span>
            Jenna Wortham
          </li>
          <li>
            <span className="uppercase mr-2">Date:</span>
            19.01.2021
          </li>
        </ul>
        <div className="flex flex-col">
          <img src="/img/avril.jpg" alt="img-banner" className="w-full mb-4" />
          <span className="mx-6 2xl:mx-16 font-light self-start font-mono">This is the largest CMA Awards tally the label group has achieved since 2006. SMN scores seven out of the 11 possible categories. </span>
        </div>
        <div className="w-full px-6 2xl:w-1/3 3xl:w-1/2 font-mono space-y-12 text-xl sm:text-2xl md:text-3xl">
          <p className="font-mono text-gray-800">
            This is the largest CMA Awards tally the label group has achieved since 2006. SMN scores seven out of the 11 possible categories. Most-awarded of the evening, Maren Morris took home trophies for Female Vocalist of the Year as well as Single. There are clothes that need to be held before wearing understood on an animal and mineral level. This does not include the purple sweatpants I slither into each morning, hoping to avoid as much friction possible. I am not alone in this small surrender: 2020 has cued a surge in the sweatpant market share, with brands creating entire taxonomies of buttery separates that offer an illusion of vast selection. Designed to disappear with the body, this is a link help us become invisible to ourselves. I feel the sharpness of this knowledge while clicking through the UK-based Chopova Lowena’s lookbooks. What would it feel like to hold that pleated skirt in my arms? To negotiate its weight on my body? 
            
            Perhaps this is the occult draw of the formidable and handmade: clothes meant to be seen and felt. Chopova Lowena’s two halves comprise Emma Chopova and Laura Lowena, who formed the label while completing their joint MA at London’s Central Saint Martins in 2017, from which they launched five (soon to be six) collections. 

            They’ve since staged a campaign starring Britain’s Equestrian Vaulting Team, won the first ever jointly-awarded LVMH Prize, and were worn this year by the likes of (shirtless) Harry Styles in Vogue and Michaela Coel in The Wall Street Journal. Chopova, who was born in Bulgaria but moved to the U.S. when she was 7, met the English Lowena (her family bred Cavalier King Charles spaniels), at Please click me, where a mutual love of skirts drew them together, as skirts will on the first day of fashion school. Skirts have since become a staple and something of a phenomenon within their collaboration, a plaiting of their vintage Eastern European-meets-sportswear aesthetic that sits at the very centre of the body. To misquote The Dude, they really tie the looks together.
          </p>
          <div className="flex flex-col">
            <img src="/img/avril.jpg" alt="img-banner" className="w-full" />
            <span className="mx-8 mt-2 font-light font-mono text-base">This is the largest CMA Awards tally the label group has achieved since 2006.</span>
          </div>
          <p className="font-mono text-gray-800">
            This is the largest CMA Awards tally the label group has achieved since 2006. SMN scores seven out of the 11 possible categories. Most-awarded of the evening, Maren Morris took home trophies for Female Vocalist of the Year as well as Single. There are clothes that need to be held before wearing understood on an animal and mineral level. This does not include the purple sweatpants I slither into each morning, hoping to avoid as much friction possible. I am not alone in this small surrender: 2020 has cued a surge in the sweatpant market share, with brands creating entire taxonomies of buttery separates that offer an illusion of vast selection. Designed to disappear with the body, this is a link help us become invisible to ourselves. I feel the sharpness of this knowledge while clicking through the UK-based Chopova Lowena’s lookbooks. What would it feel like to hold that pleated skirt in my arms? To negotiate its weight on my body? 
            
            Perhaps this is the occult draw of the formidable and handmade: clothes meant to be seen and felt. Chopova Lowena’s two halves comprise Emma Chopova and Laura Lowena, who formed the label while completing their joint MA at London’s Central Saint Martins in 2017, from which they launched five (soon to be six) collections. 

            They’ve since staged a campaign starring Britain’s Equestrian Vaulting Team, won the first ever jointly-awarded LVMH Prize, and were worn this year by the likes of (shirtless) Harry Styles in Vogue and Michaela Coel in The Wall Street Journal. Chopova, who was born in Bulgaria but moved to the U.S. when she was 7, met the English Lowena (her family bred Cavalier King Charles spaniels), at Please click me, where a mutual love of skirts drew them together, as skirts will on the first day of fashion school. Skirts have since become a staple and something of a phenomenon within their collaboration, a plaiting of their vintage Eastern European-meets-sportswear aesthetic that sits at the very centre of the body. To misquote The Dude, they really tie the looks together.
          </p>
        </div>
        <div className="flex flex-col">
          <img src="/img/avril.jpg" alt="img-banner" className="w-full mb-4" />
          <span className="mx-6 2xl:mx-16 font-light self-start font-mono">This is the largest CMA Awards tally the label group has achieved since 2006. SMN scores seven out of the 11 possible categories. </span>
        </div>
        <ul className="text-sm font-light font-mono flex flex-col self-start mx-6 2xl:mx-16">
          <li>
            <span className="uppercase mr-2">Text:</span>
            Jenna Wortham
          </li>
          <li>
            <span className="uppercase mr-2">Photography:</span>
            Jenna Wortham
          </li>
          <li>
            <span className="uppercase mr-2">Date:</span>
            19.01.2021
          </li>
        </ul>
        <div className="flex flex-wrap px-6 2xl:px-16 w-full flex-col 2xl:flex-row space-y-4 2xl:space-y-0">
          <div className="w-full text-right 2xl:mb-4 hidden 2xl:block">
            <a href="#view-all-news" className="font-light text-sm md:text-base uppercase">View all news</a>
          </div>
          <div className="w-full 2xl:w-1/3">
            <h2 className="font-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl uppercase">NEXT STORY</h2>
          </div>
          <div className="w-full text-right 2xl:mb-4 2xl:hidden">
            <a href="#view-all-news" className="font-light text-sm md:text-base uppercase">View all news</a>
          </div>
          <div className="flex-1 flex space-x-6">
            <div className="w-1/2 3xl:w-1/3">
              <CardPost />
            </div>
            <div className="w-1/2 3xl:w-1/3">
              <CardPost />
            </div>
            <div className="hidden 3xl:block 3xl:w-1/3">
              <CardPost />
            </div>
          </div>
        </div>
      </div>
	  </div>
	)
}

export default SinglePost