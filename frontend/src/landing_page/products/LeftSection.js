import React from 'react'

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore,first,second,googlePlay,appStore}) {
    return ( 
        <div className='container'>
            <div className='row mb-5' >
                <div className='col-6' style={{marginTop:"33px"}}>
                    <a href=''><img src={imageURL} style={{marginLeft:"40px"}}/></a>
                </div>
                <div className='col-2'></div>
                <div className='col-4' style={{paddingLeft:"25px"}}>
                    <h1 className=' mb-4' style={{fontSize:"26px",opacity:"90%",marginTop:"85px"}}>{productName}</h1>
                    <p style={{lineHeight:"1.9"}}>{productDescription}</p>
                    <div>
                        {first && (<a href={tryDemo} style={{textDecoration:"none"}}>{first} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                        {second && (<a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>{second} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>)}
                    </div>
                    <div>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;