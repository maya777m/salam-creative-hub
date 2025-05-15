import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Brush, Award, TrendingUp, Target, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import * as THREE from 'three';
const Hero: React.FC = () => {
  const heroSlides = [{
    title: "Transform Your <span class='text-amber-500'>Digital Presence</span>",
    subtitle: "Strategic Marketing Solutions",
    description: "\"Success in marketing requires a blend of creativity, analytical thinking, and relentless innovation. Let's build your brand together.\"",
    icon: <TrendingUp size={64} className="text-amber-500" />
  }, {
    title: "Creative <span class='text-amber-500'>Design Excellence</span>",
    subtitle: "Visual Communication That Works",
    description: "\"Great design is not just about aesthetics; it's about solving problems and creating experiences that resonate with your audience.\"",
    icon: <Brush size={64} className="text-amber-500" />
  }, {
    title: "Achieve <span class='text-amber-500'>Measurable Results</span>",
    subtitle: "Data-Driven Marketing Approach",
    description: "\"In the world of digital marketing, what gets measured gets improved. Your success is defined by results, not just activities.\"",
    icon: <Target size={64} className="text-amber-500" />
  }];
  const canvasRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [objects, setObjects] = useState<THREE.Mesh[]>([]);
  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const newScene = new THREE.Scene();
    const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const newRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    newRenderer.setSize(window.innerWidth, window.innerHeight);
    newRenderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(newRenderer.domElement);

    // Create geometric objects for 3D motion
    const newObjects: THREE.Mesh[] = [];

    // Create marketing-themed objects (charts, analytics shapes)
    const geometries = [new THREE.IcosahedronGeometry(1, 0),
    // 3D pentagon shapes
    new THREE.OctahedronGeometry(0.8, 0), new THREE.TetrahedronGeometry(0.7, 0), new THREE.SphereGeometry(0.6, 8, 8), new THREE.ConeGeometry(0.5, 1, 8)];

    // Create 15 random objects
    for (let i = 0; i < 15; i++) {
      const geometryIndex = Math.floor(Math.random() * geometries.length);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${Math.random() * 45 + 35}, 100%, 75%)`),
        // Amber shades
        wireframe: true
      });
      const object = new THREE.Mesh(geometries[geometryIndex], material);

      // Position objects randomly in 3D space
      object.position.x = Math.random() * 10 - 5;
      object.position.y = Math.random() * 10 - 5;
      object.position.z = Math.random() * 10 - 15;

      // Random rotation
      object.rotation.x = Math.random() * Math.PI;
      object.rotation.y = Math.random() * Math.PI;
      newScene.add(object);
      newObjects.push(object);
    }

    // Position camera
    newCamera.position.z = 5;

    // Set state
    setScene(newScene);
    setCamera(newCamera);
    setRenderer(newRenderer);
    setObjects(newObjects);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate objects
      newObjects.forEach(obj => {
        obj.rotation.x += 0.003;
        obj.rotation.y += 0.002;
        obj.position.z += Math.sin(Date.now() * 0.001) * 0.01;
      });
      if (newScene && newCamera) {
        newRenderer.render(newScene, newCamera);
      }
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!newCamera || !newRenderer) return;
      newCamera.aspect = window.innerWidth / window.innerHeight;
      newCamera.updateProjectionMatrix();
      newRenderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvasRef.current && newRenderer) {
        canvasRef.current.removeChild(newRenderer.domElement);
      }
      newObjects.forEach(obj => {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      });
    };
  }, []);
  return <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* 3D Background Animation */}
      <div ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => <CarouselItem key={index} className="md:basis-full">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkgray mb-4" dangerouslySetInnerHTML={{
                  __html: slide.title
                }} />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg italic">
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
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-amber-100 bg-opacity-80 border-4 border-white shadow-xl mx-auto flex items-center justify-center">
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
              </CarouselItem>)}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>

        {/* Quick Navigation Links */}
        <div className="w-full flex justify-center mt-12">
          
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;