import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";
import FlowerHeroImage from '../assets/FlowerHeroimg.png';
import RightArrow from '../assets/arrow-right.svg';
import LeftArrow from '../assets/arrow-left.svg';
import FreshFlower from '../assets/FreshFlower.png';
import DriedFlowers from '../assets/DriedFlowers.png';
import LivePlants from '../assets/LivePlants.png';
import AromaCandles from '../assets/AromaCandles.png';
import Freshners from '../assets/Freshners.png'
import Socialmediaimg from '../assets/Socialmedia-div.png';
import Callicon from '../assets/call.svg'
import Pindrop from '../assets/pin_drop.svg'
import Instaicon from '../assets/Instaicon.svg'
import Pinicon from '../assets/Pinteresticon.svg'
import Fbicon from '../assets/Fbicon.svg'
import Twittericon from '../assets/Twittericon.svg'
import Telegramicon from '../assets/Telegramicon.svg'
import Googlelogo from '../assets/Googlelogo.svg'

function Home() {
  return (
    <>
    <div className="hero-section">
        <div className="hero-text">       
            <h1>Kyiv LuxeBouquets®</h1>
            <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
        </div>
        <div className="hero-image">       
            <img src={FlowerHeroImage} alt="Hero" />
            <p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
        </div>
    </div>
    <div className="grid-container">
        <div className="grid-item">
            <h2 className="grid-item-title">Fresh Flowers</h2> 
            <Link to="/category/Fresh Flowers">
                <button className="shop-now-button">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow" /> </button>
            </Link>
        </div>
        <div className="grid-item">
            <img src= {FreshFlower} alt="Flower"/>
        </div>
        <div className="grid-item">
            <h2 className="grid-item-title">Dried Flowers</h2> 
            <Link to="/category/Dried Flowers">
                <button className="shop-now-button">   Shop Now <img src= {LeftArrow} alt="Shop Now Arrow"/> </button>
            </Link>
        </div>
        <div className="grid-item">
            <img src= {DriedFlowers} alt="Flower"/>
        </div>
        <div className="grid-item">
            <h2 className="grid-item-title">Live Plants</h2> 
            <Link to="/category/Live Plants">
                <button className="shop-now-button">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow"/> </button>
            </Link>
        </div>
        <div className="grid-item">
            <img src= {LivePlants} alt="Flower"/>
        </div>
        <div className="grid-item">
            <h2 className="grid-item-title">Aroma Candles</h2> 
            <Link to="/category/Aroma Candles">
                <button className="shop-now-button">   Shop Now <img src= {LeftArrow} alt="Shop Now Arrow"/> </button>
            </Link>
        </div>
        <div className="grid-item">
            <img src= {AromaCandles} alt="Flower"/>
        </div>
        <div className="grid-item">
            <h2 className="grid-item-title">Freshners</h2> 
            <Link to="/category/Freshners">
                <button className="shop-now-button">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow"/> </button>
            </Link>
        </div>
        <div className="grid-item">
            <img src= {Freshners} alt="Flower"/>
        </div>
    </div>
    <div className="About-section">
        <div className="About-title">
            <h1>About Us</h1>
        </div>
        <div className="About-description">
            <p className='About-minititle'>At Kyiv LuxeBouquets®, we are passionate about creating beautiful and unique floral arrangements that bring joy and happiness to our customers. Our team of expert florists carefully selects the freshest flowers and combines them with creative designs to craft stunning bouquets for any occasion. Whether you're celebrating a birthday, anniversary, or simply want to brighten someone's day, we have the perfect arrangement for you. We also offer a variety of gifts, including plants, candles, and home decor items, to complement our floral offerings. With our easy-to-use online ordering system and reliable delivery service, sending flowers has never been easier. Experience the joy of giving with Kyiv LuxeBouquets® today!</p>
            <h2 className='About-subtitle'>- Kyiv LuxeBouquets® Team</h2>
            <p className='About-paragraph'>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
            <button className='About-button'>LEARN More</button>
        </div>
    </div>
    <div className="Whyus-section">
        <div className="Whyus-title">
            <h1>Why choose us?</h1>
        </div>
        <div className="Whyus-cards">
            <div className='Whyus Card1'>
                <h2 className='About-subtitle'>Stylish bouquets by florists</h2>
                <p className='About-paragraph'>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
            </div>
            <div className='Whyus Card2'>
                <h2 className='About-subtitle'>Stylish bouquets by florists</h2>
                <p className='About-paragraph'>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
            </div>
            <div className='Whyus Card3'>
                <h2 className='About-subtitle'>Stylish bouquets by florists</h2>
                <p className='About-paragraph'>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
            </div>
        </div>
    </div>
    <div className='Contactus- Section'>
        <div className='Contactus-Socialmedia'>
            <div className="Socialmedia-div">
                <img src={Socialmediaimg} alt="SocialMedia Location" />
            </div>
            <div className="socialmedialinks">
                <h2 className="socialmedia-cta">Follow us</h2>
                <div className="socialmedia-icons">
                    <img src={Instaicon} alt="Social media Icons" />
                    <img src={Pinicon} alt="Social media Icons" />
                    <img src={Fbicon} alt="Social media Icons" />
                    <img src={Twittericon} alt="Social media Icons" />
                    <img src={Telegramicon} alt="Social media Icons" />
                </div>
            </div>
        </div>
        <div className='Contactus-Details'>
            <div className="contactus-container">
                <h1 className="Contactus">To Contact us</h1>
                <p className='Contactus-paragraph'>We will call you back</p>
                <div className="bookcall">
                    <input type="alphanumeric"  placeholder='+380 XX XXX XX XX'/>
                    <button className='Contactus-button'>BOOK A CALL</button>
                </div>
            </div>
            <div className="contact-phoneaddresss">
                <div className="phone">
                    <h2 className="phonedetails">Phone</h2>
                    <div className="phonenumbers">
                        <p className="contactdetails"> <img src={Callicon} alt="callicon" /> +380980099777 </p>
                        <p className="contactdetails"> <img src={Callicon} alt="callicon" /> +380980099777 </p>
                    </div>
                </div>
                <div className="address">
                    <h2 className="phonedetails">Address</h2>
                    <div className="phonenumbers">
                        <p className="contactdetails"> OPENING HOURS: 8 TO 11P.M. </p>
                        <p className="contactdetails"> <img src={Pindrop} alt="pinfrop" /> +15/4 Khreshchatyk Street, Kyiv  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="Service-section">
        <div className="serviceone">
                <p className="about-minititle">SERVICE</p>
                <h1 className="service-title">Flower Subcriptions</h1>
                <p className="service-paragraph">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <button className="service-button">SUBSCRIBE NOW</button>
        </div>
        <div className="servicetwo">
                <p className="about-minititle">SERVICE</p>
                <h1 className="service-title">Flower Subcriptions</h1>
                <p className="service-paragraph">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                <button className="service-button">SUBSCRIBE NOW</button>
        </div>
    </div>
    <div className="testimonials-section">
        <img src={Googlelogo} alt="Google icon" className="googlelogo" />
        <p className="about-minititle">SERVICE</p>
        <h1 className="servicetitle">Our Clients say</h1>
        <p className="testimonials">“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</p>
        <p className="testifiers">– Ronald Richards</p>
        <button className="service-button">READ REVIEWS</button>
    </div>
    </>
  );
}
export default Home;