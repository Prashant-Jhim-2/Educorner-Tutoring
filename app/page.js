'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import HomePage from './home/page'
import CoursesPage from './courses/page'
import AboutPage from './about/page'
import ContactPage from './contact/page'

const page = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'courses':
        return <CoursesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* App Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="flex items-center">
                <Image
                  src="/Header.jpg"
                  alt="The EduCorner Tutoring - Professional Tutoring Services in Hamilton"
                  width={300}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-6"
              role="navigation"
              aria-label="Main navigation"
            >
              <button
                onClick={() => handlePageChange('home')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                Home
              </button>
              <button
                onClick={() => handlePageChange('courses')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 'courses'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={currentPage === 'courses' ? 'page' : undefined}
              >
                Courses
              </button>
              <button
                onClick={() => handlePageChange('about')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 'about'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={currentPage === 'about' ? 'page' : undefined}
              >
                About
              </button>
              <button
                onClick={() => handlePageChange('contact')}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 'contact'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={currentPage === 'contact' ? 'page' : undefined}
              >
                Contact
              </button>
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 md:pb-8" role="main">
        {renderCurrentPage()}
      </main>

      {/* Bottom Navigation - Mobile App Style */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden" role="navigation" aria-label="Mobile navigation">
        <div className="flex justify-around py-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange('home')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'home'
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-600 hover:text-orange-600'
            }`}
            aria-label="Go to Home page"
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            <FaHome size={20} />
            <span className="text-xs mt-1">Home</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange('courses')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'courses'
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-600 hover:text-orange-600'
            }`}
            aria-label="Go to Courses page"
            aria-current={currentPage === 'courses' ? 'page' : undefined}
          >
            <FaBook size={20} />
            <span className="text-xs mt-1">Courses</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange('about')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'about'
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-600 hover:text-orange-600'
            }`}
            aria-label="Go to About page"
            aria-current={currentPage === 'about' ? 'page' : undefined}
          >
            <FaUser size={20} />
            <span className="text-xs mt-1">About</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange('contact')}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'contact'
                ? 'text-orange-600 bg-orange-50'
                : 'text-gray-600 hover:text-orange-600'
            }`}
            aria-label="Go to Contact page"
            aria-current={currentPage === 'contact' ? 'page' : undefined}
          >
            <FaEnvelope size={20} />
            <span className="text-xs mt-1">Contact</span>
          </motion.button>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-4 md:pb-8 pb-20" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h3 className="text-2xl font-bold">The EduCorner</h3>
                <p className="text-sm text-gray-400">Tutoring </p>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-8">
              Copyright © 2025 The EduCorner Tutoring All Rights Reserved.
            </p>
            
            <div className="flex gap-6">
              <motion.a 
                href="https://www.instagram.com/theeducornertutoring/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
              
              <motion.a 
                href="https://www.google.com/maps/place/The+EduCorner+Tutoring/@56.5869048,-134.5131336,9267316m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6235dff81ba04d11:0x226529aefa846620!8m2!3d62.6573279!4d-95.989235!16s%2Fg%2F11x5cxpbhx?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                aria-label="Find us on Google Maps"
              >
                <FaMapMarkerAlt size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page 