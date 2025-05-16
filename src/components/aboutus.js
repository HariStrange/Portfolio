import React from "react";
const AboutUs = () => {
  
  // Detect if screen width is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="px-6 py-12 bg-[#092c4b] w-full min-h-screen flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ✅ Image First on Mobile, Second on Desktop */}
          <div
            className="order-1 md:order-2 flex justify-center"
            data-aos={isMobile ? "fade-up" : "fade-left"}
          >
            <img
              src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
              alt="About Me"
              className="rounded-xl shadow-lg max-h-[450px] w-full sm:w-3/4 object-cover"
            />
          </div>

          {/* ✅ Text First on Desktop, Second on Mobile */}
          <div
            className="order-2 md:order-1 text-gray-200 space-y-5"
            data-aos={isMobile ? "fade-up" : "fade-right"}
          >
            <p className="text-lg leading-relaxed">
              I’m a full-stack developer with a strong passion for building seamless, scalable web apps. I enjoy crafting responsive UIs with React and architecting reliable backends using modern technologies.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in team environments, love learning new frameworks, and constantly push myself to improve through experimentation and feedback. Clean code, clear logic, and good UI/UX drive my work.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it’s developing core features, debugging edge cases, or optimizing performance — I approach every challenge with energy and curiosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
