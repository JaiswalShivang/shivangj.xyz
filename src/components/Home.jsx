import React from "react";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import profileImage from '../assets/images/image1.png';

const Home = () => {
  return (
    <motion.div
      name="Home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-30 py-8 md:py-15 gap-8 md:gap-0 min-h-[calc(100vh-80px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        className="w-full md:max-w-[40vw] h-auto object-contain drop-shadow-2xl"
        src={profileImage}
        alt="profile"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      />
      <motion.div
        className="text flex flex-col w-full md:max-w-[40vw]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-gray-400 text-xl md:text-2xl">
          <ReactTyped
            strings={["Web Developer", "Coder", "Data Scientist"]}
            typeSpeed={40}
            backSpeed={40}
            loop={true}
          />
        </h1>
        <motion.h1
          className="text-white text-3xl md:text-4xl mt-3 mb-5 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Shivang Jaiswal
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg md:text-2xl max-w-120 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          The tree stood tall, yet it had no purpose. It reached for the sky,
          not out of ambition, but because it was drawn to the light. Its roots
          dug deep, not out of determination, but because they had to. He
          watched the leaves rustle and wondered—was it growing, or simply being
          shaped?
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 my-4 sm:my-6 md:my-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="/resume/ShivangJaiswal.pdf" download className="block w-fit">
            <motion.button
              className="text-[#f66539] border-2 border-[#f66539] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-500 ease-in-out text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </a>
          <Link
            to={'Contact'}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <motion.button
              className="bg-[#f66539] px-3 sm:px-6 md:px-10 py-1.5 sm:py-2 rounded-full hover:border-white hover:bg-black hover:text-white hover:border-2 cursor-pointer transition-all duration-500 ease-in-out text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;