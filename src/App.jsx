import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import vid from "./three.mp4";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import Services from "./Components/Services"
import { Analytics } from "@vercel/analytics/react"
import Projects from "./Components/Projects";


function App() {


  const set = () => {
    const ogval = localStorage.getItem("scroll");
    setValue(ogval);
  };
  const [value, setValue] = useState(false);
  // console.log(value);
  useEffect(()=>{
    setValue(value)
  },[value])
  window.addEventListener("scroll", set);

  return (
    <>
      <div className="w-full " >
        <video autoPlay loop muted className="bg-vid">
          <source src={vid} type="video/mp4" />
        </video>
        <Nav />
        <Home  />
        <AboutPage  />
        <Services />
        <Projects />
      </div>
    </>
  );
}

export default App;
