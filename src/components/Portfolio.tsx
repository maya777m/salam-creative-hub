
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Instagram Growth Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Transformed a small business Instagram from 500 to 50K followers in 6 months through strategic content creation and community engagement.',
      results: '10,000% follower growth',
      slug: 'instagram-growth-campaign',
      details: 'Comprehensive Instagram marketing strategy that included content planning, hashtag optimization, influencer collaborations, and daily engagement tactics.'
    },
    {
      id: 2,
      title: 'Brand Identity Redesign',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Complete brand makeover for a tech startup including logo design, color palette, typography, and comprehensive brand guidelines for consistent visual identity.',
      results: 'Brand recognition +85%',
      slug: 'brand-identity-redesign',
      details: 'Full brand identity project that established a modern, professional look that resonated with the target tech-savvy audience and investors.'
    },
    {
      id: 3,
      title: 'YouTube Channel Optimization',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1611162616475-46fddd00846a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Optimized YouTube channel for a content creator, resulting in viral videos and significant subscriber growth through strategic SEO and thumbnail design.',
      results: '300% subscriber increase',
      slug: 'youtube-optimization',
      details: 'YouTube growth strategy focusing on SEO optimization, compelling thumbnails, content planning, and audience engagement techniques.'
    },
    {
      id: 4,
      title: 'E-commerce Social Strategy',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Developed comprehensive social media strategy for e-commerce brand, integrating Instagram Shopping, Facebook ads, and influencer partnerships.',
      results: '250% sales increase',
      slug: 'ecommerce-social-strategy',
      details: 'Multi-platform e-commerce strategy that combined organic content, paid advertising, and strategic partnerships to drive sales and brand awareness.'
    },
    {
      id: 5,
      title: 'Social Media Graphics Suite',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Created a comprehensive library of social media templates and graphics for consistent brand presence across all platforms.',
      results: 'Engagement +180%',
      slug: 'social-graphics-suite',
      details: 'Complete visual content library including post templates, story designs, highlight covers, and animated graphics for enhanced social media presence.'
    },
    {
      id: 6,
      title: 'LinkedIn B2B Campaign',
      category: 'social-media',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'B2B lead generation campaign on LinkedIn that established thought leadership and generated high-quality leads for a consulting firm.',
      results: '400% lead generation',
      slug: 'linkedin-b2b-campaign',
      details: 'Professional LinkedIn strategy focused on thought leadership content, strategic networking, and lead nurturing for B2B success.'
    }
  ];

  const stats = [
    { icon: <TrendingUp size={24} className="text-amber-600" />, number: '500%', label: 'Average Growth Rate' },
    { icon: <Users size={24} className="text-blue-600" />, number: '1M+', label: 'Followers Generated' },
    { icon: <Star size={24} className="text-green-600" />, number: '98%', label: 'Client Satisfaction' }
  ];

  const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3Ccircle cx='53' cy='53' r='5'/%3E%3Ccircle cx='53' cy='7' r='5'/%3E%3Ccircle cx='7' cy='53' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
            Discover how I've helped businesses transform their digital presence, increase engagement, and achieve remarkable growth through strategic social media marketing and creative design solutions that deliver measurable results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-16 animate-fade-in">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold transform hover:scale-105 ${
              activeFilter === 'all' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30' 
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200 hover:border-amber-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('social-media')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold transform hover:scale-105 ${
              activeFilter === 'social-media' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30' 
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200 hover:border-amber-300'
            }`}
          >
            Social Media
          </button>
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold transform hover:scale-105 ${
              activeFilter === 'design' 
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30' 
                : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200 hover:border-amber-300'
            }`}
          >
            Creative Design
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.results}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <span className="inline-block bg-amber-100 text-amber-800 rounded-full text-sm mb-4 font-semibold px-4 py-1">
                  {item.category === 'social-media' ? 'Social Media' : 'Creative Design'}
                </span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <Link 
                  to={`/portfolio/${item.slug}`} 
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  View Case Study <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Link 
            to="/portfolio" 
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            View All Case Studies <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
