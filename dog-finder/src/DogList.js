import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <ul className="DogList">
      {dogs.map(d => (
        <li key={d.name}>
          <div className="dogimgDiv" >
            <img src={d.src} alt={d.name} />
          </div>
          <Link to={`/dogs/${d.name}`}>{d.name}</Link>

        </li>
      ))}
    </ul>
  )
}

export default DogList;