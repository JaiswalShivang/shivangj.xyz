
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-16 md:py-24 overflow-hidden bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 name="Projects" className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
            Projects
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
          <p className="text-sky-500 mt-4 text-lg font-medium">
            Showcasing my work and creativity
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-sky-500/30 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-700 mb-1">CampusConnect</h3>
                <p className="text-sky-500 text-sm">Full-Stack Club Management Platform</p>
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <ul className="text-sky-600 text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed a full-stack club management platform with secure role-based access (student/admin).
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enabled admins to create events and post announcements with Cloudinary-based image uploads for clubs and users.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrated real-time, club-specific group chat using Socket.io, accessible only to approved members and admins.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">ReactJS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">ExpressJS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">NodeJS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">SocketIO</span>
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/JaiswalShivang/CampusConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 text-center font-medium"
              >
                View Code
              </a>
              <a
                href="https://github.com/JaiswalShivang/CampusConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-sky-500/30 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-700 mb-1">Quizzy</h3>
                <p className="text-sky-500 text-sm">Quiz Management Platform</p>
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <ul className="text-sky-600 text-sm space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Created a quiz management platform where teachers can create quizzes and monitor student performance.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Used JWT-based auth and protected routes to separate Student/Teacher dashboards.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Designed a dynamic leaderboard system and real-time quiz scoring stored in MongoDB.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">ReactJS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">CSS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">MongoDB</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">ExpressJS</span>
              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-medium">NodeJS</span>
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/JaiswalShivang/Quizzy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors duration-300 text-center font-medium"
              >
                View Code
              </a>
              <a
                href="https://github.com/JaiswalShivang/Quizzy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>


        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
