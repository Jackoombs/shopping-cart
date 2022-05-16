import React from "react";
import CheckoutItem from "../components/CheckoutItem";

function Checkout({ basket }) {
  return (
    <main className="checkout">
      <h2>Your Basket</h2>
      {basket.map((product, index) => (<CheckoutItem key={index} product={product}/>))}
    </main>
  )
}

export default Checkout