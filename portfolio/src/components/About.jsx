import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";
import image2 from '../assets/images/image2.png'
const animation1 = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 1, transition: { duration: 1 } },
};

const animation2 = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 1, transition: { duration: 1 } },
};

const About = () => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  return (
    <div className="py-8 md:py-15 px-4 md:px-5 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="w-[90%] mx-auto h-2 rounded-4xl bg-gradient-to-r from-[#f66539]/70 via-[#f66539] to-[#f66539]/70 shadow-sm glow-effect"></div>
      </div>
      <div className="px-4 md:px-10 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInview ? "show" : "hidden"}
          variants={animation1}
          className="w-full md:w-1/2"
        >
          <h1 name="About" className="text-4xl md:text-5xl font-bold text-[#f66539] drop-shadow-md">Who I am</h1>
          <h1 className="text-xl md:text-2xl my-6 md:my-10 text-gray-300 font-medium">My name is Shivang</h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-140 leading-relaxed">
            I'm a Computer Science and Engineering (CSE) student at National Institute of Technology (NIT) Patna.
            I'm passionate about learning new skills and applying them to real-world projects.
            As a freelancer, I've had the opportunity to work on various projects that have helped me develop
            my technical skills and problem-solving abilities.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInview ? "show" : "hidden"}
          variants={animation2}
          className="w-full md:w-1/2"
        >
          <img
            src={image2}
            alt="about"
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;