import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { Code, Database, Server, Globe, Zap, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const AboutUs = () => {
  // Professional images for the gallery
  const galleryImages = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg",
      alt: "Professional headshot",
      caption: "Professional Profile",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517886/IMG_20231001_143914_468_ncgcun.webp",
      alt: "Workspace setup",
      caption: "Development Environment",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1752150228/4_aihj3k.jpg",
      alt: "Conference presentation",
      caption: "Tech Conference",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1752150228/5_kjizfb.jpg",
      alt: "Team collaboration",
      caption: "Team Collaboration",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1752150228/3_lrhzua.jpg",
      alt: "Code review session",
      caption: "Code Review",
    },
  ];

  const skills = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Frontend Development",
      desc: "React.js, JavaScript, Tailwind CSS",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend Development",
      desc: "Spring Boot, Node.js, Express.js",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Database Management",
      desc: "PostgreSQL, MySQL, SQLite",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Full Stack Solutions",
      desc: "End-to-end application development",
    },
  ];

  const achievements = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI Integration",
      desc: "OCR & ML-powered solutions",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Team Leadership",
      desc: "Leading development teams",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Project Delivery",
      desc: "On-time project completion",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Problem Solving",
      desc: "Complex technical solutions",
    },
  ];

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
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies and AI integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Gallery - Pure Swiper */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-lg mx-auto">
              <Swiper
                modules={[Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                spaceBetween={30}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    effect: "slide",
                    coverflowEffect: {
                      rotate: 0,
                      stretch: 0,
                      depth: 0,
                      modifier: 1,
                      slideShadows: false,
                    },
                  },
                  768: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    effect: "coverflow",
                    coverflowEffect: {
                      rotate: 30,
                      stretch: 0,
                      depth: 80,
                      modifier: 1,
                      slideShadows: true,
                    },
                  },
                  1024: {
                    slidesPerView: "auto",
                    spaceBetween: 40,
                    effect: "coverflow",
                    coverflowEffect: {
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    },
                  },
                }}
                className="about-swiper"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.id} className="!w-80 !h-auto">
                    <div className="relative group cursor-grab active:cursor-grabbing">
                      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="secondary" className="px-4 py-2">
                  Full Stack Developer
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  AI Enthusiast
                </Badge>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate{" "}
                  <span className="text-foreground font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  specializing in scalable web applications. Currently contributing to innovative AI-powered solutions at{" "}
                  <span className="text-foreground font-semibold">
                    Sholas Technologies
                  </span>
                  .
                </p>

                <p>
                  My expertise spans React.js, Spring Boot, and PostgreSQL, with a focus on creating seamless user experiences and robust backend architectures.
                </p>

                <p>
                  I specialize in AI integration, real-time applications, and modern web technologies that drive business growth and user engagement.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {[
                  "React.js",
                  "Spring Boot",
                  "PostgreSQL",
                  "Node.js",
                  "AI/ML",
                  "Docker",
                ].map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Core Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {skill.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center text-secondary-foreground">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;