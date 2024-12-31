import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
 const Navbar = () => {

    const[openDrawer, setOpenDrawer] = useState(false);

    const toggle = ()=>{
        setOpenDrawer(!openDrawer);
    }

    const navItems = ["Features", "Workflow","Pricing", "Testimonials"];
     
  return (
        <>
            <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className='flex items-center flex-shrink-0'>Logo.
                    <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12 '>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Workflow</a>
                    </li>
                    <li>
                        <a href="">Pricing</a>
                    </li>
                    <li>
                        <a href="">Testimonials</a>
                    </li>
                    
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounder-md'>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggle}>
                        {openDrawer ? <X/>: <Menu></Menu>}
                    </button>
                </div>

                </div>
                {openDrawer &&(
                    <div className="fixed right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        {navItems.map((items,index)=>(
                           
                                <li key={index} className='py-4'><a href='#'>{items}</a></li>
                            

                        ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className='py-2 py-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800' >
                                Create An Account
                            </a>
                            
                        </div>
                    </div>
                ) }
                
            </div>
            </nav>
        </>
  )
}

export default Navbar