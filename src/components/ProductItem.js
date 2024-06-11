import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='mt-5 bg-white w-[60%] m-auto flex flex-col'>
        <h4 className=' my-2 font-serif text-lg text-black font-extrabold text-center'>{product.title}</h4>
        <div className='w-full inline-block overflow-hidden'>
            <img src={product.imageUrl} alt='product' className='w-400 hover:scale-125 duration-500 transition-transform'/>
        </div>
        
        <div className='mt-6 flex justify-between'>
            <span>${product.price}</span>
            <button className=' p-2 font-semibold bg-blue-400 hover:bg-blue-600' type='submit'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductItem