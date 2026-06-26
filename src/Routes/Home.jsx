// App.js - Complete Updated Version

import { useState, useEffect, createContext } from 'react';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import '../App.css';
import Footer from '../components/Footer';

// Create context for product modal/sidebar
export const UIContext = createContext();

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const productsData = {
    "voltage": [
      {
        "id": 1,
        "name": "Single Phase Servo Voltage Stabilizer",
        "category": "voltage",
        "price": "₹40,000",
        "oldPrice": "₹55,000",
        "rating": 4.8,
        "reviews": 234,
        "capacity": "1 KVA – 150 KVA",
        "warranty": "10-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600",
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
        "price": "₹85,000",
        "oldPrice": "₹1,10,000",
        "rating": 4.7,
        "reviews": 189,
        "capacity": "3 KVA – 2000 KVA",
        "warranty": "10-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹12,000",
        "oldPrice": "₹16,000",
        "rating": 4.5,
        "reviews": 312,
        "capacity": "1 KVA, 2 KVA, 3 KVA, 5 KVA, 7 KVA",
        "warranty": "5-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹55,000",
        "oldPrice": "₹70,000",
        "rating": 4.9,
        "reviews": 156,
        "capacity": "1 KVA – 50 KVA",
        "warranty": "3-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹8,500",
        "oldPrice": "₹12,000",
        "rating": 4.3,
        "reviews": 423,
        "capacity": "500VA, 800VA, 1250VA, 1600VA, 2000VA",
        "warranty": "2-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹15,000",
        "oldPrice": "₹22,000",
        "rating": 4.6,
        "reviews": 278,
        "capacity": "300VA – 1000 KVA",
        "warranty": "5-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹45,000",
        "oldPrice": "₹60,000",
        "rating": 4.7,
        "reviews": 167,
        "capacity": "1 KVA – 2000 KVA",
        "warranty": "8-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹25,000",
        "oldPrice": "₹35,000",
        "rating": 4.5,
        "reviews": 134,
        "capacity": "10 Amp – 1000 Amp",
        "warranty": "3-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹1,25,000",
        "oldPrice": "₹1,60,000",
        "rating": 4.9,
        "reviews": 89,
        "capacity": "415V, 3 Phase + Neutral, 4 Wire",
        "warranty": "5-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        "price": "₹8,000",
        "oldPrice": "₹12,000",
        "rating": 4.4,
        "reviews": 567,
        "capacity": "12V 7Ah to 12V 200Ah",
        "warranty": "3-year",
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
          "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600"
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
        
        <main>
          {/* Hero Section - Enhanced with Animations */}
          <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-bg-image"></div>
            
            {/* Floating Particles */}
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>

            <div className="hero-content">
              <h1 className="hero-title">
                <span className="word">Power</span>
                <span className="word">Your</span>
                <span className="word">Future</span>
                <span className="word">with</span>
                <span className="word highlight">Clean</span>
                <span className="word highlight">Equipment</span>
              </h1>
              <p className="hero-subtitle">
                <span className="typewriter">Premium Stabilizer, UPS, Battery Storage &amp; Inverter for Homes &amp; Businesses</span>
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Free Consultation <i className="fas fa-arrow-right"></i>
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Products <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3>500<span className="counter-suffix">+</span></h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h3>150<span className="counter-suffix">+</span></h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>Technical Support</p>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <span>Scroll</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="section products" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Our Premium Products</h2>
              <p className="section-subtitle animate-on-scroll">Cutting-edge solutions for all your power needs</p>
              
              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Voltage Stabilizers :</h3>
                <div className="products-grid">
                  {productsData.voltage.map(product => (
                    <div key={product.id} className="product-card animate-on-scroll" onClick={() => openProductDetail(product)}>
                      {product.badge && <span className="product-badge">{product.badge}</span>}
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
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
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
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
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
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
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
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
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
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
                      <div className="product-img-placeholder" style={{backgroundImage: `url(${product.images[0]})`}}></div>
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <ul className="product-features">
                          {product.features.slice(0, 2).map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <div className="product-price">{product.price}</div>
                        <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openProductDetail(product); }}>View Details →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="section about" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">About PowerGrid Solutions</h2>
              <p className="section-subtitle animate-on-scroll">Leading the way in sustainable energy solutions since 2010</p>
              <div className="about-content">
                <div className="about-text animate-on-scroll">
                  <p>PowerGrid Solutions is a premier provider of innovative power solutions, specializing in solar energy systems, advanced inverters, and reliable generators. With over a decade of experience, we've helped thousands of customers achieve energy independence and reduce their carbon footprint.</p>
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
          <section id="infrastructure" className="section infrastructure" style={{backgroundColor: '#f8fafc'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Our State-of-the-Art Infrastructure</h2>
              <p className="section-subtitle animate-on-scroll">Modern facilities ensuring quality and innovation</p>
              <div className="infrastructure-grid">
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🏭</div><h3>Manufacturing Unit</h3><p>75,000 sq. ft. advanced manufacturing facility</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🔬</div><h3>R&D Center</h3><p>Dedicated research lab for cutting-edge solutions</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">📦</div><h3>Warehouse</h3><p>Large-scale inventory with 24/7 logistics</p></div>
                <div className="infra-card animate-on-scroll"><div className="infra-icon">🎓</div><h3>Training Center</h3><p>Professional training for technicians</p></div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="service" className="section services" style={{backgroundColor: '#f8fafc'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Our Services</h2>
              <p className="section-subtitle animate-on-scroll">Comprehensive support from consultation to maintenance</p>
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
          <section id="clientele" className="section clientele" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Trusted By Industry Leaders</h2>
              <p className="section-subtitle animate-on-scroll">Our prestigious clientele across various sectors</p>
              <div className="clients-grid">
                <div className="client-card animate-on-scroll">🏭 Tata Group</div><div className="client-card animate-on-scroll">🏢 Reliance Industries</div>
                <div className="client-card animate-on-scroll">🏗️ L&T Construction</div><div className="client-card animate-on-scroll">🏨 Marriott Hotels</div>
                <div className="client-card animate-on-scroll">🏥 Apollo Hospitals</div><div className="client-card animate-on-scroll">🏫 Delhi University</div>
                <div className="client-card animate-on-scroll">🏪 Amazon India</div><div className="client-card animate-on-scroll">🏢 Infosys</div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="section testimonials" style={{backgroundColor: '#f8fafc'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">What Our Customers Say</h2>
              <p className="section-subtitle animate-on-scroll">Real experiences from satisfied clients</p>
              <div className="testimonials-grid">
                <div className="testimonial-card animate-on-scroll"><div className="testimonial-content"><p>"PowerGrid Solutions transformed our factory's power infrastructure. Their solar solution reduced our electricity bills by 60%!"</p></div><div className="testimonial-author"><strong>Rajesh Kumar</strong><span>Manufacturing Director</span><div className="rating">★★★★★</div></div></div>
                <div className="testimonial-card animate-on-scroll"><div className="testimonial-content"><p>"Excellent service and support team. They installed our solar system within 3 days."</p></div><div className="testimonial-author"><strong>Priya Sharma</strong><span>Homeowner</span><div className="rating">★★★★★</div></div></div>
                <div className="testimonial-card animate-on-scroll"><div className="testimonial-content"><p>"The generator we purchased has been running flawlessly for 2 years."</p></div><div className="testimonial-author"><strong>Mohan Das</strong><span>Hospital Administrator</span><div className="rating">★★★★☆</div></div></div>
              </div>
            </div>
          </section>

          {/* Business Opportunities */}
          <section id="opportunities" className="section opportunities" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Business Opportunities</h2>
              <p className="section-subtitle animate-on-scroll">Partner with us to grow together</p>
              <div className="opportunities-grid">
                <div className="opportunity-card animate-on-scroll"><h3>🚀 Become a Dealer</h3><p>Join our dealer network</p><ul><li>High profit margins</li><li>Marketing support</li></ul><button className="opp-btn">Apply Now</button></div>
                <div className="opportunity-card animate-on-scroll"><h3>🤝 Channel Partners</h3><p>Collaborate for large-scale projects</p><ul><li>Exclusive territories</li><li>Joint marketing</li></ul><button className="opp-btn">Partner With Us</button></div>
                <div className="opportunity-card animate-on-scroll"><h3>💼 Franchise Opportunity</h3><p>Own a PowerGrid Solutions franchise</p><ul><li>Turnkey setup</li><li>Training & development</li></ul><button className="opp-btn">Get Franchise</button></div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="section support" style={{backgroundColor: '#f8fafc'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Customer Support</h2>
              <p className="section-subtitle animate-on-scroll">We're here to help you 24/7</p>
              <div className="support-grid">
                <div className="support-card animate-on-scroll"><div className="support-icon">📞</div><h3>Call Us</h3><p>+91-8475843925</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">✉️</div><h3>Email Us</h3><p>support@powergridsolutions.com</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">💬</div><h3>Live Chat</h3><p>Available 24/7</p></div>
                <div className="support-card animate-on-scroll"><div className="support-icon">📱</div><h3>WhatsApp</h3><p>+91-8475843925</p></div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section contact" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Get In Touch</h2>
              <p className="section-subtitle animate-on-scroll">We'd love to hear from you</p>
              <div className="contact-wrapper animate-on-scroll">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <div className="info-item"><span>📍</span><div><strong>Head Office</strong><p>PowerGrid Solutions, Sarvodya Colony, Meerut Road, Hapur, 245304</p></div></div>
                  <div className="info-item"><span>📞</span><div><strong>Phone</strong><p>+91 8475843925</p></div></div>
                  <div className="info-item"><span>✉️</span><div><strong>Email</strong><p>info@powergridsolutions.com</p></div></div>
                  <div className="working-hours"><h4>Working Hours</h4><p>Monday - Friday: 9:00 AM - 7:00 PM</p><p>Saturday: 10:00 AM - 5:00 PM</p></div>
                </div>
                <form className="contact-form">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="tel" placeholder="Phone Number" />
                  <select><option>Select Service</option><option>Solar Installation</option><option>Generator Purchase</option></select>
                  <textarea rows="5" placeholder="Your Message"></textarea>
                  <button type="submit" className="submit-btn">Send Message</button>
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