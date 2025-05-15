
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll functionality for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Check if page was loaded with hash and scroll to that section
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, 500); // Delay to ensure page is fully loaded
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Md. Abdus Salam - Digital Marketing & Graphic Design Expert</title>
        <meta name="description" content="Professional digital marketing and graphic design services by Md. Abdus Salam. Helping businesses grow their online presence and stand out in the digital world." />
        <meta name="keywords" content="digital marketing, graphic design, SEO, social media marketing, brand identity, UI/UX design, content strategy" />
        <meta property="og:title" content="Md. Abdus Salam - Digital Marketing & Graphic Design Expert" />
        <meta property="og:description" content="Professional digital marketing and graphic design services to help your business grow online." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Md. Abdus Salam - Digital Marketing & Graphic Design Expert" />
        <meta name="twitter:description" content="Professional digital marketing and graphic design services to help your business grow online." />
        <link rel="canonical" href="https://salamcreative.com/" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Md. Abdus Salam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffc107" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Salam Creative" />
        <meta name="twitter:site" content="@salamcreative" />
        <meta name="twitter:creator" content="@salamcreative" />
      </Helmet>
      <Navbar />
      <Hero />
      <AboutSnippet />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
