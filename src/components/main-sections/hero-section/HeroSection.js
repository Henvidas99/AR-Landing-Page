import React, { useState, useRef, useEffect } from 'react';
import './HeroSection.css';
import video from '../../../assets/videos/hero1.mp4';
import video2 from '../../../assets/videos/hero2.mp4';
import video3 from '../../../assets/videos/hero3.mp4';
import facebookIcon from '../../../assets/images/facebook.png';
import instagramIcon from '../../../assets/images/insta.png';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); 
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const videos = [video, video2, video3];

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleEnd = () => {
        setIsVideoPlaying(false);
        switchVideoAfterDelay();
      };

      videoElement.addEventListener('ended', handleEnd);
      return () => videoElement.removeEventListener('ended', handleEnd);
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  const handlePlayPauseVideo = () => {
    setIsVideoPlaying(prevState => !prevState);
  };

  const switchVideoAfterDelay = () => {
    setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      setIsVideoPlaying(true);
    }, 10000); // Pausa durante 10 segundos
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoPlaying(true);
        } else {
          setIsVideoPlaying(false);
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
    <div id="hero" className="hero-section" ref={containerRef}>
      <video
        ref={videoRef}
        autoPlay
        className={`hero-video ${isVideoPlaying ? 'visible' : 'hidden'}`}
        muted
        playsInline
        width="100%"
        onClick={handlePlayPauseVideo}
        key={currentVideoIndex}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      
      <div className={`hero-content ${isVideoPlaying ? 'hidden' : 'visible'}`}>
        <h1>Descubre la Nueva Era de la Gestión Inmobiliaria</h1>
        <h2>Alien Realty</h2>
        <p>
          Nuestra aplicación inmobiliaria modular y multiplataforma está diseñada para transformar
          la forma en que las empresas del sector gestionan sus propiedades, coordinan con brokers,
          aseguran transacciones y optimizan sus listados. Accede a una interfaz moderna y
          intuitiva, disponible tanto en web como en dispositivos móviles.
        </p>
        <div className="hero-buttons-container">
          <a href="https://www.instagram.com/alienrealty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" className="instagram-btn">
            <img src={instagramIcon} alt="Instagram" className="hero-icon" />
              Síguenos en Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61555710022289&mibextid=LQQJ4d" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" className="facebook-btn">
            <img src={facebookIcon} alt="Facebook" className="hero-icon" />
              Conoce nuestro Facebook
          </a>
        </div>
      </div>

      <button className="play-video-btn" onClick={handlePlayPauseVideo}>
        {isVideoPlaying ? '❚❚ Pausar Video' : '▶ Reproducir Video'}
      </button>
    </div>
  );
};

export default HeroSection;
