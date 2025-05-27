import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioItems = [{
    id: 1,
    title: 'Brand Identity Design',
    category: 'graphic-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete brand identity for a tech startup including logo, guidelines, and marketing materials.',
    slug: 'brand-identity-design',
    details: 'A comprehensive brand identity project that transformed a tech startup\'s visual presence. The project included logo design, brand guidelines, business cards, letterheads, and marketing materials.'
  }, {
    id: 2,
    title: 'SEO Campaign Success',
    category: 'digital-marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Increased organic traffic by 250% for an e-commerce client through strategic SEO optimization.',
    slug: 'seo-campaign-success',
    details: 'Strategic SEO campaign that resulted in significant organic traffic growth. The project involved keyword research, on-page optimization, content strategy, and technical SEO improvements.'
  }, {
    id: 3,
    title: 'Marketing Materials Suite',
    category: 'graphic-design',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Comprehensive marketing materials including brochures, business cards, and promotional items.',
    slug: 'marketing-materials-suite',
    details: 'Complete suite of marketing materials designed to maintain brand consistency across all touchpoints. Included print and digital assets for various marketing campaigns.'
  }, {
    id: 4,
    title: 'Social Media Strategy',
    category: 'digital-marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Developed and executed social media strategy that increased engagement by 400%.',
    slug: 'social-media-strategy',
    details: 'Comprehensive social media strategy that dramatically improved engagement rates. The campaign included content planning, influencer partnerships, and community management.'
  }, {
    id: 5,
    title: 'UI/UX Website Design',
    category: 'graphic-design',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Modern, responsive website design that improved user experience and conversion rates.',
    slug: 'ui-ux-website-design',
    details: 'User-centered design approach that resulted in improved conversion rates and user satisfaction. The project included user research, wireframing, prototyping, and responsive design implementation.'
  }, {
    id: 6,
    title: 'Content Marketing Campaign',
    category: 'digital-marketing',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Strategic content marketing campaign that established client as industry thought leader.',
    slug: 'content-marketing-campaign',
    details: 'Content marketing strategy that positioned the client as an industry authority. The campaign included blog posts, whitepapers, case studies, and video content.'
  }];
  const filteredItems = activeFilter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <section id="portfolio" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3Ccircle cx='53' cy='53' r='5'/%3E%3Ccircle cx='53' cy='7' r='5'/%3E%3Ccircle cx='7' cy='53' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed text-center">
            Check out some of my recent projects and see how I've helped businesses achieve their goals.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12 animate-fade-in">
          <button onClick={() => setActiveFilter('all')} className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 ${activeFilter === 'all' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200'}`}>
            All Projects
          </button>
          <button onClick={() => setActiveFilter('digital-marketing')} className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 ${activeFilter === 'digital-marketing' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200'}`}>
            Digital Marketing
          </button>
          <button onClick={() => setActiveFilter('graphic-design')} className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 ${activeFilter === 'graphic-design' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'bg-white text-gray-700 hover:bg-amber-100 shadow-md border border-gray-200'}`}>
            Graphic Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredItems.map((item, index) => <div key={item.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="h-60 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-amber-100 rounded-full text-sm mb-4 font-medium text-left py-[3px] px-[53px] text-slate-950 mx-0 my-0">
                  {item.category === 'digital-marketing' ? 'Digital Marketing' : 'Graphic Design'}
                </span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-center">{item.description}</p>
                <Link to={`/portfolio/${item.slug}`} className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  View Project Details <ExternalLink size={16} className="ml-1" />
                </Link>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link to="/portfolio" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Portfolio;