import { motion } from "framer-motion"

const Contactme = ({ onClose }) => {
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40"
    >
      <h2 className="text-5xl mb-6">Contact Me</h2>

      <button
        onClick={onClose}
        className="mt-10 border px-6 py-3 rounded-full"
      >
        Go Back
      </button>
    </motion.section>
  )
}

export default Contactme