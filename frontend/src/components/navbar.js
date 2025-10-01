import React from "react";
import './navbar.css';
import ShopIcon from '../assets/Shop_icon.svg';
import MenuIcon from '../assets/menu_icon.svg';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <a href="/" className="logo">MyBrand</a>
        </div>

        {/* Mobile/Tablet: Icons */}
        <div className="nav-icons">
            <a href="/cart" className="icon-btn">
                <img src={ShopIcon} alt="Cart Icon" />
            </a>
            <a href="/menu" className="icon-btn">
                <img src={MenuIcon} alt="Menu Icon" />
            </a>
        </div>

        {/* Desktop: Links */}
        <ul className="nav-links">
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
