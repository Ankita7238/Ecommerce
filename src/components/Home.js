import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-y-4 justify-center items-center bg-slate-700 p-5'>
        <div className='rounded-md p-4 font-semibold text-2xl border border-blue-400'>Get our Latest Album</div>
        <div className='text-5xl text-blue-500 p-5'><FaCirclePlay/></div>
    </div>
    <div className='w-auto md:w-[70vw] m-auto'>
      <h2 className='font-serif font-semibold text-xl my-5 text-center'>Tours</h2>
        <div className='w-[70%] my-6 mx-auto grid grid-custom gap-6 justify-items-center justify-center items-center'>
            <div >JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className=' ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>

            <div>JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className='ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>

            <div>JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className='ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>

            <div>JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className='ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>

            <div>JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className='ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>

            <div>JUL16</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div><button className='ml-8 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>Buy Ticket</button></div>
        </div>
    </div>
    </>
    
  )
}

export default Home