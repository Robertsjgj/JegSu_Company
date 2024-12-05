import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

export function Card({ title, description, icon: Icon, className = '' }: CardProps) {
  return (
    <div className={`flow-root bg-gray-50 rounded-lg px-6 pb-8 ${className}`}>
      <div className="-mt-6">
        {Icon && (
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
              <Icon className="h-6 w-6 text-white" />
            </span>
          </div>
        )}
        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
          {title}
        </h3>
        <p className="mt-5 text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}