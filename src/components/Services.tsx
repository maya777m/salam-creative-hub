
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Image, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      icon: <Globe size={40} className="text-amber-500" />,
      description:
        'Strategic digital marketing solutions to increase your online presence and engage with your target audience effectively.',
      items: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns']
    },
    {
      id: 2,
      title: 'Graphic Design',
      icon: <Image size={40} className="text-amber-500" />,
      description:
        'Creative visual solutions that capture your brand essence and communicate your message beautifully.',
      items: ['Brand Identity', 'Print Design', 'UI/UX Design', 'Marketing Materials']
    },
    {
      id: 3,
      title: 'Business Strategy',
      icon: <Settings size={40} className="text-amber-500" />,
      description:
        'Comprehensive business strategies to help you achieve your goals and grow your business sustainably.',
      items: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Brand Positioning']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I offer comprehensive creative solutions to help your business thrive in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="card group hover:border-l-4 hover:border-amber-500">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/services" 
                className="inline-flex items-center text-amber-500 font-medium hover:underline group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
