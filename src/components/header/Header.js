import React, { useState, useEffect } from 'react';
import './Header.css'; 
import logo from '../../assets/images/logo-alien-realty-2.png'; 

const Header = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]); 

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>
        <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a
                href="#hero"
                className={selectedLink === 'hero' ? 'selected' : ''}
                onClick={() => handleLinkClick('hero')}
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#modules"
                className={selectedLink === 'modules' ? 'selected' : ''}
                onClick={() => handleLinkClick('modules')}
              >
                Módulos
              </a>
            </li>
            <li>
              <a
                href="#download"
                className={selectedLink === 'download' ? 'selected' : ''}
                onClick={() => handleLinkClick('download')}
              >
                Descargar App
              </a>
            </li>    
            <li>
              <a
                href="#explore"
                className={selectedLink === 'explore' ? 'selected' : ''}
                onClick={() => handleLinkClick('explore')}
              >
                Explora
              </a>
            </li>       
            <li>
              <a
                href="#contact"
                className={selectedLink === 'contact' ? 'selected' : ''}
                onClick={() => handleLinkClick('contact')}
              >
                Contáctanos
              </a>
            </li>
          </ul>
          <div className="navbar-buttons">
            <a href="http://localhost:3000/login" className="btn btn-primary">Iniciar Sesión</a>
            <a href="http://localhost:3000/verify-email" className="btn btn-secondary">Registrarse</a>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? 'line1' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line2' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'line3' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
