import React from 'react';
import logo from '../Login/loginImage.jpg'
import './DataSearchBox.css';
import cloud from './images/cloud.jpg';
import lock from './images/lock.jpg';
import searchIcon from './images/search.jpg';
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
              <div class="container cent ">
              <div class="row justify-content-around">
                  <div class="col-sm-3" id="des">
                      <img src={cloud} class="questionImages" alt="cloud image"/>{" "}
                      <p className="questionbrief">Removing Your Personal <br/> Data online</p>
                      <p className="questionExplain"> The truth is that if you do a brief <br/> online search you are likely to find <br/> quite a lot of information available <br/> about you.</p>
                  </div>
                  <div class="col-sm-3">
                  <img src={lock} class="questionImages" style={{paddingLeft:"10%"}} alt="cloud image"/>{" "}
                      <p className="questionbrief">Securely Removing <br/>Personal Data</p>
                      <p className="questionExplain">Identity theft has become a major <br/> issue nationwide. It is not only very <br/> common, but it is also extremely hard <br/>to resolve.</p>
                     </div>
                     <div class="col-sm-3">
                     <img src={searchIcon}  class="questionImages" alt="cloud image"/>{" "}
                      <p className="questionbrief">How Much Information <br/>There Is About You</p>
                      <p className="questionExplain"> You have been using the internet for quite <br/> some time and just by doing so, you have <br/> unintentionally been uploading a lot of <br/>personal data.</p>
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