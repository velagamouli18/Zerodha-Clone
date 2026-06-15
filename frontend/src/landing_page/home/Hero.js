import React from 'react'
import { useNavigate } from "react-router-dom";
function Hero() {
    const navigate = useNavigate();
    const handleSignup = () => {
    navigate("/signup");
    };
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Heroimage' className='mb-5'/>
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className='p-2 fs-5 mb-5' style={{width:"20%", margin:"0 auto", backgroundColor:"blue", color:"white"}} onClick={handleSignup}>
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Hero;
