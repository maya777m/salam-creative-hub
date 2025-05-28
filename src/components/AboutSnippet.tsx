
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Mail, Phone, MapPin, Calendar, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

const AboutSnippet: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, name: 'Facebook', color: 'text-blue-600', url: 'https://facebook.com/abdusmango' },
    { icon: <Instagram size={20} />, name: 'Instagram', color: 'text-pink-600', url: 'https://instagram.com/abdusmango' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', color: 'text-blue-700', url: 'https://linkedin.com/in/abdusmango' },
    { icon: <Youtube size={20} />, name: 'YouTube', color: 'text-red-600', url: 'https://youtube.com/@abdusmango' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background with 3D depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Simplified and resized */}
          <div className="animate-fade-in space-y-8">
            <div className="flex items-center mb-8 transform hover:scale-105 transition-all duration-500">
              <div 
                className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-6 transform hover:scale-110 transition-all duration-300"
                style={{ 
                  boxShadow: '0 8px 24px rgba(255,193,7,0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}
              >
                <Award size={32} className="text-white" />
              </div>
              <div>
                <h3 
                  className="text-xl font-bold text-gray-800"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  Social Media Growth Expert
                </h3>
                <p className="text-amber-600 text-sm font-medium">5+ Years Proven Results</p>
              </div>
            </div>

            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800 leading-tight transform hover:scale-105 transition-all duration-500"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            >
              I'm Abdus Mango, 
              <span className="text-amber-500 block mt-2">Your Social Media Success Partner</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed transform hover:scale-105 transition-all duration-500">
              I transform businesses through strategic social media marketing that generates real results. 
              From startups to established brands, I create viral content and build engaged communities.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed transform hover:scale-105 transition-all duration-500">
              With expertise in Instagram, Facebook, YouTube, and LinkedIn, I've helped 50+ businesses 
              achieve 300%+ growth in followers and engagement.
            </p>
            
            {/* Action Buttons with 3D effects */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="group bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 overflow-hidden relative"
                style={{ 
                  boxShadow: '0 8px 24px rgba(255,193,7,0.3)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                }}
              >
                <span className="relative z-10 flex items-center">
                  View My Work 
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center transform hover:-translate-y-2 hover:scale-105"
                style={{ 
                  boxShadow: '0 4px 16px rgba(255,193,7,0.2)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          {/* Right Image with 3D perspective and animated dashed circle */}
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative max-w-sm mx-auto">
              {/* Animated dashed circle with social media icons */}
              <div className="absolute inset-0 w-96 h-96 transform -translate-x-8 -translate-y-8">
                {/* Dashed circle border */}
                <svg className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgb(245 158 11)"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                    opacity="0.6"
                  />
                </svg>
                
                {/* Social media icons rotating around */}
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center ${social.color} hover:scale-125 transition-all duration-300 cursor-pointer border-2 border-amber-200 hover:border-amber-400`}
                    style={{
                      top: `${50 + 42 * Math.cos((index * 2 * Math.PI) / socialLinks.length)}%`,
                      left: `${50 + 42 * Math.sin((index * 2 * Math.PI) / socialLinks.length)}%`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Main Image with 3D perspective and transparent background effect */}
              <div 
                className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full transform hover:scale-105 transition-all duration-500 hover:rotate-2"
                style={{ 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 0 60px rgba(255,193,7,0.3)',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="bg-white p-2 rounded-full">
                  <img 
                    alt="Abdus Mango - Social Media Marketing Expert" 
                    src="/lovable-uploads/b8092708-7063-4930-8c58-14d8c8c95b13.jpg" 
                    className="w-80 h-80 rounded-full object-cover shadow-xl transform hover:scale-105 transition-all duration-500" 
                    style={{ 
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                      background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)'
                    }}
                  />
                </div>
                
                {/* Enhanced floating badge with 3D effect */}
                <div 
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-2xl animate-bounce transform hover:scale-110 transition-all duration-300"
                  style={{ 
                    boxShadow: '0 12px 32px rgba(255,193,7,0.4)',
                    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))'
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>5+</div>
                    <div className="text-white text-xs font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
