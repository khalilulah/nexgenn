import React from 'react'
import ServicesPageHero from '@/components/ServicesPageHero'
import ChooseUs from '@/components/ChooseUs'
import ServicesPageServicesRendered from '@/components/ServicesPageServicesRendered'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='font-clashDisplay m-auto max-w-[1345px]'>
      <ServicesPageHero/>
      <ChooseUs/>
      <ServicesPageServicesRendered/>
      <Footer/>
    </div>
  )
}

export default page
