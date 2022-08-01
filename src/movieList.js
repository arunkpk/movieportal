import React, { Component } from 'react'
import {getMoviedata}  from'./moviesdata.js'
import { Link } from 'react-router-dom'

export class movieList extends Component {
  render() {
    let invoices=getMoviedata();
    console.log(invoices);
    return (
      <div>
        <h3>asdasd</h3>
       
          {
            Object.entries(invoices).map(([key, val]) => 
            <h2 key={key}>{key}: {val}</h2>       )
          }
       
        <h1>Movie List Page</h1>
        <li><Link to="/moviePage">moviePage</Link> </li>       
      </div>
    )
  }
}

export default movieList
