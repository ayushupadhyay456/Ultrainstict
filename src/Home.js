import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import {useNavigate} from 'react-router-dom'
import homeimg from './images/home-img.png'
import './index.css'
const Home = () => {
  

  const navigate=useNavigate();
 const navigateCart=()=>
 {
   navigate('/Cart')
 }

  return (
    <>

    <div className='container mt-2' style={{height:"200px",width:"100%",backgroundColor:"#DD7230"}}>
    <img className='mt-4' src={homeimg} style={{height:"150px"}} alt="..."/>
    <p className='contents'>One Stop Solution For Your Hunger</p>
    </div>
    <h1 className='text-center heading'>All Items</h1>
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
    <div style={{marginLeft:"130px"}}>
    <button className=' btn btn-danger row justify-content-center' onClick={navigateCart}>Go To Cart</button>
    </div>
    
    
    </>
  )
}

export default Home