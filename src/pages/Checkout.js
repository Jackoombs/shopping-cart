import React, { useState } from "react";
import ConfirmBasket from "./ConfirmBasket"
import ConfirmShipping from "./ConfirmShipping";
import ConfirmPayment from "./ConfirmPayment";
import { Routes, Route } from 'react-router-dom';
import CheckoutProgress from "../components/CheckoutProgress";
import CheckoutControls from "../components/CheckoutControls"

function Checkout({ basket, setBasket }) {

  const [checkoutStage, setCheckoutStage] = useState(1)
  const [basketDetails, setBasketDetails] = useState()
  const [orderDetails, setOrderDetails] = useState()
  const [paymentDetails, setPaymentDetails] = useState()


  return (
      <main className="checkout">
        <CheckoutProgress stage={checkoutStage}/>
        <Routes>
          <Route 
            path="basket" 
            element={
              <ConfirmBasket 
                basket={basket} 
                setBasket={setBasket} 
                setBasketDetails={setBasketDetails}
                setCheckoutStage={setCheckoutStage}
              />} 
          />
          <Route 
            path="shipping" 
            element={
              <ConfirmShipping 
                setOrderDetails={setOrderDetails}
                setCheckoutStage={setCheckoutStage}
              />} 
          />
          <Route 
            path="payment" 
            element={
              <ConfirmPayment 
                setPaymentDetails={setPaymentDetails}
                setCheckoutStage={setCheckoutStage}
              />} 
          />
        </Routes>
      </main>
  )
}

export default Checkout
