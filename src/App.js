import React from "react";
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./Component/sidebar";
import About from './pages/About';
import Getout from './pages/GetOut';
import Home from "./pages/Home";
import Contact from "./pages/Contact";


// the app function contains all the paths for pages

function App() {
  return (
    <>
      <Sidebar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/getout" element={<Getout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
