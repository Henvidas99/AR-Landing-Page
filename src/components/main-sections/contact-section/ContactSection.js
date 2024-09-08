import React, { useEffect, useRef, useState } from 'react';
import './ContactSection.css';
import { sendMessage } from '../../../services/clientService.js'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const ContactSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneClient: '',
    comments: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(formData);
      toast.success('Mensaje enviado correctamente!', {
        position: 'top-center',
        autoClose: 6000,
        hideProgressBar: true,
        theme: 'colored'
      });
      setFormData({ fullName: '', email: '', phoneClient: '', comments: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      toast.error('Hubo un error al enviar el mensaje.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 6000,
        hideProgressBar: true,
        theme: 'colored'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div 
        className={`container ${isVisible ? 'visible' : ''}`} 
        ref={containerRef}
      >
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Nombre Completo"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneClient"
            placeholder="Teléfono"
            value={formData.phoneClient}
            onChange={handleChange}
            required
          />
          <textarea
            name="comments"
            placeholder="Mensaje"
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ToastContainer /> {/* Añade el ToastContainer aquí */}
    </section>
  );
};

export default ContactSection;
