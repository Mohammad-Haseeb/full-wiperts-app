import React from 'react';
import './privacy.css';
import Button from '@material-ui/core/Button';


export default function Privacy(){
    return(
        <>
        <div className="privacybgImage">
            <div className="privacyFirstBox">
                  <div style={{marginTop:"1%",marginLeft:"2%"}}>
                      <p style={{fontFamily:"Source Sans Pro", fontWeight:"bold",color:"#ffffff"}}>WIPERTS.COM
                       <span className="privacySecondHead">Removing your personal information online</span></p>
                  </div>
                  <div style={{marginRight:"05%",marginTop:"1%"}}>
                      <p className="mulish">X Exit</p>
                  </div>
            </div>
            <div style={{marginLeft:"20%",marginTop:"09%"}}>
                <p className="privacyinfoHead">High-Risk Information <br/>Found!</p>
                <p className="privacyResult">There are <span style={{fontWeight:"bold"}}> 19 enteries </span>found!</p>
                 <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                 <Button style={{backgroundColor:"#02c873",borderRadius:"6px",fontFamily:"Source Sans Pro",color:"#ffffff",fontSize:"14px"}}>Start control your privacy</Button>
                <Button className="bnNewPrivacy" variant="outlined" style={{borderRadius:"6px",fontFamily:"Source Sans Pro",color:"#ffffff",fontSize:"14px", borderColor:" white",marginRight:"47%"}}>Start control your privacy</Button>
                 </div>
               

            </div>
        </div>
        </>
    );
}