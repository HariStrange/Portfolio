import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 8)];
        return newTrail;
      });
    };

    const handleMouseEnter = (e) => {
      setIsHovering(true);
      const element = e.target;
      
      // Check for specific elements and set cursor variant
      if (element.tagName === 'A' || element.tagName === 'BUTTON' || element.getAttribute('role') === 'button') {
        setCursorVariant('button');
      } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        setCursorVariant('input');
      } else {
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer');
    
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
  }, []);

  const getCursorSize = () => {
    switch (cursorVariant) {
      case 'button': return { main: 8, ring: 40 };
      case 'input': return { main: 2, ring: 20 };
      case 'hover': return { main: 6, ring: 30 };
      default: return { main: 4, ring: 24 };
    }
  };

  const getCursorColor = () => {
    switch (cursorVariant) {
      case 'button': return 'bg-blue-500';
      case 'input': return 'bg-green-500';
      case 'hover': return 'bg-purple-500';
      default: return 'bg-primary';
    }
  };

  const sizes = getCursorSize();
  const colorClass = getCursorColor();

  return (
    <>
      {/* Trail Effect */}
      {trail.map((position, index) => (
        <motion.div
          key={index}
          className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full ${colorClass}`}
          style={{
            width: Math.max(2, sizes.main - index),
            height: Math.max(2, sizes.main - index),
            opacity: Math.max(0.1, 0.8 - index * 0.1),
          }}
          animate={{
            x: position.x - (Math.max(2, sizes.main - index) / 2),
            y: position.y - (Math.max(2, sizes.main - index) / 2),
          }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 50,
            mass: 0.1,
          }}
        />
      ))}

      {/* Main cursor dot */}
      <motion.div
        className={`fixed top-0 left-0 ${colorClass} rounded-full pointer-events-none z-[10001] mix-blend-difference`}
        style={{
          width: sizes.main,
          height: sizes.main,
        }}
        animate={{
          x: mousePosition.x - sizes.main / 2,
          y: mousePosition.y - sizes.main / 2,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className={`fixed top-0 left-0 border-2 border-primary/40 rounded-full pointer-events-none z-[10000]`}
        style={{
          width: sizes.ring,
          height: sizes.ring,
        }}
        animate={{
          x: mousePosition.x - sizes.ring / 2,
          y: mousePosition.y - sizes.ring / 2,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      
      {/* Pulse effect for special interactions */}
      {cursorVariant === 'button' && (
        <motion.div
          className="fixed top-0 left-0 border border-blue-500/30 rounded-full pointer-events-none z-[9999]"
          style={{
            width: sizes.ring + 20,
            height: sizes.ring + 20,
          }}
          animate={{
            x: mousePosition.x - (sizes.ring + 20) / 2,
            y: mousePosition.y - (sizes.ring + 20) / 2,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Magnetic effect for buttons */}
      {cursorVariant === 'button' && (
        <motion.div
          className="fixed top-0 left-0 bg-blue-500/20 rounded-full pointer-events-none z-[9998] blur-sm"
          style={{
            width: sizes.ring * 2,
            height: sizes.ring * 2,
          }}
          animate={{
            x: mousePosition.x - sizes.ring,
            y: mousePosition.y - sizes.ring,
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.2,
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;