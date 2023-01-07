import React from "react";
import "./Dropdown.css";

function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Destination ⮛</button>
      <div className="dropdown-content">
        <a href="#">New York</a>
        <a href="#">Toronto</a>
        <a href="#">New Delhi</a>
        <a href="#">Seoul</a>
        <a href="#">Jakarta</a>
      </div>
    </div>
  );
}
export default Dropdown;
