import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Zap, Building, Code, Award, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  // Industry Projects (Top Priority)
  {
    id: 1,
    title: "Papex - AI Document Intelligence",
    category: "industry",
    type: "SaaS Platform",
    company: "Sholas Technologies",
    description: "Enterprise-grade AI-powered document intelligence platform that extracts structured data from documents using advanced OCR and machine learning algorithms. Features dynamic prompt generation and real-time processing capabilities.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "Node.js", "AI/ML", "OCR", "Docker", "Nginx"],
    keyFeatures: [
      "Advanced OCR document processing",
      "AI-powered data extraction engine",
      "Dynamic prompt generation system",
      "Real-time processing status tracking",
      "Multi-tenant architecture support",
      "RESTful API integration",
      "Scalable microservices design"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Production",
    team: "5 developers",
    duration: "6 months",
    role: "Lead Full Stack Developer",
    impact: "Reduced document processing time by 80%",
    priority: 1
  },
  {
    id: 2,
    title: "TaxiPik - Cab Booking System",
    category: "industry",
    type: "Mobile Application",
    company: "Sholas Technologies",
    description: "Comprehensive cab booking platform with real-time tracking, payment integration, and intelligent driver-rider matching system for seamless transportation experience.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    technologies: ["React.js", "Spring Boot", "PostgreSQL", "Payment Gateway", "Maps API", "WebSocket", "Redis"],
    keyFeatures: [
      "Real-time ride booking system",
      "GPS location tracking & navigation",
      "Secure payment gateway integration",
      "Intelligent driver-rider matching",
      "Live ride tracking & updates",
      "Ride history & analytics dashboard",
      "Multi-platform support"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Development",
    team: "4 developers",
    duration: "4 months",
    role: "Full Stack Developer",
    impact: "Streamlined booking process for 1000+ users",
    priority: 2
  },
  {
    id: 3,
    title: "ATOM2 - Business Website",
    category: "industry",
    type: "Corporate Website",
    company: "Sholas Technologies",
    description: "Modern, responsive business website with enhanced UI/UX, interactive animations, and optimized performance for better user engagement and conversion rates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React.js", "Bootstrap", "Framer Motion", "Responsive Design", "SEO", "Performance Optimization"],
    keyFeatures: [
      "Fully responsive design system",
      "Interactive animations & micro-interactions",
      "Contact form with email integration",
      "Advanced SEO optimization",
      "Performance optimization (90+ Lighthouse score)",
      "Cross-browser compatibility",
      "Content management system"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "3 developers",
    duration: "2 months",
    role: "Frontend Lead",
    impact: "Increased user engagement by 60%",
    priority: 3
  },
  
  // Personal/Learning Projects
  {
    id: 4,
    title: "Stack Overflow Clone",
    category: "personal",
    type: "Learning Project",
    company: "NullClass Internship",
    description: "Full-featured Q&A platform replicating Stack Overflow's core functionality with user authentication, voting system, and real-time question-answer interactions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    keyFeatures: [
      "User registration & authentication",
      "Question posting & categorization",
      "Answer system with rich text editor",
      "Voting mechanism for questions/answers",
      "Advanced search functionality",
      "User reputation system",
      "Real-time notifications"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "Solo project",
    duration: "1 month",
    role: "Full Stack Developer",
    impact: "95% completion rate in internship",
    priority: 4
  },
  {
    id: 5,
    title: "Jobby Application",
    category: "personal",
    type: "Job Portal",
    company: "CCBP 4.0 Program",
    description: "Comprehensive job searching platform similar to Naukri, featuring advanced job listings, application tracking, and user profile management system.",
    image: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite", "JWT Authentication"],
    keyFeatures: [
      "Advanced job search & filtering",
      "Application tracking system",
      "Secure user authentication",
      "Profile management dashboard",
      "Company listings & details",
      "Responsive design",
      "API integration"
    ],
    projectUrl: "https://jobbyapzp.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "3 months",
    role: "Full Stack Developer",
    impact: "Featured project in portfolio",
    priority: 5
  },
  {
    id: 6,
    title: "Nxt Watch - Video Platform",
    category: "personal",
    type: "Streaming Platform",
    company: "CCBP 4.0 Program",
    description: "YouTube-like video streaming platform with user authentication, video categorization, and responsive design for optimal viewing experience across devices.",
    image: "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite", "Video API"],
    keyFeatures: [
      "Video streaming & playback",
      "User authentication system",
      "Video categorization & playlists",
      "Advanced search functionality",
      "Responsive design",
      "Dark/Light theme toggle",
      "Video recommendations"
    ],
    projectUrl: "https://nxtytwatch.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "2 months",
    role: "Full Stack Developer",
    impact: "Demonstrated React.js expertise",
    priority: 6
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="w-4 h-4" /> },
    { id: "industry", label: "Industry Projects", icon: <Building className="w-4 h-4" /> },
    { id: "personal", label: "Personal Projects", icon: <Star className="w-4 h-4" /> }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects.sort((a, b) => a.priority - b.priority)
    : projects.filter(project => project.category === activeCategory).sort((a, b) => a.priority - b.priority);

  const getStatusColor = (status) => {
    switch (status) {
      case "Production":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Live":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "Development":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "Completed":
        return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getCategoryIcon = (category) => {
    return category === "industry" ? <Building className="w-4 h-4" /> : <Star className="w-4 h-4" />;
  };

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
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my professional work and innovative solutions, from industry projects to personal developments
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 group-hover:border-primary/30">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status & Category Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      <Badge className={`border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                        {project.category === "industry" ? "Industry" : "Personal"}
                      </Badge>
                    </div>

                    {/* Priority Indicator for Industry Projects */}
                    {project.category === "industry" && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {project.priority}
                        </div>
                      </div>
                    )}

                    {/* Project Type */}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center">
                          {getCategoryIcon(project.category)}
                          <span className="ml-1">{project.company}</span>
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{project.team}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Top Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Impact Highlight */}
                    {project.impact && (
                      <div className="bg-accent/30 rounded-lg p-3 border border-border/50">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Impact:</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{project.impact}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.projectUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-muted-foreground">{selectedProject.company} • {selectedProject.role}</p>
                    </div>
                    <Badge className={`border ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {selectedProject.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team Size:</span>
                          <span className="font-medium">{selectedProject.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Role:</span>
                          <span className="font-medium">{selectedProject.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <Button
                      onClick={() => window.open(selectedProject.projectUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;