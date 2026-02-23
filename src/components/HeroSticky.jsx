import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import myImage from "../assets/images.jpg";

const HeroSticky = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background animation
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(12px)"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Text animation
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[200vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          style={{ scale, filter: blur, opacity }}
          className="absolute inset-0"
        >
          <img
            src={myImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          {/* <h1 className="text-white font-black text-[clamp(80px,25vw,300px)] uppercase drop-shadow-lg">
            Developer
          </h1> */}
          <div className="text-center w-full h-screen pt-60">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSticky;
