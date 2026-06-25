// App.js

import { useState, useEffect, createContext } from 'react';

import Navbar from '../components/Navbar'
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
    inverters: [
      { id: 1, name: 'Hybrid Inverter', category: 'inverters', price: '₹45,000', oldPrice: '₹55,000', rating: 4.8, reviews: 234, capacity: '3kW - 10kW', warranty: '10-year', efficiency: '96%', features: ['Wi-Fi monitoring', 'Smart energy management', 'Touch LCD display', 'Grid & solar compatible'], description: 'The Hybrid Inverter intelligently manages power from solar panels, batteries, and the grid. Perfect for homes wanting energy independence.', longDescription: 'Our advanced hybrid inverter features real-time energy monitoring, automatic switching between power sources, and seamless battery integration. With 10-year warranty and IP65 rating, it\'s built to last in all weather conditions.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600', 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: 'Best Seller' },
      { id: 2, name: 'Grid-Tie Inverter', category: 'inverters', price: '₹28,000', oldPrice: '₹35,000', rating: 4.6, reviews: 156, capacity: '1kW - 100kW', warranty: '8-year', efficiency: '98.5%', features: ['Remote firmware update', 'Anti-islanding protection', 'Wi-Fi monitoring', 'UL certified'], description: 'Professional grid-tie inverter for commercial installations with highest efficiency.', longDescription: 'Designed for commercial solar installations, this grid-tie inverter offers industry-leading 98.5% efficiency. Features advanced MPPT technology and remote monitoring capabilities.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: '' },
      { id: 3, name: 'Off-Grid Inverter', category: 'inverters', price: '₹32,000', oldPrice: '₹40,000', rating: 4.7, reviews: 189, capacity: '1kW - 15kW', warranty: '8-year', efficiency: '94%', features: ['Pure sine wave', 'LCD display', 'Battery priority mode', 'Generator compatible'], description: 'Perfect for remote locations with battery backup solution.', longDescription: 'Off-grid living made easy with our pure sine wave inverter. Compatible with all battery types and includes generator auto-start feature.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: '' }
    ],
    panels: [
      { id: 4, name: 'Monocrystalline Panels', category: 'panels', price: '₹18,500', oldPrice: '₹22,000', rating: 4.9, reviews: 312, wattage: '540W - 650W', warranty: '25-year', efficiency: '22%', features: ['High efficiency', 'All-black design', 'PID resistant', '25-year linear warranty'], description: 'Highest efficiency panels with premium all-black aesthetics.', longDescription: 'Our monocrystalline panels feature PERC technology and half-cut cells for maximum performance even in low-light conditions.', images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600'], badge: 'Premium' },
      { id: 5, name: 'Polycrystalline Panels', category: 'panels', price: '₹13,500', oldPrice: '₹16,500', rating: 4.5, reviews: 278, wattage: '450W - 550W', warranty: '20-year', efficiency: '18%', features: ['Cost-effective', 'Durable frame', '12-year product warranty'], description: 'Budget-friendly solar panels with reliable performance.', longDescription: 'Perfect for large-scale installations where budget is a priority. These panels offer excellent value without compromising on quality.', images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600'], badge: '' },
      { id: 6, name: 'Bifacial Panels', category: 'panels', price: '₹24,000', oldPrice: '₹30,000', rating: 4.8, reviews: 145, wattage: '550W - 670W', warranty: '30-year', efficiency: '23%', features: ['Dual-side generation', 'Glass-glass design', 'Higher yield', 'Snow shedding'], description: 'Dual-side power generation for maximum output in commercial settings.', longDescription: 'Generate up to 30% more energy with bifacial technology. Ideal for ground-mounted systems and flat roofs with reflective surfaces.', images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600'], badge: 'New' }
    ],
    batteries: [
      { id: 7, name: 'Lithium-Ion Batteries', category: 'batteries', price: '₹85,000', oldPrice: '₹1,05,000', rating: 4.9, reviews: 198, capacity: '5kWh - 15kWh', warranty: '10-year', cycles: '6000+', features: ['Deep discharge', 'BMS protection', 'Wall-mountable', 'Scalable system'], description: 'Modern LiFePO4 battery storage with long cycle life.', longDescription: 'Safe and reliable lithium iron phosphate batteries with integrated BMS. Scalable from 5kWh to 30kWh for complete home backup.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: 'Eco-Friendly' },
      { id: 8, name: 'Tubular Batteries', category: 'batteries', price: '₹18,000', oldPrice: '₹22,000', rating: 4.4, reviews: 423, capacity: '150Ah - 200Ah', warranty: '5-year', cycles: '1500+', features: ['Low maintenance', 'High backup', 'Tall tubular design'], description: 'Heavy-duty lead-acid batteries for high power applications.', longDescription: 'Proven technology with excellent performance in high-temperature conditions. Ideal for areas with frequent power cuts.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: '' }
    ],
    generators: [
      { id: 9, name: 'Diesel Generators', category: 'generators', price: '₹65,000', oldPrice: '₹78,000', rating: 4.6, reviews: 312, capacity: '5kVA - 500kVA', warranty: '3-year', fuel: 'Diesel', features: ['AVR technology', 'Low fuel consumption', 'Auto start/stop', 'Silent operation'], description: 'Industrial-grade diesel generators for continuous power.', longDescription: 'Reliable power backup for industries and commercial complexes. Features advanced AVR for stable voltage and eco-friendly engines.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: 'Industrial' },
      { id: 10, name: 'Solar Generators', category: 'generators', price: '₹32,000', oldPrice: '₹45,000', rating: 4.7, reviews: 167, capacity: '1000W - 5000W', warranty: '2-year', type: 'Portable', features: ['Silent operation', 'Solar ready', 'Multiple outputs', 'LCD display'], description: 'Eco-friendly portable power stations for outdoor and emergency use.', longDescription: 'Clean, silent power for camping, tailgating, or home emergency. Recharge via solar panels or wall outlet in hours.', images: ['https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600'], badge: 'Portable' }
    ]
  };

  const allProducts = [...productsData.inverters, ...productsData.panels, ...productsData.batteries, ...productsData.generators];

  return (
    <UIContext.Provider value={{ openProductDetail, selectedProduct, closeProductDetail }}>
      <div className="App">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-bg-image"></div>
            <div className="hero-content animate-on-scroll">
              <h1 className="hero-title">Power Your Future with <span className="highlight">Clean Energy</span></h1>
              <p className="hero-subtitle">Premium Solar Inverters, Panels, Battery Storage & Generators for Homes & Businesses</p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Free Consultation →</button>
                <button className="btn-secondary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>Explore Products</button>
              </div>
              <div className="hero-stats">
                <div className="stat"><h3>500+</h3><p>Happy Customers</p></div>
                <div className="stat"><h3>150+</h3><p>Projects Completed</p></div>
                <div className="stat"><h3>24/7</h3><p>Technical Support</p></div>
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

          {/* Products Section */}
          <section id="products" className="section products" style={{backgroundColor: '#ffffff'}}>
            <div className="container">
              <h2 className="section-title animate-on-scroll">Our Premium Products</h2>
              <p className="section-subtitle animate-on-scroll">Cutting-edge solutions for all your power needs</p>
              
              <div className="product-category">
                <h3 className="category-title animate-on-scroll">🔆 Solar Inverters</h3>
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
                <h3 className="category-title animate-on-scroll">🟦 Solar Panels</h3>
                <div className="products-grid">
                  {productsData.panels.map(product => (
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
                <h3 className="category-title animate-on-scroll">🔋 Battery Storage</h3>
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

              <div className="product-category">
                <h3 className="category-title animate-on-scroll">⚡ Power Generators</h3>
                <div className="products-grid">
                  {productsData.generators.map(product => (
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