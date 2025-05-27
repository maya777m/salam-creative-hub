
import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete brand identity for a tech startup including logo, guidelines, and marketing materials.'
    },
    {
      id: 2,
      title: 'SEO Campaign Success',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Increased organic traffic by 250% for an e-commerce client through strategic SEO optimization.'
    },
    {
      id: 3,
      title: 'Marketing Materials Suite',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive marketing materials including brochures, business cards, and promotional items.'
    },
    {
      id: 4,
      title: 'Social Media Strategy',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Developed and executed social media strategy that increased engagement by 400%.'
    },
    {
      id: 5,
      title: 'UI/UX Website Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern, responsive website design that improved user experience and conversion rates.'
    },
    {
      id: 6,
      title: 'Content Marketing Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Strategic content marketing campaign that established client as industry thought leader.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Check out some of my recent projects and see how I've helped businesses achieve their goals.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('digital-marketing')}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeFilter === 'digital-marketing'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
            }`}
          >
            Digital Marketing
          </button>
          <button
            onClick={() => setActiveFilter('graphic-design')}
            className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
              activeFilter === 'graphic-design'
                ? 'bg-amber-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md'
            }`}
          >
            Graphic Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm mb-4 font-medium">
                  {item.category === 'digital-marketing' ? 'Digital Marketing' : 'Graphic Design'}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors"
                >
                  Discuss Similar Project <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
          >
            Start Your Project <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
