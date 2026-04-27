import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ClubGrid from './components/ClubGrid';
import ClubModal from './components/ClubModal';
import { clubsData } from './data/mockData';

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <Header />
      
      {/* Hero Banner Area */}
      <div className="bg-green-700 w-full h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
          alt="Sports in Tabasco" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-md">
            Encuentra tu equipo ideal en Tabasco
          </h2>
          <p className="text-green-50 text-lg max-w-2xl drop-shadow">
            Explora las mejores academias, clubes y dojos en los 17 municipios del edén.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        <FilterBar 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          selectedSport={selectedSport} setSelectedSport={setSelectedSport}
          selectedMunicipality={selectedMunicipality} setSelectedMunicipality={setSelectedMunicipality}
        />

        <div className="mt-8">
          <ClubGrid clubs={filteredClubs} onClubClick={setSelectedClub} />
        </div>
      </main>

      {/* Modal */}
      {selectedClub && (
        <ClubModal club={selectedClub} onClose={() => setSelectedClub(null)} />
      )}

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Directorio Deportivo Tabasco. Proyecto de demostración.</p>
      </footer>
    </div>
  );
}

export default App;
