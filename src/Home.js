import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

const Home = () => {


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
    </>
  )
}

export default Home