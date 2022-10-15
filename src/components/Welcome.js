import React from 'react'
import logo from '../images/CprintLogo.svg'

function Welcome() {
  return (
    <section id="welcome" className='w-full h-full bg-welcome bg-cover '>
        <div className="w-full h-full bg-black/40 ">
            <div className="flex flex-row w-full h-fit ">
                <nav className='w-full h-14 flex flex-row justify-start items-center p-10  z-40'>
                        <div className='flex justify-start items-center xs:basis-1/2 sm:basis-1/2 md:basis-2/5 lg:basis-2/4'>
                            <a href="#home">
                                <img src={logo} className=" w-16 h-auto" alt='C-Print Logo'/>
                            </a>
                        </div>
                        <div className=' flex justify-end items-center space-x-6 xs:basis-1/2 sm:basis-1/2 md:basis-3/5 lg:basis-2/4'>
                            <button className='CprintBtn text-2xl'>
                                Log In
                            </button>
                            <a href='#SignUp' className='font-bold text-white text-2xl'>
                                Sign Up
                            </a>
                        </div>
                </nav>
            </div>
            <div className="flex flex-row w-full h-fit ">
                <div className='flex flex-row w-full h-full pt-96 p-6 '>
                
                
                    <div className='flex flex-col w-1/5 h-fit p-12 space-y-8 xs:w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/2'>
                        <p className='text-left text-white font-bold  text-2xl sm:text-2xl md:text-4xl lg:text-7xl '>
                        Printing Made Comically Easy.
                        </p>
                        {/* Prompt and SignUp Button */}
                        <p className='text-left font-latoReg text-white sm:text-sm md:text-xl lg:text-2xl '>
                            We'll help take the guess-work out of it, so you can focus 
                            on creating it!
                        </p>
                        <br/>
                        <button className='CprintBtn text-3xl  lg:text-3xl lg:p-3  '>
                            Sign Up
                        </button>
                    </div>
                
                </div>
            </div>
        </div> 
        
    </section>
  )
}

export default Welcome