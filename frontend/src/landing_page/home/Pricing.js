import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-5'>
                    <h1 className='mb-3 mt-5'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7 mt-5 p-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-5' >
                                    <h1 style={{color:"gold",fontSize:"50px"}}><sup><i style={{fontSize:"20px"}} class="fa fa-inr" aria-hidden="true"></i></sup>0</h1>
                                </div>
                                <div className='col-7'>
                                    <p className='mt-3' style={{fontSize:"10px"}}>Free account opening</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-5'>
                                    <h1 style={{color:"gold",fontSize:"50px"}}><sup><i style={{fontSize:"20px"}} class="fa fa-inr" aria-hidden="true"></i></sup>0</h1>
                                </div>
                                <div className='col-7'>
                                    <p className='mt-3' style={{fontSize:"10px"}}>Free equity delivery and direct mutual funds</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h1 style={{color:"gold",fontSize:"50px"}}><sup><i style={{fontSize:"20px"}} class="fa fa-inr" aria-hidden="true"></i></sup>20</h1>
                                </div>
                                <div className='col-6'>
                                    <p className='mt-3' style={{fontSize:"10px"}}>Intraday and F&O</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;