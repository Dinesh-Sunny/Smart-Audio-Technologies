import Image from "next/image";
import React from "react";
import ResponsivePlayer from "../ResponsivePlayer/ResponsivePlayer";

const InAction = () => {
  return (
    <section className=" text-primary pt-20  md:py-32 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <h2 className=" text-2xl  mb-8 mobile:text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
              SmartMute® in Action
            </h2>
            <p className="mb-10  md:mb-32 text-lg md:text-xl text-coolGray-500 font-medium">
              See what people are saying about our unique and effective
              technology
            </p>
            <div className="md:flex  md:flex-row  ">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/664562358" />

                <p className="sm:text-2xl md:text-base mt-8">
                  Visitor testing our flagship Smart Audio ESM-01 Enterprise
                  headset at CES 2022
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/663832142" />
                <p className="  sm:text-2xl md:text-base mt-8">
                  Soft launch of our flagship Enterprise headset Smart Audio
                  ESM-01 at CES 2022
                </p>
              </div>
            </div>
          </div>
          <div className="  w-full md:w-1/2 px-4">
            <div className="hidden lg:block  md:display relative mx-auto md:mr-0 max-w-max">
              <img src="/assets/images/smart-mic.svg" alt="Smart Audio Mic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
