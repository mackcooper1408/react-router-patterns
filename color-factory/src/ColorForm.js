import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorForm.css";

function ColorForm({ addColor }) {
  const initialData = { colorName: "", hex: "#ffffff" };
  const [formData, setFormData] = useState(initialData);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => (
      { ...d, [name]: value }
    ));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    addColor({ name: formData.colorName, hex: formData.hex });
    history.push("/colors");
  }
  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="colorName">Color name</label>
          <input
            name="colorName"
            id="colorName"
            placeholder="enter a color"
            onChange={handleChange}
            value={formData.colorName}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={formData.hex}
          />
        </div>
        <button type="Submit">Add Color</button>
      </form>
    </div>
  );
}

export default ColorForm;