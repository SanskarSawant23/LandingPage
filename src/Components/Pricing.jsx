import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCheck, CheckCircle } from 'lucide-react'

export const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className = "text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Pricing </h2>

        <div className='flex flex-wrap'>
            {pricingOptions.map((items, index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
                   <div className='p-10 border border-neutral-700 rounded-xl'>
                    <p className='text-4xl mb-8 text-left' >
                        {items.title}
                        {items.title === 'Pro' && (<span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2'> (Most Popular)</span>)}
                    </p>
                    <p className='mb-8 text-left'>
                        <span className='text-5xl mt-6 mr-2 '>{items.price}</span>
                        <span className='text-neutral-400 tracking-tight'>/Month</span>
                    </p>
                    <ul>
                        {items.features.map((features, index)=>(
                        <div className=''>
                           <li className='mt-8 flex items-center'>
                                <CheckCircle></CheckCircle>
                                <span className='ml-2 '>{features}</span>
                            </li>

                            </div>
                            
                        ))}
        
                    </ul>
                    <ul>
                        <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 hover:text-white border border-orange-900 rounded-lg transition duration-200'>
                            Subscribe
                        </a>
                    </ul>
                   </div>
                </div>
                

            ))}
        </div>
    </div>
  )
}
