import React from 'react'
import Light from '../assets/Light on.svg';
import Shield from '../assets/Shield.svg';
import Trophy from '../assets/Trophy.svg';
import HandShake from '../assets/HandShake.svg';
import Smiling from '../assets/Smiling.svg';

const CoreValues = () => {
  return (
    <div className='mx-20 mt-[60px]'>
      <div className='border-b-[1px] border-b-custom-text-color w-[450px]'>
        <h1 className='text-[30px] font-poppins font-bold border-b-[1px] w-80'>Our core values</h1>
      </div>

      {/* core values div */}
      <main className='h-[484px] flex items-center'>


        {/* left div */}
        <div className=' w-[343px] border-r border-r-custom-text-color flex flex-col  items-center '>
            <div className='w-[335px] flex flex-col items-center border-b  border-b-custom-text-color'>
                <div className='flex flex-col items-center mb-2 '>
                <img src={Light.src} width={35} height={25} alt="Shield Icon" />
                <p>Innovation</p>
                </div>
                <p className='w-[300px] text-justify  text-custom-text-color text-[16px] mb-5'>
                  We embrace new technologies and creative ideas to deliver forward-thinking  solutions.
                </p>
            </div>
            <div className='w-[335px] flex flex-col items-center'>
                <div className='flex flex-col items-center mb-2 mt-5'>
                <img src={Shield.src} width={35} height={25} alt="Shield Icon" />
                <p>Integrity</p>
                </div>
                <p className='w-[300px] text-justify text-custom-text-color '>
                  We maintain transparency, honesty, and ethical practices in all our interactions and  services.
                  </p>
            </div>
        </div>

        {/* middle div */}
        <div className=' flex flex-col w-[482px] justify-center border-t border-t-custom-text-color border-b border-b-custom-text-color items-center '>
                <div className='flex flex-col justify-center items-center mt-5'>
                <img src={Trophy.src} width={35} height={25} alt="Shield Icon" />
                <p>Excellence</p>
                </div>
                <p className='w-[300px] text-justify text-custom-text-color mb-5'>We ensure that every project meets the highest standards  of performance and design.</p>
            </div>

            {/* right div */}
        <div className=' w-[343px] border-l border-l-custom-text-color flex flex-col  items-center '>
            <div className='w-[335px] flex flex-col items-center border-b border-b-custom-text-color'>
                <div className='flex flex-col items-center mb-2 '>
                <img src={HandShake.src} width={35} height={25} alt="Shield Icon" />
                <p>Collaboration</p>
                </div>
                <p className='w-[300px] text-justify text-custom-text-color text-[16px] mb-5'>
                  We believe in building strong partnerships with our clients, working closely with  them.
                  </p>
            </div>
            <div className='w-[335px] flex flex-col items-center'>
                <div className='flex flex-col items-center mb-2 mt-5'>
                <img src={Smiling.src} width={35} height={25} alt="Shield Icon" />
                <p>Customer Success</p>
                </div>
                <p className='w-[300px] text-justify text-custom-text-color'>
                  Your success is our success. We are dedicated to achieving the best  outcomes for our clients.

                </p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default CoreValues
