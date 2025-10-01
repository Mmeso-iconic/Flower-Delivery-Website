import React from "react";
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
                    <p className="footertext">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas. Reminds you 7 days before. No spam or sharing your address</p>
                    <input type="email" className="footerinput" placeholder="Enter your email address" />
                    <button className="footer-button">REMIND</button>
                </div>
                <div className="footer-contact">
                    <h3 className="footerheader">Get in Touch</h3>
                    <p className="footertext">Contact Us</p>
                    <p className="footermini">Address</p>
                    <p className="footertext">15/4 Khreshchatyk Street, Kyiv</p>
                    <p className="footermini">Phone</p>
                    <p className="footertext">+380980099777</p>
                    <p className="footermini">General Enquiry</p>
                    <p className="footertext">Kiev.Florist.Studio@gmail.com</p>
                    <h3 className="footerheader">Follow Us</h3>
                    <div className="footer-socialmedia">
                        <img src={instaicon} alt="Social media icons" className="instaicon" />
                        <img src={pinicon} alt="Social media icons" className="pinicon" />  
                        <img src={fbicon} alt="Social media icons" className="fbicon" />
                        <img src={tweeticon} alt="Social media icons" className="tweeticon" />
                        <img src={teleicon} alt="Social media icons" className="teleicon" />
                    </div>
                </div>
                <div className="footer-shop">
                    <h3 className="footerheader">Shop</h3>
                    <p className="footertext">All Products</p>
                    <p className="footertext">Bouquets</p>
                    <p className="footertext">Dried Bouquets</p>
                    <p className="footertext">Live Plants</p>
                    <p className="footertext">Aroma Candles</p>
                    <p className="footertext">Designer Vase</p>
                    <p className="footertext">Freshner Diffuser</p>
                    <h3 className="footerheader">Service</h3>
                    <p className="footertext">Flower Subcription</p>
                    <p className="footertext">Wedding & Event Decor</p>
                </div>
                <div className="footer-pages">
                    <h3 className="footerheader">About Us</h3>
                    <p className="footertext">Our Story</p>
                    <p className="footertext">Blog</p>
                    <p className="footertext">Shipping & returns</p>
                    <p className="footertext">Terms & Conditions</p>
                    <p className="footertext">Privacy Policy</p>
                </div>
            </div>
        </>
    );
}

export default Footer;