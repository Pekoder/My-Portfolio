import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`fixed w-screen ${scrolled ? 'bg-[#4AB7F2EE] shadow-md' : 'bg-transparent'} p-4 z-50`}>
        <div className="container mx-auto flex justify-between items-center md:justify-between">
          <h1 className={`text-l font-semibold ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>PEKAN VISUALS</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-5">
            <li><a href="#home" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>Home</a></li>
            <li><a onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>About Us</a></li>
            <li><a href="#services" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>Services</a></li>
            <li><a href="#projects" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>Projects</a></li>
            <li><a href="#testimonial" onClick={() => document.getElementById("testimonial").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>Testimonial</a></li>
            <li><a href="#contact" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className={`hover:text-blue-200 ${scrolled ? 'text-[#022538]' : 'text-[#4AB7F2]'}`}>Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu size={25} className="text-blue-300 hover:text-blue-100" />
          </button>
        </div>

        {/* Sidebar */}
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 0.95 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-[#00acc1] shadow-lg p-6 md:hidden"
          >
            <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <X size={25} className="text-blue-300 hover:text-blue-100" />
            </button>
            <ul className="mt-12 flex flex-col gap-6">
              <li><a href="#home" className="text-blue-900 hover:text-blue-200" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</a></li>
              <li><a href="#aboutMe" className="text-blue-900 hover:text-blue-200" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About Us</a></li>
              <li><a href="#services" className="text-blue-900 hover:text-blue-200" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</a></li>
              <li><a href="#projects" className="text-blue-900 hover:text-blue-200" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</a></li>
              <li><a href="#testimonial" className="text-blue-900 hover:text-blue-200">Testimonial</a></li>
              <li><a href="#contact" className="text-blue-900 hover:text-blue-200">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </nav>
    </div>
  );
}

export default Nav;