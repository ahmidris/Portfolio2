import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

 const [textIndex, setTextIndex] = useState(0);
const roles = [
  { title: "Frontend Developer", color: "from-blue-500 to-cyan-500" },
  { title: "React Specialist", color: "from-purple-500 to-pink-500" },
  { title: "UI/UX Enthusiast", color: "from-green-500 to-teal-500" },
  { title: "Video Editor", color: "from-yellow-500 to-orange-500" }
  
];

useEffect(() => {
  const interval = setInterval(() => {
    setTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);


  return (
    <section 
      ref={ref}
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans text-base"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sans tracking-tight"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-gray-800 dark:text-white font-light tracking-wide text-2xl md:text-3xl">Hi, I'm</span>
              <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 font-extrabold tracking-tighter text-5xl md:text-6xl lg:text-7xl">
                Ahmad Edris
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6 min-h-[60px]"
            >
              <div className="flex items-center justify-center lg:justify-start text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium tracking-wide mt-2">
             <span className="mr-2">I'm a </span>
            <motion.span
           key={roles[textIndex].title}
           initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
              className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${roles[textIndex].color}`}
                 >
                   {roles[textIndex].title}
             </motion.span>
               </div>


              <p className="text-[18px] text-gray-600 dark:text-gray-300 mt-8 mb-8 max-w-lg mx-auto lg:mx-0 font-poppins leading-relaxed tracking-wide">
  I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. 
  Let's create something amazing together!
</p>

            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center tracking-wider"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 py-3.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-semibold rounded-full shadow hover:shadow-lg transition-all duration-300 inline-block text-center tracking-wider"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
            
            {/* Social badges */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6 mt-10"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
      
            </motion.div>
          </motion.div>

          {/* Profile Image/Visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="images/ahmad.png"
                  alt="Ahmad Edris" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/10 to-blue-500/10"></div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Experience badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center font-bold"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              >
                <span className="font-bold mr-2">3+</span>
                <span>Years</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center group">
          <span className="mb-1 text-sm group-hover:text-primary-600 transition-colors font-medium tracking-wide">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};