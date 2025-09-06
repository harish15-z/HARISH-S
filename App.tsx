import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ApiContent } from './components/ApiContent';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { API_CATEGORIES } from './constants';
import type { ApiCategory, FilterPhase } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<FilterPhase>('All');

  const filteredCategories = useMemo(() => {
    if (selectedPhase === 'All') {
      return API_CATEGORIES;
    }
    return API_CATEGORIES.filter(category => category.phase === selectedPhase);
  }, [selectedPhase]);
  
  const [selectedCategory, setSelectedCategory] = useState<ApiCategory | null>(filteredCategories[0] ?? null);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(filteredCategories[0] ?? null);
    }
  };

  const handleSelectCategory = (category: ApiCategory) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSelectPhase = (phase: FilterPhase) => {
    setSelectedPhase(phase);
    // After filtering, select the first category from the new list
    const newFilteredCategories = API_CATEGORIES.filter(cat => phase === 'All' || cat.phase === phase);
    setSelectedCategory(newFilteredCategories[0] ?? null);
    setSearchQuery(''); 
  };

  const phaseCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All': API_CATEGORIES.length,
      'Phase 1': 0,
      'Phase 2': 0,
      'Phase 3': 0,
    };
    API_CATEGORIES.forEach(category => {
      counts[category.phase]++;
    });
    return counts as Record<FilterPhase, number>;
  }, []);
  
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar
        categories={filteredCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        phaseCounts={phaseCounts}
        selectedPhase={selectedPhase}
        onSelectPhase={handleSelectPhase}
      />
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white tracking-tight">CRM API Reference</h1>
            <p className="mt-2 text-lg text-gray-400">
              Explore the full list of APIs for our Generative AI-powered CRM platform.
            </p>
            <div className="mt-6">
              <SearchBar value={searchQuery} onChange={handleSearchChange} />
            </div>
          </header>
          {searchQuery ? (
            <SearchResults query={searchQuery} />
          ) : (
            <ApiContent category={selectedCategory} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
