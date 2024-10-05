import React from 'react'
import Goal from '../assets/Goal.svg';
import Binoculars from '../assets/Binoculars.svg';

const MissionAndVision = () => {
  return (
    <div className='mb-24 mx-10 lmd:mx-20 mt-[60px]'>
      <div className='border-b-[1px] max-w-[540px] mb-[50px] border-b-custom-text-color'>
        <h1 className='text-[30px] font-poppins font-bold border-b-[1px]  w-80'>Mission & vision</h1>
      </div>
      <main className='flex flex-col md:flex-row justify-between'>
        <div className='bg-white mb-10 max-w-[560px] transform rotate-[0] lmd:pb-0 pb-5 h-auto sm:h-[303px] flex flex-col justify-center md:rotate-[-5deg] text-black rounded-xl'>
            <div className='w-[85%] m-auto' >
                <div className=' m-auto w-24 flex flex-col items-center mb-3'>
                    <img src={Goal.src}  width={85} height={15} alt="Shield Icon" />
                    <h1 className='font-bold text-[20px]'>Mission</h1>
                </div>
                <p className='text-justify font-semibold text-[16px]'>
                    To deliver cutting-edge web solutions that empower businesses to achieve their goals and stand out in  the digital space.
                     We strive to turn ideas into digital experiences that engage users and drive results.
                </p>
            </div>
        </div>
        <div className='bg-white max-w-[560px] pb-5 lmd:pb-0 h-auto sm:h-[303px] flex md:mt-[150px] flex-col justify-center transform md:rotate-[10deg] text-black rounded-xl'>
            <div className='w-[85%] m-auto' >
                <div className=' m-auto w-24 flex flex-col items-center mb-3'>
                    <img src={Binoculars.src}  width={85} height={15} alt="Shield Icon" />
                    <h1 className='font-bold text-[20px]'>Vision</h1>
                </div>
                <p className='text-justify font-semibold text-[16px]'>
                    To be the go-to web development agency known for technical expertise, and client  satisfaction. We aim to shape
                     the future of digital solutions by setting the standard for quality and performance.
                </p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default MissionAndVision
