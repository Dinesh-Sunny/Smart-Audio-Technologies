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
            <div className="flex">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <ResponsivePlayer link="https://vimeo.com/413599791" />
                <h3 className="mt-8 mb-2 text-xl font-extrabold">Acoustic cancelling</h3>
                <p>SmartMute® Technology Demo for Enterprise Headset.</p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <ResponsivePlayer link="https://vimeo.com/413599791"/>
                <h3 className="mt-8 mb-2 text-xl font-extrabold">Inside an F1 Race</h3>
                <p>SmartMute® Technology Demo for Helmets in a live environment.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative mx-auto md:mr-0 max-w-max">              
              <Image width="823" height="768"   src="/assets/images/smart-mic.svg" alt="Smart Audio Mic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
