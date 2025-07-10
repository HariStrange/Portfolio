import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const certificates = [
  {
    id: 1,
    title: "Git and CLI Fundamentals",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "Comprehensive training on version control systems, command line interface operations, and collaborative development workflows using Git and GitHub.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png",
    skills: ["Git", "GitHub", "CLI", "Version Control"],
    credentialUrl: "#"
  },
  {
    id: 2,
    title: "React.js Development",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "Advanced React.js development covering components, hooks, state management, routing, and modern React patterns for building scalable web applications.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png",
    skills: ["React.js", "JSX", "Hooks", "State Management"],
    credentialUrl: "#"
  },
  {
    id: 3,
    title: "JavaScript Programming",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "In-depth JavaScript programming covering ES6+ features, asynchronous programming, DOM manipulation, and modern JavaScript development practices.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png",
    skills: ["JavaScript", "ES6+", "Async/Await", "DOM"],
    credentialUrl: "#"
  },
  {
    id: 4,
    title: "Database Management",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "Database design, SQL queries, normalization, and database optimization techniques for efficient data management and retrieval.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526643/SQLite_rlulf4.png",
    skills: ["SQL", "Database Design", "SQLite", "Data Modeling"],
    credentialUrl: "#"
  },
  {
    id: 5,
    title: "Python Programming",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "Python programming fundamentals, data structures, algorithms, and application development using Python for various use cases.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png",
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
    credentialUrl: "#"
  },
  {
    id: 6,
    title: "Node.js Backend Development",
    issuer: "NxtWave Disruptive Technologies",
    date: "2023",
    description: "Server-side development with Node.js, Express.js framework, API development, and backend architecture patterns.",
    image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/1012818_code_development_logo_nodejs_icon_bfggzj.png",
    skills: ["Node.js", "Express.js", "REST APIs", "Backend"],
    credentialUrl: "#"
  }
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
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
            Professional certifications and continuous learning journey in modern web technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Certificate Display */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50">
                <div className="relative h-64 bg-muted/20 flex items-center justify-center">
                  <motion.img
                    key={currentCert.id}
                    src={currentCert.image}
                    alt={currentCert.title}
                    className="w-24 h-24 object-contain"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
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
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextCertificate}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
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
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
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
                          <h4 className="font-semibold mb-2">Skills Covered:</h4>
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
                          onClick={() => window.open(currentCert.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Credential
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