
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Tech Company Rebranding',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete rebranding for a technology company, including logo design, brand guidelines, and marketing materials.'
    },
    {
      id: 2,
      title: 'E-commerce SEO Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive SEO campaign for an e-commerce website that increased organic traffic by 150% and improved search rankings.'
    },
    {
      id: 3,
      title: 'Product Packaging Design',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Creative packaging design for a premium skincare brand that helped increase brand recognition and sales.'
    },
    {
      id: 4,
      title: 'Social Media Marketing Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Strategic social media marketing campaign that increased engagement by 200% and generated qualified leads for a B2B company.'
    },
    {
      id: 5,
      title: 'Restaurant Website Redesign',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete website redesign for a restaurant chain, improving user experience and increasing online reservations.'
    },
    {
      id: 6,
      title: 'Content Marketing Strategy',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Comprehensive content marketing strategy that established the client as an industry thought leader and drove organic traffic.'
    },
    {
      id: 7,
      title: 'Event Promotional Materials',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Design of promotional materials for a major conference, including brochures, banners, and social media graphics.'
    },
    {
      id: 8,
      title: 'E-commerce Website Design',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Design and development of a user-friendly e-commerce website that improved conversions and customer satisfaction.'
    },
    {
      id: 9,
      title: 'PPC Advertising Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Strategic PPC campaign that generated a 300% ROI and significantly increased qualified leads for a SaaS company.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Check out some of my recent projects and see how I've helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === 'all'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              All Work
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
            <button
              onClick={() => setActiveFilter('web-design')}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === 'web-design'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              Web Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs mb-4">
                    {item.category === 'digital-marketing' ? 'Digital Marketing' : 
                     item.category === 'graphic-design' ? 'Graphic Design' : 'Web Design'}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href="#" className="inline-flex items-center text-amber-500 font-medium hover:underline">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500 text-center text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-500 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
