import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem"
import CheckoutControls from "../components/CheckoutControls";

function ConfirmBasket({ basket, setBasket, setBasketDetails, setCheckoutStage}) {

  useEffect(() => {
    setCheckoutStage(1)
  },[])

  const checkBasketEmpty = () => {
    if (!basket.length) {
      return  <p className="empty-basket">
                It Looks like your basket is empty. <Link to="../../shop">Visit our shop</Link> to find something you like.
              </p>
    }
  }

  const canConfirmBasket = () => {
    return basket.length?
        <CheckoutControls 
          linkTo="../../checkout/shipping"   
          btnText="Confirm Basket"
          backButton={false}
          setCheckoutState={setBasketDetails}   
        />:''
  }

  return (
    <section className="confirm-basket">
      <h2>Your Basket</h2>
      <div className="basket">
        {basket.map((product, index) => (
          <CheckoutItem 
            key={index} 
            product={product} 
            basket={basket} 
            setBasket={setBasket}
          />
        ))}
        {checkBasketEmpty()}
      </div>
      {canConfirmBasket()}
    </section>
  )
}

export default ConfirmBasket