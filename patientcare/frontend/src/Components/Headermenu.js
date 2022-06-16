import React, { Component } from 'react';
import './Headermenu.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
class Headermenu extends Component {
    state = {  } 
    render() { 
        return (
        <>
         <div id='main_searchbar'>
            <div className='col-md-12'id='searchbar_search'>
                    <button
                     className= 'adjust_buttons' id='from'>
                        From  <img style={{width:"20px", height:"30px", marginLeft:"200px"}} src='fromto.png' />
                    </button>
                
                    <button className= 'adjust_buttons' id='to'>
                       To  <img style={{width:"20px", height:"30px", marginLeft:"200px"}} src='fromto.png' />
                    </button>
                
                    <button className= 'adjust_buttons' id='date'>
                    04-13-2022  <img style={{width:"30px", height:"30px", marginLeft:"150px"}} src='date.png' />
                    </button>

                    <button className= 'search_button' id='date'>
                    Search  <img style={{width:"25px", height:"25px", marginLeft:"100px"}} src='search.png' />
                    </button>
                
                         
               
            </div>
    </div>
     </>
        );
    }
}
 
export default Headermenu;
