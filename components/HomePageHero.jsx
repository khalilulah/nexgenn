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

const HomePageHero = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track open/close status

  // Function to toggle the div position
  const toggleDiv = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className=''>
      <nav className='font-clashDisplay w-full max-w-[1345px] m-auto bg-black'>
        <div className='w-full max-w-[1345px] m-auto h-[100vh]'>
          <div className='flex h-16 mx-10 lmd:mx-20 items-center justify-between'>
            <Link href='/' className='text-[20px] '>Nextgenn</Link>
            <button onClick={toggleDiv} className='text-[20px] '>close</button>
          </div>

          <div className='flex flex-wrap w-full lmd:full h-[90vh] max-w-[1345px]'>
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
          <div className='flex flex-col sm:flex-row justify-between sm:w-[330px] mt-[10px]'>
            <p className='text-[12px]'>johndoe@gmail.com</p>
            <p className='text-[12px]'>+234-567-890-12</p>
            <p className='text-[12px]'>+234-567-890-12</p>
          </div>
        </div>
        <hr className='w-48' />
      </nav>

      <div className='font-clashDisplay w-full max-w-[1347px] m-auto'>
        {/* Animated div with background image */}
        <div
  className={`w-full max-w-[1347px] transition-transform duration-500 ${
    isOpen ? 'translate-y-0' : '-translate-y-full absolute'
  } bg-[url('https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] sm:bg-[url('https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-custom-right sm:bg-center`}
>
          
          {isOpen ? <div>
          </div>:<div className='flex h-16 mx-10 lmd:mx-20 items-center justify-between'>
            <Link href='/' className=' text-[20px] '>Nextgenn</Link>
             <button onClick={toggleDiv} className=' text-[20px] '>Menu</button>
            
          </div>}
          <div className='flex items-center w-full h-[90vh] max-w-[1345px]'>
            <div className=' w-[80%] sm:w-[608px] ml-10 lmd:ml-20'>
              <div className='mb-[35px]'>
                <h1 className='text-[50px] leading-none sm:text-[60px] mb-[15px] font-bold font-rajdhani sm:leading-[60px]'>
                  Building Digital Solutions That Elevate Your Brand
                </h1>
                <p className='w-[80%] sm:w-[519px]'>
                  We create custom digital solutions that elevate your brand and bring your vision to life
                </p>
              </div>
              <div className='mt-[55px]'>
                <button className='bg-white font-semibold text-black text-[20px] px-6 py-3 rounded-lg'>Contact Us</button>
              </div>
            </div>
          </div>
          <div className='contact flex flex-col justify-center w-0 h-32 pl-20'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero;
