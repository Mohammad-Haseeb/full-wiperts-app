import React from 'react';
import NavHead from '../Header';
import SearchBar from './searchbar';
import './FAQ.css';
import CardBox from './CardsBox'
import dashboard from './FAQImages/dashboard.jpg';
import general from './FAQImages/general.jpg';
import  muchSign from './FAQImages/muchSign.jpg';
import started from './FAQImages/started.jpg';
import FAQFoot from './FAQFoot.js';

export default function MainFaQ(){
    return(
        <>
        <NavHead/>
        <p style={{fontFamily:"Source Sans Pro",fontWeight:"bold",fontSize:"28px",lineHeight:"38px",color:"#484848",marginTop:"70px",textAlign:"center"}}>Wipers Help center</p>
        <div className="search">
        <SearchBar/>
        </div>
         <div className="flexContainer">
              <div> <CardBox  source={dashboard} Heading="Get started" firstlink="You profile" Secondlink="Lorem ipsum dolor" thirdlink="Amet, consentetur adipiscing" forthlink="Lorem ipsum dolor"/> </div>
              <div> <CardBox  source={general} Heading="Home much is it" firstlink="Lorem ipsum dolor" Secondlink="Elit,sed do eiusmid tempor" thirdlink="Lorem ipsum dolor" forthlink="Amet, consentetur adipiscing"/> </div>
              <div> <CardBox  source={muchSign} Heading="General" firstlink="Lorem ipsum dolor" Secondlink="Elit,sed do eiusmid tempor" thirdlink="Lorem ipsum dolor" forthlink="Amet, consentetur adipiscing"/> </div>
              <div> <CardBox  source={started} Heading="Dashboard" firstlink="Lorem ipsum dolor" Secondlink="Elit,sed do eiusmid tempor" thirdlink="Lorem ipsum dolor" forthlink="Amet, consentetur adipiscing"/> </div>
              

        </div> 
          <FAQFoot/>
         
        </>
    );
}