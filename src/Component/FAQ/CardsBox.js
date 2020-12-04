import React from 'react';
import {  Link } from 'react-router-dom';
import  './FAQ.css'

export default function CardBox(props){
 return(
     <>
     <img src={props.source} alt="hy"/>
       <Link to="/FAQ/Question" > <h3 className="headerSearchLinkStyle">{props.Heading}</h3></Link>
       <Link to="/FAQ/Question">  <p className="textSearchLinkStyle">{props.firstlink}</p> </Link>
       <Link to="/FAQ/Question">  <p className="textSearchLinkStyle">{props.Secondlink}</p> </Link>
       <Link to="/FAQ/Question">  <p className="textSearchLinkStyle">{props.thirdlink}</p> </Link>
       <Link to="/FAQ/Question">   <p className="textSearchLinkStyle">{props.forthlink}</p> </Link>



     </>
 );
}