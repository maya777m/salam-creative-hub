
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Globe, Image, Settings, Monitor, Code, Star, Briefcase } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      id: 1,
      title: 'Digital Marketing',
      icon: <Globe size={40} className="text-amber-500" />,
      description:
        'Strategic digital marketing solutions to increase your online presence and engage with your target audience effectively.',
      details: 'I provide comprehensive digital marketing services that help businesses grow their online presence and reach their target audience. From SEO to social media marketing, I develop strategies that deliver measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Pay-Per-Click (PPC) Advertising',
        'Analytics and Reporting'
      ]
    },
    {
      id: 2,
      title: 'Graphic Design',
      icon: <Image size={40} className="text-amber-500" />,
      description:
        'Creative visual solutions that capture your brand essence and communicate your message beautifully.',
      details: 'My graphic design services focus on creating visually appealing materials that effectively communicate your brand message and capture the attention of your audience. I work closely with clients to understand their vision and bring it to life.',
      features: [
        'Brand Identity Design',
        'Logo Design',
        'Marketing Materials',
        'Print Design',
        'Packaging Design',
        'Social Media Graphics'
      ]
    },
    {
      id: 3,
      title: 'Web Design',
      icon: <Monitor size={40} className="text-amber-500" />,
      description:
        'Professional, responsive websites designed to provide an optimal user experience and drive conversions.',
      details: 'I create beautiful, functional websites that are optimized for both users and search engines. My web design services focus on creating user-friendly interfaces that drive engagement and conversions.',
      features: [
        'Responsive Website Design',
        'UI/UX Design',
        'E-commerce Websites',
        'Landing Pages',
        'Website Optimization',
        'Mobile-First Design'
      ]
    },
    {
      id: 4,
      title: 'Brand Strategy',
      icon: <Briefcase size={40} className="text-amber-500" />,
      description:
        'Comprehensive brand development strategies to help you stand out in a competitive market.',
      details: 'My brand strategy services help businesses define their unique value proposition and develop a cohesive brand identity that resonates with their target audience. I work with clients to understand their business goals and create strategies that align with their vision.',
      features: [
        'Brand Positioning',
        'Market Research',
        'Competitor Analysis',
        'Brand Voice Development',
        'Brand Guidelines',
        'Brand Messaging'
      ]
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Discovery',
      description: 'I start by understanding your business, goals, and target audience to create a tailored strategy.'
    },
    {
      id: 2,
      title: 'Strategy',
      description: 'Based on the discovery phase, I develop a comprehensive strategy that aligns with your business objectives.'
    },
    {
      id: 3,
      title: 'Creation',
      description: 'Once the strategy is approved, I begin creating the deliverables, focusing on quality and attention to detail.'
    },
    {
      id: 4,
      title: 'Review',
      description: 'I present the deliverables for your review and make any necessary adjustments based on your feedback.'
    },
    {
      id: 5,
      title: 'Launch',
      description: 'After final approval, we launch your project and ensure everything is working as expected.'
    },
    {
      id: 6,
      title: 'Support',
      description: 'I provide ongoing support to ensure your project continues to deliver results after launch.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive creative solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainServices.map((service) => (
              <div key={service.id} className="card hover:shadow-xl group">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">
                  {service.details}
                </p>
                
                <h4 className="font-medium mb-4">What's Included:</h4>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">My Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I follow a structured approach to ensure every project is completed efficiently and delivers exceptional results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {processSteps.map((step) => (
              <div key={step.id} className="card text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-500">{step.id}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose My Services?</h2>
              <p className="text-gray-600 mb-6">
                I'm committed to delivering high-quality services that help your business stand out in today's competitive digital landscape. Here's why clients choose to work with me:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Personalized Approach</h4>
                    <p className="text-gray-600">I take the time to understand your unique business needs and develop tailored solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Results-Driven</h4>
                    <p className="text-gray-600">My services are focused on delivering measurable results that help your business grow.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Creative Solutions</h4>
                    <p className="text-gray-600">I combine creativity with strategic thinking to develop innovative solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Timely Delivery</h4>
                    <p className="text-gray-600">I value your time and ensure all projects are completed within the agreed timeframe.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Get a Free Consultation</h3>
              <p className="text-center text-gray-600 mb-8">
                Have questions about my services? Schedule a free consultation to discuss your project needs.
              </p>
              <div className="text-center">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Contact Me Now <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500 text-center text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-500 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
