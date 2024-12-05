import React from 'react';
import { Zap, Shield, Smartphone } from 'lucide-react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';

const features = [
  {
    name: 'Lightning Fast',
    description: 'Optimized performance for the best user experience',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description: 'Built-in security features to protect your data',
    icon: Shield,
  },
  {
    name: 'Mobile First',
    description: 'Responsive design that works on all devices',
    icon: Smartphone,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to build amazing projects
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <Card
                  title={feature.name}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}