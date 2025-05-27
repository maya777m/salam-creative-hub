
import React from 'react';
import { ArrowRight, Globe, Image, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Digital Marketing',
      icon: <Globe size={40} className="text-amber-500" />,
      description: 'Strategic digital marketing solutions to increase your online presence and engage with your target audience effectively.',
      items: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns']
    },
    {
      id: 2,
      title: 'Graphic Design',
      icon: <Image size={40} className="text-amber-500" />,
      description: 'Creative visual solutions that capture your brand essence and communicate your message beautifully.',
      items: ['Brand Identity', 'Print Design', 'UI/UX Design', 'Marketing Materials']
    },
    {
      id: 3,
      title: 'Business Strategy',
      icon: <Settings size={40} className="text-amber-500" />,
      description: 'Comprehensive business strategies to help you achieve your goals and grow your business sustainably.',
      items: ['Market Analysis', 'Competitor Research', 'Growth Planning', 'Brand Positioning']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I offer comprehensive creative solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:border-l-4 hover:border-amber-500 h-full flex flex-col">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-amber-500 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center flex-grow">{service.description}</p>
              
              <ul className="mb-6 space-y-3">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-center">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
