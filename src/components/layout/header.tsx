"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants for mobile menu
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for menu items
  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Stagger animation for menu items
  const containerVariants: Variants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex h-10 items-center justify-between">
          {/* Logo/Site Title */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/b59ZnSHN/topiconic-eng-gold-1.png"
                alt="Topiconic"
                className="h-8 md:h-10 w-auto"
              />
              <span className="hidden font-bold text-xl sm:inline-block">
                
              </span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className="transition-colors hover:text-brand-primary"
            >
              Главная
            </Link>
            <Link 
              href="/#services" 
              className="transition-colors hover:text-brand-primary"
            >
              Услуги
            </Link>
            <Link 
              href="/about" 
              className="transition-colors hover:text-brand-primary"
            >
              О нас
            </Link>
            <Link 
              href="/price" 
              className="transition-colors hover:text-brand-primary"
            >
              Цены
            </Link>
            <Link 
              href="/#contacts" 
              className="transition-colors hover:text-brand-primary"
            >
              Контакты
            </Link>
          </nav>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Записаться Button - Desktop */}
            <button 
              className="hidden md:inline-flex items-center px-4 py-2 bg-brand-primary text-white text-sm font-medium rounded-lg hover:bg-brand-primary/90 transition-colors"
              onClick={() => window.open('https://wa.me/79937775559', '_blank')}
            >
              Записаться
            </button>
            
            {/* Mobile Navigation Button */}
            <motion.button 
              className="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground relative"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Top line */}
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                  animate={isMobileMenuOpen ? 
                    { rotate: 45, y: 6 } : 
                    { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ originX: "50%", originY: "50%" }}
                />
                {/* Middle line */}
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                  animate={isMobileMenuOpen ? 
                    { opacity: 0 } : 
                    { opacity: 1 }
                  }
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Bottom line */}
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
                  animate={isMobileMenuOpen ? 
                    { rotate: -45, y: -6 } : 
                    { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ originX: "50%", originY: "50%" }}
                />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.nav 
                className="flex flex-col space-y-2 py-4"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/" 
                    className="block px-2 py-2 text-sm font-medium transition-colors hover:text-brand-primary hover:bg-accent/50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Главная
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/#services" 
                    className="block px-2 py-2 text-sm font-medium transition-colors hover:text-brand-primary hover:bg-accent/50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Услуги
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/about" 
                    className="block px-2 py-2 text-sm font-medium transition-colors hover:text-brand-primary hover:bg-accent/50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    О нас
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/price" 
                    className="block px-2 py-2 text-sm font-medium transition-colors hover:text-brand-primary hover:bg-accent/50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Цены
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link 
                    href="/#contacts" 
                    className="block px-2 py-2 text-sm font-medium transition-colors hover:text-brand-primary hover:bg-accent/50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button 
                    className="w-full text-left px-2 py-2 text-sm font-medium bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.open('https://wa.me/79937775559', '_blank');
                    }}
                  >
                    Записаться
                  </button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 