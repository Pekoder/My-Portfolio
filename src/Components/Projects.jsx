import React from "react";
import SMD1 from './Designs/March First Sunday Flyer.png'
import { useState, useEffect } from 'react';
import "./Projects.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, title: "Profile Card Design", category: "Web Design", image: 'https://res.cloudinary.com/dakcu0sng/image/upload/v1741914090/prr9vg0f9pj0yvoi7mpr.png', description: "A sleek profile card design. " },
  { id: 7, title: "Ticket Generator", category: "Web Design", image: "https://res.cloudinary.com/dakcu0sng/image/upload/v1741914498/mwcxeqv0wsornxq0myrw.png", description: "A personal portfolio website showcasing creative works." },
  { id: 7, title: "Portfolio Website", category: "Web Design", image: "https://res.cloudinary.com/dakcu0sng/image/upload/v1741915080/oe5w7wda3bjmx1beug5s.png", description: "A personal portfolio website showcasing creative works." },
  { id: 2, title: "Social Media Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741911063/utsw0klbcifjiaybthog.png', description: "A water effect social media design." },
  { id: 3, title: "Social Media Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741911083/cwycxsrvowlg8reotmat.jpg', description: "A water effect social media design." },
  { id: 4, title: "New Month Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741911141/l2gu68ygdxb2tkp1evkl.jpg', description: "A water effect social media design." },
  { id: 4, title: "New Month Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741911130/ydyrkh5qwwcjs21g6x4y.jpg', description: "A water effect social media design." },
  { id: 5, title: "Food Flyer Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741911112/ioowrqbhxwgwaklqcfio.jpg', description: "A water effect social media design." },
  { id: 5, title: "Farm Design", category: "Graphic Design", image:'https://res.cloudinary.com/dakcu0sng/image/upload/v1741913402/gvytfnbksp1a4afvbozj.png', description: "A water effect social media design." },
  // { id: 8, title: "Mobile Banking App", category: "Logo Design", image: "banking.jpg", description: "A secure and user-friendly mobile banking application." },
];


function Projects() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1300, 1450], [100, -20]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return(
<div id="projects">
<motion.div
style={{y}}
className="projects"
>
<div className="gradientzz-overlay"></div>
<h1>Our Projects</h1>

<p className="descrip text-left text-white mb-6 mt-2">
        Look at some of our works categorized by different domains.
      </p>

      <div className="flex justify-start mb-6">
        {["All", "Web Design", "Graphic Design", "Logo Design"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`categoryButton px-4 py-2 transition duration-300 ${
              selectedCategory === category
                ? "bg-[#4AB7F2] text-black"
                : "bg-[#052c42] hover:bg-[#125982]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="projectBox grid md:grid-cols-6 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              layout 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#052c42] p-4 w-full rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{project.title}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="rounded-lg mb-4" />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-2 bg-red-500 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
</motion.div>
</div> 
  ) 
}

export default Projects;
