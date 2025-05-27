
import React from 'react';
import { ArrowRight, Award, Briefcase, Star } from 'lucide-react';

const AboutSnippet: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-16">
          {/* About Text Content */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">About Me</h2>
            <p className="text-gray-600 mb-6 text-center lg:text-left">
              I'm a passionate Digital Marketing & Graphic Design professional with over 5 years of experience helping businesses grow their online presence and create memorable brand identities.
            </p>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              My approach combines creativity with strategic thinking to deliver solutions that not only look good but also drive real business results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start justify-center sm:justify-start">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Briefcase className="text-amber-500" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold mb-1">5+ Years</h4>
                  <p className="text-gray-600">Professional Experience</p>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Star className="text-amber-500" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold mb-1">100+ Projects</h4>
                  <p className="text-gray-600">Successfully Completed</p>
                </div>
              </div>
              
              <div className="flex items-start justify-center sm:justify-start sm:col-span-2 sm:justify-center">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Award className="text-amber-500" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-bold mb-1">Multiple Awards</h4>
                  <p className="text-gray-600">For Excellence in Design</p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center"
              >
                Learn More About Me <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
          
          {/* About Image */}
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <div className="w-full h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <Award size={120} className="text-amber-500" />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
                  <h3 className="font-bold text-lg">Passionate</h3>
                  <p className="text-sm opacity-90">About Design & Marketing</p>
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
