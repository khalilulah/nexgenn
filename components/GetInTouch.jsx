import React from "react";
import Instagram from "../public/assets/instagram (1).svg";
import Email from "../public/assets/Email.svg";
import Location from "../public/assets/Location.svg";
import Phone from "../public/assets/Phone.svg";
import Linkedin from "../public/assets/Linkedin (1).svg";

const GetInTouch = () => {
  return (
    <div className="mx-10 my-[60px] lmd:mx-20">
      <div className="border-b-[1px] border-b-custom-text-color sm:w-[450px]">
        <h1 className="text-[30px] font-poppins font-bold border-b-[1px] w-80">
          Get in touch
        </h1>
      </div>

      {/* Use flex-wrap to allow items to wrap into rows */}
      <div className="flex flex-wrap">
        {/* First column */}
        <div className="w-full justify-end lmd:w-1/1 lg:w-1/3 h-[300px] flex  flex-col">
          <div className="mb-[20px] w-[90%] bg-white text-black flex lg:my-auto p-5 rounded-xl">
            <img src={Email.src} width={55} height={35} alt="Email Icon" />
            <div className="ml-3 mt-1">
              <h1 className="text-custom-text-color">Email</h1>
              <p className="font-semibold text-[16px] lg:text-[14px]">
                email@example.com
              </p>
            </div>
          </div>
          <div className="mb-[20px] w-[90%] bg-white text-black flex lg:my-auto p-5 rounded-xl">
            <img
              src={Location.src}
              width={55}
              height={35}
              alt="Location Icon"
            />
            <div className="ml-3 mt-1">
              <h1 className="text-custom-text-color">Location</h1>
              <p className="font-semibold">123 Street Name, Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="w-full lmd:w-1/1 lg:w-1/3 lg:h-[300px] flex">
          <div className="w-[90%] bg-white  text-black flex p-5 sm:m-auto rounded-xl">
            <img src={Phone.src} width={55} height={35} alt="Phone Icon" />
            <div className="ml-3 mt-1">
              <h1 className="text-custom-text-color">Phone</h1>
              <p className="font-semibold">+234 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="w-full lmd:w-1/1 lg:w-1/3 h-[300px] flex flex-col lg:items-end">
          <div
            className="mt-[20px] w-[90%] bg-white text-black flex p-5 lg:my-auto
          
          rounded-xl"
          >
            <img
              src={Instagram.src}
              width={55}
              height={35}
              alt="Instagram Icon"
            />
            <div className="ml-3 mt-1">
              <h1 className="text-custom-text-color">Instagram</h1>
              <p className="font-semibold">Username</p>
            </div>
          </div>
          <div
            className="mt-[20px] w-[90%] bg-white text-black flex p-5 lg:my-auto
          
          rounded-xl"
          >
            <img
              src={Linkedin.src}
              width={55}
              height={35}
              alt="LinkedIn Icon"
            />
            <div className="ml-3 mt-1">
              <h1 className="text-custom-text-color">LinkedIn</h1>
              <p className="font-semibold">Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
