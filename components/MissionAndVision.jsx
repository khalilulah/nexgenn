import React from 'react'
import Goal from '../assets/Goal.svg';
import Binoculars from '../assets/Binoculars.svg';

const MissionAndVision = () => {
  return (
    <div className='mb-24 mx-20 mt-[60px]'>
      <div className='border-b-[1px] w-[540px] mb-[50px] border-b-custom-text-color'>
        <h1 className='text-[30px] font-poppins font-bold border-b-[1px]  w-80'>Mission & vision</h1>
      </div>
      <main className='flex justify-between'>
        <div className='bg-white w-[560px] h-[283px] flex flex-col justify-center transform rotate-[-5deg] text-black rounded-xl'>
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
        <div className='bg-white w-[560px] h-[283px] flex mt-[150px] flex-col justify-center transform rotate-[10deg] text-black rounded-xl'>
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
