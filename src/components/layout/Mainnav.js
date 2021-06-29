import React from 'react';
import {Link } from "@reach/router"


const Mainnav=()=> {
    return (
        <>
 <div className=" light-blue darken-1" style={{padding:"5px"}}>
        <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div className="logo" style={{display:"flex",alignItems:"center"}}>
        <img src="https://img.icons8.com/color/48/000000/football-team.png"/>
        <h6 className="white-text text-white" style={{marginLeft:"10px",fontWeight:"bold"}}>GroupTask Manager</h6>
        </div>
        <div className="nav-links" style={{display:"flex", alignItems:"center"}}>
        <Link to="/" style={{color:"white", marginRight:"10px", display:"flex", alignItems:"center"}}><img src="https://img.icons8.com/flat-round/20/000000/home.png"/><p style={{marginLeft:"5px"}}>Home</p></Link>
        <Link to="/about" style={{color:"white",marginRight:"10px", display:"flex", alignItems:"center"}}><img src="https://img.icons8.com/fluent/20/000000/high-importance.png"/><p>About</p></Link>
        </div>
        </div>        
  </div>
    </>
    )
}





export default Mainnav;