import React, { useEffect } from "react";
import './App.css'
import pattern from './bgpat.svg'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";


function App() {
  return(

  <div>
    <img src={pattern} className="patt" alt="" />
    <Nav/>
    <Home/>
    <AboutPage/>
    </div>
  )

}

export default App;
