import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles1.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="swiper-2">
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
            <img
              src="https://rapidapi-prod-apis.s3.amazonaws.com/adb8da6c-7796-432c-9985-690f3a4ac433.png"
              alt=""
            />
            <h3>Text Translator</h3>
            <p>
              Translate text to 100+ languages Fast processing, cost saving .
              Free up to 100,000 characters per month
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://rapidapi-prod-apis.s3.amazonaws.com/14/f5b39f8b2b47768f37d10acaf77442/7a61c9b1f0b85fcc7a6ea455d202ad35.png"
              alt=""
            />
            <h3>API Basketball</h3>
            <p>
              +400 Basketball Leagues & Cups with Livescore, Odds, Bookmakers,
              Statistics, Standings, Historical Data ,
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rapidapi-prod-apis.s3.amazonaws.com/a98eedfc-a3a7-4834-9d6d-364adf338221.png"
              alt=""
            />
            <h3>Local Business Data</h3>
            <p>
              Extremely Comprehensive Local Business / Place Data from Google
              Maps - Reviews, Photos, Emails,
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://rapidapi-prod-apis.s3.amazonaws.com/1ff7bd50-3297-4296-be2c-8c9623985696.png"
              alt=""
            />
            <h3>MoviesDatabase</h3>
            <p>
              MoviesDatabase provides complete and updated data for over 9
              million titles ( movies, series and episodes) and 11 million ,
            </p>
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
