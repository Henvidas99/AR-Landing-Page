import React, { useEffect, useRef, useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar una vez que la sección es visible
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div 
        className={`container ${isVisible ? 'visible' : ''}`} 
        ref={containerRef}
      >
        <h2>Contacto</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
