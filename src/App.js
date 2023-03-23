import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Getout from './pages/GetOut';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    < Router >
      <div className="App">
        <Sidebar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/getout" element={<Getout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
