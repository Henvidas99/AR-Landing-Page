import { useEffect } from 'react';
import ModuleCard from '../../utils/module-card/ModuleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './ModulesSection.css';
import propiedadImg from '../../../assets/images/add-property.png';
import brokerImg from '../../../assets/images/broker2.png';
import crmImg from '../../../assets/images/crm.png';
import citasImg from '../../../assets/images/schedule.png';
import listImg from '../../../assets/images/list.png';

const modules = [
  {
    title: 'Inventario de Propiedades',
    description: 'Registra, actualiza y lleva el control de tus propiedades mediante una interfaz intuitiva y fácil de usar.',
    imgSrc: propiedadImg
  },
  {
    title: 'Red de Brokers',
    description: 'Gestiona perfiles de brokers con su información de contacto y ubicación para una búsqueda eficiente.',
    imgSrc: brokerImg
  },
  {
    title: 'CRM',
    description: 'Gestiona la información de los clientes, seguimiento, historial de interacciones y análisis de datos.',
    imgSrc: crmImg
  },
  {
    title: 'Gestión de Citas',
    description: 'Programa visitas a las propiedades, mediante calendarios, recordatorios y confirmaciones de citas.',
    imgSrc: citasImg
  },
  {
    title: 'Listado de Propiedades',
    description: 'Explora y gestiona la publicación y actualización de propiedades en venta o alquiler ',
    imgSrc: listImg
  }
];

const ModulesSection = () => {
  useEffect(() => {
    const section = document.querySelector('.modules-section');
    const h2 = document.querySelector('.modules-section h2');
    const p = document.querySelector('.modules-section .subtitle');
    const carouselContainer = document.querySelector('.carousel-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Activar animación de todos los elementos internos
          h2.classList.add('visible');
          setTimeout(() => p.classList.add('visible'), 200);
          setTimeout(() => carouselContainer.classList.add('visible'), 400);
          observer.unobserve(entry.target); // Solo se activa la animación una vez
        }
      });
    }, {
      threshold: 0.5
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="modules" className="modules-section">
      <div className="container">
        <h2>Nuestros Módulos</h2>
        <p className='subtitle'>Descubre los módulos diseñados para mejorar la gestión y eficiencia en el sector inmobiliario:</p>
        <div className="carousel-container">
          <Swiper
            modules={[Navigation, Autoplay]} 
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="module-carousel"
            navigation
            pagination={{ clickable: true }}
            speed='1000'
            autoplay={{
              delay: 3500, 
              disableOnInteraction: true, 
            }}
          >
            {modules.map((module, index) => (
              <SwiperSlide key={index}>
                <ModuleCard
                  title={module.title}
                  description={module.description}
                  imgSrc={module.imgSrc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
