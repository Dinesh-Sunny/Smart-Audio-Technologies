import ResponsivePlayer from "../ResponsivePlayer/ResponsivePlayer";

const InAction = () => {
  return (
    <section className="pt-20 overflow-hidden bg-white text-primary md:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 lg:items-center">
          <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
            <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tighter mobile:text-4xl md:text-5xl text-coolGray-900">
              SmartMute® in Action
            </h2>
            <p className="mb-10 text-lg font-medium md:mb-32 md:text-xl text-coolGray-500">
              See what people are saying about our unique and effective
              technology
            </p>
            <div className="md:flex md:flex-row ">
              <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/664562358" />

                <p className="mt-8 sm:text-2xl md:text-base">
                  Visitor testing our flagship Smart Audio ESM-01 headset at CES
                  2022
                </p>
              </div>
              <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                <ResponsivePlayer link="https://vimeo.com/663832142" />
                <p className="mt-8 sm:text-2xl md:text-base">
                  Soft launch of our flagship headset Smart Audio ESM-01 at CES
                  2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="relative hidden mx-auto lg:block md:display md:mr-0 max-w-max">
              <img src="/assets/images/smart-mic.svg" alt="Smart Audio Mic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InAction;
