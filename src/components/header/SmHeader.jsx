import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

import { IoIosVideocam, IoMdSearch } from "react-icons/io";
import { AiFillProduct, AiOutlineShopping } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCloseSharp, IoHomeOutline, IoMenu } from "react-icons/io5";

function SmHeader() {
  const navigate = useNavigate();
  const [menuHam, setMenuHam] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-start items-center cursor-pointer p-2">
        <img
          src={logo}
          alt="logo"
          className="w-28"
          onClick={() => navigate("/")}
        />
      </nav>
      <menu className="fixed bottom-0 z-[1000] w-screen bg-black/40 backdrop-blur-sm p-2">
        <ul className="flex justify-between items-center w-full">
          <li onClick={() => navigate("/")}>
            <button className="outline-none border-none flex flex-col justify-center items-center px-2 text-slate-300">
              Home
              <IoHomeOutline />
            </button>
          </li>
          <li>
            <button className="outline-none border-none flex flex-col justify-center items-center px-2 text-slate-300">
              cart
              <AiOutlineShopping />
            </button>
          </li>
          <li>
            <button className="outline-none border-none flex flex-col justify-center items-center px-2 text-slate-300">
              search
              <IoMdSearch />
            </button>
          </li>
          <li>
            <button className="outline-none border-none flex flex-col justify-center items-center px-2 text-slate-300">
              interest
              <HiOutlineHeart />
            </button>
          </li>
          <li>
            <button
              onClick={() => setMenuHam(true)}
              className="outline-none border-none flex flex-col justify-center items-center px-2 text-slate-300"
            >
              menu
              <IoMenu />
            </button>
          </li>
        </ul>
      </menu>
      <AnimatePresence>
        {menuHam && (
          <motion.menu
            key="menu"
            initial={{
              x: "100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: easeInOut,
              },
            }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: {
                duration: 0.7,
                ease: easeInOut,
              },
            }}
            className="fixed bottom-0 z-[100000] w-screen bg-slate-200 p-2"
          >
            <ul className="flex justify-around items-center w-full">
              <li className="flex flex-col justify-center items-center">
                <Link
                  to="/shop"
                  className="outline-none border-none text-slate-600 flex flex-col justify-center items-center px-2"
                >
                  <AiFillProduct />
                  Shop
                </Link>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Link
                  to="/blog"
                  className="outline-none border-none text-slate-600 flex flex-col justify-center items-center px-2"
                >
                  <FaBlog />
                  Blog
                </Link>
              </li>
              <li className="flex flex-col justify-center items-center">
                <Link
                  to="/video"
                  className="outline-none border-none text-slate-600 flex flex-col justify-center items-center px-2"
                >
                  <IoIosVideocam />
                  Video
                </Link>
              </li>
              <li className="flex flex-col justify-center items-center">
                <button
                  onClick={() => setMenuHam(false)}
                  className="outline-none border-none text-slate-600 flex flex-col justify-center items-center px-2"
                >
                  <IoCloseSharp />
                  close
                </button>
              </li>
            </ul>
          </motion.menu>
        )}
      </AnimatePresence>
    </>
  );
}

export default SmHeader;
