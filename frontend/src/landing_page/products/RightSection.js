import React from 'react'

function RightSection({imageURL,productName,productDescription,learnMore,first}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 mb-5' >
                    <h1 className='mb-4' style={{fontSize:"26px",opacity:"90%",marginTop:"180px"}}>{productName}</h1>
                    <p style={{lineHeight:"1.9",paddingRight:"120px"}}>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>{first} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-7'>
                    <a href=''><img src={imageURL} style={{height:"563.99px",width:"650px"}} /></a>
                </div>
                
            </div>
        </div>
     );
}

export default RightSection;