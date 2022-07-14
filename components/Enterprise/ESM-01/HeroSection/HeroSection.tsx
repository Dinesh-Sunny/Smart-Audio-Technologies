import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
<<<<<<< HEAD
import Link from "next/link";
=======
import Image from "next/image";
>>>>>>> 9b3125940695923f27c017724846ff29886c8975

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden text-primary leftWaveFormBg bg-no-repeat ">
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
<<<<<<< HEAD
              <button className="md:hidden btn btn-outline btn-primary mb-8  ">
                Just Launched 🚀
              </button>
                <div className="  relative overflow-hidden rounded-7xl">
                  <img src="/assets/images/ESM-01/headset-image.svg" />
=======
                <div className="relative overflow-hidden rounded-7xl">
                  <Image width="682" height="700" src="/assets/images/ESM-01/headset-image.svg" />
>>>>>>> 9b3125940695923f27c017724846ff29886c8975
                </div>
                
                  <img className="sm:w-full " src="/assets/images/ESM-01/mobile-headphone-screenshots.svg" />
               
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-32 mb-16 md:mb-0 ">
              <button className="hidden  md:btn btn-outline btn-primary mb-8  ">
                Just Launched 🚀
              </button>

              <h1 className=" sm:text-center mb-4 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                ESM-01 <br /> Enterprise <br /> Headphones
              </h1>
              <p className=" sm:text-center mt-2 font-light md:text-2xl">
               for wired & wireless use
              </p>
              <p className="sm:text-center my-12 font-light md:text-4xl">
                Clear Voice Without <br /> The Noise®️
              </p>
              <div className="flex flex-wrap">
                {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <button className="btn btn-lg btn-primary">BUY NOW</button>
                </div> */}
                <div className="  w-full md:w-auto py-1 md:py-0">
                  <Link href="#contact">
                  <button className="btn btn-outline btn-primary btn-lg gap-2">
                    CONTACT SALES
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
