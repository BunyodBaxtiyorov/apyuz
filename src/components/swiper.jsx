import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
    <div className="swiper-1">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div className="img-swiperr"> */}
            <img
              src="https://d12sqxodahk3ac.cloudfront.net/collections/f6ba6790-d53e-40d1-b813-53196b16c832.png"
              alt=""
            />
          {/* </div> */}
        </SwiperSlide>
        <h5>Top Baseball ApIs</h5>
        <SwiperSlide>
          <img
            src="https://d12sqxodahk3ac.cloudfront.net/collections/e0f8bc5c-4a9c-46a8-8ed0-e25843d35c3f.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d12sqxodahk3ac.cloudfront.net/collections/0ae6904a-5c80-40b1-bb87-db47d664d74b.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://d12sqxodahk3ac.cloudfront.net/collections/1ec62bde-0617-4f22-85ba-e9a19a51b5a4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
