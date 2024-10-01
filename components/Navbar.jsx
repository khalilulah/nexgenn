import React from 'react'
import Link from 'next/link'
const links = [
    {href:'/', label:'Home'},
    {href:'/about', label:'About'},
    {href:'/services', label:'Services'},
    {href:'/contact', label:'Contact Us'},
]

const Navbar = () => {
  return (
    <nav className=' font-sans max-w-[1345px] m-auto bg-black'>
      <div className='w-[100vw] max-w-[1345px] m-auto h-[100vh]'>
        <div className='flex h-16 mx-20 pt-5 justify-between'>
      <Link href='/' className=' '>Nexgenn</Link>
      <p>close</p>
        </div>
        <div className=' flex flex-wrap w-[100vw] h-[90vh] max-w-[1345px]  '>
            {links.map((link) => {
                return (
                <Link href={link.href} key={link.label} className='h-1/2 flex justify-center items-center w-1/2  hover:bg-neutral-950'>
                    {link.label}
                </Link>)
            })}
        </div>
      </div>
      <hr className='w-32' />
      <div className='contact flex flex-col justify-center h-32  pl-20'>
        <h1>
          Reach Us
        </h1>
        <div className='flex justify-between w-[330px] mt-[10px]'>
          <p className='text-[12px]'>johndoe@gmail.com</p>
          <p className='text-[12px]'>+234-567-890-12</p>
          <p className='text-[12px]'>+234-567-890-12</p>
        </div>
      </div>
      <hr className='w-48' />
    </nav>
  )
}

export default Navbar
