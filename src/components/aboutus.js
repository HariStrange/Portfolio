import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Zap, Users, Target } from "lucide-react";

const AboutUs = () => {
  const isMobile = window.innerWidth <= 768;

  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full Stack Expertise",
      description: "Proficient in both frontend and backend technologies"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Focused",
      description: "Building fast, scalable, and optimized applications"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Collaboration",
      description: "Excellent communication and teamwork skills"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Problem Solver",
      description: "Analytical approach to complex technical challenges"
    }
  ];

  return (
    <section className="px-6 py-20 bg-muted/30 w-full min-h-screen flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="p-0">
                <img
                  src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
                  alt="About Me"
                  className="w-full h-[500px] object-cover object-top"
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">
                Currently at Sholas Technologies
              </Badge>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
                  I enjoy crafting responsive UIs with <span className="text-foreground font-semibold">React.js</span> and 
                  architecting reliable backends using modern technologies like <span className="text-foreground font-semibold">Spring Boot</span>.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I thrive in team environments, love learning new frameworks, and constantly push myself to improve 
                  through experimentation and feedback. Clean code, clear logic, and excellent UI/UX drive my work.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Whether it's developing core features, debugging edge cases, or optimizing performance — 
                  I approach every challenge with <span className="text-foreground font-semibold">energy and curiosity</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React.js", "Spring Boot", "PostgreSQL", "Node.js", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;