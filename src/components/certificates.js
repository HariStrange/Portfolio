import React from "react";

// Import image files from assets/Certificates
import Cert1 from "../assets/Certificates/Git and CLI.jpg";
import Cert2 from "../assets/Certificates/React js.jpg";
import Cert3 from "../assets/Certificates/Javascript.jpg";
import Cert4 from "../assets/Certificates/Database.jpg";
import Cert5 from "../assets/Certificates/Python.jpg";
import Cert6 from "../assets/Certificates/Node Js.jpg";
import Cert7 from "../assets/Certificates/Responsive Website.jpg";
import Cert8 from "../assets/Certificates/XPM fundaMendals.jpg";
import Cert9 from "../assets/Certificates/Responsive Website.jpg";
import Cert10 from "../assets/Certificates/Static web design.jpg";
import Cert11 from "../assets/Certificates/Dynamic web application.jpg";
import Cert12 from "../assets/Certificates/AI Workshop Participation Certificate.png"; // Future certificate
import Cert13 from "../assets/Certificates/AI Project Completion.png"; // Future certificate

const certificates = [
  { id: 1, title: "Git", image: Cert1 },
  { id: 2, title: "React.js", image: Cert2 },
  { id: 3, title: "JavaScript", image: Cert3 },
  { id: 4, title: "SQLite", image: Cert4 },
  { id: 5, title: "Python", image: Cert5 },
  { id: 6, title: "Node.js", image: Cert6 },
  { id: 7, title: "Flexbox", image: Cert7 },
  { id: 8, title: "Fundamental Skills", image: Cert8 },
  { id: 9, title: "Bootstrap", image: Cert9 },
  { id: 10, title: "Static Web Design", image: Cert10 },
  { id: 11, title: "Dynamic Web Design", image: Cert11 },
  { id: 12, title: "AI Workshop Participation", image: Cert12 },
  { id: 13, title: "AI Project Completion", image: Cert13 },
];

const Certificates = () => {
  return (
    <div className="bg-gradient-to-br from-[#032442] via-[#193d5f] to-[#0a2151] py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            key={cert.id}
            className="bg-white/10 rounded-lg overflow-hidden shadow-lg backdrop-blur-md"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-6/6 object-contain bg-black"
            />
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold text-center">
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
