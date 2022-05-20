import React, { useEffect } from "react";
import ShippingForm from "../components/ShippingForm";

function ConfirmShipping({ setCheckoutStage }) {

  useEffect(() => {
    setCheckoutStage(2) 
  },[])

  return (
    <section className="shipping">
      <ShippingForm />
    </section>
  )
}

export default ConfirmShipping