import React, { useState } from 'react'
import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
    const[toggle,setToggle] =useState(false)
    
  return (
   

    <nav className=' containerr fixed w-full h-[80px] backdrop-blur flex justify-between items-center'>
        <div className='text-[30px] font-bold'>
            Dinora.
        </div>
        <div>
            <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:bg-[transparent] md:w-auto md:static bg-[white]  w-[80%] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] md:h-auto h-[100vh] absolute transition-[1s] md:p-0 p-10 text-[14px]`} >
                <li><a href="#" className='links'>Home</a></li>
                <li><a href="#" className='links'>Skills</a></li>
                <li><a href="#" className='links'>My Works</a></li>
                <li><a href="#" className='links'>Contact</a></li>
            </ul>
        </div>

        <div className='flex gap-5 ' >
            <div>RU</div>
            <div>ENG</div>
        </div>
        {/* /*bars/* */}
        <div className='p-1 bg-[#313bac] text-[white] rounded-full text-[25px] md:hidden block' onClick={()=>setToggle(!toggle)}>
        
        <HiMiniBars2/> 
        </div>
    </nav>
  )
}

export default Navbar