import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Phone,
  Code,
  Database,
  Server,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useTheme } from "../contexts/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/HariStrange",
      label: "GitHub",
      color:
        "hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900",
      hoverScale: 1.1,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/natarajhari/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
      hoverScale: 1.1,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:natarajhari1@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white",
      hoverScale: 1.1,
    },
  ];

  const techStack = [
    { icon: <Code className="w-5 h-5" />, label: "Frontend", tech: "React.js" },
    {
      icon: <Server className="w-5 h-5" />,
      label: "Backend",
      tech: "Spring Boot",
    },
    {
      icon: <Database className="w-5 h-5" />,
      label: "Database",
      tech: "PostgreSQL",
    },
  ];

  // Theme-responsive blob colors
  const blobColorClass =
    theme === "dark"
      ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20"
      : "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20";

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      {/* Theme-Responsive Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute -top-40 -right-40 w-80 h-80 ${blobColorClass} rounded-full blur-3xl border`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute -bottom-40 -left-40 w-80 h-80 ${blobColorClass} rounded-full blur-3xl border`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${blobColorClass} rounded-full blur-3xl border`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-20 right-20 w-60 h-60 ${blobColorClass} rounded-full blur-3xl border`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-20 w-72 h-72 ${blobColorClass} rounded-full blur-3xl border`}
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Shows on top for mobile/tablet */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400 "
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-cyan-300 "
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ borderStyle: "dashed" }}
              />

              {/* Profile Image */}
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-background"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
                  alt="Hariharan N"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full shadow-lg "
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full shadow-lg "
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-7 w-4 h-4 bg-cyan-400 rounded-full shadow-lg "
                animate={{
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-10 w-4 h-4 bg-cyan-400 rounded-full shadow-lg "
                animate={{
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Better alignment and spacing */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1 lg:pl-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="text-sm px-4 py-2">
                Available for opportunities
              </Badge>
              <div>
                <p className="text-muted-foreground text-lg mb-2">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hariharan N
                </h1>
                <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-8760370499</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Salem, Tamil Nadu</span>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Passionate Full Stack Developer with expertise in building
              scalable web applications using Spring Boot, React.js, and
              PostgreSQL. Currently contributing to innovative projects at{" "}
              <span className="text-foreground font-semibold">
                Sholas Technologies
              </span>
              .
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {techStack.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      {item.icon}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold">{item.tech}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1YNlw8BTHAs48f08mKO5qOTcBxoiPtpyb"
                  download
                  className="flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </Button>

              <div className="flex items-center space-x-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 transition-all duration-300 ${link.color} shadow-md hover:shadow-lg`}
                    whileHover={{
                      scale: link.hoverScale,
                      y: -3,
                      rotate: [0, -5, 5, 0],
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1 + index * 0.1,
                      hover: { duration: 0.3 },
                    }}
                  >
                    <motion.div transition={{ duration: 0.6 }}>
                      {link.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
