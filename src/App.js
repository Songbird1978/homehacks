import React from "react";
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom' ;
import SideBar from "./Component/sidebar";
// import About from './Component/About';
// import GetOut from './Component/GetOut';

//import './App.css';


function App() {
  return (
    <div>

    <SideBar />
    <div className="App">

     We are the three Stooges - this is a test
    </div>
    {/* <Routes>
      <Route path="/" element={<About />} />
      <Route path="/GetOut" element={<GetOut />} />
    </Routes>  */}


    </div>
  );
}

export default App;
