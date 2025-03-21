import React from 'react';
import { FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={32} />
            <h1 className="text-2xl font-bold">RESUME BUILDER</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#templates" className="hover:text-purple-200 transition">Templates</a>
              </li>
              <li>
                <a href="#guide" className="hover:text-purple-200 transition">Guide</a>
              </li>
              <li>
                <a href="#builder" className="hover:text-purple-200 transition">Builder</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}