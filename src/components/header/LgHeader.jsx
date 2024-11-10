import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoIosHome, IoIosVideocam, IoMdSearch } from "react-icons/io";
import {
  AiFillProduct,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";

function LgHeader() {
    const navigate = useNavigate()

  return (
    <nav className="w-full flex justify-between items-center">
      <div className="w-1/3 cursor-pointer" onClick={()=>navigate("/")}>
        <img src={logo} alt="logo" className="w-36" />
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <ul className="w-full flex justify-center items-center gap-6">
          <li>
            <Link
              to="/"
              className="outline-none text-slate-600 flex gap-1 justify-center items-center border-b-2 border-transparent transition duration-75 pb-1 hover:text-black hover:border-b-cyan-500 hover:border-b-2"
            >
              <IoIosHome />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="outline-none text-slate-600 flex gap-1 justify-center items-center border-b-2 border-transparent transition duration-75 pb-1 hover:text-black hover:border-b-cyan-500 hover:border-b-2"
            >
              <AiFillProduct />
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="outline-none text-slate-600 flex gap-1 justify-center items-center border-b-2 border-transparent transition duration-75 pb-1 hover:text-black hover:border-b-cyan-500 hover:border-b-2"
            >
              <FaBlog />
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/video"
              className="outline-none text-slate-600 flex gap-1 justify-center items-center border-b-2 border-transparent transition duration-75 pb-1 hover:text-black hover:border-b-cyan-500 hover:border-b-2"
            >
              <IoIosVideocam />
              Video
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <ul className="w-full flex justify-end items-center gap-6">
          <li>
            <button
              className="text-slate-600 text-2xl transition duration-75 hover:text-black hover:scale-105"
              title="search"
            >
              <IoMdSearch />
            </button>
          </li>
          <li>
            <button
              className="text-slate-600 text-2xl transition duration-75 hover:text-black hover:scale-105"
              title="interested"
            >
              <HiOutlineHeart />
            </button>
          </li>
          <li>
            <button
              className="text-slate-600 text-2xl transition duration-75 hover:text-black hover:scale-105"
              title="shopping cart"
            >
              <AiOutlineShopping />
            </button>
          </li>
          <li>
            <button
              className="text-slate-600 text-2xl transition duration-75 hover:text-black hover:scale-105"
              title="user"
            >
              <AiOutlineUser />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LgHeader;
