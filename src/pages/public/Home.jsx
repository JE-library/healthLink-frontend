import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import SwiperSlides from "../../component/public/SwiperSlides";
import HomeHero from "./components/home/HomeHero";

const Home = () => {
  return (
    <PublicLayout>
      <HomeHero />
      <SwiperSlides />
    </PublicLayout>
  );
};

export default Home;
