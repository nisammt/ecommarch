import React from 'react'
import { useSelector } from "react-redux";
import { axiosInstance } from '../../config/axiosInstance';

const Cart = () => {
  const {cartData} = useSelector ((state)=>state.Cart)
  
  const addQuantity = async (productId) =>{
    try {
            await  axiosInstance({
              method: "POST",
              url: ""

           })
      
    } catch (error) {

      console.log(error);
      
    }
  }

  return (
    <div>
      <h1>wecome to cart</h1>
    </div>
  )
}

export default Cart
