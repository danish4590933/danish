import React, { Component } from 'react';
import Footer from './Footer';
class Layoutforfooter extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12' style={{backgroundColor:"black", height:"300px"}}>
                        
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Layoutforfooter;