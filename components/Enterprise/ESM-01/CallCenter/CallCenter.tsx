import Link from "next/link";
import React from "react";

const CallCenter = () => {
  return (
    <section className="relative overflow-hidden text-primary py-8">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 p-32 text-right">
            <div className="lg:max-w-md pt-16">
              <h2 className="mb-10 font-heading font-bold text-4xl sm:text-5xl leading-loose">
                Operating a <br /> call center?
              </h2>
              <p className="font-light mb-8">
                Are you an an online merchant, telemarketing company, help desk
                assistant, mail order organisation and polling services?
                <br />
                <br />
                Get yourself the world’s best noise elimination headset so you
                can hear and be heard clearly.
              </p>
              <Link href="#contact">
              <button className="btn btn-primary ">SPEAK TO US</button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-16 ">
            <div className="flex rounded-2xl justify-center">
              <img
                className="relative top-3 h-148 transform hover:scale-105 transition ease-in-out duration-500 "
                src="/assets/images/ESM-01/call-center.svg"
                alt="Call Center | Smart Audio Headset"
              />
            </div>
          </div>
        </div>


{/*the below jsx for mobile phones it will be hidden in larger displays  */}



        <div className="md:hidden  flex flex-wrap -m-6">
          <div className="text-center order-last">
            <div className="lg:max-w-md pt-16 ">
              <h2 className="mb-10 font-heading font-bold text-4xl  ">
                Operating a  call center?
              </h2>
              <p className="font-light mb-8">
                Are you an an online merchant, telemarketing company, help desk
                assistant, mail order organisation and polling services?
                <br />
                <br />
                Get yourself the world’s best noise elimination headset so you
                can hear and be heard clearly.
              </p>
              <Link href="#contact">
              <button className="btn btn-primary ">SPEAK TO US</button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-16 ">
            <div className="flex rounded-2xl justify-center">
              <img
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
