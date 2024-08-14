
import React from 'react';
import './DownloadSection.css';
import androidIcon from '../../../assets/images/android1.png'; 
import iosIcon from '../../../assets/images/ios.png'; 

const DownloadSection = () => {

  return (
    <section id ="download" className="download-section">
      <div className="download-content">
        <h2 className="download-title">¡Descarga Nuestra Aplicación!</h2>
        <p className="download-description">
          Únete a la experiencia y gestiona tus propiedades de manera eficiente desde tu dispositivo móvil.
        </p>
        <div className="download-buttons">
          <a href="https://play.google.com/store/apps" className="download-btn">
            <img src={androidIcon} alt="Descargar en Google Play" className="download-icon" />
            Descargar para Android
          </a>
          <a href="https://apps.apple.com/us/app/" className="download-btn">
            <img src={iosIcon} alt="Descargar en la App Store" className="download-icon" />
            Descargar para IOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
