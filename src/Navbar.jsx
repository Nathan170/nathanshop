import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
        <>
           <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        
        <NavLink className="nav-link active" to="/">Home</NavLink>
      </li>
     <li className="nav-item">
        <NavLink className="nav-link" to="/shop">Shop</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/story">Our Story</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/sale">Sale</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}
export default Navbar;