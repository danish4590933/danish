import React, { Component } from 'react';
class Newcomponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"#e0d8c3"}}>
                    <h3 style={{marginLeft:"450px", marginTop:"30px"}}>Hospital Bed for Home Care</h3>
                </div>
            </div>



            <div className='row'>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"#e0d8c3"}}>
                    <img src='bed.jpeg' style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"50px"}}/>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"#e0d8c3"}}>
                    <p style={{marginTop:"150px"}}>A wide selection of ergonomic hospital beds is designed to give the best possible environment for your patients, regardless of their clinical demands.

The bed is essential to daily patient care, whether it is for a short-term stay or a long-term recuperation. It is intended to provide a secure atmosphere in which patients can relax and recover in a safe and therapeutic manner..</p>
                </div>
            </div>
            </div>        
            

         );
    }
}
 
export default Newcomponent;
