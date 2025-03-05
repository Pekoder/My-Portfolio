import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <div className='h-screen w-full px-14 md:pl-[80px]'>
        <motion.div 
               initial={{ y: "50%",opacity:0 }} 
               animate={{ y: "0%",opacity:1 }} 
               exit={{ y: "100%" }} 
               transition={{ type: "tween", duration: 0.3 }}
               className="relative pt-50p text-white top-0 right-0 w-full overflow-hidden h-screen bg-[#00000000] flex justify-between items-center "
             >
            <div>
                <h1 className="text-lg text-cyan-500">Hi, I am</h1>
                <h1 className="text-2xl text-cyan-300">Ibikunle Peace</h1>
                <h1 className="text-4xl md:text-[40px] font-black text-white leading-[1.1]">Graphics<br /> Designer & Frontend <br /> Developer</h1>
                
                
            </div>
            <div className=''>
                <h1 className="">Hey</h1>
            </div>
             </motion.div>
    </div>
  )
}

export default Home
