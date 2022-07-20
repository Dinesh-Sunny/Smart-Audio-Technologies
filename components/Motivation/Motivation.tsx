import Image from "next/image";
import React from "react";

const Motivation = () => {
  return (
    <div className="container mx-auto  text-primary py-24 ">
      
      <h2 className="text-xl mb-5 mobile:text-5xl  font-extrabold mobile:mb-24 text-center  ">
        We are here to change <br /> the Game!
      </h2>
      <div className=" hidden  lg:flex flex-wrap -mx-4">
        <div className="lg:mb-0 w-full lg:w-1/2 px-4">
          <img height='446' width='683' className="mx-auto"
            src="/assets/images/smart-audio-headphones-game-changing.png"
            alt="Smart Audio Game Headset game changing technology"
          />
        </div>
        <div className="mb-12 lg:mb-0 w-full lg:w-1/2 pl-8">
          <div className="max-w-xs mb-8">
            <h3 className="mb-2 text-xl font-extrabold ">With a Vision.</h3>
            <p className="leading-loose font-light">
            We are on a mission with one vision – to change the game and create an intelligent solution, that can deliver truly noise free voice transmission for wired or wireless communication devices in any enivronment.
            </p>
          </div>
          <div className="max-w-xs mb-8">
            <h3 className="mb-2 text-xl font-extrabold ">Human Brains.</h3>
            <p className="leading-loose font-light">
            The Human Brain is a sophisticated machine, evolved and capable of subconsciously supressing chatter and environmental noise for you to focus on a target or speaker’s voice.
            </p>
          </div>
          <div className="max-w-xs mb-8">
            <h3 className="mb-2 text-xl font-extrabold ">SmartMute®</h3>
            <p className="leading-loose font-light">
            The &quot;Brains&quot; at Smart Audio have replicated this complex functionality within each of us and created SmartMute® a Self Adaptive A.I. based Noise Elimination Technology that is capable of accepting voice inputs from target speaker and eliminating the rest.
            </p>
          </div>
        </div>
      </div>

 {/*the below jsx for mobile phones it will be hidden in larger displays  */}

       <div className="lg:hidden " >
        <div  className=" " > 
      
        <div  className="">

          <div className="">
          <img  className="mx-auto"
          height={266}
          width={288}
            src="/assets/images/mobile-vision.svg"
            alt="Smart Audio Game Headset game changing technology"
          />
          <div>
          <h3 className="mb-1 mt-2 text-2xl text-center font-extrabold ">With a Vision.</h3>
          </div>
          <div>
          <p className="text-sm text-center pt-3 pb-3 pl-2 pr-2">
          We are on a mission with one vision – to change the game and create an intelligent solution, that can deliver truly noise free voice transmission for wired or wireless communication devices in any enivronment.
            </p>
          </div>
           
          </div>        
        </div>
       
       </div>

       <div  className=" " > 
        <div  className="">
          <div className="">
          <img  className="mx-auto"
             height={266}
             width={288}
            src="/assets/images/mobile-human-brains.svg"
            alt="Smart Audio Game Headset game changing technology"
          />
          </div>
          <h3 className="mb-2 mt-2 text-2xl text-center font-extrabold ">Human Brains.</h3>
          <div>
          <p className="text-sm text-center pt-3 pb-3 pl-2 pr-2 ">
          The Human Brain is a sophisticated machine, evolved and capable of subconsciously supressing chatter and environmental noise for you to focus on a target or speaker’s voice.
            </p>
          
          </div>
        </div>
       
       </div>


       <div id="" className=" " > 
    
        <div  className="">
          <div className="">
          <img  className="mx-auto "
          height={266}
          width={288}
            src="/assets/images/mobile-smartmute.svg"
            alt="Smart Audio Game Headset game changing technology"
          />
          </div>
          <h3 className="mb-2 mt-2 text-2xl text-center font-extrabold ">SmartMute®</h3>
          <div>
          <p className="text-sm text-center pt-3 pb-3 pl-2 pr-2 ">
          The &quot;Brains&quot; at Smart Audio have replicated this complex functionality within each of us and created SmartMute® a Self Adaptive A.I. based Noise Elimination Technology that is capable of accepting voice inputs from target speaker and eliminating the rest.
            </p>
          </div>
        </div>
 
       </div>
   
   
    </div>
    </div>
  );
};


export default Motivation;
