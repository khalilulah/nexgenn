import React from "react";
import ServicesPageLeftImg from "../public/assets/ServicesPageLeftImg.svg";

const ServicesPageServicesRendered = () => {
  return (
    <div className="mx-5 sm:mx-10 lmd:mx-20 relative ">
      <div className="border-b-[1px] border-b-custom-text-color sm:w-[450px] sm:mb-5">
        <h1 className="text-[30px] font-poppins font-semibold border-b-[1px] w-80">
          Services rendered
        </h1>
      </div>
      <p>
        We offer a comprehensive suite of services to meet all your digital
        needs:
      </p>
      <main className="flex justify-between">
        <div className=" sm:ml-[-50%] md:ml-[-250px] mb-[-100px]  lmd:ml-[-190px] lg:ml-[-80px] left-[-80px] ">
          <img
            src={ServicesPageLeftImg.src}
            width={600}
            height={105}
            className="w-0 sm:w-[80%] md:w-[85%] lmd:w-[88%] "
            alt="Shield Icon"
          />
        </div>

        {/* right div */}
        <div className="w-full sm:w-[50%] sm:mt-12 flex flex-col sm:items-end">
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16 ">
            <div className="flex mb-5">
              <i className="mr-5">i</i>
              <h1 className="font-poppins">Custom Website Development</h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Fully tailored websites built from scratch to match your brand and
              objectives
            </p>
          </div>
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16  mr-10">
            <div className="flex mb-5">
              <i className="mr-5">ii</i>
              <h1 className="font-poppins"> E-commerce Solutions</h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Seamless online stores designed to drive sales and enhance the
              customer experience.
            </p>
          </div>
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16 mr-20">
            <div className="flex mb-5">
              <i className="mr-5">iii</i>
              <h1 className="font-poppins">Content Management Systems </h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Easy-to-manage websites built on popular CMS platforms like
              WordPress.
            </p>
          </div>
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16  mr-20">
            <div className="flex mb-5">
              <i className="mr-5">iv</i>
              <h1 className="font-poppins"> Custom Website Development</h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Fully tailored websites built from scratch to match your brand and
              objectives
            </p>
          </div>
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16 mr-10">
            <div className="flex mb-5">
              <i className="mr-5">v</i>
              <h1 className="font-poppins"> E-commerce Solutions</h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Fully tailored websites built from scratch to match your brand and
              objectives
            </p>
          </div>
          <div className="border-b-2 border-b-neutral-900 border-opacity-50 sm:w-[370px] mt-16">
            <div className="flex mb-5">
              <i className="mr-5">vi</i>
              <h1 className="font-poppins">Custom Website Development</h1>
            </div>
            <p className="text-[13px] mb-5 text-custom-text-color">
              Fully tailored websites built from scratch to match your brand and
              objectives
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPageServicesRendered;
