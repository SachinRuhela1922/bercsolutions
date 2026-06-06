import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'

import About from './Routes/About'
import './App.css';

function App() {
  return (

    
    <div className="App">

      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-bg-image"></div>
          <div className="hero-content">
            <h1 className="hero-title">Power Your Future with <span className="highlight">Clean Energy</span></h1>
            <p className="hero-subtitle">Premium Solar Inverters, Panels, Battery Storage & Generators for Homes & Businesses</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Free Consultation →</button>
              <button className="btn-secondary">Explore Products</button>
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
            <h2 className="section-title">About PowerGrid Solutions</h2>
            <p className="section-subtitle">Leading the way in sustainable energy solutions since 2010</p>
            <div className="about-content">
              <div className="about-text">
                <p>PowerGrid Solutions is a premier provider of innovative power solutions, specializing in solar energy systems, advanced inverters, and reliable generators. With over a decade of experience, we've helped thousands of customers achieve energy independence and reduce their carbon footprint.</p>
                <div className="about-features">
                  <div className="feature"><span className="feature-icon">✓</span><span>ISO 9001:2015 Certified</span></div>
                  <div className="feature"><span className="feature-icon">✓</span><span>15+ Years of Excellence</span></div>
                  <div className="feature"><span className="feature-icon">✓</span><span>Pan India Service Network</span></div>
                </div>
              </div>
              <div className="about-stats">
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
            <h2 className="section-title">Our State-of-the-Art Infrastructure</h2>
            <p className="section-subtitle">Modern facilities ensuring quality and innovation</p>
            <div className="infrastructure-grid">
              <div className="infra-card"><div className="infra-icon">🏭</div><h3>Manufacturing Unit</h3><p>75,000 sq. ft. advanced manufacturing facility</p></div>
              <div className="infra-card"><div className="infra-icon">🔬</div><h3>R&D Center</h3><p>Dedicated research lab for cutting-edge solutions</p></div>
              <div className="infra-card"><div className="infra-icon">📦</div><h3>Warehouse</h3><p>Large-scale inventory with 24/7 logistics</p></div>
              <div className="infra-card"><div className="infra-icon">🎓</div><h3>Training Center</h3><p>Professional training for technicians</p></div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section products" style={{backgroundColor: '#ffffff'}}>
          <div className="container">
            <h2 className="section-title">Our Premium Products</h2>
            <p className="section-subtitle">Cutting-edge solutions for all your power needs</p>
            
            <div className="product-category">
              <h3 className="category-title">🔆 Solar Inverters</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/0f766e/ffffff?text=Hybrid+Inverter')"}}></div>
                  <div className="product-info">
                    <h4>Hybrid Inverter</h4>
                    <p>3kW - 10kW capacity with intelligent energy management</p>
                    <ul className="product-features"><li>Wi-Fi monitoring</li><li>10-year warranty</li></ul>
                    <span className="product-badge">Best Seller</span>
                    <div className="product-price">From ₹45,000</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/f59e0b/ffffff?text=Grid-Tie+Inverter')"}}></div>
                  <div className="product-info">
                    <h4>Grid-Tie Inverter</h4>
                    <p>1kW - 100kW for commercial installations</p>
                    <ul className="product-features"><li>98.5% efficiency</li><li>Remote update</li></ul>
                    <div className="product-price">From ₹28,000</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/0d5b54/ffffff?text=Off-Grid+Inverter')"}}></div>
                  <div className="product-info">
                    <h4>Off-Grid Inverter</h4>
                    <p>Perfect for remote locations with battery backup</p>
                    <ul className="product-features"><li>Pure sine wave</li><li>LCD display</li></ul>
                    <div className="product-price">From ₹32,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-category">
              <h3 className="category-title">🟦 Solar Panels</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/1e3a8a/ffffff?text=Mono+Perc')"}}></div>
                  <div className="product-info">
                    <h4>Monocrystalline Panels</h4>
                    <p>Highest efficiency up to 22% | 25-year warranty</p>
                    <div className="product-price">From ₹18,500/piece</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/475569/ffffff?text=Polycrystalline')"}}></div>
                  <div className="product-info">
                    <h4>Polycrystalline Panels</h4>
                    <p>Cost-effective solution with 18% efficiency</p>
                    <div className="product-price">From ₹13,500/piece</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/0f172a/ffffff?text=Bifacial')"}}></div>
                  <div className="product-info">
                    <h4>Bifacial Panels</h4>
                    <p>Dual-side power generation for maximum output</p>
                    <div className="product-price">From ₹24,000/piece</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-category">
              <h3 className="category-title">🔋 Battery Storage</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/2dd4bf/1e293b?text=LiFePO4')"}}></div>
                  <div className="product-info">
                    <h4>Lithium-Ion Batteries</h4>
                    <p>Long life cycle with 10-year warranty</p>
                    <div className="product-price">From ₹85,000</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/334155/ffffff?text=Tubular+Battery')"}}></div>
                  <div className="product-info">
                    <h4>Tubular Batteries</h4>
                    <p>High performance for heavy-duty applications</p>
                    <div className="product-price">From ₹18,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-category">
              <h3 className="category-title">⚡ Power Generators</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/ea580c/ffffff?text=Diesel+Generator')"}}></div>
                  <div className="product-info">
                    <h4>Diesel Generators</h4>
                    <p>5kVA - 500kVA for industrial use</p>
                    <div className="product-price">From ₹65,000</div>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-img-placeholder" style={{backgroundImage: "url('https://placehold.co/400x250/10b981/ffffff?text=Solar+Generator')"}}></div>
                  <div className="product-info">
                    <h4>Solar Generators</h4>
                    <p>Eco-friendly portable power stations</p>
                    <div className="product-price">From ₹32,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="section services" style={{backgroundColor: '#f8fafc'}}>
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive support from consultation to maintenance</p>
            <div className="services-grid">
              <div className="service-card"><div className="service-icon">🔧</div><h3>Professional Installation</h3><p>Expert installation by certified technicians</p><ul><li>Site survey & assessment</li><li>Safety certification</li></ul></div>
              <div className="service-card"><div className="service-icon">🛠️</div><h3>Regular Maintenance</h3><p>Preventive maintenance for optimal performance</p><ul><li>Quarterly inspections</li><li>Performance optimization</li></ul></div>
              <div className="service-card"><div className="service-icon">📞</div><h3>24/7 Technical Support</h3><p>Round-the-clock assistance</p><ul><li>Emergency response</li><li>Remote diagnostics</li></ul></div>
              <div className="service-card"><div className="service-icon">💡</div><h3>Free Consultation</h3><p>Expert advice on power solutions</p><ul><li>Load analysis</li><li>System design</li></ul></div>
              <div className="service-card"><div className="service-icon">🚨</div><h3>Emergency Repair</h3><p>Quick response for breakdowns</p><ul><li>4-hour response time</li><li>Spare parts availability</li></ul></div>
              <div className="service-card"><div className="service-icon">📊</div><h3>Performance Audit</h3><p>Regular system evaluation</p><ul><li>Energy efficiency check</li><li>Cost-saving analysis</li></ul></div>
            </div>
          </div>
        </section>

        {/* Clientele Section */}
        <section id="clientele" className="section clientele" style={{backgroundColor: '#ffffff'}}>
          <div className="container">
            <h2 className="section-title">Trusted By Industry Leaders</h2>
            <p className="section-subtitle">Our prestigious clientele across various sectors</p>
            <div className="clients-grid">
              <div className="client-card">🏭 Tata Group</div><div className="client-card">🏢 Reliance Industries</div>
              <div className="client-card">🏗️ L&T Construction</div><div className="client-card">🏨 Marriott Hotels</div>
              <div className="client-card">🏥 Apollo Hospitals</div><div className="client-card">🏫 Delhi University</div>
              <div className="client-card">🏪 Amazon India</div><div className="client-card">🏢 Infosys</div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section testimonials" style={{backgroundColor: '#f8fafc'}}>
          <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real experiences from satisfied clients</p>
            <div className="testimonials-grid">
              <div className="testimonial-card"><div className="testimonial-content"><p>"PowerGrid Solutions transformed our factory's power infrastructure. Their solar solution reduced our electricity bills by 60%!"</p></div><div className="testimonial-author"><strong>Rajesh Kumar</strong><span>Manufacturing Director</span><div className="rating">★★★★★</div></div></div>
              <div className="testimonial-card"><div className="testimonial-content"><p>"Excellent service and support team. They installed our solar system within 3 days."</p></div><div className="testimonial-author"><strong>Priya Sharma</strong><span>Homeowner</span><div className="rating">★★★★★</div></div></div>
              <div className="testimonial-card"><div className="testimonial-content"><p>"The generator we purchased has been running flawlessly for 2 years."</p></div><div className="testimonial-author"><strong>Mohan Das</strong><span>Hospital Administrator</span><div className="rating">★★★★☆</div></div></div>
            </div>
          </div>
        </section>

        {/* Business Opportunities */}
        <section id="opportunities" className="section opportunities" style={{backgroundColor: '#ffffff'}}>
          <div className="container">
            <h2 className="section-title">Business Opportunities</h2>
            <p className="section-subtitle">Partner with us to grow together</p>
            <div className="opportunities-grid">
              <div className="opportunity-card"><h3>🚀 Become a Dealer</h3><p>Join our dealer network</p><ul><li>High profit margins</li><li>Marketing support</li></ul><button className="opp-btn">Apply Now</button></div>
              <div className="opportunity-card"><h3>🤝 Channel Partners</h3><p>Collaborate for large-scale projects</p><ul><li>Exclusive territories</li><li>Joint marketing</li></ul><button className="opp-btn">Partner With Us</button></div>
              <div className="opportunity-card"><h3>💼 Franchise Opportunity</h3><p>Own a PowerGrid Solutions franchise</p><ul><li>Turnkey setup</li><li>Training & development</li></ul><button className="opp-btn">Get Franchise</button></div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="section support" style={{backgroundColor: '#f8fafc'}}>
          <div className="container">
            <h2 className="section-title">Customer Support</h2>
            <p className="section-subtitle">We're here to help you 24/7</p>
            <div className="support-grid">
              <div className="support-card"><div className="support-icon">📞</div><h3>Call Us</h3><p>+91-8475843925</p></div>
              <div className="support-card"><div className="support-icon">✉️</div><h3>Email Us</h3><p>support@bercsolutions.com</p></div>
              <div className="support-card"><div className="support-icon">💬</div><h3>Live Chat</h3><p>Available 24/7</p></div>
              <div className="support-card"><div className="support-icon">📱</div><h3>WhatsApp</h3><p>+91-847584-3925</p></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact" style={{backgroundColor: '#ffffff'}}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you</p>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="info-item"><span>📍</span><div><strong>Head Office</strong><p>Berc, Sarvodya Colony, Meerut Road Hapur, 245304</p></div></div>
                <div className="info-item"><span>📞</span><div><strong>Phone</strong><p>+91 8475843925</p></div></div>
                <div className="info-item"><span>✉️</span><div><strong>Email</strong><p>info@bercsolutions.com</p></div></div>
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
    </div>
  );
}

export default App;