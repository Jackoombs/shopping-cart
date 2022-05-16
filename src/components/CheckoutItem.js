import React from "react";
import StarRatings from 'react-star-ratings';

function CheckoutItem({ product }) {
  return (
    <div className="checkout-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <StarRatings
        rating={product.rating.rate}
        starRatedColor="#7298a0"
        numberOfStars={5}
        name='rating'
        starDimension='30px'
      />
      <p>{product.quantity}</p>
    </div>
  )
}

export default CheckoutItem