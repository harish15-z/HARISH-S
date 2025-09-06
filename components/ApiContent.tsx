import React from 'react';
import type { ApiCategory } from '../types';
import { ApiEndpointCard } from './ApiEndpointCard';

interface ApiContentProps {
  category: ApiCategory | null;
  searchQuery?: string;
}

export const ApiContent: React.FC<ApiContentProps> = ({ category, searchQuery }) => {
  if (!category) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl text-gray-400">Select a category to view its API endpoints.</h2>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <span className="mr-4 w-8 h-8">{category.icon}</span>
        {category.title}
      </h2>
      <div className="space-y-4">
        {category.endpoints.map((endpoint, index) => (
          <ApiEndpointCard key={index} endpoint={endpoint} highlight={searchQuery} />
        ))}
      </div>
    </section>
  );
};
