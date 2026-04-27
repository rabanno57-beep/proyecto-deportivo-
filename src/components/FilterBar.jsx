import React from 'react';
import { Search, MapPin, Activity } from 'lucide-react';
import { municipalities, sports } from '../data/mockData';

export default function FilterBar({ 
  searchTerm, setSearchTerm, 
  selectedSport, setSelectedSport, 
  selectedMunicipality, setSelectedMunicipality 
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-8 -mt-4 relative z-30 max-w-5xl mx-auto mx-4 lg:mx-auto border border-slate-100">
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 bg-slate-50 hover:bg-slate-100 transition-colors text-sm"
            placeholder="Buscar club o academia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Sport Dropdown */}
        <div className="md:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 bg-slate-50 hover:bg-slate-100 transition-colors text-sm appearance-none"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            <option value="">Todos los Deportes</option>
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        {/* Municipality Dropdown */}
        <div className="md:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 bg-slate-50 hover:bg-slate-100 transition-colors text-sm appearance-none"
            value={selectedMunicipality}
            onChange={(e) => setSelectedMunicipality(e.target.value)}
          >
            <option value="">Todos los Municipios</option>
            {municipalities.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

      </div>
    </div>
  );
}
