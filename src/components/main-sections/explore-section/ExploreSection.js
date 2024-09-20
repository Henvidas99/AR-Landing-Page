import React, { useEffect } from 'react';
import './ExploreSection.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css';
import propiedad1Img from '../../../assets/images/explore3.png';
import alienIcon from '../../../assets/images/alien.png';

const propertyIcon = new L.Icon({
  iconUrl: alienIcon, 
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32], 
});

const generateRandomMarkers = (center, count, radius) => {
  const markers = [];

  for (let i = 0; i < count; i++) {
    const randomLat = center[0] + (Math.random() - 0.5) * radius;
    const randomLng = center[1] + (Math.random() - 0.5) * radius;
    const randomPrice = Math.floor(Math.random() * (300000000 - 50000000) + 50000000); 

    markers.push({
      position: [randomLat, randomLng],
      price: randomPrice.toLocaleString('es-CR'), 
    });
  }

  return markers;
};

const ExploreSection = () => {
  const center = [9.9281, -84.0777];
  const markers = generateRandomMarkers(center, 25, 0.4); 

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(
      '.explore-properties-section h2, .explore-properties-section p, .property-hub, .map-section, .explore-button'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2 
    });

    elementsToAnimate.forEach((element) => observer.observe(element));

    return () => {
      elementsToAnimate.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="explore" className="explore-properties-section">
      <div className="container">
        <h2>Descubre y Comparte Propiedades</h2>
        <p>Explora cientos de propiedades destacadas y publica la tuya para conectarte con potenciales compradores.</p>
        <div className="content">
          <div className="property-hub">
            <img src={propiedad1Img} alt="Propiedad destacada" />
          </div>

          <div className="map-section">
            <MapContainer center={center} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Añadir marcadores con precios aleatorios en colones */}
              {markers.map((marker, index) => (
                <Marker key={index} position={marker.position} icon={propertyIcon}>
                  <Popup>Precio: ₡{marker.price}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <button className="explore-button" onClick={() => window.location.href = 'http://localhost:3002/'}>
          Visita nuestro muro
        </button>
      </div>
    </section>
  );
};

export default ExploreSection;
