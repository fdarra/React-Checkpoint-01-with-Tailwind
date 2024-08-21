import React from 'react'
import './App.css'
import Products from './Product.js'
import Name from './components/Name.jsx'
import Description from './components/Description.jsx'
import Price from './components/Price.jsx'
import ImageProduct from './components/ImageProduct.jsx'



const App = () => {

  return (
    <div className="app m-20 flex justify-around items-center" >
      
      {Products.map((product) => ( 
       <div className='flex-col'>        
       <><ImageProduct product={product} alt={product.name} />
       <Name product={product} />
       <Price product={product} />
       <Description product={product} /></>
</div>
      
            ))
          
          }
          
      
      



     

      </div>
  )
}

export default App
