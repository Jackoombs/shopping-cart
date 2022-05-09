import React from "react";
import Logo from "../logo.png"
import Cart from "../cart.png"
import NavItem from "./NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Nav() {

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
      <div className="nav-checkout">
          <p>Total amount</p>
          <div className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
      </div>
    </header>
  )
}

export default Nav