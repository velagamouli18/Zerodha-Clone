import React from 'react'
import { useNavigate } from "react-router-dom";
function OpenAccount() {
    const navigate = useNavigate();
    const handleSignup = () => {
    navigate("/signup");
    };
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-3 p-3'>
                    Open a Zerodha account
                </h1>
                <p>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <div className='text-center'>
                <button className='p-2 fs-5 m-5 btn btn-primary' style={{width:"15%", margin:"0 auto", backgroundColor:"blue", color:"white",opacity:"70%"}} onClick={handleSignup}>
                    Sign up for free
                </button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;