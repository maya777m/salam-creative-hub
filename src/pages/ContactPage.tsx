
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or want to learn more about my services? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <Contact />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
                  <p className="text-gray-600">
                    I offer a range of services including digital marketing, graphic design, web design, and brand strategy. My focus is on creating custom solutions that help businesses grow their online presence and connect with their target audience.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">How do you charge for your services?</h3>
                  <p className="text-gray-600">
                    I offer both project-based pricing and retainer packages depending on your needs. After our initial consultation, I'll provide a detailed proposal with transparent pricing based on the scope of work required.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                  <p className="text-gray-600">
                    Project timelines vary depending on complexity and scope. A brand identity project might take 2-3 weeks, while a comprehensive digital marketing campaign could take 4-6 weeks to develop and implement. I'll provide a detailed timeline during our project planning phase.
                  </p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">Do you work with clients outside of Bangladesh?</h3>
                  <p className="text-gray-600">
                    Yes, I work with clients globally. I use various communication tools to ensure smooth collaboration regardless of time zones and geographic locations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h2 className="text-3xl font-bold mb-6">My Process</h2>
                <ol className="space-y-8">
                  <li className="flex">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Initial Consultation</h3>
                      <p className="text-gray-600">
                        We start with a discovery call or meeting to discuss your business goals, challenges, and project requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Proposal & Planning</h3>
                      <p className="text-gray-600">
                        I'll create a detailed proposal outlining the scope of work, deliverables, timeline, and pricing for your review.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Project Execution</h3>
                      <p className="text-gray-600">
                        Once approved, I'll begin working on your project, providing regular updates and opportunities for feedback.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Delivery & Support</h3>
                      <p className="text-gray-600">
                        After final approval, I'll deliver all project materials and provide ongoing support to ensure your continued success.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
