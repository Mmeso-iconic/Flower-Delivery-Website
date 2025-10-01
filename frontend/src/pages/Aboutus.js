import React from "react";
import AboutHero from '../assets/AboutHero.webp'
import DiffuserGift from '../assets/DiffuserGift.webp'
import SpecialDay from '../assets/SpecialDay.webp'
import instaicon from '../assets/Instaicon.svg'
import pinicon from '../assets/Pinteresticon.svg'
import fbicon from '../assets/Fbicon.svg'
import tweeticon from '../assets/Twittericon.svg'
import teleicon from '../assets/Telegramicon.svg'

function Aboutus() {   
    return (
        <>
            <div className="aboutus-herosection">
                <div className="herotexts">
                    <h1 className="aboutus-herotext">About Us <span className="aboutus">About</span> <br /> Kyiv LuxeBouquets </h1>
                    <p className="aboutus-para">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
                    <div className="aboutus-socialmedia">
                        <img src={instaicon} alt="Social media icons" className="instaicon" />
                        <img src={pinicon} alt="Social media icons" className="pinicon" />
                        <img src={fbicon} alt="Social media icons" className="fbicon" />
                        <img src={tweeticon} alt="Social media icons" className="tweeticon" />
                        <img src={teleicon} alt="Social media icons" className="teleicon" />
                    </div>
                </div>
                <img src={AboutHero}  alt="business woman" className="aboutus-heroimg" />
            </div>
            <div className="founderstory">
                <p className="founder-minititle">OUR STORY</p>
                <h2 className="founder-header">Our Founder's Passion </h2>
                <p className="founder-para">Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
            </div>
            <div className="aboutus-value">
                <img src={AboutHero}  alt="business woman" className="aboutus-heroimg" />
                <div className="herotexts">
                    <h2 className="aboutus-valuetext">Expertly Crafted Bouquets</h2>
                    <p className="aboutus-para">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.</p>
                </div>
            </div>
            <div className="aboutus-value">
                <div className="herotexts">
                    <h2 className="aboutus-valuetext">Bouquets, Gifts & Ambiance</h2>
                    <p className="aboutus-para">In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.</p>
                </div>
                <img src={DiffuserGift}  alt="business woman" className="aboutus-heroimg" />
            </div>
            <div className="aboutus-value">
                <img src={SpecialDay}  alt="business woman" className="aboutus-heroimg" />
                <div className="herotexts">
                    <h2 className="aboutus-valuetext">Making Every Day Special</h2>
                    <p className="aboutus-para">Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.</p>
                </div>
            </div>
            <div className="discoverbouquets">
                <h1 className="discovertext">Discover Our Beautiful Bouquets</h1>
                <p className="discoverpara">Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
                <button className="discover-button">SHOP NOW</button>
            </div>
        </>
    );
}

export default Aboutus;
