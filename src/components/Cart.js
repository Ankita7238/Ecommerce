import React from 'react'
import Modal from './Modal/Modal'
import CartContext from '../store/cart-context'; 
import  { useContext } from "react";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalamount = cartCtx.cartItem.reduce(
    (total, item) => total + (item.quantity * item.price),
    0
  );
  const onClose = () => {
    cartCtx.onVisible();
  };

  
  return (
   <Modal>
    <div className='w-[500px] relative p-2  '>
      <button className='absolute border-solid border-gray-300  border-2 p-1 rounded-md right-0 top-0' onClick={onClose}>X</button>
      <h2 className='my-5 font-bold text-center text-xl'>Cart</h2>
      <div className='grid grid-custom-cart gap-x-4 justify-start items-center'>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Item</div>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Price</div>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Quantity</div>
      </div>
{
(totalItems>0)&&
   (
  <ul>
  {
    cartCtx.cartItem.map((element,i)=>{
      return(
      <div className='my-2 grid grid-custom-cart gap-x-4 justify-start items-center ' key={i}>

        <div className=' p-1 flex align-middle gap-x-2 items-center '>
          <img src={element.imageUrl} alt='picture' className='w-16 aspect-square object-contain'/>
          <span>{element.title}</span>
        </div>

        <div className=''>
        <span className='p-1 gap-x-2 items-center'>${element.price}</span>
        </div>
        
        <div className='p-1 flex gap-x-2 items-center   w-fit'>
          <input type='number'  className='w-10 border-solid border-gray-300 border-2' value={element.quantity}/>
          <button className='p-1 bg-red-600 hover:bg-red-700 rounded-md'>Remove</button>
        </div>

      </div>)
    })
  }
  </ul>)
}      
      <div className='flex flex-col justify-end'>
      <div className='my-5 font-bold text-xl text-right' ><span className=''>Total: ${totalamount}</span></div>
      <button className=' self-center my-4 p-2 font-semibold bg-blue-400 hover:bg-blue-600 text-center' type='submit'>Purchase</button>
      </div>
      
    </div>
   </Modal>
  )
}

export default Cart