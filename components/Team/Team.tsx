import React from "react";

const Team = () => {
  return (
    <section id="team" className="pt-20 bg-white text-primary">
      <div className="relative container px-8 mx-auto">
        <div className="mb-16">
          <h2 className=" sm:text-4xl sm:text-center mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
            Our Team
          </h2>
        </div>
        <div className="hidden  md:flex flex-wrap ">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/sandeep-chintala.svg"
                alt="Sandeep Chintala"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Sandeep Chintala
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Founder & CEO
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/salim.png"
                alt="Salim Muman"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Salim Muman
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Co-Founder & COO
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/steven-gray.png"
                alt="Steven Gray"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Steven Kanyatte
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                CFO
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/mo-gray.png"
                alt="Mo Gray"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
              Mo Muman
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">CIO</span>
            </div>
          </div>
        </div>





 {/*the below jsx for mobile phones it will be hidden in larger displays  */}







        <div className="md:hidden  flex flex-wrap ">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/sandeep-chintala.svg"
                alt="Sandeep Chintala"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Sandeep Chintala
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Founder & CEO
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/salim.png"
                alt="Salim Muman"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Salim Muman
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Co-Founder & COO
              </span>
            </div>
          </div>
          <img  className="mx-auto pt-10  pb-7"
            src="/assets/images/mobile-navigaion-icon.svg"
            alt="mobile navigation"
          />
         
        </div>






        <hr />

        <h2 className="sm:text-4xl sm:text-center  mb-4 py-20 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
          Advisors
        </h2>

        <div className="hidden md:flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/phil-carpenter.svg"
                alt="Phil Carpenter"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Phil Carpenter
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-Bose UK <br /> Managing Director
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/paolo-vannini.svg"
                alt="Salim Muman"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Paolo Vannini
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-Fiat USA,
                <br /> CEO & President
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/rolly.png"
                alt="Rolly Crawford"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Rolly Crawford
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-UK <br />
                Investment Banker
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/vivek-sharma.png"
                alt="Vivek Sharma"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Vivek Sharma
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-Intel Global Business, <br /> Development Director
              </span>
            </div>
          </div>
        </div>








{/*the below jsx for mobile phones it will be hidden in larger displays  */}









      <div className=" md:hidden flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/phil-carpenter.svg"
                alt="Phil Carpenter"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Phil Carpenter
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-Bose UK <br /> Managing Director
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10">
            <div className="text-center max-w-xs mx-auto">
              <img
                className="w-48 h-48 mx-auto mb-6 rounded-full"
                src="/assets/images/paolo-vannini.svg"
                alt="Salim Muman"
              />
              <h3 className="mb-1 text-lg text-coolGray-800 font-semibold">
                Paolo Vannini
              </h3>
              <span className="inline-block mb-6 text-lg font-medium">
                Ex-Fiat USA,
                <br /> CEO & President
              </span>
            </div>
          </div>
          <img  className="mx-auto pt-10 pb-7"
            src="/assets/images/mobile-navigaion-icon.svg"
            alt="mobile navigation"
          />
      
        
        </div> 


      </div>
    </section>
  );
};

export default Team;
