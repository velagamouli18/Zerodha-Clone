import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-bottom'>
                <h2 className='fs-3 text-center p-5' style={{opacity:"0.9"}}>
                    We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.
                </h2>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col'>
                    <p className='pl-5' style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingRight:"5px"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='pl-5' style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingRight:"5px"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='pl-5' style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingRight:"5px"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col'>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingLeft:"15px"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingLeft:"15px"}}><a href='' style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"19px",paddingLeft:"15px"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href='' style={{textDecoration:"none"}}>blog</a> or see what the media is <a href='' style={{textDecoration:"none"}}>saying about us</a> or learn more about our business and product <a href='' style={{textDecoration:"none"}}>philosophies</a>.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;