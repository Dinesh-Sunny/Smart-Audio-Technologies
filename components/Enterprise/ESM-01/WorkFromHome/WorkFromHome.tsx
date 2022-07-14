<<<<<<< HEAD
import Link from "next/link";
=======
import Image from "next/image";
>>>>>>> 9b3125940695923f27c017724846ff29886c8975
import React from "react";

const WorkFromHome = () => {
  return (
    <section
      className="relative overflow-hidden text-primary py-8"
      style={{ backgroundColor: "#F9FAFC" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-8 lg:p-16 ">
<<<<<<< HEAD
            <div className=" flex rounded-2xl justify-center sm:w-full ">
              <img
                className="relative  top-3 h-148 transform hover:scale-105 transition ease-in-out duration-500 "
=======
            <div className="flex rounded-2xl justify-center">
              <Image
                width="378" height="600"
                className="relative top-3 h-148 transform hover:scale-105 transition ease-in-out duration-500 "
>>>>>>> 9b3125940695923f27c017724846ff29886c8975
                src="/assets/images/ESM-01/work-from-home.svg"
                alt="Work From Home | Smart Audio Headset"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <div className="lg:max-w-md pt-16">
              <h2 className=" sm:text-center mb-10 font-heading font-bold text-4xl sm:text-5xl leading-loose">
                Working from <br /> home or <br />
                anywhere?
              </h2>
              <p className=" sm:text-3xl sm:text-center font-light mb-8">
                SmartMute® technology can enable clear voice communication
                without the noise even in noisy situations at home or work and
                provide a pleasant experience to the listener making work faster
                and easier than before.
              </p>
              <div className="sm:flex sm:justify-center">
              <Link href="#contact" >
                <button className=" sm:btn-wide  btn btn-primary ">GET YOURS NOW</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFromHome;
