import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const ESM01Features = () => {
  return (
    <section className="relative overflow-hidden  bg-primary text-white mobile:p-10  md:p-32 ">
      <div className="container   mx-auto px-10   py-10  md:py-16  md:px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 text-center">
            <div>
              <h2 className="pt-10 mobile:pt-10  text-xl mobile:text-center  md:text-2xl mb-8">ESM-01 Headset</h2>
              <img
                className="relative top-3 transform hover:scale-105 transition ease-in-out duration-500"
                src="/assets/images/ESM-01/headset-overview.svg"
                alt="ESM 01 Overview| Smart Audio Headset"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-md ">
              <h2 className=" text-center md:text-left mb-10 font-heading font-bold mobile:text-2xl  md:text-2xl leading-loose">
                Specifications
              </h2>
              <div className="flex pb-10 gap-x-10 mobile:gap-x-16">
                <div className="w-full lg:w-1/2 ">
                  <div className="mb-4">
                    <p className="font-bold mb-2">BT Version</p>
                    <p className="text-sm font-light mb-2">Bluetooth V5.0</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className=" font-bold mb-2">BT Name</p>
                    <p className="text-tiny  mobile:text-sm font-light mb-2">
                      Smart Audio ESM 01
                    </p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Chip</p>
                    <p className="text-sm font-light mb-2">Qualcomm QCC5126</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Charge current</p>
                    <p className="text-sm font-light mb-2">200mA +/- 50</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Charge time</p>
                    <p className="text-sm font-light mb-2">Less than 2 hours</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Battery capacity</p>
                    <p className="text-sm font-light mb-2">550 mAh</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Driver size</p>
                    <p className="text-sm font-light mb-2">Ohm40mm</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-4">
                    <p className="font-bold mb-2">Frequency range</p>
                    <p className="text-sm font-light mb-2">20Hz - 20kHz</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">BT Play time</p>
                    <p className="text-sm font-light mb-2">27 hours</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">BT Connect range</p>
                    <p className="text-sm font-light mb-2">Greater than or equal to 10m</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Audio protocol</p>
                    <p className="text-sm font-light mb-2">AAC, SBC, APTX</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Transmit power</p>
                    <p className="text-sm font-light mb-2">&#60; 4dBm</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Standby time</p>
                    <p className="text-sm font-light mb-2">1000 hours</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">Charge requirement</p>
                    <p className="text-sm font-light mb-2"> &#62; 0.5c</p>
                  </div>
                </div>
                
              </div>
              <Link href="/assets/files/Smart_Audio_ESM_01_Quick_Start_Booklet.pdf">
          <button className="btn text-slate-500 hover:bg-grey-700 gap-2">
            Download ESM-01 Quick Start Booklet 
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
    </section>
  );
};

export default ESM01Features;
