import React from "react";
import choseImage from "../assets/Chose-Image.jpg";
import { Bolt, Headset, ShieldCheck, Wrench } from "lucide-react";

const WhyChoseUs = () => {
  return (
    <>
      <section id="about" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src= {choseImage}
                alt="Professional auto mechanic"
                className="rounded-lg shadow-2xl object-cover object-top w-full h-[500px]"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why <span className="text-primary">Choose</span> Us
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-300 mb-8">
                With over 20 years of experience, our ASE-certified master
                technicians deliver exceptional automotive repair services using
                state-of-the-art diagnostic equipment and genuine parts.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mr-4">
                   <Wrench color="#ff6b00"/>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ASE Certified</h3>
                    <p className="text-gray-400 text-sm">
                      Master technicians with advanced training
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mr-4">
                   <Bolt color="#ff6b00"/>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Advanced Diagnostics</h3>
                    <p className="text-gray-400 text-sm">
                      Latest technology for precise repairs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mr-4">
                  <ShieldCheck color="#ff6b00"/>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Warranty Backed</h3>
                    <p className="text-gray-400 text-sm">
                      12-month/12,000-mile guarantee
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mr-4">
                    <Headset color="#ff6b00"/>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-400 text-sm">
                      Emergency roadside assistance
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">99%</p>
                  <p className="text-gray-400 text-sm">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">25K+</p>
                  <p className="text-gray-400 text-sm">Vehicles Serviced</p>
                </div>
              </div>
              <a
                href="#contact"
                className="bg-[#ff6b00] border border-transparent text-white px-8 py-3 rounded-xl whitespace-nowrap hover:bg-[#ff6a001e] hover:border-[#ff6b00] transition-all font-medium inline-block"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoseUs;
