import React, { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/logo/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full z-50 py-4 transition-all duration-300 ease-in-out select-none overflow-x-hidden ${
        isScrolled
          ? "fixed top-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-sm shadow-gray-300"
          : "absolute"
      }`}
      style={{
        transform: isScrolled ? "translateY(0)" : `translateY(-${scrollY}px)`,
        transitionProperty:
          "background-color, backdrop-filter, box-shadow, transform",
      }}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center main-font">
        <div className="w-1/3 flex justify-start cursor-pointer">
          <img src={logo} alt="logo" className="w-44" />
        </div>
        <div className="w-1/3 hidden md:flex justify-center items-center">
          <ul className="flex justify-center items-center">
            <li className="mx-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
              Home
            </li>
            <li className="mx-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
              Shop
            </li>
            <li className="mx-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
              Blog
            </li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <ul className="hidden md:flex justify-end items-center">
            <li className="mx-2 relative text-slate-500 text-3xl cursor-pointer transition duration-75 hover:text-black">
              <AiOutlineShoppingCart />
            </li>
            <li className="mx-2 text-slate-500 text-3xl cursor-pointer transition duration-75 hover:text-black">
              <AiOutlineUser />
            </li>
            <li className="mx-2 text-slate-500 text-3xl cursor-pointer transition duration-75 hover:text-black">
              <AiOutlineSearch />
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-3xl text-slate-500">
              {isMenuOpen ? (
                <AiOutlineClose className="sm:text-2xl text-xl" />
              ) : (
                <AiOutlineMenu className="sm:text-2xl text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="md:hidden"
          >
            <ul className="w-full flex justify-center items-center">
              <li className="my-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
                Home
              </li>
              <li className="my-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
                Shop
              </li>
              <li className="my-2 cursor-pointer py-2 px-3 text-fuchsia-600 rounded-md transition duration-75 hover:text-white hover:bg-fuchsia-600 font-semibold">
                Blog
              </li>
            </ul>
            <ul className="w-full flex justify-center items-center">
              <li className="my-2 cursor-pointer py-2 px-3 text-slate-500 sm:text-3xl text-2xl transition duration-75 hover:text-black">
                <AiOutlineShoppingCart />
              </li>
              <li className="my-2 cursor-pointer py-2 px-3 text-slate-500 sm:text-3xl text-2xl transition duration-75 hover:text-black">
                <AiOutlineUser />
              </li>
              <li className="my-2 cursor-pointer py-2 px-3 text-slate-500 sm:text-3xl text-2xl transition duration-75 hover:text-black">
                <AiOutlineSearch />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
