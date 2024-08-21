import React from 'react'

const Description = ({product}) => {
    console.log(Description)
  return (
    <div >
    <p className='p-4 border-l-slate-950 w-full h-full border-4 m-4 '>  {product.description}</p>
      
    </div>
  )
}

export default Description