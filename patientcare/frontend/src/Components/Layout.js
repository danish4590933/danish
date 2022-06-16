import { Carousel } from 'bootstrap';
import React, { Component } from 'react';
import Carousell from './Carousell';
import Cardss from './Cardss';
import Oxygendetail from './Oxygendetail';
import Newcomponent from './Newcomponent';



class Layout extends Component {
  state = { 
   } 
  render() { 
    return (
        <div className='container-fluid'>
        
            
            <div className='row'>
                <div className='col-md-12' style={{backgroundColor:"#fffcfc", height:"550px"}}>
                  <Carousell/>
                </div>
            </div>

        
            <div className='row'>
                <div className='col-md-12' style={{backgroundColor:"#fffcfc", height:"100px"}}>
                  <h1 style={{marginLeft:"530px", marginTop:"20px"}}>Our Products</h1>
                </div>
            </div>
    
    
         


            <div className='row'>
                <div className='col-md-12' style={{backgroundColor:"#fffcfc", height:"550px"}}>
                  <Cardss/>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12' style={{backgroundColor:"#fffcfc", height:"550px"}}>
                  <Oxygendetail/>
                </div>
            </div>
           
                    
            <div className='row'>
                <div className='col-md-12' style={{backgroundColor:"#fffcfc", height:"550px"}}>
                  <Newcomponent/>
                </div>
            </div>

              

        </div>
    );
}
}

 
export default Layout;