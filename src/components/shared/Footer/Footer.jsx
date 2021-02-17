import React from 'react'

const Footer = () => (
  <footer className="px-12 py-12 flex">
    <h1 className="w-1/3 font-light text-sm">M.A.U Collective</h1>
    <div className="relative flex-1 flex space-x-16">
      <div>
        <p className="font-light text-sm">Ho Chi Minh City</p>
        <p className="font-light text-sm">Vietnam</p>
      </div>
      <div>
        <p className="font-light text-sm">371/4 Hai Ba Trung</p>
        <p className="font-light text-sm">District 3</p>
      </div>
      <div>
        <p className="font-light text-sm">+84 93 785 10 36</p>
      </div>
      <div>
        <p className="font-light text-sm">info@mau.network</p>
      </div>
      <div className="flex flex-1 justify-end space-x-2">
        <a href="#fb"><img src="/icons/fb-dark.svg"/></a>
        <a href="#fb"><img src="/icons/ig-dark.svg"/></a>
        <a href="#fb"><img src="/icons/youtube-dark.svg"/></a>
        <a href="#fb"><img src="/icons/spotify-dark.svg"/></a>
      </div>
    </div>
  </footer>
)

export default Footer