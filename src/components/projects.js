import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Zap, Building, Code, Star } from "lucide-react";
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
    description: "Enterprise AI-powered document intelligence platform with OCR and ML algorithms for structured data extraction.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["Spring Boot", "React.js", "PostgreSQL", "AI/ML", "OCR", "Docker"],
    keyFeatures: [
      "Advanced OCR processing",
      "AI-powered data extraction",
      "Real-time processing",
      "Multi-tenant architecture"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Production",
    team: "5 developers",
    duration: "6 months",
    impact: "80% faster document processing",
    priority: 1
  },
  {
    id: 2,
    title: "TaxiPik - Cab Booking System",
    category: "industry",
    type: "Mobile Application",
    company: "Sholas Technologies",
    description: "Comprehensive cab booking platform with real-time tracking and intelligent driver-rider matching.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    technologies: ["React.js", "Spring Boot", "PostgreSQL", "Maps API", "WebSocket"],
    keyFeatures: [
      "Real-time ride booking",
      "GPS tracking & navigation",
      "Payment integration",
      "Driver-rider matching"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Development",
    team: "4 developers",
    duration: "4 months",
    impact: "1000+ users streamlined",
    priority: 2
  },
  {
    id: 3,
    title: "ATOM2 - Business Website",
    category: "industry",
    type: "Corporate Website",
    company: "Sholas Technologies",
    description: "Modern, responsive business website with enhanced UI/UX and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React.js", "Bootstrap", "Framer Motion", "SEO"],
    keyFeatures: [
      "Responsive design",
      "Interactive animations",
      "SEO optimization",
      "Performance optimization"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "3 developers",
    duration: "2 months",
    impact: "60% increased engagement",
    priority: 3
  },
  
  // Personal/Learning Projects
  {
    id: 4,
    title: "Stack Overflow Clone",
    category: "personal",
    type: "Learning Project",
    company: "NullClass Internship",
    description: "Full-featured Q&A platform with user authentication, voting system, and real-time interactions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    keyFeatures: [
      "User authentication",
      "Question posting",
      "Voting system",
      "Real-time notifications"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "Solo project",
    duration: "1 month",
    impact: "95% internship completion",
    priority: 4
  },
  {
    id: 5,
    title: "Jobby Application",
    category: "personal",
    type: "Job Portal",
    company: "CCBP 4.0 Program",
    description: "Job searching platform with advanced filtering, application tracking, and profile management.",
    image: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "SQLite", "JWT"],
    keyFeatures: [
      "Job search & filtering",
      "Application tracking",
      "Profile management",
      "Company listings"
    ],
    projectUrl: "https://jobbyapzp.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "3 months",
    impact: "Featured portfolio project",
    priority: 5
  },
  {
    id: 6,
    title: "Nxt Watch - Video Platform",
    category: "personal",
    type: "Streaming Platform",
    company: "CCBP 4.0 Program",
    description: "YouTube-like video streaming platform with authentication and responsive design.",
    image: "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
    technologies: ["React.js", "Bootstrap", "Node.js", "SQLite", "Video API"],
    keyFeatures: [
      "Video streaming",
      "User authentication",
      "Search functionality",
      "Theme toggle"
    ],
    projectUrl: "https://nxtytwatch.ccbp.tech",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "2 months",
    impact: "React.js expertise demo",
    priority: 6
  },
  {
    id: 7,
    title: "Digital Library",
    category: "personal",
    type: "E-Library Platform",
    company: "Personal Project",
    description: "E-commerce library application with Google Books API integration for book search and management.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Google Books API", "Responsive Design"],
    keyFeatures: [
      "Book search & discovery",
      "API integration",
      "Responsive design",
      "User-friendly interface"
    ],
    projectUrl: "https://digillibrary.netlify.app/",
    githubUrl: "#",
    status: "Live",
    team: "Solo project",
    duration: "1 month",
    impact: "API integration showcase",
    priority: 7
  },
  {
    id: 8,
    title: "Weather Dashboard",
    category: "personal",
    type: "Web Application",
    company: "Personal Project",
    description: "Real-time weather application with location-based forecasts and interactive charts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React.js", "Weather API", "Chart.js", "Geolocation"],
    keyFeatures: [
      "Real-time weather data",
      "Location-based forecasts",
      "Interactive charts",
      "Responsive design"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Completed",
    team: "Solo project",
    duration: "2 weeks",
    impact: "API integration mastery",
    priority: 8
  },
  {
    id: 9,
    title: "Task Management App",
    category: "personal",
    type: "Productivity Tool",
    company: "Personal Project",
    description: "Full-stack task management application with drag-and-drop functionality and team collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Drag & Drop"],
    keyFeatures: [
      "Drag & drop interface",
      "Team collaboration",
      "Real-time updates",
      "Task categorization"
    ],
    projectUrl: "#",
    githubUrl: "#",
    status: "Development",
    team: "Solo project",
    duration: "1 month",
    impact: "Full-stack proficiency",
    priority: 9
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="w-4 h-4" /> },
    { id: "industry", label: "Industry", icon: <Building className="w-4 h-4" /> },
    { id: "personal", label: "Personal", icon: <Star className="w-4 h-4" /> }
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
            Professional work and innovative solutions from industry projects to personal developments
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
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status & Priority */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      <Badge className={`border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                      {project.category === "industry" && (
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {project.priority}
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-background/90">
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {project.company}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Impact */}
                    <div className="bg-accent/30 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Impact:</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{project.impact}</p>
                    </div>

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
                        View
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
      </div>
    </section>
  );
};

export default Projects;