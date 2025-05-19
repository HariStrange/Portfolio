import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaUniversity, FaBriefcase } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
const experiences = [
  {
    type: "education",
    date: "Year:2017 - 2018",
    title: "SSLC",
    subtitle: " Government High School",
    Location: "Sesanchavadi, Salem - 636111",
    description: "Percentage: 78%",
    icon: <LiaSchoolSolid />,
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633689/Logo_Tamil_Nadu_iheef7.jpg",
  },
  {
    type: "education",
    date: "Year: 2018 - 2020",
    title: "HSC",
    subtitle: "Government Higher Secondary School",
    Location: "Mettupatti, Salem - 636455",
    description: "Percentage: 58%",
    icon: <FaSchool />,
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633689/Logo_Tamil_Nadu_iheef7.jpg",
  },
  {
    type: "education",
    date: "Year: 2020 - 2023",
    title: "Bachelor's Degree",
    subtitle: "Government Arts College - Autonomous",
    Location: "Hastampatti, Salem - 636007",
    description: "Computer Science - 82%",
    icon: <FaUniversity />,
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633577/gacsalem_oazbq0.png",
  },
  {
    type: "education",
    date: "Year: Jan 2023 – Present",
    title: "Full Stack Development – CCBP 4.0 Intensive Program",
    subtitle: "NxtWave Disruptive Technologies Pvt. Ltd.",
    Location: "Online | HQ: Manikonda, Hyderabad - 500032",
    description:
      "",
    icon: <FaUniversity />,
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633529/nxt_wave_k1zi3d.png",
  },
  {
    type: "work",
    date: "Year: Oct 2023 -  Current",
    title: "Full Stack Developer",
    subtitle: "Sholas Technologies Private Limited",
    Location: "Teacher's Colony Erode - 638011",
    description: "Currently working as a Full Stack Developer",
    icon: <FaBriefcase />,
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1745030911/WhatsApp_Image_2025-04-17_at_17.21.20_3ba0f6d1_p5owal.png",
  },
];

const Experience = () => {
  return (
    <div
      className="bg-gradient-to-br from-[#032442] via-[#193d5f] to-[#2c4f70] p-6 min-h-screen w-screen"
      id="experience"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        My Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${exp.type}`}
            date={exp.date}
            icon={exp.icon}
            iconStyle={{ backgroundColor: "#042f56", color: "white" }}
            contentStyle={{
              background: "#042f56",
              color: "#fff",
              borderRadius: "10px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #042f56" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-32 h-32 object-cover rounded-xl shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <h4 className="text-md text-[17px] font-semibold text-white">
                  {exp.subtitle}
                </h4>
                <h4 className="text-white text-[15px] font-medium">
                  {exp.Location}
                </h4>
                <p className="text-sm text-[25px] mt-2 text-gray-200 font-semibold ">
                  {exp.description}
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
