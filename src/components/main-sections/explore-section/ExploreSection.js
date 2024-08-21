import React, { useState, useEffect } from 'react';
import './ExploreSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import propiedad1Img from '../../../assets/images/propiedades/casa1.jpg';
import propiedad2Img from '../../../assets/images/propiedades/casa8.jpg';
import propiedad3Img from '../../../assets/images/propiedades/casa3.jpeg';
import propiedad4Img from '../../../assets/images/propiedades/casa4.jpeg';
import propiedad5Img from '../../../assets/images/propiedades/casa5.jpeg';
import propiedad6Img from '../../../assets/images/propiedades/casa6.jpeg';

import img1 from '../../../assets/images/propiedades/imagen8.jpeg';
import img2 from '../../../assets/images/propiedades/imagen5.jpeg';
import img3 from '../../../assets/images/propiedades/imagen6.jpeg';
import img4 from '../../../assets/images/propiedades/imagen1.jpeg';
import img5 from '../../../assets/images/propiedades/imagen10.jpeg';
import img6 from '../../../assets/images/propiedades/imagen12.jpeg';
import img7 from '../../../assets/images/propiedades/imagen11.jpeg';
import img8 from '../../../assets/images/propiedades/imagen17.jpeg';
import img9 from '../../../assets/images/propiedades/imagen18.jpeg';
import img10 from '../../../assets/images/propiedades/imagen19.jpeg';
import img11 from '../../../assets/images/propiedades/imagen7.jpeg';
import img12 from '../../../assets/images/propiedades/imagen9.jpeg';
import img13 from '../../../assets/images/propiedades/casa7.jpg';

import broker1Img from '../../../assets/images/brokers/broker1.jpeg';
import broker2Img from '../../../assets/images/brokers/broker2.jpeg';
import broker3Img from '../../../assets/images/brokers/broker3.jpeg';
import broker4Img from '../../../assets/images/brokers/broker4.jpeg';
import broker5Img from '../../../assets/images/brokers/broker5.jpg';
import broker6Img from '../../../assets/images/brokers/broker6.jpg';

import PropertyModal from '../../utils/property-modal/PropertyModal';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const properties = [
  {
    title: 'Propiedad 1',
    description: 'Descripción de la propiedad 1',
    images: [propiedad1Img, img1, img2, img3]
  },
  {
    title: 'Propiedad 2',
    description: 'Descripción de la propiedad 2',
    images: [propiedad2Img, img4, img7, img8]
  },
  {
    title: 'Propiedad 3',
    description: 'Descripción de la propiedad 3',
    images: [propiedad3Img, img5, img6]
  },
  {
    title: 'Propiedad 4',
    description: 'Descripción de la propiedad 4',
    images: [propiedad4Img, img11, img12]
  },
  {
    title: 'Propiedad 5',
    description: 'Descripción de la propiedad 5',
    images: [propiedad5Img, img9, img10]
  },
  {
    title: 'Propiedad 6',
    description: 'Descripción de la propiedad 6',
    images: [propiedad6Img, img13]
  }
];
 

const ExploreSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (property) => {
    setSelectedProperty(property);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProperty(null);
  };

  useEffect(() => {
    const icons = document.querySelectorAll('.explore-properties-brokers-section h2, .explore-properties-brokers-section p, .explore-properties-brokers-section .properties-section, .explore-properties-brokers-section .brokers-section, .explore-properties-brokers-section .property-carousel, .explore-properties-brokers-section .map-section');

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
    <section id="explore" className="explore-properties-brokers-section">
      <div className="container">
        <h2>Explora Propiedades y Brokers</h2>
        <p>Explora nuestras propiedades y conecta con nuestra red de brokers.</p>
        <div className="content">
          <div className="properties-section">
            <h3>Propiedades</h3>
            <div className="properties-gallery">
              {properties.map((property, index) => (
                <img
                  key={index}
                  src={property.images[0]} 
                  alt={`Propiedad ${index + 1}`}
                  onClick={() => openModal(property)}
                />
              ))}
            </div>
          </div>
          <div className="brokers-section">
            <h3>Brokers</h3>
            <div className="brokers-gallery">
              <img src={broker1Img} alt="Broker 1" />
              <img src={broker2Img} alt="Broker 2" />
              <img src={broker3Img} alt="Broker 3" />
              <img src={broker4Img} alt="Broker 4" />
              <img src={broker5Img} alt="Broker 5" />
              <img src={broker6Img} alt="Broker 6" />
            </div>
          </div>
        </div>
        <div className="map-section">
          <MapContainer center={[9.9281, -84.0907]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[9.93333, -84.48333]}>
              <Popup>
                San José, Costa Rica.<br /> Una propiedad destacada.
              </Popup>
            </Marker>
            <Marker position={[9.67633, -83.08633]}>
              <Popup>
                San José, Costa Rica.<br /> Una propiedad destacada.
              </Popup>
            </Marker>
            <Marker position={[9.96633, -84.09133]}>
              <Popup>
                San José, Costa Rica.<br /> Una propiedad destacada.
              </Popup>
            </Marker>
            <Marker position={[9.93333, -85.08333]}>
              <Popup>
                San José, Costa Rica.<br /> Un broker destacado.
              </Popup>
            </Marker>
            <Marker position={[9.93393, -84.08533]}>
              <Popup>
                San José, Costa Rica.<br /> Un broker destacado.
              </Popup>
            </Marker>
            <Marker position={[10.03333, -84.08333]}>
              <Popup>
                San José, Costa Rica.<br /> Un broker destacado.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {selectedProperty && (
        <PropertyModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          property={selectedProperty}
        />
      )}
    </section>
  );
};

export default ExploreSection;
