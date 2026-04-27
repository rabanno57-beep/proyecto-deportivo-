import React from 'react';
import { Map } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-800 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <Map className="h-8 w-8 text-yellow-300" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold tracking-tight">Deportivo Tabasco</h1>
              <p className="text-sm text-green-200 font-medium">Directorio Local de Deportes</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
