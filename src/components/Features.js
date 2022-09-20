import React from 'react'
import quality from '../images/Quality.png'
import shipping from '../images/Shipping.png'
import variety from '../images/Variety.png'

function Features() {
  return (
    <section id="features" className=' w-full h-auto '>
        <div className='h-full bg-hatch bg-cover flex flex-row justify-center items-center space-x-4 p-6 mt-24 xs:flex-col xs:space-x-0 xs:space-y-4 sm:flex-col sm:space-x-0 sm:space-y-4 md:flex-col md:space-x-0 md:space-y-4 lg:flex-row lg:space-x-4  '>
            
            <div className='flex flex-col items-center w-1/4 h-fit p-6 xs:w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <img className="w-16 h-16 mb-4" src={quality} alt="quality"/>
                <p className='text-center text-xl'>
                    We carry high quality paper and will outsource to match customer request.
                </p>
            </div>
            <div className=' flex flex-col w-1/4 h-fit items-center p-6 xs:w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <img className="w-16 h-16 mb-4" src={shipping} alt="shipping"/>
                <p className='text-center text-xl'>
                    We offer express and expediated shipping. Even overnight shipping for those last minute comic-cons
                </p>
            </div>
            <div className=' flex flex-col w-1/4 h-fit  items-center p-6 xs:w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <img className="w-16 h-16 mb-4" src={variety} alt="variety"/>
                <p className='text-center text-xl'>
                    We have a variety of paper and printing technigues to suit any need!
                </p>
            </div>
        </div>
        
    </section>
  )
}

export default Features