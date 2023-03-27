import React from "react";
import { Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import Sidebar from "./Component/sidebar";
=======
import SideBar from "./Component/sidebar";
>>>>>>> Stashed changes
import About from './pages/About';
import Getout from './pages/Getout';
import Home from "./pages/Home";
import Contact from "./pages/Contact";


//import './App.css';

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Sidebar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/getout" element={<Getout />} />
          <Route path="/contact" element={<Contact />} />
=======
      <SideBar />

      <div className="App">



        <Routes>

          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/getOut" element={<GetOut />} />
>>>>>>> Stashed changes
        </Routes>
      </div>
    </>
  );
}

export default App;
