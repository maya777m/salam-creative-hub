
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Brush, Award } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Hero: React.FC = () => {
  const heroSlides = [
    {
      title: "I'm <span class='text-amber-500'>Md. Abdus Salam</span>",
      subtitle: "Digital Marketing Expert",
      description: "Delivering strategic marketing solutions to help businesses grow their online presence and reach their target audience effectively.",
      icon: <Globe size={64} className="text-amber-500" />
    },
    {
      title: "Creative <span class='text-amber-500'>Design Solutions</span>",
      subtitle: "Graphic Design Professional",
      description: "Creating visually stunning designs that communicate your brand message and leave a lasting impression on your audience.",
      icon: <Brush size={64} className="text-amber-500" />
    },
    {
      title: "Award-Winning <span class='text-amber-500'>Strategies</span>",
      subtitle: "Business Growth Consultant",
      description: "Implementing proven strategies that drive business growth, increase conversions, and maximize your return on investment.",
      icon: <Award size={64} className="text-amber-500" />
    }
  ];

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
                    <h1 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-4"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/portfolio" className="btn-primary flex items-center justify-center">
                        View My Work
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                      <Link to="/contact" className="btn-outline flex items-center justify-center">
                        Get In Touch
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-2/5 animate-slide-up flex items-center justify-center">
                    <div className="relative">
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-amber-100 border-4 border-white shadow-xl mx-auto flex items-center justify-center">
                        {slide.icon}
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-md">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
