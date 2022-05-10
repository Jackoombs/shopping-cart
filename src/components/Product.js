import React from "react";
import StarRatings from 'react-star-ratings';

function Product({ product }) {
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
    </div>
  )
}

export default Product