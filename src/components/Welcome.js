import React from 'react'

function Welcome() {
  return (
    <section id="welcome" className='w-full h-full p-6 '>
        {/* Hero section  */}
        <div className='flex flex-row w-full h-3/4 pt-96 p-6 bg-welcome bg-cover '>
            <div className=' flex flex-col w-1/5 h-fit m-auto justify-center items-center p-4 bg-white/50  backdrop-opacity-10 drop-shadow-2xl   xs:w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/2 '>
                <p className=' w-full text-center font-bold mb-2 text-2xl p-6 sm:text-2xl md:text-4xl lg:text-6xl '>
                    Welcome to C-Print!
                </p>
                <p className='text-center sm:text-base md:text-xl lg:text-2xl '>
                    Need a comic, illustration, or wedding invite printed?
                </p>
                <br/>
                 {/* Prompt and SignUp Button */}
                <p className='text-center sm:text-sm md:text-xl lg:text-xl '>
                    We will help take the guess-work out of it, so you can focus 
                    on creating it!
                </p>
                <br/>
                <button className='CprintBtn text-3xl  lg:text-3xl lg:p-3  '>
                    Sign Up
                </button>
            </div>
           
        </div>

    </section>
  )
}

export default Welcome