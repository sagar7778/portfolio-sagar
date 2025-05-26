import React from 'react';
import { Code, Layout, Smartphone, Zap, Database, Wrench } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceType } from '../types';

const Services = () => {
  const services: ServiceType[] = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js, Next.js, and modern JavaScript frameworks.',
      icon: <Code className="h-10 w-10 text-violet-600" />,
    },
    {
      id: 2,
      title: 'UI/UX Implementation',
      description: 'Transforming design mockups into pixel-perfect, responsive, and accessible interfaces.',
      icon: <Layout className="h-10 w-10 text-violet-600" />,
    },
    {
      id: 3,
      title: 'Responsive Web Design',
      description: 'Creating websites that work flawlessly across all devices and screen sizes.',
      icon: <Smartphone className="h-10 w-10 text-violet-600" />,
    },
    {
      id: 4,
      title: 'Performance Optimization',
      description: 'Improving load times, reducing bundle sizes, and enhancing overall application performance.',
      icon: <Zap className="h-10 w-10 text-violet-600" />,
    },
    {
      id: 5,
      title: 'API Integration',
      description: 'Connecting your frontend with backend services and third-party APIs for seamless data flow.',
      icon: <Database className="h-10 w-10 text-violet-600" />,
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support for your web applications.',
      icon: <Wrench className="h-10 w-10 text-violet-600" />,
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals create exceptional web experiences.
          </p>
          <div className="h-1 w-20 bg-violet-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-violet-600 to-indigo-600 p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's discuss how my services can help bring your ideas to life and create exceptional web experiences.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-white text-violet-700 hover:bg-slate-100 rounded-lg transition-colors font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;