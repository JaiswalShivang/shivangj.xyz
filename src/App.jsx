import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-50">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-[#f66539]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-[#f66539]/3 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Shivang Jaiswal. All rights reserved.</p>
      </footer>
    </motion.div>
  )
}

export default App
