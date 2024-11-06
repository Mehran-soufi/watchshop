import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logoHand from "../../../assets/logo/logo-hand.png";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import { Link } from "react-router-dom";
// import required modules
import { Navigation } from "swiper/modules";

function Discount() {
  return (
    <div className="discount w-full flex justify-center items-center h-[45vh] my-10">
      <div className="w-4/5 h-full mx-auto rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 py-4">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={3}
          breakpoints={{
            640: {
              slidesPerView: 1.8,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full my-2 flex flex-col justify-center items-center title-font text-white lg:text-4xl text-3xl text-justify">
                <p className="">Amazing</p>
                <p>offers</p>
              </div>
              <div className="w-full my-2 flex justify-center items-center lg:text-xl">
                <p className="bg-white text-black rounded-md p-1">05</p>
                <span className="text-white mx-1">:</span>
                <p className="bg-white text-black rounded-md p-1">26</p>
                <span className="text-white mx-1">:</span>
                <p className="bg-white text-black rounded-md p-1">15</p>
              </div>
              <div className="w-full flex justify-center items-center">
                <img src={logoHand} alt="logo" className="w-20" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="border-none outline-none">
              <div className="w-full h-full bg-white flex flex-col justify-center items-center">
                <div className="w-full h-3/5">
                  <img
                    src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_2440/v1/catalogue/2024/upright-c/m126613lb-0002"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-2/5 flex flex-col justify-center items-center">
                  <h2 className="text-slate-600">rolex submariner</h2>
                  <p className="w-full px-4 py-2 flex justify-between items-center">
                    <span className="text-black price-font">2561$</span>
                    <small className="bg-red-600 text-white rounded-md px-1">
                      11%
                    </small>
                  </p>
                  <s className="price-font text-slate-400 w-full px-4 flex justify-start">
                    2761$
                  </s>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white">Hello world</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Discount;
