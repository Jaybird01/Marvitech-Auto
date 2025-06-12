import { ArrowRight, Wrench, Bolt, Gauge } from "lucide-react";
import React from "react";

const OurServices = () => {
  return (
    <>
      <section id="services" className="py-20 bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Auto Services</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive automotive repair and maintenance
              services using state-of-the-art equipment and certified
              technicians.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              className="service-card bg-[#2A2A2A] p-8 rounded transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Service Card 1 */}

              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity  rounded-full mb-6">
                <Wrench color="#ff6b00" />
              </div>
              <h3 className="text-lg font-bold mb-4">
                Engine Diagnostics & Repair
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Comprehensive engine diagnostics and repair services using
                advanced equipment. From tune-ups to complete rebuilds, we keep
                your engine running at peak performance.
              </p>
              <a
                href="#"
                className="text-primary flex items-center gap-2 hover:underline transition-all"
              >
                Learn More <ArrowRight size={16} className="mt-px md:mt-1" />
              </a>
            </div>
            {/* Service Card 2 */}

            <div
              className="service-card bg-[#2A2A2A] p-8 rounded transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mb-6">
                <Bolt color="#ff6b00" />
              </div>
              <h3 className="text-lg font-bold mb-4">Transmission Service</h3>
              <p className="text-sm text-gray-400 mb-6">
                Expert transmission repair and maintenance for all vehicle
                makes. We handle everything from fluid changes to complete
                transmission rebuilds and replacements.
              </p>
              <a
                href="#"
                className="text-primary flex items-center gap-2 hover:underline "
              >
                Learn More
                <ArrowRight size={16} className="mt-px md:mt-1" />
              </a>
            </div>
            {/* Service Card 3 */}

            <div
              className="service-card bg-[#2A2A2A] p-8 rounded transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mb-6">
                <Gauge color="#ff6b00" />
              </div>
              <h3 className=" text-lg font-bold mb-4">Brake System Service</h3>
              <p className="text-sm text-gray-400 mb-6">
                Complete brake system inspection and repair services. From pad
                replacement to rotor resurfacing, we ensure your vehicle's
                stopping power and safety.
              </p>
              <a
                href="#"
                className="text-primary flex items-center gap-2 hover:underline"
              >
                Learn More <ArrowRight size={16} className="mt-px md:mt-1" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="bg-[#ff6b00] border border-transparent text-white px-8 py-3 rounded-xl whitespace-nowrap hover:bg-[#ff6a001e] hover:border-[#ff6b00] transition-all font-medium"
            >
              See All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
