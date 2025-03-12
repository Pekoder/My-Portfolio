import React from "react";
import "./Services.css";
import { FaPenNib } from "react-icons/fa";
import { SiTaichigraphics } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

function Services() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [500, 900], [200, -15]);
  return (
    <div id="services">
      <div className="gradientz-overlay"></div>
      <motion.div style={{ y }} className="services">
        <h1 className="s">Services</h1>

        <div className="service">
          <div className="serviceContainer">
            <div className="icon">
              <FaCode />
            </div>
            <div className="serviceName">
              <h1>Frontend Development</h1>
            </div>
            <div className="serviceDescription">
              <p>
                Build responsive and user-friendly websites using modern
                frontend technologies.
              </p>
            </div>
            <div className="skills">
              Key skills: HTML, CSS, Javascript, React JS.
            </div>
          </div>

          <div className="serviceContainer">
            <div className="icon">
              <SiTaichigraphics />
            </div>
            <div className="serviceName">
              <h1>Graphic Design</h1>
            </div>
            <div className="serviceDescription">
              <p>
                Create visually stunning graphics for various mediums, from
                social media to print materials.
              </p>
            </div>
            <div className="skills">Key skills: Adobe Photoshop, Pixellab.</div>
          </div>

          <div className="serviceContainer">
            <div className="icon">
              <FaPenNib />
            </div>
            <div className="serviceName">
              <h1>Logo Design</h1>
            </div>
            <div className="serviceDescription">
              <p>
                Craft unique and memorable logos that represent your brand's
                identity.
              </p>
            </div>
            <div className="skills">
              Key skills: Adobe Illustrator, Branding, Vector Graphics.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
