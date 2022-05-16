import React from "react";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Nav({ basketCounter }) {

  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faMicrochip} size="4x"/>
        <h3>electronit</h3>
      </div>
      <nav>
        <ul>
          <NavItem
            page={"HOME"}
            route={"/"}
          />
          <NavItem             
            page={"SHOP"}
            route={"/shop"}
          />
        </ul>
      </nav>
      <Link to={"/checkout"} className="nav-checkout">
        <p>Total amount</p>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} size="xs"/>
          {basketCounter?<div className="basket-counter">{basketCounter}</div>:''}
        </div>
      </Link>
    </header>
  )
}

export default Nav