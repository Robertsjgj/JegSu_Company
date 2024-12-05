import React from 'react';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-8">
      <Container>
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JegSu. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}