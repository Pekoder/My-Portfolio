import React from 'react'
import './AboutPage.css'
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 500], [100,-20]);  
  
   
  return (
  <>
<div id='about'>
<div className="gradients-overlay"></div>
<motion.div 
        // initial={{ y: "50%", opacity: 0 }}
        // animate={{ y: "0%", opacity: 1 }}
        // exit={{ y: "100%" }}
        // transition={{ type: "ease", duration: 0.7 }}
        style={{y}}
  
        className='aboutPage'
      >


<h1>About Us</h1>
<p className="aboutUs">
Welcome to Pekan Visuals, a creative studio where art meets code. We specialize in crafting stunning visual experiences through expert frontend development and graphics designing.

Our passion is to bring your brand's story to life through:

- Visually stunning graphics that capture attention and convey your message
- User-friendly and responsive frontend development that ensures seamless interactions

At Pekan Visuals, we believe in the power of creativity, collaboration, and attention to detail. We take pride in our ability to listen, understand, and translate our clients' visions into memorable and effective visual experiences.

Get in touch with us today to discover how we can help elevate your brand's visual identity and take your business to the next level.
</p>
 
      </motion.div>
</div>
  </>
  )
}

export default AboutPage
