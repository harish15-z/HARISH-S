import React, { useMemo } from 'react';
import { API_CATEGORIES } from '../constants';
import { ApiContent } from './ApiContent';

interface SearchResultsProps {
  query: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const lowerCaseQuery = query.toLowerCase();

  const filteredData = useMemo(() => {
    if (!query) return [];

    return API_CATEGORIES.map(category => ({
      ...category,
      endpoints: category.endpoints.filter(
        endpoint =>
          endpoint.path.toLowerCase().includes(lowerCaseQuery) ||
          endpoint.description.toLowerCase().includes(lowerCaseQuery) ||
          endpoint.method.toLowerCase().includes(lowerCaseQuery)
      ),
    })).filter(category => category.endpoints.length > 0);
  }, [lowerCaseQuery, query]);

  if (filteredData.length === 0) {
    return (
      <div className="text-center py-20" role="status">
        <h2 className="text-xl text-gray-400">No results found for "{query}"</h2>
      </div>
    );
  }

  return (
    <div>
      {filteredData.map((category, index) => (
        <div key={category.title} className={index > 0 ? 'mt-12' : ''}>
          <ApiContent category={category} searchQuery={query} />
        </div>
      ))}
    </div>
  );
};
