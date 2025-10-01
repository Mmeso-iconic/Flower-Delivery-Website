import React from "react";
import SubscriptionImg from '../assets/Subscription.webp'
import SelectPlanImg from '../assets/SelectPlan.webp'
import downarrow from '../assets/downarrow.svg'
import uparrow from '../assets/uparrow.svg'

function Subscription() {
  return (
    <div className="Subscription-Container">
        <div className="subscription-herosection">
            <img src={SubscriptionImg} alt="" className="subscription-herosectionimg" />
            <div className="subsription-herosectext">
                <h1>Flower Subscription</h1>
                <div className="flowersub-plan">
                    <div className="plan-details plan1">
                        <p><strong>For Yourself</strong></p>
                        <ul>
                            <li>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
                        </ul>
                    </div>
                    <div className="plan-details plan2">
                        <p><strong>As a Gift</strong></p>
                        <ul>
                            <li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
                        </ul>
                    </div>
                    <div className="plan-details plan3">
                        <p><strong>For Business</strong></p>
                        <ul>
                            <li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>
                        </ul>
                    </div>
                </div>
                <button className="subplan-button">EXPLORE PLAN</button>
            </div>
        </div>
        <div className="how-itworks">
            <h1 className="how-itworkstext">How it Works</h1>
            <div className="how-itworksdiv">
                <div className="how-itworks-step">
                    <h2 className="how-itworkstitle">Choose Your Plan</h2>
                    <p className="how-itworkspara" >Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
                </div>
                <div className="how-itworks-step">
                    <h2 className="how-itworkstitle">Frequency and Duration</h2>
                    <p className="how-itworkspara" >Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
                </div>
                <div className="how-itworks-step">
                    <h2 className="how-itworkstitle">Pay once</h2>
                    <p className="how-itworkspara" >After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones</p>
                </div>
            </div>
        </div>
        <div className="select-a-plan">
            <img src={SelectPlanImg} alt="" className="selectaplan-img" />
            <div className="selectaplan-div">
                <p className="select-minititle">Build Your Subscription</p>
                <h2 className="selectaplan-title">Selecting a Plan</h2>
                <p className="selectaplan-para">Enjoy free shipping on every order and save up to 30%. Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.</p>
                <div className="theplans">
                    <div className="plandiv">
                        <div className="plan1">
                            <img src="" alt="" className="plan1-img" />
                            <div className="plan1-details">
                                <h3 className="plan-title">Classic</h3>
                                <ul className="plan-list">
                                    <li>Price $45 </li>    
                                    <li>Free Delivery</li>
                                    <li>Best for a budget</li>
                                    <li>Glass vase with first delivery</li>
                                    <li>Save up to 25%</li>
                                </ul>                      
                            </div>
                        </div>
                        <button className="selectplan-button">SELECT</button>
                    </div>
                    <div className="plandiv">
                        <div className="plan2">
                            <img src="" alt="" className="plan2-img" />
                            <div className="plan1-details">
                                <h3 className="plan-title">Seasonal</h3>
                                <ul className="plan-list">
                                    <li>Price $65  </li>    
                                    <li>Free Delivery</li>
                                    <li>Best seasonal selections</li>
                                    <li>Glass vase with first delivery</li>
                                    <li>Luxury candle with your first delivery</li>
                                    <li>Save up to 28%</li>
                                </ul>                      
                            </div>
                        </div>
                        <button className="selectplan-button">SELECT </button>
                    </div>
                    <div className="plandiv">
                        <div className="plan1">
                            <img src="" alt="" className="plan3-img" />
                            <div className="plan1-details">
                                <h3 className="plan-title">Luxe</h3>
                                <ul className="plan-list">
                                    <li>Price $95 </li>    
                                    <li>Free Delivery</li>
                                    <li>Premium arrangement</li>
                                    <li>Premium vase with first delivery</li>
                                    <li>Luxury candle with your first delivery</li>
                                    <li>Save up to 30%</li>
                                </ul>                      
                            </div>
                        </div>
                        <button className="selectplan-button">SELECT</button>
                    </div>
                </div>
                <hr />
                <div className="howoften-div">
                    <h3 className="howoften-text">
                        How often do you want flowers delivered ?
                    </h3>
                    <p className="howoften-para">Select the delivery frequency</p>
                    <div className="howoften-options">
                        <button className="howoften-button">MONTHLY</button>
                        <button className="howoften-button">BI-WEEKLY</button>
                        <button className="howoften-button">WEEKLY</button>
                    </div>
                </div>
                <hr />
                <div className="howmany-div">
                    <h3 className="howmany-text">
                        How many deliveries would you like ? ?
                    </h3>
                    <p className="howoften-para">Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need </p>
                    <div className="howmany-quantity">
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="10"
                            defaultValue="1"
                        />
                    </div>
                </div>
                <hr />
                <button className="selectplan-button">CHECKOUT</button>
            </div>
        </div>
        <div className="subscription-faqs">
            <div className="thefaqs">
                <h1 className="faqstitle">Subscription FAQ</h1>
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
                <div className="faqarrow">
                    <p className="faqtext">How often will I get a new bouquet?</p>
                    <img src={downarrow} alt="downward arrow" className="faqarrow" />
                    <p className="faqanswer">Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
                    <img src={uparrow} alt="up arrow" className="uparrow" />
                </div>
                <hr />
            </div>
        </div>
    </div>
  );
}   
export default Subscription;