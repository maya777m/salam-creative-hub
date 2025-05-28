
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-amber-500/20' 
        : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with proper sizing and 3D effect */}
          <Link 
            to="/" 
            className="font-bold text-lg md:text-xl flex items-center group transition-all duration-500 transform hover:scale-105"
            style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 4px 8px rgba(255, 193, 7, 0.3))'
            }}
          >
            <span className="text-white group-hover:text-amber-400 transition-all duration-300 transform group-hover:scale-110">
              Abdus
            </span>
            <span className="ml-2 text-amber-500 group-hover:text-amber-300 transition-all duration-300 transform group-hover:scale-110">
              Mango
            </span>
          </Link>

          {/* Desktop Navigation with 3D effects */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg ${
                  isActive(item.path) 
                    ? 'text-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/20' 
                    : 'text-white hover:text-amber-400 hover:bg-amber-500/10'
                }`}
                style={{ 
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full shadow-lg shadow-amber-400/50"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle with 3D effect */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-110 shadow-lg hover:shadow-amber-500/30"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with enhanced 3D effects */}
        {isOpen && (
          <div className="md:hidden mt-4 py-6 bg-black/95 backdrop-blur-md rounded-xl shadow-2xl animate-fade-in border border-amber-500/20 transform-gpu">
            <div className="flex flex-col space-y-4 px-6">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-amber-500/20 hover:transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 ${
                    isActive(item.path) 
                      ? 'text-amber-400 bg-amber-500/10 shadow-amber-500/20' 
                      : 'text-white hover:text-amber-400'
                  }`}
                  style={{ 
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
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
