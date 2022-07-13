import Image from "next/image";
import React from "react";

const WorkFromHome = () => {
  return (
    <section className="relative overflow-hidden text-primary py-8"  style={{ backgroundColor: "#F9FAFC" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-8 lg:p-16 ">
            <div className="flex rounded-2xl justify-center">
              <Image
                width="378" height="600"
                className="relative top-3 h-148 transform hover:scale-105 transition ease-in-out duration-500 "
                src="/assets/images/ESM-01/work-from-home.svg"
                alt="Work From Home | Smart Audio Headset"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <div className="lg:max-w-md pt-16">
              <h2 className="mb-10 font-heading font-bold text-4xl sm:text-5xl leading-loose">
              Working from <br /> home or <br />anywhere? 
              </h2>
              <p className="font-light mb-8">
              SmartMute® technology can enable clear voice communication without the noise even in noisy situations at home or work and provide a pleasant experience to the listener making work faster and easier than before. 
              </p>

              <button className="btn btn-primary ">GET YOURS NOW</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFromHome;
