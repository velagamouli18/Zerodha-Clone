import React from 'react'

function Universe() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-center fs-3 p-4' style={{opacity:"0.9"}}>The Zerodha Universe</h1>
                <p className='text-center' style={{marginBottom:"40px"}}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col'>
                    <img className='p-3 d-block mx-auto' src='media/images/zerodhaFundHouse.png' style={{width:"70%"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",paddingLeft:"60px",paddingRight:"60px",paddingTop:"12px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col'>
                    <img className='p-2 d-block mx-auto mt-3' src='media/images/sensibullLogo.svg' style={{height:"64.62px",width:"70%"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",marginTop:"7px",paddingLeft:"60px",paddingRight:"60px",paddingTop:"12px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col'>
                    <img className='p-3 d-block mx-auto' src='media/images/tijoriLogo.png' style={{width:"70%",height:"85px",marginTop:"10px"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",paddingLeft:"60px",paddingRight:"60px",marginTop:"6px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <img className='p-4 d-block mx-auto' src='media/images/streakLogo.png' style={{width:"70%"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",paddingLeft:"60px",paddingRight:"60px",paddingTop:"12px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col'>
                    <img className='p-3 d-block mx-auto mt-3' src='media/images/smallcaseLogo.png' style={{width:"70%"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",marginTop:"8px",paddingLeft:"60px",paddingRight:"60px",paddingTop:"12px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col'>
                    <img className='p-4 d-block mx-auto' src='media/images/dittoLogo.png' style={{width:"70%"}}/>
                    <p className='text-center text-muted' style={{fontSize:"12px",paddingLeft:"60px",paddingRight:"60px",paddingTop:"12px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
        </div>
     );
}

export default Universe;