
import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Primary color background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-yellow-900/20 to-black"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-400/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-30 py-32 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Content with 3D effects */}
          <div className="animate-fade-in space-y-8">
            {/* Bold two-line title */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
              style={{ 
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,193,7,0.3)',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.5))'
              }}
            >
              <span className="block transform hover:scale-105 transition-transform duration-500">
                Grow Your Social Media
              </span>
              <span className="block text-amber-400 relative transform hover:scale-105 transition-transform duration-500">
                Empire Today
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-amber-100 mb-8 transform hover:scale-105 transition-all duration-500"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            >
              Expert Social Media Marketing & Creative Design Solutions
            </h2>
            
            {/* Comprehensive summary text */}
            <p 
              className="text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed text-lg md:text-xl lg:text-2xl px-4 transform hover:scale-105 transition-all duration-500"
              style={{ 
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            >
              Transform your brand into a social media powerhouse with proven strategies that generate 
              real followers, engagement, and sales. Specializing in Instagram growth, Facebook advertising, 
              YouTube optimization, and LinkedIn marketing. Join 50+ successful businesses that have achieved 
              300%+ growth with my strategic approach to social media marketing and creative design solutions.
            </p>
            
            {/* Call to Action Button with 3D effects */}
            <div className="mb-16">
              <button
                onClick={() => scrollToSection('#about')}
                className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-12 py-6 rounded-full font-bold text-lg md:text-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 inline-flex items-center overflow-hidden"
                style={{ 
                  boxShadow: '0 10px 30px rgba(255,193,7,0.4), 0 0 40px rgba(255,193,7,0.2)',
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Start Growing Today
                  <Play size={24} className="ml-3 transform group-hover:scale-110 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with 3D effect */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white hover:text-amber-400 transition-all duration-300 flex flex-col items-center group transform hover:scale-110"
            style={{ 
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
