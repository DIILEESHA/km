import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav_grid">
        <div className="nav_sub one">
          {/* Hide this ul on mobile - use mobile menu */}
          <ul className={`nav_ul desktop_menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li className="nav_li">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>home</Link>
            </li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>our story</li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>Itinerary</li>
          </ul>
        </div>

        <div className="nav_sub">
          <div className="lk">
            <img src={logo} alt="logo" className="nav_img" />
          </div>
        </div>

        <div className="nav_sub two">
          {/* Hide this ul on mobile - use mobile menu */}
          <ul className={`nav_ul desktop_menu ${isMobileMenuOpen ? "open" : ""}`}>
            <li className="nav_li">
              <Link to="/sepetes" onClick={() => setMobileMenuOpen(false)}>Spetses</Link>
            </li>
            <li className="nav_li">
              <Link to="/travel-accommodation" onClick={() => setMobileMenuOpen(false)}>Travel & Accommodation</Link>
            </li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>rsvp</li>
          </ul>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="mobile_menu_icon" onClick={toggleMobileMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile menu - visible only when toggled */}
 {isMobileMenuOpen && (
  <div className="mobile_menu open">
          <ul className="mobile_nav_ul">
            <li className="nav_li">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>home</Link>
            </li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>our story</li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>Itinerary</li>
            <li className="nav_li">
              <Link to="/sepetes" onClick={() => setMobileMenuOpen(false)}>Spetses</Link>
            </li>
            <li className="nav_li">
              <Link to="/travel-accommodation" onClick={() => setMobileMenuOpen(false)}>Travel & Accommodation</Link>
            </li>
            <li className="nav_li" onClick={() => setMobileMenuOpen(false)}>rsvp</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
