import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';

const contactInfo = [
  {
    title: 'Email',
    description: 'contact@example.com',
    icon: Mail,
  },
  {
    title: 'Phone',
    description: '+1 (555) 123-4567',
    icon: Phone,
  },
  {
    title: 'Location',
    description: 'San Francisco, CA',
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <div className="bg-gray-50 py-16" id="contact">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with our team
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {contactInfo.map((info) => (
            <Card
              key={info.title}
              title={info.title}
              description={info.description}
              icon={info.icon}
              className="bg-white"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}