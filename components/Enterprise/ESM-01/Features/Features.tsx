import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="py-24 text-primary">
      <div className="container px-8 mx-auto">
        <div className="md:max-w-4xl mb-24">
          <h2 className="text-xl  mobilie:text-center mobile:text-4xl    mb-4  leading-tight font-extrabold">
            Amplify  your productivity
          </h2>
        </div>
        <div className="hidden md:flex flex-wrap -mx-4 gap-y-24">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image
                 width="32" height="32"
                src="/assets/images/ESM-01/suitability.svg"
                className="mb-8"
              />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Suitable for any smart device or enterprise platform
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image width="32" height="32" src="/assets/images/ESM-01/accuracy.svg" className="mb-8" />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Automatic transcription with high accuracy
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image
                width="32"
                height="32"
                src="/assets/images/ESM-01/noise-estimation.svg"
                className="mb-8"
              />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Proprietary A.I. based Self Adaptive Noise Elimination.
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image
               width="32"
               height="32"
                src="/assets/images/headset.svg"
                className="mb-8"
              />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Comfortable on ear cushion
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image
                width="40" 
                height="32"
                src="/assets/images/ESM-01/battery.svg"
                className="mb-8"
              />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Bluetooth playback upto 25 hrs or wired mode
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <Image
                width="32"
                height="32"
                src="/assets/images/ESM-01/boom-mic.svg"
                className="mb-8"
              />
              <h3 className="mb-4 text-xl md:text-2xl leading-tight">
                Multi points connection & rotating boom mic
              </h3>
            </div>
          </div>
        </div>






 {/*the below jsx for mobile phones it will be hidden in larger displays  */}






        <div className="md:hidden   flex flex-wrap -mx-4 gap-y-24">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <img
                src="/assets/images/ESM-01/suitability.svg"
                className="mb-8 sm:ml-72"
              />
              <h3 className=" sm:text-4xl sm:text-center mb-4 text-xl md:text-2xl leading-tight">
                Suitable for any smart device or enterprise platform
              </h3>
            </div>
          </div>
       
       
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="h-full">
              <img
                src="/assets/images/headset.svg"
                className="mb-8 sm:ml-72 "
              />
              <h3 className="sm:text-4xl sm:text-center  mb-4 text-xl md:text-2xl leading-tight">
                Comfortable on ear cushion
              </h3>
            </div>
          </div>
          <img  className="mx-auto pt-10"
            src="/assets/images/mobile-navigaion-icon.svg"
            alt="mobile navigation"
          />
        
        </div>




      </div>
    </section>
  );
};

export default Features;
