import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import OurServices from "../Components/OurServices";
import WhyChoseUs from "../Components/WhyChoseUs";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Badges from "../Components/Badges";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <OurServices />
      <WhyChoseUs />
      <Testimonial />
      <Badges />
      <Footer />
    </>
  );
};

export default HomePage;
