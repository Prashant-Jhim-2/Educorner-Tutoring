'use client'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import SEOHead from '../components/SEOHead'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with The EduCorner Tutoring. Contact us for expert math, science, and IELTS tutoring in Hamilton, Ontario. Call 437-226-0838 or fill out our contact form."
        keywords={[
          'contact educorner tutoring',
          'tutor contact hamilton',
          'math tutor contact',
          'science tutor contact',
          'IELTS tutor contact',
          'tutoring inquiry hamilton',
          'book tutor hamilton',
          'tutoring consultation'
        ]}
        canonical="/contact"
      />
      
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your learning journey? Get in touch with us today to discuss your academic goals and find the perfect tutoring solution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 border border-orange-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">437-226-0838</p>
                      <p className="text-sm text-gray-500">Available for calls and WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">theeducornertutoring@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-600">Hamilton, Ontario, Canada</p>
                      <p className="text-sm text-gray-500">In-home and online tutoring available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-500">Weekend sessions available by appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600">Experienced tutor with 8+ years</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600">Personalized learning plans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600">Flexible scheduling options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600">Both in-home and online tutoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Contact Form */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" size={20} />
                      <span className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none text-black focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaComment className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="IELTS">IELTS Preparation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <FaComment className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="block w-full pl-10 pr-3 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your learning goals and how we can help..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaEnvelope size={20} />
                    Send Message
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and consent to being contacted about our tutoring services.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12 border border-orange-200">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Learning?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't wait to improve your academic performance. Contact us today for a free consultation and personalized learning plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="tel:437-226-0838"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <FaPhoneAlt size={20} />
                  Call Now: 437-226-0838
                </motion.a>
                <motion.a
                  href="mailto:theeducornertutoring@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
                >
                  <FaEnvelope size={20} />
                  Email Us
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 