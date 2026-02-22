// import { useState } from "react";
import './App.css'
import Navbar from './components/Navbar';
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// const Navbar = () => {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);

//   useMotionValueEvent(scrollY, "change", (current) => {
//     const previous = scrollY.getPrevious();
    
//     // Check if we've scrolled more than a tiny bit to avoid jitter
//     if (current > previous && current > 150) {
//       setHidden(true); // Scrolling down
//     } else {
//       setHidden(false); // Scrolling up
//     }
//   });

//   return (
//     <motion.nav
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: "-100%" },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       style={{ position: "fixed", top: 0, width: "100%", background: "white" }}
//     >
//       {/* Your Navbar Content */}
//     </motion.nav>
//   );
// };

function App() {
  
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="text-center w-full h-screen pt-60">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
          Java Full Stack <span className="text-blue-600">Developer.</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Specializing in Spring Boot and React to create seamless, 
          enterprise-grade web experiences.
        </p>

        <div className="mt-10">
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold">
            Explore My Projects
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray-100 flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700">
            I'm a passionate Java Full Stack Developer with strong experience
            in Spring Boot, React, REST APIs, and database design. I build
            scalable, secure, and high-performance applications.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;