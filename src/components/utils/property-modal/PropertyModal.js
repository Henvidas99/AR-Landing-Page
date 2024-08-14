import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './PropertyModal.css';

const PropertyModal = ({ isOpen, onRequestClose, property, imageRef }) => {
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    if (isOpen && imageRef) {

      const verticalPosition = window.innerHeight * 0.8; 

      setModalStyle({
        top: verticalPosition - 150,
        left: 650 + window.scrollX - 200, 
      });
    }
  }, [isOpen, imageRef]);

  if (!property) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
      contentLabel="Property Details"
      style={{
        content: {
          ...modalStyle,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          width: '400px', 
          maxHeight: '80vh', 
          overflowY: 'auto', 
        },
      }}
      ariaHideApp={false}
    >
      <button onClick={onRequestClose} className="modal-close-button">X</button>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination]}
        className="property-carousel"
      >
        {property.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Property ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default PropertyModal;
