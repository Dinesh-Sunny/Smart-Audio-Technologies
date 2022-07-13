import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden conatiner"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="container mx-auto mt-4">
          <div className="flex flex-wrap xl:items-center ml-8 ">
            <div className="w-full md:w-1/3 md:mb-0">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-primary">
                Clear Voice Without The Noise®️
              </h1>
              <p className="mb-8 text-lg md:text-xl text-primary font-medium">
                Powered by SmartMute® our powerful A.I based Self Adaptive Noise
                Elimination technology.
              </p>
              <button className="btn btn-primary ">LEARN MORE</button>
            </div>
            <div className="w-full md:w-2/3">
            
              <Image height='696' width='668' src="/assets/images/smart-audio-headset.png" className="mx-auto" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
