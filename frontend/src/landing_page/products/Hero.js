import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 p-5 border-bottom mb-5'>
                <h1 className='text-center fs-3' style={{marginBottom:"15px"}}>Zerodha Products</h1>
                <p className='text-center fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-center' style={{fontSize:"18px",marginBottom:"70px"}}>Check out our<a href='' style={{textDecoration:"none"}}> investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;