
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PortfolioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const portfolioItems = {
    'brand-identity-design': {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 2024',
      client: 'TechStart Inc.',
      description: 'Complete brand identity for a tech startup including logo, guidelines, and marketing materials.',
      challenge: 'The client needed a modern, professional brand identity that would appeal to both technical and business audiences while standing out in a crowded market.',
      solution: 'We developed a clean, geometric logo with a tech-forward color palette, comprehensive brand guidelines, and a full suite of marketing materials that established credibility and memorability.',
      results: ['40% increase in brand recognition', '60% improvement in lead quality', 'Successfully launched in 3 markets'],
      images: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    'seo-campaign-success': {
      id: 2,
      title: 'SEO Campaign Success',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'February 2024',
      client: 'E-commerce Plus',
      description: 'Increased organic traffic by 250% for an e-commerce client through strategic SEO optimization.',
      challenge: 'The client\'s website had poor search visibility and was losing market share to competitors with better SEO strategies.',
      solution: 'Implemented comprehensive SEO strategy including technical optimization, content creation, link building, and local SEO tactics.',
      results: ['250% increase in organic traffic', '180% growth in qualified leads', '45% improvement in conversion rate'],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    'marketing-materials-suite': {
      id: 3,
      title: 'Marketing Materials Suite',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'January 2024',
      client: 'Innovate Design',
      description: 'Comprehensive marketing materials including brochures, business cards, and promotional items.',
      challenge: 'The client needed cohesive marketing materials that would work across multiple channels and maintain brand consistency.',
      solution: 'Created a comprehensive suite of marketing materials with consistent design language, typography, and color schemes across all touchpoints.',
      results: ['90% brand consistency score', '35% increase in lead generation', 'Successful product launch campaign'],
      images: [
        'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    'social-media-strategy': {
      id: 4,
      title: 'Social Media Strategy',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'December 2023',
      client: 'Bloom Boutique',
      description: 'Developed and executed social media strategy that increased engagement by 400%.',
      challenge: 'The client had minimal social media presence and needed to build an engaged community around their brand.',
      solution: 'Developed comprehensive social media strategy with content calendar, influencer partnerships, and community engagement tactics.',
      results: ['400% increase in engagement', '300% growth in followers', '150% boost in social media driven sales'],
      images: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    'ui-ux-website-design': {
      id: 5,
      title: 'UI/UX Website Design',
      category: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'November 2023',
      client: 'Digital Solutions Co.',
      description: 'Modern, responsive website design that improved user experience and conversion rates.',
      challenge: 'The client\'s website had poor user experience, high bounce rates, and low conversion rates.',
      solution: 'Complete website redesign focusing on user experience, mobile responsiveness, and conversion optimization.',
      results: ['65% reduction in bounce rate', '85% increase in conversion rate', '50% improvement in page load speed'],
      images: [
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    'content-marketing-campaign': {
      id: 6,
      title: 'Content Marketing Campaign',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'October 2023',
      client: 'Industry Leaders Inc.',
      description: 'Strategic content marketing campaign that established client as industry thought leader.',
      challenge: 'The client needed to establish thought leadership and build trust with potential customers in a competitive industry.',
      solution: 'Comprehensive content marketing strategy including blog posts, whitepapers, case studies, and video content.',
      results: ['200% increase in website traffic', '150% growth in qualified leads', 'Industry recognition as thought leader'],
      images: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  };

  const project = slug ? portfolioItems[slug as keyof typeof portfolioItems] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-amber-500 hover:text-amber-600">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
        {/* Texture Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='5'/%3E%3Ccircle cx='53' cy='53' r='5'/%3E%3Ccircle cx='53' cy='7' r='5'/%3E%3Ccircle cx='7' cy='53' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/#portfolio" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-gray-500 flex items-center gap-1">
                  <Calendar size={16} />
                  {project.date}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 text-gray-600">
                <User size={16} />
                <span>Client: <strong>{project.client}</strong></span>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-gray-600 flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Project Gallery */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let's work together to create something amazing for your business!
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-amber-600 hover:bg-gray-100 transition-colors px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Let's Talk <ExternalLink size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
