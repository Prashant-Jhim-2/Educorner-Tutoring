'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const page = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const scrollToTutor = () => {
    const tutorSection = document.getElementById('tutor-section');
    if (tutorSection) {
      tutorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Home Page Component
  const HomePage = () => (
    <>
      {/* Hero Section - App Style */}
      <section className="relative overflow-hidden py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-7xl mb-6"
              aria-hidden="true"
            >
              🎓
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl text-black/80 font-bold mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                The EduCorner
                <span className="text-blue-600">  Tutoring</span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're passionate about learning—and even more passionate about helping others learn. 
              Every student deserves access to high-quality, personalized learning—anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTutor}
                className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg"
                aria-label="Meet your tutor - Learn about Chandan Mehta"
              >
                <FaInfoCircle size={20} />
                Meet Your Tutor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - App Style Cards */}
      <section className="py-12 px-4" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Choose Your Learning Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking for help with a tough math problem, preparing for an important exam, 
              or just want to get ahead in class, our team is here to guide you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Home Tutoring */}
            <motion.article
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200">
                <div className="relative h-72">
                  <Image
                    src="https://static.wixstatic.com/media/11062b_fd36cdacc882443194a30e8802b34e22~mv2.jpg/v1/crop/x_1065,y_0,w_4260,h_4260/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fd36cdacc882443194a30e8802b34e22~mv2.jpg"
                    alt="In-Home Tutoring - Personalized learning in your comfort zone"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">In-Home Tutoring</h3>
                    <p className="text-white/90">Personalized learning in your comfort zone</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Experience personalized learning in the comfort of your home with our expert tutors. 
                    We bring quality education right to your doorstep, creating a familiar and comfortable 
                    learning environment.
                  </p>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-orange-400" size={16} />
                    <span className="text-sm text-gray-600">Personalized one-on-one sessions</span>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Online Tutoring */}
            <motion.article
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200">
                <div className="relative h-72">
                  <Image
                    src="https://static.wixstatic.com/media/11062b_d9d4937c4aac4201b88e5b12208c0f13~mv2.jpeg/v1/crop/x_1791,y_0,w_4270,h_4268/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Online%20Class%20Teaching.jpeg"
                    alt="Online Tutoring - Learn from anywhere in the world"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Online Tutoring</h3>
                    <p className="text-white/90">Learn from anywhere in the world</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Connect with expert tutors from anywhere through our interactive online platform. 
                    Enjoy flexible scheduling, real-time collaboration, and personalized learning in a virtual classroom.
                  </p>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-blue-400" size={16} />
                    <span className="text-sm text-gray-600">Flexible online sessions</span>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Features - App Style */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-50 to-blue-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With one-on-one sessions, tailored lesson plans, and a focus on building confidence, 
              we make learning easier, more effective, and even enjoyable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaChalkboardTeacher,
                title: "Expert Tutors",
                description: "Carefully vetted professionals passionate about teaching",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50"
              },
              {
                icon: FaCalendarAlt,
                title: "Flexible Scheduling",
                description: "Learn at your pace, on your time",
                color: "from-blue-500 to-purple-500",
                bgColor: "from-blue-50 to-purple-50"
              },
              {
                icon: IoBookOutline,
                title: "Customized Learning",
                description: "Personalized support that fits your unique learning style",
                color: "from-orange-500 to-yellow-500",
                bgColor: "from-orange-50 to-yellow-50"
              },
              {
                icon: GoAlert,
                title: "Safe & Secure",
                description: "A trusted platform for students and parents alike",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              }
            ].map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 px-4 relative overflow-hidden" aria-labelledby="subjects-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl mb-6"
              aria-hidden="true"
            >
              📚
            </motion.div>
            <h2 id="subjects-heading" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Available{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Subjects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert tutoring in all major academic areas to help you excel and achieve your educational goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mathematics */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaCalculator className="text-white text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">MATHEMATICS</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Topics list */}
                <div className="relative z-10 space-y-4">
                  {['Algebra', 'Functions', 'Trigonometry', 'Vectors', 'Geometry'].map((topic, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Science */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaBrain className="text-white text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">SCIENCE</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Topics list */}
                <div className="relative z-10 space-y-4">
                  {['Physics', 'Chemistry', 'Biology', '& More'].map((topic, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* IELTS */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaGlobe className="text-white text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">IELTS</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Topics list */}
                <div className="relative z-10 space-y-4">
                  {['Special Classes', 'Test Preparation', 'Speaking & Writing'].map((topic, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Choose your preferred subject and let's begin your academic journey together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl mb-6"
            >
              📋
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Learning{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Plans
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan that fits your learning goals and schedule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-orange-200 relative">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCrown className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                  <p className="text-orange-100">For students who want intensive support & fast results</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {[
                      "Priority scheduling",
                      "3-4 tutoring sessions/week (12 sessions/month)",
                      "1-hour sessions",
                      "Dedicated tutor match",
                      "Homework help + exam prep"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-blue-200 relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                  <p className="text-blue-100">Ideal for weekly academic support</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {[
                      "2-3 tutoring sessions/week (8 sessions/month)",
                      "1-hour sessions",
                      "Assignment/Homework help"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* One-Time Session */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-green-200 relative">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">One-Time Session</h3>
                  <p className="text-green-100">Need help with a single assignment or topic?</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {[
                      "1 hour session",
                      "Expert tutor",
                      "Flexible scheduling"
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Learning?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Choose your preferred subject and let's begin your academic journey together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutor Section */}
      <section id="tutor-section" className="py-12 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Your Tutor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from an experienced and passionate educator dedicated to your success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative">
                  <Image 
                    src='https://static.wixstatic.com/media/0d39ac_8784d15c9bbe4b45810a733f2048f2b0~mv2.jpg/v1/fill/w_305,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d39ac_8784d15c9bbe4b45810a733f2048f2b0~mv2.jpg' 
                    width={500}
                    height={500}
                    alt='Chandan Mehta'
                    className="rounded-3xl shadow-2xl object-cover border-4 border-white"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Chandan Mehta</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-full text-sm font-medium">Founder</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium">Physics Tutor</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 rounded-full text-sm font-medium">Math Tutor</span>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Chandan is a passionate and patient tutor with over 8 years of tutoring experience helping students excel in math and science/physics.
                </p>
                
                <p>
                  With over 10 years of combined tutoring and technical experience, Chandan combines academic depth with a patient, encouraging teaching style.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-2xl border-l-4 border-orange-500">
                  <p className="text-gray-700 italic font-medium text-lg">
                    "As my true love lies in teaching, not selling, I founded EduCorner Tutoring to personally train students in my proven methods."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTutor}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                   
                    Contact Chandan
                    <FaPhoneAlt size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Do you need a tutor?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Please fill out the form or give us a call to discuss your goals and needs together.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaPhoneAlt className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-600">437-226-0838</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaEnvelope className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-gray-600">theeducornertutoring@gmail.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Hamilton, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );

  // Courses Page Component
  const CoursesPage = () => (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Subjects & Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of subjects and flexible pricing plans designed to help you excel academically
          </p>
        </motion.div>

        {/* Subject Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Subjects</h2>
          <p className="text-xl text-gray-600">Expert tutoring in all major academic areas</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mathematics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-xl border border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalculator className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">MATHEMATICS</h3>
            </div>
            <div className="space-y-3">
              {['Algebra', 'Functions', 'Trigonometry', 'Vectors', 'Geometry'].map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-orange-500" size={16} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Science */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBrain className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SCIENCE</h3>
            </div>
            <div className="space-y-3">
              {['Physics', 'Chemistry', 'Biology', '& More'].map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-blue-500" size={16} />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IELTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IELTS</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500" size={16} />
                <span className="text-gray-700">Special Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500" size={16} />
                <span className="text-gray-700">Test Preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-green-500" size={16} />
                <span className="text-gray-700">Speaking & Writing</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Pricing Plans</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for your learning goals</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-orange-200">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-orange-100">For students who want intensive support & fast results</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    "Priority scheduling",
                    "3-4 tutoring sessions/week (12 sessions/month)",
                    "1-hour sessions",
                    "Dedicated tutor match",
                    "Homework help + exam prep"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-200">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <p className="text-blue-100">Ideal for weekly academic support</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    "2-3 tutoring sessions/week (8 sessions/month)",
                    "1-hour sessions",
                    "Assignment/Homework help"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* One-Time Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">One-Time Session</h3>
                <p className="text-green-100">Need help with a single assignment or topic?</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">1 hour session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">Expert tutor</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">Flexible scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 border border-orange-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Learning?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your learning goals and find the perfect plan for your academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange('about')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <FaPhoneAlt size={20} />
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // About Page Component
  const AboutPage = () => (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Meet Your Tutor</h1>
          <p className="text-xl text-gray-600">Learn more about our mission and team</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <Image 
                  src='https://static.wixstatic.com/media/0d39ac_8784d15c9bbe4b45810a733f2048f2b0~mv2.jpg/v1/fill/w_305,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d39ac_8784d15c9bbe4b45810a733f2048f2b0~mv2.jpg' 
                  width={500}
                  height={500}
                  alt='Chandan Mehta'
                  className="rounded-3xl shadow-2xl object-cover border-4 border-white"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Chandan Mehta</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-full text-sm font-medium">Founder</span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium">Physics Tutor</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 rounded-full text-sm font-medium">Math Tutor</span>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Chandan is a passionate and patient tutor with over 8 years of tutoring experience helping students excel in math and science/physics.
              </p>
              
              <p>
                With over 10 years of combined tutoring and technical experience, Chandan combines academic depth with a patient, encouraging teaching style.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <p className="text-gray-700 italic font-medium text-lg">
                  "As my true love lies in teaching, not selling, I founded EduCorner Tutoring to personally train students in my proven methods."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTutor}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <FaPhoneAlt size={16} />
                  Contact Chandan
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Do you need a tutor?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Please fill out the form or give us a call to discuss your goals and needs together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
            <p className="text-gray-600 text-lg">437-226-0838</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
            <p className="text-gray-600 text-lg">theeducornertutoring@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
            <p className="text-gray-600 text-lg">Toronto, Ontario, Canada</p>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* App Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
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
                  alt="The EduCorner Tutoring"
                  width={300}
                  height={80}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              {/* Removed search and notifications buttons */}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 md:pb-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'courses' && <CoursesPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

     

      {/* Bottom Navigation - Mobile App Style */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
        <div className="flex justify-around py-2">
          {/* Navigation buttons removed */}
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 px-4 md:pb-8 pb-20">
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