import React, { Component } from 'react';
import { getinfo } from './Array1';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Cardss.css';

class Cardss extends Component {
    state = { 
        data: getinfo(),
      } 
    render() { 
        return (



            <div className='col-md-6' id='card'>
                {
                    this.state.data.map(item=>(
                    <Card style={{ width: '60rem', marginLeft:"20px" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.Name}</Card.Title>
                      <Card.Text>
                        {item.Price}
                      </Card.Text>
                      <Card.Text>
                        {item.Review}
                        </Card.Text>
                      <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                  </Card>

                        ))
                }
</div>
        );
    }
}
 
export default Cardss;