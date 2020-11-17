import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(d => d.name === name);
  console.log(dog.src)

  return (
    <div className="DogDetails">
      <img src={dog.src} alt="dog pic" height="200px" width="auto"></img>
      <h2>Facts about {dog.name}</h2>
      <h3>{dog.name} is {dog.age} years old</h3>
      {dog.facts.map((f, i) => (
        <p key={i}>{f}</p>
      ))}
      <Link to="/dogs">Go back</Link>
    </div>
  );
}

export default DogDetails;