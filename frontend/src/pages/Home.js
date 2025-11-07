import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";
import FlowerHeroImage from '../assets/FlowerHeroimg.png';
import RightArrow from '../assets/arrow-right.svg';
import LeftArrow from '../assets/arrow-left.svg';
import FreshFlower from '../assets/FreshFlower.png';
import DriedFlowers from '../assets/DriedFlowers.png';
import LivePlants from '../assets/LivePlants.png';
import AromaCandles from '../assets/AromaCandles.webp';
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
import SelectPlan from '../assets/SelectPlan.webp'

function Home() {
  return (
    <>
    
        <div className="herosection-container">
            <div className="hero-section">
                <div className="hero-text">       
                    <h1>Kyiv <br/> LuxeBouquets <span className='Rmark'>®</span></h1>
                    <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                </div>
                <div className="herosection-image">       
                    <img className="herosec-image" src={FlowerHeroImage} alt="Hero" />
                    <p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item has-text">
                    <h2 className="grid-item-title">Fresh Flowers</h2> 
                    <Link to="/category/Fresh Flowers" className="shop-now-button ">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow" />
                    </Link>
                </div>
                <div className="grid-item">
                    <img src= {FreshFlower} alt="Flower"/>
                </div>
                

                <div className="grid-item">
                    <img src= {DriedFlowers} alt="Flower"/>
                </div>
                <div className="grid-item has-text">
                    <h2 className="grid-item-title">Dried Flowers</h2> 
                    <Link to="/category/Dried Flowers" className="shop-now-button ">   Shop Now <img src= {LeftArrow} alt="Shop Now Arrow"/>                 </Link>
                </div>



                <div className="grid-item has-text">
                    <h2 className="grid-item-title">Live Plants</h2> 
                    <Link to="/category/Live Plants" className="shop-now-button ">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow"/>
                    </Link>
                </div>
                <div className="grid-item">
                    <img src= {LivePlants} alt="Flower"/>
                </div>

                <div className="grid-item">
                    <img src= {AromaCandles} alt="Flower"/>
                </div>
                <div className="grid-item has-text">
                    <h2 className="grid-item-title">Aroma Candles</h2> 
                    <Link to="/category/Aroma Candles" className="shop-now-button ">   Shop Now <img src= {LeftArrow} alt="Shop Now Arrow"/>                 </Link>
                </div>


                <div className="grid-item has-text">
                    <h2 className="grid-item-title">Freshners</h2> 
                    <Link to="/category/Freshners" className="shop-now-button ">   Shop Now <img src= {RightArrow} alt="Shop Now Arrow"/>
                    </Link>
                </div>
                <div className="grid-item">
                    <img src= {Freshners} alt="Flower"/>
                </div>
            </div>
        </div>
        <div className="About-section">
            <div className="About-title">
                <h2>About Us</h2>
            </div>
            <div className="About-description">
                <p className='About-minititle'>OUR STORY</p>
                <h3 className='About-subtitle'>Kyiv LuxeBouquets</h3>
                <p className='About-paragraph'>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
                <button className='About-button'>
                    <Link to="/about" className="footer-link">Learn More</Link> 
                </button>
            </div>
        </div>
        <div className="Whyus-section">
            <div className="Whyus-title">
                <h2>Why choose us?</h2>
            </div>
            <div className="Whyus-cards">
                <div className='Whyus Card1'>
                    <h2 className='About-subtitle'>Stylish bouquets by florists</h2>
                    <p className='About-paragraph'>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
                </div>
                <div className='Whyus Card2'>
                    <h2 className='About-subtitle'>On-time delivery</h2>
                    <p className='About-paragraph'>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
                </div>
                <div className='Whyus Card3'>
                    <h2 className='About-subtitle'>Safe payment</h2>
                    <p className='About-paragraph'>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
                </div>
                <div className='Whyus Card4'>
                    <h2 className='About-subtitle'>Subscription by your needs</h2>
                    <p className='About-paragraph'>With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</p>
                </div>
            </div>
        </div>
        <div className='Contactus-Section'>
            <div className='Contactus-Socialmedia'>
                <div className="Socialmedia-div">
                    <img src={Socialmediaimg} alt="SocialMedia Location" />
                </div>
                <div className="socialmedialinks">
                    <h2 className="About-subtitle-follow">Follow us</h2>
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
                    <h2 className="Contactus">To Contact us</h2>
                    <p className="contactusdata">We will call you back</p>
                    <div className="bookcall">
                        <input type="alphanumeric"  placeholder='+380 XX XXX XX XX'/>
                        <button className='Contactus-button'>BOOK A CALL</button>
                    </div>
                </div>
                <div className="contact-phoneaddress">
                    <div className="phone fone1">
                        <h2 className="phonedetails det1">Phone</h2>
                        <div className="phonenumbers num1">
                            <p className="contactdetails"> <img src={Callicon} alt="callicon" /> +380980099777 </p>
                            <p className="contactdetails"> <img src={Callicon} alt="callicon" /> +380980099777 </p>
                        </div>
                    </div>
                    <div className="phone fone2">
                        <h2 className="phonedetails det2">Address</h2>
                        <div className="phonenumbers num2">
                            <p className="contactdetails"> OPENING HOURS: 8 TO 11P.M. </p>
                            <p className="contactdetails"> <img src={Pindrop} alt="pinfrop" /> +15/4 Khreshchatyk Street, Kyiv  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Service-section">
            <h1 className="Contactus-Service">Our Services</h1>
            <div className="serviceone">
                    <div className="servicediv1">
                        <img className="servicediv-image" src={SelectPlan} alt="Hero" />
                    </div>
                    <div className="servicediv2">
                        <p className="About-minititle">SERVICE</p>
                        <h3 className="service-title">Flower Subscriptions</h3>
                        <p className="service-paragraph">Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
                        <button className="service-button">
                             <Link to="/subscription" className="footer-link"> SUBSCRIBE NOW </Link>
                        </button>
                    </div>
            </div>
            <div className="servicetwo">
                    <p className="About-minititle">SERVICE</p>
                    <h3 className="service-title">Wedding & Event Decor</h3>
                    <p className="service-paragraph">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
                    <button className="service-buttons">
                         <Link to="/subscription" className="footer-link"> SUBSCRIBE NOW </Link>
                    </button>
            </div>
        </div>
        <div className="testimonials-section">
            <img src={Googlelogo} alt="Google icon" className="googlelogo" />
            <p className="About-minititle">SERVICE</p>
            <h3 className="service-title">Our Clients say</h3>
            <p className="testimonials">“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</p>
            <p className="testifiers">– Ronald Richards</p>
            <button className="service-button">READ REVIEWS</button>
        </div>
    </>
  );
}
export default Home;