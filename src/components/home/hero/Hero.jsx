import React from "react";

import hero from "../../../assets/hero/hero.jpg";
function Hero() {
  return (
    <div
      className="w-full h-screen -z-10"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-black/60 opacity-90 title-font select-none">
        <div className="w-4/5 mx-auto h-full flex flex-col justify-center items-center">
          <div className="lg:text-8xl sm:text-6xl text-4xl w-full flex justify-start items-center">
            <p className="text-white pr-4">Luxury </p>
            <p className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 inline-block text-transparent bg-clip-text">
              Watches
            </p>
          </div>
          <div className="w-full flex justify-center items-center my-8">
            <span className="lg:text-7xl sm:text-5xl text-3xl text-amber-400">
              for
            </span>
          </div>
          <div className="lg:text-8xl sm:text-6xl text-4xl w-full flex justify-end items-center">
            <p className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 inline-block text-transparent bg-clip-text">
              Special
            </p>
            <p className="text-white pl-4">Person</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
