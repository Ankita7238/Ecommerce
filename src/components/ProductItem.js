import React from 'react'
import CartContext from '../store/cart-context'
import { useContext } from "react";
import { Link } from 'react-router-dom';

const ProductItem = ({product}) => {
  const cartCtx = useContext(CartContext);

  const addCartHandler = (e) => {
    e.preventDefault();
    console.log(cartCtx.cartItem);
    const cartItem = {
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    };
    cartCtx.onAddItem(cartItem);
  };
   console.log(product)
  return (

    <Link to={`product/${product.title}`} state={{ product: product }}>
    <div className=' mt-5 bg-white w-[60%] m-auto items-center flex flex-col'>
        <h4 className='my-2 font-serif text-lg text-black font-extrabold text-center'>{product.title}</h4>
       
        <div className='w-full inline-block overflow-hidden object-contain'>
            <img src={product.imageUrl} alt='product' className=' aspect-square w-400 hover:scale-125 duration-500 transition-transform'/>
        </div>
        
        <div className='mt-6 flex gap-x-12 justify-between'>
            <span>${product.price}</span>
            <button className=' p-2 font-semibold bg-blue-400 hover:bg-blue-600' type='submit' onClick={addCartHandler}>Add to Cart</button>
        </div>
    </div>
    </Link>
  )
}

export default ProductItem