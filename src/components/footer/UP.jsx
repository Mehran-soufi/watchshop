import React from 'react'
import { FaChevronUp } from 'react-icons/fa6';

function UP() {
    const topUpHandler = () => {
        [window.scrollTo({ top: 0 })];
      };
  return (
    <div className="absolute lg:-top-8 -top-7 lg:w-16 sm:w-14 w-12 lg:h-16 sm:h-14 h-12 rounded-full bg-white border border-slate-300 flex justify-center items-center">
        <button 
        onClick={topUpHandler}
        className="w-full h-full border-none outline-none flex justify-center items-center">
          <FaChevronUp className="lg:text-2xl text-base" />
        </button>
      </div>
  )
}

export default UP