import React, { useEffect } from 'react';
import { 
  X, Star, MapPin, Activity, DollarSign, 
  Users, Trophy, MessageCircle, Share2 as Facebook, 
  Camera as Instagram, MessageCircle as WhatsApp, ExternalLink 
} from 'lucide-react';
import '../css/ClubModal.css';

export default function ClubModal({ club, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  if (!club) return null;

  return (
    <div className="modal-overlay">
      <div 
        className="modal-container"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="modal-close-btn"
        >
          <X className="icon-lg" />
        </button>

        {/* Header Image */}
        <div className="modal-header-image-container">
          <img 
            src={club.coverImage} 
            alt={club.name} 
            className="modal-header-image"
          />
          <div className="modal-header-overlay"></div>
          <div className="modal-header-content">
            <h2 className="modal-title">{club.name}</h2>
            <div className="modal-meta-list">
              <span className="modal-meta-item"><Activity className="icon-md icon-blue-light" /> {club.sport}</span>
              <span className="modal-meta-item"><MapPin className="icon-md icon-green-light" /> {club.municipality}</span>
              <span className="modal-meta-item"><Star className="icon-md icon-yellow-light" /> {club.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="modal-body">
          
          {/* Main Content Column */}
          <div className="modal-main-content">
            {/* Description */}
            <section>
              <h3 className="modal-section-title">Acerca del Club</h3>
              <p className="modal-section-text">{club.description}</p>
            </section>

            {/* Coaches */}
            <section>
              <h3 className="modal-section-title">
                <Users className="icon-md icon-green-dark" /> Entrenadores
              </h3>
              <ul className="modal-list">
                {club.coaches.map((coach, idx) => (
                  <li key={idx}>{coach}</li>
                ))}
              </ul>
            </section>

            {/* Palmares */}
            <section>
              <h3 className="modal-section-title">
                <Trophy className="icon-md icon-yellow-dark" /> Palmarés Destacado
              </h3>
              <ul className="modal-achievements-list">
                {club.palmares.map((item, idx) => (
                  <li key={idx} className="modal-achievement-item">
                    <span className="modal-achievement-icon-wrapper">
                      <Star className="icon-sm fill-current" />
                    </span>
                    <span className="modal-section-text">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews */}
            <section>
              <h3 className="modal-section-title">
                <MessageCircle className="icon-md icon-blue-dark" /> Opiniones
              </h3>
              <div className="modal-reviews-list">
                {club.reviews.map((review, idx) => (
                  <div key={idx} className="modal-review-card">
                    <div className="modal-review-header">
                      <span className="modal-review-user">{review.user}</span>
                      <div className="modal-review-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`icon-sm ${i < review.stars ? 'fill-current' : 'icon-muted'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="modal-review-comment">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Info Column */}
          <div className="modal-sidebar">
            {/* Cost Card */}
            <div className="cost-card">
              <h4 className="cost-card-title">Inversión Mensual</h4>
              <div className="cost-card-amount">
                ${club.monthlyCost}
              </div>
              <p className="cost-card-period">Pesos Mexicanos (MXN)</p>
            </div>

            {/* Contact Actions */}
            <div className="contact-section">
              <h4 className="contact-section-title">Contactar al Club</h4>
              
              {club.socialLinks.whatsapp && (
                <a href={club.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" 
                   className="contact-btn contact-btn-whatsapp">
                  <WhatsApp className="icon-md mr-2" />
                  Mensaje por WhatsApp
                </a>
              )}

              {club.socialLinks.facebook && (
                <a href={club.socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                   className="contact-btn contact-btn-facebook">
                  <Facebook className="icon-md mr-2" />
                  Visitar Facebook
                </a>
              )}

              {club.socialLinks.instagram && (
                <a href={club.socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                   className="contact-btn contact-btn-instagram">
                  <Instagram className="icon-md mr-2" />
                  Ver Instagram
                </a>
              )}

              {club.locationMap && (
                <a 
                  href={club.locationMap.startsWith('http') ? club.locationMap : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(club.locationMap + ' ' + club.municipality + ' Tabasco')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-btn contact-btn-maps"
                >
                  <MapPin className="icon-md mr-2 icon-red" />
                  Ver en Google Maps
                  <ExternalLink className="icon-sm ml-2 icon-opacity-50" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
      
      {/* Click outside to close overlay */}
      <div className="modal-click-outside" onClick={onClose}></div>
    </div>
  );
}
