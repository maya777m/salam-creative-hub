
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Working with Md. Abdus Salam was a game-changer for our company. His digital marketing strategy increased our online visibility significantly, resulting in a 40% boost in qualified leads.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Innovate Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Salam created an outstanding brand identity for our startup. His attention to detail and understanding of our vision was impressive. The deliverables exceeded our expectations.'
    },
    {
      id: 3,
      name: 'Emily Roberts',
      position: 'Small Business Owner',
      company: 'Bloom Boutique',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'As a small business owner, I needed affordable yet professional marketing materials. Salam delivered beautiful designs and a social media strategy that helped my boutique thrive online.'
    }
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
    <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-white to-gray-50 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc107' fill-opacity='0.1'%3E%3Cpath d='M20 20h20v20H20zM0 0h20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Client Testimonials</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg">
                "
              </div>

              {/* Client Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-amber-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-amber-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="mb-4 flex">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-amber-500 mb-2">40%</div>
            <p className="text-lg font-medium mb-2 text-gray-800">Increase in Leads</p>
            <p className="text-gray-600">Through strategic digital marketing campaigns</p>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-amber-500 mb-2">75%</div>
            <p className="text-lg font-medium mb-2 text-gray-800">Growth in Website Traffic</p>
            <p className="text-gray-600">With SEO and content marketing strategies</p>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-amber-500 mb-2">200%</div>
            <p className="text-lg font-medium mb-2 text-gray-800">Social Media Engagement</p>
            <p className="text-gray-600">Through targeted content and community management</p>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/testimonials" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Testimonials <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
