import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './Nav.css'
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 100) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
   const nav = !scrolled ? 500 : 300

   const saveData = ()=>{
    localStorage.setItem('scroll',scrolled)
   }
   saveData()

   return (
 <div>
         <nav className={`fixed w-full ${ !scrolled ? ('bg-[#00000000]') : ('bg-[#00acc1af]' || 'shadow-md') }  p-4 z-50`}>
           <div className="container mx-auto flex justify-between items-center md:justfy-between">
             <h1 className= {`text-l font-semibold text-cyan-${nav} ` }>PEKAN VISUALS</h1>
             
             {/* Desktop Menu */}
             <ul className="hidden md:flex gap-5 ">
               <li><a href="#home" 
               onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
               className={ ` text-cyan-${nav} hover:text-cyan-200`}>Home</a></li>
               <li ><a 
                   onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
               className={`text-cyan-${nav} hover:text-cyan-200`} >About Us</a></li>
               <li><a href="#services" className={`text-cyan-${nav} hover:text-cyan-200`} 
               onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
               >Services</a></li>
               <li><a href="#projects" 
               onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
               className={`text-cyan-${nav} hover:text-cyan-200`} >Projects</a></li>
               <li><a href="#testimonial" className={`text-cyan-${nav} hover:text-cyan-200`} 
               onClick={() => document.getElementById("testimonial").scrollIntoView({ behavior: "smooth" })}
               >Testimonial</a></li>
               <li><a href="#contact" 
               onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
               className={`text-cyan-${nav} hover:text-cyan-200`} >Contact</a></li>
             </ul>
     
             {/* Mobile Menu Button */}
             <button className="md:hidden" onClick={() => setIsOpen(true)}>
               <Menu size={25} className="text-cyan-300 hover:text-cyan-100"/>
             </button>
           </div>
     
           {/* Sidebar */}
           {isOpen && (
             <motion.div 
               initial={{ x: "100%",opacity:0 }} 
               animate={{ x: 0,opacity:0.95 }} 
               exit={{ x: "100%" }} 
               transition={{ type: "tween", duration: 0.3 }}
               className="fixed top-0 right-0 w-64 h-full bg-[#00acc1] shadow-lg p-6 md:hidden"
             >
               <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                 <X size={25} className="text-cyan-300 hover:text-cyan-100"/>
               </button>
               <ul className="mt-12 flex flex-col gap-6">
               <li><a href="#home" className="text-cyan-900 hover:text-cyan-200"
               onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
               >Home</a></li>
               <li><a href="#aboutMe" className="text-cyan-900 hover:text-cyan-200"
               onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
               >About Us</a></li>
               <li><a href="#services" className="text-cyan-900 hover:text-cyan-200"
               onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
               >Services</a></li>
               <li><a href="#projects" className="text-cyan-900 hover:text-cyan-200">Projects</a></li>
               <li><a href="#testimonial" className="text-cyan-900 hover:text-cyan-200">Testimonial</a></li>
               <li><a href="#contact" className="text-cyan-900 hover:text-cyan-200">Contact</a></li>
               </ul>
             </motion.div>
           )}
         </nav>

 
 
     </div>

 
  )
}

export default Nav
