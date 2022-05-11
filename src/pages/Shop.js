import React, { useState } from "react";
import Product from "../components/Product";
import { useEffect } from "react";

function Shop({products,basket, setBasket}) {


  return (
    <section className="product-page">
      <div className="products">
        {products.map((product, index) => {return <Product key={index} id={index} product={product} basket={basket} setBasket={setBasket}/>})}
      </div>
    </section>
  )
}

export default Shop