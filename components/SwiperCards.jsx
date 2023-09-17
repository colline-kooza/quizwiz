"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperCard() {
  return (
    <>
      <Swiper
        className="w-[320px] h-[240px]"
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-[100%] h-[40vh]">
            <Image
              className="relative object-cover lg:object-cover w-[100%]"
              src="/images/math.jpg"
              alt=""
              fill
            />
            <h2 className="absolute top-[40%] font-[900] left-[30%] text-[40px]">
              MATH
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[40vh]">
            <Image
              className="relative h-[100%] object-cover lg:object-cover w-[100%]"
              src="/images/science.jpg"
              alt=""
              fill
            />
            <h2 className="absolute top-[40%] font-[900] left-[30%] text-[40px]">
              SCIENCE
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[40vh]">
            <Image
              className="relative object-cover h-[100%] lg:object-cover w-[100%]"
              src="/images/socialstudies.jpg"
              alt=""
              fill
            />
            <h2 className="absolute text-black opacity-80 top-[30%] font-[900] left-[30%] text-[40px]">
              SOCIAL STUDY
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[40vh]">
            <Image
              className="relative h-[100%] object-cover lg:object-cover w-[100%]"
              src="/images/english.jpg"
              alt=""
              fill
            />
            <h2 className="absolute text-black top-[40%] font-[900] left-[30%] text-[40px]">
              ENGLISH
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
