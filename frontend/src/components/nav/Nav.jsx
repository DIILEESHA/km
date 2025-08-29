import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_grid">
        <div className="nav_sub one">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link to="/">home</Link>
            </li>
            <li className="nav_li">our story </li>
            <li className="nav_li">Itinerary</li>
          </ul>
        </div>
        <div className="nav_sub">
          <div className="lk">
            <img src={logo} alt="" className="nav_img" />
          </div>
        </div>
        <div className="nav_sub two">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link to="/sepetes">Spetses</Link>
            </li>
            <li className="nav_li">Travel & Accommodation</li>
            <li className="nav_li">rsvp </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
