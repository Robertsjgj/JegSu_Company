import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Your message"
                  />
                </div>

                <Button icon={Send}>
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-indigo-600" />
                  Email
                </h3>
                <p className="mt-2 text-gray-600">contact@jegsu.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-indigo-600" />
                  Phone
                </h3>
                <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                  Office
                </h3>
                <p className="mt-2 text-gray-600">
                  123 Innovation Street<br />
                  San Francisco, CA 94103
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                alt="Office location"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}