import React, { useEffect } from "react";
import './App.css'
import pattern from './bgpat.svg'
import vid from './three.mp4'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";


function App() {
  return(
<> 
  <div>
    <img src={pattern} className="patt" alt="" />
    <div className="gradient-overlay"></div>
    <video autoPlay loop muted className="bg-vid">
        <source src={vid} type="video/mp4" />
      </video>
    <Nav/>
    <Home/>
    {/* <AboutPage/> */}
    </div>
</>
  )

}

export default App;
