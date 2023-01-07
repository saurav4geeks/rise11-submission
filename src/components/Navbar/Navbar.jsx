import { useState } from "react";
import "./Navbar.css";
import brandLogo from "../../assets/images/Virgin_America_logo_.png";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  return (
    <>
      <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
        <a href="javascript:void(0)" className="brand-logo">
          <img src={brandLogo} alt="Brand Logo" />
        </a>
        <div
          className={`header-nav-wrap ${isNavMobileOpen ? "mobile-menu" : ""} `}
        >
          <div className="header-main">
            <li>
              <a href="javascript:void(0)">Book</a>
            </li>
            <li>
              <a href="javascript:void(0)">Check In</a>
            </li>
            <li>
              <a href="javascript:void(0)">Manage</a>
            </li>
          </div>
          <nav className={`header-nav ${isNavOpen ? "tabmenu" : ""} `}>
            <li>
              <a href="javascript:void(0)">Deals</a>
            </li>
            <li>
              <a href="javascript:void(0)">Flying with us</a>
            </li>
            <li>
              <a href="javascript:void(0)">Where we fly</a>
            </li>
            <li>
              <a href="javascript:void(0)">Shop</a>
            </li>
            <li>
              <a href="javascript:void(0)">FAQ</a>
            </li>
            <li>
              <a href="javascript:void(0)">Fees</a>
            </li>
          </nav>
        </div>
        <button id="hamburger" className="hamburger" onClick={handleNavToggle}>
          {isNavOpen ? "x" : "="}
        </button>

        <div className="header-account">
          <li className="elevate-logo">Elevate</li>
          <li>
            <a href="javascript:void(0)">Sign In</a>
          </li>
          <li>
            <a href="javascript:void(0)">Sign Up</a>
          </li>
        </div>
      </header>
    </>
  );
}
