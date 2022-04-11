import React from "react";
import { Link } from "react-router-dom";
import FoodNav from "../assets/Food-Nav.jpg";
export const Header = () => {
  return (
    <div className="header">
        <header>
          <h1>Deliverando</h1>
          <img src={FoodNav} alt={"navigation bar img"} className="imgNav" />
        </header>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/menu" style={{ textDecoration: "none" }}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/salads" style={{ textDecoration: "none" }}>
                Salads
              </Link>
            </li>
            <li>
              <Link to="/main-dish" style={{ textDecoration: "none" }}>
                Main dish
              </Link>
            </li>
            <li>
              <Link to="/dessert" style={{ textDecoration: "none" }}>
                Dessert
              </Link>
            </li>
            <li>
              <Link to="/drinks" style={{ textDecoration: "none" }}>
                Drinks
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
};
