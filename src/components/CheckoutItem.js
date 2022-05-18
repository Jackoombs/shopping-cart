import React from "react";
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

function CheckoutItem({ product, basket, setBasket }) {

  const removeFromBasket = () => {
    const newBasket = [...basket]
    const productIndex = newBasket.findIndex(item => item.title === product.title)
    newBasket.splice(productIndex, 1)
    setBasket(newBasket)
  }

  return (
    <div className="checkout-item">
      <div className="checkout-left">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <div className="rating">
          <StarRatings
            rating={product.rating.rate}
            starRatedColor="#7298a0"
            numberOfStars={5}
            name='rating'
            starDimension='30px'
          />
          <p>({product.rating.count})</p>
        </div>
      </div>
      <div className="checkout-right">
        <p>Price: <strong>${product.price}</strong></p>
        <p>qty: <strong>{product.quantity}</strong></p>
        <p>Total: <span className="price">${product.price * product.quantity}</span></p>
        <button className="remove-from-basket" onClick={removeFromBasket}>
          <FontAwesomeIcon icon={faDeleteLeft} size="3x"/>
        </button>
      </div>
      
    </div>
  )
}

export default CheckoutItem