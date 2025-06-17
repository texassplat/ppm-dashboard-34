"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import { RiDoubleQuotesR } from 'react-icons/ri';

const testiData = [
  {
    id: 1,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `"Conveniently transform error-free architectures whereas maximizing collaboration and idea-sharing. Intrinsically team driven web-readiness vis-a-vis equity invested. Appropriately underwhelm proactive leadership skills without future-proof applications Consultant"`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
    testiProfile: '/images/testi_author.png',
  },
  {
    id: 2,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `"Conveniently transform error-free architectures whereas maximizing collaboration and idea-sharing. Intrinsically team driven web-readiness vis-a-vis equity invested. Appropriately underwhelm proactive leadership skills without future-proof applications Consultant"`,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
    testiProfile: '/images/testi_author.png',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className='py-28 bg-PrimaryColor relative z-10 overflow-hidden'>
      <img
        src={'/images/testi2-shape1.png'}
        alt='Image'
        draggable='false'
        className='absolute top-16 right-36 animate-rotate hidden 2xl:block'
      />
      <img
        src={'/images/testi2-shape2.png'}
        alt='Image'
        draggable='false'
        className='absolute bottom-28 left-64 animate-rotate hidden 2xl:block'
      />
      <div className='Container'>
        <div className='flex justify-center text-center'>
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiQuote,
                  testiRatingIcon,
                  testiName,
                  testiProfile,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <TestimonialCard
                        testiQuote={testiQuote}
                        testiRatingIcon={testiRatingIcon}
                        testiName={testiName}
                        testiDesignation={testiDesignation}
                        testiProfile={testiProfile}
                        testiDesc={testiDesc}
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
