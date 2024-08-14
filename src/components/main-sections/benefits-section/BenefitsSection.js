import React, { useEffect } from 'react';
import './BenefitsSection.css';
import efficiencyIcon from '../../../assets/images/operation.png';
import securityIcon from '../../../assets/images/security2.png';
import decisionIcon from '../../../assets/images/take-decision.png';
import communicationIcon from '../../../assets/images/cowork.png';
import serviceIcon from '../../../assets/images/client-service.png';

const benefits = [
  {
    title: 'Eficiencia operativa',
    description: 'Automatiza y optimiza procesos clave.',
    icon: efficiencyIcon
  },
  {
    title: 'Seguridad de la información',
    description: 'Protege datos sensibles y transacciones.',
    icon: securityIcon
  },
  {
    title: 'Facilita la toma de decisiones',
    description: 'Herramientas de análisis y reportes en tiempo real.',
    icon: decisionIcon
  },
  {
    title: 'Mejora la comunicación y colaboración',
    description: 'Facilita la coordinación entre brokers.',
    icon: communicationIcon
  },
  {
    title: 'Mejor servicio al cliente',
    description: 'Gestión ágil y eficiente de propiedades.',
    icon: serviceIcon
  }
];

const BenefitsSection = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.benefit-icon');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.5
    });

    icons.forEach(icon => {
      observer.observe(icon);
    });

    return () => {
      // Clean up the observer on unmount
      icons.forEach(icon => {
        observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <section id="benefits" className="benefits-section">
      <div className="ufo-content">
        <div className="title-container">
          <h2 className="benefits-title">Beneficios</h2>
        </div>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              <span className="benefit-item-text">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
