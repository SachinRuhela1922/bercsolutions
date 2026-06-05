import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Power Your Future with Clean Energy</h1>
            <p className="hero-subtitle">Premium Solar Inverters, Panels & Generators for Homes & Businesses</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Free Consultation</button>
              <button className="btn-secondary">Explore Products</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>100+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Technical Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        {/* <section id="about" className="section about">
          <div className="container">
            <h2 className="section-title">About PowerGrid Solutions</h2>
            <p className="section-subtitle">Leading the way in sustainable energy solutions since 2010</p>
            <div className="about-content">
              <div className="about-text">
                <p>PowerGrid Solutions is a premier provider of innovative power solutions, specializing in solar energy systems, advanced inverters, and reliable generators. With over a decade of experience, we've helped thousands of customers achieve energy independence and reduce their carbon footprint.</p>
                <div className="about-features">
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>10+ Years of Excellence</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Pan India Service Network</span>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <h4>50+</h4>
                  <p>Expert Engineers</p>
                </div>
                <div className="stat-card">
                  <h4>1000+</h4>
                  <p>Installations</p>
                </div>
                <div className="stat-card">
                  <h4>98%</h4>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Infrastructure Section */}
        <section id="infrastructure" className="section infrastructure">
          <div className="container">
            <h2 className="section-title">Our State-of-the-Art Infrastructure</h2>
            <p className="section-subtitle">Modern facilities ensuring quality and innovation</p>
            <div className="infrastructure-grid">
              <div className="infra-card">
                <div className="infra-icon">🏭</div>
                <h3>Manufacturing Unit</h3>
                <p>50,000 sq. ft. advanced manufacturing facility with automated assembly lines</p>
              </div>
              <div className="infra-card">
                <div className="infra-icon">🔬</div>
                <h3>R&D Center</h3>
                <p>Dedicated research lab for developing cutting-edge power solutions</p>
              </div>
              <div className="infra-card">
                <div className="infra-icon">📦</div>
                <h3>Warehouse</h3>
                <p>Large-scale inventory management with 24/7 logistics support</p>
              </div>
              <div className="infra-card">
                <div className="infra-icon">🎓</div>
                <h3>Training Center</h3>
                <p>Professional training facility for technicians and partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section products">
          <div className="container">
            <h2 className="section-title">Our Premium Products</h2>
            <p className="section-subtitle">Cutting-edge solutions for all your power needs</p>
            
            <div id="solar-inverters" className="product-category">
              <h3 className="category-title">Solar Inverters</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-icon">🔆</div>
                  <h4>Hybrid Inverter</h4>
                  <p>3kW - 10kW capacity with intelligent energy management</p>
                  <span className="product-badge">Best Seller</span>
                </div>
                <div className="product-card">
                  <div className="product-icon">⚡</div>
                  <h4>Grid-Tie Inverter</h4>
                  <p>1kW - 100kW for commercial solar installations</p>
                </div>
                <div className="product-card">
                  <div className="product-icon">🔋</div>
                  <h4>Off-Grid Inverter</h4>
                  <p>Perfect for remote locations with battery backup</p>
                </div>
              </div>
            </div>

            <div id="solar-panels" className="product-category">
              <h3 className="category-title">Solar Panels</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-icon">🟦</div>
                  <h4>Monocrystalline Panels</h4>
                  <p>Highest efficiency up to 22% | 25-year warranty</p>
                </div>
                <div className="product-card">
                  <div className="product-icon">🟪</div>
                  <h4>Polycrystalline Panels</h4>
                  <p>Cost-effective solution with 18% efficiency</p>
                </div>
                <div className="product-card">
                  <div className="product-icon">🔲</div>
                  <h4>Bifacial Panels</h4>
                  <p>Dual-side power generation for maximum output</p>
                </div>
              </div>
            </div>

            <div id="battery-storage" className="product-category">
              <h3 className="category-title">Battery Storage</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-icon">🔋</div>
                  <h4>Lithium-Ion Batteries</h4>
                  <p>Long life cycle with 10-year warranty</p>
                </div>
                <div className="product-card">
                  <div className="product-icon">⚡</div>
                  <h4>Tubular Batteries</h4>
                  <p>High performance for heavy-duty applications</p>
                </div>
              </div>
            </div>

            <div id="generators" className="product-category">
              <h3 className="category-title">Power Generators</h3>
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-icon">🛢️</div>
                  <h4>Diesel Generators</h4>
                  <p>5kVA - 500kVA for industrial use</p>
                </div>
                <div className="product-card">
                  <div className="product-icon">🌿</div>
                  <h4>Solar Generators</h4>
                  <p>Eco-friendly portable power stations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="section services">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive support from consultation to maintenance</p>
            
            <div className="services-grid">
              <div id="installation" className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Professional Installation</h3>
                <p>Expert installation by certified technicians with quality assurance</p>
                <ul>
                  <li>Site survey & assessment</li>
                  <li>Professional mounting</li>
                  <li>Safety certification</li>
                </ul>
              </div>

              <div id="maintenance" className="service-card">
                <div className="service-icon">🛠️</div>
                <h3>Regular Maintenance</h3>
                <p>Preventive maintenance to ensure optimal performance</p>
                <ul>
                  <li>Quarterly inspections</li>
                  <li>Performance optimization</li>
                  <li>Component replacement</li>
                </ul>
              </div>

              <div id="tech-support" className="service-card">
                <div className="service-icon">📞</div>
                <h3>24/7 Technical Support</h3>
                <p>Round-the-clock assistance for all your power system needs</p>
                <ul>
                  <li>Emergency response</li>
                  <li>Remote diagnostics</li>
                  <li>On-site repairs</li>
                </ul>
              </div>

              <div id="consultation" className="service-card">
                <div className="service-icon">💡</div>
                <h3>Free Consultation</h3>
                <p>Expert advice on choosing the right power solution</p>
                <ul>
                  <li>Load analysis</li>
                  <li>System design</li>
                  <li>ROI calculation</li>
                </ul>
              </div>

              <div id="emergency" className="service-card">
                <div className="service-icon">🚨</div>
                <h3>Emergency Repair</h3>
                <p>Quick response team for urgent breakdowns</p>
                <ul>
                  <li>4-hour response time</li>
                  <li>Spare parts availability</li>
                  <li>Temporary solutions</li>
                </ul>
              </div>

              <div id="audit" className="service-card">
                <div className="service-icon">📊</div>
                <h3>Performance Audit</h3>
                <p>Regular system performance evaluation and reporting</p>
                <ul>
                  <li>Energy efficiency check</li>
                  <li>System upgrade advice</li>
                  <li>Cost-saving analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clientele Section */}
        <section id="clientele" className="section clientele">
          <div className="container">
            <h2 className="section-title">Trusted By Industry Leaders</h2>
            <p className="section-subtitle">Our prestigious clientele across various sectors</p>
            <div className="clients-grid">
              <div className="client-card">🏭 Tata Group</div>
              <div className="client-card">🏢 Reliance Industries</div>
              <div className="client-card">🏗️ L&T Construction</div>
              <div className="client-card">🏨 Marriott Hotels</div>
              <div className="client-card">🏥 Apollo Hospitals</div>
              <div className="client-card">🏫 Delhi University</div>
              <div className="client-card">🏪 Amazon India</div>
              <div className="client-card">🏢 Infosys</div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section testimonials">
          <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real experiences from satisfied clients</p>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"PowerGrid Solutions transformed our factory's power infrastructure. Their solar solution reduced our electricity bills by 60%!"</p>
                </div>
                <div className="testimonial-author">
                  <strong>Rajesh Kumar</strong>
                  <span>Manufacturing Director</span>
                  <div className="rating">★★★★★</div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Excellent service and support team. They installed our solar system within 3 days and provided thorough training."</p>
                </div>
                <div className="testimonial-author">
                  <strong>Priya Sharma</strong>
                  <span>Homeowner</span>
                  <div className="rating">★★★★★</div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"The generator we purchased has been running flawlessly for 2 years. Their maintenance team is very professional."</p>
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

        {/* Business Opportunities Section */}
        <section id="opportunities" className="section opportunities">
          <div className="container">
            <h2 className="section-title">Business Opportunities</h2>
            <p className="section-subtitle">Partner with us to grow together</p>
            <div className="opportunities-grid">
              <div className="opportunity-card">
                <h3>🚀 Become a Dealer</h3>
                <p>Join our dealer network and sell premium power products</p>
                <ul>
                  <li>High profit margins</li>
                  <li>Marketing support</li>
                  <li>Technical training</li>
                </ul>
                <button className="opp-btn">Apply Now</button>
              </div>

              <div className="opportunity-card">
                <h3>🤝 Channel Partners</h3>
                <p>Collaborate with us for large-scale projects</p>
                <ul>
                  <li>Exclusive territories</li>
                  <li>Priority support</li>
                  <li>Joint marketing</li>
                </ul>
                <button className="opp-btn">Partner With Us</button>
              </div>

              <div className="opportunity-card">
                <h3>💼 Franchise Opportunity</h3>
                <p>Own a PowerGrid Solutions franchise</p>
                <ul>
                  <li>Turnkey setup</li>
                  <li>Brand support</li>
                  <li>Training & development</li>
                </ul>
                <button className="opp-btn">Get Franchise</button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="section support">
          <div className="container">
            <h2 className="section-title">Customer Support</h2>
            <p className="section-subtitle">We're here to help you 24/7</p>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">📞</div>
                <h3>Call Us</h3>
                
                <p>Support: +91-8475843925</p>
              </div>

              <div className="support-card">
                <div className="support-icon">✉️</div>
                <h3>Email Us</h3>
                <p>support@bercsolutions.com</p>
                <p>sales@bercsolutions.com</p>
              </div>

              <div className="support-card">
                <div className="support-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Chat with our experts</p>
                <p>Available 24/7</p>
              </div>

              <div className="support-card">
                <div className="support-icon">📱</div>
                <h3>WhatsApp</h3>
                <p>+91-847584-3925</p>
                <p>Quick response within 1 hour</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="section contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you</p>
            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="info-item">
                  <span>📍</span>
                  <div>
                    <strong>Head Office</strong>
                    <p>Berc, Sarvodya Colony, Meerut Road Hapur, 245304</p>
                  </div>
                </div>
                <div className="info-item">
                  <span>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+91 8475843925 </p>
                  </div>
                </div>
                <div className="info-item">
                  <span>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>info@bercsolutions.com</p>
                  </div>
                </div>
                <div className="working-hours">
                  <h4>Working Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed (Emergency support available)</p>
                </div>
              </div>
              
              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Phone Number" />
                <select>
                  <option>Select Service</option>
                  <option>Solar Installation</option>
                  <option>Generator Purchase</option>
                  <option>Maintenance Service</option>
                  <option>General Query</option>
                </select>
                <textarea rows="5" placeholder="Your Message"></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;