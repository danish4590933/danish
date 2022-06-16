import React, { Component } from 'react';
import Navbar from './Navbar';
class Layoutfornavbar extends Component {
    state = {  } 
    render() { 
        return (
<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-3' style={{height:"80px", backgroundColor:"black"}}>
            <img src='logoo.png' />
        </div>
        <div className='col-md-9' style={{height:"80px", backgroundColor:"black"}}>
            <Navbar/>
        </div>
    </div>
</div>
        );
    }
}
 
export default Layoutfornavbar;
