import React from "react";

function Hero() {
  return (
    <div style={{backgroundColor:"rgb(56, 126, 209)"}}>
      <div className="container" style={{paddingTop:"50px"}}>
        <div className="row">
            <div className="col">
                <h4 style={{color:"white",paddingLeft:"80px"}}>Support Portal</h4>
            </div>
            <div className="col">
                <a href="" style={{color:"white",paddingLeft:"280px"}}>Track Tickets</a>
            </div>
        </div>
        <div className="row">
            <div className="col-5">
                <h1 className="fs-5" style={{color:"white",paddingLeft:"80px",paddingTop:"80px"}}>
                    Search for an answer or browse help topics to create a ticket
                </h1>
                <input placeholder="Eg. how do I activate F&O" style={{marginLeft:"80px",width:"100%",height:"50px",borderRadius:"7px",marginTop:"20px",marginBottom:"20px"}}/>
                <br />
                <div className="d-flex justify-content-around" style={{marginLeft:"80px"}}>
                    <a href="" style={{color:"white"}}>Track account opening</a>
                    <a href="" style={{color:"white"}}>Track segment activation</a>
                </div>
                <div className="d-flex justify-content-around" style={{marginLeft:"80px"}}>
                    <a href="" style={{color:"white"}}>Intraday margins</a>
                    <a href="" style={{color:"white",marginBottom:"40px"}}>Kite user manual</a>
                </div>

            </div>
            <div className="col-2"></div>
            <div className="col-5">
                <h1 className="fs-3" style={{color:"white",paddingTop:"80px",paddingBottom:"8px"}}>Featured</h1>
                <ol>
                    <li style={{color:"white",marginBottom:"10px"}}>
                    <a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a>
                    </li>
                    <li style={{color:"white"}}>
                    <a href="" style={{color:"white",paddingBottom:"5px"}}>Latest Intraday leverages - MIS & CO</a>
                    </li>
                </ol>
            </div>
        </div>
      </div>
      </div>
  );
}

export default Hero;