import React from "react";
import traitImg from "../../../assets/trait/trait.jpg";
import { TiTickOutline } from "react-icons/ti";

function Trait() {
  return (
    <div className="w-full my-4 flex justify-center items-center p-4">
      <div className="lg:w-4/5 w-full sm:h-[70vh] h-[150vh] bg-gray-800 rounded-2xl flex sm:flex-row flex-col justify-center items-center">
        <div className="sm:w-1/2 w-full sm:h-full h-1/2 flex flex-col justify-between items-center lg:p-8 p-4">
          <h2 className="w-full flex justify-start items-center text-slate-300 title-font uppercase lg:text-2xl sm:text-xl text-base">
            traits of the watch shop website
          </h2>
          <ul className="w-full flex flex-col justify-start items-start main-font text-white lg:text-xl sm:text-base lg:py-6 sm:py-3">
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              Payment via the Escrow Service
            </li>
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              Commitment to Authenticity
            </li>
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              Money back guarantee in case of dissatisfaction
            </li>
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              Insured shipments
            </li>
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              Variety in products
            </li>
            <li className="flex items-center py-2">
              <TiTickOutline className="text-green-500 lg:text-2xl sm:text-xl text-base" />
              24 hour support
            </li>
          </ul>
          <button className="w-3/4 p-3 main-font text-white lg:text-xl sm:text-base text-sm outline-none border border-slate-300 rounded-lg transition-all duration-75 transform hover:scale-95 hover:text-black hover:bg-slate-300">
            Buy from the store
          </button>
        </div>
        <div className="sm:w-1/2 w-full sm:h-full h-1/2">
          <img
            src={traitImg}
            alt=""
            className="w-full h-full sm:rounded-e-2xl rounded-ee-2xl rounded-es-2xl object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Trait;
