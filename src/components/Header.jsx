import React from 'react';
import { Map } from 'lucide-react';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-flex">
          <div className="brand-container">
            <div className="brand-icon-wrapper">
              <Map className="brand-icon" />
            </div>
            <div className="brand-text-wrapper">
              <h1 className="brand-title">Deportivo Tabasco</h1>
              <p className="brand-subtitle">Directorio Local de Deportes</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
