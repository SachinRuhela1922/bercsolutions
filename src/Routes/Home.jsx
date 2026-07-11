// Home.jsx - Enhanced Hero Section with More Content

import { useState, useEffect, createContext, useRef } from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import '../App.css';
import Footer from '../components/Footer';
import Chatbot from '../Routes/Chatbot';

// Create context for product modal/sidebar
export const UIContext = createContext();

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [counters, setCounters] = useState({ customers: 0, projects: 0, satisfaction: 0 });
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const counterRef = useRef(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetail = () => {
    setIsSidebarOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
    document.body.style.overflow = 'auto';
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) closeProductDetail();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isSidebarOpen]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Counter animation for hero stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounterVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isCounterVisible) return;

    const duration = 2000;
    const startTime = Date.now();
    const targetCustomers = 500;
    const targetProjects = 150;
    const targetSatisfaction = 99;

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        customers: Math.floor(easeOut * targetCustomers),
        projects: Math.floor(easeOut * targetProjects),
        satisfaction: Math.floor(easeOut * targetSatisfaction)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    animateCounter();
  }, [isCounterVisible]);

  const productsData = {
    // ... (keep your existing productsData)
    "voltage": [
      {
        "id": 1,
        "name": "Single Phase Servo Voltage Stabilizer",
        "category": "voltage",
        "rating": 4.8,
        "reviews": 234,
        "capacity": "1 KVA – 150 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "96%",
        "features": [
          "Automatic voltage correction",
          "Indoor installation",
          "High & Low voltage cut-off",
          "Bypass switch",
          "Low maintenance",
          "Precision voltage regulation",
          "Reliable performance",
          "Suitable for continuous operation"
        ],
        "description": "Best Electric Single Phase Servo Voltage Stabilizer is specially designed for continuous indoor use. It automatically maintains constant output voltage even when input voltage fluctuates.",
        "longDescription": "Best Electric Single Phase Servo Voltage Stabilizer is specially designed for continuous indoor use. It automatically maintains constant output voltage even when input voltage fluctuates. It is suitable for residential, commercial and industrial applications requiring stable power supply.",
        "images": [
          "https://res.cloudinary.com/dvjpc8yfu/image/upload/v1783581054/file_000000007058720987094cd123eb0306_n895xj.png",
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
        ],
        "badge": "Best Seller",
        "specifications": {
          "Capacity": "1 KVA – 150 KVA",
          "Input Voltage": "140V – 270V AC",
          "Output Voltage": "230V ±1%",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Quasi Sine Wave",
          "Cut-Off": "High & Low Output Side with Bypass"
        }
      },
      {
        "id": 2,
        "name": "Three Phase Servo Voltage Stabilizer",
        "category": "voltage",
        "rating": 4.7,
        "reviews": 189,
        "capacity": "3 KVA – 2000 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "97%",
        "features": [
          "Three phase voltage correction",
          "Heavy duty industrial design",
          "High & Low voltage protection",
          "Indoor installation",
          "Continuous operation",
          "Low maintenance"
        ],
        "description": "Designed for industrial applications, the Three Phase Servo Voltage Stabilizer automatically regulates fluctuating voltage and delivers balanced output for heavy electrical equipment.",
        "longDescription": "Designed for industrial applications, the Three Phase Servo Voltage Stabilizer automatically regulates fluctuating voltage and delivers balanced output for heavy electrical equipment.",
        "images": [
          "https://5.imimg.com/data5/SELLER/Default/2023/9/345609079/LQ/GP/YT/934195/three-phase-servo-voltage-stabilizer-500x500.jpg"
        ],
        "badge": "Industrial",
        "specifications": {
          "Capacity": "3 KVA – 2000 KVA",
          "Input Voltage": "300V – 470V AC",
          "Output Voltage": "415V ±5%",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Quasi Sine Wave",
          "DC Voltage": "12V / 24V / 48V",
          "Cut-Off": "High & Low Output Side with Bypass"
        }
      },
      {
        "id": 3,
        "name": "Automatic Voltage Stabilizer",
        "category": "voltage",
        "rating": 4.5,
        "reviews": 312,
        "capacity": "1 KVA, 2 KVA, 3 KVA, 5 KVA, 7 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "92%",
        "features": [
          "Automatic voltage correction",
          "Fast response",
          "Compact design",
          "Energy efficient",
          "Low maintenance",
          "Suitable for home & commercial use"
        ],
        "description": "Automatic Voltage Stabilizer maintains proper voltage for domestic and commercial appliances like refrigerators, televisions, air conditioners, pumps and lighting systems.",
        "longDescription": "Automatic Voltage Stabilizer maintains proper voltage for domestic and commercial appliances like refrigerators, televisions, air conditioners, pumps and lighting systems.",
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hf_v2sUO9USGUCAxcX6q8sHaMtzTbYJTTheZiGOlWg&s=10"
        ],
        "badge": "",
        "specifications": {
          "Capacity": "1 KVA, 2 KVA, 3 KVA, 5 KVA, 7 KVA",
          "Input Voltage": "90V – 280V AC",
          "Output Voltage": "200V – 240V ±10%",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Sine Wave"
        }
      }
    ],
    "upssystems": [
      {
        "id": 4,
        "name": "Online UPS System",
        "category": "ups",
        "rating": 4.9,
        "reviews": 156,
        "capacity": "1 KVA – 50 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "95%",
        "features": [
          "True Online Technology",
          "Zero transfer time",
          "Pure sine wave output",
          "Battery charging system",
          "Reliable backup",
          "High efficiency"
        ],
        "description": "Best Electric Online UPS provides uninterrupted power with zero transfer time. It continuously supplies power through the inverter while charging batteries simultaneously.",
        "longDescription": "Best Electric Online UPS provides uninterrupted power with zero transfer time. It continuously supplies power through the inverter while charging batteries simultaneously.",
        "images": [
          "https://ejq4r5ztkxr.exactdn.com/wp-content/uploads/2018/01/Line-Interactive-UPS.jpg"
        ],
        "badge": "Premium",
        "specifications": {
          "Capacity": "1 KVA – 50 KVA",
          "Input Voltage": "180V – 270V AC",
          "Output Voltage": "230V AC",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Sine Wave",
          "Backup Time": "10–30 Minutes",
          "DC Voltage": "96V / 120V / 180V / 360V DC",
          "Indicators": "Mains, Charging, UPS ON, Battery Low",
          "Alarms": "Mains Fail, Battery Low"
        }
      },
      {
        "id": 5,
        "name": "Offline UPS System",
        "category": "ups",
        "rating": 4.3,
        "reviews": 423,
        "capacity": "500VA, 800VA, 1250VA, 1600VA, 2000VA",
        "warranty": "2-year with terms applied",
        "efficiency": "88%",
        "features": [
          "Automatic battery switching",
          "Fast transfer time",
          "PWM & MOSFET Technology",
          "Quasi sine wave output",
          "Battery protection",
          "Reliable backup"
        ],
        "description": "Offline UPS automatically switches to battery during power failure and protects equipment against voltage fluctuations.",
        "longDescription": "Offline UPS automatically switches to battery during power failure and protects equipment against voltage fluctuations.",
        "images": [
          "https://5.imimg.com/data5/SELLER/Default/2024/7/438230904/AK/CL/EH/1747765/offline-ups-system-500x500.jpg"
        ],
        "badge": "",
        "specifications": {
          "Capacity": "500VA, 800VA, 1250VA, 1600VA, 2000VA",
          "Input Voltage": "180V – 270V AC",
          "Output Voltage": "220V – 240V AC",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Transfer Time": "4 ms",
          "Backup Time": "10–30 Minutes",
          "Output Waveform": "Quasi Sine Wave",
          "DC Voltage": "12V / 24V / 48V"
        }
      }
    ],
    "inverters": [
      {
        "id": 6,
        "name": "Sine Wave Inverter",
        "category": "inverters",
        "rating": 4.6,
        "reviews": 278,
        "capacity": "300VA – 1000 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "90%",
        "features": [
          "PWM Technology",
          "Constant Voltage & Current Charging",
          "Fully Automatic",
          "Low Maintenance",
          "Silent Operation",
          "Pollution Free",
          "Indoor Installation",
          "Auto Reset",
          "Battery Protection",
          "Overload Protection",
          "Short Circuit Protection"
        ],
        "description": "Best Electric Sine Wave Inverter provides uninterrupted backup power for homes, hospitals and commercial establishments.",
        "longDescription": "Best Electric Sine Wave Inverter provides uninterrupted backup power for homes, hospitals and commercial establishments. It converts DC power into AC power with automatic charging and overload protection.",
        "images": [
          "https://m.media-amazon.com/images/I/71aAeTd5jbL._AC_SL1500_.jpg"
        ],
        "badge": "Best Seller",
        "specifications": {
          "Capacity": "300VA – 1000 KVA",
          "Input Voltage": "230V AC",
          "Output Voltage": "230V AC",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Quasi Sine Wave",
          "Protections": "Battery Short Circuit, Overload, Low Battery, Over Charging",
          "Indicators": "Low Battery, Charging, Overload, Charged, Inverter ON, Mains ON"
        }
      }
    ],
    "transformers": [
      {
        "id": 7,
        "name": "Isolation Transformer",
        "category": "transformers",
        "rating": 4.7,
        "reviews": 167,
        "capacity": "1 KVA – 2000 KVA",
        "warranty": "2-year with terms applied",
        "efficiency": "98%",
        "features": [
          "Complete electrical isolation",
          "Shock protection",
          "Heavy-duty construction",
          "Automatic operation",
          "Low maintenance",
          "Long service life"
        ],
        "description": "Isolation Transformers electrically isolate the power input from the output to protect sensitive equipment from electrical noise and shocks.",
        "longDescription": "Isolation Transformers electrically isolate the power input from the output to protect sensitive equipment from electrical noise and shocks.",
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPARWu0q7HScRhMEtdfZhm1x-cwl0HhcuVHKpsCgKP3g&s"
        ],
        "badge": "",
        "specifications": {
          "Capacity": "1 KVA – 2000 KVA",
          "Input Voltage": "230V AC",
          "Output Voltage": "230V AC",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Quasi Sine Wave"
        }
      }
    ],
    "powers": [
      {
        "id": 8,
        "name": "Automatic Phase Sequence Corrector",
        "category": "power",
        "rating": 4.5,
        "reviews": 134,
        "capacity": "10 Amp – 1000 Amp",
        "warranty": "2-year with terms applied",
        "efficiency": "99%",
        "features": [
          "Automatic phase correction",
          "Prevents motor damage",
          "Suitable for lifts & motors",
          "Industrial use",
          "Reliable operation",
          "Low maintenance"
        ],
        "description": "This device automatically corrects wrong phase sequence in three-phase supply, preventing equipment damage and reducing production downtime.",
        "longDescription": "This device automatically corrects wrong phase sequence in three-phase supply, preventing equipment damage and reducing production downtime.",
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRknKsrScIlVcKxp2KZfxG7qf2DenOtvYxY0TyAaDYPZoJedmnRfFdpyq&s=10"
        ],
        "badge": "Industrial",
        "specifications": {
          "Capacity": "10 Amp – 1000 Amp",
          "Input Voltage": "340V – 480V AC",
          "Output Voltage": "340V – 480V AC",
          "Input Frequency": "50Hz ±10%",
          "Output Frequency": "50Hz ±1%",
          "Output Waveform": "Quasi Sine Wave"
        }
      },
      {
        "id": 9,
        "name": "Automatic Phase & Neutral Balancing System",
        "category": "power",
        "rating": 4.9,
        "reviews": 89,
        "capacity": "415V, 3 Phase + Neutral, 4 Wire",
        "warranty": "2-year with terms applied",
        "efficiency": "95%",
        "features": [
          "Equalizes phase voltage",
          "Reduces neutral current",
          "Generates third phase if one phase fails",
          "Prevents neutral failure hazards",
          "Energy saving",
          "Digital monitoring",
          "Overload protection",
          "Short circuit protection"
        ],
        "description": "The Automatic Phase & Neutral Balancing System improves power quality by balancing phase voltages, reducing neutral current and protecting sensitive electrical equipment.",
        "longDescription": "The Automatic Phase & Neutral Balancing System improves power quality by balancing phase voltages, reducing neutral current and protecting sensitive electrical equipment.",
        "images": [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a6eYr-QPC_lFBWp3VL2yYBJgDbtZLdxBjEo18Bb-ZeJ8UMeKtd2ay6s&s=10"
        ],
        "badge": "Premium",
        "specifications": {
          "Input Supply": "415V, 3 Phase + Neutral, 4 Wire",
          "Frequency": "50Hz ±5%",
          "Working Principle": "Magnetic Symmetry",
          "Phase Angle": "Maintains 120°",
          "Neutral Protection": "Yes",
          "Phase Equalization": "Reduces imbalance by 40–60%",
          "Third Phase Generation": "Yes",
          "Energy Saving": "Yes",
          "Overload Protection": "MCCB/MCB",
          "Neutral Current Protection": "Yes",
          "Display": "Digital 7-Segment Auto Scanning (Voltage, Current & Frequency)",
          "Cooling Type": "Oil Cooled (ONAN)",
          "Oil Moisture Protection": "Silica Gel Breather"
        }
      }
    ],
    "batteries": [
      {
        "id": 10,
        "name": "Battery Range",
        "category": "batteries",
        "rating": 4.4,
        "reviews": 567,
        "capacity": "12V 7Ah to 12V 200Ah",
        "warranty": "2-year with terms applied",
        "efficiency": "90%",
        "features": [
          "SMF Batteries",
          "Tubular Batteries",
          "Authorized dealer for Exide",
          "Authorized dealer for Amaron",
          "Deep discharge",
          "Long life"
        ],
        "description": "Premium quality SMF and Tubular batteries for all UPS and inverter applications. Authorized dealer for Exide and Amaron.",
        "longDescription": "Premium quality SMF and Tubular batteries for all UPS and inverter applications. Authorized dealer for Exide and Amaron. Available in voltage range 12V 7Ah to 12V 200Ah.",
        "images": [
          "https://res.cloudinary.com/dvjpc8yfu/image/upload/v1783581054/file_00000000489872078aaa960783ae1e3b_j3tba2.png"
        ],
        "badge": "",
        "specifications": {
          "Voltage Range": "12V 7Ah to 12V 200Ah",
          "Types": "SMF Batteries, Tubular Batteries",
          "Brands": "Exide, Amaron"
        }
      }
    ]
  };

  const allProducts = [...productsData.voltage, ...productsData.upssystems, ...productsData.inverters, ...productsData.transformers, ...productsData.powers, ...productsData.batteries];

  return (
    <UIContext.Provider value={{ openProductDetail, selectedProduct, closeProductDetail }}>
      <div className="App">
        <Navbar />
        <Chatbot />

        <main>
          {/* Enhanced Hero Section with More Content */}
          <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-bg-image"></div>

            {/* Animated Gradient Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            {/* Floating Particles */}
            <div className="particles">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="particle" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  opacity: Math.random() * 0.5 + 0.1
                }}></div>
              ))}
            </div>

            <div className="hero-content">
              <div className="hero-badge">
                ⚡ Powering Innovation Since 2010
                <span className="badge-pulse"></span>
              </div>

              <h1 className="hero-title">
                <span className="word">Power</span>
                <span className="word">Your</span>
                <span className="word">Future</span>
                <span className="word">with</span>
                <span className="word highlight">Clean</span>
                <span className="word highlight">Energy</span>
              </h1>

              <p className="hero-subtitle">
                Premium Stabilizers, UPS Systems, Inverters &amp; Battery Storage
                <span className="typewriter">  &nbsp;for Homes &amp; Businesses</span>
              </p>

              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>ISO 9001:2015</span>
                </div>
                <div className="trust-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Certified Quality</span>
                </div>
                <div className="trust-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>

              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Products
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Floating Product Showcase */}
              <div className="floating-products">
                <div className="floating-product float-1">
                  <span className="fp-icon">⚡</span>
                  <span className="fp-label">Stabilizers</span>
                </div>
                <div className="floating-product float-2">
                  <span className="fp-icon">🔋</span>
                  <span className="fp-label">UPS Systems</span>
                </div>
                <div className="floating-product float-3">
                  <span className="fp-icon">🔄</span>
                  <span className="fp-label">Inverters</span>
                </div>
                <div className="floating-product float-4">
                  <span className="fp-icon">⚙️</span>
                  <span className="fp-label">Transformers</span>
                </div>
              </div>

              {/* Enhanced Stats with Animated Counters */}
              <div className="hero-stats" ref={counterRef}>
                <div className="stat">
                  <h3>
                    <span className="counter">{counters.customers}</span>
                    <span className="counter-suffix">+</span>
                  </h3>
                  <p>Happy Customers</p>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div className="stat">
                  <h3>
                    <span className="counter">{counters.projects}</span>
                    <span className="counter-suffix">+</span>
                  </h3>
                  <p>Projects Completed</p>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="stat">
                  <h3>
                    <span className="counter">{counters.satisfaction}</span>
                    <span className="counter-suffix">%</span>
                  </h3>
                  <p>Customer Satisfaction</p>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: '99%' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="hero-info-bar">
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Pan India Service Network</span>
                </div>
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>15+ Years Experience</span>
                </div>
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Warranty up to 10 Years</span>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <span>Scroll to Explore</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="section products">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Our Collection</span>
                <h2 className="section-title">Premium Power Solutions</h2>
                <p className="section-subtitle">Cutting-edge technology for all your energy needs</p>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Voltage Stabilizers</h3>
                <div className="products-grid">
                  {productsData.voltage.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">🟦 UPS Systems</h3>
                <div className="products-grid">
                  {productsData.upssystems.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">🔼 Inverters</h3>
                <div className="products-grid">
                  {productsData.inverters.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Transformers</h3>
                <div className="products-grid">
                  {productsData.transformers.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Power Management Systems</h3>
                <div className="products-grid">
                  {productsData.powers.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Batteries</h3>
                <div className="products-grid">
                  {productsData.batteries.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
                      <div className="product-info">
                        <div className="product-rating">
                          <span>★</span> {product.rating} ({product.reviews} reviews)
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>
                          View Details <span>→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="section about">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">About Us</span>
                <h2 className="section-title">Powering Progress Since 2010</h2>
                <p className="section-subtitle">Leading the way in sustainable energy solutions</p>
              </div>
              <div className="about-content">
                <div className="about-text animate-on-scroll">
                  <p>BERC Group is a premier provider of innovative power solutions, specializing in solar energy systems, advanced inverters, and reliable generators. With over a decade of experience, we've helped thousands of customers achieve energy independence and reduce their carbon footprint.</p>
                  <div className="about-features">
                    <div className="feature"><span className="feature-icon">✓</span><span>ISO 9001:2015 Certified</span></div>
                    <div className="feature"><span className="feature-icon">✓</span><span>15+ Years of Excellence</span></div>
                    <div className="feature"><span className="feature-icon">✓</span><span>Pan India Service Network</span></div>
                  </div>
                </div>
                <div className="about-stats animate-on-scroll">
                  <div className="stat-card"><h4>80+</h4><p>Expert Engineers</p></div>
                  <div className="stat-card"><h4>2500+</h4><p>Installations</p></div>
                  <div className="stat-card"><h4>99%</h4><p>Customer Satisfaction</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* Infrastructure Section */}
          <section id="infrastructure" className="section infrastructure">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Infrastructure</span>
                <h2 className="section-title">State-of-the-Art Facilities</h2>
                <p className="section-subtitle">Modern facilities ensuring quality and innovation</p>
              </div>
              <div className="infrastructure-grid">
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🏭</div><h3>Manufacturing Unit</h3><p>75,000 sq. ft. advanced manufacturing facility</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🔬</div><h3>R&D Center</h3><p>Dedicated research lab for cutting-edge solutions</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">📦</div><h3>Warehouse</h3><p>Large-scale inventory with 24/7 logistics</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🎓</div><h3>Training Center</h3><p>Professional training for technicians</p></div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="service" className="section services">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Services</span>
                <h2 className="section-title">Comprehensive Support</h2>
                <p className="section-subtitle">From consultation to maintenance, we've got you covered</p>
              </div>
              <div className="services-grid">
                <div className="service-card animate-on-scroll"><div className="service-icon">🔧</div><h3>Professional Installation</h3><p>Expert installation by certified technicians</p><ul><li>Site survey & assessment</li><li>Safety certification</li></ul></div>
                <div className="service-card animate-on-scroll"><div className="service-icon">🛠️</div><h3>Regular Maintenance</h3><p>Preventive maintenance for optimal performance</p><ul><li>Quarterly inspections</li><li>Performance optimization</li></ul></div>
                <div className="service-card animate-on-scroll"><div className="service-icon">📞</div><h3>24/7 Technical Support</h3><p>Round-the-clock assistance</p><ul><li>Emergency response</li><li>Remote diagnostics</li></ul></div>
                <div className="service-card animate-on-scroll"><div className="service-icon">💡</div><h3>Free Consultation</h3><p>Expert advice on power solutions</p><ul><li>Load analysis</li><li>System design</li></ul></div>
                <div className="service-card animate-on-scroll"><div className="service-icon">🚨</div><h3>Emergency Repair</h3><p>Quick response for breakdowns</p><ul><li>4-hour response time</li><li>Spare parts availability</li></ul></div>
                <div className="service-card animate-on-scroll"><div className="service-icon">📊</div><h3>Performance Audit</h3><p>Regular system evaluation</p><ul><li>Energy efficiency check</li><li>Cost-saving analysis</li></ul></div>
              </div>
            </div>
          </section>

          {/* Clientele Section */}
          <section id="clientele" className="section clientele">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Our Clients</span>
                <h2 className="section-title">Trusted By Industry Leaders</h2>
                <p className="section-subtitle">Our prestigious clientele across various sectors</p>
              </div>
              <div className="clients-grid">
                <div className="client-card animate-on-scroll">🏭 Muthoot Finance Limited</div>
                <div className="client-card animate-on-scroll">🏢 State Bank of India</div>
                <div className="client-card animate-on-scroll">🏗️ Muthoot Homefin India Limited</div>
                <div className="client-card animate-on-scroll">🏨 Satya Microcapital Pvt. Ltd.</div>
                <div className="client-card animate-on-scroll">🏥 Shri Narayan Hospital</div>
                
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="section testimonials">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Testimonials</span>
                <h2 className="section-title">What Our Customers Say</h2>
                <p className="section-subtitle">Real experiences from satisfied clients</p>
              </div>
              <div className="testimonials-grid">
                <div className="testimonial-card animate-on-scroll">
                  <div className="testimonial-content">
                    <p>"BERC Group transformed our factory's power infrastructure. Their solar solution reduced our electricity bills by 60%!"</p>
                  </div>
                  <div className="testimonial-author">
                    <strong>Rajesh Kumar</strong>
                    <span>Manufacturing Director</span>
                    <div className="rating">★★★★★</div>
                  </div>
                </div>
                <div className="testimonial-card animate-on-scroll">
                  <div className="testimonial-content">
                    <p>"Excellent service and support team. They installed our solar system within 3 days."</p>
                  </div>
                  <div className="testimonial-author">
                    <strong>Priya Sharma</strong>
                    <span>Homeowner</span>
                    <div className="rating">★★★★★</div>
                  </div>
                </div>
                <div className="testimonial-card animate-on-scroll">
                  <div className="testimonial-content">
                    <p>"The generator we purchased has been running flawlessly for 2 years."</p>
                  </div>
                  <div className="testimonial-author">
                    <strong>Mohan Das</strong>
                    <span>Hospital Administrator</span>
                    <div className="rating">★★★★☆</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Business Opportunities */}
          <section id="opportunities" className="section opportunities">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Partnerships</span>
                <h2 className="section-title">Business Opportunities</h2>
                <p className="section-subtitle">Partner with us to grow together</p>
              </div>
              <div className="opportunities-grid">
                <div className="opportunity-card animate-on-scroll"><h3>🚀 Become a Dealer</h3><p>Join our dealer network</p><ul><li>High profit margins</li><li>Marketing support</li></ul><button className="opp-btn">Apply Now</button></div>
                <div className="opportunity-card animate-on-scroll"><h3>🤝 Channel Partners</h3><p>Collaborate for large-scale projects</p><ul><li>Exclusive territories</li><li>Joint marketing</li></ul><button className="opp-btn">Partner With Us</button></div>
                </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="section support">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Support</span>
                <h2 className="section-title">Customer Support</h2>
                <p className="section-subtitle">We're here to help you 24/7</p>
              </div>
              <div className="support-grid">
                <div className="support-card animate-on-scroll"><div className="support-icon">📞</div><h3>Call Us</h3><p>+91-9760401780, +91-9873890236</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">✉️</div><h3>Email Us</h3><p>bestelectricrepairingcenter@gmail.com</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">💬</div><h3>Live Chat</h3><p>Available 24/7</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">📱</div><h3>WhatsApp</h3><p>+91-9760401780</p></div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section contact">
            <div className="container">
              <div className="section-header animate-on-scroll">
                <span className="section-tag">Contact</span>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">We'd love to hear from you</p>
              </div>
              <div className="contact-wrapper animate-on-scroll">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <div className="info-item"><span>📍</span><div><strong>Head Office</strong><p>Best Electric & Repairing Center, Sarvodaya Colony, Meerut Road, Hapur - 245101</p></div></div>
                  <div className="info-item"><span>📞</span><div><strong>Phone</strong><p>+91 9760401780, +91 9873890236</p></div></div>
                  <div className="info-item"><span>✉️</span><div><strong>Email</strong><p>bestelectricrepairingcenter@gmail.com</p></div></div>
                  <div className="working-hours"><h4>Working Hours</h4><p>Monday - Friday: 9:00 AM - 7:00 PM</p><p>Saturday: 10:00 AM - 5:00 PM</p></div>
                </div>
                <form
                  className="contact-form"
                  action="https://formsubmit.co/io.sachinruhela@gmail.com"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form Submission - Berc Group"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.bercgroup.in/thankyou"
                  />

                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Your Name"
                    required
                  />

                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />

                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                  />

                  <select name="Service">
                    <option value="">Select Service</option>
                    <option>Solar Installation</option>
                    <option>Generator Purchase</option>
                    <option>Servo Stabilizer Purchase</option>
                    <option>Transformer Purchase</option>
                    <option>Servo Stabilizer Installation</option>
                    <option>Transformer Installation</option>
                  </select>

                  <textarea
                    name="Message"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>

                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        {/* Product Detail Sidebar */}
        <ProductDetail product={selectedProduct} isOpen={isSidebarOpen} onClose={closeProductDetail} />
      </div>
    </UIContext.Provider>
  );
}

export default Home;

