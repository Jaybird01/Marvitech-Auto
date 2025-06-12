import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero-section min-h-screen flex items-center pt-10 md:pt-20">
        <div className="container mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
                Expert Auto{" "}
                <span className="text-primary">Repair Services</span>
              </h1>
              <div className="w-24 md:w-48 h-1 bg-primary mb-4"> </div>
              <p className="text-sm mb-8 text-gray-300 max-w-2xl leading-7 font-medium">
                We provide professional auto repair and maintenance services
                with certified mechanics who deliver quality workmanship for all
                your vehicle needs.
              </p>
              <div className="flex justify-between gap-5 md:gap-12 mb-8">
                <div className="text-center">
                  <p className=" text-3xl md:text-4xl font-bold text-primary">50K+</p>
                  <p className="text-base md:text-lg text-gray-400">Cars Serviced</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">25K+</p>
                  <p className="text-base md:text-lg text-gray-400">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                  <p className="text-base md:text-lg text-gray-400">Expert Mechanics</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 ">
                <a
                  href="#contact"
                  className="bg-[#ff6b00] text-white px-9 py-3 md:px-10 md:py-4 text-center rounded-xl whitespace-nowrap hover:bg-[#ff6a00b2] transition-all font-medium"
                >
                  Get Service
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-3 text-center rounded-xl whitespace-nowrap hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
