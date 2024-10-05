import React from 'react'

const GeneralOverview = () => {
  return (
    <div className='my-[52px] mx-10 lmd:mx-20'>
      <div className=' mb-10 font-poppins'>
       <h1 className='text-[30px] font-bold'>
        General overview
       </h1>
       <p className='text-justify mt-3 max-w-[900px]'>
        At <b>nexgenn</b>, we specialize in creating high-performance, visually stunning websites and other digital 
        solutions that help businesses grow. From startups to established enterprises, we provide innovative web solutions tailored to meet
         your unique needs. With a team of experienced developers, designers, and strategists, we are passionate about transforming 
         ideas into results-driven digital experiences.
       </p>
      </div>
      <div className='h-auto bg-gradient-to-br text-[20px] from-custom-dark-blue via-custom-dark-blue-light to-white md:h-[159px] py-5 px-10 flex items-center rounded-xl'>
      <p className=' '>
    Before diving into the details of our offerings, it's important to understand that we <b>PRIORITIZE</b> delivering 
    solutions tailored to meet your unique business needs.
     </p>
      </div>
    </div>
  )
}

export default GeneralOverview
