
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Salam created an outstanding brand identity for our startup. His attention to detail and understanding of our vision was impressive. The deliverables exceeded our expectations.'
    },
    {
      id: 3,
      name: 'Emily Roberts',
      position: 'Small Business Owner',
      company: 'Bloom Boutique',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
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
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my clients have to say about working with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card relative transition-all hover:-translate-y-2 hover:border-t-4 hover:border-amber-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
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
              
              <div className="mb-4 flex">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
                "
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials" className="btn-primary inline-flex items-center">
            View All Testimonials <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
