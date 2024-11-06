import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import RolexVSBreitling from "../../../assets/video/Rolex-VS-Breitling-Comparison.jpg";
import RolexVSHublot from "../../../assets/video/Rolex-VS-Hublot.webp";
import seiko5sport from "../../../assets/video/seiko5sport.jpg";
import watchStory from "../../../assets/video/watchStory.jpg";

function Video() {
  return (
    <div className="w-full my-4 md:p-4">
      <div className="lg:w-4/5 w-11/12 mx-auto flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center py-4">
          <p className="title-font text-2xl">Latest Videos</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper discount w-full h-[30vh] flex justify-between items-center"
        >
          <SwiperSlide>
            <div className="w-full h-full relative rounded-ss-xl rounded-se-xl flex justify-center items-center cursor-pointer transition-all duration-75 hover:scale-95">
              <img
                src={watchStory}
                alt="Rolex-VS-Breitling-Comparison"
                className="rounded-ss-xl rounded-se-xl w-full h-full object-cover"
              />
              <FaCirclePlay className="absolute text-5xl text-black/70" />
              <p className="w-full p-2 bg-white/20 backdrop-blur-sm absolute bottom-0 text-white main-font flex justify-center items-center">
                When Were Watches Invented?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative rounded-ss-xl rounded-se-xl flex justify-center items-center cursor-pointer transition-all duration-75 hover:scale-95">
              <img
                src={RolexVSBreitling}
                alt="Rolex-VS-Breitling-Comparison"
                className="rounded-ss-xl rounded-se-xl w-full h-full object-cover"
              />
              <FaCirclePlay className="absolute text-5xl text-black/70" />
              <p className="w-full p-2 bg-white/20 backdrop-blur-sm absolute bottom-0 text-white main-font flex justify-center items-center">
                Rolex VS Breitling Full Comparison
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative rounded-ss-xl rounded-se-xl flex justify-center items-center cursor-pointer transition-all duration-75 hover:scale-95">
              <img
                src={seiko5sport}
                alt="Rolex-VS-Breitling-Comparison"
                className="rounded-ss-xl rounded-se-xl w-full h-full object-cover"
              />
              <FaCirclePlay className="absolute text-5xl text-black/70" />
              <p className="w-full p-2 bg-white/20 backdrop-blur-sm absolute bottom-0 text-white main-font flex justify-center items-center">
                Seiko 5star sport review
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative rounded-ss-xl rounded-se-xl flex justify-center items-center cursor-pointer transition-all duration-75 hover:scale-95">
              <img
                src={RolexVSHublot}
                alt="Rolex-VS-Breitling-Comparison"
                className="rounded-ss-xl rounded-se-xl w-full h-full object-cover"
              />
              <FaCirclePlay className="absolute text-5xl text-black/70" />
              <p className="w-full p-2 bg-white/20 backdrop-blur-sm absolute bottom-0 text-white main-font flex justify-center items-center">
                Rolex VS Hublot: Which is Best?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Video;
