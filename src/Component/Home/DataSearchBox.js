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
              <a href="#h" ><div style={{height:"35px",borderRadius:"30px",borderColor:"10px black",marginLeft:"30%",backgroundColor:"red",width:"25px"}}>
                   <p style={{padding:"30%",color:"white"}}>0</p></div>
                 <p style={{color:"white"}}>More Info</p>
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
       </>
   );
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
        <div className="prizeContainer" >
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
    <img src={graphImage} style={{paddingTop:"1%",width:"90%",height:"80%"}} alt="grapg"/>

</div>

    </div>
    </div>
      
          </div>
        </>
    );
}
function Forms(){
    return(
        <>

<form class="   p-5" >

<p class="h4 mb-4">Sign up</p>

<div class="form-row mb-4">
    <div class="col">
        
        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
        
        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"/>
    </div>
</div>
  <div class="form-row mb-4">
    <div class="col">
      
    <div class="form-group">
    
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

    </div>
    <div class="col">
    
        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"/>
    </div>
</div>
<div class="form-row mb-1">
    <div class="col">
     
       <button>
         free Search
      </button>
    </div>
    <div class="col">
      
       <button>
         View Price
      </button>
    </div>
</div>




</form>
        </>
    );
}



















// <div class="row justify-content-around">
// <div class="col-sm-3 col-md-3 col-lg-3" style={{marginBottom:"10px"}} >
//     <img src={cloud} class="questionImages" alt="cloud image"/>{" "}
//     <p className="questionbrief">Removing Your Personal <br/> Data online</p>
//     <p className="questionExplain"> The truth is that if you do a brief <br/> online search you are likely to find <br/> quite a lot of information available <br/> about you.</p>
// </div>

   
// </div>