import React from 'react'

const ImageProduct = ({product}) => {
  return (
    <div className='container w-48 h-48 flex items-center justify-between m-8'>
      <img src={product.imge} alt='product' className='object-cover  rounded-md border-opacity-15'/>

        
     

    </div>
  )
}

export default ImageProduct