import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Code, Users, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Sholas Technologies Private Limited",
    location: "Erode, Tamil Nadu",
    duration: "Oct 2024 - Present",
    status: "Current Position",
    description:
      "Leading full-stack development of AI-powered solutions and scalable web applications.",
    responsibilities: [
      "Developing AI document intelligence platform (Papex)",
      "Building scalable applications with Spring Boot & React.js",
      "Leading development team and code reviews",
      "Database optimization with PostgreSQL",
    ],
    technologies: [
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "AI/ML",
      "OCR",
      "Node.js",
    ],
    achievements: [
      "Delivered Papex - AI document processing platform",
      "Improved application performance by 40%",
      "Led team of 5 developers",
    ],
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1745030911/WhatsApp_Image_2025-04-17_at_17.21.20_3ba0f6d1_p5owal.png",
    companyUrl: "sholas.io",
  },
  {
    id: 2,
    type: "internship",
    title: "Web Development Intern",
    company: "NullClass",
    location: "Online Internship",
    duration: "2 Months",
    status: "Completed",
    description:
      "Intensive web development training with hands-on project implementation.",
    responsibilities: [
      "Learned modern web development technologies",
      "Built full-stack applications from scratch",
      "Implemented responsive design principles",
      "Worked with databases and API integration",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    achievements: [
      "Built Stack Overflow clone with full functionality",
      "Achieved 95% completion rate",
      "Implemented real-time Q&A system",
    ],
    projectHighlight: {
      name: "Stack Overflow Clone",
      description:
        "Full-featured Q&A platform with authentication and voting system",
      features: [
        "User authentication",
        "Question posting",
        "Answer system",
        "Voting mechanism",
      ],
    },
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQGCs07yzlcG9Q/company-logo_200_200/company-logo_200_200/0/1630646786601/nullclassdotcom_logo?e=2147483647&v=beta&t=HzWjQJIPj_5_S7_jDDEjZ2yeQpYkoZnMDpLs7cw1zqQ",
    companyUrl: "https://www.nullclass.com/",
  },
  {
    id: 3,
    type: "education",
    title: "Full Stack Development - CCBP 4.0",
    company: "NxtWave Disruptive Technologies",
    location: "Online Program",
    duration: "Jan 2023 - Present",
    status: "In Progress",
    description:
      "Comprehensive full-stack development program with industry-standard practices.",
    responsibilities: [
      "Mastering React.js and modern JavaScript",
      "Backend development with Node.js",
      "Database management and optimization",
      "Building responsive web applications",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "SQLite",
      "Bootstrap",
    ],
    achievements: [
      "Completed 15+ hands-on projects",
      "Built Jobby App & Nxt Watch platforms",
      "Maintained 90%+ completion rate",
    ],
    image:
      "https://res.cloudinary.com/dx5lg8mei/image/upload/v1747633529/nxt_wave_k1zi3d.png",
    companyUrl: "https://www.ccbp.in/",
  },
];

const Experience = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Current Position":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "In Progress":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />;
      case "internship":
        return <Users className="w-5 h-5" />;
      case "education":
        return <Award className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

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
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development, from learning to leading
            innovative projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                              {getTypeIcon(exp.type)}
                            </div>
                            <Badge
                              className={`border ${getStatusColor(exp.status)}`}
                            >
                              {exp.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl md:text-2xl text-foreground">
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg font-semibold text-muted-foreground mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="hidden md:block">
                        <h4 className="font-semibold mb-3 text-foreground">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Key Achievements:
                      </h4>
                      <div className="grid md:grid-cols-3 gap-0 md:gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 bg-accent/20 rounded-lg p-3"
                          >
                            <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Highlight */}
                    {/* {exp.projectHighlight && (
                      <div className="bg-accent/30 rounded-lg p-4 border border-border/50">
                        <h4 className="font-semibold mb-2 text-foreground flex items-center">
                          <Code className="w-4 h-4 mr-2 text-primary" />
                          Featured Project: {exp.projectHighlight.name}
                        </h4>
                        <p className="text-muted-foreground mb-3 text-sm">
                          {exp.projectHighlight.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {exp.projectHighlight.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1 h-1 bg-primary rounded-full" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}
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
