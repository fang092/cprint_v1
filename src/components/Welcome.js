import React from 'react'
import logo from '../images/CprintLogo.svg'

function Welcome() {
  return (
    <section id="welcome" className='w-full h-[750px] xs:h-3/4 sm:h-3/4 md:h-3/4 lg:h-3/4 bg-welcome bg-cover '>
        <div className="w-full h-full bg-black/40 ">
            <div className="flex flex-row w-full h-fit">
                <nav className='w-full h-14 flex flex-row justify-start items-center p-10'>
                        <div className='flex justify-start items-center xs:w-1/5 sm:w-1/2 md:w-1/2 lg:w-1/2' >
                            <a href="#home">
                                <img src={logo} className=" w-16 h-auto" alt='C-Print Logo'/>
                            </a>
                        </div>
                        <div className=' flex justify-end items-center space-x-6 xs:w-4/5  sm:w-1/2 md:w-1/2 lg:w-1/2'>
                            <button className='CprintBtn text-2xl xs:text-lg xs:w-fit sm:w-1/2 md:w-1/4 lg:w-1/6'>
                                Log In
                            </button>
                            <a href='#SignUp' className='font-bold  text-white text-2xl xs:text-lg xs:w-fit sm:w-1/2 md:w-1/4 lg:w-1/6'>
                                Sign Up
                            </a>
                        </div>
                </nav>
            </div>
            <div className="flex flex-row w-full h-fit ">
                <div className='flex flex-row w-full h-full pt-12 p-6 '>
                
                
                    <div className='flex flex-col w-1/5 h-fit p-12 space-y-8 xs:w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/2'>
                        <p className='text-left text-white font-bold  text-2xl xs:text-2xl sm:text-4xl md:text-6xl lg:text-7xl '>
                        Printing Made Comically Easy.
                        </p>
                        {/* Prompt and SignUp Button */}
                        <p className='text-left font-latoReg text-white xs:text-sm sm:text-base md:text-xl lg:text-2xl '>
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