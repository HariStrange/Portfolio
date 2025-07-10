import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    type: "work",
    date: "Oct 2024 - Present",
    title: "Full Stack Developer",
    company: "Sholas Technologies Private Limited",
    location: "Teacher's Colony Erode - 638011",
    description: "Leading full-stack development projects with focus on AI-powered document processing and modern web applications. Working with Spring Boot, React.js, and PostgreSQL to deliver scalable solutions.",
    achievements: [
      "Developed AI-powered document intelligence platform (Papex)",
      "Built comprehensive cab booking system (TaxiPik)",
      "Improved application performance by 40%",
      "Led team of 3 junior developers"
    ],
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "AI/ML", "Docker"],
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1745030911/WhatsApp_Image_2025-04-17_at_17.21.20_3ba0f6d1_p5owal.png",
    icon: <Briefcase className="w-5 h-5" />
  }
];

const education = [
  {
    type: "certification",
    date: "Jan 2023 – Present",
    title: "Full Stack Development – CCBP 4.0 Intensive Program",
    company: "NxtWave Disruptive Technologies Pvt. Ltd.",
    location: "Online | HQ: Manikonda, Hyderabad - 500032",
    description: "Comprehensive full-stack development program covering modern web technologies, algorithms, and industry best practices.",
    achievements: [
      "Completed 15+ industry-level projects",
      "Mastered React.js, Node.js, and databases",
      "Achieved 95% completion rate",
      "Earned multiple technology certifications"
    ],
    technologies: ["React.js", "Node.js", "Python", "JavaScript", "SQL"],
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633529/nxt_wave_k1zi3d.png",
    icon: <Award className="w-5 h-5" />
  },
  {
    type: "education",
    date: "2020 - 2023",
    title: "Bachelor of Computer Science",
    company: "Government Arts College - Autonomous",
    location: "Hastampatti, Salem - 636007",
    description: "Comprehensive computer science education with focus on programming fundamentals, data structures, and software engineering principles.",
    achievements: [
      "Graduated with 82% aggregate",
      "Specialized in software development",
      "Completed major project on web development",
      "Active member of coding club"
    ],
    technologies: ["Java", "C++", "Database Management", "Software Engineering"],
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633577/gacsalem_oazbq0.png",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: "education",
    date: "2019 - 2020",
    title: "Higher Secondary Certificate (HSC)",
    company: "Government Higher Secondary School",
    location: "Mettupatti, Salem - 636455",
    description: "Completed higher secondary education with focus on science and mathematics, building strong analytical and problem-solving foundation.",
    achievements: [
      "Achieved 58% in HSC examinations",
      "Strong foundation in mathematics and science",
      "Developed analytical thinking skills",
      "Participated in science exhibitions"
    ],
    technologies: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633689/Logo_Tamil_Nadu_iheef7.jpg",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    type: "education",
    date: "2017 - 2018",
    title: "Secondary School Leaving Certificate (SSLC)",
    company: "Government High School",
    location: "Sesanchavadi, Salem - 636111",
    description: "Completed secondary education with excellent academic performance, demonstrating strong foundational knowledge across all subjects.",
    achievements: [
      "Achieved 78% in SSLC examinations",
      "Consistent academic performance",
      "Strong foundation in core subjects",
      "Active participation in school activities"
    ],
    technologies: ["Core Subjects", "Basic Computer Skills", "Mathematics", "Science"],
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633689/Logo_Tamil_Nadu_iheef7.jpg",
    icon: <GraduationCap className="w-5 h-5" />
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.date}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Education & Certifications</h3>
          </motion.div>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                        <img
                          src={edu.image}
                          alt={edu.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg">{edu.title}</CardTitle>
                          <Badge 
                            variant={edu.type === 'certification' ? 'default' : 'secondary'} 
                            className="flex items-center gap-1"
                          >
                            {edu.icon}
                            {edu.date}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-muted-foreground">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{edu.company}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Focus Areas:</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;