import React from 'react';
import foot from './FAQImages/footImage.jpg'
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useNavigate } from "react-router-dom";
import {  Link } from 'react-router-dom';

import './FAQ.css';

export default function FAQFoot(){
    let navigate=useNavigate();
  
    let Validate=()=>{
               
                   navigate("/Contact");
               
    }
    return(
        <>
        <div className="footImage">
            <h1 style={{marginLeft:"20%",marginTop:"05%",paddingTop:"200px",fontFamily:"Source Sans Pro",fontWeight:"600px",color:"#FFFFFF",fontStyle:"normal"}}>Have Question</h1>
            <h4 style={{marginLeft:"20%",paddingBottom:"2%",marginBottom:"0px",paddingTop:"1%",fontFamily:"Source Sans Pro",fontSize:"14px",fontWeight:"normal",fontStyle:"normal",color:"#FFFF",opacity:"0.54"}}>If you did not fint what you were looking for contact us.</h4>
              <form onSubmit={Validate}>
                <Button type="submit"  style={{marginLeft:"20%",marginBottom:"0px",fontFamily:"Source Sans Pro",fontSize:"14px",fontWeight:"normal",fontStyle:"normal",backgroundColor:"#02C873",borderRadius:"6px",color:"#ffffff", width:"129px",height:"56px",paddingTop:"1%"}} >Contact </Button>
            </form>
             <div className="lastCOntainer">
                   <div style={{paddingLeft:"10%",paddingTop:"140px",flexBasis:"50%"}}>
                      <h1 style={{color:"#FFFFFF",fontFamily:"Source Sans Pro"}}>WIPERTS.COM</h1>
                      <p style={{color:"#FFFFFF",opacity:"0.54",fontFamily:"Source Sans Pro",letterSpacing:"0.01px"}}>Privacy is becoming an increasingly rare commodity as the days go. If you do a brief online research you are likely to find that there is quite a lot of information about you.</p>
                        <div style={{display:"inline-block"}}>
                          <InstagramIcon style={{fill:"#ffffff"}} ></InstagramIcon>
                          <TwitterIcon  style={{ marginLeft:"10px",fill:"#ffffff"}}></TwitterIcon>
                          <FacebookIcon style={{marginLeft:"10px",fill:"#ffffff"}}></FacebookIcon>
                        </div>
                      </div>
                      
                   <div style={{paddingTop:"140px"}}>
                           <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}} >
                           <div  className="centerilizeFirstBox">
                                   <h3 className="linkStylingFoot">Navigation</h3>
                                   <Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}}>   <h3 className="linkStylingFoot">Home</h3></Link>
                                   <Link to="/About" style={{textDecoration:"none",color:"#FFFFFF"}}>    <h3 className="linkStylingFoot">About Us</h3></Link>
                                   <Link to="/Blog" style={{textDecoration:"none",color:"#FFFFFF"}}> <h3 className="linkStylingFoot">Blog</h3></Link>
                                   <Link to="/Contact" style={{textDecoration:"none",color:"#FFFFFF"}}><h3 className="linkStylingFoot">Contact Us</h3></Link>
                               </div>
                               <div style={{paddingLeft:"50px",paddingRight:"10px"}}>
                                   <h4 className="descriptionFoot">Recent Posts</h4>
                                   <p className="descriptionFoot" >Facebook Leaks Personal Information<br/> Again, ~300 Million Records Exposed</p>
                                   <p className="dateFoot">March 14, 2020</p>
                                   <p className="descriptionFoot">Data Breaches Result in Huge Costs</p>
                                   <p className="dateFoot">January 31, 2020</p>
                               </div>
                           </div>
                   </div>

             </div>
        </div>
        
        </>
    );
}