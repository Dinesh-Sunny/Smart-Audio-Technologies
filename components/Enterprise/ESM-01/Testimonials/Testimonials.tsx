import React from "react";

const Testimonials = () => {
  return (
    <section className="text-primary">
      <div className="py-20 radius-for-skewed bg-primary overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pb-6 lg:pb-16">
          <div className="flex flex-wrap justify-center lg:justify-between items-center text-center lg:text-left">
            <div className="w-full lg:w-4/5 mb-4 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Testimonials
              </h2>
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
            <div className="mb-4 w-full lg:w-1/2 px-3">
              <div className="p-8 rounded shadow text-center bg-white">
                <div
                  className="bg-no-repeat bg-left-top"
                  style={{
                    backgroundImage:
                      'url("atis-assets/elements/quote-grey.svg")',
                  }}
                >
                  <p className="mb-8 leading-loose">
                    "Wow, how is this even possible?"{" "}
                  </p>

                  <h4 className="mb-1 text-2xl font-bold font-heading">
                    Visitors{" "}
                  </h4>
                  <p>CES & MWC 2022</p>
                </div>
              </div>
            </div>
            <div className="mb-4 w-full lg:w-1/2 px-3">
              <div className="p-8 bg-white rounded shadow text-center">
                <div
                  className="bg-no-repeat bg-left-top"
                  style={{
                    backgroundImage: 'url("/assets/images/ESM-01/quote.svg")',
                  }}
                >
                  <p className="mb-8 leading-loose">
                    "Top Ten Startups from CES"
                  </p>

                  <h4 className="mb-1 text-2xl font-bold font-heading">
                    Anna Flockett
                  </h4>
                  <p>Startups Magazine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
