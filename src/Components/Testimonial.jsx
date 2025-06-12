import { Star, StarHalf, User } from "lucide-react";

const Testimonial = () => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} fill="#ff6b00" strokeWidth={0} size={18} />
  ));
  const halfStars = Array.from({ length: 4 }, (_, i) => (
    <Star key={i} fill="#ff6b00" strokeWidth={0} size={18} />
  ));
  return (
    <>
      <section className="py-20 bg-[#222222]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with our
              professional auto repair services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#2A2A2A] p-8 rounded relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-300 mb-6 pt-4">
                The team did an incredible job on my BMW M3's engine rebuild.
                Their attention to detail and expertise were evident in the
                improved performance. The car runs better than ever, and their
                communication throughout the process was excellent.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <User />
                </div>
                <div>
                  <h4 className="font-bold">Christopher Martinez</h4>
                  <p className="text-gray-400 text-sm">BMW M3 Engine Rebuild</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">{stars}</div>
            </div>

            <div
              className="bg-[#2A2A2A] p-8 rounded relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-300 mb-6 pt-4">
                Had transmission issues with my Mercedes on a Sunday evening,
                and their emergency service was a lifesaver. The mechanic
                diagnosed the problem quickly and had my car running smoothly by
                Monday afternoon. Professional service and fair pricing!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <User />
                </div>
                <div>
                  <h4 className="font-bold">Alexandra Chen</h4>
                  <p className="text-gray-400 text-sm">
                    Emergency Transmission Repair
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {halfStars}
                <StarHalf fill="#ff6b00" strokeWidth={0} size={18} />
              </div>
            </div>

            <div
              className="bg-[#2A2A2A] p-8 rounded relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-primary text-4xl absolute -top-5 left-8">
                "
              </div>
              <p className="text-gray-300 mb-6 pt-4">
                I've been bringing my Audi RS5 here for the past year, from
                regular maintenance to performance upgrades. Their team is
                consistently knowledgeable, professional, and transparent with
                pricing. The quality of work is outstanding every time.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <User />
                </div>
                <div>
                  <h4 className="font-bold">Daniel Ramirez</h4>
                  <p className="text-gray-400 text-sm">Regular Client</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">{stars}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
