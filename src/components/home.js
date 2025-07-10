import React, { useEffect } from "react";
import "./home.css"; // Ensure your keyframes and styles are defined here
import AOS from "aos";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative overflow-hidden">
      {/* <Header /> */}
      <div className="flex flex-col md:flex-row h-[100vh] items-center justify-center gap-16 md:justify-between min-h-screen md:gap-20 bg-gradient-to-br from-[#032442] via-[#084178] to-cyan-300 w-screen">
        {/* Text Section */}
        <div
          className="text-center md:text-left order-2 md:order-1"
          data-aos={isMobile ? "fade-up" : "fade-right"}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hariharan Natarajan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white font-semibold">
            Full Stack Developer
          </p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1YNlw8BTHAs48f08mKO5qOTcBxoiPtpyb"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 font-semibold transition"
              download
            >
              Download Resume
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="mt-6 flex flex-row justify-center items-center  p-4 bg-white  gap-3 md:justify-end w-full">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-400 transition transform hover:scale-110 text-2xl"
            >
              <i className="fab fa-linkedin">
                <FaLinkedin />
              </i>
            </a>
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 hover:text-pink-500 transition transform hover:scale-110 text-2xl"
            >
              <i className="fab fa-instagram">
                <FaInstagram />
              </i>
            </a>
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition transform hover:scale-110 text-2xl"
            >
              <i className="fab fa-whatsapp">
                <FaWhatsapp />
              </i>
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-sky-400 transition transform hover:scale-110 text-2xl"
            >
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </a>
          </div>
        </div>

        {/* Animated Image Section */}
        <div
          className="relative flex justify-center items-center order-1 md:order-2"
          data-aos={isMobile ? "fade-up" : "fade-left"}
        >
          <div className="relative w-80 h-80 md:w-80 md:h-80">
            {/* Outer Circle */}
            <div
              className="absolute inset-0 rounded-full border-8 border-blue-500"
              style={{
                animation: "spin-slow 15s linear infinite",
                borderStyle: "dashed",
              }}
            ></div>
            {/* Middle Circle */}
            <div
              className="absolute inset-4 rounded-full border-4 border-blue-300"
              style={{
                animation: "spin-reverse 20s linear infinite",
                borderStyle: "dashed",
              }}
            ></div>
            {/* Inner Circle with Image */}
            <div className="absolute inset-7 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
                alt="Portfolio"
                className="w-full h-full object-top object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
