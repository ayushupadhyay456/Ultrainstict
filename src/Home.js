import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate();
 const navigateCart=()=>
 {
   navigate('/Cart')
 }

  return (
    <>
    <h1 className='text-center'>All Items</h1>
    <section className="py-4 container">
        <div className="row justify-content">
          {
            data.productData.map((item,index)=>{
                return (
                  <Itemcard 
                  img={item.img} 
                  title={item.title} 
                  desc={item.desc}
                   price={item.price}
                   item={item}
                    key={index} />
                )
            })
          }
        
        </div>
    </section>
    <button className=' btn btn-danger text-center' onClick={navigateCart}>Go To Cart</button>
    
    </>
  )
}

export default Home