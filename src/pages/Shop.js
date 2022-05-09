import React from "react";
import { useEffect } from "react";
import getHomePageItems from '../utils/apiCalls';

function Shop() {
  const getItems = async () => {
    const items = await getHomePageItems()
    console.log(items)
  }
  
  return (
    <div>
      <h1>Shop page</h1>
      <button onClick={getItems}>CLick Me</button>
    </div>
  )
}

export default Shop