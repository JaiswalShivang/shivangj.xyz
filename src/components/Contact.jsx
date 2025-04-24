import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaTwitter, FaInstagram, FaPaperPlane, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheck, FaHeart } from 'react-icons/fa';

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const socialLinks = [
    { name: "GitHub", icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/JaiswalShivang" },
    { name: "X", icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/shivang_jaiswal" },
    { name: "Instagram", icon: <FaInstagram className="w-5 h-5" />, url: "https://instagram.com/shivang_jaiswal" }
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://getform.io/f/ayvkzzkb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        e.target.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="text-white max-w-[1200px] mx-auto py-8 md:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-[#f66539]/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-[#f66539]/10 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f66539]/5 rounded-full filter blur-[100px] opacity-30"></div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            border: '1px solid #e2e8f0',
            textAlign: 'center',
            fontWeight: '500',
            padding: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="text-center mb-8 md:mb-12">
        <motion.h1
          name="Contact"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#f66539] to-[#ff8c66] text-4xl md:text-5xl font-bold mb-4 md:mb-6 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative z-10">Get In Touch</span>
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#f66539]/10 via-[#f66539]/60 to-[#f66539]/10 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.span>
        </motion.h1>
        <motion.div
          className="w-full max-w-2xl mx-auto mt-4 text-center text-gray-300/80 italic tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just a friendly hello
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#10b981]/90 to-[#10b981]/80 p-8 rounded-2xl max-w-md w-full shadow-2xl border border-white/20 text-center relative overflow-hidden"
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
              >
                ×
              </button>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaCheck className="text-[#10b981] text-4xl" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-white/90 mb-4">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <div className="flex items-center justify-center text-white/80 text-sm">
                <FaHeart className="mr-2 text-pink-400" /> Looking forward to connecting with you
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
        <motion.div
          className="w-full md:w-3/5 bg-gradient-to-br from-black/40 to-black/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm border border-white/10 hover:border-[#f66539]/20 transition-all duration-500 hover:shadow-[0_10px_50px_-12px_rgba(246,101,57,0.15)] relative overflow-hidden group flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f66539] to-[#f66539]/80 flex items-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-[#f66539] after:to-transparent after:rounded-full">
            {/* Decorative dot */}
            <span className="absolute -left-3 -top-3 w-2 h-2 rounded-full bg-[#f66539] opacity-75"></span>
            <FaEnvelope className="mr-2 text-xl md:text-2xl" />
            <span>Send Me a Message</span>
          </h2>
          <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit} method="POST">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="border border-[#f66539]/70 rounded-lg overflow-hidden hover:border-[#f66539] hover:shadow-[0_0_15px_rgba(246,101,57,0.25)] hover:translate-y-[-3px] transition-all duration-300 w-full bg-black/20 backdrop-blur-sm relative group">
                {/* Decorative corner */}
                <span className="absolute w-3 h-3 border-t border-l border-[#f66539]/50 top-0 left-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <span className="absolute w-3 h-3 border-b border-r border-[#f66539]/50 bottom-0 right-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <div className="flex items-center">
                  <FaUser className="ml-3 text-[#f66539] opacity-60 text-xs group-hover:opacity-100 transition-opacity duration-300" />
                  <input
                    className="w-full bg-transparent py-2.5 pl-3 pr-4 outline-none border-none focus:ring-0 text-sm md:text-base"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div className="border border-[#f66539]/70 rounded-lg overflow-hidden hover:border-[#f66539] hover:shadow-[0_0_15px_rgba(246,101,57,0.25)] hover:translate-y-[-3px] transition-all duration-300 w-full bg-black/20 backdrop-blur-sm relative group">
                {/* Decorative corner */}
                <span className="absolute w-3 h-3 border-t border-l border-[#f66539]/50 top-0 left-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <span className="absolute w-3 h-3 border-b border-r border-[#f66539]/50 bottom-0 right-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <div className="flex items-center">
                  <FaEnvelope className="ml-3 text-[#f66539] opacity-60 text-xs group-hover:opacity-100 transition-opacity duration-300" />
                  <input
                    className="w-full bg-transparent py-2.5 pl-3 pr-4 outline-none border-none focus:ring-0 text-sm md:text-base"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="border border-[#f66539]/70 rounded-lg overflow-hidden hover:border-[#f66539] hover:shadow-[0_0_15px_rgba(246,101,57,0.25)] hover:translate-y-[-3px] transition-all duration-300 w-full bg-black/20 backdrop-blur-sm relative group">
                {/* Decorative corner */}
                <span className="absolute w-3 h-3 border-t border-l border-[#f66539]/50 top-0 left-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <span className="absolute w-3 h-3 border-b border-r border-[#f66539]/50 bottom-0 right-0 group-hover:border-[#f66539] transition-colors duration-300"></span>
                <div className="flex">
                  <div className="pt-2.5 ml-3 text-[#f66539] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPaperPlane className="text-xs" />
                  </div>
                  <textarea
                    className="w-full bg-transparent py-2.5 pl-3 pr-4 outline-none border-none focus:ring-0 text-sm md:text-base"
                    name="message"
                    placeholder="Your Message..."
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-center mt-2">
                <motion.button
                  className="relative bg-gradient-to-r from-[#f66539] to-[#e55428] px-5 md:px-7 py-2.5 md:py-3 rounded-lg text-white font-bold flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(246,101,57,0.5)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group/btn border border-transparent hover:border-white/20"
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 md:gap-8 bg-gradient-to-br from-black/40 to-black/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm border border-white/10 hover:border-[#f66539]/20 transition-all duration-500 hover:shadow-[0_10px_50px_-12px_rgba(246,101,57,0.15)] relative overflow-hidden group w-full md:w-2/5 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f66539] to-[#f66539]/80 flex items-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-[#f66539] after:to-transparent after:rounded-full">
            {/* Decorative dot */}
            <span className="absolute -left-3 -top-3 w-2 h-2 rounded-full bg-[#f66539] opacity-75"></span>
            <FaPhoneAlt className="mr-2 text-xl" />
            <span>Contact Info</span>
          </h2>

          <div className="space-y-4 md:space-y-5">
            <motion.a
              href="mailto:jaiswalshivang01@gmail.com"
              className="flex items-center gap-4 hover:text-[#f66539] transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-[#f66539]/30 to-[#f66539]/10 p-3 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#f66539]/60 group-hover:to-[#f66539]/30 group-hover:shadow-[0_0_15px_rgba(246,101,57,0.4)] group-hover:scale-110 transition-all duration-300 border border-[#f66539]/20 group-hover:border-[#f66539]/40 flex-shrink-0">
                <FaEnvelope className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm sm:text-base md:text-lg break-all">jaiswalshivang01@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+919235377107"
              className="flex items-center gap-4 hover:text-[#f66539] transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-[#f66539]/30 to-[#f66539]/10 p-3 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#f66539]/60 group-hover:to-[#f66539]/30 group-hover:shadow-[0_0_15px_rgba(246,101,57,0.4)] group-hover:scale-110 transition-all duration-300 border border-[#f66539]/20 group-hover:border-[#f66539]/40 flex-shrink-0">
                <FaPhoneAlt className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm sm:text-base md:text-lg">+91 9235377107</span>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 group"
              whileHover={{ x: 5 }}
            >
              <div className="bg-gradient-to-br from-[#f66539]/30 to-[#f66539]/10 p-3 rounded-full group-hover:bg-gradient-to-br group-hover:from-[#f66539]/60 group-hover:to-[#f66539]/30 group-hover:shadow-[0_0_15px_rgba(246,101,57,0.4)] group-hover:scale-110 transition-all duration-300 border border-[#f66539]/20 group-hover:border-[#f66539]/40 flex-shrink-0">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm sm:text-base md:text-lg">Bihar, Patna-800005</span>
            </motion.div>
          </div>

          <div className="mt-6 md:mt-auto pt-3 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-semibold mb-3 relative inline-flex items-center pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#f66539] after:to-transparent after:rounded-full">
              <span className="mr-2">Follow Me</span>
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatDelay: 2
                }}
              >
                👋
              </motion.div>
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#f66539]/30 to-[#f66539]/10 p-3 rounded-full hover:bg-[#f66539] hover:shadow-[0_0_20px_rgba(246,101,57,0.6)] hover:scale-110 transition-all duration-300 border border-[#f66539]/20 hover:border-[#f66539]"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
