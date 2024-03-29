import React from 'react'
import Gif from"../assets/kk.gif" 
import ReactImg from "../assets/react.png"
import ReduxImg from "../assets/redux.png"
import Sass from "../sass.png"
const Header = () => {
  return (
    <div className='pt-[200px] lg:pt-0 bg-[#EDF2F8] w-full h-[100vh] flex lg:flex-row flex-col items-center justify-center gap-10'>
        {/* download cv */}
        <div className='flex flex-col gap-6 md:gap-10 items-center  md:items-end w-full max-w-[400px]'>
          <div className='flex justify-center items-center bg-[white] gap-10 w-full max-w-[200px] text-center rounded-[15px] shadow-lg '>
            <p className='text-[40px]'>👋</p>
            <p className='flex flex-col'>
                <span className='text-slate-400 text-[20px]'>Hello,I am</span>
                <span className='font-bold text-[30px]'>Dinora</span>
            </p>
            </div> 
            <br />
          <div className='w-full  bg-[white] max-w-[300px] p-3 text-slate-400 text-[20px] rounded-[15px] shadow-lg'>FRONTEND/REACT DEVELOPER/</div>
          <a href='rezume.pdf' download type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Downlaod CV</a>

        </div>

        {/* gif for developer */}

        <div className='text-center'>
          <img src={Gif} alt="Gif" />
        </div>
        <div className=' flex lg:flex-col gap-10'>
          <div className='w-[75px] g-[75px] lg:w-[150px] lg:h-[150px] rounded-full bg-white shadow-2xl flex justify-center items-center '>
            <img src={ReduxImg} className='w-[80%]' alt="img" />
          </div>
          <div className='lg:w-[200px] lg: h-[200px] w-[200px] lg:h-[200px] rounded-full bg-white shadow-2xl'>
            <img src={ReactImg} className='w-[90%]' alt="img" />
          </div>
          <div className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full bg-white shadow-2xl'>
            <img src={Sass} className='w-[80%]' alt="img" />
          </div>
        </div>
    </div>
  )
}

export default Header
