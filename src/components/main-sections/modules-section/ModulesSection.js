
import React from 'react';
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
  return (
    <section id="modules" className="modules-section">
      <div className="container">
        <h2>Nuestros Módulos</h2>
        <p>Descubre los módulos diseñados para mejorar la gestión y eficiencia en el sector inmobiliario:</p>
        <div className="carousel-container">
          <Swiper
            modules={[Navigation,Autoplay]} 
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
            speed= '1000'
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
