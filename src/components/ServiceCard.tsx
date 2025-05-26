import React, { ReactNode } from 'react';
import { ServiceType } from '../types';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1 group">
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors">{service.title}</h3>
      <p className="text-slate-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;