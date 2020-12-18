import React from 'react';
import NavHead from "../Header";
import './blogRead.css';
import './blog.css';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import MailSharpIcon from '@material-ui/icons/MailSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Image4 from './BlogImage/Mask(3).jpg';
import Image5 from './BlogImage/Mask(4).jpg';
import Image6 from './BlogImage/Mask(5).jpg';
import BlogCard from './BlogCard';
import PaginationRounded from './paginat'

export  default function  BlogReadPost(){
    const msg1="Facebook Leaks Personal Information Again, ~300 Million Records Exposed"
    const date1="March 14, 2020"
    const descript1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus leo porttitor in leo sagittis. Ut aliquam est leo pellentesque porttitor fames."
 
    return(
        <>
         <NavHead/>
         <div>
           <div className="firstImageReadPost">
             <p className="postReadDes"> Blog / Do Big Fines Prevent Data Leaks?</p>
              <p className="postReadHead">Do Big Fines Prevent Data Leaks?</p> 
           </div>
               <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
               <div className="ReadPostSection">
                   <div className="topButonReadPost">
                          <div><p className="postRemoval">Data-Removal</p></div>
                          <div className="dateRemoval">March 14,2020</div>
                   </div>
               <p className="ReadHeading">Medium length heading</p>
                 <p className="readingPostFirstPara">Sierra Tarahumara, popularly known as Copper Canyon is situated in Mexico. The area is a favorite destination among those seeking an adventurous vacation. Copper Canyon is one of the six gorges in the area. Although the name suggests that the gorge might have some relevance to copper mining, this is not the case. The name is derived.</p>
                 <p className="ReadHeading">Medium length heading</p>
                 <p className="readingPostFirstPara">Tremblant is based in Canada and has over 90 runs servicing millions of skiers each year. With 13 state-of-the-art ski lifts and a selection of choices for both snowboarders.</p>
                 <p className="readingPostFirstPara">Tremblant has also recently had 18 acres of quality, freestyle snowboarding playground custom built. With jumps, rails, ramps and half-pipes those who are familiar with this should be sure to check it out should the visit. With 94 slaloms, the Tremblant management team have been sure to cater for all levels with 31 intermediate slopes.</p>
                 <p className="readingPostFirstPara">The facility allows for natural snow between November and April however this does not set anyone back for the other months of the year. The revolutionary Avalanche system actually turns water into snow in an instant. So how does the system work? In Tremblant there are 885 guns, that spray a cooling gassy chemical onto the snow.</p>
                 <p className="readingPostFirstPara">“Learn how to improve your playing quality and even overall understanding of online gaming and how you perform while playing online. Gaming online is a huge business nowadays and that means that there."</p>
                   <div style={{display:"flex",justifyContent:"flex-end"}}>
                       <div><p className="nameSurname">Name Surname,</p></div>
                       <div><p className="cigrate">the practice of cigar smoking</p></div>

                   </div>
                 <p className="ReadHeading">Medium length heading</p>
                 <p className="readingPostFirstPara">The facility allows for natural snow between November and April however this does not set anyone back for the other months of the year. The revolutionary.</p>
                 <p className="readingPostFirstPara"><FiberManualRecordSharpIcon style={{fill:"#02C873", paddingRight:"10px"}}/>Cheap Airline Tickets Great Ways To Save.</p>
                 <p className="readingPostFirstPara"><FiberManualRecordSharpIcon style={{fill:"#02C873", paddingRight:"10px"}}/>Wine Tours La Dolce Vita</p>
                 <p className="readingPostFirstPara"><FiberManualRecordSharpIcon style={{fill:"#02C873", paddingRight:"10px"}}/>Trip To Iqaluit In Nunavut A Canadian Arctic City</p>
                 <p className="readingPostFirstPara"><FiberManualRecordSharpIcon style={{fill:"#02C873", paddingRight:"10px"}}/>Trip To Iqaluit In Nunavut A Canadian Arctic City</p>
                  <div style={{display:"flex",justifyContent:"flex-end",flexWrap:"wrap", paddingBottom:"30px"}}>
                      <div style={{paddingRight:"10px",paddingTop:"5px"}}><p className="Readshare">Share</p></div>
                      <div style={{paddingRight:"10px"}}><MailSharpIcon style={{fill:"#02C873"}}/></div>
                      <div style={{paddingRight:"10px"}}><FacebookIcon style={{fill:"#02C873"}}/></div>
                      <div style={{paddingRight:"10px"}}><TwitterIcon style={{fill:"#02C873"}}/></div>
                      <div style={{paddingRight:"10px"}}><InstagramIcon style={{fill:"#02C873"}}/></div>

                  </div>
                   
               </div>
               </div>
               
         </div>
         <div className="firstBox">
                         <div className="firstBoxPara"><p>Nemo enim ipsam</p></div>
                        <div className="SecondBoxPara" ><p>see more &gt;</p></div>
                    </div>
                    <div className="secondBox">
                           <div> <BlogCard images={Image4} message={msg1} date={date1} description={descript1}/></div>
                           <div> <BlogCard images={Image5} message={msg1} date={date1} description={descript1}/></div>
                         <div> <BlogCard images={Image6}   message={msg1} date={date1} description={descript1}/></div>
                     </div>
                     <div style={{display:'flex',justifyContent:"center",marginTop:"20px",marginBottom:"20px"}}>
                    <PaginationRounded/>
                         <div></div>
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
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
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
  