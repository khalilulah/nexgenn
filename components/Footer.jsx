import React from "react";
import Facebook from "../public/assets/Facebook.svg";
import Youtube from "../public/assets/Youtube.svg"; // Direct import
import Insta from "../public/assets/Instagram.svg"; // Direct import
import Linkedin from "../public/assets/linkedin.svg"; // Direct import

const Footer = () => {
  return (
    <div className="mt-20 mb-3 max-w-[1345px] mx-10">
      <div className="text-center pb-10 border-b border-b-neutral-700 h-auto mb-2">
        <p className="text-[14px] text-custom-text-color font-poppins">
          UPSKILL FOR A BETTER FUTURE
        </p>
        <div className="text-[40px]">
          <h1 className=" sm:text-[50px] font-bold font-poppins">
            Request More Information
          </h1>
          <p className="text-[16px]">
            We create custom digital solutions that elevate your brand, engage
            your audience, and bring your vision to life.
          </p>
        </div>
        <button className="bg-white text-black px-8 py-3 rounded-3xl my-10 font-poppins">
          Contact Us
        </button>
        <p className="font-poppins">© 2024 Nexgenn. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <p className="font-poppins hidden sm:visible">Nextgenn</p>
        <div className="flex w-[50%] my-5 mx-auto sm:w-[180px] justify-between">
          {/* Using regular img tag */}
          <img src={Facebook.src} width={35} height={25} alt="Facebook Icon" />
          <img src={Insta.src} width={35} height={25} alt="Facebook Icon" />
          <img src={Youtube.src} width={35} height={25} alt="Facebook Icon" />
          <img src={Linkedin.src} width={35} height={25} alt="Facebook Icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
