'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import SEOHead from '../components/SEOHead'

const AboutPage = () => {
  const scrollToTutor = () => {
    const tutorSection = document.getElementById('tutor-section');
    if (tutorSection) {
      tutorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead 
        title="About Us"
        description="Learn about The EduCorner Tutoring and our experienced tutor Chandan Mehta. Over 8 years of tutoring experience in math and science/physics. Serving Hamilton, Ontario with personalized in-home and online tutoring."
        keywords={[
          'about educorner tutoring',
          'Chandan Mehta tutor',
          'tutor experience hamilton',
          'math tutor experience',
          'science tutor hamilton',
          'tutoring background',
          'qualified tutor hamilton',
          'tutoring expertise'
        ]}
        canonical="/about"
      />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About The EduCorner Tutoring</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about learning—and even more passionate about helping others learn. 
              Every student deserves access to high-quality, personalized learning—anytime, anywhere.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 border border-orange-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-xl text-gray-600">
                  To provide exceptional, personalized tutoring that empowers students to reach their full academic potential
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaChalkboardTeacher className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Tutoring</h3>
                  <p className="text-gray-600">Qualified and experienced tutors dedicated to your success</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600">Customized learning plans tailored to your individual needs</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Convenient in-home and online tutoring options</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Meet Your Tutor Section */}
          <motion.section
            id="tutor-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Your Tutor</h2>
              <p className="text-xl text-gray-600">Learn about the experienced educator behind The EduCorner Tutoring</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Chandan Mehta</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Experience</h4>
                      <p className="text-gray-600">Over 8 years of tutoring experience in math and science/physics</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Specializations</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Mathematics (Algebra, Functions, Trigonometry, Vectors, Geometry)</li>
                        <li>• Science (Physics, Chemistry, Biology)</li>
                        <li>• IELTS Preparation (Speaking & Writing)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Teaching Approach</h4>
                      <p className="text-gray-600">
                        Patient, personalized instruction that adapts to each student's learning style and pace
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
                  <div className="text-7xl mb-6">👨‍🏫</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Chandan?</h3>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-700">Extensive experience in multiple subjects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-700">Patient and encouraging teaching style</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-700">Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-700">Proven track record of student success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span className="text-gray-700">Both in-home and online tutoring available</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide our approach to education</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for academic excellence in everything we do",
                  icon: "⭐"
                },
                {
                  title: "Personalization",
                  description: "Every student receives customized attention and support",
                  icon: "🎯"
                },
                {
                  title: "Patience",
                  description: "We understand that learning takes time and practice",
                  icon: "🤝"
                },
                {
                  title: "Innovation",
                  description: "We use modern teaching methods and technology",
                  icon: "💡"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 border border-orange-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Learning Journey?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your learning goals and see how we can help you achieve academic success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <FaPhoneAlt size={20} />
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                >
                  <FaInfoCircle size={20} />
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutPage; 