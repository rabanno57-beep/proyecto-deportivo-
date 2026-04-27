import React from 'react';
import { Star, MapPin, Activity, DollarSign } from 'lucide-react';
import '../css/ClubCard.css';

export default function ClubCard({ club, onClick }) {
  return (
    <div className="club-card" onClick={() => onClick(club)}>
      {/* Image Container */}
      <div className="card-image-container">
        <img 
          src={club.coverImage} 
          alt={club.name} 
          className="card-image"
        />
        <div className="card-rating-badge">
          <Star className="rating-star" />
          <span className="rating-value">{club.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="card-content">
        <h3 className="card-title line-clamp-1">{club.name}</h3>
        
        <div className="card-info-list">
          <div className="card-info-item">
            <Activity className="card-info-icon icon-blue" />
            <span>{club.sport}</span>
          </div>
          <div className="card-info-item">
            <MapPin className="card-info-icon icon-green" />
            <span>{club.municipality}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div className="card-price">
            <DollarSign className="icon-sm" />
            <span>{club.monthlyCost} <span className="price-period">/mes</span></span>
          </div>
          <button className="card-action-text">
            Ver detalles &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
