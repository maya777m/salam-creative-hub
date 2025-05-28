
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Image, Monitor, Briefcase, TrendingUp, Users, Award, Target } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Social Media Marketing',
      icon: <Globe size={32} className="text-amber-500" />,
      description: 'Strategic social media campaigns across Instagram, Facebook, YouTube, and LinkedIn to boost engagement and drive growth.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Creative Design',
      icon: <Image size={32} className="text-amber-500" />,
      description: 'Eye-catching visual content and brand materials that capture attention and communicate your message effectively.',
      features: ['Social Media Graphics', 'Logo Design', 'Brand Identity', 'Marketing Materials'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Content Creation',
      icon: <Monitor size={32} className="text-amber-500" />,
      description: 'Engaging content that tells your brand story and connects with your audience across all platforms.',
      features: ['Video Content', 'Photography', 'Copywriting', 'Content Planning'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      icon: <Briefcase size={32} className="text-amber-500" />,
      description: 'Comprehensive brand development strategies to establish a strong online presence and competitive advantage.',
      features: ['Brand Positioning', 'Market Research', 'Competitor Analysis', 'Growth Strategy'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    { icon: <TrendingUp size={32} className="text-amber-600" />, number: '100+', label: 'Projects Completed', bg: 'bg-amber-100' },
    { icon: <Users size={32} className="text-blue-600" />, number: '50+', label: 'Happy Clients', bg: 'bg-blue-100' },
    { icon: <Award size={32} className="text-green-600" />, number: '5+', label: 'Years Experience', bg: 'bg-green-100' },
    { icon: <Target size={32} className="text-purple-600" />, number: '95%', label: 'Success Rate', bg: 'bg-purple-100' }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-amber-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">My Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Comprehensive social media marketing and creative design solutions to elevate your brand and drive meaningful results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-left">
                  <Link 
                    to="/services" 
                    className="text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`w-20 h-20 ${achievement.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{achievement.number}</div>
              <p className="text-gray-600 font-medium">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Grow Your Brand?</h3>
            <p className="text-black/80 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
              Let's create a winning social media strategy that drives real results for your business.
            </p>
            <Link 
              to="/contact" 
              className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Start Your Project <ArrowRight size={20} className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
