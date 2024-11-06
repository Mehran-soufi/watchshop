import React from "react";
import UP from "./UP";
import Social from "./Social";
import App from "./App";

function Footer() {
  return (
    <footer className="w-full relative border-t border-slate-300 p-4 flex flex-col justify-center items-center">
      <UP />
      <Social />
      <App/>
    </footer>
  );
}

export default Footer;
