import React from "react";
import { useEffect } from "react";

function ConfirmPayment({ setCheckoutStage }) {

  useEffect(() => {
    setCheckoutStage(2)
  },[])

  return (
    <div>
      
    </div>
  )
}

export default ConfirmPayment