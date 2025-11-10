import React from "react";
import './about.css';
import Instaicon from '../assets/Instaicon.svg'
import Pinicon from '../assets/Pinteresticon.svg'
import Fbicon from '../assets/Fbicon.svg'
import Twittericon from '../assets/Twittericon.svg'
import Telegramicon from '../assets/Telegramicon.svg'
import AboutImage from '../assets/AboutHero.webp'
import ExpertBouquets from '../assets/ExpertBouquets.webp'
import AromaCandle from '../assets/DiffuserGift.webp'
import SpecialDay from '../assets/SpecialDay.webp'


function About() {



return (
   <div className="aboutus-container page-container">
        <div className="aboutus-herosection">
            <div className="about-herosectext">
                <h2 className="herotext">Our Story</h2>
                <h2 className="herotext-caligraph">About</h2>
                <h2 className="herotext">Kyiv LuxeBouquets</h2>
                <p className="herotext-para">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with <span className="hero">Our Online Flower Delivery Service</span> </p>
                <div className="socialmedia-iconss">
                    <img src={Instaicon} alt="Social media Icons" />
                    <img src={Pinicon} alt="Social media Icons" />
                    <img src={Fbicon} alt="Social media Icons" />
                    <img src={Twittericon} alt="Social media Icons" />
                    <img src={Telegramicon} alt="Social media Icons" />
                </div>
            </div>
            <div className="about-herosecimage">
                <img src={AboutImage} alt="A woman probably the CEO" />
            </div>
        </div>
        <div className="about-story">
            <p className="About-minititle">OUR STORY</p>
            <h3 className="about-passion">Our Founder's Passion </h3>
            <p className="about-passionstory">
                  Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska
                  with the goal of bringing unique and exquisite bouquets
                  to the people of Kyiv. Natalia has always had a passion for
                  flowers and design, and his vision was to create a local
                  floral studio that would specialize in the creation and delivery of 
                  fresh, beautiful, and distinctive bouquets.
            </p>
        </div>
        <div className="our-attributes">
            <div className="attributes-imgdiv">
                <img src={ExpertBouquets} alt="An Experts hands cutting Roses" />
            </div>
            <div className="attributes-description">
                <h3 className="about-passions">Expertly Crafted Bouquets </h3>
                <p className="about-passionstories">
                    At Kyiv LuxeBouquets, we take pride in our team of talented and 
                    experienced florists who carefully select each bloom, ensuring
                    that only the freshest and most stunning flowers make it into our
                    bouquets. We work directly with farms to source the highest
                    quality flowers, and our skilled florists expertly craft each bouquet to perfection.
                </p>
            </div>
        </div>
        <div className="our-attributes story">
                <div className="attributes-description">
                    <h3 className="about-passions">Bouquets, Gifts & Ambiance </h3>
                    <p className="about-passionstories ">
                        In addition to our stunning bouquets, we also offer a collection of dried bouquets, 
                        house plants, and fragrant candles from luxury brands to create the perfect ambiance. 
                        We believe that sending flowers, plants, and gifts should be easy 
                        and stress-free, which is why we offer same or next-day delivery throughout Kyiv.
                    </p>
                </div>
                <div className="attributes-imgdiv">
                    <img src={AromaCandle} alt="A home scene with flowers and candles" />
                </div>
            </div>
            <div className="our-attributes">
                <div className="attributes-imgdiv">
                    <img src={SpecialDay} alt="High Heels and ribbbon" />
                </div>
                <div className="attributes-description">
                    <h3 className="about-passions">Making Every Day Special </h3>
                    <p className="about-passionstories">
                        Our mission is simple: to make every day special and memorable for our customers. We are 
                        dedicated to providing the highest quality flowers, exceptional customer service, and a 
                        seamless online experience that will make you feel confident and satisfied with your purchase.
                        Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your 
                        life with our beautiful bouquets and gifts.
                    </p>
                </div>
            </div>
            <div className="about-story">
                <h2 className="herotext">Discover Our Beautiful Bouquets</h2>
                <p className="about-passionstory">
                    Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. 
                    Click the button below to start shopping
                </p>
                <div className="productpage-addtocart">
                    <button className="addto-btn " type="button ">SHOP NOW</button>
                </div>
            </div>
   </div>
);

}

export default About;