
import React,{useState} from 'react'
import Registrationform from './registrationform';

import './App.css';
import Navbar from './navbar';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  const [name1,setName]=useState("Movie Portal");
  return (
    <div className='container'>
      <h1> Welcome to  {name1} </h1>
      
    
      <Navbar/>       
        
    
    </div>
  )
}

export default App



/*

import React, { Component } from 'react'

export class App extends Component {
  state={
    name:"Movie Portal",
  }

  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}</h2>
      </div>
    )
  }
}


export default App

*/

