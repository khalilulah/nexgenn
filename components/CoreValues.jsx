import React from "react";
import Light from "../public/assets/Light On.svg";
import Shield from "../public/assets/Shield.svg";
import Trophy from "../public/assets/Trophy.svg";
import HandShake from "../public/assets/Handshake.svg";
import Smiling from "../public/assets/Smiling.svg";

const CoreValues = () => {
  return (
    <div className="mx-5 sm:mx-10 lmd:mx-20 mt-[60px]">
      <div className='relative mb-5 h-10 border-b border-b-custom-text-color sm:w-[450px]'>
        <h1 className='absolute bottom-0 text-[30px] font-poppins font-bold h-[100%] mb-[-2px] w-[65%] border-b-[3px] border-b-custom-text-color'>Our core values</h1>
      </div>
          

      {/* core values div */}
      <main className="flex flex-wrap md:mt-10 lmd:mt-[0px] flex-col m-auto h-auto md:flex-row items-center lmd:h-[484px]">
        {/* left div */}
        <div className="w-full md:border-r border-r-custom-text-color sm:w-1/1 md:w-1/3  flex  flex-col">
          <div className=" sm:w-auto  border-b border-b-custom-text-color lmd:w-[100%] flex flex-col lg:my-auto p-5 ">
            <div className="flex  flex-col items-center mb-2">
              <img src={Light.src} width={35} height={25} alt="Light Icon" />
              <p>Innovation</p>
            </div>
            <p className="w-full text-justify text-custom-text-color text-[16px] mb-5">
              We embrace new technologies and creative ideas to deliver
              forward-thinking solutions.
            </p>
          </div>
          <div className="sm:w-auto  border-b border-b-custom-text-color sm:border-none lmd:w-[90%] flex flex-col lg:my-auto p-5 ">
            <div className="flex flex-col items-center mb-2">
              <img src={Shield.src} width={35} height={25} alt="Shield Icon" />
              <p>Integrity</p>
            </div>
            <p className="w-full text-justify text-custom-text-color">
              We maintain transparency, honesty, and ethical practices in all
              our interactions and services.
            </p>
          </div>
        </div>

        {/* middle div */}
        <div className="w-full justify-center sm:border-y border-y-custom-text-color sm:w-1/1 md:w-1/3 lg:h-[200px] flex flex-col">
          <div className="sm:w-auto  lmd:w-[90%] lmd:m-auto p-5">
            <div className="flex flex-col justify-center items-center mb-5">
              <img src={Trophy.src} width={35} height={25} alt="Trophy Icon" />
              <p>Excellence</p>
            </div>
            <p className="w-full text-justify text-custom-text-color">
              We ensure that every project meets the highest standards of
              performance and design.
            </p>
          </div>
        </div>

        {/* right div */}
        <div className="w-full md:w-1/3 md:border-l sm:border-l-custom-text-color flex flex-col sm:items-end">
          <div className="mb-[20px] sm:w-auto border-b border-b-custom-text-color w-full flex flex-col lg:my-auto p-5">
            <div className="flex flex-col items-center mb-2">
              <img
                src={HandShake.src}
                width={35}
                height={25}
                alt="Hand Shake Icon"
              />
              <p>Collaboration</p>
            </div>
            <p className="w-full text-justify text-custom-text-color text-[16px]">
              We believe in building strong partnerships with our clients,
              working closely with them.
            </p>
          </div>
          <div className="mb-[20px] border-b border-b-custom-text-color w-full sm:border-none flex flex-col lg:my-auto p-5">
            <div className="flex flex-col items-center mb-2">
              <img
                src={Smiling.src}
                width={35}
                height={25}
                alt="Smiling Icon"
              />
              <p>Customer Success</p>
            </div>
            <p className="w-full text-justify text-custom-text-color">
              Your success is our success. We are dedicated to achieving the
              best outcomes for our clients.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoreValues;
