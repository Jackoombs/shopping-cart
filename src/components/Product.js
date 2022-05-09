import React from "react";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.description} />]
      <h3>{product.title }</h3>
      <p>{product.description}</p>

    </div>
  )
}

export default Product