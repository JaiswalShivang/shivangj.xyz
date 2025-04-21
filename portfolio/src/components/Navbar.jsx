import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { FaHome, FaUser, FaCode, FaGraduationCap, FaEnvelope, FaTimes, FaProjectDiagram } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const animation1 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 1, transition: { duration: 1 } },
};

const animation2 = {
  hidden: { opacity: 0, x: -350 },
  show: { opacity: 1, x: 1, transition: { duration: 1, ease: "easeIn" } },
};

const Navbar = () => {
  const array = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  // Icons for each menu item
  const menuIcons = {
    "Home": <FaHome className="mr-3" />,
    "About": <FaUser className="mr-3" />,
    "Skills": <FaCode className="mr-3" />,
    "Projects": <FaProjectDiagram className="mr-3" />,
    "Education": <FaGraduationCap className="mr-3" />,
    "Contact": <FaEnvelope className="mr-3" />
  };
  const [click, setclick] = useState(false);
  const [showmenu, setshowmenu] = useState(true);

  return (
    <div className="flex justify-between items-center py-5 px-4 md:px-15 w-full sticky top-0 z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <h1
        className="text-white text-2xl md:text-3xl lg:text-4xl font-['Great_Vibes']"
      >
        Shivang Jaiswal
      </h1>
      {showmenu && (
        <motion.div
          onClick={() => {
            setclick(!click);
            setshowmenu(!showmenu);
          }}
          className="text-white hover:text-[#f66539] transition-colors duration-300 ease-in-out cursor-pointer h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:bg-white/10 hover:scale-110 active:scale-95"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <HiMenuAlt3 className="h-6 w-6 md:h-7 md:w-7" />
        </motion.div>
      )}
      {click && (
        <>
          {/* Backdrop blur overlay with higher opacity */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setclick(false);
              setshowmenu(true);
            }}
          />

          <motion.div
            initial="hidden"
            animate="show"
            variants={animation1}
            className="fixed top-0 left-0 h-screen w-[60%] md:w-[40%] lg:w-[30%] bg-white text-black flex items-center justify-center flex-col rounded-tr-4xl rounded-br-4xl z-50 shadow-2xl overflow-y-auto"
            style={{
              backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(246, 101, 57, 0.08) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(246, 101, 57, 0.08) 0%, transparent 50%)'
            }}
          >
          <motion.div
            onClick={() => {
              setclick(!click);
              setshowmenu(!showmenu);
            }}
            className="absolute top-6 right-6 h-10 w-10 md:h-12 md:w-12 bg-[#f66539]/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f66539]/20 hover:scale-110 active:scale-95 transition-all duration-300"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaTimes className="text-[#f66539] text-xl md:text-2xl" />
          </motion.div>
          <div className="w-full px-6 md:px-10 py-6">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#f66539] mb-2">Menu</h2>
              <div className="h-1 w-20 bg-[#f66539]/30 mx-auto rounded-full"></div>
            </motion.div>

            <ul className="flex flex-col gap-5 md:gap-8 w-full">
            {array.map((value, index) => (
              <motion.li
                initial="hidden"
                animate="show"
                variants={animation2}
                className="border-2 border-[#f66539] text-[#f66539] font-bold text-xl md:text-2xl px-4 md:px-5 py-3 md:py-4 rounded-4xl cursor-pointer hover:bg-[#f66539] hover:text-white transition-all duration-600 ease-in-out hover:shadow-lg hover:shadow-[#f66539]/20 w-full"
                style={{ transitionDelay: `${index * 50}ms` }}
                key={index}
              >
                <Link
                  onClick={() => {
                    setTimeout(() => {
                      setclick(false);
                      setshowmenu(true);
                    }, 100);
                  }}
                  to={value}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="w-full h-full flex items-center justify-center md:justify-start"
                >
                  {menuIcons[value]}
                  <span>{value}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          </div>
        </motion.div>
        </>
      )}
    </div>
  );
};

export default Navbar;
