import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Admin Panel</h1>
            </div>
        {/* Nav buttons */}
            <div className="nav-buttons">
                <Link to="/flowers" className="btn active">Flowers</Link>
                <Link to="/addflower" className="btn">Add Flowers</Link>
            </div>
        </nav>
        <hr />
        </>
);
}

export default Navbar;