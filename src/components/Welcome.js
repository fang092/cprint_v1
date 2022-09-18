import React from 'react'

function Welcome() {
  return (
    <section id="welcome" className='w-full h-full p-6  xs:bg-gray-500 sm:bg-blue-400 md:bg-green-400 lg:bg-pink-400'>
        {/* Hero section  */}
        <div className='flex flex-row w-full h-3/4 pt-96 p-6 bg-purple-500 bg-welcome bg-cover'>
            <div className=' flex flex-col w-1/2 h-fit m-auto justify-center items-center sm:w-3/4 xs:w-3/4 bg-green-600'>
                <p className='bg-orange-400 w-full text-center font-bold mb-2 text-2xl sm:text-2xl md:text-4xl lg:text-4xl '>
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
                <button className='CprintBtn text-3xl  lg:text-4xl lg:p-3  '>
                    Sign Up
                </button>
            </div>
           
        </div>

    </section>
  )
}

export default Welcome