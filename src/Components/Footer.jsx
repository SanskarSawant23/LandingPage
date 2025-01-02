import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='mt-20 border-t border-neutral-700 py-10 '>
        <div className='grid gird-cols-2 lg:grid-cols-3 gap-4'>
            <div className='text-left pl-20'>
            <h3 className='text-md font-semibold mb-4'>
                Resources
            </h3> 
            <ul className='space-y-2'>
                {resourcesLinks.map((link,key)=>(
                    <li key={key} >
                        <a href={link.href} className='text-neutral-600 hover:text-black'>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div className='text-left pl-20'>
            <h3 className='text-md font-semibold mb-4'>
                Platform 
            </h3> 
            <ul className='space-y-2'>
                {platformLinks.map((link,key)=>(
                    <li key={key} >
                        <a href={link.href} className='text-neutral-600 hover:text-black'>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div className='text-left pl-20'>
            <h3 className='text-md font-semibold mb-4'>
                Community 
            </h3> 
            <ul className='space-y-2'>
                {communityLinks.map((link,key)=>(
                    <li key={key} >
                        <a href={link.href} className='text-neutral-600 hover:text-black'>{link.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            

        </div>
    </footer>
  )
}

export default Footer