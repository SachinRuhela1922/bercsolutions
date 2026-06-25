import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Infrastructure.css";

function Infrastructure() {
  return (
    <>
      <Navbar />
      <main className="infra-page">
        {/* Hero Section */}
        <section className="infra-hero">
          <div className="infra-container">
            <div className="infra-hero-content">
              <h1>Our Infrastructure</h1>
              <p>
                We provide complete power solutions including Solar Panels, 
                Inverters, Generators, and Batteries for homes and businesses
              </p>
              <div className="infra-hero-buttons">
                <button className="infra-btn-primary">Get a Quote</button>
                <button className="infra-btn-secondary">View Products</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="infra-stats">
          <div className="infra-container">
            <div className="infra-stats-grid">
              <div className="infra-stat">
                <span className="infra-stat-number">10,000+</span>
                <span className="infra-stat-label">Happy Customers</span>
              </div>
              <div className="infra-stat">
                <span className="infra-stat-number">500+</span>
                <span className="infra-stat-label">Projects Completed</span>
              </div>
              <div className="infra-stat">
                <span className="infra-stat-number">50+</span>
                <span className="infra-stat-label">Cities Served</span>
              </div>
              <div className="infra-stat">
                <span className="infra-stat-number">24/7</span>
                <span className="infra-stat-label">Technical Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="infra-products">
          <div className="infra-container">
            <h2>Our Products</h2>
            <p className="infra-subtitle">High-quality power solutions for every need</p>
            
            <div className="infra-products-grid">
              <div className="infra-product-card">
                <div className="infra-product-icon">☀️</div>
                <h3>Solar Panels</h3>
                <ul>
                  <li>Monocrystalline & Polycrystalline</li>
                  <li>400W - 600W Capacity</li>
                  <li>25-Year Warranty</li>
                  <li>22% Efficiency</li>
                </ul>
                <span className="infra-product-tag">Best Seller</span>
              </div>

              <div className="infra-product-card">
                <div className="infra-product-icon">⚡</div>
                <h3>Inverters</h3>
                <ul>
                  <li>Pure Sine Wave Technology</li>
                  <li>1kW - 10kW Capacity</li>
                  <li>LCD Display</li>
                  <li>Automatic Voltage Regulation</li>
                </ul>
                <span className="infra-product-tag">Popular</span>
              </div>

              <div className="infra-product-card">
                <div className="infra-product-icon">🔋</div>
                <h3>Batteries</h3>
                <ul>
                  <li>Lithium-ion & Tubular</li>
                  <li>100Ah - 500Ah Capacity</li>
                  <li>Deep Cycle Technology</li>
                  <li>5-Year Performance Warranty</li>
                </ul>
                <span className="infra-product-tag">Long Life</span>
              </div>

              <div className="infra-product-card">
                <div className="infra-product-icon">🔄</div>
                <h3>Generators</h3>
                <ul>
                  <li>Diesel & Petrol Options</li>
                  <li>2kVA - 50kVA Capacity</li>
                  <li>Silent Operation</li>
                  <li>Automatic Start System</li>
                </ul>
                <span className="infra-product-tag">Heavy Duty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="infra-services">
          <div className="infra-container">
            <h2>Our Services</h2>
            <p className="infra-subtitle">Complete support from consultation to installation</p>
            
            <div className="infra-services-grid">
              <div className="infra-service-card">
                <div className="infra-service-icon">📋</div>
                <h3>Free Consultation</h3>
                <p>Expert advice on choosing the right power solution for your needs</p>
              </div>

              <div className="infra-service-card">
                <div className="infra-service-icon">🔧</div>
                <h3>Professional Installation</h3>
                <p>Certified technicians for safe and efficient installation</p>
              </div>

              <div className="infra-service-card">
                <div className="infra-service-icon">🛠️</div>
                <h3>Maintenance & Repair</h3>
                <p>Regular maintenance and quick repair services</p>
              </div>

              <div className="infra-service-card">
                <div className="infra-service-icon">📞</div>
                <h3>24/7 Support</h3>
                <p>Emergency support and customer service always available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="infra-applications">
          <div className="infra-container">
            <h2>Applications</h2>
            <p className="infra-subtitle">Powering every sector with reliable energy solutions</p>
            
            <div className="infra-applications-grid">
              <div className="infra-app-card">
                <span>🏠</span>
                <h3>Residential</h3>
                <p>Home power backup and solar systems</p>
              </div>
              <div className="infra-app-card">
                <span>🏢</span>
                <h3>Commercial</h3>
                <p>Offices, shops, and business establishments</p>
              </div>
              <div className="infra-app-card">
                <span>🏭</span>
                <h3>Industrial</h3>
                <p>Factories, warehouses, and manufacturing units</p>
              </div>
              <div className="infra-app-card">
                <span>🌾</span>
                <h3>Agricultural</h3>
                <p>Farms, irrigation, and rural applications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="infra-whyus">
          <div className="infra-container">
            <h2>Why Choose Us</h2>
            <div className="infra-whyus-grid">
              <div className="infra-whyus-item">
                <span>✅</span>
                <div>
                  <h3>Quality Products</h3>
                  <p>Premium quality products from trusted manufacturers</p>
                </div>
              </div>
              <div className="infra-whyus-item">
                <span>✅</span>
                <div>
                  <h3>Expert Team</h3>
                  <p>Experienced professionals with industry knowledge</p>
                </div>
              </div>
              <div className="infra-whyus-item">
                <span>✅</span>
                <div>
                  <h3>Competitive Pricing</h3>
                  <p>Best prices without compromising on quality</p>
                </div>
              </div>
              <div className="infra-whyus-item">
                <span>✅</span>
                <div>
                  <h3>After Sales Support</h3>
                  <p>Dedicated support for all your post-purchase needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="infra-cta">
          <div className="infra-container">
            <div className="infra-cta-content">
              <h2>Get a Free Consultation Today</h2>
              <p>Contact us for a customized power solution for your home or business</p>
              <button className="infra-btn-primary">Request a Quote</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Infrastructure;