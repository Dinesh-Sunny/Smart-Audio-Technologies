import Image from 'next/image'
import React from 'react'

const LogoCloud = () => {
  return (
    <section
  className="pt-4 xl:pt-24 bg-white "
>
  <div className="container py-4 md:px-48  mx-auto  ">
    <hr />
    {/* <p className="mb-8 text-center font-medium leading-6 text-coolGray-300">
      Trusted by the top companies in this industry
    </p> */}
    <div className="     grid grid-cols-3 grid-rows-2 gap-3 md:grid-cols-6 md:grid-rows-1  my-6  md:gap-3 ">
      <div className="    ">
        <img 
          
          className="mx-auto"
          src="/assets/images/smart-audio-technologies-nvidia.svg"
          alt="Smart Audio Technologies NVidia Partner"
        />
      </div>
      <div className="  ">
        <img
         
          className="md:mx-auto  "
          src="/assets/images/smart-audio-technologies-qualcomm-partner.svg"
          alt="Smart Audio Technologies Qualcomm Partner"
        />
      </div>
      <div className="  ">
        <img
        
          className="mx-auto  "
          src="/assets/images/smart-audio-technologies-aws-partner.svg"
          alt="Smart Audio Technologies AWS Partner"
        />
      </div>
      <div className=" ">
        <img
         
          className="mx-auto "
          src="/assets/images/smart-audio-technologies-scan-partner.svg"
          alt="Smart Audio Technologies Scan Partner"
        />
      </div>
      <div className="  ">
        <img
          
          className="mx-auto "
          src="/assets/images/smart-audio-technologies-partner.svg"
          alt="Department of Trade as Partner"
        />
      </div>
      <div className=" ">
        <img
         
          className="mx-auto "
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