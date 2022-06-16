import React, { Component } from 'react';
import Navbar from './Navbar';
class Oxygendetail extends Component {
    state = {  } 
    render() { 
        return (

<div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"#e0d8c3"}}>
                    <h3 style={{marginLeft:"380px", marginTop:"30px"}}>Home Delivery Within Two Hours in Lahore</h3>
                </div>
            </div>



            <div className='row'>
               
                <div className='col-md-6' style={{height:"500px", backgroundColor:"#e0d8c3"}}>
                
                    <p style={{marginTop:"100px",marginLeft:"10px"}}>Oxygen cylinders are a common type of oxygen delivery found in hospitals 
                        and homes all over the world. They are available in a variety of sizes
                         to meet the needs of the patient. Oxygen Cylinder is available for purchase 
                         and rental. Oxygen cylinders are required in situations where the patient need oxygen. 
                         When medical procedures or a lack of oxygen in the body necessitate the use of oxygen, 
                         it is necessary to deliver it. Portable oxygen cylinders are composed of brushed steel or aluminum.
                          They are transported with the utmost care. For individuals who require them, they are
                           commonly utilised in hospitals, outpatient clinics, and private homes. Oxygen flow is 
                           controlled by regulators, which come in two varieties: continuous flow and pulse dose flow.</p>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"#e0d8c3"}}>
                    <img src='oxygdet.jpg' style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"50px"}}/>
                </div>
            </div>
            </div>        
            
           
        );
    }
}
 
export default Oxygendetail ;