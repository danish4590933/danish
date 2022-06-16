import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
class Carousell extends Component {
    state = {  } 
    render() { 
        return (
          <>
          <Carousel fade>
  <Carousel.Item>
    <img style={{width:"100%", height:"550px", marginLeft:"1px"}}
      className="d-block w-100"
      src="care1.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img style={{width:"100%", height:"550px", marginLeft:"1px"}}
      className="d-block w-100"
      src="care2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img style={{width:"100%", height:"550px", marginLeft:"1px"}}
      className="d-block w-100"
      src="doc3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>


</Carousel>
          </>  
        );
    }
}
 
export default Carousell;