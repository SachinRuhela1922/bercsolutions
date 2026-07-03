import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Infrastructure', path: '/infrastructure' },
    
    // { 
    //   name: 'Service', 
    //   path: '/service',
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: 'Installation', href: '#installation' },
    //     { name: 'Maintenance', href: '#maintenance' },
    //     { name: 'Technical Support', href: '#tech-support' },
    //     { name: 'Consultation', href: '#consultation' },
    //     { name: 'Emergency Repair', href: '#emergency' },
    //     { name: 'Performance Audit', href: '#audit' }
    //   ]
    // },
    { name: 'Clientele', path: '/clientele' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'BusinessOpportunities', path: '/opportunities' },
    { name: 'Support', path: '/support' },
    { name: 'Contact us', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleMobileDropdownToggle = (index) => {
    setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="/">
            <div className="logo-content">
              <span className="logo-icon"><img src={logo} alt="" className='logo-image' /></span>
              <span className="logo-text">BERC GROUP</span>
            </div>
          </a>
        </div>

        <div className="nav-links desktop-nav">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.hasDropdown && handleDropdownEnter(index)}
              onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
            >
              <Link to={item.path} className="nav-link">
                {item.name}
                {item.hasDropdown && <span className="dropdown-arrow">▼</span>}
              </Link>
              
              {item.hasDropdown && openDropdown === index && (
                <div className="dropdown-menu">
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <a key={idx} href={dropdownItem.href} className="dropdown-link">
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-container">
            {navItems.map((item, index) => (
              <div key={index} className="mobile-nav-item-wrapper">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`mobile-nav-dropdown-btn ${mobileOpenDropdown === index ? 'active' : ''}`}
                      onClick={() => handleMobileDropdownToggle(index)}
                    >
                      <span>{item.name}</span>
                      <span className="mobile-dropdown-arrow">
                        {mobileOpenDropdown === index ? '▲' : '▼'}
                      </span>
                    </button>
                    <div className={`mobile-dropdown-content ${mobileOpenDropdown === index ? 'open' : ''}`}>
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.path}
                          className="mobile-dropdown-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
