import React from 'react';
import logo from '../Login/loginImage.jpg'
import './DataSearchBox.css';
import cloud from './images/cloud.jpg';
import lock from './images/lock.jpg';
import searchIcon from './images/search.jpg';
import Button from '@material-ui/core/Button';
import graphImage from './images/HomePageImages/graphDesiganFrontPage.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import {  Link } from 'react-router-dom';

export default function DataSearchBox(){
   return (
       <>
          <div className="Container">
              <p class="firstdescription">We help you find and removing your personal <br/>
               dtat from unautorizrd sites and data brokers
              </p>
              <div className="Forms">
                  <Forms/>
              </div>
              <div className="infobtn">
              <a href="#h" ><div style={{height:"35px",borderRadius:"30px",borderColor:"10px black",marginLeft:"30%",backgroundColor:"#034770",width:"25px"}}>
                   <p style={{padding:"30%",color:"white"}}>0</p></div>
                 <h5 style={{color:"white",fontFamily:"Source Sans Pro",marginLeft:"25%",fontWeight:"bolder"}}>More Info</h5>
                   </a>
                   </div>

          </div>
          <div id="h">
              <h2 className="question">What you can do with wiperts</h2>
              <p className="questiondesc">We make the search for your personal data a Simple click.</p>
                 <div className="flexConatianer">
                     <div> 
                         <img src={cloud} class="questionImages" alt="cloud image"/>{" "}
                           <p className="questionbrief">Removing Your Personal <br/> Data online</p>
                           <p className="questionExplain"> The truth is that if you do a brief <br/> online search you are likely to find <br/> quite a lot of information available <br/> about you.</p>
                       </div>
                       <div>
                        <img src={lock} class="questionImages"  alt="cloud image"/>{" "}
                          <p className="questionbrief">Securely Removing <br/>Personal Data</p>
                          <p className="questionExplain">Identity theft has become a major <br/> issue nationwide. It is not only very <br/> common, but it is also extremely hard <br/>to resolve.</p>
                        </div>
                        <div >
                           <img src={searchIcon}  class="questionImages" alt="cloud image"/>{" "}
                           <p className="questionbrief">How Much Information <br/>There Is About You</p>
                            <p className="questionExplain"> You have been using the internet for quite <br/> some time and just by doing so, you have <br/> unintentionally been uploading a lot of <br/>personal data.</p>
                         </div>
                 </div>
                 
                 
          </div>
            <Graph/>
             <QualityPrizePlan/> 
             <ContactSection/>
             
             <Homefoot/>
             <div className="credits">
                 <p>© 2020 Wiperts. All right reserved.</p>
                 <p>Privacy Policy  Terms of Service</p>
             </div>
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

function ContactSection(){
    return(
        <>
        <p className="contactHeading">Are you looking for a professional service to remove your personal data?</p>
        <p className="contactInfo">Removing your personal information from the web is our specialty.</p>
        <Button variant="contained" style={{marginLeft:"40%",marginBottom:"15%",width:"129px",height:"56px",backgroundColor:"#02C873",color:"white",fontFamily:"Source Sans ProSource Sans Pro"}}>Default</Button>
        </>
    );
}
function QualityPrizePlan(){
  return(
      <>
        <div className="prizeContainer" id="prize" >
              <p className="prizeHeading">Quality is our Passion</p>
              <p className="prizeDes">Let us remove your personal information from data brokers</p>
              <div className="btnfelx">
                  <div ><button  class="btn" style={{borderRadius:"20px",backgroundColor:"#FFFFFF",color:"green"}} >Default</button></div>
                 <div> <button type="button" class="btn prizebtn1">Primary</button></div>
                  <div><button class="btn prizebtn2">Default</button></div>
              </div>
              <div className="prizebox-flex">
                  <div className="box1">
                      <p>Addresses & Phone Numbers</p>
                      <p>Full Name & Date of Birth</p>
                      <p>Removing any other personal Info</p>
                  </div>
                  <div className="box2">
                      <p style={{color:"white",fontWeight:"bolder",textAlign:"center"}}>One Person</p>
                       <p style={{textAlign:"center"}}>89 * 23</p>
                       <p><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Data Supervision</p>
                       <p style={{backgroundColor:"gray",paddingTop:"20px",paddingBottom:"20px"}}><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Ongoing Surveillance</p>
                        <p><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Regular Scan </p>
                        <Button className="prizebtnPerson">Upgrade now</Button>
                  </div>
                  <div className="box3">
                  <p style={{color:"white",fontWeight:"bolder",textAlign:"center"}}>One Person</p>
                       <p style={{textAlign:"center"}}>89 * 23</p>
                       <p><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Data Supervision</p>
                       <p style={{backgroundColor:"gray",paddingTop:"20px",paddingBottom:"20px"}}><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Ongoing Surveillance</p>
                        <p><CheckCircleOutlineIcon style={{marginRight:"7%"}}></CheckCircleOutlineIcon>Regular Scan </p>
                        <Button className="prizebtnPerson">Upgrade now</Button>
                  </div>
                     <p className="prizeLastDescip">If you have any questions, please let us know at <strong>info@wiperts.com</strong></p>
              </div>
        </div>
      </>
  );
}
function Graph(){
    return(
        <>
          <div className="graphMainContainer">
          <div class="container  ">
<div class="row justify-content-center">
<div class="col-sm-12 col-md-6 grapghbox" style={{paddingTop:"15%"}}>
    <h5 className="graphHeading">We Offer Exceptional Service</h5>
    <p className="graphPara">There is a lot of information available about you online. There are <br/> endless sites on the internet that claim to 
        know personal details <br/> about you, such as, date of birth, address, income,  relatives and <br/> contact information. With that 
        in mind we would like to offer our <br/> service in removing all that data on your behalf.</p>
        <Button variant="contained" className="graphbtn">Start scanning <ArrowForwardIcon style={{marginLeft:"10px"}}></ArrowForwardIcon></Button>
</div>
<div class="col-sm-12 col-md-6 grapghbox">
    <img src={graphImage} style={{paddingTop:"20%",width:"60%",height:"70%"}} alt="grapg"/>

</div>

    </div>
    </div>
      
          </div>
        </>
    );
}
function Forms(){
    let navigate=useNavigate();

    var country_list = ["State","Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
    ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
      let Validate=()=>{
           navigate("/privacy");
        
        
      }
    return(
        <>

<form class="   p-5" onSubmit={Validate}>



<div class="form-row mb-4">
    <div class="col">
        
        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder=" First name" required/>
    </div>
    <div class="col">
        
        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" required/>
    </div>
</div>
  <div class="form-row mb-4">
    <div class="col">
      
    <div class="form-group">
    
    <select class="form-control" id="exampleFormControlSelect1" required>
    {
        country_list.map((val,i)=>{
        return <option className="op">{val}</option>
         
        })
    }
     
    </select>
  </div>

    </div>
    <div class="col">
    
        <input type="email" id="defaultRegisterFormLastName" class="form-control" placeholder="Email" required/>

    </div>
</div>
<div class="form-row mb-1">
    <div class="col">
     
    <Button type="submit"  variant="contained" className="graphbtn" style={{backgroundColor:"#02C873"}}>Free Search<ArrowForwardIcon style={{marginLeft:"10px"}}></ArrowForwardIcon></Button>
    </div>
    <div class="col">
      
      <a href="#prize"><Button variant="contained" style={{backgroundColor:"#034770",color:"white",fontFamily:"Source Sans Pro"}}>View Prices</Button></a>

    </div>
</div>




</form>
        </>
    );
}
