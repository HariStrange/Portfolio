import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Import certificate images from assets
import Cert1 from "../assets/Certificates/Git and CLI.jpg";
import Cert2 from "../assets/Certificates/React js.jpg";
import Cert3 from "../assets/Certificates/Javascript.jpg";
import Cert4 from "../assets/Certificates/Database.jpg";
import Cert5 from "../assets/Certificates/Python.jpg";
import Cert6 from "../assets/Certificates/Node Js.jpg";
import Cert7 from "../assets/Certificates/Responsive Website.jpg";
import Cert8 from "../assets/Certificates/XPM fundaMendals.jpg";
import Cert9 from "../assets/Certificates/Responsive Web Designing.jpg";
import Cert10 from "../assets/Certificates/Static web design.jpg";
import Cert11 from "../assets/Certificates/Dynamic web application.jpg";
import Cert12 from "../assets/Certificates/AI Workshop Participation Certificate.jpg";
import Cert13 from "../assets/Certificates/AI Project Completion.png";

const certificates = [
  {
    id: 1,
    title: "Git and CLI Fundamentals",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Comprehensive training on version control systems, command line interface operations, and collaborative development workflows using Git and GitHub.",
    image: Cert1,
    skills: ["Git", "GitHub", "CLI", "Version Control"],
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "React.js Development",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Advanced React.js development covering components, hooks, state management, routing, and modern React patterns for building scalable web applications.",
    image: Cert2,
    skills: ["React.js", "JSX", "Hooks", "State Management"],
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "JavaScript Programming",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "In-depth JavaScript programming covering ES6+ features, asynchronous programming, DOM manipulation, and modern JavaScript development practices.",
    image: Cert3,
    skills: ["JavaScript", "ES6+", "Async/Await", "DOM"],
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Database Management",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Database design, SQL queries, normalization, and database optimization techniques for efficient data management and retrieval.",
    image: Cert4,
    skills: ["SQL", "Database Design", "SQLite", "Data Modeling"],
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Python Programming",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Python programming fundamentals, data structures, algorithms, and application development using Python for various use cases.",
    image: Cert5,
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "Node.js Backend Development",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Server-side development with Node.js, Express.js framework, API development, and backend architecture patterns.",
    image: Cert6,
    skills: ["Node.js", "Express.js", "REST APIs", "Backend"],
    credentialUrl: "#",
  },
  {
    id: 7,
    title: "Responsive Web Design",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Modern responsive web design techniques, CSS Grid, Flexbox, and mobile-first development approaches.",
    image: Cert7,
    skills: ["CSS", "Responsive Design", "Flexbox", "Grid"],
    credentialUrl: "#",
  },
  {
    id: 8,
    title: "Programming Fundamentals",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Core programming concepts, problem-solving techniques, and foundational skills for software development.",
    image: Cert8,
    skills: ["Programming", "Problem Solving", "Logic", "Algorithms"],
    credentialUrl: "#",
  },
  {
    id: 9,
    title: "Advanced Responsive Design",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Advanced responsive design patterns, CSS frameworks, and modern layout techniques for professional web development.",
    image: Cert9,
    skills: ["Advanced CSS", "Bootstrap", "Responsive", "UI/UX"],
    credentialUrl: "#",
  },
  {
    id: 10,
    title: "Static Web Design",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Static website development using HTML, CSS, and JavaScript with focus on performance and user experience.",
    image: Cert10,
    skills: ["HTML", "CSS", "JavaScript", "Static Sites"],
    credentialUrl: "#",
  },
  {
    id: 11,
    title: "Dynamic Web Applications",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description:
      "Building dynamic web applications with interactive features, API integration, and modern web technologies.",
    image: Cert11,
    skills: ["Dynamic Web", "APIs", "JavaScript", "Web Apps"],
    credentialUrl: "#",
  },
  {
    id: 12,
    title: "AI Workshop Participation",
    issuer: "Industry Workshop",
    date: "2024",
    description:
      "Participated in comprehensive AI workshop covering machine learning fundamentals, neural networks, and practical AI applications.",
    image: Cert12,
    skills: ["AI", "Machine Learning", "Neural Networks", "Python"],
    credentialUrl: "#",
  },
  {
    id: 13,
    title: "AI Project Completion",
    issuer: "Industry Project",
    date: "2024",
    description:
      "Successfully completed AI project involving document processing, OCR integration, and machine learning model implementation.",
    image: Cert13,
    skills: ["AI Project", "OCR", "Document Processing", "ML Models"],
    credentialUrl: "#",
  },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  const currentCert = certificates[currentIndex];

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
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning journey in
            modern web technologies and AI
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Certificate Display */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50">
                <div className="relative h-80 bg-muted/20 flex items-center justify-center p-4">
                  <motion.img
                    key={currentCert.id}
                    src={currentCert.image}
                    alt={currentCert.title}
                    className="w-full h-full object-contain "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Award className="w-3 h-3 mr-1" />
                      Certified
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevCertificate}
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextCertificate}
                  className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted w-2"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Certificate Details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-md">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">
                            {currentCert.title}
                          </CardTitle>
                          <p className="text-muted-foreground font-medium">
                            {currentCert.issuer}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {currentCert.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {currentCert.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {currentCert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() =>
                            window.open(currentCert.credentialUrl, "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
