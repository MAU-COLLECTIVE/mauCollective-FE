import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import OverlayLink from 'components/shared/OverlayLink';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ArtistSlider = () => {
  const slides = [];

  for(let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        {({ isActive }) => (
          <OverlayLink
            type="secondary"
            to="/artist"
            section="artists"
            className={`flex flex-col items-center space-y-6 transition-transform cursor-pointer ${!isActive && 'pointer-events-none'}`}
          >
            <img src="/img/artist.png" alt={`slide-${i}`} className="slide-img transition-transform" />
            <h1 className="text-xs">Slide {i}</h1>
          </OverlayLink>
        )}
      </SwiperSlide>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-28 flex items-center">
      <Swiper
        effect="coverflow"
        spaceBetween={220}
        slidesPerView={3}
        centeredSlides={true}
        slideToClickedSlide
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          1124: {
            spaceBetween: 140
          },
          1530: {
            spaceBetween: 170
          },
          1800: {
            spaceBetween: 220
          }
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default ArtistSlider