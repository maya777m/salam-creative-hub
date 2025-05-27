import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, TrendingUp, Mail, Phone, MapPin, Calendar } from 'lucide-react';
const AboutSnippet: React.FC = () => {
  return <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.2'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3Ccircle cx='53' cy='7' r='3'/%3E%3Ccircle cx='7' cy='53' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <Award size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Professional Excellence</h3>
                <p className="text-amber-600 text-sm text-left">5+ Years Experience</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight text-left">
              I'm Md. Abdus Salam, 
              <span className="text-amber-500"> Digital Marketing & Design Expert</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-left">
              I combine creativity and strategic thinking to help businesses grow their online presence and create memorable brand experiences. With over 5 years of experience in digital marketing and graphic design, I've helped numerous clients achieve their business goals.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-left">
              My passion lies in creating visually appealing designs that not only look good but also deliver results. I believe in a holistic approach to marketing and design, where every element works together to tell a compelling brand story.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <Mail size={18} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-left">Email</h4>
                  <p className="text-gray-600 text-sm">contact@salamcreative.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <Phone size={18} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-left">Phone</h4>
                  <p className="text-gray-600 text-sm">+1 (234) 567-890</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin size={18} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-left">Location</h4>
                  <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                  <Calendar size={18} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-left">Availability</h4>
                  <p className="text-gray-600 text-sm">Freelance Available</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View Portfolio <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1">
                Hire Me
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="relative max-w-md mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl transform rotate-6 shadow-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Md. Abdus Salam - Digital Marketing Expert" className="w-full h-80 object-cover rounded-lg shadow-md" />
                
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -right-4 bg-amber-500 p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-white text-xs">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <TrendingUp size={24} className="text-white" />
              </div>
              
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{
              animationDelay: '1s'
            }}>
                <Target size={20} className="text-white" />
              </div>
              
              <div className="absolute -bottom-2 left-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{
              animationDelay: '2s'
            }}>
                <Users size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSnippet;