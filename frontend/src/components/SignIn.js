import React, { useState } from "react";
import "./SignIn.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Apple from "../assets/Apple.svg";
import { BASE_URL } from "../api";

function SignIn({ isOpen, onClose, redirectAfterLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/users/login`, { email, password });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Clear fields after login
      setEmail("");
      setPassword("");

      redirectAfterLogin();
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Invalid email or password");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/users/google-login`, {
        credential: credentialResponse.credential,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Clear fields
      setEmail("");
      setPassword("");

      redirectAfterLogin();
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
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2 className="signintext">Greetings! Welcome to luxury gift shop.</h2>
        <p className="signin-para">Use your email and password to sign in</p>

        <div className="bookcall emailcolor">
            <input
              
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>

            <button className="Contactus-button" onClick={handleLogin}>
              LOG IN
            </button>
          </div>

        <div className="or-div">
          <div className="line"></div>
          <div className="or-text">or</div>
          <div className="line"></div>
        </div>

        <p className="signin-para">Instantly login or sign up via Google</p>

        <div className="authenticate">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
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

export default SignIn;
