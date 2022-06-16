import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import './Navbar.css';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            
        <nav class="nav Fontt" id='arrange_navbar'>
           <a class="nav-link" href="#" style={{paddingTop:"25px", color: "white", marginLeft:"200px"}}><Link to="home">Home</Link></a>
            <a class="nav-link" href="#" style={{paddingTop:"25px", color: "white"}}><Link to="products">Products</Link></a>
   
            <a class="nav-link" href="#" style={{paddingTop:"25px", color: "white"}}><Link to="bed">Bed</Link></a>
            <a class="nav-link" href="#" style={{paddingTop:"25px", color: "white"}}><Link to="login">Sign up</Link></a>  
            <a class="nav-link" href="#" style={{paddingTop:"25px", color: "white"}}><Link to="viewinfo">Sign up info</Link></a>  
        </nav>

        );
    }
}
 
export default Navbar;