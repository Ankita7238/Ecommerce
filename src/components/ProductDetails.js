import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CartContext from '../store/cart-context';
import { useContext } from "react";
import Cart from './Cart';

const ProductDetails = () => {
  const location = useLocation();
  const { title, price, imageUrl, rating, description, additionalImages } = location.state.product;
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (!location.state.product) {
      console.error("Product data is missing!");
    }
  }, [location.state.product]);

  if (!location.state.product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const cartItem = {
      title: title,
      price: price,
      imageUrl: imageUrl,
      quantity: Number(quantity),
    };
    setQuantity(1); // Reset quantity after adding to cart
    cartCtx.onAddItem(cartItem);
  };

  return (
    <>
    
      <Cart />

      <div className='  w-[70%] m-auto flex  justify-center items-center p-2'>

        <div className='  w-[45%] m-auto flex-col justify-center items-center'>
          <div className='grid grid-cols-1   justify-center items-center'>
            {/* Main product image */}
              <img src={imageUrl} alt='product' className='w-full h-[80%] p-4  mb-4 object-contain rounded-lg shadow-md ' />
            {/* Additional images */}
            <div className='grid grid-cols-3 gap-2 w-full '>
              {additionalImages.map((img, idx) => (
                <img key={idx} src={img} alt={`product ${idx}`} className=' h-auto mb-2 object-contain rounded-lg shadow-md' />
              ))}
            </div>
          </div>
        </div>


        <div className='  w-[50%] m-auto flex-col justify-center items-center'>

          <div className='mt-5 '>
            <h2 className='my-5 font-extrabold text-3xl text-center'>{title}</h2>
            <p className='mb-2 text-xl font-bold text-center'>{description}</p>
            <div className='flex-col m-5 justify-between font-semibold'>
              <p className='mb-2'>Rating: {rating} / 5</p>
              <p className='mb-2'>Price: ${price}</p>
            </div>  
          </div>

          <div className='flex m-5 justify-between font-semibold'>
          <div className='mt-5 flex flex-row items-center'>
            <label className='mr-2' htmlFor='quantity'>Quantity:</label>
            <input
              id='quantity'
              type='number'
              min='1'
              value={quantity}
              onChange={handleQuantityChange}
              className='w-16 border border-gray-300 rounded p-1'
            />
          </div>
          <button
            onClick={handleAddToCart}
            className='mt-5 p-2 font-semibold bg-blue-400 hover:bg-blue-600 text-white rounded'
          >
            Add to Cart
          </button>
          </div>

          {/* Hardcoded Reviews */}
          <div className='m-5 w-full max-w-md mx-auto'>
            <h3 className='text-xl font-bold mb-4'>Customer Reviews</h3>
            <div className='border border-gray-200 rounded p-4'>
              <div className='flex items-center mb-2'>
                <div className='w-12 h-12 rounded-full bg-gray-200 mr-3'></div>
                <div>
                  <div className='font-semibold'>John Doe</div>
                  <div className='text-sm text-gray-500'>5 stars</div>
                </div>
              </div>
              <p className='text-sm'>Great product, exactly as described. Fast shipping!</p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        </div>
    </div>
  
    </>
  );
};

export default ProductDetails;
