import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { FaHome, FaUser, FaCode, FaGraduationCap, FaEnvelope, FaTimes, FaProjectDiagram } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const slideIn = {
  hidden: { opacity: 0, x: -300 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const menuItem = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const Navbar = () => {
  const array = ["Home", "About", "Skills", "Projects", "Education", "Contact"];


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
    <div className="flex justify-between items-center py-5 px-4 md:px-15 w-full sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <h1
        className="text-sky-500 text-2xl md:text-3xl lg:text-4xl font-['Great_Vibes']"
      >
        Shivang Jaiswal
      </h1>
      {showmenu && (
        <motion.div
          onClick={() => {
            setclick(!click);
            setshowmenu(!showmenu);
          }}
          className="text-sky-500 hover:text-sky-600 transition-colors duration-300 ease-in-out cursor-pointer h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:bg-sky-500/10 hover:scale-110 active:scale-95"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <HiMenuAlt3 className="h-6 w-6 md:h-7 md:w-7" />
        </motion.div>
      )}
      {click && (
        <>
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
            variants={slideIn}
            className="fixed top-0 left-0 h-screen w-[70%] md:w-[50%] lg:w-[35%] bg-white text-sky-500 flex items-center justify-center flex-col z-50 shadow-2xl overflow-y-auto"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(14, 165, 233, 0.02) 100%)'
            }}
          >
          <motion.div
            onClick={() => {
              setclick(!click);
              setshowmenu(!showmenu);
            }}
            className="absolute top-6 right-6 h-10 w-10 md:h-12 md:w-12 bg-sky-500/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-500/20 hover:scale-110 active:scale-95 transition-all duration-300"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaTimes className="text-sky-500 text-xl md:text-2xl" />
          </motion.div>
          <div className="w-full px-6 md:px-10 py-6">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sky-500 mb-2">Menu</h2>
              <div className="h-1 w-20 bg-sky-500/30 mx-auto rounded-full"></div>
            </motion.div>

            <ul className="flex flex-col gap-4 w-full">
            {array.map((value, index) => (
              <motion.li
                initial="hidden"
                animate="show"
                variants={menuItem}
                transition={{ delay: index * 0.1 }}
                className="text-sky-500 font-semibold text-lg px-4 py-3 rounded-lg cursor-pointer hover:bg-sky-500 hover:text-white transition-all duration-300 ease-out w-full text-center"
                key={index}
              >
                <Link
                  onClick={() => {
                    setclick(false);
                    setshowmenu(true);
                  }}
                  to={value}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="w-full h-full flex items-center justify-center"
                >
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
