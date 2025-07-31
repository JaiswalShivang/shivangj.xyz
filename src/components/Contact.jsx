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
    <div className="text-sky-500 max-w-[1200px] mx-auto py-8 md:py-16 px-4 sm:px-6 relative overflow-hidden bg-white">
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
        <h2 className="text-3xl md:text-4xl font-bold text-sky-500 mb-2">Contact</h2>
        <div className="w-16 h-0.5 bg-sky-500 mx-auto mb-4"></div>
        <p className="text-sky-400 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
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
        <div className="w-full md:w-3/5 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-sky-500 flex items-center">
            <FaEnvelope className="mr-2 text-sky-500" />
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400" />
                <input
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300 text-sky-500"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400" />
                <input
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300 text-sky-500"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="relative">
                <FaPaperPlane className="absolute left-3 top-4 text-sky-400" />
                <textarea
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-300 text-sky-500 resize-none"
                  name="message"
                  placeholder="Your Message..."
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-sky-500 flex items-center">
            <FaPhoneAlt className="mr-2 text-sky-500" />
            Contact Info
          </h3>

          <div className="space-y-4">
            <a
              href="mailto:jaiswalshivang01@gmail.com"
              className="flex items-center gap-4 text-sky-500 hover:text-sky-600 transition-colors duration-300 group"
            >
              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-sky-500/10 transition-all duration-300">
                <FaEnvelope className="w-5 h-5 text-sky-500" />
              </div>
              <span className="text-sm sm:text-base">jaiswalshivang01@gmail.com</span>
            </a>

            <a
              href="tel:+919235377107"
              className="flex items-center gap-4 text-sky-500 hover:text-sky-600 transition-colors duration-300 group"
            >
              <div className="bg-gray-100 p-3 rounded-full group-hover:bg-sky-500/10 transition-all duration-300">
                <FaPhoneAlt className="w-5 h-5 text-sky-500" />
              </div>
              <span className="text-sm sm:text-base">+91 9235377107</span>
            </a>

            <div className="flex items-center gap-4 text-sky-500">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaMapMarkerAlt className="w-5 h-5 text-sky-500" />
              </div>
              <span className="text-sm sm:text-base">Bihar, Patna-800005</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-4 text-sky-500 flex items-center">
              <span className="mr-2">Follow Me</span>
              <span>👋</span>
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 text-sky-500 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
