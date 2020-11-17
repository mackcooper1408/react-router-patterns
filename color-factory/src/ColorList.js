import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
  return (
    <div>
      <ul className="ColorList">PRETTY COLORS
      {colors.map(c => (
        <li key={c.name}>
          <Link to={`/colors/${c.name}`}>{c.name}</Link>
        </li>
      ))}
        <b><Link to={'/colors/new'}>New Color</Link></b>
      </ul>
    </div>
  )
}

export default ColorList;