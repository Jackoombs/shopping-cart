import React from "react";
import Logo from "../logo.png"
import Cart from "../cart.png"

function Nav() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo image" />
        <h1>electronit</h1>
      </div>
      <nav>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">SHOP</a></li>
        </ul>
      </nav>
      <div className="nav-checkout">
          <p>Total amount</p>
          <div className="cart-icon">
            <img src={Cart} alt="bag icon" />
          </div>
      </div>
    </header>
  )
}

export default Nav