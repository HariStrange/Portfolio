import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, User, Code, Briefcase, Award, FolderOpen, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "experience", "certificates", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "#about", label: "About", icon: <User className="w-4 h-4" /> },
    { href: "#skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { href: "#certificates", label: "Certificates", icon: <Award className="w-4 h-4" /> },
    { href: "#projects", label: "Projects", icon: <FolderOpen className="w-4 h-4" /> },
    { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl shadow-2xl border-b border-border/30 py-2 mx-4 mt-4 rounded-2xl"
          : "bg-transparent backdrop-blur-sm py-4"
      }`}
      style={{ 
        pointerEvents: 'auto',
        cursor: 'default'
      }}
    >
      <div className={`container mx-auto flex justify-between items-center px-6 ${isScrolled ? 'max-w-7xl' : ''}`}>
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">H</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">
            <a href="#home" onClick={() => handleNavClick("#home")}>Hariharan N</a>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`px-4 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all font-medium ${
                activeSection === item.href.slice(1) ? 'bg-primary/10 text-primary' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{item.label}</span>
            </motion.a>
          ))}
          
          {/* Theme Toggle */}
          <div className="flex items-center space-x-2 ml-4 px-3 py-2 rounded-full bg-accent/30 backdrop-blur-sm">
            <Sun className="h-4 w-4 text-foreground/60" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
            <Moon className="h-4 w-4 text-foreground/60" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-accent/30 backdrop-blur-sm">
            <Sun className="h-4 w-4" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
            <Moon className="h-4 w-4" />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-foreground relative z-[10000]"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-2xl"
          >
            <div className="container mx-auto py-6 px-6">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 py-4 px-4 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-xl transition-all font-medium ${
                      activeSection === item.href.slice(1) ? 'bg-primary/10 text-primary' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-lg">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;