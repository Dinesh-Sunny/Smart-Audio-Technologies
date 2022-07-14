import Image from 'next/image'
import React from 'react'

const LogoCloud = () => {
  return (
    <section
  className="xl:pt-24 bg-white sm:pt-8"
>
  <div className="container md:px-48 sm:py-4 mx-auto  ">
    <hr />
    {/* <p className="mb-8 text-center font-medium leading-6 text-coolGray-300">
      Trusted by the top companies in this industry
    </p> */}
    <div className="flex md:flex-wrap md:items-center  md:my-8 sm:my-4   ">
      <div className="sm:w-full  sm: w-1/2 md:w-1/3 lg:w-1/6 md:mb-8 lg:mb-0   ">
        <img 
          
          className="mx-auto sm:w-full"
          src="/assets/images/smart-audio-technologies-nvidia.svg"
          alt="Smart Audio Technologies NVidia Partner"
        />
      </div>
      <div className=" sm:w-full  md:w-1/3 lg:w-1/6 sm:mb-8 lg:mb-0 ">
        <img
         
          className="md:mx-auto sm:w-full "
          src="/assets/images/smart-audio-technologies-qualcomm-partner.svg"
          alt="Smart Audio Technologies Qualcomm Partner"
        />
      </div>
      <div className=" sm:w-full  w-1/2 md:w-1/3 lg:w-1/6 sm:mb-8 lg:mb-0">
        <img
        
          className="mx-auto sm:w-full "
          src="/assets/images/smart-audio-technologies-aws-partner.svg"
          alt="Smart Audio Technologies AWS Partner"
        />
      </div>
      <div className="sm:w-full w-1/2 md:w-1/3 lg:w-1/6 sm:mb-8 md:mb-0">
        <img
         
          className="mx-auto sm:w-full"
          src="/assets/images/smart-audio-technologies-scan-partner.svg"
          alt="Smart Audio Technologies Scan Partner"
        />
      </div>
      <div className="sm:w-full  w-1/2 md:w-1/3 lg:w-1/6 ">
        <img
          
          className="mx-auto sm:w-full"
          src="/assets/images/smart-audio-technologies-partner.svg"
          alt="Department of Trade as Partner"
        />
      </div>
      <div className=" sm:w-full w-1/2 md:w-1/3 lg:w-1/6">
        <img
         
          className="mx-auto sm:w-full"
          src="/assets/images/smart-audio-technologies-abstract-future.svg"
          alt="Smart Audio Technologies Abstract Future Partner"
        />
      </div>
    </div>
    <hr />
  </div>
</section>

  )
}

export default LogoCloud