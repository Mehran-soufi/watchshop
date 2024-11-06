import React from "react";
import Hero from "../home/hero/Hero";
import Discount from "./discount/Discount";
import Brands from "./brands/Brands";
import Trait from "./trait/Trait";
import Video from "./video/Video";
import Newsletter from "./newsletter/Newsletter";
import BestBlog from "./bestBlog/BestBlog";

function Home() {
  return (
    <>
      <Hero />
      <Discount />
      <Brands />
      <BestBlog/>
      <Trait />
      <Video/>
      <Newsletter/>
    </>
  );
}

export default Home;
