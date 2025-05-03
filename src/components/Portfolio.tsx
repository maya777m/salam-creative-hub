
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'SEO Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Marketing Materials',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Social Media Strategy',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'UI/UX Website Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Content Marketing',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Check out some of my recent projects and see how I've helped businesses achieve their goals.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-white'
                : 'bg-white text-gray-700 hover:bg-amber-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('digital-marketing')}
            className={`px-5 py-2 rounded-full transition-all ${
              activeFilter === 'digital-marketing'
                ? 'bg-amber-500 text-white'
                : 'bg-white text-gray-700 hover:bg-amber-100'
            }`}
          >
            Digital Marketing
          </button>
          <button
            onClick={() => setActiveFilter('graphic-design')}
            className={`px-5 py-2 rounded-full transition-all ${
              activeFilter === 'graphic-design'
                ? 'bg-amber-500 text-white'
                : 'bg-white text-gray-700 hover:bg-amber-100'
            }`}
          >
            Graphic Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                    {item.category === 'digital-marketing' ? 'Digital Marketing' : 'Graphic Design'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary inline-flex items-center">
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
