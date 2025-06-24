'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Head from 'next/head'

const HomePage = () => {
  const scrollToTutor = () => {
    const tutorSection = document.getElementById('tutor-section');
    if (tutorSection) {
      tutorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton</title>
        <meta name="description" content="Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta. Call 437-226-0838 for a free consultation." />
        <meta name="keywords" content="tutoring hamilton, math tutor hamilton, science tutor hamilton, IELTS tutor hamilton, online tutoring hamilton, in-home tutoring hamilton" />
        <link rel="canonical" href="https://theeducornertutoring.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton" />
        <meta property="og:description" content="Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring with experienced tutor Chandan Mehta." />
        <meta property="og:url" content="https://theeducornertutoring.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://theeducornertutoring.com/Header.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The EduCorner Tutoring - Expert Math, Science & IELTS Tutoring in Hamilton" />
        <meta name="twitter:description" content="Expert tutoring in Mathematics, Science, and IELTS in Hamilton, Ontario. Personalized in-home and online tutoring." />
        <meta name="twitter:image" content="https://theeducornertutoring.com/Header.jpg" />
      </Head>

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
    </>
  );
};

export default HomePage; 