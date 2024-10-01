import React from 'react'
import Link from 'next/link'
import AboutPageHero from '@/components/AboutPageHero'
import CoreValues from '@/components/CoreValues'
import MissionAndVision from '@/components/MissionAndVision'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='font-clashDisplay m-auto max-w-[1345px]'>
      <AboutPageHero/>
      <CoreValues/>
      <MissionAndVision/>
      <Footer/>
    </div>
  )
}

export default page
