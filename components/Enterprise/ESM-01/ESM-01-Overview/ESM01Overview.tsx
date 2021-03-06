import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Image from "next/image"

const ESM01Overview = () => {
  return (
    <section
      className="relative overflow-hidden text-primary py-8"
      style={{ backgroundColor: "#EEEFF4" }}
    >
      <div className="container mx-auto px-2 mobile:px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2">
            <div className="flex">
              <img
                width="942" height="838"
                className="relative top-3 transform hover:scale-105 transition ease-in-out duration-500"
                src="/assets/images/ESM-01/headset-overview.svg"
                alt="ESM 01 Overview| Smart Audio Headset"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <div className="lg:max-w-md pt-16">
              <h2 className=" text-xl pt-5 text-center mobile:text-4xl sm:text-center sm:font-bold  mb-10 font-heading font-bold sm:text-5xl leading-loose">
                It’s time to enjoy
              </h2>
              <div className="mb-8 flex">
                <img
                  width="56" 
                  height="56"
                  src="/assets/images/ESM-01/bullet-point-icon.svg"
                  className="mr-2"
                />
                <p className=" font-medium text-sm mobile:text-xl">
                  Clear crisp conversations resulting in shorter talk duration.
                </p>
              </div>
              <div className="mb-8 flex">
                <img
                  width="56" 
                  height="56"
                  src="/assets/images/ESM-01/bullet-point-icon.svg"
                  className="mr-2"
                />
                <p className="font-medium text-sm mobile:text-xl">
                  Automatic notes taking resulting in time saving.
                </p>
              </div>
              <div className="mb-8 flex">
                <img
                  width="56" 
                  height="56"
                  src="/assets/images/ESM-01/bullet-point-icon.svg"
                  className="mr-2"
                />
                <p className="font-medium text-sm mobile:text-xl">
                  No need of greater distance or divider between call center
                  agents.
                </p>
              </div>
              <div className="mb-8 flex">
                <img
                  width="56" 
                  height="56"
                  src="/assets/images/ESM-01/bullet-point-icon.svg"
                  className="mr-2"
                />
                <p className="font-medium text-sm mobile:text-xl">
                  No need for passive noise cancelling investment such as
                  soundproofing on walls and cieling.
                </p>
              </div>
              <div className="hidden  md:flex justify-start  " >
              <Link href="#contact">
                <button className="   btn btn-primary ">GET YOURS NOW</button>
              </Link>
              </div>
              <div className="md:hidden pb-5 flex justify-center  " >
              <Link href="#contact">
                <button className=" btn-wide    btn btn-primary ">GET YOURS NOW</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESM01Overview;
