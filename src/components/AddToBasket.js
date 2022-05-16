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
    setBasket(oldBasket => [...oldBasket, newProduct])
  }

  const increaseBasketQuantity = () => {
    const newBasket = [...basket]
    const duplicateIndex = newBasket.findIndex(item => item.title === product.title)
    const duplicate = newBasket[duplicateIndex]

    duplicate.quantity = duplicate.quantity + quantity
    newBasket.splice(duplicateIndex, 1)
    newBasket.splice(duplicateIndex, 0, duplicate)

    setBasket(newBasket)
  }

  return (
    <button className="add-basket" onClick={clickHandler}>
      <FontAwesomeIcon icon={faPlus} size="1x"/>  
      ADD TO BASKET
    </button>
  )
}

export default AddToBasket