import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(

        <>


        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto"> 
            
        <nav className="navbar navbar-expand-lg navbar-light">
 
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mb-2 mb-lg-0" >
      <li className="nav-item active">
        <NavLink  activeClassName='menu_active'
    
        className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/services">Solution</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/about">Knowledge Base</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/about">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  activeClassName='menu_active'className="nav-link" to="/about">Shop</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
     
     
    </ul>
   
  </div>
</nav>
</div>
            </div>
</div>
       
        </>
    )
}
export default Navbar;