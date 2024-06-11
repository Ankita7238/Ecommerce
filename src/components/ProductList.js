import React from 'react'
import ProductItem from './ProductItem.js'

const productsArr = [
{
title: 'Colors',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
},

{
title: 'Blue Color',
price: 100,
imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
}

]

const ProductList = () => {
  return (
    <>
    <h2 className='my-5 font-bold text-center text-xl'>Products</h2>
    <div className='mt-5 mb-2 w-[70vw] m-auto grid grid-cols-2 gap-x-4 gap-y-10' >
        {
            productsArr.map((product,i)=>{
                return <ProductItem product={product} key={i}/>
            })
        }
    </div>
    <div className='my-8 flex justify-center'>
    <button className=' my-4 p-2 font-semibold bg-blue-400 hover:bg-blue-600 ' type='submit'>See the Cart</button>
    </div>
    </>
  )
}

export default ProductList