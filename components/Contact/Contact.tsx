import React from "react";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const Contact = () => {
  return (
    <>
      <section id="contact"
        className="relative py-36 overflow-hidden text-primary"
        style={{ backgroundColor: "#EEEFF4" }}
      >
        <img className="absolute left-0 bottom-0" src="" alt="" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-lg mb-14">
                <h2 className="mb-7 font-heading font-semibold text-6xl sm:text-6xl">
                  Get in touch
                </h2>
              </div>
              <div className="flex flex-wrap -m-10">
                <div className="w-full p-10">
                  <div className="mb-8 flex">
                    <LocationMarkerIcon className="h-6 w-6 mr-2" />
                    <h3 className="font-heading font-medium text-xl">
                      20-22 Wenlock Road, London N1 7GU, United Kingdom
                    </h3>
                  </div>
                  <div className="mb-8 flex">
                    <MailIcon className="h-6 w-6 mr-2" />
                    <h3 className="font-heading font-medium text-xl">
                      hello@smartaudiotechnologies.com
                    </h3>
                  </div>
                  <div className="mb-8 flex">
                    {/* <PhoneIcon className="h-6 w-6 mr-2" />
                    <h3 className="font-heading font-medium text-xl">
                      +44 7517 897 999
                    </h3> */}
                  </div>
                  <div
                    style={{
                      WebkitFilter: "grayscale(100%)",
                      filter: "grayscale(100%)",
                    }}
                    className="google_map"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0410006352195!2d-0.09590938453177159!3d51.530807816812874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5f583930e5%3A0x5a7e590f7325e26f!2s20-22%20Wenlock%20Rd%2C%20London%20N1%207GU!5e0!3m2!1sen!2suk!4v1657538200892!5m2!1sen!2suk"
                      width={600}
                      height={200}
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="p-8 max-w-lg mx-auto bg-primary rounded-10">
                <div className="flex flex-wrap max-w-xl mx-auto">
                  <div className="w-full mb-5">
                    <input
                      className="w-full px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-white placeholder-gray-400 rounded"
                      type="text"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="w-full mb-5">
                    <input
                      className="w-full px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-white placeholder-gray-400 rounded"
                      type="text"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="w-full mb-5">
                    <textarea
                      className="w-full h-40 px-5 py-4 text-gray-400 text-base bg-transparent border border-gray-700 outline-none focus:ring-4 focus:ring-white placeholder-gray-400 resize-none rounded"
                      placeholder="Write message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="w-full mb-5">
                    <div className="group relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-cyan2 opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300" />
                      <button className="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                        <div className="relative p-5 px-11 text-primary bg-white overflow-hidden rounded-md">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                          <p className="relative z-10">Send message</p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="max-w-xs mx-auto text-sm text-center text-white">
                      By clicking the send button, you agree with our Terms
                      &amp; Conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
