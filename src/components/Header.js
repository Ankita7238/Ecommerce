import React from 'react'

const Header = () => {
  return (
    <>
    <header className='bg-black text-xl font- p-4 flex justify-between items-center text-white border-white border-b-4'>
        <nav className='flex gap-x-10 m-auto'>
            <div>Home</div>
            <div>Store</div>
            <div>About</div>
        </nav>
        <div className='relative'>
            <div type="button" className='py-1 px-3 rounded-md border-solid border-2 border-white'>Cart</div>
            <div className=' p-1 rounded-full bg-red-600 absolute -top-2 -right-1 text-sm'>0</div>
        </div>
    </header>
    <section  className='bg-slate-700'>
      <div className='flex align-item justify-center p-8 text-4xl text-white font-bold'> <span>Generics</span></div>
    </section>
    </>
    
  )
}

export default Header