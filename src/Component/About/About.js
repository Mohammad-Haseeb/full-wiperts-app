import React from 'react';
import  NavHead from '../Header';
import './About.css';
import FAQFoot from '../FAQ/FAQFoot';

export default function About(){
    return(
        <>
          <NavHead/>
          <div className="backImage">
                <div>             
                   <h1 style={{paddingTop:"10%",textAlign:"center"}}>WIPERTS</h1>
                   <p style={{textAlign:"center"}}>Removing your personal information online</p>
                    <p style={{textAlign:"center"}}>We continuously monitor and remove your personal information as it reappears.</p>
                   <p style={{textAlign:"center"}}>Information that we want to be kept private is being shared in ways that can endanger our privacy, safety, well-being,<br/> and security. Many of us are shocked and upset when we find our  data being freely shared online without our <br/>knowledge or consent. </p>
                 </div>
                 <div  style={{paddingTop:"15%",paddingLeft:"30%"}}>
              <a href="#details" ><div style={{height:"35px",borderRadius:"30px",borderColor:"10px black",marginLeft:"30%",backgroundColor:"black",width:"25px"}}>
                   <p style={{padding:"30%",color:"white"}}>0</p></div>
                 <h5 style={{color:"white",fontFamily:"Source Sans Pro",marginLeft:"27%",fontWeight:"bolder"}}>More Info</h5>
                   </a>
                   </div>
          </div>

          <div className="secondComponent" id="details">
              <div className="secondComponentFlex">
                <div><p className="mission">Our mission</p></div>
                 <div><h1 className="missionSecondStatement">Simplifying remote personal data,<br/> anywhere on the internet.</h1></div>
                 <div><p className="missionThirdStatement">Aliquam id magna suspendisse vitae at ac lacus, pharetra tincidunt. Fusce ut <br/>turpis viverra at. Imperdiet posuere tellus volutpat sit lacinia nunc tempor <br/> tellus. Neque, nunc sit et cursus. Auctor duis et in in consequat scelerisque.<br/> Massa nam natoque in eget dignissim.</p></div>

              </div>
              
          </div>

          <div className="thirdComponent">
              <div>
                  <h1>200K+</h1>
                  <p>Removal of personal information</p>
              </div>
              <div>
                  <h1>350K+</h1>
                  <p>Removal of personal information</p>
              </div>
              <div>
                  <h1>99K+</h1>
                  <p>Removal of personal information</p>
              </div>
           </div>

           <div className="forthComponent" id="details">
               
              <div className="thirdComponentFlex">
                <div><p className="mission">Our mission</p></div>
                 <div><h1 className="missionSecondStatement">Simplifying remote personal data,<br/> anywhere on the internet.</h1></div>
                 <div><p className="missionThirdStatement">Aliquam id magna suspendisse vitae at ac lacus, pharetra tincidunt. Fusce ut <br/>turpis viverra at. Imperdiet posuere tellus volutpat sit lacinia nunc tempor <br/> tellus. Neque, nunc sit et cursus. Auctor duis et in in consequat scelerisque.<br/> Massa nam natoque in eget dignissim.</p></div>

              </div>
             
              
          </div>
          
          <FAQFoot/>
        </>
    );
}
