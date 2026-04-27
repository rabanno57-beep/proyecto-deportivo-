import React, { useEffect } from 'react';
import { 
  X, Star, MapPin, Activity, DollarSign, 
  Users, Trophy, MessageCircle, Share2 as Facebook, 
  Camera as Instagram, MessageCircle as WhatsApp, ExternalLink 
} from 'lucide-react';

export default function ClubModal({ club, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  if (!club) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0">
          <img 
            src={club.coverImage} 
            alt={club.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{club.name}</h2>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center"><Activity className="w-5 h-5 mr-1 text-blue-400" /> {club.sport}</span>
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-1 text-green-400" /> {club.municipality}</span>
              <span className="flex items-center"><Star className="w-5 h-5 mr-1 text-yellow-400 fill-yellow-400" /> {club.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Acerca del Club</h3>
              <p className="text-slate-600 leading-relaxed">{club.description}</p>
            </section>

            {/* Coaches */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" /> Entrenadores
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                {club.coaches.map((coach, idx) => (
                  <li key={idx}>{coach}</li>
                ))}
              </ul>
            </section>

            {/* Palmares */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" /> Palmarés Destacado
              </h3>
              <ul className="space-y-3">
                {club.palmares.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-yellow-100 text-yellow-700 p-1 rounded-full mr-3 shrink-0 mt-0.5">
                      <Star className="w-4 h-4 fill-current" />
                    </span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-500" /> Opiniones
              </h3>
              <div className="space-y-4">
                {club.reviews.map((review, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900">{review.user}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.stars ? 'fill-current' : 'text-slate-300'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Info Column */}
          <div className="space-y-6">
            {/* Cost Card */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100 text-center">
              <h4 className="text-green-800 font-medium mb-2">Inversión Mensual</h4>
              <div className="text-4xl font-black text-green-900 mb-1">
                ${club.monthlyCost}
              </div>
              <p className="text-sm text-green-700">Pesos Mexicanos (MXN)</p>
            </div>

            {/* Contact Actions */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 mb-4">Contactar al Club</h4>
              
              {club.socialLinks.whatsapp && (
                <a href={club.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" 
                   className="w-full flex items-center justify-center py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors">
                  <WhatsApp className="w-5 h-5 mr-2" />
                  Mensaje por WhatsApp
                </a>
              )}

              {club.socialLinks.facebook && (
                <a href={club.socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                   className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  <Facebook className="w-5 h-5 mr-2" />
                  Visitar Facebook
                </a>
              )}

              {club.socialLinks.instagram && (
                <a href={club.socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                   className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-colors">
                  <Instagram className="w-5 h-5 mr-2" />
                  Ver Instagram
                </a>
              )}

              {club.locationMap && (
                <a href={club.locationMap} target="_blank" rel="noopener noreferrer" 
                   className="w-full flex items-center justify-center py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium transition-colors mt-4">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  Ver en Google Maps
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
      
      {/* Click outside to close overlay */}
      <div className="absolute inset-0 z-[-1]" onClick={onClose}></div>
    </div>
  );
}
