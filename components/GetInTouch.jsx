import React from 'react'
import Instagram from '../assets/instagram (1).svg';
import Email from '../assets/Email.svg';
import Location from '../assets/Location.svg';
import Phone from '../assets/Location.svg';
import Linkedin from '../assets/Linkedin (1).svg';

const GetInTouch = () => {
  return (
    <div className='mx-20 my-[60px]'>
      <div className='border-b-[1px] border-b-custom-text-color w-[450px]'>
        <h1 className='text-[30px] font-poppins font-bold border-b-[1px] w-80'>Get in touch</h1>
      </div>
    <div class="flex">
        <div class="flex-1  h-[300px] flex flex-col ">
            <div className='w-[90%] bg-white text-black flex my-auto  p-5 rounded-xl'>
                <img src={Email.src} width={55} height={35} alt="Shield Icon" />
                <div className='ml-3 mt-1'>
                    <h1 className='text-custom-text-color'>Email</h1>
                    <p className='font-semibold'>email@example.com</p>
                </div>
            </div>
            <div className='w-[90%] bg-white text-black flex my-auto p-5 rounded-xl'>
                <img src={Location.src} width={55} height={35} alt="Shield Icon" />
                <div className='ml-3 mt-1'>
                    <h1 className='text-custom-text-color'>Location</h1>
                    <p className='font-semibold'>123 Street Name, Lagos, Nigeria</p>
                </div>
            </div>
        </div>
        <div class="flex-1 h-[300px] flex">
            <div className='w-[90%] bg-white text-black flex  p-5 m-auto rounded-xl'>
                <img src={Phone.src} width={55} height={35} alt="Shield Icon" />
                <div className='ml-3 mt-1'>
                    <h1 className='text-custom-text-color'>Phone</h1>
                    <p className='font-semibold'>+234 123 456 7890</p>
                </div>
            </div>
        </div>
        <div class="flex-1  h-[300px] flex flex-col items-end">
            <div className='w-[90%] bg-white text-black flex  p-5 my-auto rounded-xl'>
                <img src={Instagram.src} width={55} height={35} alt="Shield Icon" />
                <div className='ml-3 mt-1'>
                    <h1 className='text-custom-text-color'>Instagram</h1>
                    <p className='font-semibold'>Username</p>
                </div>
            </div>
            <div className='w-[90%] bg-white text-black flex  p-5 my-auto rounded-xl'>
                <img src={Linkedin.src} width={55} height={35} alt="Shield Icon" />
                <div className='ml-3 mt-1'>
                    <h1 className='text-custom-text-color'>Linked in</h1>
                    <p className='font-semibold'>Username</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default GetInTouch
