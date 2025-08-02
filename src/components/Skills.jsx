
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiDjango,
  SiReact,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'NodeJS', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  ];

  return (
    <div name="Skills" className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-700 mb-2">Skills</h2>
        <div className="w-16 h-0.5 bg-sky-600 mx-auto"></div>
        <p className="text-sky-500 mt-4 text-lg font-medium">
          Technologies I work with
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-sky-500/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent
                    className="w-12 h-12 group-hover:drop-shadow-lg transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </div>
                <h3 className="text-sky-600 font-semibold group-hover:text-sky-700 transition-colors duration-300 text-sm">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
