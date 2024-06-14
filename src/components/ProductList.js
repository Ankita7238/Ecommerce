import React from 'react'
import ProductItem from './ProductItem.js'
import CartContext from "../store/cart-context";
import Cart from './Cart.js';

import { useContext } from "react";

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'A beautiful collection of vibrant colors.',
    additionalImages: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    ],
    rating: 4.5,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'A classic collection of black and white colors.',
    additionalImages: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    ],
    rating: 4.0,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'A striking collection of yellow and black colors.',
    additionalImages: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    ],
    rating: 4.2,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    description: 'A soothing collection of blue colors.',
    additionalImages: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ],
    rating: 4.8,
  },
];

const ProductList = () => {
  const cartCtx = useContext(CartContext);
  const cartHandler = () => {
    cartCtx.onVisible();
  };

  return (
    <>
      <h2 className='my-5 font-bold text-center text-xl'>Products</h2>
      <div className='my-5 w-auto lg:w-[70vw] mx-auto grid grid-cols-2 gap-x-4 gap-y-10 justify-center items-center'>
        {productsArr.map((product) => (
    
            <ProductItem product={product} />
  
        ))}
      </div>
      <div className='my-8 flex justify-center'>
        <button
          className=' my-4 p-2 font-semibold bg-blue-400 hover:bg-blue-600'
          type='submit'
          onClick={cartHandler}
        >
          See the Cart
        </button>
      </div>
      <Cart />
    </>
  );
};

export default ProductList;