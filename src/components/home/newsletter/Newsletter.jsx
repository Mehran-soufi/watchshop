import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";

function Newsletter() {
  return (
    <div className="w-full flex justify-center items-center my-8 py-8">
      <div className="lg:w-2/3 sm:w-4/5 w-11/12 relative h-[60vh] bg-gray-800 rounded-2xl flex flex-col justify-center items-center">
        <div className="lg:w-20 sm:w-16 w-12 lg:h-20 sm:h-16 h-12 absolute sm:-top-8 -top-5 z-50 bg-gradient-to-br from-cyan-500 via-violet-500 to-pink-700 rounded-full flex justify-center items-center p-1">
          <div className="w-full h-full rounded-full border-2 border-white flex justify-center items-center">
            <FaRegEnvelope className="text-white lg:text-4xl sm:text-2xl text-xl" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <h2 className="lg:text-6xl sm:text-5xl text-4xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 inline-block text-transparent bg-clip-text">
            Newsletter
          </h2>
        </div>
        <div className="w-full flex justify-center items-center my-8 p-2">
          <p className="text-white lg:text-2xl sm:text-xl text-base">
            Stay up to date with our latest news and products.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            name="emailAddress"
            placeholder="Enter your eamil address"
            className="sm:p-3 p-2 outline-none border-none sm:text-xl text-base rounded-md lg:w-1/3 sm:w-1/2 w-11/12 sm:mx-2 transition-all duration-75 hover:"
          />
          <button className="text-white sm:w-auto w-11/12 sm:mt-0 mt-2 sm:text-xl text-base outline-none border-none rounded-md sm:py-3 sm:px-6 p-2 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-700 mx-2 transition-all duration-75 hover:bg-gradient-to-r hover:from-pink-700 hover:via-violet-500 hover:to-cyan-500">
            subscribe
          </button>
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <p className="text-slate-400 lg:text-xl sm:text-base text-sm">
            Your email safe with us, we dont spam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
