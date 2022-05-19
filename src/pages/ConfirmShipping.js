import React, { useEffect } from "react";

function ConfirmShipping({ setCheckoutStage }) {

  useEffect(() => {
    setCheckoutStage(3) 
  },[])

  return (
    <div>
      HI there guys
    </div>
  )
}

export default ConfirmShipping