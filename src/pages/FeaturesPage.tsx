import React from 'react';
import { Container } from '../components/layout/Container';
import { Card } from '../components/ui/Card';
import { 
  Zap, Shield, Smartphone, Globe, Code, Database,
  PaintBucket, Gauge, Lock
} from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance and minimal load times for the best user experience.',
    icon: Zap,
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security features to protect your data and users.',
    icon: Shield,
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that works flawlessly across all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    title: 'Global CDN',
    description: 'Content delivery network ensuring fast access from anywhere in the world.',
    icon: Globe,
  },
  {
    title: 'Modern Stack',
    description: 'Built with the latest technologies and best practices in web development.',
    icon: Code,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Grows with your business, from startup to enterprise scale.',
    icon: Database,
  },
  {
    title: 'Custom Design',
    description: 'Tailored designs that match your brand and business needs.',
    icon: PaintBucket,
  },
  {
    title: 'Performance Metrics',
    description: 'Detailed analytics and performance monitoring built-in.',
    icon: Gauge,
  },
  {
    title: 'Privacy Focus',
    description: 'GDPR compliant and built with privacy in mind from the ground up.',
    icon: Lock,
  },
];

export function FeaturesPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Web Applications
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to build and scale your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}