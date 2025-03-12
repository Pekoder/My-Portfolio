import React from "react";
import { useEffect } from 'react';
import "./Projects.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [1300, 1450], [100, -20]);

  return(
<div id="projects">
<motion.div
style={{y}}
>

</motion.div>
</div> 
  ) 
}

export default Projects;
