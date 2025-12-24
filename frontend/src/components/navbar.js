import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import ShopIcon from '../assets/Shop_icon.svg';
import MenuIcon from '../assets/menu_icon.svg';
import CloseIcon from '../assets/close_icon.svg'; // optional close icon
import instaicon from '../assets/Instaicon.svg'
import pinicon from '../assets/Pinteresticon.svg'
import fbicon from '../assets/Fbicon.svg'
import tweeticon from '../assets/Twittericon.svg'
import teleicon from '../assets/Telegramicon.svg'

// 1. Accept the onSigninClick prop from the parent AppContent component
function Navbar({ onSignInClick }) { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Mobile/Tablet Icons */}
      <div className="nav-icons">
        <button className="icon-btn" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </button>
        <Link to="/cart" className="icon-btn">
          <img src={ShopIcon} alt="Cart Icon" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <ul className="thelinks">
          <li><Link to="/" className="nav-link">Shop</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
        <ul className="thelinks">
          {/* 2. Show Sign In or Logout based on login state */}
          <li>
            {isLoggedIn ? (
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link className="nav-link" onClick={onSignInClick}>
                Sign In
              </Link>
            )}
          </li>
          <li><Link to="/cart" className="nav-link">Cart</Link></li>
        </ul>
      </div>

      {/* Burger Menu Overlay */}
      {isMenuOpen && (
        <div className="burger-menu-overlay">
          <div className="burger-menu">
            <button className="close-btn" onClick={toggleMenu}>
              <img src={CloseIcon} alt="Close" />
            </button>

            {/* Menu Links */}
            <ul className="burger-links">
              <li><Link to="/shop" onClick={toggleMenu}>Shop</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
              {/* 3. Show Sign In or Logout in mobile menu */}
              <li>
                {isLoggedIn ? (
                  <Link onClick={() => { handleLogout(); toggleMenu(); }}>
                    Logout
                  </Link>
                ) : (
                  <Link onClick={() => { onSignInClick(); toggleMenu(); }}>
                    Sign In
                  </Link>
                )}
              </li>
              <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
            </ul>

            {/* Footer */}
            <div className="burger-footer">
              <div className="navfooter">
                <p className="footertexts navtext">Shipping & Returns</p>
                <p className="footertexts navtext">Terms & Conditions</p>
                <p className="footertexts navtext">Privacy Policy</p>
              </div>
              <div className="nav-socialmedia">
                <img src={instaicon} alt="Instagram" className="icon" />
                <img src={pinicon} alt="Pinterest" className="icon" />
                <img src={fbicon} alt="Facebook" className="icon" />
                <img src={tweeticon} alt="Twitter" className="icon" />
                <img src={teleicon} alt="Telegram" className="icon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;