import React, { useContext,  useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {


  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChnageHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }




  return (
    <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Informastion</p>
          <div className="multi-fields">
            <input name='firstName' onChange={onChnageHandler} value={data.firstName} type="text" placeholder='First Name'/>
            <input name='lastName' onChange={onChnageHandler} value={data.lastName} type="text" placeholder='Last Name'/>
          </div>
          <input name='email' onChange={onChnageHandler} value={data.email} type="email" placeholder='Email address'/>
          <input name='street' onChange={onChnageHandler} value={data.street} type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input name='city' onChange={onChnageHandler} value={data.city} type="text" placeholder='City'/>
            <input name='state' onChange={onChnageHandler} value={data.state} type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input name='zipcode' onChange={onChnageHandler} value={data.zipcode} type="text" placeholder='Zip Code'/>
            <input name='country' onChange={onChnageHandler} value={data.country} type="text" placeholder='Country'/>
          </div>
          <input name='phone' onChange={onChnageHandler} value={data.phone} type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>&{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT </button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
