// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div id="hero" className="hero-section" >
      <div className="hero-content">
        <h1>Descubre la Nueva Era de la Gestión Inmobiliaria</h1>
        <h2>Alien Realty</h2>
        <p>
          Nuestra aplicación inmobiliaria modular y multiplataforma está diseñada para transformar
          la forma en que las empresas del sector gestionan sus propiedades, coordinan con brokers,
          aseguran transacciones y optimizan sus listados. Accede a una interfaz moderna y
          intuitiva, disponible tanto en web como en dispositivos móviles.
        </p>
        <button className="hero-btn">Obtén Alien Realty Ahora</button>
      </div>
    </div>
  );
};

export default HeroSection;
