import React from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";

// image import
import breitling from "../../../assets/brands/breitling.png";
import cartier from "../../../assets/brands/cartier.png";
import hublot from "../../../assets/brands/hublot.png";
import iwc from "../../../assets/brands/iwc.png";
import longines from "../../../assets/brands/longines.png";
import omega from "../../../assets/brands/omega.png";
import rolex from "../../../assets/brands/rolex.png";
import seiko from "../../../assets/brands/seiko.png";
import timex from "../../../assets/brands/timex.png";
import zenith from "../../../assets/brands/zenith.png";

const brand = [
  {
    id: 1,
    name: "breitling",
    img: breitling,
    link: "",
    bgColor: "#ef444460",
  },
  {
    id: 2,
    name: "cartier",
    img: cartier,
    link: "",
    bgColor: "#14b8a660",
  },
  {
    id: 3,
    name: "hublot",
    img: hublot,
    link: "",
    bgColor: "#ef444460",
  },
  {
    id: 4,
    name: "iwc",
    img: iwc,
    link: "",
    bgColor: "#4f46e560",
  },
  {
    id: 5,
    name: "longines",
    img: longines,
    link: "",
    bgColor: "#d946ef60",
  },
  {
    id: 6,
    name: "rolex",
    img: rolex,
    link: "",
    bgColor: "#064e3b60",
  },
  {
    id: 7,
    name: "seiko",
    img: seiko,
    link: "",
    bgColor: "#ca8a0460",
  },
  {
    id: 8,
    name: "timex",
    img: timex,
    link: "",
    bgColor: "#37415160",
  },
  {
    id: 9,
    name: "omega",
    img: omega,
    link: "",
    bgColor: "#73737360",
  },
  {
    id: 10,
    name: "zenith",
    img: zenith,
    link: "",
    bgColor: "#0891b260",
  },
];

function Brands() {
  return (
    <div className="w-full my-8 flex flex-col justify-center items-center select-none">
      <div className="w-full flex justify-center items-center py-4">
        <p className="title-font text-2xl">Store brands</p>
      </div>
      <div className="w-full my-4">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={5}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          mousewheel={false}
          simulateTouch={false}
          freeMode={{
            enabled: true,
            sticky: false,
            momentum: false,
          }}
          modules={[Autoplay, FreeMode, Mousewheel]}
          className="mySwiper w-full flex justify-center items-center"
        >
          {brand.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="my-4 w-full h-full flex justify-center items-center flex-col">
                <img
                  src={item.img}
                  alt={item.name}
                  className="lg:w-28 md:w-24 w-16 lg:h-28 md:h-24 h-16 rounded-lg object-cover md:shadow-md shadow-sm shadow-slate-400"
                  style={{ backgroundColor: item.bgColor }}
                />
                <p className="title-font py-2 lg:text-xl sm:text-base text-sm">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brands;
