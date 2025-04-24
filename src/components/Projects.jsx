import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimationControls, AnimatePresence } from "framer-motion";
import { FaPlay, FaCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import soulmateImage from "../assets/projects/soulmatewebsite.png";

const Projects = () => {
  const comingSoonControls = useAnimationControls();

  useEffect(() => {
    comingSoonControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [comingSoonControls]);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24 overflow-hidden bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-[#f66539]/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-[#f66539]/3 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            name="Projects"
            className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f66539] to-[#ff8c66] drop-shadow-md mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f66539] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ProjectCard
              title="Soulmate"
              image={soulmateImage}
              description="A dating app that connects people based on their interests and preferences."
              demoLink="https://soulmate1-ochre.vercel.app/"
              codeLink="https://github.com/JaiswalShivang/Soulmate.git"
            />

          <motion.div
            className="bg-gradient-to-br from-[#f66539]/20 to-[#f66539]/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-8 h-[400px] backdrop-blur-sm border border-[#f66539]/10 relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(246, 101, 57, 0.6)",
              translateY: -8
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f66539]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f66539]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#f66539]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f66539] to-[#ff8c66] mb-6 text-center drop-shadow-sm"
                initial={{ y: -20, opacity: 0 }}
                animate={comingSoonControls}
                transition={{ duration: 0.5 }}
              >
                More Coming Soon
              </motion.h3>

              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-transparent via-[#f66539] to-transparent mb-8"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <motion.p
                className="text-gray-400 text-center mb-8 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Exciting projects are in development.
                <br />Stay tuned for updates!
              </motion.p>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="text-[#f66539] text-3xl">⚡</span>
                <span className="text-[#f66539] font-medium text-lg md:text-xl">Coming Soon</span>
              </motion.div>
            </div>
          </motion.div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, image, description, demoLink, codeLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  // Tech stack with icons
  const techStack = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#4DB33D]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ?
        { opacity: 1, y: 0, transition: { duration: 0.5 } } :
        { opacity: 0, y: 50 }
      }
      className="bg-gradient-to-br from-[#ff7f50] to-[#ff6b3d] rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-[400px] flex flex-col relative group"
      whileHover={{
        boxShadow: "0 0 30px rgba(246, 101, 57, 0.6)",
        translateY: -8
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform -translate-x-4 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/10 rounded-tr-full transform translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>

      <div className="p-5 flex flex-col h-full relative z-10">
        <motion.div
          className="absolute -top-2 -left-2 w-12 h-12 rounded-br-xl bg-gradient-to-br from-[#ff6b3d] to-[#ff8c66] shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 45 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        />

        <motion.h3
          className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md relative z-10"
          initial={{ y: -10, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {title}
        </motion.h3>

        <div className="rounded-lg overflow-hidden mb-3 shadow-md transition-all duration-300 flex-shrink-0 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end"
          >
            <AnimatePresence>
              {isHovered && (
                <motion.p
                  className="text-white p-3 text-sm md:text-base"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.img
            src={image}
            alt={title}
            className="w-full h-auto object-cover max-h-[180px] transform group-hover:scale-105 transition-transform duration-700"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* Tech stack animations */}
        <div className="flex flex-wrap gap-2 mb-auto justify-center">
          <AnimatePresence>
            {isHovered && techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-white text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-between mt-3 relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#ff6b3d] rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay className="text-sm" />
          </motion.a>

          <motion.a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#ff6b3d] rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
