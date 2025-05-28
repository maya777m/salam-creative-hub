
import React, { useEffect, useState } from 'react';
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
        }, 500);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Abdus Mango - Social Media Marketing & Creative Design Expert</title>
        <meta name="description" content="Professional social media marketing and creative design services by Abdus Mango. Helping businesses grow their online presence and engage with their audience effectively." />
        <meta name="keywords" content="social media marketing, digital marketing, graphic design, content creation, brand strategy, Instagram marketing, Facebook ads, YouTube marketing" />
        <meta property="og:title" content="Abdus Mango - Social Media Marketing & Creative Design Expert" />
        <meta property="og:description" content="Transform your social media presence with expert marketing strategies and creative design solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abdus Mango - Social Media Marketing Expert" />
        <meta name="twitter:description" content="Expert social media marketing and creative design services to boost your online presence." />
        <link rel="canonical" href="https://abdusmango.com/" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abdus Mango" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffc107" />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Abdus Mango" />
        <meta name="twitter:site" content="@abdusmango" />
        <meta name="twitter:creator" content="@abdusmango" />
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
