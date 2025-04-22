import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

// Import images to ensure they're properly handled by Vite
import javascriptImg from '../assets/images/javascript.png';
import nodejsImg from '../assets/images/nodejs.png';
import mongodbImg from '../assets/images/mongodb.png';
import djangoImg from '../assets/images/django.png';
import fastapiImg from '../assets/images/fastapi.png';
import reactImg from '../assets/images/react.png';

const Skills = () => {

  const skills = [
    { name: 'Javascript', img: javascriptImg },
    { name: 'NodeJS', img: nodejsImg },
    { name: 'MongoDB', img: mongodbImg },
    { name: 'Django', img: djangoImg },
    { name: 'FastAPI', img: fastapiImg },
    { name: 'React', img: reactImg },
  ];

  // Create a duplicate set of skills for the marquee effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  const controls = useAnimationControls();

  // Start the animation when component mounts
  useEffect(() => {
    controls.start({
      x: ["-10%", "-60%"],
      transition: {
        x: {
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    });
  }, [controls]);

  // Handle hover state
  const handleMouseEnter = () => {
    // Just stop the animation where it is
    controls.stop();
  };

  const handleMouseLeave = () => {
    // Resume the animation from current position
    controls.start({
      x: "-60%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  };

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      <motion.h1
        name="Skills"
        className="text-center text-4xl md:text-5xl font-bold text-[#f66539] mb-16 drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

      <div className="max-w-7xl mx-auto overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#f66539]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#f66539]/5 rounded-full blur-3xl -z-10"></div>
        <div className="relative overflow-hidden h-[220px]">
          <motion.div
            className="absolute flex gap-16 items-center"
            initial={{ x: "-10%" }}
            animate={controls}
            style={{ width: `${marqueeSkills.length * 230}px` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {marqueeSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[170px] h-[170px] bg-white/90 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: "0 0 15px rgba(246, 101, 57, 0.5), 0 0 15px rgba(246, 101, 57, 0.3), 0 0 15px rgba(246, 101, 57, 0.3), 0 0 15px rgba(246, 101, 57, 0.3)"
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(246, 101, 57, 0.8), 0 0 25px rgba(246, 101, 57, 0.8), 0 0 25px rgba(246, 101, 57, 0.8), 0 0 25px rgba(246, 101, 57, 0.8)"
                }}
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="h-20 w-20 object-contain mb-4"
                />
                <p className="text-gray-900 text-2xl font-bold text-center">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
