import React from 'react'
import {
    FaInstagram,
    FaPinterestP,
    FaXTwitter,
    FaYoutube,
  } from "react-icons/fa6";
  
function Social() {
  return (
    <div className="sm:w-4/5 w-11/12 mx-auto flex sm:flex-row flex-col justify-between items-center">
    <div className="sm:w-1/2 w-full flex sm:justify-start justify-center items-center sm:my-0 my-1">
      <p className="title-font sm:text-xl text-base">
        Follow us on social media
      </p>
    </div>
    <div className="sm:w-1/2 w-full flex sm:justify-end justify-center items-center sm:my-0 my-1">
      <FaXTwitter className="sm:text-xl text-base mx-2 cursor-pointer transition-all duration-75 hover:text-cyan-500" />
      <FaPinterestP className="sm:text-xl text-base mx-2 cursor-pointer transition-all duration-75 hover:text-cyan-500" />
      <FaInstagram className="sm:text-xl text-base mx-2 cursor-pointer transition-all duration-75 hover:text-cyan-500" />
      <FaYoutube className="sm:text-xl text-base ml-2 cursor-pointer transition-all duration-75 hover:text-cyan-500" />
    </div>
  </div>
  )
}

export default Social