import React, { useEffect, useState } from "react";
import LgHeader from "./LgHeader";
import SmHeader from "./SmHeader";

function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full sm:p-4 p-0 z-[10000] sticky top-0 bg-white shadow-sm shadow-slate-300">
      {isLargeScreen ? <LgHeader /> : <SmHeader />}
    </header>
  );
}

export default Header;
