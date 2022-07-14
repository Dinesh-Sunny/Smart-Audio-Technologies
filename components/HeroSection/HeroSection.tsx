import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden conatiner mainRightWaveFormBg">
      <div>
        <div className="container mx-auto mt-4">
          <div className="flex flex-wrap xl:items-center ml-8">
            <div className="w-full md:w-1/3 md:mb-0  order-last">
              <h1 className="sm:text-7xl sm:text-center mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-primary">
                Clear Voice Without The Noise®️
              </h1>
              <p className=" sm:text-4xl sm:text-center  mb-8 text-lg md:text-xl text-primary font-medium">
                Powered by SmartMute® our powerful A.I. based Self Adaptive
                Noise Elimination technology.
              </p>
              <Link href="/enterprise/esm-01-headset">
                <button className="btn btn-primary btn-wide sm:ml-36 ">LEARN MORE</button>
              </Link>
            </div>
            <div className="w-full md:w-2/3">
              <img
                src="/assets/images/smart-audio-headset.svg"
                className="mx-auto z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
