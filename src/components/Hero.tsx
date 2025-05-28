
import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Transform Your Social Media Presence",
      subtitle: "Expert Social Media Marketing Solutions",
      description: "Boost your brand's online visibility with strategic social media campaigns that drive engagement, increase followers, and convert audiences into loyal customers.",
      backgroundImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      primaryAction: {
        text: "Start Your Campaign",
        link: "#contact"
      }
    },
    {
      id: 2,
      title: "Creative Design That Converts",
      subtitle: "Professional Graphic Design & Brand Identity",
      description: "Stand out from the competition with stunning visual content, logos, and brand materials that capture your essence and resonate with your target audience.",
      backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      primaryAction: {
        text: "View My Designs",
        link: "#portfolio"
      }
    },
    {
      id: 3,
      title: "Data-Driven Marketing Results",
      subtitle: "Analytics & Performance Optimization",
      description: "Maximize your ROI with proven marketing strategies backed by data analysis, performance tracking, and continuous optimization for better results.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      primaryAction: {
        text: "See Results",
        link: "#testimonials"
      }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-amber-900/60 to-black/80 z-10"></div>
        <img 
          src={currentSlideData.backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105" 
        />
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 z-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-amber-400/30 rounded-full animate-bounce`}
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${15 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i * 0.5)}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 bg-black/30 hover:bg-amber-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 bg-black/30 hover:bg-amber-500/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="container mx-auto px-4 md:px-6 relative z-30 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slide Navigation Dots */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'bg-amber-400 scale-125 shadow-lg shadow-amber-400/50' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {currentSlideData.title.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="text-amber-400 relative inline-block">
                {currentSlideData.title.split(' ').slice(3).join(' ')}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/60 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-amber-100 mb-8">
              {currentSlideData.subtitle}
            </h2>
            
            <p className="text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
              {currentSlideData.description}
            </p>
            
            {/* CTA Button */}
            <div className="mb-16">
              <button
                onClick={() => scrollToSection(currentSlideData.primaryAction.link)}
                className="bg-amber-500 hover:bg-amber-600 text-black px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center"
              >
                {currentSlideData.primaryAction.text}
                <Play size={20} className="ml-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white hover:text-amber-400 transition-colors duration-300 flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Quick Navigation Section Below Hero */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-8 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { label: 'About Me', section: '#about' },
              { label: 'Services', section: '#services' },
              { label: 'Portfolio', section: '#portfolio' },
              { label: 'Testimonials', section: '#testimonials' },
              { label: 'Contact', section: '#contact' }
            ].map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="px-6 py-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:text-amber-400 hover:bg-amber-500/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20 hover:border-amber-400/50 text-sm md:text-base"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
