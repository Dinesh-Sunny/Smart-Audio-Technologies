import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white bg-no-repeat text-primary leftWaveFormBg ">
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex-wrap hidden -mx-4 md:flex xl:items-center">
            <div className="w-full px-4 md:w-1/2">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <div className="relative overflow-hidden rounded-7xl">
                  <img src="/assets/images/ESM-01/headset-image.svg" />
                </div>
              </div>
            </div>
            <div className="w-full mb-16 md:w-1/2 md:pl-32 md:mb-0">
              <button className="mb-8 btn btn-outline btn-primary">
                Just Launched 🚀
              </button>

              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                ESM-01 <br /> Headphones
              </h1>
              <p className="mt-2 font-light md:text-2xl">
                for wired & wireless use
              </p>
              <p className="my-12 font-light md:text-4xl">
                Clear Voice Without <br /> The Noise®️
              </p>
              <div className="flex flex-wrap">
                {/* <div className="w-full py-1 md:w-auto md:py-0 md:mr-4">
                  <button className="btn btn-lg btn-primary">BUY NOW</button>
                </div> */}
                <div className="w-full py-1 md:w-auto md:py-0">
                  <Link href="#contact">
                    <button className="gap-2 btn btn-outline btn-primary btn-lg">
                      CONTACT SALES
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
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

          {/*the below jsx for mobile phones it will be hidden in larger displays  */}

          <div className="flex flex-wrap -mx-4 md:hidden xl:items-center">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <button className="mb-8 btn btn-outline btn-primary">
                  Just Launched 🚀
                </button>
                <div className="relative overflow-hidden rounded-7xl">
                  <img src="/assets/images/ESM-01/headset-image.svg" />
                </div>
              </div>
            </div>
            <div className="w-full mb-16 md:w-1/2 md:pl-32 md:mb-0">
              <div>
                <div className="relative flex gap-80 top-28 left-4 ">
                  <img
                    src="/assets/images/ESM-01/mobile-slide-left-arrow.svg"
                    alt="left arrow indecator"
                    className=""
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-right-arrow.svg"
                    alt="left arrow indecator"
                    className=""
                  />
                </div>

                <div className="flex gap-5 m-16 overflow-x-auto ">
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-1.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-2.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-3.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-1.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-2.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-3.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-1.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-2.svg"
                    alt="these are headphone pictures"
                  />
                  <img
                    src="/assets/images/ESM-01/mobile-slide-headset-3.svg"
                    alt="these are headphone pictures"
                  />
                </div>
              </div>

              <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-center mobile:text-5xl md:text-5xl lg:text-6xl">
                ESM-01 <br /> Headphones
              </h1>
              <p className="mt-2 text-xl font-light text-center ">
                for wired & wireless use
              </p>
              <p className="my-10 text-4xl font-light text-center ">
                Clear Voice Without <br /> The Noise®️
              </p>
              <div className="flex flex-wrap">
                {/* <div className="w-full py-1 md:w-auto md:py-0 md:mr-4">
                  <button className="btn btn-lg btn-primary">BUY NOW</button>
                </div> */}
                <div className="w-full md:w-auto mobile:py-1">
                  <Link href="#contact">
                    <button className="gap-1 ml-10 btn btn-outline btn-primary mobile:ml-20">
                      CONTACT SALES
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
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
