import React from 'react';
import type { ApiEndpoint, HttpMethod } from '../types';

interface ApiEndpointCardProps {
  endpoint: ApiEndpoint;
  highlight?: string;
}

const highlightText = (text: string, query?: string) => {
  if (!query || query.trim() === '') {
    return text;
  }

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className="bg-yellow-500/30 text-yellow-300 rounded-sm px-0.5">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};


const MethodBadge: React.FC<{ method: HttpMethod; highlight?: string }> = ({ method, highlight }) => {
  const methodStyles: Record<HttpMethod, string> = {
    GET: 'bg-green-500/20 text-green-300 ring-green-500/30',
    POST: 'bg-blue-500/20 text-blue-300 ring-blue-500/30',
    PUT: 'bg-yellow-500/20 text-yellow-300 ring-yellow-500/30',
    DELETE: 'bg-red-500/20 text-red-300 ring-red-500/30',
  };

  const shouldHighlight = highlight && method.toLowerCase().includes(highlight.toLowerCase());
  const highlightClass = shouldHighlight ? '!ring-yellow-400 !ring-2' : '';

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md text-xs font-bold w-16 flex-shrink-0 py-1 ring-1 ring-inset ${methodStyles[method]} ${highlightClass}`}
    >
      {method}
    </span>
  );
};

export const ApiEndpointCard: React.FC<ApiEndpointCardProps> = ({ endpoint, highlight }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 transition-all hover:border-blue-500/50 hover:bg-gray-800">
      <div className="flex flex-col md:flex-row md:items-center">
        <MethodBadge method={endpoint.method} highlight={highlight} />
        <code className="mt-2 md:mt-0 md:ml-4 text-sm md:text-base text-gray-300 font-medium bg-gray-700/40 px-2 py-1 rounded">
          {highlightText(endpoint.path, highlight)}
        </code>
      </div>
      <p className="mt-3 text-gray-400 text-sm">
        {highlightText(endpoint.description, highlight)}
      </p>
    </div>
  );
};
