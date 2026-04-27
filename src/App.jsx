import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ClubGrid from './components/ClubGrid';
import ClubModal from './components/ClubModal';
import { clubsData } from './data/mockData';
import './css/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedClub, setSelectedClub] = useState(null);

  // Filter logic
  const filteredClubs = useMemo(() => {
    return clubsData.filter(club => {
      const matchSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          club.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSport = selectedSport === '' || club.sport === selectedSport;
      const matchMunicipality = selectedMunicipality === '' || club.municipality === selectedMunicipality;
      
      return matchSearch && matchSport && matchMunicipality;
    });
  }, [searchTerm, selectedSport, selectedMunicipality]);

  return (
    <div className="app-container">
      <Header />
      
      {/* Hero Banner Area */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
          alt="Sports in Tabasco" 
          className="hero-image"
        />
        <div className="hero-content">
          <h2 className="hero-title">
            Encuentra tu equipo ideal en Tabasco
          </h2>
          <p className="hero-description">
            Explora las mejores academias, clubes y dojos en los 17 municipios del edén.
          </p>
        </div>
      </div>

      <main className="main-wrapper">
        <FilterBar 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          selectedSport={selectedSport} setSelectedSport={setSelectedSport}
          selectedMunicipality={selectedMunicipality} setSelectedMunicipality={setSelectedMunicipality}
        />

        <div className="grid-container">
          <ClubGrid clubs={filteredClubs} onClubClick={setSelectedClub} />
        </div>
      </main>

      {/* Modal */}
      {selectedClub && (
        <ClubModal club={selectedClub} onClose={() => setSelectedClub(null)} />
      )}

      {/* Footer */}
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Directorio Deportivo Tabasco. Proyecto de demostración.</p>
      </footer>
    </div>
  );
}

export default App;
