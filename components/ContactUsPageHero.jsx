"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../app/globals.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const ContactUsPageHero = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track open/close status

  // Function to toggle the div position
  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <nav className="font-clashDisplay w-full max-w-[1345px] h-[100vh] m-auto bg-black">
        <div className="w-full max-w-[1345px] m-auto h-[90vh]">
          <div className="flex h-16 mx-5 sm:mx-10 lmd:mx-20 items-center justify-between">
            <Link href="/" className="text-[20px] h-0">
              Nextgenn
            </Link>
            <button onClick={toggleDiv} className="text-[20px] h-0">
              close
            </button>
          </div>

          <div className="flex flex-wrap w-full lmd:full h-[80vh] max-w-[1345px]">
            {links.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className="h-1/2 flex justify-center items-center w-1/2 hover:bg-neutral-950"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="w-32" />
        <div className="contact flex flex-col justify-center h-[9vh] pl-20">
          <h1>Reach Us</h1>
          <div className='flex flex-col justify-between  w-[220px] mt-[10px]'>
            <p className='text-[12px]'>johndoe@gmail.com</p>
            <div className='flex'>
            <p className='text-[12px] mr-2'>+234-567-890-12</p>
            <p className='text-[12px]'>+234-567-890-12</p>
            </div>
          </div>
        </div>
        <hr className="w-48" />
      </nav>

      <div className="font-clashDisplay w-full max-w-[1347px] m-auto">
        {/* Animated div with background image */}
        <div
          className={`w-full max-w-[1347px] transition-transform duration-500 h-[100vh] ${
            isOpen ? "translate-y-0" : "-translate-y-full absolute black-before-load"
          } bg-[url('../public/assets/ContactUsImg.jpg')] sm:bg-[url('../public/assets/ContactUsImg.jpg')] bg-cover bg-center`}
        >
          {isOpen ? (
            ""
          ) : (
            <div className="flex h-16 mx-5 sm:mx-10 lmd:mx-20 pt-3 justify-between">
              <Link href="/" className=" text-[20px] h-0">
                Nextgenn
              </Link>
              <button onClick={toggleDiv} className=" text-[20px] h-0">
                Menu
              </button>
            </div>
          )}
          <div className="flex items-center w-full h-[90vh] max-w-[1345px]">
            <div className="w-[80%] sm:w-[608px] ml-5 sm:ml-10 lmd:ml-20">
              <div className="mb-[35px]">
                <h1 className=" leading-none text-[60px] mb-[15px] font-bold font-rajdhani sm:leading-[60px]">
                  Contact us, let’s bring your vision to life
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPageHero;
//
