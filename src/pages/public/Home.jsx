import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import SwiperSlides from "../../pages/public/components/home/SwiperSlides";
import HomeHero from "./components/home/HomeHero";
import SpecialtyMarquee from "./components/home/SpecialtyMarquee";
import ServicesHome from "./components/home/ServicesHome";
import Steps from "./components/home/Steps";

const Home = () => {
  return (
    <PublicLayout>
      <HomeHero />
      <SpecialtyMarquee />
      <SwiperSlides />
      <Steps/>
      <ServicesHome/>
    </PublicLayout>
  );
};

export default Home;
