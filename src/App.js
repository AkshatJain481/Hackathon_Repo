import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  navigate,
} from "react-router-dom";
import Contact from './Contact.js';

import MapPage from "./Page/MapPage";
import Navbar from "./navbar";

import Home from "./Home";

import About from './About_us';

const App = () => {
   
     

  return (
    
    <Router>
      <Routes>
       {/* <Route path="/" element = {<Navbar />}></Route>  */}
       <Route path="/" element={<Home />} />
        {/* <Route path="explore" element={<Sidebar />}></Route> */}
        <Route path="Map/:id" element={<MapPage />}></Route>
        <Route path='about' element= {<About/>} ></Route>
        <Route path="contact" element= {<Contact/>}></Route>
      </Routes>
    </Router>
  
  );
};

export default App;
