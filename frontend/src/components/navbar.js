import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import ShopIcon from '../assets/Shop_icon.svg';
import MenuIcon from '../assets/menu_icon.svg';

function Navbar() {
  return (
    <nav className="navbar">
        {/* Mobile/Tablet: Icons */}
      <div className="nav-icons">
          <Link to="/menu" className="icon-btn">
            <img src={MenuIcon} alt="Menu Icon" />
          </Link> 
          <Link to="/cart" className="icon-btn">
            <img src={ShopIcon} alt="Cart Icon" />
          </Link>
      </div>

      <div className="nav-links">
         <ul className="thelinks">
            <li>
               <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li>
               <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>

        <ul className="thelinks">
            <li>
                <Link to="/sign-in" className="nav-link">Sign In</Link>
            </li>
            <li>
                <Link to="/cart" className="nav-link">Cart</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
