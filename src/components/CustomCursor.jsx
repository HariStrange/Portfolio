import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [trail, setTrail] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail with smooth interpolation
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 12)];
        return newTrail;
      });
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      const element = e.target;
      
      // Enhanced cursor variants based on element type
      if (element.tagName === 'A' || element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
        setCursorVariant('button');
      } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        setCursorVariant('input');
      } else if (element.classList.contains('photo-gallery')) {
        setCursorVariant('grab');
      } else if (element.classList.contains('cursor-pointer')) {
        setCursorVariant('pointer');
      } else {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      if (cursorVariant === 'grab') setCursorVariant('grabbing');
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
      if (cursorVariant === 'grabbing') setCursorVariant('grab');
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer, .photo-gallery');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorVariant]);

  const getCursorConfig = () => {
    const baseConfig = {
      default: { 
        size: 6, 
        ring: 32, 
        color: theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600',
        ringColor: theme === 'dark' ? 'border-blue-400/40' : 'border-blue-600/40'
      },
      button: { 
        size: 12, 
        ring: 48, 
        color: theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600',
        ringColor: theme === 'dark' ? 'border-emerald-400/60' : 'border-emerald-600/60'
      },
      input: { 
        size: 3, 
        ring: 24, 
        color: theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600',
        ringColor: theme === 'dark' ? 'border-purple-400/50' : 'border-purple-600/50'
      },
      grab: { 
        size: 8, 
        ring: 36, 
        color: theme === 'dark' ? 'bg-orange-400' : 'bg-orange-600',
        ringColor: theme === 'dark' ? 'border-orange-400/50' : 'border-orange-600/50'
      },
      grabbing: { 
        size: 10, 
        ring: 28, 
        color: theme === 'dark' ? 'bg-red-400' : 'bg-red-600',
        ringColor: theme === 'dark' ? 'border-red-400/60' : 'border-red-600/60'
      },
      pointer: { 
        size: 8, 
        ring: 40, 
        color: theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600',
        ringColor: theme === 'dark' ? 'border-cyan-400/50' : 'border-cyan-600/50'
      },
      hover: { 
        size: 6, 
        ring: 36, 
        color: theme === 'dark' ? 'bg-pink-400' : 'bg-pink-600',
        ringColor: theme === 'dark' ? 'border-pink-400/40' : 'border-pink-600/40'
      }
    };
    
    return baseConfig[cursorVariant] || baseConfig.default;
  };

  const config = getCursorConfig();

  return (
    <>
      {/* Enhanced Trail Effect */}
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full ${config.color}`}
          style={{
            width: Math.max(2, config.size - index * 0.5),
            height: Math.max(2, config.size - index * 0.5),
            opacity: Math.max(0.05, 0.6 - index * 0.05),
            mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
          }}
          animate={{
            x: position.x - (Math.max(2, config.size - index * 0.5) / 2),
            y: position.y - (Math.max(2, config.size - index * 0.5) / 2),
          }}
          transition={{
            type: "spring",
            stiffness: 1000 - index * 50,
            damping: 50 + index * 5,
            mass: 0.1,
          }}
        />
      ))}

      {/* Main cursor dot with enhanced design */}
      <motion.div
        className={`fixed top-0 left-0 ${config.color} pointer-events-none z-[10001] shadow-lg`}
        style={{
          width: config.size,
          height: config.size,
          borderRadius: cursorVariant === 'input' ? '2px' : '50%',
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
        }}
        animate={{
          x: mousePosition.x - config.size / 2,
          y: mousePosition.y - config.size / 2,
          scale: isClicking ? 0.8 : 1,
          rotate: cursorVariant === 'grab' ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
          mass: 0.5,
        }}
      />
      
      {/* Outer ring with enhanced styling */}
      <motion.div
        className={`fixed top-0 left-0 border-2 ${config.ringColor} rounded-full pointer-events-none z-[10000]`}
        style={{
          width: config.ring,
          height: config.ring,
          backdropFilter: 'blur(1px)',
        }}
        animate={{
          x: mousePosition.x - config.ring / 2,
          y: mousePosition.y - config.ring / 2,
          scale: isClicking ? 0.7 : isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.8 : 0.4,
          rotate: cursorVariant === 'button' ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.2,
        }}
      />
      
      {/* Special effects for different cursor states */}
      {cursorVariant === 'button' && (
        <motion.div
          className={`fixed top-0 left-0 border ${config.ringColor} rounded-full pointer-events-none z-[9999]`}
          style={{
            width: config.ring + 20,
            height: config.ring + 20,
          }}
          animate={{
            x: mousePosition.x - (config.ring + 20) / 2,
            y: mousePosition.y - (config.ring + 20) / 2,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Magnetic effect for special interactions */}
      {(cursorVariant === 'grab' || cursorVariant === 'grabbing') && (
        <motion.div
          className={`fixed top-0 left-0 ${config.color} rounded-full pointer-events-none z-[9997] blur-sm`}
          style={{
            width: config.ring * 1.5,
            height: config.ring * 1.5,
            opacity: 0.1,
          }}
          animate={{
            x: mousePosition.x - (config.ring * 1.5) / 2,
            y: mousePosition.y - (config.ring * 1.5) / 2,
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.3,
          }}
        />
      )}

      {/* Text indicator for special states */}
      {cursorVariant === 'grab' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10002] text-xs font-medium px-2 py-1 rounded bg-background/80 text-foreground"
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          Drag to navigate
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;