import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

function CheckoutControls(props) {

  const navigate = useNavigate()

  const showButton = () => {
    if (props.backButton) {
      return  <button className="checkout-btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faLeftLong} size="2x"/>
              </button>
    }
  }

  return (
    <div className="checkout-controls">
      {showButton()}
      <button className="checkout-btn">
        <Link to={props.linkTo}>
          {props.btnText}
        </Link>
      </button>
    </div>
  )
}

export default CheckoutControls