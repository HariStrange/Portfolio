import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Zap, Code, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projectCategories = [
  {
    id: "industry",
    label: "Industry Projects",
    icon: <Briefcase className="w-4 h-4" />,
    description: "Professional projects from my current role"
  },
  {
    id: "college",
    label: "Academic Projects",
    icon: <GraduationCap className="w-4 h-4" />,
    description: "Projects completed during my education"
  },
  {
    id: "freetime",
    label: "Personal Projects",
    icon: <Heart className="w-4 h-4" />,
    description: "Side projects and experiments"
  },
  {
    id: "associate",
    label: "Collaborative Work",
    icon: <Users className="w-4 h-4" />,
    description: "Team collaborations and contributions"
  }
];

const projects = {
  industry: [
    {
      id: 1,
      title: "Papex - AI Document Intelligence",
      type: "SaaS Product",
      description: "AI-powered document intelligence platform that extracts structured data from documents using OCR and machine learning. Features dynamic prompt generation and real-time processing with multi-tenant architecture.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "Node.js", "AI/ML", "OCR", "Docker"],
      features: [
        "OCR-based document processing",
        "AI-powered data extraction",
        "Dynamic prompt generation",
        "Real-time status tracking",
        "Multi-tenant architecture",
        "RESTful API design"
      ],
      projectUrl: "#",
      githubUrl: "#",
      status: "Production",
      team: "5 developers",
      duration: "6 months",
      role: "Lead Full Stack Developer"
    },
    {
      id: 2,
      title: "TaxiPik - Cab Booking System",
      type: "Mobile Application",
      description: "Comprehensive cab booking platform with real-time tracking, payment integration, and user-friendly interface for seamless ride booking experience. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      technologies: ["React.js", "Spring Boot", "PostgreSQL", "Payment Gateway", "Maps API", "WebSocket"],
      features: [
        "Real-time ride booking",
        "GPS location tracking",
        "Payment integration",
        "Driver-rider matching",
        "Ride history & analytics",
        "Push notifications"
      ],
      projectUrl: "#",
      githubUrl: "#",
      status: "Development",
      team: "4 developers",
      duration: "4 months",
      role: "Full Stack Developer"
    },
    {
      id: 3,
      title: "ATOM2 - Business Website",
      type: "Corporate Website",
      description: "Modern, responsive business website with enhanced UI/UX, interactive animations, and optimized performance for better user engagement and conversion rates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React.js", "Bootstrap", "Framer Motion", "Responsive Design", "SEO"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Contact form integration",
        "SEO optimization",
        "Performance optimization",
        "Analytics integration"
      ],
      projectUrl: "#",
      githubUrl: "#",
      status: "Completed",
      team: "3 developers",
      duration: "2 months",
      role: "Frontend Developer"
    }
  ],
  college: [
    {
      id: 4,
      title: "Jobby Application",
      type: "Job Portal",
      description: "Comprehensive job searching platform similar to Naukri, featuring job listings, application tracking, and user profile management with secure authentication.",
      image: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
      technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite", "JWT"],
      features: [
        "Job search & filtering",
        "Application tracking",
        "User authentication",
        "Profile management",
        "Company listings",
        "Resume upload"
      ],
      projectUrl: "https://jobbyapzp.ccbp.tech",
      githubUrl: "#",
      status: "Live",
      team: "Solo project",
      duration: "3 months",
      role: "Full Stack Developer"
    },
    {
      id: 5,
      title: "Nxt Watch - Video Platform",
      type: "Streaming Platform",
      description: "YouTube-like video streaming platform with user authentication, video categorization, and responsive design for optimal viewing experience across devices.",
      image: "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
      technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "SQLite", "Video API"],
      features: [
        "Video streaming",
        "User authentication",
        "Video categorization",
        "Search functionality",
        "Responsive design",
        "Playlist management"
      ],
      projectUrl: "https://nxtytwatch.ccbp.tech",
      githubUrl: "#",
      status: "Live",
      team: "Solo project",
      duration: "2 months",
      role: "Full Stack Developer"
    }
  ],
  freetime: [
    {
      id: 6,
      title: "Digital Library",
      type: "E-Library Platform",
      description: "Responsive e-commerce library application with Google Books API integration for comprehensive book search and management with modern UI design.",
      image: "https://www.institutefordigitaltransformation.org/wp-content/uploads/Digital-Library-scaled.jpeg",
      technologies: ["React.js", "Tailwind CSS", "Google Books API", "Local Storage"],
      features: [
        "Book search & discovery",
        "API integration",
        "Responsive design",
        "Book details & reviews",
        "User-friendly interface",
        "Wishlist functionality"
      ],
      projectUrl: "https://digillibrary.netlify.app/",
      githubUrl: "#",
      status: "Live",
      team: "Solo project",
      duration: "1 month",
      role: "Full Stack Developer"
    },
    {
      id: 7,
      title: "Weather Dashboard",
      type: "Web Application",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React.js", "Weather API", "Chart.js", "Geolocation", "CSS3"],
      features: [
        "Real-time weather data",
        "Location-based forecasts",
        "Interactive weather maps",
        "7-day forecast",
        "Weather alerts",
        "Data visualization"
      ],
      projectUrl: "#",
      githubUrl: "#",
      status: "Completed",
      team: "Solo project",
      duration: "2 weeks",
      role: "Frontend Developer"
    }
  ],
  associate: [
    {
      id: 8,
      title: "Dood Technologies Website",
      type: "Corporate Website",
      description: "Company's official website with modern design, responsive layout, and interactive elements. Collaborated with design team for optimal user experience.",
      image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744600592/Doods_Technolo_1_a70qfs.jpg",
      technologies: ["React.js", "Tailwind CSS", "AOS", "Responsive Design"],
      features: [
        "Modern responsive design",
        "Interactive animations",
        "Contact integration",
        "SEO optimized",
        "Fast loading",
        "Mobile-first approach"
      ],
      projectUrl: "https://doodstech.netlify.app/",
      githubUrl: "#",
      status: "Live",
      team: "3 developers",
      duration: "1 month",
      role: "Frontend Developer"
    },
    {
      id: 9,
      title: "Cyber Technologies Portal",
      type: "Business Platform",
      description: "Corporate website for technology company with service showcases, client testimonials, and modern design patterns. Team collaboration project.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRdblf3UxMKXKrQFHjBhqpyKtlu5ZwLQVmARk256YVRJa4VqzLY5lx-_b2i4LoerUjxg&usqp=CAU",
      technologies: ["React.js", "Tailwind CSS", "AOS", "Form Handling"],
      features: [
        "Service showcases",
        "Client testimonials",
        "Contact forms",
        "Responsive layout",
        "Performance optimized",
        "Cross-browser compatible"
      ],
      projectUrl: "https://01-demo-home.netlify.app/",
      githubUrl: "#",
      status: "Live",
      team: "2 developers",
      duration: "3 weeks",
      role: "Frontend Developer"
    }
  ]
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("industry");

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
            A comprehensive showcase of my work across different domains and collaborations
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card hover:bg-card/80 text-card-foreground border border-border"
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

        {/* Category Description */}
        <motion.div
          className="text-center mb-8"
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-muted-foreground">
            {projectCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </motion.div>

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
            {projects[activeCategory]?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
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

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Project Stats */}
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

                    {/* Role */}
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{project.role}</span>
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
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
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
                        className="flex-1"
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
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {(!projects[activeCategory] || projects[activeCategory].length === 0) && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              More projects in this category will be added soon.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;