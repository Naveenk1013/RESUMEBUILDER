import React from 'react';
import type { ResumeTemplate } from '../types';

interface TemplateCardProps {
  template: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
  isSelected: boolean;
}

export function TemplateCard({ template, onSelect, isSelected }: TemplateCardProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        isSelected ? 'ring-4 ring-purple-600' : 'hover:scale-105'
      }`}
      onClick={() => onSelect(template)}
    >
      <img
        src={template.thumbnail}
        alt={template.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{template.name}</h3>
        <p className="text-gray-600 capitalize">{template.category}</p>
      </div>
    </div>
  );
}