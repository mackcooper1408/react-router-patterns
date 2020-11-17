import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Routes from "./Routes";

function App({ colors }) {
  const [colorList, setColorList] = useState(colors);

  function addColor(color) {
    setColorList(oldColor => [...oldColor, color]);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar colors={colorList}/>
        <Routes colors={colorList} addColor={addColor}/>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: [
    { name: "blue", hex: "blue"},
    { name: "green", hex: "green"},
    { name: "red", hex: "red"},
    { name: "orange", hex: "orange"},
  ]
}

export default App;