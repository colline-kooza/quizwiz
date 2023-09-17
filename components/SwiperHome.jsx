"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-[100%] h-[30vh] lg:h-[30vh] student1">
            <Image
              className=" object-cover lg:object-contain w-[100%]"
              src="/images/studenn3.png"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[30vh] student2">
            <Image
              className=" object-cover lg:object-contain w-[100%]"
              src="/images/flyer.png"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[30vh] student1">
            <Image
              className="object-cover lg:object-cover w-[100%]"
              src="/images/student2.jpg"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[100%] h-[30vh] student2">
            <Image
              className="object-cover lg:object-contain w-[100%]"
              src="/images/student1.png"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
