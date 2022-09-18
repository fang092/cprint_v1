import React from 'react'
import logo from '../images/CprintLogo.svg'

function Navbar() {
  return (
    <nav className='w-full h-14 flex flex-row justify-start items-center p-6 bg-gradient-to-b from-cprintBlue '>
        <div className='flex justify-start items-center bg-red-500 xs:basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-2/4'>
            <a href="#home">
                <img src={logo} className=" w-16 h-auto" alt='C-Print Logo'/>
            </a>
        </div>
        <div className=' flex justify-end items-center space-x-4 xs:basis-1/2 sm:basis-1/2 md:basis-3/5 lg:basis-2/4 bg-green-400'>
            <button className='CprintBtn'>
                Log In
            </button>
            <a href='#SignUp' className='font-bold'>
                Sign Up
            </a>
        </div>
    </nav>
  )
}

export default Navbar