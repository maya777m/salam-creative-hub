
import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Target, BarChart3, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Hero: React.FC = () => {
  const heroSlides = [
    {
      title: "Transform Your <span class='text-amber-500'>Digital Presence</span>",
      subtitle: "Strategic Marketing Solutions",
      description: "Success in marketing requires a blend of creativity, analytical thinking, and relentless innovation. Let's build your brand together.",
      icon: <TrendingUp size={64} className="text-amber-500" />
    },
    {
      title: "Creative <span class='text-amber-500'>Design Excellence</span>",
      subtitle: "Visual Communication That Works",
      description: "Great design is not just about aesthetics; it's about solving problems and creating experiences that resonate with your audience.",
      icon: <BarChart3 size={64} className="text-amber-500" />
    },
    {
      title: "Achieve <span class='text-amber-500'>Measurable Results</span>",
      subtitle: "Data-Driven Marketing Approach",
      description: "In the world of digital marketing, what gets measured gets improved. Your success is defined by results, not just activities.",
      icon: <Target size={64} className="text-amber-500" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source
            src="https://cdn.pixabay.com/vimeo/476894/water-drop-476894.mp4?width=1280&hash=d4f8a0c5b2c8f1a7e3b9d6c4a8f2e5b1"
            type="video/mp4"
          />
          {/* Fallback gradient if video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900"></div>
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="flex flex-col items-center justify-center text-center px-4">
                  <div className="mb-8 animate-fade-in">
                    {slide.icon}
                  </div>
                  <div className="animate-fade-in">
                    <h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" 
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => scrollToSection('portfolio')}
                        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                      >
                        View My Work
                        <ArrowRight size={18} className="ml-2" />
                      </button>
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                      >
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="right-2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          </div>
        </Carousel>

        {/* Quick Navigation Links */}
        <div className="w-full flex justify-center mt-12">
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <button onClick={() => scrollToSection('about')} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 hover:bg-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
              About Me
            </button>
            <button onClick={() => scrollToSection('services')} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 hover:bg-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 hover:bg-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 hover:bg-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-amber-500 hover:bg-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
              Contact
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="text-amber-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
