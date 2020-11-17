import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ colors }) {
  return (
      <nav className="Navbar">
        <NavLink exact to={'/colors'}>Home</NavLink>
        {colors.map(c => (
          <NavLink exact to={`/colors/${c.name}`} key={c.name}>{c.name}</NavLink>
        ))}
      </nav>
  )
}

export default Navbar;