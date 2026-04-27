import React from 'react';
import { Search, MapPin, Activity } from 'lucide-react';
import { municipalities, sports } from '../data/mockData';
import '../css/FilterBar.css';

export default function FilterBar({ 
  searchTerm, setSearchTerm, 
  selectedSport, setSelectedSport, 
  selectedMunicipality, setSelectedMunicipality 
}) {
  return (
    <div className="filter-bar-container">
      <div className="filter-flex">
        
        {/* Search Input */}
        <div className="filter-input-wrapper">
          <div className="filter-icon-container">
            <Search className="filter-icon" />
          </div>
          <input
            type="text"
            className="filter-input"
            placeholder="Buscar club o academia..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Sport Dropdown */}
        <div className="filter-dropdown-wrapper">
          <div className="filter-icon-container">
            <Activity className="filter-icon" />
          </div>
          <select
            className="filter-select"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
          >
            <option value="">Todos los Deportes</option>
            {sports.map(sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
          <div className="filter-select-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        {/* Municipality Dropdown */}
        <div className="filter-dropdown-wrapper">
          <div className="filter-icon-container">
            <MapPin className="filter-icon" />
          </div>
          <select
            className="filter-select"
            value={selectedMunicipality}
            onChange={(e) => setSelectedMunicipality(e.target.value)}
          >
            <option value="">Todos los Municipios</option>
            {municipalities.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <div className="filter-select-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

      </div>
    </div>
  );
}
