import React from 'react'
function Education() {
    return ( 
        <div className='row p-5 mt-5'>
            <div className='col-6'>
                <img className='p-5' style={{width:"90%"}} src='media/images/education.svg'/>
            </div>
            <div className='col-6 p-5 mb-5'>
                <h1 className='p-5' style={{fontSize:"30px",opacity:"0.9"}} className='mt-3 mb-3'>Free and open market education</h1>
                <p style={{paddingTop:"13px",paddingBottom:"8.5px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a style={{textDecoration:"none"}} href=''>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p style={{paddingTop:"26px",paddingBottom:"8.5px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a style={{textDecoration:"none"}} href=''>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
     );
}

export default Education;