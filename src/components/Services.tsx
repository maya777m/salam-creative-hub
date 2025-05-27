import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Image, Monitor, Briefcase, TrendingUp, Users } from 'lucide-react';
const Services: React.FC = () => {
  const services = [{
    id: 1,
    title: 'Digital Marketing',
    icon: <Globe size={32} className="text-amber-500" />,
    description: 'Strategic digital marketing solutions to increase your online presence and engage with your target audience effectively.',
    features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Advertising'],
    color: 'from-blue-500 to-cyan-500'
  }, {
    id: 2,
    title: 'Graphic Design',
    icon: <Image size={32} className="text-amber-500" />,
    description: 'Creative visual solutions that capture your brand essence and communicate your message beautifully.',
    features: ['Brand Identity', 'Logo Design', 'Marketing Materials', 'Print Design'],
    color: 'from-purple-500 to-pink-500'
  }, {
    id: 3,
    title: 'Web Design',
    icon: <Monitor size={32} className="text-amber-500" />,
    description: 'Professional, responsive websites designed to provide an optimal user experience and drive conversions.',
    features: ['Responsive Design', 'UI/UX Design', 'E-commerce Sites', 'Landing Pages'],
    color: 'from-green-500 to-emerald-500'
  }, {
    id: 4,
    title: 'Brand Strategy',
    icon: <Briefcase size={32} className="text-amber-500" />,
    description: 'Comprehensive brand development strategies to help you stand out in a competitive market.',
    features: ['Brand Positioning', 'Market Research', 'Brand Guidelines', 'Messaging'],
    color: 'from-orange-500 to-red-500'
  }];
  return <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-amber-50 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20zM60 60h20v20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            I offer comprehensive creative solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => <div key={service.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed text-left">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>)}
                </ul>

                <Link to="/services" className="text-amber-500 font-medium hover:text-amber-600 transition-colors group-hover:translate-x-1 transform duration-300 inline-flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>)}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">30+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Link to="/services" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Services <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Services;