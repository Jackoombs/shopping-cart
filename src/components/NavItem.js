import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ page, route}) {

  return (
    <li>
      <NavLink to={route}>
        {page}
      </NavLink>
    </li>
  )
}

export default NavItem