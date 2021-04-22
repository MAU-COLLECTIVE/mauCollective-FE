import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import OverlayLink from 'components/shared/OverlayLink';
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImage } from 'components/helper'

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ArtistSlider = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <Swiper
        effect="coverflow"
        spaceBetween={300}
        slidesPerView={2}
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
            spaceBetween: 300,
            slidesPerView: 2
          },
          1530: {
            spaceBetween: 170
          },
          1800: {
            spaceBetween: 220
          },
          1920: {
            slidesPerView: 3
          }
        }}
      >
        {data.slice(0, 3).map(dt => (
          <SwiperSlide key={dt._id}>
            {({ isActive }) => {
              const image = useMemo(() => getGatsbyImage(dt?.profilePicture?.asset?.id, {maxWidth: 600, aspectRatio: 1.0}), [dt?.profilePicture?.asset?.id]);
              return (
                <OverlayLink
                  type="secondary"
                  to={`/artist/${dt?.slug?.current}`}
                  section="artists"
                  className={`flex flex-col items-center space-y-6 transition-transform cursor-pointer ${!isActive && 'pointer-events-none'}`}
                >
                  {image && (
                    <GatsbyImage
                      className="slide-img transition-transform"
                      image={image}
                      alt={`Image of ${dt?.artistName}`}
                    />
                  )}
                  <h1 className="text-xs">{dt?.artistName}</h1>
                </OverlayLink>
              )
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


ArtistSlider.propTypes = {
  data: PropTypes.array.isRequired,
}

export default React.memo(ArtistSlider)