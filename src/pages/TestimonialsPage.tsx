
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Working with Md. Abdus Salam was a game-changer for our company. His digital marketing strategy increased our online visibility significantly, resulting in a 40% boost in qualified leads. His approach was strategic and data-driven, with regular updates and clear explanations throughout the process.',
      service: 'Digital Marketing',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Innovate Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Salam created an outstanding brand identity for our startup. His attention to detail and understanding of our vision was impressive. The deliverables exceeded our expectations and helped us establish a strong brand presence in a competitive market. He was responsive, professional, and truly invested in our success.',
      service: 'Graphic Design',
    },
    {
      id: 3,
      name: 'Emily Roberts',
      position: 'Small Business Owner',
      company: 'Bloom Boutique',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'As a small business owner, I needed affordable yet professional marketing materials. Salam delivered beautiful designs and a social media strategy that helped my boutique thrive online. He understood my budget constraints and provided solutions that maximized my investment. I continue to work with him for all my marketing needs.',
      service: 'Social Media Marketing',
    },
    {
      id: 4,
      name: 'Daniel Wilson',
      position: 'Director of Operations',
      company: 'Global Solutions',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'We hired Salam to redesign our company website and implement an SEO strategy. The results were impressive - our website traffic increased by 75% within three months, and our conversion rate improved significantly. His technical expertise combined with his understanding of user experience made a tremendous difference.',
      service: 'Web Design & SEO',
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      position: 'Brand Manager',
      company: 'Lifestyle Products',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Salam\'s content marketing strategy transformed our brand\'s online presence. He developed a comprehensive plan that increased our engagement across all platforms and positioned us as thought leaders in our industry. His creativity and strategic thinking are unmatched.',
      service: 'Content Marketing',
    },
    {
      id: 6,
      name: 'Robert Thompson',
      position: 'Founder',
      company: 'Startup Ventures',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'I\'ve worked with many designers over the years, but Salam stands out for his ability to understand business objectives and translate them into effective visual solutions. His logo design for our company perfectly captured our vision and has become instantly recognizable among our customers.',
      service: 'Brand Identity',
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
        />
      ));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="card relative transition-all hover:-translate-y-2 hover:shadow-xl hover:border-t-4 hover:border-amber-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2 flex">
                  {renderStars(testimonial.rating)}
                </div>
                
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs mb-4">
                  {testimonial.service}
                </span>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-serif">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here are some measurable results I've helped my clients achieve through my services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">40%</div>
              <p className="text-lg font-medium mb-2">Increase in Leads</p>
              <p className="text-gray-600">Through strategic digital marketing campaigns</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">75%</div>
              <p className="text-lg font-medium mb-2">Growth in Website Traffic</p>
              <p className="text-gray-600">With SEO and content marketing strategies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">200%</div>
              <p className="text-lg font-medium mb-2">Social Media Engagement</p>
              <p className="text-gray-600">Through targeted content and community management</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500 text-center text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve similar results?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's work together to create a strategy that drives growth for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-500 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
