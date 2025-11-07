import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import instaicon from '../assets/Instaicon.svg'
import pinicon from '../assets/Pinteresticon.svg'
import fbicon from '../assets/Fbicon.svg'
import tweeticon from '../assets/Twittericon.svg'
import teleicon from '../assets/Telegramicon.svg'

function Footer() {   
    return (
        <> 
            <div className="footer">
                <div className="footer-email">
                    <p className="footertext">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... <br/> Reminds you 7 days before. No spam or sharing your address</p>
                    <input type="email" className="footerinput " placeholder="Your email" />
                    <button className="footer-button btn">REMIND</button>
                </div>
                <div className="footer-contact">
                    <h3 className="footerheader">Contact Us</h3>
                    <p className="footermini">Address</p>
                    <p className="footertexts">15/4 Khreshchatyk Street, Kyiv</p>
                    <p className="footermini">Phone</p>
                    <p className="footertexts">+380980099777</p>
                    <p className="footermini">General Enquiry</p>
                    <p className="footertexts">Kiev.Florist.Studio@gmail.com</p>
                    <h3 className="footerheader">Follow Us</h3>
                    <div className="footer-socialmedia">
                        <img src={instaicon} alt="Social media icons" className="insta icon" />
                        <img src={pinicon} alt="Social media icons" className="pin icon" />  
                        <img src={fbicon} alt="Social media icons" className="fb icon" />
                        <img src={tweeticon} alt="Social media icons" className="tweet icon" />
                        <img src={teleicon} alt="Social media icons" className="tele icon" />
                    </div>
                </div>
                <div className="footer-shop">
                    <h3 className="footerheader">Shop</h3>
                    <p className="footertexts">Bouquets</p>
                    <p className="footertexts">All Products</p>
                    <p className="footertexts">Dried Bouquets</p>
                    <p className="footertexts">Live Plants</p>
                    <p className="footertexts">Aroma Candles</p>
                    <p className="footertexts">Designer Vase</p>
                    <p className="footertexts">Freshner Diffuser</p>
                    <h3 className="footerheader">Service</h3>
                    <p className="footertexts">
                       <Link to="/subscription" className="footer-link">Flower Subscription </Link>
                    </p>
                    <p className="footertexts">Wedding & Event Decor</p>
                </div>
                <div className="footer-pages">
                    <h3 className="footerheader">
                        <Link to="/about" className="footer-link">About Us</Link>
                    </h3>
                    <p className="footertexts">Our Story</p>
                    <p className="footertexts">Blog</p>
                    <p className="footertexts">Shipping & returns</p>
                    <p className="footertexts">Terms & Conditions</p>
                    <p className="footertexts">Privacy Policy</p>
                </div>
            </div>
        </>
    );
}

export default Footer;