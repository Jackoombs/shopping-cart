import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTruckArrowRight, faWallet } from '@fortawesome/free-solid-svg-icons'
import { icon } from "@fortawesome/fontawesome-svg-core";

function CheckoutProgress({ stage }) {

  const iconSize = (iconNumber) => {
    return stage === iconNumber?"3x":"2x"
  }

  const iconColor = (iconNumber) => {
    return stage >= iconNumber?"#3e5f66":"black"
  }

  return (
    <div className="checkout-progress">
      <FontAwesomeIcon icon={faShoppingCart} size={iconSize(1)} color={iconColor(1)} />
      <hr style={{color:iconColor(2)}}/>
      <FontAwesomeIcon icon={faTruckArrowRight} size={iconSize(2)} color={iconColor(2)}/>
      <hr style={{color:iconColor(3)}}/>
      <FontAwesomeIcon icon={faWallet} size={iconSize(3)} color={iconColor(3)}/>
    </div>
  )
}

export default CheckoutProgress