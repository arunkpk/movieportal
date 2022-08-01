import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class navbar1 extends Component {
  

  render() {
    return (
      <div>
        <nav>
          <ul>          
          <li><Link to="/">Home</Link> </li> 
          <li><Link to="/registrationform">Registration Form  </Link> </li> 
          <li><Link to="/movieList">Movie List</Link> </li> 
         
          </ul>      
          </nav>       
      </div>
    )
  }
}

export default navbar1
