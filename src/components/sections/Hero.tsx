import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to the Future</span>
            <span className="block text-indigo-600">of Web Development</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create beautiful, responsive websites with our modern React framework.
            Fast, secure, and scalable solutions for your business.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button href="#contact" icon={ArrowRight} className="shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}