import React from "react"

const logosRow1 = [
  "Spring Boot",
  "React",
  "MySQL",
  "Docker",
  "AWS",
  "Git",
]

const logosRow2 = [
  "Hibernate",
  "Microservices",
  "JWT",
  "REST API",
  "CI/CD",
  "MongoDB",
]

const Contact = ({onContactClick}) => {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Amazing.
        </h2>
        <p className="text-gray-400 mb-10">
          I'm available for freelance projects and full-time opportunities.
        </p>

        <div className="flex justify-center gap-6">
          <button onClick={onContactClick} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Contact Me
          </button>

          <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            View Resume
          </button>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="mt-24 space-y-10">

        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-16">
            {[...logosRow1, ...logosRow1].map((item, index) => (
              <span key={index} className="text-3xl font-bold opacity-60">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 Reverse */}
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-reverse gap-16">
            {[...logosRow2, ...logosRow2].map((item, index) => (
              <span key={index} className="text-3xl font-bold opacity-40">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact