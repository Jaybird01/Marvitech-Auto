import {
  AlarmClockCheck,
  Medal,
  ShieldCheck,
  ThumbsUp,
  Wallet,
} from "lucide-react";
import React from "react";

const Badges = () => {
  return (
    <>
      {/* Remove the div after creation of GetInTouch */}
      <div className="bg-[#1A1A1A] py-12"></div>
      <section className="bg-[#222222] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mx-auto mb-2">
                <ShieldCheck color="#ff6b00" size={22} />
              </div>
              <p className="text-gray-300 font-bold">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mx-auto mb-2">
                <Medal color="#ff6b00" size={22} />
              </div>
              <p className="text-gray-300 font-bold">15+ Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mx-auto mb-2">
                <ThumbsUp color="#ff6b00" size={22} />
              </div>
              <p className="text-gray-300 font-bold">98% Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mx-auto mb-2">
                <AlarmClockCheck color="#ff6b00" size={22} />
              </div>
              <p className="text-gray-300 font-bold">24/7 Emergency Service</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-opacity rounded-full mx-auto mb-2">
                <Wallet color="#ff6b00" size={22} />
              </div>
              <p className="text-gray-300 font-bold">Transparent Pricing</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Badges;
