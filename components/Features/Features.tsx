import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section
    id="solutions"
  className="py-32 md:pb-32 text-primary bg-gray-100"
>
  <div className="container px-4 mx-auto">
    <div className="md:max-w-4xl mb-12 mx-auto text-center">
      
      <h2 className="text-2xl  mobile:mb-4 mobile:text-3xl md:text-5xl leading-tight font-bold tracking-tighter">
      SmartMute® <br /> 
Tailor-made for you!
      </h2>
      <p className="text-sm mobile:text-lg md:text-xl text-coolGray-500 font-medium">
      We pride in welcoming prospective clients to discuss specific or bespoke projects where they would like us to deliver a turnkey solution to meet their unique requirement.
      </p>
    </div>
    <div className="hidden md:flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
            <Image width="33" height="33" src="/assets/images/headset.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Headsets
          </h3>
          <p className="text-coolGray-500 font-medium">
          Be it gaming, call centres, work from home or day to day operations at trading markets, warehouses, airports, factories or live events. SmartMute® technology equips you with the best clarity in communication.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
          <Image  width="81" height="32"  src="/assets/images/f1-racecar.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Aviation & Automotive
          </h3>
          <p className="text-coolGray-500 font-medium">
          Engine, road and cabin noise can often be frustrating. SmartMute® technology can help eliminate this noise and make the speaker appear to be in a quieter environment.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="32" height="33" src="/assets/images/helmet.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Helmets
          </h3>
          <p className="text-coolGray-500 font-medium">
          Fighter jet pilots or professional race drivers in F1 or Rally are exposed to in-cabin noise levels between 85db to 115db on average. SmartMute® technology eliminates noise in such harsh environments.
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
          <Image width="33" height="33" src="/assets/images/pilot.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Defence & Emergency
          </h3>
          <p className="text-coolGray-500 font-medium">
          In the frontline, the need to pressing a button to speak often causes distraction. SmartMute® technology can assist in eliminating the need for the button press and help maintain the situational advantage.
          </p>
        </div>
      </div>
      <div className="  w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="53" height="32" src="/assets/images/laptop.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Laptops & Tablets
          </h3>
          <p className="text-coolGray-500 font-medium">
          Covid19 has accelerated the WFH culture, placing teams in noisy home environments. SmartMute® technology can enable clear voice communication in such situations and provide a pleasant experience to the listener.
          </p>
        </div>
      </div>
      <div className="  w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="33" height="32" src="/assets/images/smart-devices.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Smart Devices
          </h3>
          <p className="text-coolGray-500 font-medium">
          Let Siri, Alexa dn the future of voice assist understand you clearly. SmartMute® technology can help improve this experience and enable clear voice communication even in extremely noisy environments.
          </p>
        </div>
      </div>
    </div>
    



 {/*the below jsx for mobile phones it will be hidden in larger displays  */}



    <div className="md:hidden  flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
            <Image width="33" height="33" src="/assets/images/headset.svg" />
          </div>
          <h3 className=" text-xl   mobile:mb-4 mobile:text-xl md:text-2xl leading-tight font-bold">
          Headsets
          </h3>
          <p className=" text-coolGray-500 font-medium">
          Be it gaming, call centres, work from home or day to day operations at trading markets, warehouses, airports, factories or live events. SmartMute® technology equips you with the best clarity in communication.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
          <Image  width="81" height="32"  src="/assets/images/f1-racecar.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Aviation & Automotive
          </h3>
          <p className="text-coolGray-500 font-medium">
          Engine, road and cabin noise can often be frustrating. SmartMute® technology can help eliminate this noise and make the speaker appear to be in a quieter environment.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="32" height="33" src="/assets/images/helmet.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Helmets
          </h3>
          <p className="text-coolGray-500 font-medium">
          Fighter jet pilots or professional race drivers in F1 or Rally are exposed to in-cabin noise levels between 85db to 115db on average. SmartMute® technology eliminates noise in such harsh environments.
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center">
          <Image width="33" height="33" src="/assets/images/pilot.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Defence & Emergency
          </h3>
          <p className="text-coolGray-500 font-medium">
          In the frontline, the need to pressing a button to speak often causes distraction. SmartMute® technology can assist in eliminating the need for the button press and help maintain the situational advantage.
          </p>
        </div>
      </div>

      <div className="  w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="53" height="32" src="/assets/images/laptop.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Laptops & Tablets
          </h3>
          <p className="text-coolGray-500 font-medium">
          Covid19 has accelerated the WFH culture, placing teams in noisy home environments. SmartMute® technology can enable clear voice communication in such situations and provide a pleasant experience to the listener.
          </p>
        </div>
      </div>

      <div className="  w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
          <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center ">
          <Image width="33" height="32" src="/assets/images/smart-devices.svg" />
          </div>
          <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
          Smart Devices
          </h3>
          <p className="text-coolGray-500 font-medium">
          Let Siri, Alexa dn the future of voice assist understand you clearly. SmartMute® technology can help improve this experience and enable clear voice communication even in extremely noisy environments.
          </p>
        </div>
      </div>
     
      
      
      
    </div>
  </div>
</section>

  )
}


export default Features;
