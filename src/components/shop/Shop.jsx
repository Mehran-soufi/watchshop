import React, { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import womanWatch from "../../assets/Banner/woman.webp";
import menWatch from "../../assets/Banner/men.webp";
import allWatch from "../../assets/Banner/img1.jpg";

function Shop() {
  const navigate = useNavigate();
  const [visibleItem, setVisibleItem] = useState(null);

  const handleNavigate = (path, item) => {
    setVisibleItem(item);
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <div className="w-full h-screen flex sm:flex-row flex-col justify-around items-center pt-5">
      <AnimatePresence>
        {visibleItem !== "womanWatch" && (
          <motion.div
            key="womanWatch"
            exit={{
              width: "100%",
              height: "100%",
              opacity: 0.1,
              transition: {
                ease: easeInOut,
                duration: 0.3,
              },
            }}
            className="lg:w-1/4 sm:w-[30%] w-11/12 sm:h-[40vh] h-[25vh] flex justify-center items-center rounded-md cursor-pointer transition-75 hover:scale-95"
            style={{
              backgroundImage: `url(${womanWatch})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            onClick={() => handleNavigate("/shop/products", "womanWatch")}
          >
            <p className="text-white title-font font-bold flex justify-center items-center lg:text-3xl sm:text-2xl text-lg w-full h-full bg-black/20 transition-all duration-75 hover:backdrop-blur-sm hover:bg-gradient-to-r from-cyan-500 hover:via-violet-500 hover:to-pink-700 hover:text-transparent hover:bg-clip-text">
              {" "}
              Woman Watchs
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visibleItem !== "allWatch" && (
          <motion.div
            key="allWatch"
            exit={{
              width: "100%",
              height: "100%",
              opacity: 0.1,
              transition: {
                ease: easeInOut,
                duration: 0.3,
              },
            }}
            className="lg:w-1/4 sm:w-[30%] w-11/12 sm:h-[40vh] h-[25vh] flex justify-center items-center rounded-md cursor-pointer transition duration-75 hover:scale-95"
            style={{
              backgroundImage: `url(${allWatch})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            onClick={() => handleNavigate("/shop/products", "allWatch")}
          >
            <p className="text-white title-font font-bold flex justify-center items-center lg:text-3xl sm:text-2xl text-lg w-full h-full bg-black/20 transition-all duration-75 hover:backdrop-blur-sm hover:bg-gradient-to-r from-cyan-500 hover:via-violet-500 hover:to-pink-700 hover:text-transparent hover:bg-clip-text">
              All Watchs
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visibleItem !== "menWatch" && (
          <motion.div
            key="menWatch"
            exit={{
              width: "100%",
              height: "100%",
              opacity: 0.1,
              transition: {
                ease: easeInOut,
                duration: 0.3,
              },
            }}
            className="lg:w-1/4 sm:w-[30%] w-11/12 sm:h-[40vh] h-[25vh] flex justify-center items-center rounded-md cursor-pointer transition duration-75 hover:scale-95"
            style={{
              backgroundImage: `url(${menWatch})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            onClick={() => handleNavigate("/shop/products", "menWatch")}
          >
            <p className="text-white title-font font-bold flex justify-center items-center lg:text-3xl sm:text-2xl text-lg w-full h-full bg-black/20 transition-all duration-75 hover:backdrop-blur-sm hover:bg-gradient-to-r from-cyan-500 hover:via-violet-500 hover:to-pink-700 hover:text-transparent hover:bg-clip-text">
              Men Watchs
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Shop;
