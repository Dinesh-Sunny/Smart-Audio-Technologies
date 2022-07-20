import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="relative text-primary">
        <div className="  py-16  md:py-20 radius-for-skewed bg-primary overflow-hidden">
          <div className="max-w-6xl mx-auto   lg:pb-16">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
              <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="hidden  md:flex ">
            <img
              src="/assets/images/quotes.svg"
              className="absolute  right-14 top-5 lg:right-60 lg:top-20  "
            />
            <div className="flex md:px-2 mx-auto gap-x-8 items-stretch">
              <div className="  mb-4 w-full lg:w-1/2">
                <div className=" ml-2 mobile:ml-2 md:p-12 rounded shadow text-center bg-white ">
                  <div className="bg-no-repeat bg-left-top ">
                    <p className="mb-8  pt-3 leading-loose">
                      &quot;Wow, how is this even possible?&quot;
                    </p>

                    <h4 className="mb-1  text-2xl  font-bold font-heading">
                      Visitors
                    </h4>
                    <p className="pb-3">CES & MWC 2022</p>
                  </div>
                </div>
              </div>
              <div className=" mb-4 w-full lg:w-1/2">
                <div className="mr-2 mobile:mr-2 md:p-12 rounded shadow text-center bg-white">
                  <div className="bg-no-repeat bg-left-top ">
                    <p className="mb-8 pt-3 leading-loose">
                      &quot;Top Ten Startups <br /> from CES&quot;
                    </p>

                    <h4 className="mb-1 text-xl mobile_s::text-2xl font-bold font-heading">
                      Anna Flockett
                    </h4>
                    <p className="pb-3" >CES 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>










  {/* above is the desktop view and below is the mobile view */}









          <div className="md:hidden flex flex-col ">
            <img
              src="/assets/images/quotes.svg"
              className="absolute right-10 top-5"
            />
            <div className="flex px-2 pt-10 mx-auto gap-x-8  flex-col items-stretch">
              <div className="  mb-4 w-full ">
                <div className=" p-10 rounded shadow text-center bg-white ">
                  <div className="bg-no-repeat bg-left-top ">
                    <p className="mb-8  pt-3 leading-loose">
                      &quot;Wow, how is this even possible?&quot;
                    </p>

                    <h4 className="mb-1  text-2xl  font-bold font-heading">
                      Visitors
                    </h4>
                    <p className="pb-3">CES & MWC 2022</p>
                  </div>
                </div>
              </div>
              <div className=" mb-4 w-full ">
                <div className="  p-10 rounded shadow text-center bg-white">
                  <div className="bg-no-repeat bg-left-top ">
                    <p className="mb-8 pt-3 leading-loose">
                      &quot;Top Ten Startups <br /> from CES&quot;
                    </p>

                    <h4 className="mb-1 text-xl mobile_s:text-2xl font-bold font-heading">
                      Anna Flockett
                    </h4>
                    <p className="pb-3" >CES 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>





















        </div>
      </section>

      <section className="text-primary py-16 text-center">
        <h2 className="text-5xl font-bold mb-8">Get yours now!</h2>
        <Link href="#contact">
          <button className="btn btn-outline btn-primary gap-2">
            Contact Sales
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
      </section>
    </>
  );
};

export default Testimonials;
