import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ dogs }) {
  return (
      <nav className="Navbar">
        {dogs.map(d => (
          <NavLink exact to={`/dogs/${d.name}`} key={d.name}>{d.name}</NavLink>
        ))}
      </nav>
  )
}

export default Navbar;