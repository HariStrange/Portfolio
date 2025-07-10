import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png", level: 90 },
      { name: "Python", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png", level: 80 },
      { name: "JavaScript", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png", level: 85 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png", level: 90 },
      { name: "Tailwind CSS", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png", level: 85 },
      { name: "Bootstrap", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png", level: 80 },
      { name: "Framer Motion", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png", level: 75 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png", level: 90 },
      { name: "Node.js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/1012818_code_development_logo_nodejs_icon_bfggzj.png", level: 80 },
      { name: "Express.js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/1012818_code_development_logo_nodejs_icon_bfggzj.png", level: 75 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png", level: 85 },
      { name: "MySQL", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png", level: 80 },
      { name: "SQLite", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526643/SQLite_rlulf4.png", level: 75 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png", level: 90 },
      { name: "Docker", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png", level: 70 },
      { name: "Nginx", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png", level: 65 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across the full technology stack with hands-on experience in modern frameworks and tools
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <div className="w-full bg-accent/30 rounded-full h-2 mt-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;