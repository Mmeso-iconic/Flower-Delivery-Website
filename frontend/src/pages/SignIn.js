import React, { useState } from "react";
import './SignIn.css';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Apple from '../assets/Apple.svg';
import GoogleIcon from '../assets/Google.svg';
import { BASE_URL } from '../api';

function Signin() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  if (!isOpen) return null;

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/users/google-login`, {
        credential: credentialResponse.credential,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert(`Welcome ${user.name}!`);
      // Optional: redirect user after login
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google login failed:", error.response?.data || error.message);
      alert(`Google login failed: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleGoogleError = () => {
    alert("Google login failed!");
  };

  return (
    <div className="overlaypop">
      <div className="signin-container page-container">
        <button className="close-button" onClick={handleClose}>X</button>
        <h2 className="signintext">
          Greetings! Welcome to luxury gift shop.
        </h2>
        <p className="signin-para">Use your mobile number to sign up or log in</p>
        <div className="bookcall">
          <input type="alphanumeric" placeholder='+380 XX XXX XX XX'/>
          <button className='Contactus-button'>BOOK A CALL</button>
        </div>
        <div className="or-div">
          <div className="line"></div>
          <div className="or-text">or</div>
          <div className="line"></div>
        </div>
        <p className="signin-para">Instantly login or sign up via Google</p>

        <div className="authenticate">
          {/* Google button styled like Apple */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          >
            {({ onClick }) => (
              <button className="auth-button" onClick={onClick}>
                <img src={GoogleIcon} alt="Google logo" className="button-icon" />
                <span className="About-minititles">continue with google</span>
              </button>
            )}
          </GoogleLogin>

          <button className="auth-button">
            <img src={Apple} alt="Apple logo" className="button-icon" />
            <span className="About-minititles">continue with apple</span>
          </button>
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
