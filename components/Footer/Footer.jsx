import React from "react";

const Footer = () => {
  return (
    <section className="bg-primary overflow-hidden text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center pt-12 pb-12 -mx-4">
          <div className="w-full px-4 sm:text-center ">
            <a className="block mb-8 max-w-max " href="#">
              <img
                className="h-8"
                src="/assets/images/smart-audio-logo-white.svg"
                alt="Smart Audio Technologies Logo"
              />
            </a>
            <p className="mb-12 text-base md:text-lg text-coolGray-400 font-medium text-left	">
              Clear Voice Without The Noise®️
            </p>
            <div className="hidden mb-12 md:mb-0 md:flex flex-wrap -mx-3 md:-mx-6">
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#our-technology"
                >
                  Our Technology
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#"
                >
                  Solutions
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#partners"
                >
                  Partners
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#team"
                >
                  Our Team
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="enterprise/esm-01-headset"
                >
                  Products
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
              
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="https://www.iubenda.com/terms-and-conditions/88136826"
                  target="_blank" rel=" noreferrer">
                  Terms & Conditions
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <a
                  className="inline-block text-coolGray-500 hover:text-coolGray-600 font-medium"
                  href="https://www.iubenda.com/privacy-policy/88136826"
                  target="_blank" rel=" noreferrer">
                  Privacy and Cookie Policy
                </a>
              </div>
            </div>



          {/* The above is desktop version and below is mobile version */}


            <div className="md:hidden grid grid-row-3 grid-cols-3 gap-5 ">
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="#our-technology"
                >
                  Our Technology
                </a>
              </div>
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="#"
                >
                  Solutions
                </a>
              </div>
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="#partners"
                >
                  Partners
                </a>
              </div>
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="#team"
                >
                  Our Team
                </a>
              </div>
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="enterprise/esm-01-headset"
                >
                  Products
                </a>
              </div>
              <div className="">
                <a
                  className="font-medium text-xs"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
              
            </div>









          </div>
          {/* <div className="w-full md:w-1/4 px-4">
            <div className="lg:pr-10 lg:ml-auto lg:max-w-max">
                <p className="mb-2">Get the App</p>
              <a className="block mb-4" href="#">
                <img src="/assets/images/download-appstore.svg" alt="" />
              </a>
              <a className="block" href="#">
                <img src="/assets/images/google-play-badge.svg" alt="" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="border-b border-coolGray-100" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center py-12">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <p className=" text-center md:text-left text-coolGray-400 font-medium">
              © 2022 | Smart Audio Technologies Limited | 20-22 Wenlock Road |
              London N1 7GU | United Kingdom
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-wrap md:justify-end -mx-5">
              {/* <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="#"
                >
                  <svg
                    width={10}
                    height={18}
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div> */}
              {/* <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="#"
                >
                  <svg
                    width={19}
                    height={16}
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div> */}
              <div className="px-5">
                <a
                  className="inline-block text-coolGray-300 hover:text-coolGray-400"
                  href="https://www.linkedin.com/company/smart-audio-technologies/" target="_blank" rel="noreferrer"
                >
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
