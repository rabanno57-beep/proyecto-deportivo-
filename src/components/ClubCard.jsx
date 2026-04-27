import React from 'react';
import { Star, MapPin, Activity, DollarSign } from 'lucide-react';

export default function ClubCard({ club, onClick }) {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col h-full border border-slate-100"
      onClick={() => onClick(club)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={club.coverImage} 
          alt={club.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-md">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="text-sm font-bold text-slate-800">{club.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-700 transition-colors line-clamp-1">{club.name}</h3>
        </div>
        
        <div className="space-y-2 mt-2 flex-1">
          <div className="flex items-center text-slate-600 text-sm">
            <Activity className="w-4 h-4 mr-2 text-blue-500" />
            <span>{club.sport}</span>
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-green-500" />
            <span>{club.municipality}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center text-green-700 font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>{club.monthlyCost} <span className="text-xs text-slate-500 font-normal">/mes</span></span>
          </div>
          <button className="text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
            Ver detalles &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
