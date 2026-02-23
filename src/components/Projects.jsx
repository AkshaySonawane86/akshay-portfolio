import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Projects = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])

  const projects = [
    { id: 1, title: "E-Commerce App" },
    { id: 2, title: "Banking System" },
    { id: 3, title: "Portfolio Website" },
    { id: 4, title: "Task Manager API" },
  ]

  return (
    <section id="projects" ref={containerRef} className="h-[300vh] relative bg-black pb-15">
      <span className="text-black-600 font-bold mt-[50px] tracking-widest uppercase text-sm">
      .
    </span>
    <h2 className=" md:text-5xl font-extrabold text-white mt-15 text-center">
     Selected Works
    </h2>
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
         
        <motion.div
          style={{ x }}
          className="flex gap-10 px-20"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[400px] h-[500px] bg-white rounded-2xl p-8 flex items-center justify-center text-2xl font-bold"
            >
              {project.title}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects