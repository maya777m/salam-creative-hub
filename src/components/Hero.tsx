import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Target, BarChart3, ChevronDown, Play, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    id: 1,
    title: "Transform Your Digital Presence",
    subtitle: "Strategic Marketing & Creative Design Solutions",
    description: "Success in marketing requires a blend of creativity, analytical thinking, and relentless innovation. Let's build your brand together and create something extraordinary.",
    backgroundImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    icon: <TrendingUp size={40} className="text-amber-400" />,
    primaryAction: {
      text: "View My Work",
      link: "/portfolio"
    },
    secondaryAction: {
      text: "Get In Touch",
      link: "/contact"
    }
  }, {
    id: 2,
    title: "Creative Solutions That Drive Results",
    subtitle: "Graphic Design & Brand Identity Expertise",
    description: "From logo design to complete brand identities, I create visual solutions that capture your essence and resonate with your audience. Every design tells a story.",
    backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    icon: <Target size={40} className="text-amber-400" />,
    primaryAction: {
      text: "View Portfolio",
      link: "/portfolio"
    },
    secondaryAction: {
      text: "Start Project",
      link: "/contact"
    }
  }, {
    id: 3,
    title: "Data-Driven Marketing Excellence",
    subtitle: "SEO, Social Media & Content Strategy",
    description: "Boost your online visibility with proven marketing strategies. I help businesses increase traffic, engagement, and conversions through strategic digital marketing.",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    icon: <BarChart3 size={40} className="text-amber-400" />,
    primaryAction: {
      text: "See Results",
      link: "/testimonials"
    },
    secondaryAction: {
      text: "Get Quote",
      link: "/contact"
    }
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentSlideData = slides[currentSlide];
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Mango Water Drop Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/70 to-yellow-900/80 z-10"></div>
        <img src={currentSlideData.backgroundImage} alt="Background" className="w-full h-full object-cover opacity-60 transition-opacity duration-1000" />
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400/40 rounded-full animate-bounce" style={{
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-yellow-400/30 rounded-full animate-bounce" style={{
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-amber-300/40 rounded-full animate-bounce" style={{
          animationDelay: '0.5s',
          animationDuration: '3.5s'
        }}></div>
        </div>
      </div>
      
      <div className="container mx-auto md:px-6 relative z-30 py-0 px-[16px]">
        <div className="max-w-5xl mx-auto">
          {/* Slide Navigation Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-3">
              {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white/70'}`} />)}
            </div>
          </div>

          {/* Main Content - Horizontally Centered */}
          <div className="text-center animate-fade-in">
            {/* Animated Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
                {currentSlideData.icon}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-center lg:text-5xl">
              {currentSlideData.title.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-amber-400 relative">
                {currentSlideData.title.split(' ').slice(2).join(' ')}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/50 rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-amber-100 mb-6 text-center lg:text-3xl">
              {currentSlideData.subtitle}
            </h2>
            
            <p className="text-gray-200 mb-8 max-w-3xl leading-relaxed text-lg px-[28px] py-0 my-[20px] mx-[138px] text-center">
              {currentSlideData.description}
            </p>
            
            {/* CTA Buttons - Horizontally Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to={currentSlideData.primaryAction.link} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
                {currentSlideData.primaryAction.text}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to={currentSlideData.secondaryAction.link} className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:backdrop-blur-md transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
                {currentSlideData.secondaryAction.text}
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Navigation Links - Horizontally Centered */}
        <div className="w-full flex justify-center mt-8">
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

        {/* Scroll Indicator - Perfectly Centered */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
          
        </div>
      </div>
    </section>;
};
export default Hero;