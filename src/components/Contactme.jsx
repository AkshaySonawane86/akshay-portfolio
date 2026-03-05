import { motion } from "framer-motion";

const ContactMe = ({ onClose }) => {
  // Prevent page refresh and handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send data (e.g., fetch, EmailJS, etc.) goes here
    console.log("Form submitted!");
  };

  return (
    <motion.section
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-heading"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6 overflow-y-auto"
    >
      {/* Top-right close button for better UX */}
      <button
        onClick={onClose}
        aria-label="Close Contact Form"
        className="absolute top-8 right-8 text-gray-400 hover:text-white transition text-sm uppercase tracking-widest"
      >
        Close [X]
      </button>

      <h2 id="contact-heading" className="text-6xl md:text-8xl mb-12 text-center">
        Contact Me
      </h2>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 lg:gap-20 border border-zinc-800 rounded-2xl p-8 lg:p-12 bg-zinc-950">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-4xl lg:text-6xl font-light mb-6 leading-tight font-mono">
            Conversation <br /> comes first
          </p>
          <p className="text-zinc-400 text-lg">
            That's often where good things begin.
          </p>
        </div>

        {/* Right Side */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-400 uppercase tracking-wide">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="How should I call you?"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-zinc-400 uppercase tracking-wide">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Where can I reach you?"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-zinc-400 uppercase tracking-wide">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Anything you'd like to discuss?"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg resize-none focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-white bg-white text-black font-medium py-4 rounded-lg mt-4 hover:bg-transparent hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactMe;