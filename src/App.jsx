import React, { useEffect } from "react";
import './App.css'
import pattern from './Background Pattern 1.png'
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
