import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import educationIcon from '../assets/images/image3.svg';

const Education = () => {
  const education = [
    {
      period: "2024-2029",
      title: "Integrated Btech + Mtech",
      institution: "National Institute of Technology Patna",
      icon: educationIcon
    },
    {
      period: "2023",
      title: "Higher Secondary",
      institution: "Smt. Draupadi Devi Tripathi Intermediate College",
      icon: educationIcon
    },
    {
      period: "2021",
      title: "High School",
      institution: "Smt. Draupadi Devi Tripathi Intermediate College",
      icon: educationIcon
    }
  ];

  return (
    <div className="min-h-screen py-6 md:py-12 overflow-hidden">
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 sm:px-6 gap-6 md:gap-10 relative">
        <h1 name="Education" className="text-sky-500 text-4xl md:text-5xl font-bold drop-shadow-md relative z-10">Education</h1>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 -left-20 w-40 h-40 bg-sky-500/5 rounded-full blur-2xl -z-10"></div>
        <div className="flex flex-col gap-5 md:gap-8">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationCard = ({ education, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex bg-sky-200 w-full md:max-w-[60%] py-3 md:py-4 rounded-xl sm:rounded-2xl px-3 md:px-5 hover:bg-sky-500 duration-300 ease-in-out cursor-pointer shadow-md hover:shadow-lg relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-sky-500 h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full flex items-center justify-center m-2 shadow-md z-10 group-hover:shadow-lg">
        <img
          className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
          src={education.icon}
          alt=""
        />
      </div>
      <div className="z-10">

        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
        <p className="text-sky-600 font-bold text-sm sm:text-base">{education.period}</p>
        <h1 className="text-lg sm:text-xl md:text-2xl text-sky-700 font-bold">
          {education.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-sky-600 font-bold">
          {education.institution}
        </p>
      </div>
    </motion.div>
  );
};

export default Education;
