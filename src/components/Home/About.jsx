import React from 'react'
import BadgeNumber from 'components/shared/BadgeNumber'

const About = () => {
  return (
    <div className="bg-black text-white px-6 py-28 flex flex-row">
      <div className="flex flex-col w-1/2 space-y-14">
        <div className="relative px-6 py-4">
          <BadgeNumber number="03" />
          <h1 className="font-semibold text-3xl mb-4 text-white uppercase">ABOUT MAU</h1>
          <p className="font-mono text-xl text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci, voluptates excepturi molestias dolorum ducimus soluta cupiditate possimus nobis quam dicta sint illo doloremque pariatur quae, quia aut, officiis animi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam accusamus quibusdam sit beatae, dignissimos quod natus est non impedit id voluptates obcaecati. Id quo ducimus odit? Ea, sapiente dolore.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores odit aspernatur quisquam praesentium quasi molestias aliquid nesciunt natus dolor? Nulla possimus quae omnis perferendis ut dignissimos sequi iste reiciendis tempore.</p>
        </div>
        <div className="relative px-6 py-4">
          <h1 className="font-semibold text-3xl mb-4 text-white uppercase">CONTACT US</h1>
          <div className="flex space-x-16">
            <div>
              <p className="font-mono text-xl text-gray-200">M.A.U Collective</p>
            </div>
            <div>
              <p className="font-mono text-xl text-gray-200">371/4 Hai Ba Trung</p>
              <p className="font-mono text-xl text-gray-200 mb-6">District 3</p>
              <p className="font-mono text-xl text-gray-200">Ho Chi Minh City</p>
              <p className="font-mono text-xl text-gray-200">Vietnam</p>
            </div>
            <div>
              <p className="font-mono text-xl text-gray-200">Email</p>
              <p className="font-mono text-xl text-gray-200">info@mau.network</p>
            </div>
            <div>
              <p className="font-mono text-xl text-gray-200">Phone</p>
              <p className="font-mono text-xl text-gray-200">+84 93 785 10 36</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center space-y-8">
        <img src="/img/logo.svg" alt="logo" />
        <div className="flex space-x-2">
          <a href="#fb"><img src="/icons/fb.svg"/></a>
          <a href="#fb"><img src="/icons/ig.svg"/></a>
          <a href="#fb"><img src="/icons/youtube.svg"/></a>
          <a href="#fb"><img src="/icons/spotify.svg"/></a>
        </div>
      </div>
    </div>
  )
}

export default About