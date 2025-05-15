import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Star } from 'lucide-react';
const AboutSnippet: React.FC = () => {
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12">
          {/* About Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate Digital Marketing & Graphic Design professional with over 5 years of experience helping businesses grow their online presence and create memorable brand identities.
            </p>
            <p className="text-gray-600 mb-8">
              My approach combines creativity with strategic thinking to deliver solutions that not only look good but also drive real business results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Briefcase className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">5+ Years</h4>
                  <p className="text-gray-600">Professional Experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Star className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">100+ Projects</h4>
                  <p className="text-gray-600">Successfully Completed</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-amber-100 rounded-lg">
                  <Award className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Multiple Awards</h4>
                  <p className="text-gray-600">For Excellence in Design</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-outline inline-flex items-center">
              Learn More About Me <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          {/* About Image */}
          <div className="md:w-1/2 animate-slide-up">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Md. Abdus Salam Working" className="rounded-lg shadow-xl w-full h-auto object-fill" />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-amber-500 font-bold text-lg">Passionate</h3>
                <p className="text-gray-700 text-sm">About Design & Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSnippet;