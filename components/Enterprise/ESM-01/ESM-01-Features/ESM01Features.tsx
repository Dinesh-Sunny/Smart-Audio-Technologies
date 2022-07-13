import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";

const ESM01Features = () => {
  return (
    <section className="relative overflow-hidden  bg-primary text-white p-32 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full lg:w-1/2 text-center">
            <div>
              <h2 className="text-2xl mb-8">ESM-01 Headset</h2>
              <img
                className="relative top-3 transform hover:scale-105 transition ease-in-out duration-500"
                src="/assets/images/ESM-01/headset-overview.svg"
                alt="ESM 01 Overview| Smart Audio Headset"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-md">
              <h2 className="mb-10 font-heading font-bold text-2xl sm:text-2xl leading-loose">
                Specifications
              </h2>
              <div className="flex gap-x-16">
                <div className="w-full lg:w-1/2 ">
                  <div className="mb-4">
                    <p className="font-bold mb-2">BT Version</p>
                    <p className="text-sm font-light mb-2">Bluetooth V5.0</p>
                    <hr />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold mb-2">BT Name</p>
                    <p className="text-sm font-light mb-2">
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
                    <p className="font-bold mb-2">Charge requirment</p>
                    <p className="text-sm font-light mb-2"> &#62; 0.5c</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESM01Features;
