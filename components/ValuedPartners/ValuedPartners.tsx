import React from "react";

const ValuedPartners = () => {
  return (
    <section id="partners"
      className="py-20  md:py-24 text-primary rightWaveFormBg bg-no-repeat bg-right"
      style={{ backgroundColor: "#EEEFF4" }}
    >
      <div className="pr-14 pl-14   md:w-2/3 md:pl-24">
        <div className="mb-16">
          <h2 className="text-center md:text-left mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
          Valued Partners
          </h2>
        </div>
        <div className="hidden  md:flex flex-wrap gap-y-24">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                NVIDIA
              </h3>
              <span className="inline-block text-lg font-medium">USA</span>
              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-nvidia.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                Amazon
              </h3>
              <span className="inline-block mb-24 text-lg font-medium">
                USA
              </span>
              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-aws-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                Qualcomm
              </h3>
              <span className="inline-block mb-24 text-lg font-medium">
                USA
              </span>
              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-qualcomm-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                SCAN
              </h3>
              <span className="inline-block mb-24 text-lg font-medium">UK</span>
              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-scan-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                UK Department of International Trade
              </h3>

              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="relative h-full py-8 px-10 bg- rounded-md bg-white">
              <h3 className="mb-2 text-2xl md:text-2xl leading-tight font-semibold">
                Abstract Future
              </h3>
              <span className="inline-block mb-24 text-lg font-medium">
                India{" "}
              </span>
              <img
                className="absolute bottom-0 left-0 py-8 px-10"
                src="assets/images/smart-audio-technologies-abstract-future.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>
        </div>


 {/*the below jsx for mobile phones it will be hidden in larger displays  */}


        <div className="  md:hidden grid  grid-cols-1 grid-rows-1 gap-4  ">
          <div className="">
            <div className=" pt-36 bg-rounded-md bg-white">
              <h3 className=" text-left  relative bottom-24 left-5 font-extrabold text-xl ">
                NVIDIA
              </h3>
              <span className="text-left  relative bottom-20 left-5 font-extrabold  ">
                USA</span>
              <img
                className="relative left-3 bottom-5"
                src="assets/images/smart-audio-technologies-nvidia.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          

          <div className=" ">
            <div className=" pt-36 bg-rounded-md bg-white">
              <h3 className="text-left  relative bottom-24 left-5 font-extrabold text-xl">
                Amazon
              </h3>
              <span className="text-left  relative bottom-20 left-5 font-extrabold">
                USA
              </span>
              <img
                className="relative left-3 bottom-5"
                src="assets/images/smart-audio-technologies-aws-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>


        
          <div className="">
            <div className=" pt-36  bg-rounded-md bg-white ">
              <h3 className="text-left  relative bottom-24 left-5 font-extrabold text-xl">
                Qualcomm
              </h3>
              <span className="text-left  relative bottom-20 left-5 font-extrabold ">
                USA
              </span>
              <img
                className=" relative left-3 bottom-5 "
                src="assets/images/smart-audio-technologies-qualcomm-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>

          <div className="">
            <div className=" pt-36 bg-rounded-md bg-white">
              <h3 className="text-left  relative bottom-24 left-5 font-extrabold text-xl">
                SCAN
              </h3>
              <span className="text-left  relative bottom-20 left-5 font-extrabold">
                UK</span>
              <img
                className="relative left-3 bottom-5"
                src="assets/images/smart-audio-technologies-scan-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>


          <div className="">
            <div className=" pt-36 bg-rounded-md bg-white">
              <h3 className="text-sm text-left  relative bottom-24 left-5 font-extrabold mobile:text-xl">
                UK Department of International Trade
              </h3>

              <img
                className="relative left-3 bottom-5"
                src="assets/images/smart-audio-technologies-partner.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>



          <div className=" ">
            <div className=" pt-36  bg-rounded-md bg-white">
              <h3 className="text-left  relative bottom-24 left-5 font-extrabold text-xl">
                Abstract Future
              </h3>
              <span className="text-left  relative bottom-20 left-5 font-extrabold">
                India
              </span>
              <img
                className="relative left-3 bottom-5"
                src="assets/images/smart-audio-technologies-abstract-future.svg"
                alt="Smart Audio Technologies NVidia Partner"
              />
            </div>
          </div>


         
          </div>

        





      </div>
    </section>
  );
};

export default ValuedPartners;
