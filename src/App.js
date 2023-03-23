import React from "react";
import {  Routes, Route } from 'react-router-dom' ;
import SideBar from "./Component/sidebar";
import About from './pages/About';
import GetOut from './pages/GetOut';

//import './App.css';


function App() {
  return (
    <>
  <SideBar />

    <div className="App">

     {/* We are the three Stooges - this is a test */}
    
    
    <Routes>
  
      <Route path="/"  element={<About />} />
      <Route path="/about"  element={<About />} />
      <Route path="/getOut" element={<GetOut />} />
    </Routes>  
    </div>
    </>
  );
}

export default App;
