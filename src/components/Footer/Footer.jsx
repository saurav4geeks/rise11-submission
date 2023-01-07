import React from "react";
import "./Footer.css";
import fLaptopImg from "../../assets/images/laptop.svg";
import fConnectImg from "../../assets/images/connected.svg";
import fairplaneImg from "../../assets/images/airplane.svg";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-card">
              <p>Welcome to our new website</p>
              <img src={fLaptopImg} alt="Footer Image" />
              <a href="#">Learn About VirginAmerica.com</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-card">
              <p>Deals from $49 to your favorite cities</p>
              <img src={fConnectImg} alt="Footer Image" />
              <a href="#">See all deals</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-card">
              <p>Fly Premium Economy</p>
              <img src={fairplaneImg} alt="Footer Image" />
              <a href="#">Need Help With Your Booking?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
