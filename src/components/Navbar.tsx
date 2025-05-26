import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-violet-700">
          <Code className="h-6 w-6" />
          <span>Sagar Koshti</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-slate-700 hover:text-violet-700 transition-colors"
            >
              {item}
            </button>
          ))}

          {/* Resume Download Button */}
          <a
            href="/Sagar_Koshti_Resume.pdf" // Change this to your actual resume path or URL
            download
            className="ml-4 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden flex flex-col space-y-4">
          {['home', 'about', 'portfolio', 'services', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-slate-700 hover:text-violet-700 transition-colors text-left py-2"
            >
              {item}
            </button>
          ))}

          {/* Resume Button in Mobile Menu */}
          <a
            href="/resume.pdf"
            download
            className="mt-2 text-center bg-violet-600 text-white rounded-md px-4 py-2 hover:bg-violet-700 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
