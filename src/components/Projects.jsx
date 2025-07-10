import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    id: 1,
    title: "Papex - AI Document Intelligence",
    type: "SaaS Product",
    description: "AI-powered document intelligence platform that extracts structured data from documents using OCR and machine learning. Features dynamic prompt generation and real-time processing.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "Node.js", "AI/ML", "OCR"],
    features: [
      "OCR-based document processing",
      "AI-powered data extraction",
      "Dynamic prompt generation",
      "Real-time status tracking",
      "Multi-tenant architecture"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Production",
    team: "5 developers",
    duration: "6 months"
  },
  {
    id: 2,
    title: "TaxiPik - Cab Booking System",
    type: "Mobile Application",
    description: "Comprehensive cab booking platform with real-time tracking, payment integration, and user-friendly interface for seamless ride booking experience.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
    technologies: ["React.js", "Spring Boot", "PostgreSQL", "Payment Gateway", "Maps API"],
    features: [
      "Real-time ride booking",
      "GPS location tracking",
      "Payment integration",
      "Driver-rider matching",
      "Ride history & analytics"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Development",
    team: "4 developers",
    duration: "4 months"
  },
  {
    id: 3,
    title: "ATOM2 - Business Website",
    type: "Corporate Website",
    description: "Modern, responsive business website with enhanced UI/UX, interactive animations, and optimized performance for better user engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["React.js", "Bootstrap", "Framer Motion", "Responsive Design"],
    features: [
      "Responsive design",
      "Interactive animations",
      "Contact form integration",
      "SEO optimization",
      "Performance optimization"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "3 developers",
    duration: "2 months"
  },
  {
    id: 4,
    title: "Jobby Application",
    type: "Job Portal",
    description: "Comprehensive job searching platform similar to Naukri, featuring job listings, application tracking, and user profile management.",
    image: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite"],
    features: [
      "Job search & filtering",
      "Application tracking",
      "User authentication",
      "Profile management",
      "Company listings"
    ],
    projectUrl: "https://jobbyapzp.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "3 months"
  },
  {
    id: 5,
    title: "Nxt Watch - Video Platform",
    type: "Streaming Platform",
    description: "YouTube-like video streaming platform with user authentication, video categorization, and responsive design for optimal viewing experience.",
    image: "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite"],
    features: [
      "Video streaming",
      "User authentication",
      "Video categorization",
      "Search functionality",
      "Responsive design"
    ],
    projectUrl: "https://nxtytwatch.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "2 months"
  },
  {
    id: 6,
    title: "Digital Library",
    type: "E-Library Platform",
    description: "Responsive e-commerce library application with Google Books API integration for comprehensive book search and management.",
    image: "https://www.institutefordigitaltransformation.org/wp-content/uploads/Digital-Library-scaled.jpeg",
    technologies: ["React.js", "Tailwind CSS", "Google Books API"],
    features: [
      "Book search & discovery",
      "API integration",
      "Responsive design",
      "Book details & reviews",
      "User-friendly interface"
    ],
    projectUrl: "https://digillibrary.netlify.app/",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "1 month"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my professional work and personal projects, demonstrating expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Live' ? 'default' : project.status === 'Production' ? 'secondary' : 'outline'}
                      className="bg-background/80"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/80">
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(project.projectUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;