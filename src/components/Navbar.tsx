
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-xl py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-bold text-2xl md:text-3xl flex items-center group transition-all duration-300"
          >
            <span className="text-white group-hover:text-amber-400 transition-colors duration-300">
              Abdus
            </span>
            <span className="ml-2 text-amber-500 group-hover:text-amber-300 transition-colors duration-300">
              Mango
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isActive(item.path) 
                    ? 'text-amber-400' 
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-amber-400 transition-colors duration-300 hover:bg-white/10 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-6 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl animate-fade-in border border-amber-500/20">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-amber-500/20 hover:transform hover:scale-105 ${
                    isActive(item.path) 
                      ? 'text-amber-400 bg-amber-500/10' 
                      : 'text-white hover:text-amber-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
