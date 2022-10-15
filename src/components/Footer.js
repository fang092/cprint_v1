import React from 'react'
import logo from '../images/CprintLogo.svg'

function Footer() {
  return (
   <section id="footer" className='flex flex-row mx-auto bg-cprintBlue w-full h-fit p-8 xs:w-full xs:flex-col xs:space-y-8 xs:divide-y xs:divide-dashed sm:w-full sm:flex-col sm:space-y-10 sm:divide-y sm:divide-dashed md:w-full md:flex-row md:divide-none lg:w-full lg:flex-row lg:divide-none'>
        <div className=' w-[25%] flex flex-col justify-center items-start xs:w-full xs:items-center sm:w-full sm:justify-center sm:items-center md:w-[25%] md:items-start lg:w-[25%] lg:items-start'>
            <img src={logo} alt="Cprint Logo" />
            <p className="xs:text-base sm:text-base md:text-base lg:text-base  ">
                42 Wallaby Way <br/>
                Mount Vernon, VA 22060s
            </p>

        </div>
        <div className=' w-[50%] p-2 flex flex-col justify-center items-center space-y-3 xs:w-full xs:items-center sm:w-full sm:items-center md:w-[50%] lg:w-[50%]  '>
            <p>Sign up for our newsletter!</p>
            
            <input type="text" id="email" name="email" placeholder='Your Email'/>
            <button className='CprintBtn'> Sign Up</button>
    
        </div>
        <div className=' w-[25%] flex flex-col justify-center items-end space-y-2 xs:w-full xs:items-center sm:w-full sm:items-center md:w-[25%] md:items-end lg:w-[25%] lg:items-end'>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Get In Contact</p>
            
        </div>
   </section>
  )
}

export default Footer