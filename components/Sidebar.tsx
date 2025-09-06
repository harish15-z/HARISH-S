import React from 'react';
import type { ApiCategory, FilterPhase } from '../types';

interface SidebarProps {
  categories: ApiCategory[];
  selectedCategory: ApiCategory | null;
  onSelectCategory: (category: ApiCategory) => void;
  phaseCounts: Record<FilterPhase, number>;
  selectedPhase: FilterPhase;
  onSelectPhase: (phase: FilterPhase) => void;
}

const PhaseBadge: React.FC<{ phase: string }> = ({ phase }) => {
  const phaseColors: { [key: string]: string } = {
    'Phase 1': 'bg-green-400/20 text-green-300 ring-green-400/30',
    'Phase 2': 'bg-yellow-400/20 text-yellow-300 ring-yellow-400/30',
    'Phase 3': 'bg-blue-400/20 text-blue-300 ring-blue-400/30',
  };

  return (
    <span className={`ml-auto rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${phaseColors[phase] || 'bg-gray-400/20 text-gray-300 ring-gray-400/30'}`}>
      {phase}
    </span>
  );
};

const PhaseFilter: React.FC<{
  phaseCounts: Record<FilterPhase, number>;
  selectedPhase: FilterPhase;
  onSelectPhase: (phase: FilterPhase) => void;
}> = ({ phaseCounts, selectedPhase, onSelectPhase }) => {
  const phases: FilterPhase[] = ['All', 'Phase 1', 'Phase 2', 'Phase 3'];

  return (
    <div className="px-2 mb-6">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Filter by Phase</h3>
      <div className="flex flex-col space-y-1">
        {phases.map(phase => {
          const isActive = selectedPhase === phase;
          return (
            <button
              key={phase}
              onClick={() => onSelectPhase(phase)}
              className={`flex justify-between items-center w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                isActive
                  ? 'bg-blue-600/20 text-white font-semibold'
                  : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span>{phase}</span>
              <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-blue-500/30 text-blue-200' : 'bg-gray-700 text-gray-300'}`}>
                {phaseCounts[phase] ?? 0}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  phaseCounts,
  selectedPhase,
  onSelectPhase
}) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-gray-900 border-r border-gray-700/50 p-4 flex flex-col">
      <div className="text-white text-2xl font-bold mb-6 px-2">API Categories</div>

      <PhaseFilter 
        phaseCounts={phaseCounts}
        selectedPhase={selectedPhase}
        onSelectPhase={onSelectPhase}
      />
      
      <div className="border-t border-gray-700/50 mx-2 mb-4"></div>

      <nav className="flex flex-col space-y-1 flex-grow overflow-y-auto pr-1">
        {categories.length > 0 ? categories.map((category) => (
          <button
            key={category.title}
            onClick={() => onSelectCategory(category)}
            className={`flex items-center text-left w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
              selectedCategory?.title === category.title
                ? 'bg-blue-600/20 text-white'
                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <span className="mr-3 w-5 h-5">{category.icon}</span>
            <span className="flex-grow">{category.title}</span>
            <PhaseBadge phase={category.phase} />
          </button>
        )) : (
          <div className="px-3 py-2 text-sm text-gray-500 text-center">
            No categories in this phase.
          </div>
        )}
      </nav>
    </aside>
  );
};
