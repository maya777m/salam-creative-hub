
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
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.2'%3E%3Ccircle cx='7' cy='7' r='3'/%3E%3Ccircle cx='53' cy='53' r='3'/%3E%3Ccircle cx='53' cy='7' r='3'/%3E%3Ccircle cx='7' cy='53' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Award size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Social Media Growth Expert</h3>
                <p className="text-amber-600 text-sm font-medium">5+ Years Proven Results</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
              I'm Abdus Mango, 
              <span className="text-amber-500 block mt-2">Your Social Media Success Partner</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              I specialize in transforming businesses through strategic social media marketing that generates real results. From startups to established brands, I help create viral content and build engaged communities.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              With expertise in Instagram growth, Facebook advertising, YouTube optimization, and LinkedIn marketing, I've helped 50+ businesses achieve 300%+ growth in followers and engagement.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Mail size={20} className="text-amber-600" />, title: 'Email', info: 'contact.mdabdussalam@gmail.com' },
                { icon: <Phone size={20} className="text-amber-600" />, title: 'Phone', info: '+880 1916 123456' },
                { icon: <MapPin size={20} className="text-amber-600" />, title: 'Location', info: 'Dhaka, Bangladesh' },
                { icon: <Calendar size={20} className="text-amber-600" />, title: 'Availability', info: 'Available for Projects' }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 group transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-amber-200 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-gray-600 text-xs">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                View My Work <ArrowRight size={20} className="ml-2" />
              </Link>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          {/* Right Image with Rotating Social Icons */}
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative max-w-sm mx-auto">
              {/* Rotating Social Media Icons */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center ${social.color} hover:scale-110 transition-transform duration-300 cursor-pointer hover:shadow-xl`}
                    style={{
                      top: `${50 + 45 * Math.cos((index * 2 * Math.PI) / socialLinks.length)}%`,
                      left: `${50 + 45 * Math.sin((index * 2 * Math.PI) / socialLinks.length)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full shadow-2xl animate-pulse">
                <div className="bg-white p-2 rounded-full">
                  <img 
                    alt="Abdus Mango - Social Media Marketing Expert" 
                    src="/lovable-uploads/b8092708-7063-4930-8c58-14d8c8c95b13.jpg" 
                    className="w-80 h-80 rounded-full object-cover shadow-xl" 
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-white text-xs font-medium">Years</div>
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
