import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import { useNavigate } from "react-router-dom";

function ProductsPage() {
    const navigate = useNavigate();
    const handleSignup = () => {
    navigate("/signup");
    };
    return ( 
        <>
            
            <Hero/>
            <LeftSection 
            imageURL="media/images/kite.png" 
            productName="Kite"
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo=""
            learnMore=""
            first="Try Demo"
            second="Learn More"
            googlePlay=""
            appStore=""
            />
            <RightSection
            imageURL="media/images/console.png" 
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
            learnMore=""
            first="Learn More"
            />
            <LeftSection 
            imageURL="media/images/coin.png" 
            productName="Coin"
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemo=""
            learnMore=""
            first="Coin"
            googlePlay=""
            appStore=""
            />
            <RightSection
            imageURL="media/images/kiteconnect.png" 
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
            learnMore=""
            first="Kite Connect"
            />
            <LeftSection 
            imageURL="media/images/varsity.png" 
            productName="Varsity mobile"
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            tryDemo=""
            learnMore=""
            googlePlay=""
            appStore=""
            />
            <p className='text-center p-5 fs-5'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            
            <Universe/>
            <div className='text-center'>
            <button className='p-2 fs-5 m-5 btn btn-primary' style={{width:"15%", margin:"0 auto", backgroundColor:"blue", color:"white",opacity:"70%"}} onClick={handleSignup}>
                Sign up for free
            </button>
            </div>
        </>
     );
}

export default ProductsPage;