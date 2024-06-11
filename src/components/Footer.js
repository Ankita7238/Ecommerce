import React from 'react'
import { FaFacebook , FaYoutube, FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex justify-between bg-blue-500 text-white p-5'>
        <div className='font-bold text-2xl '>Generics</div>
        <div className='mx-5 flex justify-around gap-x-8 items-center text-black text-3xl'>
            <div className='p-2 hover:bg-lime-200'><FaFacebook /></div>
            <div className='p-2 hover:bg-lime-200'><FaYoutube/></div>
            <div className='p-2 hover:bg-lime-200'><FaInstagramSquare/></div>
        </div>
    </footer>
  )
}

export default Footer