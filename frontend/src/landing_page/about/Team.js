import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-1'>
                <h2 className='fs-3 text-center p-5' style={{opacity:"0.9"}}>
                    People
                </h2>
            </div>
            <div className='row'>
                <div className='col-5'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"50%",width:"70%",marginLeft:"100px"}}/>
                    <h1 className='fs-5 text-center' style={{opacity:"95%",paddingLeft:"78px",paddingTop:"20px"}}>Nithin Kamath</h1>
                    <p className='text-center' style={{opacity:"95%",paddingLeft:"70px",paddingTop:"10px"}}>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"16px",paddingLeft:"15px",paddingRight:"20px",paddingTop:"10px"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"16px",paddingLeft:"15px"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p  style={{opacity:"0.9",lineHeight:"1.8",fontSize:"16px",paddingLeft:"15px"}}>Playing basketball is his zen.</p>
                    <p style={{opacity:"0.9",lineHeight:"1.8",fontSize:"16px",paddingLeft:"15px"}}>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a>  / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;