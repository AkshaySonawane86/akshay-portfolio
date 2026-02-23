import React from "react"
import { motion } from "framer-motion"
import picImg from "../assets/pic.png"

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 flex items-center px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={picImg}
            alt="Profile"
            className="w-full max-w-md h-[450px] object-cover shadow-xl"
          />
        </motion.div>

        {/* RIGHT SIDE — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm a passionate Java Full Stack Developer specializing in 
            Spring Boot and React. I build scalable backend systems and 
            responsive, modern frontend applications.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I focus on clean architecture, REST APIs, database design, 
            and performance optimization to deliver enterprise-grade 
            solutions.
          </p>

          {/* Tech badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            {["Spring Boot", "React", "MySQL", "Docker", "REST API"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-black text-white text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About