import React from 'react';
import ClubCard from './ClubCard';
import '../css/ClubGrid.css';

export default function ClubGrid({ clubs, onClubClick }) {
  if (clubs.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">
          <span>😕</span>
        </div>
        <h3 className="no-results-title">No se encontraron resultados</h3>
        <p className="no-results-text">Intenta ajustar los filtros de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="club-grid">
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} onClick={onClubClick} />
      ))}
    </div>
  );
}
