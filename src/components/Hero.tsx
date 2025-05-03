
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-4">
              I'm <span className="text-amber-500">Md. Abdus Salam</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Digital Marketing & Graphic Design Expert
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Delivering creative solutions that help businesses grow their online presence
              and stand out in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="btn-primary flex items-center justify-center">
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline flex items-center justify-center">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-amber-500 overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Md. Abdus Salam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
