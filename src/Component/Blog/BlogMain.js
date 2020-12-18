import React from 'react';
import NavHead from "../Header";
import BlogCard from './BlogCard';
import './blog.css';
import Image1 from './BlogImage/Mask.jpg';
import Image2 from './BlogImage/Mask(1).jpg';
import Image3 from './BlogImage/Mask(2).jpg';
import Button from '@material-ui/core/Button';
import Image4 from './BlogImage/Mask(3).jpg';
import Image5 from './BlogImage/Mask(4).jpg';
import Image6 from './BlogImage/Mask(5).jpg';
import PaginationRounded from "./paginat";
import upperImage from './BlogImage/upper.jpg';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import {  Link } from 'react-router-dom';






export default function MainBlog(){
    const msg1="Facebook Leaks Personal Information Again, ~300 Million Records Exposed"
    const date1="March 14, 2020"
    const descript1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus leo porttitor in leo sagittis. Ut aliquam est leo pellentesque porttitor fames."
    return(
        <>
          <NavHead/>
              <div className="upperBoxBlog">
                 <div className="upperImageSetting">
                     <div className="boxSettingInUpImage">
                      <div className="firstInnerofUpperImage">
                          <div style={{paddingTop:"10px"}}><p className="feature">Feature</p></div>
                          <div style={{paddingTop:"10px"}}><p style={{color:"#ffffff",fontWeight:"bold",fontFamily:"Source Sans Pro"}}>March 14, 2020</p></div>
                          <div style={{paddingTop:"10px"}}>
                            <div style={{display:"flex"}}>
                              <RemoveRedEyeIcon style={{ fill: '#ffffff' }}/>
                              <p style={{paddingLeft:"05px",fontWeight:"bold",color:"#ffffff",fontFamily:"Source Sans Pro"}}>143 view</p>
                            </div>
                          </div>
                        </div> 
                        <div><p className="upImgText">Data Breaches Increased by Nearly 20 Percent in 2019</p></div>  
                         <div className="uperImgBtn"><Button  style={{backgroundColor:"#02C873",borderRadius:"6px",fontFamily:"Source Sans Pro",color:"#ffffff",MarginLeft:"30px"}}>Read More</Button></div>

                     </div>
                 </div>
              </div>
          <div className="firstBox">
              <div className="firstBoxPara"><p>Nemo enim ipsam</p></div>
             <div className="SecondBoxPara" ><p>see more &gt;</p></div>
          </div>
             <div className="secondBox">
              <div> <BlogCard images={Image1} message={msg1} date={date1} description={descript1}/></div>
              <div> <BlogCard images={Image2} message={msg1} date={date1} description={descript1}/></div>
              <div> <BlogCard images={Image3}   message={msg1} date={date1} description={descript1}/></div>
           </div>
           <div style={{marginTop:"50px"}}>
             <div className="firstBox">
               <div className="firstBoxPara"><p>Sed ut perspiciatis</p></div>
               <div className="SecondBoxPara" ><p>see more &gt;</p></div>
              </div> 
            </div>  
            <div className="secondBox">
              <div> <BlogCard images={Image4} message={msg1} date={date1} description={descript1}/></div>
              <div> <BlogCard images={Image5} message={msg1} date={date1} description={descript1}/></div>
              <div> <BlogCard images={Image6}   message={msg1} date={date1} description={descript1}/></div>
           </div>  
               <div style={{display:"flex",justifyContent:"center",marginTop:"30px",marginBottom:"20px"}}>                                 
               <PaginationRounded/>
               </div>

               <div className="lastBoxBlog">
                    <div className="blogBloxFull">
                      <div className="lastboxDescrip"> <p >If you believe your personal information has been jeopardized or if you just simply prefer not to have your information made public please contact us at Info@wiperts.com, so we may help you.</p></div>
                      <div className="lastBoxEndDescript"><p >Our service is the most comprehensive way of making sure that everything is taken care of in the highest industry standards.</p></div>
                          <Button className="lastBoxBlogBtn">Contact Us</Button>
                    </div>
               </div>
             <Homefoot/>
        </>
    );
}
function Homefoot(){
  return(
      <>
      <div className="aboutContainer">
          <div className="aboutUsDescription">
                 <h5 style={{color:"white",fontWeight:"bolder"}}>Wiperts.Com</h5> 
                 <p>Privacy is becoming an increasingly rare commodity as the days go. If you do a brief online research you are likely to find that there is quite a lot of information about you.</p> 

          </div>
          <div class="addressLinkAboutcontainer">
              <div>
              <p>Navigation</p>
                    <Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}}>  <p>Home</p></Link>
                    <Link to="/About" style={{textDecoration:"none",color:"#FFFFFF"}}>     <p>About Us</p></Link>
                    <Link to="/Blog" style={{textDecoration:"none",color:"#FFFFFF"}}>   <p>Blog</p></Link>
                    <Link to="/Contact" style={{textDecoration:"none",color:"#FFFFFF"}}> <p>Contact Us</p></Link>

             </div>
             <div className="address">
                 <p>Recent Posts</p>
                 <p>Facebook Leaks Personal Information Agai,
                      ~300<br/> Million Records Exposed</p>
                <p>March 14, 2020</p>
                <p>Data Breaches Result in Huge Costs</p>
                <p>January 31, 2020</p>


             </div>
          </div>
      </div>
      </>
  )
}
