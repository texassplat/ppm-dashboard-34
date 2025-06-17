"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import CountUp from "react-countup";

const brandImages = [
  '/images/brand_1.png',
  '/images/brand_2.png',
  '/images/brand_3.png',
  '/images/brand_4.png',
  '/images/brand_5.png',
];

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="py-[94px] bg-white py-10">
      <div className="Container relative z-10">
        <h5 className="font-FiraSans text-HeadingColor text-lg sm:text-2xl flex justify-center relative before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-[50px] before:h-[2px] before:bg-PrimaryColor mb-[72px]">
          The Blue Glass Insights Promise &mdash; Exceptional Customer Support and Proven Results
        </h5>
        <Swiper {...settings}>
          {brandImages.concat(brandImages[0]).map((src, idx) => (
            <SwiperSlide key={idx}>
              <div>
                <Image src={src} alt={`Brand ${idx + 1}`} width={120} height={60} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
