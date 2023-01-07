import React from "react";
import "./CityCard.css";

function CityCard(props) {
  return (
    <div className="card-wrapper">
      <h4>{props.cityName}</h4>
      <p>{props.cityCode}</p>
    </div>
  );
}
export default CityCard;
