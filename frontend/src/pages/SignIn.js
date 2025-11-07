import React from "react";
import './SignIn.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import Apple from '../assets/Apple.svg'
import Google from '../assets/Google.svg'

function Signin() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;


return(
    <div className="overlaypop">
        <div className="signin-container page-container">
            <button className="close-button" onClick={handleClose}>X</button>
            <h2 className="signintext">
                Greetings! Welcome to luxury gift shop.
            </h2>
            <p className="signin-para">Use your mobile number to sign up or log in</p>
            <div className="bookcall">
                <input type="alphanumeric"  placeholder='+380 XX XXX XX XX'/>
                <button className='Contactus-button'>BOOK A CALL</button>
            </div>
            <div className="or-div">
                <div class="line"></div>
                <div class="or-text">or</div>
                <div class="line"></div>
            </div>
            <p className="signin-para">Instantly login or sign up via Google</p>
            
            <div className="authenticate">
                <Link to="/" className="auth-button">
                    <img src={Google} alt="Google logo" className="button-icon" />
                    <span className="About-minititles">continue with google </span>
                </Link>
                <Link to="/" className="auth-button">
                    <img src={Apple} alt="Apple logo" className="button-icon" />
                    <span className="About-minititles">continue with apple </span>
                </Link>
            </div>


            <div className="bottom-signin">
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
            </div>
        </div>
    </div>

);
}

export default Signin;