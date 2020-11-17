import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "./ColorDetails.css";

function ColorDetails({ colors }) {
  const history = useHistory();
  const { name } = useParams();

  const color = colors.find(c => c.name === name) || history.push("/colors");

  return (
    <div>
      {color && <div className="ColorDetails" style={{ backgroundColor: color.hex }}>
        <h1>This is {color.name}. So beauty</h1>

        <Link to="/">Go back</Link>
      </div>}
    </div>
  );
}

export default ColorDetails;