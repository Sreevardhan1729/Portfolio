"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollToSection } = useSmoothScroll();
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const renderThemeToggle = () => {
    if (!mounted) {
      return <div className="h-9 w-9" />; // Placeholder to prevent layout shift
    }
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    );
  };

  return (
    <motion.nav
      layout
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "top-4 mx-auto w-fit rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "top-0 w-full rounded-none bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "px-6" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="font-bold text-xl cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection("hero")}
          >
            Axon
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            {renderThemeToggle()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {renderThemeToggle()}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t dark:border-gray-800 ${
              isScrolled
                ? "bg-white/80 dark:bg-gray-900/80"
                : "bg-white dark:bg-gray-900"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
