// import { useState } from "react";
import { useState } from 'react';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Contactme from './components/Contactme';
import HeroSticky from './components/HeroSticky';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  const [showContact, setShowContact] = useState(false)
  return (
    <div>
      
      {/* <div className="text-center w-full h-screen pt-60">
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
</div> */}

{!showContact && (
        <>
   <Navbar onContactClick={() => setShowContact(true)} />
  <HeroSticky />

   <About />

   <Projects />
   <Technologies/>
   <Contact onContactClick={() => setShowContact(true)} />
   </>
   )}

   {showContact && (
        <Contactme onClose={() => setShowContact(false)} />
      )}
    </div>
  );
}

export default App;