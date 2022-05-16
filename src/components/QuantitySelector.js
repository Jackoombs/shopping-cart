import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function QuantitySelector({ id, quantity, setQuantity, min, max }) {

  const inputFocus = useRef(null)

  const increaseQuantity = () => {
    if (quantity < max) setQuantity(quantity => quantity + 1)
    focusInput()
  }

  const decreaseQuantity = () => {
    if (quantity !== min) setQuantity(quantity => quantity - 1)
    focusInput()
  }

  const focusInput = () => {
    if (inputFocus.current) {
      inputFocus.current.focus()
    }
  }

  return (
    <div className="quantity-selector">
      <button 
        className="change-quantity" 
        onClick={decreaseQuantity}
      >
        <FontAwesomeIcon icon={faMinus} size="2x"/>
      </button>

      <input className="quantity-input" type="text" id={`product${id}`} value={quantity} readOnly ref={inputFocus}/>
      <label htmlFor="{`product${id}`}">quantity</label>
      
      <button 
        className="change-quantity" 
        onClick={increaseQuantity}
      >
        <FontAwesomeIcon icon={faPlus} size="2x"/>
      </button>
    </div>
  )
}

export default QuantitySelector