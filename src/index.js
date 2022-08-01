import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import App from './App';
import MovieList from './movieList';
import Registrationform from './registrationform';
import MoviePage from './moviePage';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}></Route>
  <Route path="/registrationform" element={<Registrationform />}></Route>
  <Route path="/movieList" element={<MovieList />}></Route>  
  <Route path="/moviePage" element={<MoviePage />}></Route>  
  </Routes>   
  </BrowserRouter>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
