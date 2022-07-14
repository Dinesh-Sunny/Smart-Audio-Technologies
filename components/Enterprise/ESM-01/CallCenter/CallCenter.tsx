<<<<<<< HEAD
import Link from "next/link";
=======
import Image from "next/image";
>>>>>>> 9b3125940695923f27c017724846ff29886c8975
import React from "react";

const CallCenter = () => {
  return (
    <section className="relative overflow-hidden text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-32 text-right sm:order-last">
            <div className="lg:max-w-md pt-16">
              <h2 className=" sm:text-center mb-10 font-heading font-bold text-4xl sm:text-5xl leading-loose">
                Operating a <br /> call center?
              </h2>
              <p className="sm:text-center sm:text-3xl  font-light mb-8">
                Are you an an online merchant, telemarketing company, help desk
                assistant, mail order organisation and polling services?
                <br />
                <br />
                Get yourself the world’s best noise elimination headset so you
                can hear and be heard clearly.
              </p>
              <div className="sm:flex sm:justify-center" >
              <Link href="#contact">
              <button className=" sm:btn-wide btn btn-primary ">SPEAK TO US</button>
              </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-16 ">
            <div className="flex rounded-2xl justify-center">
              <img
                width="378"
                height="600"
                className="relative top-3 h-148 transform hover:scale-105 transition ease-in-out duration-500 "
                src="/assets/images/ESM-01/call-center.svg"
                alt="Call Center | Smart Audio Headset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallCenter;
