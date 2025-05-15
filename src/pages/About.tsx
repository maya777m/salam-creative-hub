import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Globe, Brush, Mail, MapPin, Phone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
const About: React.FC = () => {
  const experiences = [{
    id: 1,
    year: '2020 - Present',
    position: 'Freelance Digital Marketer & Graphic Designer',
    company: 'Self-Employed',
    description: 'Working with clients globally to deliver high-quality digital marketing and graphic design solutions.'
  }, {
    id: 2,
    year: '2018 - 2020',
    position: 'Senior Digital Marketing Specialist',
    company: 'MediaTech Solutions',
    description: 'Led digital marketing campaigns for major clients, increasing their online visibility and conversion rates.'
  }, {
    id: 3,
    year: '2016 - 2018',
    position: 'Graphic Designer',
    company: 'Creative Minds Agency',
    description: 'Created visual concepts for various brands, including logos, marketing materials, and social media assets.'
  }];
  const educations = [{
    id: 1,
    year: '2014 - 2016',
    degree: 'Master in Digital Marketing',
    institution: 'University of Creative Arts',
    description: 'Specialized in SEO, SEM, and Social Media Marketing strategies.'
  }, {
    id: 2,
    year: '2010 - 2014',
    degree: 'Bachelor in Graphic Design',
    institution: 'Design Institute',
    description: 'Focused on brand identity, UI/UX design, and print media.'
  }];
  const skills = [{
    name: 'Digital Marketing',
    percentage: 95
  }, {
    name: 'SEO Optimization',
    percentage: 90
  }, {
    name: 'Social Media Marketing',
    percentage: 95
  }, {
    name: 'Content Marketing',
    percentage: 85
  }, {
    name: 'Graphic Design',
    percentage: 90
  }, {
    name: 'UI/UX Design',
    percentage: 80
  }, {
    name: 'Brand Identity',
    percentage: 95
  }, {
    name: 'Adobe Creative Suite',
    percentage: 90
  }];
  return <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-amber-40 to-white py-[172px]">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get to know more about me, my experiences, and what drives me to create impactful designs and marketing strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="rounded-lg shadow-xl w-full h-auto bg-gradient-to-br from-amber-100 to-amber-50 p-20 flex items-center justify-center">
                  <Award size={180} className="text-amber-500" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-amber-500 p-6 rounded-lg shadow-lg">
                  <h3 className="text-white font-bold text-xl">5+ Years</h3>
                  <p className="text-white text-sm">Professional Experience</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">I'm Md. Abdus Salam, a Digital Marketing & Design Expert</h2>
              
              <p className="text-gray-600 mb-6">
                I combine creativity and strategic thinking to help businesses grow their online presence and create memorable brand experiences. With over 5 years of experience in digital marketing and graphic design, I've helped numerous clients achieve their business goals.
              </p>
              
              <p className="text-gray-600 mb-6">
                My passion lies in creating visually appealing designs that not only look good but also deliver results. I believe in a holistic approach to marketing and design, where every element works together to tell a compelling brand story.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Mail className="text-amber-500 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contact@salamcreative.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-amber-500 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-amber-500 mr-3" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="text-amber-500 mr-3" />
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-gray-600">Freelance Available</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Link to="/portfolio" className="btn-primary flex items-center">
                  View Portfolio <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center">
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {skills.map(skill => <div key={skill.name} className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-amber-500 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2.5 rounded-full">
                  <div className="bg-amber-500 h-2.5 rounded-full" style={{
                width: `${skill.percentage}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          
          <div className="space-y-8 mt-12">
            {experiences.map(exp => <div key={exp.id} className="card border-l-4 border-amber-500 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {exp.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <h4 className="text-amber-600 mb-3">{exp.company}</h4>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="section-title">Education</h2>
          
          <div className="space-y-8 mt-12">
            {educations.map(edu => <div key={edu.id} className="card border-l-4 border-amber-500 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <h4 className="text-amber-600 mb-3">{edu.institution}</h4>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-500 text-center text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start a project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business!
          </p>
          <Link to="/contact" className="inline-block bg-white text-amber-500 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;