import React from "react";
import {  Routes, Route } from 'react-router-dom' ;
import Sidebar from "./Component/sidebar";
import About from './pages/About';
import Getout from './pages/Getout';
import Homehacks from "./pages/Homehacks";
import Contact from "./pages/Contact";

//import './App.css';


function App() {
  return (
    <>
  <Sidebar />

    <div className="App">

     {/* We are the three Stooges - this is a test */}
    
    
    <Routes>
  
      <Route path="/"  element={<About />} />
      <Route path="/about"  element={<About />} />
      <Route path="/getout" element={<Getout />} />
      <Route path="/homehacks" element={<Homehacks />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>  
    </div>
    </>
  );
}

export default App;
