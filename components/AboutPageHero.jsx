'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import '../app/globals.css'


const links = [
    {href:'/', label:'Home'},
    {href:'/about', label:'About'},
    {href:'/services', label:'Services'},
    {href:'/contact', label:'Contact Us'},
]


const AboutPageHero = () => {

    const [isOpen, setIsOpen] = useState(false); // State to track open/close status

  // Function to toggle the div position
  const toggleDiv = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <nav className='font-clashDisplay max-w-[1345px] m-auto bg-black'>
        <div className='w-[100vw] max-w-[1345px] m-auto h-[100vh]'>
          <div className='flex h-16 mx-20 pt-5 justify-between'>
            <Link href='/' className='text-[20px] '>Nexgenn</Link>
            <button onClick={toggleDiv} className='text-[20px] '>close</button>
          </div>
          <div className='flex flex-wrap w-[100vw] h-[90vh] max-w-[1345px]'>
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.label} className='h-1/2 flex justify-center items-center w-1/2 hover:bg-neutral-950'>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <hr className='w-32' />
        <div className='contact flex flex-col justify-center h-28 pl-20'>
          <h1>Reach Us</h1>
          <div className='flex justify-between w-[330px] mt-[10px]'>
            <p className='text-[12px]'>johndoe@gmail.com</p>
            <p className='text-[12px]'>+234-567-890-12</p>
            <p className='text-[12px]'>+234-567-890-12</p>
          </div>
        </div>
        <hr className='w-48' />
      </nav>

      <div className='font-clashDisplay max-w-[1345px] m-auto'>
        {/* Animated div with background image */}
        <div
          className={`about-background-img w-[100vw] max-w-[1345px] bg m-auto transition-transform duration-500 ${
            isOpen ? 'translate-y-0' : '-translate-y-full absolute'
          }`}
        >
          
          {isOpen ? <div className='flex h-16 mx-20 pt-5 justify-between'>
          </div>:<div className='flex h-16 mx-20 pt-5 justify-between'>
            <Link href='/' className=' text-[20px] '>Nexgenn</Link>
             <button onClick={toggleDiv} className=' text-[20px] '>Menu</button>
            
          </div>}
          <div className='flex items-center w-[100vw] h-[90vh] max-w-[1345px]'>
            <div className='w-[608px] ml-20'>
              <div className='mb-[35px]'>
                <h1 className='text-[60px] mb-[15px] font-bold font-rajdhani leading-[60px]'>
                  Building Digital Solutions That Elevate Your Brand
                </h1>
                
              </div>
            </div>
          </div>
          <div className='contact flex flex-col justify-center h-32 pl-20'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPageHero
