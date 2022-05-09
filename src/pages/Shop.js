import React, { useState } from "react";
import Product from "../components/Product";
import { useEffect } from "react";

function Shop({products}) {


  return (
    <div className="products">
      {products.map(product => {return <Product product={product}/>})}
    </div>
  )
}

export default Shop