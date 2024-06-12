import React from 'react'
import Modal from './Modal/Modal'
const cartElements = [

    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    
    {
    title: 'Yellow and Black Colors',
    price: 70,    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    
    ]
    
    
const Cart = () => {
  return (
   <Modal>
    <div className='border-2 border-solid border-gray-200 relative p-5'>
      <span className='absolute border-solid border-gray-300  border-2 p-1 rounded-md right-0 top-0'>X</span>
      <h2 className='my-5 font-bold text-center text-xl'>Cart</h2>
      <div className='grid grid-custom-cart gap-x-4 justify-start items-center'>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Item</div>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Price</div>
        <div className='border-solid border-b-2 border-black font-xl font-semibold p-1'>Quantity</div>
      </div>
      <ul>
      {
        cartElements.map((element,i)=>{
          return(
          <div className='my-2 grid grid-custom-cart gap-x-4 justify-start items-center' key={i}>

            <div className=' p-1 flex align-middle gap-x-2 items-center'>
              <img src={element.imageUrl} alt='picture' className='w-16 aspect-square object-contain'/>
              <span>{element.title}</span>
            </div>

            <div className=''>
            <span className='p-1 gap-x-2 items-center'>${element.price}</span>
            </div>
            
            <div className='p-1 flex gap-x-2 items-center'>
              <input type='number' placeholder='1' className='w-10 border-solid border-gray-300 border-2'/>
              <button className='p-2 bg-red-600 hover:bg-red-700 rounded-md'>Remove</button>
            </div>

          </div>)
        })
      }
      </ul>
      
      <div className='flex flex-col justify-end'>
      <div className='my-5 font-bold text-xl text-right' ><span className=''>Total: $0.00</span></div>
      <button className=' self-center w-[20%] my-4 p-2 font-semibold bg-blue-400 hover:bg-blue-600 text-center' type='submit'>Purchase</button>
      </div>
      
    </div>
   </Modal>
  )
}

export default Cart