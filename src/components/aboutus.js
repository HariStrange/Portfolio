import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Zap, Users, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragThreshold = 50;

  const images = [
    {
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg",
      alt: "Professional headshot"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      alt: "Workspace setup"
    },
    {
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&crop=face",
      alt: "Coding session"
    },
    {
      url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&crop=face",
      alt: "Team collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop&crop=face",
      alt: "Conference presentation"
    }
  ];

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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragEndX = e.changedTouches[0].clientX;
    const dragDistance = dragStartX.current - dragEndX;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragEndX = e.clientX;
    const dragDistance = dragStartX.current - dragEndX;
    
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

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
          {/* Photo Gallery Section */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
                <CardContent className="p-0">
                  <div 
                    className="photo-gallery relative w-full h-[500px] cursor-grab active:cursor-grabbing"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => setIsDragging(false)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex].url}
                        alt={images[currentImageIndex].alt}
                        className="w-full h-full object-cover object-top"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        draggable={false}
                      />
                    </AnimatePresence>
                    
                    {/* Navigation Buttons */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? "bg-primary w-8" 
                              : "bg-background/50"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <Badge variant="outline" className="text-sm badge-light">
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
              <Card className="h-full professional-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
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