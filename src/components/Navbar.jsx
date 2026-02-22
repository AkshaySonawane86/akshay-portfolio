import React, { useState } from "react";
import { 
  motion, 
  useScroll, 
  useMotionValueEvent, 
  AnimatePresence 
} from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    // 1. Hide when scrolling down, show when scrolling up
    // 2. Always show if we are near the top (e.g., < 100px)
    if (current > previous && current > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <motion.div
        // Animation logic
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        
        // Modern Styling (Tailwind Classes)
        className="flex items-center gap-6 px-8 py-3 
                   rounded-full border border-white/20 
                   bg-white/70 backdrop-blur-md shadow-lg"
      >
        {/* Brand/Logo */}
        <div className="font-bold text-gray-900 mr-5">AKSHAY</div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#" className="hover:text-black transition-colors">Projects</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95">
          Contact
        </button>
      </motion.div>
    </nav>
  );
};

export default Navbar;