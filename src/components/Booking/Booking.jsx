import React from "react";
import "./Booking.css";
import Dropdown from "../Dropdown/Dropdown";
import CityCard from "../CityCard/CityCard";
function Booking() {
  return (
    <div className="booking-wrapper">
      <div className="container">
        <div className="trip-wrapper">
          <fieldset>
            <input
              type="radio"
              name="trip-type"
              id="round-trip"
              value="round-trip"
            />
            <label htmlFor="round-trip">Round Trip</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              name="trip-type"
              id="oneway-trip"
              value="oneway-trip"
            />
            <label htmlFor="oneway-trip">One Way</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              name="trip-type"
              id="multi-trip"
              value="multi-trip"
            />
            <label htmlFor="multi-trip">Multi City</label>
          </fieldset>
        </div>
        <div className="destination-wrapper">
          <div className="from-wrapper">
            <h2 style={{ marginRight: "10px" }}>Book from</h2>
            <Dropdown />
            <h2 style={{ marginLeft: "10px" }}>to</h2>
          </div>
        </div>
        <div className="cityCard-wrapper">
          {/* Onclick Function to be added to redirect */}
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6  util-sb">
              <CityCard cityName="LAS VEGAS" cityCode="NV(LAS)" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 util-sb">
              <CityCard cityName="LOS ANGELES" cityCode="CA(LAX)" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 util-sb">
              <CityCard cityName="NEW YORK CITY" cityCode="NY(NYC)" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 util-sb">
              <CityCard cityName="PALM SPRINGS" cityCode="CA(PSP)" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 util-sb">
              <CityCard cityName="PORTLAND" cityCode="OR(PDX)" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 util-sb">
              <CityCard cityName="ALL CITIES" cityCode="⮛" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Booking;
