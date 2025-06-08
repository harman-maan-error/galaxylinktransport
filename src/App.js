import React, { useState, useEffect } from 'react';
import { Truck, MapPin, Clock, Shield, Phone, Mail, Menu, X, ChevronRight, Award, Building, Mountain, Home } from 'lucide-react';
import './App.css';
import QuoteForm from './QuoteForm';

const DumpTruckWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Building className="service-icon" />,
      title: "Construction Material",
      description: "Sand, gravel, crushed stone, and aggregate delivery for construction projects of all sizes."
    },
    {
      icon: <Mountain className="service-icon" />,
      title: "Excavation Support",
      description: "Dirt removal, fill material delivery, and excavation cleanup services."
    },
    {
      icon: <Home className="service-icon" />,
      title: "Residential Delivery",
      description: "Topsoil, mulch, decorative stone, and landscaping material delivery to your home."
    },
    {
      icon: <Truck className="service-icon" />,
      title: "Commercial Hauling",
      description: "Large-scale material transport for commercial and industrial construction projects."
    }
  ];

  const stats = [
    { number: "5K+", label: "Loads Delivered", icon: <Truck className="stat-icon" /> },
    { number: "25+", label: "Dump Trucks", icon: <Building className="stat-icon" /> },
    { number: "98%", label: "On-Time Delivery", icon: <Clock className="stat-icon" /> },
    { number: "10+", label: "Years Experience", icon: <Award className="stat-icon" /> }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <div className="brand-icon">
                <Truck className="truck-icon" />
              </div>
              <span className="brand-text">GalaxyLink Transport</span>
            </div>
            
            <div className="nav-menu desktop-menu">
              <div className="nav-links">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                  >
                    {item}
                    <span className="nav-underline"></span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mobile-menu-button">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-toggle"
              >
                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-pattern"></div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-title-container">
                <h1 className="hero-title">
                  <br />
                  <span className="hero-title-main">Dump Truck</span>
                  <span className="hero-title-main">Services</span>
                </h1>
                <p className="hero-description">
                  Professional material delivery and hauling services. From construction sites to residential projects, we move what you need, when you need it.
                </p>
              </div>
              
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.href = "#quote"}
                >
                  Get Quote
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => window.location.href = "#services"}
                >
                  View Services
                </button>
              </div>
            </div>
            
            <div className="hero-card-container">
              <div className="hero-card-background"></div>
              <div className="hero-card">
                <div className="hero-card-content">
                  <div className="hero-card-header">
                    <h3 className="hero-card-title">Current Job</h3>
                    <div className="status-indicator"></div>
                  </div>
                  
                  <div className="hero-card-details">
                    <div className="detail-item">
                      <MapPin className="detail-icon location-icon" />
                      <div className="detail-text">
                        <div className="detail-title">Delivery Location</div>
                        <div className="detail-subtitle">Downtown Construction Site</div>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <Building className="detail-icon material-icon" />
                      <div className="detail-text">
                        <div className="detail-title">Material</div>
                        <div className="detail-subtitle">15 tons crushed gravel</div>
                      </div>
                    </div>
                    
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                    </div>
                    
                    <div className="progress-text">Progress: 83% Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-background"></div>
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-title-highlight">Our Services</span>
            </h2>
            <p className="section-description">
              Professional dump truck services for construction, landscaping, and residential projects throughout the region.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${isVisible.services ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-icon-container">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-learn-more">
                  <span className="learn-more-text"><a href='#quote'>Learn More</a></span>
                  <ChevronRight className="learn-more-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-container">
                <div className="stat-card">
                  <div className="stat-icon-container">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-title-container">
                <h2 className="about-title">
                  <span className="about-title-highlight">Why Choose</span>
                  <br />
                  <span className="about-title-main">GalaxyLink Transport?</span>
                </h2>
                <p className="about-description">
                  With over 10 years of experience in material hauling, we're your trusted partner for reliable dump truck services. Our modern fleet and professional drivers ensure your materials arrive safely and on time.
                </p>
              </div>
              
              <div className="about-features">
                {[
                  { icon: <Truck className="feature-icon" />, title: "Modern Fleet", desc: "Well-maintained trucks with various load capacities" },
                  { icon: <Shield className="feature-icon" />, title: "Fully Insured", desc: "Complete coverage for your peace of mind" },
                  { icon: <Award className="feature-icon" />, title: "Licensed & Certified", desc: "Professional drivers with clean driving records" }
                ].map((item, index) => (
                  <div key={index} className="about-feature">
                    <div className="about-feature-icon">{item.icon}</div>
                    <div className="about-feature-content">
                      <h3 className="about-feature-title">{item.title}</h3>
                      <p className="about-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fleet-card-container">
              <div className="fleet-card-background"></div>
              <div className="fleet-card">
                <div className="fleet-card-content">
                  <h3 className="fleet-card-title">Fleet Overview</h3>
                  
                  <div className="fleet-stats">
                    <div className="fleet-stat orange">
                      <div className="fleet-stat-number">25</div>
                      <div className="fleet-stat-label">Dump Trucks</div>
                    </div>
                    <div className="fleet-stat green">
                      <div className="fleet-stat-number">10+</div>
                      <div className="fleet-stat-label">Years Service</div>
                    </div>
                  </div>
                  
                  <div className="fleet-availability">
                    <div className="availability-header">
                      <span className="availability-label">Fleet Availability</span>
                      <span className="availability-value">92%</span>
                    </div>
                    <div className="availability-bar">
                      <div className="availability-fill"></div>
                    </div>
                  </div>
                  
                  <div className="fleet-info">
                    Truck sizes from 10-yard to 20-yard capacity available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="section-title-highlight">Get A Quote</span>
            </h2>
            <p className="section-description">
              Ready to get your materials delivered? Contact us for a free quote and let us handle your hauling needs.
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                {[
                  { icon: <Phone className="contact-icon" />, title: "Call Us", info: "204-922-0087" },
                  { icon: <Mail className="contact-icon" />, title: "Email Us", info: "galaxylinktransport99@gmail.com" },
                  { icon: <MapPin className="contact-icon" />, title: "Service Area", info: "Manitoba/Winnipeg" }
                ].map((contact, index) => (
                  <div key={index} className="contact-detail">
                    <div className="contact-detail-icon">{contact.icon}</div>
                    <div className="contact-detail-content">
                      <h3 className="contact-detail-title">{contact.title}</h3>
                      <p className="contact-detail-info">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="same-day-card">
                <h3 className="same-day-title">Same-Day Service Available</h3>
                <p className="same-day-text">
                  Need materials delivered today? Call us before 2 PM for same-day delivery service*
                </p>
             <button
                className="btn btn-primary"
                onClick={() => window.location.href = 'tel:2049220087'}
              >
                Call Now!
              </button>
              </div>
            </div>
            
            <div id="quote" className="quote-form-container">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-brand-header">
                <div className="footer-brand-icon">
                  <Truck className="footer-truck-icon" />
                </div>
                <span className="footer-brand-text">GalaxyLink Transport</span>
              </div>
              <p className="footer-brand-description">
                Professional dump truck services for construction, landscaping, and residential projects.
              </p>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Services</h3>
              <ul className="footer-links">
                <li><a href="#quote" className="footer-link">Construction Material</a></li>
                <li><a href="#quote" className="footer-link">Excavation Support</a></li>
                <li><a href="#quote" className="footer-link">Residential Delivery</a></li>
                <li><a href="#quote" className="footer-link">Commercial Hauling</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Materials</h3>
              <ul className="footer-links">
                <li><a href="#quote" className="footer-link">Play Sand & Inch and Half Black granite</a></li>
                <li><a href="#quote" className="footer-link">River Rock</a></li>
                <li><a href="#quote" className="footer-link">Half Inch Limestone</a></li>
                <li><a href="#quote" className="footer-link">Red creek inch and half</a></li>
                <li><a href="#quote" className="footer-link">Sod and Soil</a></li>
                <li><a href="#quote" className="footer-link">Mulch & Clean Fill</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-section-title">Contact</h3>
              <ul className="footer-links">
                <li><a href="tel:2049220087" className="footer-link"><strong>(204)922-0087</strong></a></li>
                <li><i><a href="mailto:galaxylinktransport99@gmail.com" className="footer-link">galaxylinktransport99@gmail.com</a></i></li>
                <li>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=117+Margate+Rd,+Winnipeg,+MB+R2P1B1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-link"
                  ><i>117 Margate Rd, Winnipeg, MB R2P1B1</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-content">
              <p>&copy; 2025 GalaxyLink Transport Ltd. All rights reserved. | Licensed & Insured | Serving Manitoba</p>
              <div className="footer-logo">
                <img src="./logo.png" alt="Company Logo" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DumpTruckWebsite;