import React from "react";
import Facebook from "../public/assets/Facebook.svg";
import Youtube from "../public/assets/Youtube.svg"; // Direct import
import Insta from "../public/assets/Instagram.svg"; // Direct import
import Linkedin from "../public/assets/linkedin.svg"; // Direct import

const Footer = () => {
  return (
    <div className=" h-[100vh] sm:h-auto lmd:mt-20 mb-3 max-w-[1345px] mx-5 sm:mx-10">
      <div className="text-center py-12 flex flex-col justify-around border-b border-b-neutral-700 h-[80vh] sm:h-auto mb-2">
        <div className="mt-10 ">
        <p className="text-[14px] text-custom-text-color font-poppins">
          UPSKILL FOR A BETTER FUTURE
        </p>
          <h1 className="text-[20px] mb-7 mt-5 sm:text-[50px] font-bold font-poppins">
            Request More Information
          </h1>
          <p className="sm:text-[16px] text-custom-text-color">
            We create custom digital solutions that elevate your brand, engage
            your audience, and bring your vision to life.
          </p>
        </div>
        <button className="bg-white text-black mx-auto px-8 py-3 my-6 rounded-3xl font-poppins">
          Contact Us
        </button>
        <p className="font-poppins text-[12px] sm:text-[16px] font-bold">© 2024 Nexgenn. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col mt-7 sm:mt-0 sm:flex-row justify-between w-[100%] h-[13vh]">
        <p className="font-poppins hidden sm:flex my-auto text-[20px]">Nextgenn</p>
        <div className="flex w-[55%] mx-auto sm:mx-0 sm:w-[280px]  justify-between">
          {/* Using regular img tag */}
          <img src={Facebook.src} width={35} height={25} className='w-12 ' alt="Facebook Icon" />
          <img src={Insta.src} width={35} height={25} className='w-12 ' alt="Facebook Icon" />
          <img src={Youtube.src} width={35} height={25} className='w-12 ' alt="Facebook Icon" />
          <img src={Linkedin.src} width={35} height={25} className='w-12 ' alt="Facebook Icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
