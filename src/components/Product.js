import React, { useState } from "react";
import StarRatings from 'react-star-ratings';
import AddToBasket from "./AddToBasket";
import QuantitySelector from "./QuantitySelector"

function Product({ product, id, basket, setBasket }) {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product">
      <img src={product.image} alt={product.description} />
      <h3>{product.title}</h3>
      <p>description</p>
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
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          min={1}
          max={99}
          id={id}/>
        <AddToBasket 
          product={product} 
          quantity={quantity}
          basket={basket} 
          setBasket={setBasket}/>
    </div>
  )
}

export default Product