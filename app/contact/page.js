import React from 'react'
import ContactUsPageHero from '@/components/ContactUsPageHero'
import GetInTouch from '@/components/GetInTouch'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div className='font-clashDisplay m-auto max-w-[1345px]'>
      <ContactUsPageHero/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default page
