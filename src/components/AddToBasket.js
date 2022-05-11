import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddToBasket({ product, quantity, basket, setBasket }) {

  const clickHandler = () => {
    const isDuplicate = checkBasketDuplicate(product)
    if (isDuplicate) increaseBasketQuantity(product)
    else addNewBasketItem(product)
  }

  const checkBasketDuplicate = (product) => {
    return basket.find(item => item.title === product.title)
  }

  const addNewBasketItem = () => {
    const newProduct = product
    newProduct.quantity = +quantity
    setBasket( oldBasket => ([...oldBasket, newProduct]))
  }

  const increaseBasketQuantity = () => {
    const duplicateProduct = basket.filter(item => item.title === product.title)[0]
    const newQuantity = duplicateProduct.quantity + quantity
    duplicateProduct.quantity = newQuantity
  }

  return (
    <button className="add-basket" onClick={clickHandler}>
      <FontAwesomeIcon icon={faPlus} size="1x"/>  
      ADD TO BASKET
    </button>
  )
}

export default AddToBasket