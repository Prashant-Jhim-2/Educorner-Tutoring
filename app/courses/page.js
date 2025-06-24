'use client'
import {motion} from 'framer-motion'
import { FaCalculator } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import SEOHead from '../components/SEOHead'

const CoursesPage = () => {
  return (
    <>
      <SEOHead 
        title="Subjects & Plans"
        description="Choose from our comprehensive range of subjects and flexible pricing plans designed to help you excel academically. Expert tutoring in Mathematics, Science, and IELTS in Hamilton."
        keywords={[
          'tutoring courses hamilton',
          'math tutoring hamilton',
          'science tutoring hamilton',
          'IELTS preparation hamilton',
          'tutoring plans hamilton',
          'private tutoring hamilton',
          'academic tutoring hamilton',
          'test preparation hamilton'
        ]}
        canonical="/courses"
      />
      
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

          <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="subjects-heading">
            {/* Mathematics */}
            <motion.article
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
              <ul className="space-y-3">
                {['Algebra', 'Functions', 'Trigonometry', 'Vectors', 'Geometry'].map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-orange-500" size={16} />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Science */}
            <motion.article
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
              <ul className="space-y-3">
                {['Physics', 'Chemistry', 'Biology', '& More'].map((topic, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FaCheck className="text-blue-500" size={16} />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* IELTS */}
            <motion.article
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
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-green-500" size={16} />
                  <span className="text-gray-700">Special Classes</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-green-500" size={16} />
                  <span className="text-gray-700">Test Preparation</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-green-500" size={16} />
                  <span className="text-gray-700">Speaking & Writing</span>
                </li>
              </ul>
            </motion.article>
          </section>

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

          <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="pricing-heading">
            {/* Premium Plan */}
            <motion.article
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
            </motion.article>

            {/* Standard Plan */}
            <motion.article
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
            </motion.article>

            {/* One-Time Session */}
            <motion.article
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
            </motion.article>
          </section>

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
    </>
  );
};

export default CoursesPage; 