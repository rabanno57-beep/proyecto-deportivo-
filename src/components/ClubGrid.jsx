import React from 'react';
import ClubCard from './ClubCard';

export default function ClubGrid({ clubs, onClubClick }) {
  if (clubs.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
          <span className="text-2xl">😕</span>
        </div>
        <h3 className="text-xl font-medium text-slate-900 mb-2">No se encontraron resultados</h3>
        <p className="text-slate-500">Intenta ajustar los filtros de búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
      {clubs.map(club => (
        <ClubCard key={club.id} club={club} onClick={onClubClick} />
      ))}
    </div>
  );
}
