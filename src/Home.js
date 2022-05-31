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
            data.productData.map((element,key)=>{
                return (
                  <Itemcard 
                  img={element.img} 
                  title={element.title} 
                  desc={element.desc}
                   price={element.price}
                    key={key} />
                )
            })
          }
        
        </div>
    </section>
    </>
  )
}

export default Home