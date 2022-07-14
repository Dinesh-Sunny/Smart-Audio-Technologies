import Image from "next/image";
import React from "react";
import ResponsivePlayer from "../ResponsivePlayer/ResponsivePlayer";

const InAction = () => {
  return (
    <section className=" text-primary py-24 md:py-32 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <h2 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
              SmartMute® in Action
            </h2>
            <p className="mb-32 text-lg md:text-xl text-coolGray-500 font-medium">
              See what people are saying about our unique and effective
              technology
            </p>
            <div className="flex flex-col">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/664562358" />

                <p className="sm:text-2xl mt-8">
                  Visitor testing our flagship Smart Audio ESM-01 Enterprise
                  headset at CES 2022
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/663832142" />
                <p className=" sm:text-2xl mt-8">
                  Soft launch of our flagship Enterprise headset Smart Audio
                  ESM-01 at CES 2022
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className=" sm:hidden w-full md:w-1/2 px-4">
            <div className=" relative mx-auto md:mr-0 max-w-max">
              <img src="/assets/images/smart-mic.svg" alt="Smart Audio Mic" />
=======
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max">              
              <Image width="823" height="768"   src="/assets/images/smart-mic.svg" alt="Smart Audio Mic" />
>>>>>>> 9b3125940695923f27c017724846ff29886c8975
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
