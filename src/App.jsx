import React, { useEffect, useState } from "react";
import "./App.css";
import pattern from "./bgpat.svg";
import vid from "./three.mp4";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";

function App() {
  const set = () => {
    const ogval = localStorage.getItem("scroll");
    setValue(ogval);
  };
  const [value, setValue] = useState(false);
  console.log(value);
  useEffect(()=>{
    setValue(value)
  },[value])
  window.addEventListener("scroll", set);
  return (
    <>
      <div>
        <img 
        src={pattern} className="patt" alt="" />
        <div className="gradient-overlay"></div>
        <video autoPlay loop muted className="bg-vid">
          <source src={vid} type="video/mp4" />
        </video>
        <Nav />
        <Home/>
        <AboutPage />
      </div>
    </>
  );
}

export default App;
