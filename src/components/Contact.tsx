import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-gray-50 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch with our team
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">contact@example.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-base text-gray-500">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-base text-gray-500">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}