import React from 'react';
import './footer.css'

export default function NavHead(){
    return(
        <>
        
<nav className="mb-0 navbar navbar-expand-lg navbar-dark info-color " style={{background:"linear-gradient(78.33deg, #034770 5.81%, #0F74B0 86.83%)"}} >
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Facebook
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Instagram</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"> Profile </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
          <a className="dropdown-item" href="#">My account</a>
          <a className="dropdown-item" href="#">Log out</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}

export function  BodyFoot(){
  return(

      <>
     <div className="foot" >  
<footer class="page-footer font-small blue pt-4">

  
<div class="container-fluid text-center text-md-left">

 
  <div class="row">

    
    <div class="col-md-6 mt-md-3 mt-0">

      <h5 class="text-uppercase">Footer Content</h5>
      <p>Here you can use rows and columns to organize your footer content.</p>

    </div>
    

    <hr class="clearfix w-100 d-md-none pb-3"/>

    <div class="col-md-3 mb-md-0 mb-3">

      
      <h5 class="text-uppercase">Links</h5>

      <ul class="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
        <li>
          <a href="#!">Link 3</a>
        </li>
        <li>
          <a href="#!">Link 4</a>
        </li>
      </ul>

    </div>
  
    <div class="col-md-3 mb-md-0 mb-3">

     
      <h5 class="text-uppercase">Links</h5>

      <ul class="list-unstyled">
        <li>
          <a href="#!">Link 1</a>
        </li>
        <li>
          <a href="#!">Link 2</a>
        </li>
        <li>
          <a href="#!">Link 3</a>
        </li>
        <li>
          <a href="#!">Link 4</a>
        </li>
      </ul>

    </div>
    

  </div>
  
</div>





</footer>
</div> 
      </>

  );

}