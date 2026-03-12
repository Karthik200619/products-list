import React from 'react'
    
function Product({productObj}) {
  return (
    <div className='p-3 shadow-1xl   bg-gray-400 ' >
        <img src={productObj.image} alt="" />
        <p className='text-2xl text-blue-400' >{productObj.name}</p>
        <p className='text-3xl text-red-400' >{productObj.price}</p>
    </div>
  )
}

export default Product