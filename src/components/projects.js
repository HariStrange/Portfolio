import React from "react";

const projects = [
  {
    id: 1,
    title: "Jobby Application",
    description:
      "Job Searching Portal, like Naukri. Username: rahul, Password: rahul@2021",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
    projectUrl: "https://jobbyapzp.ccbp.tech",
    skills: ["React Js", "Bootstrap", "Node Js", "Express Js", "Sqlite"],
    imageStyle: { objectFit: "contain" },
  },
  {
    id: 2,
    title: "Nxt Watch Application",
    description:
      "Video Streaming Platform like Youtube. Username: rahul, Password: rahul@2021",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
    projectUrl: "https://nxtytwatch.ccbp.tech",
    skills: ["React Js", "Bootstrap", "Node Js", "Express Js", "Sqlite"],
    imageStyle: { objectFit: "contain" },
  },
  {
    id: 5,
    title: "Dood Technologies",
    description: "Company's Official Website.",
    imageUrl:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744600592/Doods_Technolo_1_a70qfs.jpg",
    projectUrl: "https://doodstech.netlify.app/",
    skills: ["React Js", "Tailwind CSS", "data-aos"],
    imageStyle: { objectFit: "cover" },
  },
  {
    id: 6,
    title: "Cyber Technologies",
    description: "Company's Official Website.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRdblf3UxMKXKrQFHjBhqpyKtlu5ZwLQVmARk256YVRJa4VqzLY5lx-_b2i4LoerUjxg&usqp=CAU",
    projectUrl: "https://01-demo-home.netlify.app/",
    skills: ["React Js", "Tailwind Css", "data-aos"],
    imageStyle: { objectFit: "cover" },
  },
    {
    id: 4,
    title: "Digital Library",
    description: "Responsive ecommerce library application",
    imageUrl:
      "https://www.institutefordigitaltransformation.org/wp-content/uploads/Digital-Library-scaled.jpeg",
    projectUrl: "https://digillibrary.netlify.app/",
    skills: ["Tailwind Css", "ReactJs","Google Books API"],
    imageStyle: { objectFit: "cover" },
  },
  {
    id: 3,
    title: "Fly Buy",
    description: "Responsive E-Commerce Application",
    imageUrl:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png",
    projectUrl: "https://flybuy.ccbp.tech",
    skills: ["HTML", "CSS", "Bootstrap", "Flexbox"],
    imageStyle: { objectFit: "contain" },
  },

];

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-[#032442] via-[#032442] to-[#1d667a] py-16 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                style={project.imageStyle}
                data-aos="fade-down"
                data-aos-anchor-placement="center-bottom"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-white">
              <h2
                className="text-xl font-semibold mb-2"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                {project.title}
              </h2>
              <p
                className="text-sm text-gray-300 mb-4"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="bg-white/20 text-sm text-white px-2 py-1 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-center text-sm p-4">
              Click to Visit 🚀
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
