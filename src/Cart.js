import React from 'react'
import {useCart} from 'react-use-cart'
import { useNavigate } from 'react-router-dom';
import FinalPage from './Finalpage';
const Cart = () => {
  const navigate=useNavigate();

  const navigatehome=()=>
  {
    navigate('/')
  }
  const navigateFinal=()=>
  {
    navigate('/Finalpage')
  }
  const {isEmpty,
    totalItems,
    items,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  }=useCart();
  if(isEmpty) return <h1 className='text-center'>You Have Not Ordered Anything</h1>
  return (
    <>
<div className='cart'>
    <section className='py-4 container'>
      <h1 className='text-center'>Your Order is being prepared</h1>
      <h1 className='text-center'>You Have Ordered</h1>
    <div className='row justify-content-center'>
      <div className="col-12">
      <h5>Cart ({totalUniqueItems}) total items:({totalItems})</h5>
      <table className='table table-light table-hover m-0'>
        <tbody>
        {items.map((item,index)=>
        {
          return (
          <tr key={index}>
            <td>
              <img src={item.img} style={{height:'6rem'}} />

            </td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>Quantity:({item.quantity})</td>
            <button className='btn btn-info ms-2'
            onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
            >-</button>
            <button className='btn btn-info ms-2'
            onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
            >+</button>
            <button className='btn btn-danger ms-2'
            onClick={()=>removeItem(item.id)}>Remove Items</button>
          </tr>
          )
        })}
        </tbody>

      </table>
      </div>
      
    </div>
    
    </section>
    <button className='btn btn-danger mx-4' onClick={navigatehome}>Go to Homepage</button>
    <button className='row justify-content-center btn btn-danger mx-2' onClick={navigateFinal}>Order History</button>
    
    </div>
    
   </>
  )
}

export default Cart