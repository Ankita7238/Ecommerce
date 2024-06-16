import React from 'react'
import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const authctx = useContext(AuthContext)
  console.log(cartCtx);
  const totalItems = cartCtx.cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartHandler = () => {
    cartCtx.onVisible();
  };

  const logoutHandler = () => {
    authctx.logout()
  }
  return (
    <>
    <header className='bg-black text-xl font- p-4 flex justify-between items-center text-white border-white border-b-4'>
        <nav className='flex gap-x-10 m-auto'>
            <div><NavLink to="/home">Home</NavLink></div>
            <div><NavLink to="/">Store</NavLink></div>
            <div><NavLink to="/about">About</NavLink></div>
            {
              authctx.isLoggedIn ?
              <div><button onClick={logoutHandler}>Log Out</button></div>
              :
              <div><NavLink to="/auth">Log In</NavLink></div>
            }
            
            <div><NavLink to="/contact">Contact Us</NavLink></div>
        </nav>
        <div className='relative'>
        {
            authctx.isLoggedIn &&
            <>
              <button type="button" className='py-1 px-3 rounded-md border-solid border-2 border-white' onClick={cartHandler}>Cart</button>
              <div className=' p-1 rounded-full bg-red-600 absolute -top-2 -right-1 text-sm'>{totalItems}</div>
            </>
        }
        </div>
    </header>
    <section  className='bg-slate-700'>
      <div className='flex align-item justify-center p-8 text-4xl text-white font-bold'> <span>Generics</span></div>
    </section>
    </>
    
  )
}

export default Header