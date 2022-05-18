import React from "react";
import CheckoutItem from "../components/CheckoutItem";

function Checkout({ basket, setBasket }) {
  return (
    <main className="checkout">
      <h2>Your Basket</h2>
      <section className="basket">
        {basket.map((product, index) => (<CheckoutItem key={index} product={product} basket={basket} setBasket={setBasket}/>))}
      </section>
    </main>
  )
}

export default Checkout