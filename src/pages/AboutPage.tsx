import React from 'react';
import { Container } from '../components/layout/Container';
import { Users, Target, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About JegSu</h1>
          <p className="text-xl text-gray-600 mb-12">
            We're a team of passionate developers and designers committed to creating
            exceptional web experiences that drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of experts working together to deliver innovative solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with cutting-edge web technologies and exceptional user experiences.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, and excellence in everything we do.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Team collaboration"
            className="rounded-lg shadow-xl w-full object-cover h-[400px]"
          />
        </div>
      </Container>
    </div>
  );
}