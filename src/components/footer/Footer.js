// src/components/Footer.js
import React, { useEffect } from 'react';
import './Footer.css';
import { IonIcon } from '@ionic/react';
import { mail, logoFacebook, logoLinkedin } from 'ionicons/icons';
import orbitasLogo from '../../assets/images/orbitas-logo2.png';
import alienLogo from '../../assets/images/logo-alien-realty.png';

const Footer = () => {
  useEffect(() => {
    // Selecciona los elementos a observar
    const elementsToObserve = [
      document.querySelector('.footer-logo'),
      document.querySelector('.footer-info'),
      document.querySelector('.footer-socials')
    ];

    // Crea el IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Desactiva el observer después de la primera vez
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    // Observa los elementos seleccionados
    elementsToObserve.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    // Limpieza del observer al desmontar el componente
    return () => {
      elementsToObserve.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="alien-realty-logo">
            <img src={alienLogo} alt="Alien Realty Logo" />
            <h3>Alien Realty © 2024</h3>
          </div>
          <div className="orbitas-logo">
            <img src={orbitasLogo} alt="Orbitas Logo" />
            <h3>Orbitas Software Development © 2024</h3>
          </div>
        </div>
        <div className="footer-info" id="email">
          <div className="footer-info-section">
            <IonIcon icon={mail} className="icon" />
            <h3>Costa Rica</h3>
          </div>
          <div>
            <a href="mailto:soporte@orbitacr.com">soporte@orbitacr.com</a>
            <a href="mailto:contact@orbitacr.com">contact@orbitacr.com</a>
          </div>
          <hr />
          <div className="footer-info-section">
            <IonIcon icon={mail} className="icon" />
            <h3>Mexico</h3>
          </div>
          <div>
            <a href="mailto:contact_mx@orbitacr.com">contact_mx@orbitacr.com</a>
          </div>
          <hr />
          <div className="footer-info-section">
            <IonIcon icon={mail} className="icon" />
            <h3>United States</h3>
          </div>
          <div>
            <a href="mailto:contact_us@orbitacr.com">contact_us@orbitacr.com</a>
          </div>
        </div>
        <div className="footer-socials" id="socials">
          <h3>Redes Sociales</h3>
          <a href="https://www.facebook.com/Orbitascr">
            <IonIcon icon={logoFacebook} className="icon social-icon" />
          </a>
          <a href="https://www.linkedin.com/showcase/orbitas-software-development/">
            <IonIcon icon={logoLinkedin} className="icon social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
