import React from 'react';
import NavHead from '../Header';
import FAQuestion from './FAQquestion';
import './FAQ.css';
import FAQFoot from './FAQFoot';


export default function QuestionMain(){
    let details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,  sit amet blandit leo lobortis eget."
   return(
       <> 
          <NavHead/>
          <div>
          <p className="barFAQ">FAQ/Your profile</p>
          <h4 style={{textAlign:"center",fontFamily:"Source Sans pro"}}>Your Profile</h4>
          <FAQuestion heading="What information do i provide when I sign up" description={details}/>
          <FAQuestion heading="What personal information can you remove?" description={details}/>
          <FAQuestion heading="Pulvinar sagittis" description={details}/>
          <FAQuestion heading="In maecenas velit." description={details}/>
          <FAQuestion heading="Vulputate ut et vestibulum" description={details}/>
          <FAQuestion heading="Urna ultrices at ac lorem sagittis morbi quam." description={details}/>


          </div> 
          <FAQFoot/>
       </>
   );
}