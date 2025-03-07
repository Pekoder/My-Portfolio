import React from "react";
import "./Home.css";
import img from './set.png'
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="h-screen w-full px-14 md:pl-[80px]">
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="flexbx relative pt-50p text-white top-0 right-0 w-full overflow-hidden flex-col h-screen bg-[#00000000] flex md:flex-row justify-between items-center "
      >
        <div className="homePageScreen">
          <h1 className="text-lg text-cyan-500">Hi, I am</h1>
          <h1 className="text-3xl text-cyan-300">Ibikunle Peace</h1>
          <h1 className="job text-4xl leading-[1.2] md:text-[40px] font-black text-white leading-[1.1]">
            Graphics
            <br /> Designer & Frontend <br /> Developer
          </h1>
          <h1 className="bio text-sm leading-[1] md:text-[19px] font-light text-cyan-500 leading-[1.1]">
            Results-driven Graphic Designer and Frontend Developer, crafting
            visually stunning and intuitive web applications. With expertise in
            HTML5, CSS3, JavaScript, React, and Tailwind CSS, I bring ideas to
            life through eye-catching designs and seamless user experiences.
          </h1>
            <button>Hire me</button>
        </div>
        <div className="profilePic">
          
                <img class="circle" 
                src={img}/>
                <div className="cover"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
