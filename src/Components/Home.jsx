import React from "react";
import "./Home.css";
import pattern from "../bgpat.svg";
import img from './set.png'
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen w-full px-10 md:pl-[80px]" id="home">
       <div className="gradient-overlay"></div>
       <img 
        src={pattern} className="patt" alt="" />
      <motion.div 
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.7 }}
        className="flexbx relative pt-50p text-white top-0 right-0 w-full overflow-hidden flex-col h-screen bg-[#00000000] flex md:flex-row justify-between items-center "
      >
        <div className="homePageScreen">
          <h1 className="text-lg text-cyan-500 iAm">Hi, I am</h1>
          <h1 className="text-3xl text-cyan-300">Ibikunle Peace</h1>
          <h1 className="job text-4xl leading-[1.2] md:text-[40px] font-black text-white l">
            Graphics
            <br /> Designer & Frontend <br /> Developer
          </h1>
          <h1 className="bio text-sm md:text-[19px] font-light text-cyan-500 leading-[1.1]">
            Results-driven Graphic Designer and Frontend Developer, crafting
            visually stunning and intuitive web applications. With expertise in
            HTML5, CSS3, JavaScript, React, and Tailwind CSS, I bring ideas to
            life through eye-catching designs and seamless user experiences.
          </h1>
          {/* <div className="button"> */}

            <button className="button">
            <a 
  href="https://wa.me/2349158611048?text=Hello,%20I%20am%20%20--------------%20interested%20in%20your%20services!" 
  target="_blank" 
  rel="noopener noreferrer"
  
>
Hire me
</a>

            </button>
          {/* </div> */}
        </div>
        <div className="profilePic">
          
                <img class="circle" 
                src={img}
                loading="lazy"/>
                <div className="cover"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
