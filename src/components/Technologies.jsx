import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Technologies = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Left movement
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  // Right movement (reverse)
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black text-white flex flex-col justify-center gap-20 overflow-hidden px-10"
    >
      {/* Line 1 */}
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap text-7xl font-extrabold"
      >
        Spring Boot | React | MySQL | REST APIs | Spring Boot | React 
      </motion.div>

      {/* Line 2 */}
      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap text-7xl font-extrabold opacity-40"
      >
        Docker | AWS | Git | JWT | Docker | AWS | Git 
      </motion.div>

      {/* Line 3 */}
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap text-7xl font-extrabold"
      >
        Hibernate | Microservices | CI/CD | Hibernate | Microservices 
      </motion.div>
    </section>
  )
}

export default Technologies