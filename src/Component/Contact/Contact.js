import { Button } from '@material-ui/core';
import React from 'react';
import NavHead from '../Header';
import './contact.css'
import FAQFoot from '../FAQ/FAQFoot'

export default function Contact(){
    return(
        <>
         <NavHead/>
          <div className="backImage">
         
                   <div>
                     <p className="touchHead" style={{textAlign:"center"}}>Let’s Stay in Touch</p>
                     <p className="DescriptionHead" style={{textAlign:"center"}}>If you believe your personal information has been jeopardized or if you just simply prefer not to have your information made public please contact us at Info@wiperts.com, so we may help you.</p>
                    <button>Heelo</button>
                     
                  </div>
           </div> 
           <FAQFoot/>
           
        </>
    );
}