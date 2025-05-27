import React from 'react';
import { ArrowRight, TrendingUp, Target, BarChart3, ChevronDown } from 'lucide-react';
const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mango Water Drop Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/70 to-yellow-900/80"></div>
        <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Water splash background" className="w-full h-full object-cover opacity-60" />
        {/* Animated water drops overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        {/* Floating animation particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-bounce" style={{
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" style={{
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-400/50 rounded-full animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-amber-300/40 rounded-full animate-bounce" style={{
          animationDelay: '0.5s',
          animationDuration: '3.5s'
        }}></div>
        </div>
      </div>
      
      <div className="container md:px-6 relative z-10 py-0 px-[16px] mx-0 rounded-none bg-black/[0.53]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
              <TrendingUp size={40} className="text-amber-400" />
            </div>
          </div>
          
          {/* Main Content - Horizontally Aligned */}
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your{' '}
              <span className="text-amber-400 relative">
                Digital Presence
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/50 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-amber-100 mb-6">
              Strategic Marketing & Creative Design Solutions
            </h2>
            
            <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Success in marketing requires a blend of creativity, analytical thinking, and relentless innovation. 
              Let's build your brand together and create something extraordinary.
            </p>
            
            {/* CTA Buttons - Horizontally Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => scrollToSection('portfolio')} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:backdrop-blur-md transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links - Horizontally Centered */}
        <div className="w-full flex justify-center mt-16">
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in max-w-4xl">
            {[{
            label: 'About Me',
            section: 'about'
          }, {
            label: 'Services',
            section: 'services'
          }, {
            label: 'Portfolio',
            section: 'portfolio'
          }, {
            label: 'Testimonials',
            section: 'testimonials'
          }, {
            label: 'Contact',
            section: 'contact'
          }].map((item, index) => <button key={item.section} onClick={() => scrollToSection(item.section)} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:text-amber-400 hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 border border-white/20 hover:border-amber-400/50" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {item.label}
              </button>)}
          </div>
        </div>

        {/* Scroll Indicator - Centered */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 opacity-80">Scroll Down</span>
            <div className="w-6 h-6 border-2 border-amber-400 rounded-full flex items-center justify-center">
              <ChevronDown size={16} className="text-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;