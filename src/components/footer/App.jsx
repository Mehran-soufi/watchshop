import React from "react";

import appStore from "../../assets/apps/app-store.png";
import googleplay from "../../assets/apps/googleplay.png";

function App() {
  return (
    <div className="sm:w-4/5 w-11/12 p-4 my-8 mx-auto flex sm:flex-row flex-col justify-between items-center bg-gray-800 rounded-md">
      <div className="sm:w-1/2 w-full flex sm:justify-start justify-center items-center">
        <p className="text-white title-font lg:text-xl text-base">
          watch ahop apps
        </p>
      </div>
      <div className="sm:w-1/2 w-full flex justify-center items-center sm:my-0 my-2">
        <ul className="flex items-center sm:justify-end justify-center">
          <li className="lg:w-1/4 sm:w-1/3 w-1/2 cursor-pointer ml-2">
            <img src={appStore} alt="" />
          </li>
          <li className="lg:w-1/4 sm:w-1/3 w-1/2 cursor-pointer">
            <img src={googleplay} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
